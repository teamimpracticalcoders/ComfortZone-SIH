import React, {useState} from 'react';
import {navigationOptions} from 'react-navigation';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"

function Prevnotes(props) {
  const [dataList, sdt] = useState(['']);
  const [flag,setFlag] = useState(false)
  if(!flag)
  AsyncStorage.getItem('notes').then(res => {
    console.log(res);
    if (res === null) res = '[]';
    sdt(JSON.parse(res));
    setFlag(true)
  })
  
  
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#cfd8dc',
      }}>
      <Button
        color="#ff7043"
        title="create"
        onPress={() => props.navigation.navigate('diary')}></Button>
      <Text>{dataList.map(el => el + '\n')}</Text>

      <View
        style={{
          top: 640,
          position: 'absolute',
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '25%',
          }}>
          <TouchableOpacity
            style={{
              height: 80,
              backgroundColor: 'green',
            }}
            onPress={() => props.navigation.navigate('Home')}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '25%',
          }}>
          <TouchableOpacity
            style={{
              height: 80,
              backgroundColor: 'blue',
            }}
            onPress={() => props.navigation.navigate('prevnotes')}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              Diary
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '25%',
          }}>
          <TouchableOpacity
            style={{
              height: 80,
              backgroundColor: 'yellow',
            }}
            onPress={() => props.navigation.navigate('diary')}>
            <Text>spotify</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '25%',
          }}>
          <TouchableOpacity
            style={{
              height: 80,
              backgroundColor: 'red',
            }}
            onPress={() => props.navigation.navigate('diary')}>
            <Text>Emergency!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Prevnotes;
