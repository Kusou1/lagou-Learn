'use strict';
import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import { VisionCamera } from '../vision-camera/vision-camera';
// class ExampleApp extends PureComponent {
//   render() {
//     const device = useCameraDevice()
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.front} // 摄像头的方向，back 后，front 前
//           flashMode={RNCamera.Constants.FlashMode.on} // 相机的闪光模式
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           onGoogleVisionBarcodesDetected={({ barcodes }) => {
//             console.log(barcodes);
//           }}
//         />
//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//           <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
//             <Text style={{ fontSize: 14 }}> 拍照 </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options);
//       Alert.alert('图片地址', data.uri);
//     }
//   };
// }

function ExampleApp() {
  const device = useCameraDevices();
  console.log(device);
  const getPer = async ()=>{
    // const cameraPermission = await Camera.requestCameraPermission()
    // console.log(cameraPermission);
  }
  getPer()
  return (
    <View>
      <Text>11</Text>
      <VisionCamera device={device} />
    </View>
  );
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

export default ExampleApp;
