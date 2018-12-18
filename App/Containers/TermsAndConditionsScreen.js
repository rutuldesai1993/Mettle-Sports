import React, { PropTypes } from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import Styles from './Styles/ForgotPassScreenStyles'
import Metrics from '../Themes/Metrics'
import firebaseApp from '../Config/FirebaseConfig'

class TermsAndConditionsScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  render () {
    return (
      
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.containerTerms, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>


          <Text style={Styles.normalTextStyle}>
                End-User License Agreement ("Agreement")

          Last updated: (10/24/2017)</Text>

<Text style={Styles.normalTextStyle}> Please read this End-User License Agreement ("Agreement") carefully before clicking the "I Agree" button, downloading or using Mettle Sports Street Soccer Application ("Application").

By clicking the "I Agree" button, downloading or using the Application, you are agreeing to be bound by the terms and conditions of this Agreement.

If you do not agree to the terms of this Agreement, do not click on the "I Agree" button and do not download or use the Application.</Text>

<Text style={Styles.normalTextStyle}>License</Text>

<Text style={Styles.normalTextStyle}>Mettle Sports, LLC grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.</Text>

<Text style={Styles.normalTextStyle}>Restrictions</Text>

<Text style={Styles.normalTextStyle}>You agree not to, and you will not permit others to:

a) license, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Application or make the Application available to any third party. Destroy or delete data or pitch locations fraudulently.</Text>

<Text style={Styles.normalTextStyle}>Modifications to Application</Text>

<Text style={Styles.normalTextStyle}>Mettle Sports, LLC reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or without notice and without liability to you.</Text>

<Text style={Styles.normalTextStyle}>Term and Termination</Text>

<Text style={Styles.normalTextStyle}>This Agreement shall remain in effect until terminated by you or Mettle Sports, LLC. 

Mettle Sports, LLC may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.

This Agreement will terminate immediately, without prior notice from Mettle Sports, LLC, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the Application and all copies thereof from your mobile device or from your desktop.

Upon termination of this Agreement, you shall cease all use of the Application and delete all copies of the Application from your mobile device or from your desktop.</Text>

<Text style={Styles.normalTextStyle}>Severability</Text>

<Text style={Styles.normalTextStyle}>If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</Text>

<Text style={Styles.normalTextStyle}>Amendments to this Agreement</Text>

<Text style={Styles.normalTextStyle}>Mettle Sports, LLC reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</Text>

<Text style={Styles.normalTextStyle}>Contact Information</Text>

<Text style={Styles.normalTextStyle}>If you have any questions about this Agreement, please contact us at info@mettlesports.com.

              </Text>


        
        </ScrollView>
    
    )
  }

}

export default TermsAndConditionsScreen