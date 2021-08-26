import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Modal } from 'react-native';
import BottomNavigation from './components/BottomNavigation';

const url = 'https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data';


fetch(url, {
  headers: {
    'x-api-key': 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59',

  }
})
  .then(responce => responce.json())
  .then(json => console.log(json.body))
  .catch((err) => {
    console.error(err);
  });


export default function App() {
  let [topText, setTopText] = useState('Home')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.header__icon} source={require('./images_icons/User 24px.svg')} />
        <Text style={{ color: 'white', fontSize: '26px', }}>{topText}</Text>
        <Image style={styles.header__icon} source={require('./images_icons/Search 24px.svg')} />
      </View>
      <BottomNavigation setTopText={setTopText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#0D1F3C',
  },
  header: {
    height: '92px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '60px',
    paddingLeft: '16px',
    paddingRight: '16px',
    alignItems: 'center'
  },
  header__icon: {
    width: '24px',
    height: '24px',
  }

});
