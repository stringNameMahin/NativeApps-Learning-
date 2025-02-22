import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import yup, { number } from 'yup'

const inputSchema = yup.object().shape({
    currency: yup.number().required("Please enter an amount to convert").min(0, "Should be a minimum of 0")
})

export default function Curr() {

    const [currency, setCurrency] = useState('')
    const [converted, setconverted] = useState(false)
    const [USD, setUSD] = useState(false)
    const [EUR, setEUR] = useState(false)
    const [PND, setPND] = useState(false)
    const [YEN, setYEN] = useState(false)
    const [AUS, setAUS] = useState(false)
    const [BTC, setBTC] = useState(false)

    const convert = () => {
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
        // const finalConvert = doConversion(rate, currency)
        setconverted(true)
    
    }

    const doConversion = (rate: number) => {
        // let result = currency * rate;
    }


  return (
    <View style={styles.container}>
        <Text style={styles.headertxt}>Currency Converter or smt</Text>

        <View style={styles.currencyContainer}>
            <View style={styles.card}>
                <Pressable>
                    {/* Will have an onPress for changing currency */}
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{},
    headertxt:{},
    currencyContainer:{},
    card:{}
})