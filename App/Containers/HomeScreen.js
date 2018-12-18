import React, { Component } from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  AsyncStorage,
  Image,
} from 'react-native'
import firebaseApp from '../Config/FirebaseConfig'
import Styles from './Styles/LoginScreenStyles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Metrics from '../Themes/Metrics'
import RoundedButton from '../Components/RoundedButton'
import Communications from 'react-native-communications';

const background = require("../Images/grass.png")
const mettlesporticon = require("../Images/mettle_box_clean.png");

export default class HomeScreen extends Component {
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}
  constructor(props) {
    super(props)
    this.state = {
      topLogo: { width: Metrics.screenWidth },
    }

  }
  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: { width: 100, height: 70 }
    })
  }
 

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    })
  }
  componentWillMount(){
    this.getUserdata()
  }
  async getUserdata(){
    try {
      const userId = await AsyncStorage.getItem('userId')
 
      if (userId !== null){
      //  Alert.alert('User id from store',userId)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  handlePressLogout = () => {
    const { navigate } = this.props.navigation;
    firebaseApp.auth().signOut().then(() => {
      this.isAttempting = false
      navigate('firstVideoScreen');
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }
  handlePressFindPitch = () => {
    const { navigate } = this.props.navigation;
    navigate('pitchesScreen');
    //.catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    //alert(errorMessage);
    //});
  }
  handlePressAddPitch = () => {
    const { navigate } = this.props.navigation;
    navigate('addPitch');
    //.catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    //alert(errorMessage);
  }
  handlePressRequestPitch = () => {
    const bodyText = "Hey, Mettle Sports I would like to request for a new Pitch. Below are the details of the Pitch."
    Alert.alert(
      'Request a Pitch',
      'Please contact Mettle Sports at info@mettlesports.com or call us at (312) 757-6373 to request for a pitch',
      [
        { text: 'Call', onPress: () => Communications.phonecall('3127576373', true) },
        { text: 'Send email', onPress: () => Communications.email(['info@mettlesports.com'], null, null, 'Request for a new Pitch', bodyText) },
        { text: 'Cancel', onPress: () => console.log('') }
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <Image source={background} style={[Styles.backgroundImage]}>
        <ScrollView contentContainerStyle={{ justifyContent: 'center' }} style={[Styles.container]} keyboardShouldPersistTaps='always'>
          <View style={Styles.logoWrapper}>
            <Image source={mettlesporticon} style={[Styles.topLogo, this.state.topLogo]} />
          </View>
          <View>
            <View>
              <RoundedButton style={Styles.loginButton} accessibilityLabel="Find a pitch to play a game on" onPress={this.handlePressFindPitch}>
                Find a pitch
                </RoundedButton>
              <RoundedButton style={Styles.loginButton} onPress={this.handlePressAddPitch}>
                Add a pitch
                </RoundedButton>
              <RoundedButton style={Styles.loginButton} onPress={this.handlePressRequestPitch}>
                Request a pitch
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
