import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text>Calculadora!</Text>
        <View style={styles.display}></View>
        <View style={styles.limpar}></View>
        <View style={styles.containerBotoes}>
          <View style={styles.colunaBotoes1}>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
          </View>
          <View style={styles.colunaBotoes1}>
          <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
          </View>
          <View style={styles.colunaBotoes1}>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
          </View>
          <View style={styles.colunaBotoes1}>
          <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoess}>
            </View>
            
          </View>
          <View style={styles.colunaBotoes1}>
          <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
            <View style={styles.botoes}>
            </View>
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
  botoess:{
    backgroundColor:'#404146',
    height:130,
    width:70,
    borderRadius:10
  }

});
