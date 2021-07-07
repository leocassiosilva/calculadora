import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Btn from './src/componentes/botao'
import Display from './src/componentes/display'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text>Calculadora!</Text>
        <View>
          <Display valor={0} resultado={0} />
        </View>

        <View>
          <Btn label="CE/C" limpar></Btn>
        </View>



        <View style={styles.containerBotoes}>
          <View style={styles.colunaBotoes1}>
            <Btn label="7"></Btn>
            <Btn label="4"></Btn>
            <Btn label="1"></Btn>
            <Btn label="0"></Btn>
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="8"></Btn>
            <Btn label="2"></Btn>
            <Btn label="2"></Btn>
            <Btn label="00"></Btn>
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="9"></Btn>
            <Btn label="6"></Btn>
            <Btn label="3"></Btn>
            <Btn label="."></Btn>
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="%"></Btn>

            <Btn label="X"></Btn>

            <Btn label="+" soma></Btn>

            
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label=">"></Btn>

            <Btn label="/"></Btn>

            <Btn label="-"></Btn>

            <Btn label="="></Btn>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    backgroundColor: '#000000',
    height:'60%',
    width:'98%',
    justifyContent: 'space-evenly',
    borderRadius:10

   }, 
   display:{
     backgroundColor:'#d4dfbf',
     height:100,
     margin:10,
     borderRadius:10
   }, 
   limpar:{
    backgroundColor:'#ff7900',
    height:60,
    width:70, 
    alignSelf:'flex-end',
    borderRadius:10,
    marginRight:10 
  }, 
  containerBotoes:{
    height:280,
    flexDirection:'row',
    justifyContent: 'space-between',
    margin:10
  },
  colunaBotoes1:{
    height:280,
    width:70,
    justifyContent: 'space-evenly',
  },
  botoes:{
    backgroundColor:'#404146',
    height:60,
    width:70,
    borderRadius:10
  },
  

});
