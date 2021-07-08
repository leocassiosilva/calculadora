import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Btn from './src/componentes/botao'
import Display from './src/componentes/display'

let estados={
  valor:'',
  resultado:0,
  realizada:false,
  
}


export default function App() {

  const[valorDisplay, setValorDisplay] = useState(estados.valor)
  const[resultadoDisplay, setResultadoDisplay] = useState(estados.resultado)

  //Função responsavel por pegar o digito (d) e adicionar ao display
  const addDigito=(d)=>{ 
      estado_op = estados.realizada
      //essa estrutura serve excluivamente para colocar o valor do resultado no lugar de um digito em caso do usuario querer realizar uma operção com o resultado anterior 
      if((d == '+' || d == '-' || d == '/' || d == '*') && estado_op == true){
        
        estados.valorDisplay = estados.resultado //coloca o valor no displa valor 
        //estados.resultado = 0 //passa o valor de zero para o resultado 
      }

      estados.valor = estados.valor+d //recebe o valor da tela e o digitado
      setValorDisplay(estados.valor)
      setResultadoDisplay(estados.resultado)
      estados.realizada=false
  }

  //Serve para zera o display
  const removerElementos=()=>{
    estados={
      valor:'',
      resultado:0,
      realizada:false
    }
    setValorDisplay(estados.valor)
    setResultadoDisplay(estados.resultado)
  } 

  //serve para realizar operações e a "limpeza"
  const oprecacao =  (d)=>{
    
    //em caso dousuario digitar o AC, ele remove os digitos que esão na tela 
    if (d == 'AC') {
      removerElementos()
      return 
    }

    //serve para pegar todos os digitos menos o ultimo digito a direita
    if (d == 'BS') {
      estados.valor=valorDisplay.substring(0,(valorDisplay.length-1)) //pega a posição zero até a ultima penultima posição
      setValorDisplay(estados.valor)
      return 
    }

    //utilizando o try pois pode acontecer algum erro na operação
    try{
      estados.resultado =eval(estados.valor) //eval serve para 
      estados.realizada = true
      setResultadoDisplay(estados.resultado)
    }catch{
      estados.resultado = "ERRO"
      estados.realizada = true
      setResultadoDisplay(estados.resultado)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text>Calculadora!</Text>
        <View>
          <Display valor={valorDisplay} resultado={resultadoDisplay} />
        </View>

        <View>
          <Btn label="CE/C" limpar acao={()=>{oprecacao('AC')}}></Btn>
        </View>



        <View style={styles.containerBotoes}>
          <View style={styles.colunaBotoes1}>
            <Btn label="7" acao={()=>{addDigito('7')}}></Btn>
            <Btn label="4" acao={()=>{addDigito('4')}}></Btn>
            <Btn label="1" acao={()=>{addDigito('1')}}></Btn>
            <Btn label="0" acao={()=>{addDigito('0')}}></Btn>
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="8" acao={()=>{addDigito('8')}}></Btn>
            <Btn label="5" acao={()=>{addDigito('5')}}></Btn>
            <Btn label="2" acao={()=>{addDigito('2')}}></Btn>
            <Btn label="00" acao={()=>{addDigito('00')}}></Btn>
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="9" acao={()=>{addDigito('9')}}></Btn>
            <Btn label="6" acao={()=>{addDigito('6')}}></Btn>
            <Btn label="3" acao={()=>{addDigito('3')}}></Btn>
            <Btn label="." acao={()=>{addDigito('.')}}></Btn>
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="%" acao={()=>{addDigito('%')}}></Btn>

            <Btn label="*" acao={()=>{addDigito('*')}}></Btn>

            <Btn label="+" soma acao={()=>{addDigito('+')}}></Btn>

            
          </View>
          <View style={styles.colunaBotoes1}>
            <Btn label="<" acao={()=>{oprecacao('BS')}}></Btn>

            <Btn label="/" acao={()=>{addDigito('/')}}></Btn>

            <Btn label="-" acao={()=>{addDigito('-')}}></Btn>

            <Btn label="=" acao={()=>{oprecacao('=')}}></Btn>

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
