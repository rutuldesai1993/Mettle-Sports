import React, { PropTypes } from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import Styles from './Styles/ForgotPassScreenStyles'
import PitchListStyles from './Styles/PitchesListStyles'
import Metrics from '../Themes/Metrics'
import { PermissionsAndroid } from 'react-native';
import RoundedButton from '../Components/RoundedButton'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import firebaseApp from '../Config/FirebaseConfig'
import ListItem from '../Components/ListItem'
import GeoFire from 'geofire'

const background=require("../Images/grass.png")
const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


class PitchesScreen extends React.Component {

  constructor (props) {
    super(props);
    this.pitchesRef = firebaseApp.database().ref().child('/pitches');

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: dataSource,
      parr: [],
      initialPosition:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },

      error: null,
      animating: false,
      hideButton: false,
      visibleHeight: Metrics.screenHeight,
    };
  }
  watchId: ?number=null

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {

        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }

        this.setState({initialPosition : initialRegion})
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

      this.watchId = navigator.geolocation.watchPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var lastRegion = {
          latitude : lat,
          longitude : long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }

        this.setState({initialPosition : lastRegion})

      })
  }

  componentDidMount(){
    this.setState({ animating: true });

    this.setState({ hideButton: true });

    setTimeout( () => { this.closeActivityIndicator(); },2000);

    setTimeout( () => {
         this.listenForTasks(this.pitchesRef);
    },2000);

   }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  closeActivityIndicator = ()=> setTimeout(() => this.setState({
      animating: false }), 2000)



  listenForTasks(pitchesRef) {
    var pitchesArray = [];
    //alert(this.state.initialPosition.latitude + "," + this.state.initialPosition.longitude)
    this.pitchesRef.on('value', (dataSnapshot) => {
    dataSnapshot.forEach((child) => {
      pitchesArray.push({
        title: child.val().title,
        address: child.val().address,
        surface: child.val().surface,
        lights: child.val().lights,
        size: child.val().size,
        latitude: child.val().latitude,
        longitude: child.val().longitude,
        createdBy: child.val().createdBy,
        dist: (GeoFire.distance([this.state.initialPosition.latitude,this.state.initialPosition.longitude], [parseFloat(child.val().latitude), parseFloat(child.val().longitude)]) * 0.621371).toFixed(1),
        _key: child.key
      });
    });
    });

     pitchesArray.sort(function (a,b){
       return parseInt(a.dist) - parseInt(b.dist);
     });

    setTimeout( () => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(pitchesArray)
      });
    },1000);

  }

  // sortJSON = (data, key, way) =>{
  //   return data.sort(function(a, b) {
  //       let x = parseInt(a[key]); let y = parseInt(b[key]);
  //       if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
  //       if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
  //   });
  // }


  renderItem(task) {
    return (
      <TouchableOpacity  onPress={() => this.props.navigation.navigate("singlePitchFunctionsScreen", { title:
            `${task.title}`, address: `${task.address}`, surface: `${task.surface}`, lights: `${task.lights}`, size: `${task.size}`, latitude: `${task.latitude}`, longitude: `${task.longitude}`, createdBy: `${task.createdBy}`, key: `${task._key}` })}>
        < ListItem task={task} />
      </TouchableOpacity>
    );
  }

  handlePressSinglePitch = () =>{
    const { navigate } = this.props.navigation;

    navigate('singlePitchFunctionsScreen');
  }


  render () {
    const animating = this.state.animating
    const hideButton = this.state.hideButton

    return (

        <View style={[PitchListStyles.backgroundImage]}>



        <View style= {PitchListStyles.container}>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[PitchListStyles.container]} keyboardShouldPersistTaps='always'>
          <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={this.renderItem.bind(this)}
              style={PitchListStyles.listView}
          />
        </ScrollView>
        </View>
        <ActivityIndicator
               animating = {animating}
               color = 'white'
               size = "large"
               style = {Styles.activityIndicator}/>
        </View>

    )
  }

}

export default PitchesScreen
