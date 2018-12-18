import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  TouchableHighlight,
  Linking
} from 'react-native'
import Styles from './Styles/LoginScreenStyles'
import Metrics from '../Themes/Metrics'

import firebaseApp from '../Config/FirebaseConfig'
import Icon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import RoundedButton from '../Components/RoundedButton'
import Video from 'react-native-video';


class FirstVideoScreen extends React.Component{
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
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

  handlePressSignup = () => {
    const { navigate } = this.props.navigation;
    navigate('signUp');
  }
  handlePressLogIn = () => {
    const { navigate } = this.props.navigation;
    navigate('login');
  }

  openFacebook = () => {
    Linking.openURL('https://www.facebook.com/MettleSportsStreetSoccer');
  }
  openTwitter = () => {
    Linking.openURL('https://twitter.com/Mettle_Sports');
  }
  openWebsite = () => {
    Linking.openURL('http://www.mettlesports.com/');
  }
  openYoutube = () => {
    Linking.openURL('https://www.youtube.com/channel/UCP_E-7-h1n4lm9DOtkBYpRA');
  }

  
  render () {

    return (
      
      
      <ScrollView contentContainerStyle={{justifyContent: 'center', flex:1}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
       <Video source={require("../Images/video.mp4")}
               style={Styles.backgroundVideo}
               rate={1.0} volume={1.0} muted={true}
               resizeMode={"cover"} repeat={true} />
     
       <View style={{paddingTop: 90}}>
       <View style={Styles.loginButtonWrapper}>
            <TouchableOpacity style={Styles.loginButton} onPress={this.handlePressSignup}>
            <Text style={Styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
       </View>

        <View style={Styles.forgotPassword}>
          <TouchableHighlight onPress={this.handlePressLogIn}>
            <Text style={Styles.normalTextStyle1}>Already a member ? Log in</Text>
          </TouchableHighlight>
        </View>
        <View style={Styles.followUs}>
            <Text style={Styles.normalTextStyle1}>Follow us </Text>
            <TouchableHighlight onPress={this.openFacebook}>
              <View style={Styles.followIconWrapper}>
                <FoundationIcon name='social-facebook' size={20} color="#ffffff"/>
              </View>
            </TouchableHighlight>
            <Text style={{paddingHorizontal:3,marginHorizontal:3, backgroundColor: 'rgba(0,0,0,0)'}}></Text>
            <TouchableHighlight onPress={this.openTwitter}>
              <View style={Styles.followIconWrapper}>
                <FoundationIcon name='social-twitter' size={20} color="#ffffff"/>
              </View>
            </TouchableHighlight>
            <Text style={{paddingHorizontal:3,marginHorizontal:3, backgroundColor: 'rgba(0,0,0,0)'}}></Text>
            <TouchableHighlight onPress={this.openWebsite}>
              <View style={Styles.followIconWrapper}>
                <FoundationIcon name='web' size={20} color="#ffffff"/>
              </View>
            </TouchableHighlight>
            <Text style={{paddingHorizontal:3,marginHorizontal:3, backgroundColor: 'rgba(0,0,0,0)'}}></Text>
            <TouchableHighlight onPress={this.openYoutube}>
              <View style={Styles.followIconWrapper}>
                <FoundationIcon name='social-youtube' size={20} color="#ffffff"/>
              </View>
            </TouchableHighlight>

        </View>
        </View>
        </ScrollView>
    


    )
  }
}

export default FirstVideoScreen
