import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
// import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
// import ChangePassword from './Screen/DrawerScreens/ChangePassword';
// import HomeScreen from './Screen/DrawerScreens/HomeScreen';
// import Profile from './Screen/DrawerScreens/ProfileScreen';
// import TimeTableScreen from './Screen/DrawerScreens/TimeTableScreen';
// import AttendanceScreen from './Screen/DrawerScreens/AttendanceScreen';
// import Header from './Screen/Components/Header';
// import ForgetPassword from './Screen/DrawerScreens/ForgetPassword';
// import AboutScreen from './Screen/DrawerScreens/AboutScreen';
// import EventsScreen from './Screen/DrawerScreens/EventsScreen';
// import TCScreen from './Screen/DrawerScreens/TCScreen';
// import HolidayScreen from './Screen/DrawerScreens/HolidayScreen';
// import ContactScreen from './Screen/DrawerScreens/ContactScreen';
// import PrivacyScreen from './Screen/DrawerScreens/PrivacyScreen';
// import FeesScreen from './Screen/DrawerScreens/FeesScreen';
// import ImprestMoney from './Screen/DrawerScreens/ImprestMoney';
// import EventsDetail from './Screen/DrawerScreens/EventsDetail';
// import ImageSlider from './Screen/DrawerScreens/ImageSlider';
// import AssessmentScreen from './Screen/DrawerScreens/Assessment/AssessmentScreen'
// import LessonScreen from './Screen/DrawerScreens/Assessment/LessonScreen'
// import AssessmentList from './Screen/DrawerScreens/Assessment/AssessmentList'
// import AssessmentDetail from './Screen/DrawerScreens/Assessment/AssessmentDetail'
// import AssessmentSubmit from './Screen/DrawerScreens/Assessment/AssessmentSubmit';



const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerLeft: () => (
              <Header header_title={null} />
            ),
          }}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TimeTable"
          component={TimeTableScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terms"
          component={TCScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Holiday"
          component={HolidayScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Fees"
          component={FeesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ImprestMoney"
          component={ImprestMoney}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EventsDetail"
          component={EventsDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ImageSlider"
          component={ImageSlider}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Assessment"
          component={AssessmentScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AssessmentList"
          component={AssessmentList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AssessmentDetail"
          component={AssessmentDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AssessmentSubmit"
          component={AssessmentSubmit}
          options={{ headerShown: false }}
        /> */}

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;