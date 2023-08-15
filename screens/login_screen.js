import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
// import * as axios from 'axios';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert, ToastAndroid, Button, KeyboardAvoidingView } from "react-native";
// import { color } from 'react-native-reanimated';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import OTPTextView from 'react-native-otp-textinput';
// import { config, POST, validate } from '../Screen/config/config';

var setting = null;
const LoginScreen = () => {

    const navigation = useNavigation()

    const [user_name, set_user_name] = useState(null)
    const [user_mobile, set_user_mobile] = useState(null)
    const [flag_empty, set_flag_empty] = useState(false)
    const [otp_flag, set_otp_flag] = useState(false)
    const [is_otp, set_is_otp] = useState(null)
    const [otp_receive, set_otp_receive] = useState(null)
    const [check_status, set_check_status] = useState(null)


    // useEffect(() => {
    //     getData()
    //     //set_otp_flag(false)
    // })


    // const getData = async () => {

    //     try {

    //         const jsonValue = await AsyncStorage.getItem('setting_data')
    //         console.log("headerbgbg", JSON.parse(jsonValue))
    //         setting = JSON.parse(jsonValue)

    //         set_is_otp(setting.data.is_otp)
    //     }
    //     catch (e) {
    //         // error reading value
    //     }
    // }

    // const callLogin = () => {

    //     if (user_name == null) {
    //         validate("username")
    //     }
    //     else if (user_mobile == null) {
    //         validate("password")
    //     }

    //     else {
    //         axios.post(config.app_url + "login", {
    //             username: user_name,
    //             password: user_mobile
    //         }).then(res => {
    //             console.log('url==>', config.app_url + "login")
    //             var result = JSON.stringify(res);
    //             console.log('token', res.data.data.access_token)
    //             AsyncStorage.setItem('token', res.data.data.access_token)
    //             AsyncStorage.setItem('role_id', res.data.data.role_id)
    //             console.log('role_id', String(res.data.data.role_id))
    //             AsyncStorage.setItem('is_login', "true")
    //             navigation.navigate('HomeScreen')
    //         })
    //             .catch(function (error) {

    //                 if (error.response.status === 400) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                 }
    //                 else if (error.response.status === 401) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     // The request was made but no response was received
    //                     //ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
    //                 }
    //                 else if (error.response.status === 404) {
    //                     ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)

    //                 }
    //                 else {
    //                     ToastAndroid.show(error.message, ToastAndroid.SHORT)
    //                     // Something happened in setting up the request that triggered an Error
    //                 }
    //             });
    //     }

    // }


    // const callLoginAfterOtp = () => {

    //     console.log('otp_received==>', otp_receive)

    //     if (otp_receive == null) {
    //         ToastAndroid.show("Please enter OTP", ToastAndroid.SHORT)
    //     }
    //     else {
    //         axios.post(config.app_url + "login", {
    //             username: user_name,
    //             password: user_mobile,
    //             otp: otp_receive
    //         }).then(res => {
    //             console.log('otp_url==>', config.app_url + "login")
    //             var result = JSON.stringify(res);
    //             console.log('token', res.data.data.access_token)
    //             AsyncStorage.setItem('token', res.data.data.access_token)
    //             AsyncStorage.setItem('role_id', res.data.data.role_id)
    //             AsyncStorage.setItem('is_login', "true")
    //             navigation.navigate('HomeScreen')
    //         })
    //             .catch(function (error) {
                    
    //                 console.log('login1===',error.response.data)
    //                 if (error.response.status === 400) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                 }
    //                 else if (error.response.status === 401) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                 }
    //                 else if (error.response.status === 404) {
    //                     ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
    //                 }
    //                 else {
    //                     ToastAndroid.show(error.message, ToastAndroid.SHORT)
    //                 }
    //             });
    //     }



    // }

    // const callOtp = () => {

    //     if (user_name == null) {
    //         validate("username")
    //     }
    //     else if (user_mobile == null) {
    //         validate("password")
    //     }
    //     else {
    //         axios.post(config.app_url + "send_otp", {
    //             username: user_name,
    //             password: user_mobile
    //         }).then(res => {
    //             //var result = JSON.stringify(res);
    //             set_otp_flag(true)

    //             //set_otp_receive(JSON.stringify(res.data.data.otp))

    //             ToastAndroid.show("Your otp is " + JSON.stringify(res.data.data.otp), ToastAndroid.SHORT)

    //             console.log('otp==>', otp_receive)
    //         })
    //             .catch(function (error) {

    //                 if (error.response.status === 400) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     // Request made and server responded
    //                     //ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                 }
    //                 else if (error.response.status === 401) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     // The request was made but no response was received
    //                     //ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)
    //                 }
    //                 else if (error.response.status === 404) {
    //                     const error_new_password = error.response.data.data.password
    //                     const error_password = error.response.data.data.username

    //                     if (error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                     }
    //                     if (error_password != null && error_new_password != null) {
    //                         ToastAndroid.show(error.response.data.data.password, ToastAndroid.SHORT)
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     else {
    //                         ToastAndroid.show(error.response.data.data.username, ToastAndroid.SHORT)
    //                     }
    //                     // The request was made but no response was received
    //                     //ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT)

    //                 }
    //                 else {
    //                     ToastAndroid.show(error.message, ToastAndroid.SHORT)
    //                     // Something happened in setting up the request that triggered an Error
    //                 }
    //             });
    //     }

    //     //POST('send_otp', user_name, user_mobile)

    // }

    // const otpInput = useRef(null);

    // const clearText = () => {
    //     otpInput.current.clear();
    // }

    // const setText = () => {
    //     otpInput.current.setValue(otp_receive);
    // }

    return (
        <View style={styles.root}>
            <View style={styles.item}>

                <View style={styles.backgroundImage}>
                    <Image source={require("../assets/app_images/login_back_png.png")}
                        style={
                            styles.imageBack
                        } />
                </View>

            </View>


            <View style={styles.item2}>

                <View style={{ alignItems: 'center', marginTop: 60, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#323665' }}>{"Login"}</Text>
                </View>

                {
                    // is_otp == 0 ?
                        <View style={{ width: '100%', marginTop: 0 }}>
                            <Text style={{ marginLeft: '5%', marginTop: '5%', color: '#8585ac', fontSize: 12 }}>{"Username"}</Text>

                            <View style={[styles.input, { borderColor: flag_empty ? "red" : "" }]}>

                                <View style={{ flex: 0.9 }}>
                                    <TextInput
                                        onChangeText={(text) => {
                                            if (text.length == 0) {
                                                set_user_name(null)
                                            }
                                            else {
                                                set_flag_empty(false)
                                                set_user_name(text)
                                            }
                                        }}
                                        defaultValue={user_name}
                                        placeholder="Enter Your Name"
                                    />
                                </View>

                                <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require('../assets/app_images/login_man.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                                </View>

                            </View>

                            <Text style={{ marginLeft: '5%', marginTop: '5%', color: '#8585ac', fontSize: 12 }}>{"Password"}</Text>

                            <View style={[styles.input, { borderColor: flag_empty ? "red" : "" }]}>

                                <View style={{ flex: 0.9 }}>

                                    <TextInput

                                        onChangeText={(text) => {
                                            if (text.length == 0) {
                                                set_user_mobile(null)
                                            }
                                            else {
                                                set_flag_empty(false)
                                                set_user_mobile(text)
                                            }
                                        }}
                                        defaultValue={user_mobile}
                                        placeholder="Enter Your Password "
                                    />

                                </View>

                                <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require('../assets/app_images/login_password.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                                </View>

                            </View>

                            <TouchableOpacity style={styles.loginButton}
                                onPress={() => {
                                    callLogin()
                                }
                                }
                            >

                                <Text style={{ color: '#ffffff' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        // :
                        // <View style={{ width: '100%', marginTop: 0 }}>
                        //     <Text style={{ marginLeft: '5%', marginTop: '5%', color: '#8585ac', fontSize: 12 }}>{"Username"}</Text>

                        //     <View style={[styles.input, { borderColor: flag_empty ? "red" : "" }]}>

                        //         <View style={{ flex: 0.9 }}>
                        //             <TextInput

                        //                 onChangeText={(text) => {
                        //                     if (text.length == 0) {
                        //                         set_user_name(null)
                        //                     }
                        //                     else {
                        //                         set_flag_empty(false)
                        //                         set_user_name(text)
                        //                     }
                        //                 }}
                        //                 defaultValue={user_name}
                        //                 placeholder="Enter Your Name"
                        //             />

                        //         </View>

                        //         <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
                        //             <Image source={require('../assets/school_main_icon/login_man.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        //         </View>

                        //     </View>

                        //     <Text style={{ marginLeft: '5%', marginTop: '5%', color: '#8585ac', fontSize: 12 }}>{"Password"}</Text>

                        //     <View style={[styles.input, { borderColor: flag_empty ? "red" : "" }]}>

                        //         <View style={{ flex: 0.9 }}>

                        //             <TextInput

                        //                 onChangeText={(text) => {
                        //                     if (text.length == 0) {
                        //                         set_user_mobile(null)
                        //                     }
                        //                     else {
                        //                         set_flag_empty(false)
                        //                         set_user_mobile(text)
                        //                     }
                        //                 }}
                        //                 defaultValue={user_mobile}
                        //                 placeholder="Enter Your Password"
                        //             />

                        //         </View>

                        //         <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>

                        //             <Image source={require('../assets/school_main_icon/login_password.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />

                        //         </View>

                        //     </View>

                        //     <TouchableOpacity style={styles.loginButton}
                        //         onPress={() => {
                        //             callOtp()
                        //         }
                        //         }
                        //     >

                        //         <Text style={{ color: '#ffffff' }}>Send OTP</Text>
                        //     </TouchableOpacity>

                        //     {
                        //         otp_flag ?
                        //             <View style={{ flex: 1, marginTop: 10, alignItems: 'center' }}>
                        //                 <OTPTextView
                        //                     //ref={(e) => (set_otp_receive(e))}
                        //                     containerStyle={styles.textInputContainer}
                        //                     textInputStyle={styles.roundedTextInput}
                        //                     handleTextChange={
                        //                         (text) => set_otp_receive(text)}
                        //                     //this.setState({ otpInput: text })}
                        //                     inputCount={4}
                        //                     keyboardType="numeric"
                        //                 />
                        //                 <TouchableOpacity style={[styles.loginButton, { marginTop: 70 }]}
                        //                     onPress={() => {
                        //                         callLoginAfterOtp()
                        //                     }}
                        //                 >

                        //                     <Text style={{ color: '#ffffff' }}>Confirm</Text>
                        //                 </TouchableOpacity>

                        //             </View>
                        //             :
                        //             null}
                        // </View>
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#eff1ff',
    },

    item: {
        borderColor: 'rgba(0,0,0,0.2)',
        flex: 0.4,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#00a9b6'
    },
    item2: {
        flex: 0.7,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 10,
        marginTop: 30,
        zIndex: -20,
    },
    backgroundImage: {
        justifyContent: "center",
        alignSelf: 'center',
        alignItems: "center",
        flex: 0.3,
        marginTop: 230,
        zIndex: 20,
        elevation: 2
    },
    imageBack: {
        height: 350,
        width: 350,
        resizeMode: 'contain',
    },
    input: {
        height: 40,
        margin: 2,
        borderWidth: 1,
        padding: 10,
        width: '90%',
        marginHorizontal: '5%',
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    loginButton: {
        height: 45,
        padding: 10,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00a9b6',
    },


    textInputContainer: {
        marginBottom: 20,
    },

    roundedTextInput: {
        borderRadius: 0,
        alignContent: 'space-between',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        borderWidth: 0.5,

    },

});

export default LoginScreen;