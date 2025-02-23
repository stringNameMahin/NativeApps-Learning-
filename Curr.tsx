import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import * as yup from 'yup'

const inputSchema = yup.object().shape({
    currency: yup.number().required("Please enter an amount to convert").min(0, "Should be a minimum of 0")
})

export default function Curr() {

    const [isCurrency, setisCurrency] = useState<number>(0)
    const [converted, setconverted] = useState(false)
    const [USD, setUSD] = useState(false)
    const [EUR, setEUR] = useState(false)
    const [PND, setPND] = useState(false)
    const [YEN, setYEN] = useState(false)
    const [AUS, setAUS] = useState(false)
    const [BTC, setBTC] = useState(false)

    const convert = (currency: number) => {
        let rate = 0

        if (USD) {
            rate = 0.0115116
        }
        if (EUR) {
            rate = 0.0110137
        }
        if (PND) {
            rate = 0.00912327
        }
        if (YEN) {
            rate =1.711
        }
        if (AUS) {
            rate = 0.0179
        }
        if (BTC) {
            rate = 0.000000119
        }
        const finalConvert = doConversion(rate, currency)
        setisCurrency(finalConvert)
        setconverted(true)
    
    }

    const doConversion = (rate: number, currency: number) => {
        let result = currency * rate;
        return result
    }

    const clear = () => {
        setisCurrency(0)
        setconverted(false)
    }


  return (
    <ScrollView keyboardShouldPersistTaps = "handled">
    <SafeAreaView style={styles.container}>
        <Text style={styles.headertxt}>Currency Converter or smt</Text>

        <View style={styles.currencyContainer}>
            <View style={styles.card}>
                <Pressable>
                    {/* Will have an onPress for changing currency */}
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{},
    headertxt:{},
    currencyContainer:{},
    card:{}
})