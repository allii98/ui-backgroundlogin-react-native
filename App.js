import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar, TextInput} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>

      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
       <ImageBackground source={require('./src/image/uilogin.jpg')} 
       style={{
         flex: 1
       }}
       blurRadius={2}>

       <Text style={{
         marginTop: 60,
         color: '#ffffff',
         fontSize: 28,
         fontWeight:'bold',
         textAlign:'center',
       }}>MSAL Mobile</Text>
       <Text style={{
         color: '#ffffff',
         fontSize: 16,
         fontWeight:'bold',
         textAlign:'center',
       }}>PT. Mulia Sawit Agro Lestari</Text>

       
          <TextInput value={this.state.username} placeholder='Masukkan username' placeholderTextColor='#ffffff' 
              style={{
                borderBottomWidth: 1,
                borderBottomColor:'#ffffff',
                color:'#ffffff',
                marginTop: 40,
                marginHorizontal: 20
              }}
              onChangeText={text => this.setState({username: text})}
              />
          <TextInput value={this.state.password} placeholder='Masukkan password' placeholderTextColor='#ffffff' 
              style={{
                  borderBottomWidth: 1,
                  borderBottomColor:'#ffffff',
                  color:'#ffffff',
                  marginTop: 20,
                  marginHorizontal: 20
                }}
                secureTextEntry
              onChangeText={text => this.setState({password: text})}
              />

          <TouchableOpacity style={{
                backgroundColor:'#ffffff',
                marginHorizontal: 20,
                borderRadius: 50,
                paddingVertical:10,
                justifyContent:'center',
                alignItems:'center',
                elevation: 3,
                marginTop: 40,
                
              }}>
                <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
                borderWidth:1,
                borderColor:'#ffffff',
                marginHorizontal: 20,
                borderRadius: 50,
                paddingVertical:10,
                justifyContent:'center',
                alignItems:'center',
                elevation: 3,
                marginTop: 20,

              }}>
                <Text style={{color:'#ffffff'}}>Create Account</Text>
          </TouchableOpacity>


       </ImageBackground>
      </View>
    );
  }
}
