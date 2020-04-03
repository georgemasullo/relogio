import React,{ Component ,useState} from 'react';
import { Text, View, TextInput,TouchableOpacity, StyleSheet  } from 'react-native';



class Crono extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seg: 0,
        min:0,
        enc:0,
        int:0
      };
    }
    incrementa(){
        this.setState({seg:this.state.seg+1})
        console.log(this.state.seg)
        console.log('encerrar')
        console.log(this.state.enc)
        if (this.state.seg == 60){
            this.setState({seg:0})
            this.setState({min:this.state.min+1})
        }
        if(this.state.min==this.state.enc){
            console.log('Entrou');
            clearInterval(this.timerID);
            this.setState({enc:0});
            this.setState({min:0});
            this.setState({seg:0});
        }
    }
    iniciar(){
        this.timerID=((setInterval(
            ()=>{this.incrementa()},
            1000
          ))
        )
    }
    add(text){
        this.state.enc=text
    }
    render(){
        return (
            <View style={styles.conteiner}>
                <View style={styles.area}>
                    <Text style={styles.texto}>Cronômetro:</Text>
                 <TextInput style={styles.input}
                    keyboardType = 'numeric'
                    onChangeText={(text)=>this.setState({enc:parseInt(text)}) }
                    value={this.state.enc.toString()}
                />
                
                <TouchableOpacity
                   onPress = {
                      () => this.iniciar()
                   }>
                   <Text  style={styles.texto}> Iniciar </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.crono}>
                <Text  style={styles.texto}>Mim:{this.state.min} Seg:{this.state.seg}</Text>
                </View>
            </View>
          );
    }
}
export default Crono


const styles = StyleSheet.create({
    conteiner:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    area:{
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:'10%',
        width:'90%',
        flexDirection:'row',
        alignContent:'space-between',
        justifyContent: 'space-between',
    },
    input:{
        borderColor: '#00ced1',
        borderWidth: 1,
        width:'15%',
        color:"#00ced1",
        textAlign:'center'
    },
    texto:{
      color:"#00ced1",
    },
    crono:{
        paddingLeft:'10%',
        paddingRight:'10%',
        
    }
  });