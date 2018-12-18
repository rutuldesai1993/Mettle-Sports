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
    height:40,
    width:80,
    backgroundColor: Colors.purple,
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
    width: undefined,
    height: undefined
  },
  textStyle: {
    color: Colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
    fontSize:18
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
  normalTextStyle1: {
    paddingHorizontal:15,
    color: Colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal:10,
    textAlign: 'center'
  }
})
