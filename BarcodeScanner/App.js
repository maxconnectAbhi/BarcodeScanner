import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
Alert,
TouchableOpacity,
Image
} from 'react-native';
import {RNCamera} from 'react-native-camera';


export default class BarcodeScan extends Component {
constructor(props) {
    console.disableYellowBox = true;
    super(props);
this.state = {
    openScanner: false,
    scan:true
}
}

onBarCodeRead = (e) => {
    this.setState({scan:false})
Alert.alert(
    "Barcode value is " + e.data, "Barcode type is " + e.type, [
    {text: 'OK', onPress: () => this.setState({scan:true})},
  ],
  { cancelable: false }
)
}

render() {
return (
<View style={styles.container}>
{this.state.openScanner?
<RNCamera
captureAudio={false}
style={styles.preview}
onBarCodeRead={this.state.scan?this.onBarCodeRead:null}
ref={cam => this.camera = cam}
/>
 : 
 <Text style={{fontWeight:'bold',textAlign:'center',fontSize:25,}}>Barcode Scanner App</Text>
 }
<TouchableOpacity onPress={() => this.setState({openScanner:!this.state.openScanner})} style={styles.bottomOverlay}>
<Text style={styles.buttonText}>{this.state.openScanner? 'CLOSE BARCODE SCANNER' : 'OPEN BARCODE SCANNER'}</Text>
</TouchableOpacity>
</View>
)
}

toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash],
    });
  }

}
const styles = StyleSheet.create({
container: {
flex: 1,justifyContent:'center'
},
preview: {
height:'70%',
alignItems: 'center'
},
buttonText: {
  fontWeight:'bold',
  textAlign:'center',
  fontSize:15,color:'#FFF'
},
bottomOverlay: {
  backgroundColor:'blue',
  padding:8,alignSelf:'center',
 width:'60%',
 position:'absolute',bottom:50,
 borderRadius:6
},
});