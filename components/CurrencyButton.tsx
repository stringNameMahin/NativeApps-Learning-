import React from 'react'
import type { PropsWithChildren, JSX } from 'react'

import { View, Text, StyleSheet} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})

export default CurrencyButton