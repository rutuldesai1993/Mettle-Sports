import React, { Component } from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import firebaseApp from '../Config/FirebaseConfig'
import Styles from './Styles/LoginScreenStyles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Metrics from '../Themes/Metrics'
import RoundedButton from '../Components/RoundedButton'
import getDirections from 'react-native-google-maps-directions'
import Communications from 'react-native-communications';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const background=require("../Images/grass.png")
const mettlesporticon = require("../Images/mettle_box_clean.png");

const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class HomeScreen extends Component {
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}
  constructor(props) {
    super(props)
    this.pitchesRef = firebaseApp.database().ref().child('/pitches');


    this.state = {
      topLogo: { width: Metrics.screenWidth },

      initialPosition:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },

      error: null
    }
  }

  watchId: ?number=null

  componentDidMount() {
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

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogout = () =>{
    const { navigate } = this.props.navigation;
    firebaseApp.auth().signOut().then(()=>{
      this.isAttempting = false
      navigate('firstVideoScreen');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }

//
// renderItem(task) {
//     return (
//       <TouchableOpacity  onPress={() => this.props.navigation.navigate("StartGame", { title:
//             `${task.title}`, address: `${task.address}`, surface: `${task.surface}`, lights: `${task.lights}`,
//             size: `${task.size}`, latitude: `${task.latitude}`, longitude: `${task.longitude}`, createdBy: `${task.createdBy}`, key: `${task._key}` })}>
//         < ListItem task={task} />
//       </TouchableOpacity>
//     );
//   }

handlePressAddPitch = () => {
  const { navigate } = this.props.navigation;
  const { params } = this.props.navigation.state;
  let a = params.title;
  let b = params.address;
  let c = params.surface;
  let d = params.lights;
  let e = params.size;
navigate('StartGame', {
  title : a,
  address: b,
  surface: c,
  lights: d,
  size: e
});


}

  handlePressGetDirections = () => {
    //const { navigate } = this.props.navigation;
    //navigate('pitchesScreen');
    const { params } = this.props.navigation.state;
    //const { latitude, longitude } = this.state;
   // Alert.alert('Location',this.state.initialPosition.latitude.toString())
    const data = {
      source: {

         latitude: parseFloat(this.state.initialPosition.latitude),
         longitude: parseFloat(this.state.initialPosition.longitude)
      },
      destination: {
        latitude: parseFloat(params.latitude),
        longitude: parseFloat(params.longitude)
      },
      params: [
        {
          key: "dirflg",
          value: "d"
        }
      ]
  }
    getDirections(data);
  }

  handlePressPitchDetails = () => {
    const { params } = this.props.navigation.state;
    let a = params.title;
    let b = params.address;
    let c = params.surface;
    let d = params.lights;
    let e = params.size;
    Alert.alert("Pitch Details", "Name:" + a + "\n" + "Address:" + b +"\n"+"Surface:"+c+"\n"+"Lights:"+d+"\n"+"Size:"+e);
  }

    goHome = () => {
      const { navigate } = this.props.navigation;
      navigate('home');
  }

  handlePressReportProblem = () => {
    Alert.alert(
      'Report Problem',
      'Please contact Mettle Sports at info@mettlesports.com or call us at (312) 757-6373 to report a problem with this pitch',
      [
        {text: 'Call', onPress: () => Communications.phonecall('+1 (312) 757-6373', false)},
        {text: 'Send email', onPress: () => Communications.email(['info@mettlesports.com'],null,null,'Problem Report about Pitch','My body text')},
        {text: 'Cancel', onPress: () => console.log('')}
      ],
      { cancelable: false }
    )
  }

  // handlePressContactOwner = () => {
  //   const { params } = this.props.navigation.state;
  //   var owner = params.createdBy;
  //   var phoneno = '';
  //   //alert(owner);
  //   const userId = firebaseApp.auth().currentUser.uid;
  //   firebaseApp.database().ref().child('users').child(userId).on("value", snapshot => {
  //       var phoneno = snapshot.val().phoneNumber;
  //     })


  //     // firebaseApp.database().ref(`/users/nXl3Dnt8EPSeiTgpEl28zx027K22/`).once('value', function(snapshot) {
  //     //     var phoneno = snapshot.val();
  //     //     alert("hello");

  //     // });



  // // usersRef.on('value', function(snapshot) {
  // //      var phonenum = snapshot.val();
  // //       alert("hi" + snapshot.val().phoneNumber);
  // //   });




  //   alert("hi " + phoneno);
  //   //var pitchKey = params.key;
  //   // Alert.alert(
  //   //   'Contact Pitch Owner',
  //   //   'Contact the person who added this pitch if you want to know more details about the pitch',
  //   //   [
  //   //     {text: 'Call', onPress: () => Communications.phonecall('3127576373', true)},
  //   //     {text: 'Send email', onPress: () => Communications.email(['info@mettlesports.com'],null,null,'Problem Report about Pitch','My body text')},
  //   //     {text: 'Cancel', onPress: () => console.log('')}
  //   //   ],
  //   //   { cancelable: false }
  //   // )
  // }

  handlePressDeletePitch = () => {
    const { params } = this.props.navigation.state;
    var user = params.createdBy;
    var pitchKey = params.key;

    if(user == firebaseApp.auth().currentUser.uid)
    {
        Alert.alert(
        'Delete Pitch',
        'Are you sure you want to delete this pitch?',
        [
          {text: 'Cancel', onPress: () => console.log('')},
          {text: 'Yes', onPress: () => this.pitchesRef.child(pitchKey).remove()},
        ],
        { cancelable: false }
      )
    }
    else{
        Alert.alert(
        'Delete Pitch',
        'You do not have permission to delete this Pitch because you did not add this Pitch. Please contact Mettle Sports at info@mettlesports.com or call us at (312) 757-6373 if you want to delete this pitch',
        [
          {text: 'Call', onPress: () => Communications.phonecall('3127576373', true)},
          {text: 'Send email', onPress: () => Communications.email(['info@mettlesports.com'],null,null,'Delete Pitch Request','My body text')},
          {text: 'Cancel', onPress: () => console.log('')}
        ],
        { cancelable: false }
      )
    }
  }


  render() {

    return (
      <Image source={background} style={[Styles.backgroundImage]}>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container]} keyboardShouldPersistTaps='always'>
        <View style={Styles.logoWrapper}>
          <Image source={mettlesporticon} style={[Styles.topLogo, this.state.topLogo]} />
             <TouchableHighlight onPress={this.goHome}>
                  <Text style={Styles.normalTextStyle1}>Home</Text>
              </TouchableHighlight>
          </View>
          <View>
            <View>

                <RoundedButton style={Styles.loginButton} onPress={this.handlePressGetDirections}>
                  Directions
                </RoundedButton>
                <RoundedButton style={Styles.loginButton} onPress={this.handlePressAddPitch}>
                  Start a game in this pitch
                </RoundedButton>
                <RoundedButton style={Styles.loginButton} onPress={this.handlePressPitchDetails}>
                  Pitch Details
                </RoundedButton>
                <RoundedButton style={Styles.loginButton} onPress={this.handlePressReportProblem}>
                  Report Problem
                </RoundedButton>

                <RoundedButton style={Styles.loginButton} onPress={this.handlePressDeletePitch}>
                  Delete This Pitch
                </RoundedButton>
                <RoundedButton style={Styles.loginButton} onPress={this.handlePressLogout}>
                  Logout
                </RoundedButton>
            </View>
          </View>
        </ScrollView>
      </Image>
    )
  }
}
