import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { getActionFromState, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import Feather from "react-native-vector-icons/Feather";
//import {Profile} from './components/profile.js'
import { Logout } from './components/logout.js'
import { DoctorReg } from './components/doctorReg'
import { Home } from './components/home'
import { SearchDoctor } from './components/searchdoctor.js';
import { DoctorProfile } from './components/doctorprofile';
import { Health } from './components/health';
import AppointmentDate from './components/appointmentdate.js';
import OrderMedicine from './components/orderMedicine.js'; 
import {Profile} from './components/profile'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
export const First = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='SearchDoctor' component={SearchDoctor} />
      <Stack.Screen name='DoctorProfile' component={DoctorProfile} />
      <Stack.Screen name='Health' component={Health} />
      <Stack.Screen name='AppointmentDate' component={AppointmentDate} />
      <Stack.Screen name='OrderMedicine' component={OrderMedicine} />
    </Stack.Navigator>
  )
}
//AppointmentDate


// export const SearchDoctor=(props)=>{
//   return null
// }

// export const Profile = (props) => {

//   const [getImg, setimg] = useState('');
//   function btoa(input) {
//     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
//     var str = String(input);
//     for (
//       // initialize result and counter
//       var block, charCode, idx = 0, map = chars, output = '';
//       // if the next str index does not exist:
//       //   change the mapping table to "="
//       //   check if d has no fractional digits
//       str.charAt(idx | 0) || (map = '=', idx % 1);
//       // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
//       output += map.charAt(63 & block >> 8 - idx % 1 * 8)
//     ) {
//       charCode = str.charCodeAt(idx += 3 / 4);
//       if (charCode > 0xFF) {
//         throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
//       }
//       block = block << 8 | charCode;
//     }
//     return output;
//   }
//   function arrayBufferToBase64(buffer) {
//     var binary = '';
//     var bytes = [].slice.call(new Uint8Array(buffer));
//     bytes.forEach((b) => binary += String.fromCharCode(b));
//     return btoa(binary);
//   };


//   useEffect(() => {
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };

//     fetch("http://192.168.100.109:3000/patient/Order/60bf5057874ad732e888afa1", requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result.img.data.data)
//         var base64Flag = 'data:image/jpeg;base64,';
//         var imageStr = arrayBufferToBase64(result.img.data.data);
//         setimg(base64Flag + imageStr)
//         console.log(imageStr)
//       })
//       .catch(error => console.log('error', error));


//     // fetch('http://192.168.1.187:3000/patient/Order/60bf5057874ad732e888afa1',{
//     //   method:"get"
//     // })
//     //     .then((res) =>{

//     //       res.json()
//     //     })
//     //     .then((doc) => {
//     //       console.log(doc)
//     //         var base64Flag = 'data:image/jpeg;base64,';
//     //         var imageStr = arrayBufferToBase64(doc.img.data.data);
//     //         setimg(base64Flag + imageStr)
//     //     }).catch(error => {
//     //          console.log('error',error);
//     //         // Alert.alert(res)
//     //        });

//   }, [])

//   const handleupload = (image) => {
//     const data = new FormData()
//     data.append('file', image);
//     data.append('upload_preset', 'healthApp');
//     data.append('cloud_name', 'imgload')
//     fetch("https://api.cloudinary.com/v1_1/imgload/image/upload", {
//       method: "post",
//       body: data
//     }).then(res => res.json).then(data => { console.log(data) })
//   }
//   return (

//     <View style={{ flex: 1, marginTop: 40 }} >
//       <Image style={{ height: '70%', width: '100%' }} source={{ uri: getImg }} />
//       <Text>Hi this is image getting page</Text>
//     </View>
//   )
// }

export const Blog = (props) => {
  return null
}
export const AppointmentsHistory = (props) => {
  return null
}

export const MyDrawer = ({ navigation }) => {


  return (
    <Drawer.Navigator drawerType="slide" >
      <Drawer.Screen
        name='First'
        component={First}
        options={({ navigation }) => ({
          drawerLabel: 'Home',
          headerTintColor: 'blue'
        })}
      />

      <Drawer.Screen
        name='Profile'
        component={Profile}
        options={({ navigation }) => ({
          drawerLabel: 'Profile',
          headerTintColor: 'blue'
        })}
      />
      <Drawer.Screen
        name='DoctorReg'
        component={DoctorReg}
        options={({ navigation }) => ({
          drawerLabel: 'Are u doctor ?',
          headerTintColor: 'blue'
        })}
      />
      <Drawer.Screen
        name='SearchDoctor'
        component={SearchDoctor}
        options={({ navigation }) => ({
          drawerLabel: 'Search doctor',
          headerTintColor: 'blue'
        })}
      />
      <Drawer.Screen
        name='AppointmentsHistory'
        component={AppointmentsHistory}
        options={({ navigation }) => ({
          drawerLabel: 'Appointments History',
          headerTintColor: 'blue'
        })}
      />
      <Drawer.Screen
        name='Blog'
        component={Blog}
        options={({ navigation }) => ({
          drawerLabel: 'Health Blog',
          headerTintColor: 'blue'
        })}
      />
      <Drawer.Screen
        name='Logout'
        component={Logout}
        options={({ navigation }) => ({
          drawerLabel: 'Logout',
          headerTintColor: 'blue'
        })}
      />
    </Drawer.Navigator>
  )
}