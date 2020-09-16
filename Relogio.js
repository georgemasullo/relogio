import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class Relogio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hora: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.inrtervalo = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.inrtervalo);
    }
    tick() {
      this.setState({
        hora: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <Text style={styles.texto}> {this.state.hora}</Text>
      );
    }
  }
  export default Relogio;

  const styles = StyleSheet.create({
    texto:{
      color:"#00ced1",
      paddingHorizontal:'10%',
      borderColor: '#fff',
      borderWidth: 1,
    }
  });
  