import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    paddingTop: 0,
    flex:1
  },
  form: {
    marginHorizontal: 20,
    marginVertical: 10
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
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150
  },
  logoWrapper: {
    marginVertical:30
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  textWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal:30
  },
  textStyle: {
    fontFamily: 'Helvetica-Light',
    alignSelf: 'center',
    color: Colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
    fontSize:20
  },
  normalTextStyle: {
    paddingHorizontal:15,
    color: Colors.snow,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,.1)',
    marginHorizontal:10
  },
  normalTextStyle1: {
    paddingHorizontal:10,
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal:10
  },
  forgotPassword:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: 20
  },
  followUs:{
        flexDirection:'row',
        paddingTop: 40,
        justifyContent:'center',

  },
  sliderWrapper: {
    borderWidth: 0,
    borderColor:Colors.purple,
    borderRadius:12,
    marginHorizontal: 0,
    marginVertical: 0,
    flex:1
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
  loginButton: {
    borderRadius: 10,
    height:40,
    width:120,
    backgroundColor: Colors.purple,
    justifyContent: 'center'
  },
  loginText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButtonWrapper: {
    alignItems: 'center',
    marginVertical: 10
  },
  inputTextWrapper: {
    borderWidth: 4,
    borderColor: Colors.snow,
    borderTopLeftRadius:0,
    borderTopRightRadius: 9,
    borderBottomLeftRadius:0,
    borderBottomRightRadius: 9
  },
  followIconWrapper: {
    borderTopLeftRadius:9,
    borderTopRightRadius:9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    backgroundColor:'#6f2c6f' ,
    height: 31,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:4,
    borderColor:Colors.purple
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})
