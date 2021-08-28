import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const CurrencyItem = (props) => {
    let icon = 'Euro.svg'
    let currency = ''
    if (props.currency === 'eur') {
        icon = 'Euro.svg'
        currency = '€'
    } else if (props.currency === 'gbp') {
        icon = 'Gbp.svg'
        currency = '£'
    } else if (props.currency === 'usd') {
        icon = 'Usd.svg'
        currency = '$'
    }
    else if (props.currency === 'krw') {
        icon = 'Krw.svg'
        currency = '₩'
    }

    return (
        <View style={styles.currency}>
            <Image source={require('../../images_icons/Currency Icon/' + 'Euro.svg')} style={styles.icon} />
            <View style={{ marginLeft: 13 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.title}</Text>
                <Text style={{ color: '#485068', fontSize: 15 }}>Account details</Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: '600', position: 'absolute', right: 18, top: 8 }}>{[currency, ' ', props.balance]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    currency: {
        marginTop: 20,
        width: '90%',
        height: 60,
        backgroundColor: '#EDF1F9',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 34,
        height: 34,
        marginLeft: 13,
    }
})

export default CurrencyItem;