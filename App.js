import React from 'react';
import { Dimensions,StyleSheet, Text, View } from 'react-native';
import Relogio from './Relogio.js';
import Crone from './Crono'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.relog}>
        <View style={styles.tela}>
          <Relogio />
        </View>
        <View>
          <Crone />
        </View>
      </View>
      <View style={styles.base}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  relog: {
    borderRadius: (Math.round(Dimensions.get('window').width + Dimensions.get('window').height) *0.50),
    width: '65%',
    height: '40%',
    borderColor: '#00ced1',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tela:{
    paddingTop:'20%',
  },
  base:{
    width: Dimensions.get('window').width * 0.40,
    height: Dimensions.get('window').height * 0.05,
    borderColor: '#00ced1',
    borderWidth: 1,
  },
  texto:{
    color:"#00ced1",
    paddingHorizontal:'10%',
    borderColor: '#fff',
    borderWidth: 1,
  }
});
