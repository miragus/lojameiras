import { View, StyleSheet, Image, Text, Linking } from "react-native";
import { Product } from "../types/Product";
import Button from './Button';
import React, { useState } from "react";



type Props = {
    product: Product;
}

export const ProductItem = (props: Props) => {
    // Estado para controlar o número de itens no carrinho
    const [itensNoCarrinho, setItensNoCarrinho] = useState(0);

    // Função chamada ao clicar no botão "Comprar"
    const carrinho = () => {
        const url = 'https://www.palmeirasstore.com/?gad_source=1&gclid=CjwKCAjw8rW2BhAgEiwAoRO5rMFnkcodTb3q8ZiVMGAL7hgMCy6nxW7eB2TMd67ogeN1E2MjdUU9ABoCJYIQAvD_BwEinit';
        Linking.openURL(url).catch(err => {
            console.error("Failed to open URL:", err);
            alert("Não foi possível abrir o link");
        });
    }

    // Função chamada ao clicar no botão "Adicionar ao carrinho"
    const adicionarAoCarrinho = () => {
        setItensNoCarrinho(itensNoCarrinho + 1);
    }
    return (
        <View style={styles.container}>
            <Image
                //chamando imagem remota
                source={{ uri: props.product.image }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{props.product.name}</Text>
                <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
                <View>
                    <Button labelButton="Comprar" onpress={carrinho} />
                    <Button labelButton="X" onpress={adicionarAoCarrinho} />
                    <Text>Itens no carrinho: {itensNoCarrinho}</Text>

                </View>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20,
        padding: 10,


    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },
    price: {
        color: "green",
        fontSize: 16,
        marginBottom: 10
    }
});