import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View} from "react-native";

const Button = ({ labelButton, onpress}) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress}
        >
            <Text style={styles.Text}>{labelButton}</Text>
        </TouchableOpacity>

    );
};




export default Button

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#024F28',
        width: 140,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',

    },
    Text:{
        color: '#fff',
        fontWeight: 'bold'
    },
    image:{
        width: 50,
        height: 50
    }
})


//<Button color={"#024F28"} title="Comprar" onPress={carrinho}/>
