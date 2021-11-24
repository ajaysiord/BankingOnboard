import React from 'react';
import {
  StyleSheet,
   View , 
   Text,
 TouchableOpacity,
 SafeAreaView,
 Button
 }  from 'react-native';

//  import {useAuth0,Auth0} from 'react-native-auth0';

//  const auth0 = new Auth0({
//   domain: '{YOUR_AUTH0_DOMAIN}',
//   clientId: '{YOUR_CLIENT_ID}',
// });
//  const { loginWithRedirect, isAuthenticated} =useAuth0();
 
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green'}}>
       {/* <TouchableOpacity style={styles.btnLogin}    onPress={() => navigation.navigate('DashboardScreen')}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity> */}
        {/* <Button onPress={() => loginWithRedirect() }>Login</Button> */}
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10
    },
    btnLogin:{
      width:  150,
      height: 45,
      borderRadius:20,
      borderColor:'red',
      backgroundColor:'skyblue',
      justifyContent:'center',
      marginTop:20
  },
  
  input: {
    width: 300,
    height: 45,
    borderRadius:25,
    fontSize:20,
    paddingLeft:45,
    backgroundColor:'#aaaa',
    color: 'blue',
    marginHorizontal:20
  },
  text:{
    color:'black',
    fontSize:20,
    textAlign: 'center',
    opacity:0.9
  }
  });
  
export default HomeScreen;