import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';


// import AsyncStorage from '@react-native-async-storage/async-storage';

// import Wave from './Components/Wave';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    // callSetting()
    setTimeout(() => {
    //   AsyncStorage.getItem('is_login').then(Value => {
    //     navigation.replace(Value == "true" ? "DrawerNavigationRoutes" : "LoginScreen")
    //   });
      navigation.replace( 'LoginScreen')
    }, 500);
  }, []);


//   const callSetting = () => {
//     //var formdata = new FormData();
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
//     fetch("https://technolite.in/staging/school_2/api/app_setting", requestOptions)
//       .then(response => response.json())
//       .then(async result => {
//         console.log(result)
//         try {
//           const jsonValue = JSON.stringify(result)
//           await AsyncStorage.setItem('setting_data', jsonValue)
//         } catch (e) {
//           // saving error
//         }
//       }).catch(error => console.log('error', error));
//   }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/app_images/splash_screen.png")} style={{
                        zIndex: 20,
                        position: 'absolute', bottom: 50, height: 400, width: 300, resizeMode: 'contain'
                    }} />

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});