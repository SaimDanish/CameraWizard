import React from 'react'
import { View, Text, Animated,Image, ImageBackground, TouchableOpacity,Dimensions } from 'react-native'
import GestureHandler, { PinchGestureHandler } from 'react-native-gesture-handler';
// import {SvgXml} from 'react-native-svg';
// import Camera from '../assets/interface.svg';

// import HomeScreen from './src/HomeScreen'
 import {useNavigation} from '@react-navigation/native';


 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({route}) => {
    let scale = new Animated.Value(1);

    const onPinchEvent = Animated.event([{ nativeEvent: { scale:scale } }], {
        useNativeDriver: true,
      });

    //  const onPinchStateChange = (event) => {
    //     if (event.nativeEvent.oldState === GestureHandler.ACTIVE) {
    //     Animated.spring(scale, {
    //     toValue: 1,
    //     useNativeDriver: true,
    //     bounciness: 1,
    //     }).start();
    //     }
    //     };
    // var abc= route.params.image_url;
    // const [return_value,setreturn_value]=useState(abc.return_value)
    const navigation = useNavigation();
    
     console.log(route.params)
    


    return (
        <View  style={{ flex: 1}}>
            <View style={{flex: 1,}}>
                <PinchGestureHandler
                 onGestureEvent={onPinchEvent}
                //  onHandlerStateChange={onPinchStateChange}
                >
            <Animated.Image
            source={{uri: route.params && route.params?.url_data }}
            
            style={{height: windowHeight, width: windowWidth, transform: [{ scale: scale }],}}/>
            </PinchGestureHandler>
            </View>
            
            <View style={{flex:1,justifyContent: 'flex-end', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => 
                    navigation.navigate('CameraScreen')
                }>  
               
                <Image
                    source={require('../assets/camera.png')}
                    style={{ height: 60, width: 60, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
            </View>
 
         </View>
    )
}

export default HomeScreen