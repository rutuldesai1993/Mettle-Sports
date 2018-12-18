const React = require('react-native')
const {StyleSheet} = React
import Colors from '../../Themes/Colors'

var styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: Colors.purple,
    //alignSelf: 'stretch',
    //backgroundColor: '#f2f2f2',
    //flex: 1,
  },
  listView: {
    flex: 1,
    backgroundColor: Colors.purple
  },
  listItemAction: {
    flex: 1,
    width: 40,
    height: 40
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    //width: undefined,
    //height: undefined,
    backgroundColor: Colors.purple
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 54,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  }
})

module.exports = styles