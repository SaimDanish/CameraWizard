import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity,Dimensions } from 'react-native'

// import HomeScreen from './src/HomeScreen'
 import {useNavigation} from '@react-navigation/native';


 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({route}) => {
    // var abc= route.params.image_url;
    // const [return_value,setreturn_value]=useState(abc.return_value)
    const navigation = useNavigation();

    // console.log(return_value)
    // state = {
    //     capturedImg: ''
    // }


    return (
        <View  style={{ flex: 1}}>
            <ImageBackground
            source={require('../assets/back.jpg')}
            style={{flex: 5, height: windowHeight, width: windowWidth}}>
            
            <View style={{flex:1,justifyContent: 'flex-end', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => 
                    navigation.navigate('HomeScreen')
                    // {HomeScreen}
                }>  
                <Image
                    source={require('../assets/camera.png')}
                    style={{ height: 60, width: 60, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
            </View>
 </ImageBackground>
         </View>
    )
}

export default HomeScreen