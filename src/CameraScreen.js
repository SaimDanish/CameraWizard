import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image  } from 'react-native'
import { RNCamera } from 'react-native-camera'

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      // justifyContent: 'center',
      // alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class CameraScreen extends Component {
  constructor (props) {
    super (props)
    this.state= {
      img:""
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back,this.state.backCamera,RNCamera.Constants.Type.front}
          flashMode={this.state.flashMode,RNCamera.Constants.FlashMode.on,RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> Camera </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
        {/* { this.state.img && 
          <Image style={{width: 100, height: 50, resizeMode: Image.resizeMode.contain, borderWidth: 1, borderColor: 'red'}} source={require(this.state.img)} />}
       */}
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    const url_data=data.uri;
    console.log("Uri :",url_data);
    this.setState({img:url_data})
    console.log(this.state.img)
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
  export default CameraScreen