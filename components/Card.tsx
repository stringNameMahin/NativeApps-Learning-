import React from 'react'
import type { PropsWithChildren, JSX } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CardProps = PropsWithChildren<{
    name: string;
    symbol: string;
}>

const Card = (props: CardProps): JSX.Element =>{
    return(
        <View style={styles.btnContainer}>
            <Text style={styles.btntxt}>{props.name}</Text>
            <Text style={styles.btntxt}>{props.symbol}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        padding: 8,
        backgroundColor: '#FFFAFA',
        alignItems: 'center'
    },
    btntxt:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 5,
        padding: 8,
    }
})

export default Card