import React, {Component, useState, useEffect} from 'react';
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Easing,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  Linking,
} from 'react-native';

import icon from './images/loginpic.png';

function Signup(props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ababab',
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      padding: 8,
      marginLeft: 30,
      width: '100%',
    },
    input: {
      borderRadius: 25,
      backgroundColor: '#bdc3c7',
      width: '90%',
      marginLeft: 5,
    },
    buttonLogin: {
      backgroundColor: '#d35400',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 25,
      width: '90%',
    },
    buttonSignUp: {
      alignItems: 'center',
      width: '90%',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          source={icon}
          style={{
            marginLeft: 75,
            width: 200,
            height: 100,
          }}
        />
      </View>
      <View style={styles.item}>
        <TextInput style={styles.input} placeholder="email" />
      </View>
      <View style={styles.item}>
        <TextInput style={styles.input} placeholder="set a password" />
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => props.navigation.navigate('Home')}>
          <Text>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
