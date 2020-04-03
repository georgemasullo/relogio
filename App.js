import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Relogio from './Relogio.js';
import Crone from './Crono'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.relog}>
        <View style={styles.tela}>
          <Text style={styles.texto}><Relogio /></Text>
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
    width:'20%',
    height:'40%',
    borderColor: '#00ced1',
    borderWidth: 1,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tela:{
    paddingTop:'20%',
  },
  base:{
    width:'18%',
    height:'5%',
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
