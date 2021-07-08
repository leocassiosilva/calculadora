import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default props=>{

    const  estilosBotoes=[styles.btn]

    if(props.limpar){
        estilosBotoes.push(styles.btn_limpar)
    }

    if(props.soma){
        estilosBotoes.push(styles.btn_soma)
    }
    return(
        <TouchableHighlight style={estilosBotoes} onPress={props.acao}>
            <Text style={styles.texto} >{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    
    btn:{
        backgroundColor:'#404146',
        height:60,
        width:70,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    btn_limpar:{
        backgroundColor:'#ff7900',
        height:60,
        width:70, 
        alignSelf:'flex-end',
        borderRadius:10,
        marginRight:10 
    },
    texto:{
        fontSize:25,
        color:'white'
    },
    btn_soma:{
        backgroundColor:'#404146',
        height:130,
        width:70,
        borderRadius:10
    } 
});