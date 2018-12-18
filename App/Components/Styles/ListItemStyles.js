import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  listItem: {
      borderBottomColor: '#eee',
      borderColor: 'gray',
      flexDirection:'row',
      alignItems:'center',
      borderWidth: 1,
      padding:20,
      flex: 1,
      //flexWrap: 'wrap'
  },
  listItemTitle: {
      flex: 1,
      color: Colors.snow,
      flexDirection:'row',
      fontWeight: 'bold',
      fontSize: 16,
      //flexWrap: 'wrap',
      //width: 100
  },
  distItem: {
      flex: 1,
      color: Colors.snow,
      flexDirection:'row',
      fontWeight: 'bold',
      fontSize: 14,
      fontFamily: 'KohinoorDevanagari-Semibold'
      //flexWrap: 'wrap',
  }
})
