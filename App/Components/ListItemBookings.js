import React, {
  Component
} from 'react';

import {
  View,
  Text
} from 'react-native';

import styles from './Styles/ListItemStyles.js';
import Metrics from '../Themes/Metrics'

class ListItem extends Component {
  render() {
    return (
      <View style={styles.listItem}>
       
      
        <Text style={styles.listItemTitle}>
          Name :  {this.props.task.name}{"\n"}
          Pitch Details  : 
          {this.props.task.title}{"\n"}
          {this.props.task.address}{"\n"}
         {/* <Text style={styles.distItem}>{this.props.task.dist} miles </Text>*/}
          Start Time  : 
          {this.props.task.date}{"\n"}
        End Time :
        {this.props.task.endtime}{"\n"}
         
        </Text>      
      </View>
    );
  }
}

module.exports = ListItem;
