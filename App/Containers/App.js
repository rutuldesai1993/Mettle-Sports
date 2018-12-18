import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import SplashScreen from './SplashScreen';
import FirstVideoScreen from './FirstVideoScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ForgotPassScreen from './ForgotPassScreen';
import SignUpScreen from './SignUpScreen';
import AddPitchScreen from './AddPitchScreen';
import PitchesScreen from './PitchesScreen';
import StartGameScreen from './StartGameScreen';
import SinglePitchFunctionsScreen from './SinglePitchFunctionsScreen';
import TermsAndConditionsScreen from './TermsAndConditionsScreen';

const App = StackNavigator({
  splash:{
      screen: SplashScreen,
      navigationOptions:{
        header:null,
        header: { style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        left: null,
      },
      headerTintColor : 'transparent'
  },
  firstVideoScreen:{
      screen: FirstVideoScreen,
      navigationOptions:{
          header:null,
        header: { style: { position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        left: null,
      }

  },
  login:{
      screen: LoginScreen,
      navigationOptions:{
        header:null,
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        left: null,
      }
  },
  home:{
      screen: HomeScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false
      }
  },
  signUp:{
      screen: SignUpScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        title:'Sign Up'
      }
  },
  forgotPass:{
      screen: ForgotPassScreen,
      navigationOptions:{
        headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        title:'Reset Password'
      }
  },
  addPitch:{
      screen: AddPitchScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        title:'Add Pitch'
      }
  },
  pitchesScreen:{
      screen: PitchesScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        title:'Pitches'
      }
  },
  singlePitchFunctionsScreen:{
      screen: SinglePitchFunctionsScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
      }
  },
  StartGame:{
      screen: StartGameScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        title:'Book a Field'
      }
  },
  termsAndConditions:{
      screen: TermsAndConditionsScreen,
      navigationOptions:{
        header:{ style:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }},
        headerVisible: false,
        title: 'Terms and Conditions'
      }
  }
},{ mode: 'modal' })

export default App
