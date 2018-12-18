import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'
import Icon from 'react-native-vector-icons/FontAwesome';

export default StyleSheet.create({
  container: {
    paddingTop: 50
  },
  form: {
    marginHorizontal: 20,
    marginVertical: 5
  },
  textWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal:30
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },

  textInput: {
    height: 43,
    color: Colors.black,
    width: 300,
    backgroundColor:"#ffffff"
  },
  textInputReadonly: {
    color: Colors.steel
  },
  loginButtonWrapper: {
    alignItems: 'center',
    marginVertical: 5
  },
  loginButton: {
    borderRadius: 8,
    height:20,
    width:80,
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  addButton: {
    borderRadius: 8,
    height:40,
    width:150,
    backgroundColor: Colors.purple,
    justifyContent: 'center'
  },
  loginText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    // width: undefined,
    // height: undefined
    backgroundColor: Colors.bloodOrange
  },
  textStyle: {
    color: Colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
    fontSize:18
  },
  heading: {
    color: Colors.purple,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:25
  },
  iconWrapper: {
    borderTopLeftRadius:9,
    borderTopRightRadius:0,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 0,
    backgroundColor:'#6f2c6f' ,
    height: 51,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:4,
    borderColor:Colors.purple
  },
  sliderWrapper: {
    borderWidth: 4,
    borderColor:Colors.purple,
    borderRadius:12,
    marginHorizontal: 35,
    marginVertical: 5
  },
  inputTextWrapper: {
    borderWidth: 4,
    borderColor: Colors.snow,
    borderTopLeftRadius:0,
    borderTopRightRadius: 9,
    borderBottomLeftRadius:0,
    borderBottomRightRadius: 9
  },
  normalTextStyle: {
    paddingHorizontal:15,
    color: Colors.snow,
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal:10,
    textAlign: 'center',

  },
  datePickerBox:{
  width: 300,
  alignItems: 'center'
  },
  datePickerText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
    borderWidth: 0,
    color: '#ffffff',
  },
  normalTextStyle1: {
    paddingHorizontal:15,
    color: Colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal:10,
    textAlign: 'center'
  },
  normalTextStyle2: {
    paddingHorizontal:25,
    color: Colors.purple,
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal:10,
    textAlign: 'center'
  },
  normalTextStyle3: {
    paddingHorizontal:25,
    color: Colors.purple,
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal:10,
    textAlign: 'center'
  },
  dropDown: {
    paddingHorizontal:25,
    fontSize:18,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,.01)',
    justifyContent: 'center',
    marginLeft: 5,
    borderWidth: 0
  },
  buttonText1: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: Metrics.baseMargin
  }
})
