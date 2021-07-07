import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ColorPropType} from 'react-native';

export default props=>{


    return(
        <View style={styles.display}>
            <Text style={styles.textoDisplayOperacao}
            numberOfLines={1}>{props.valor}</Text>
            <Text style={styles.textoDisplayResultado}
            numberOfLines={1}>{props.resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    display:{
        backgroundColor:'#d4dfbf',
        height:100,
        margin:10,
        borderRadius:10,
        
    },
    textoDisplayOperacao:{
        color:'black',
        fontSize:30,
        alignSelf:'flex-end',
        padding:5
    },
    textoDisplayResultado:{
        color:'black',
        fontSize:30,
        alignSelf:'flex-end',
        padding:5
    }
    
});