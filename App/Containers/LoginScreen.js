import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  LayoutAnimation,
  AsyncStorage,
  TouchableHighlight,
  Alert,
  Linking
} from 'react-native'
import Styles from './Styles/LoginScreenStyles'
import Metrics from '../Themes/Metrics'

import firebaseApp from '../Config/FirebaseConfig'
import Icon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import RoundedButton from '../Components/RoundedButton'


const mettlesporticon = require("../Images/mettle_box_clean.png");
const background=require("../Images/grass.png")

class LoginScreen extends React.Component{
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      fbpageid: '687914301415894'
    }
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
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

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    const { navigate } = this.props.navigation;
    firebaseApp.auth().signInWithEmailAndPassword(username, password).then((data)=>{
    // Alert.alert('User data',JSON.stringify(data))
   
      try {
      //  Alert.alert('Data',JSON.stringify(data))
         AsyncStorage.setItem('userId',data.uid);
      } catch (error) {
        Alert.alert('Something went wrong with localstorage')
      }
      this.isAttempting = false
      navigate('home');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }
  handlePressSignup = () => {
    const { navigate } = this.props.navigation;
    navigate('signUp');
  }
  handlePressForgotPassword = () => {
    const { navigate } = this.props.navigation;
    navigate('forgotPass');
  }
  openFacebook = () => {
    Linking.openURL('https://www.facebook.com/MettleSportsStreetSoccer');
  }
  openWebsite = () => {
    Linking.openURL('http://www.mettlesports.com/');
  }
  openYoutube = () => {
    Linking.openURL('https://www.youtube.com/channel/UCP_E-7-h1n4lm9DOtkBYpRA');
  }

  
  
  

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
     
      <Image source={background} style={[Styles.backgroundImage]}>
     
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <KeyboardAvoidingView behavior="position">
        <View style={Styles.logoWrapper}>
          <Image source={mettlesporticon} style={[Styles.topLogo, this.state.topLogo]} />
          </View>
          <View style={Styles.textWrapper}>
            <Text style={Styles.textStyle}>
              Catch the positive spirit of
              </Text>
              <Text style={Styles.textStyle}>
               street soccer near you!
            </Text>
          </View>
            <View style={Styles.form}>
            <View style={Styles.row}>
            <View style={{flexDirection: 'row'}}>
            <View style={Styles.iconWrapper}>
              <FoundationIcon name='torso' size={40} color="#ffffff"/>
              </View>
              <View style={Styles.inputTextWrapper}>
              <TextInput
                ref='username'
                style={textInputStyle}
                value={username}
                editable={editable}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeUsername}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.password.focus()}
                placeholder='Username'>
                </TextInput>
                </View>
            </View>
            </View>
            <View style={Styles.row}>
            <View style={{flexDirection: 'row'}}>
            <View style={Styles.iconWrapper}>
              <FoundationIcon name='key' size={40} color="#ffffff"/>
              </View>
              <View style={Styles.inputTextWrapper}>
              <TextInput
                ref='password'
                style={textInputStyle}
                value={password}
                editable={editable}
                keyboardType='default'
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                onChangeText={this.handleChangePassword}
                underlineColorAndroid='transparent'
                onSubmitEditing={this.handlePressLogin}
                placeholder='Password' />
                </View>
                </View>
            </View>
            </View>
            <View style={Styles.loginButtonWrapper}>
            <TouchableOpacity style={Styles.loginButton} onPress={this.handlePressLogin}>
            <Text style={Styles.loginText}>STEP INSIDE</Text>
            </TouchableOpacity>
            </View>

          <View style={Styles.forgotPassword}>
          <TouchableHighlight onPress={this.handlePressForgotPassword}>
            <Text style={Styles.normalTextStyle}>Forgot Password?</Text>
          </TouchableHighlight>

          </View>
          </KeyboardAvoidingView>
        </ScrollView>
     
      </Image>

    )
  }
}

export default LoginScreen
