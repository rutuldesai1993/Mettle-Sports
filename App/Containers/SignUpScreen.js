import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
  LayoutAnimation,
  TouchableHighlight
} from 'react-native'
import Styles from './Styles/SignUpScreenStyles'
import Metrics from '../Themes/Metrics'
import RoundedButton from '../Components/RoundedButton'
import firebaseApp from '../Config/FirebaseConfig'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import ImageSlider from 'react-native-image-slider';


const mettlesporticon = require("../Images/Capture.jpg");
const background=require("../Images/grass.png");

const image1=require("../Images/image1.jpg");
const image2=require("../Images/image2.jpg");
const image3=require("../Images/image3.jpg");

class SignUpScreen extends React.Component {

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      email : '',
      name : '',
      phoneNumber :'',
      password :'',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      position: 1,
      interval: null
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 3000)});
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
    clearInterval(this.state.interval);
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

  handleChangeName = (text) => {
    this.setState({ name: text })
  }
  handleChangeEmail = (text) => {
    this.setState({ email: text })
  }
  handleChangePhoneNumber = (text) => {
    this.setState({ phoneNumber: text })
  }
  handleChangePassword = (text) => {
    this.setState({ password: text })
  }
  handlePressTerms = () => {
    const { navigate } = this.props.navigation;
    navigate('termsAndConditions');

  }
  //Creates a new user and if that is successful, updates the user information.
  handlePressSignup = () =>{
    const { name, email, phoneNumber, password } = this.state;
    const { navigate } = this.props.navigation;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
      //Alert.alert('UserId',JSON.stringify(data))
    
      this.isAttempting = false;
      this.getFirebaseRef().child('users').push({
      
        Name : name,
        userId : data.uid,
        email : email,
        phoneNumber : phoneNumber
      }).then(()=>{
        firebaseApp.auth().currentUser.sendEmailVerification().then(()=>{
          navigate('login');
          alert("Please check your email for the verification link");
        }).catch((error)=>{
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
      }).catch((error)=>{
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }
  getFirebaseRef() {
    return firebaseApp.database().ref();
  }
  render () {
    const { name, email, phoneNumber, password } = this.state;
    return (
      <Image source={background} style={[Styles.backgroundImage]}>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <View style={Styles.textWrapper}>
              <Text style={Styles.textStyle}>
              Complete the fields below
              </Text>
              <Text style={Styles.textStyle}>
              to register!
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
                ref='name'
                style={Styles.textInput}
                value={name}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeName}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.email.focus()}
                placeholder='Name' />
            </View>
            </View>
            </View>

            <View style={Styles.row}>
            <View style={{flexDirection: 'row'}}>
            <View style={Styles.iconWrapper}>
              <FoundationIcon name='mail' size={35} color="#ffffff"/>
              </View>
              <View style={Styles.inputTextWrapper}>
              <TextInput
                ref='email'
                style={Styles.textInput}
                value={email}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeEmail}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.phoneNumber.focus()}
                placeholder='Email' />
            </View>
            </View>
            </View>

            <View style={Styles.row}>
            <View style={{flexDirection: 'row'}}>
            <View style={Styles.iconWrapper}>
              <FoundationIcon name='telephone' size={35} color="#ffffff"/>
              </View>
              <View style={Styles.inputTextWrapper}>
              <TextInput
                ref='phoneNumber'
                style={Styles.textInput}
                value={phoneNumber}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangePhoneNumber}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.phoneNumber.focus()}
                placeholder='Phone Number' />
            </View>
            </View>
            </View>
            <View style={Styles.row}>
            <View style={{flexDirection: 'row'}}>
            <View style={Styles.iconWrapper}>
              <FoundationIcon name='key' size={35} color="#ffffff"/>
              </View>
              <View style={Styles.inputTextWrapper}>
              <TextInput
                ref='password'
                style={Styles.textInput}
                value={password}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangePassword}
                underlineColorAndroid='transparent'
                secureTextEntry
                onSubmitEditing={() => this.handlePressSignup}
                placeholder='Password' />
                </View>
              </View>
              </View>
              </View>

              <Text style={Styles.normalTextStyle}>By creating an account you agree to our </Text>
              <TouchableHighlight onPress={this.handlePressTerms}>
                <Text style={Styles.normalTextStyle1}>Terms and Conditions</Text>
              </TouchableHighlight>

              <View style={Styles.loginButtonWrapper}>
                <TouchableOpacity style={Styles.loginButton} onPress={this.handlePressSignup}>
                <Text style={Styles.loginText}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.sliderWrapper}>
                  <ImageSlider style={{marginHorizontal:.5, marginVertical:.5}} images={[
                  image1,
                  image2,
                  image3
                  ]}
                  position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
              </View>


              </ScrollView>
      </Image>
    )
  }

}

export default SignUpScreen
