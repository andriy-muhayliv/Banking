import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const CurrencyItem = (props) => {
    return (
        <View style={styles.currency}>
            <Image source={props.iconSrc} style={styles.icon} />
            <View style={{ marginLeft: '13px' }}>
                <Text style={{ fontSize: '15px', fontWeight: '600' }}>{props.currency}</Text>
                <Text style={{ color: '#485068', fontSize: '15px' }}>Account details</Text>
            </View>
            <Text style={{ fontSize: '15px', fontWeight: '600', position: 'absolute', right: '18px', top: '8px' }}>€ 3,496.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    currency: {
        marginTop: '20px',
        width: '90%',
        height: '60px',
        backgroundColor: '#EDF1F9',
        borderRadius: '30px',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: '34px',
        height: '34px',
        marginLeft: '13px',
    }
})

export default CurrencyItem;