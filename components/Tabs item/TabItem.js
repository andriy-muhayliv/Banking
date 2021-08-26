import React, { Component, useState } from 'react'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'

const TabItem = (props) => {

    const [modal, setModal] = useState(false)

    return (
        <Pressable onPress={() => props.modal ? setModal(true) && setModal(true) : null}>
            <View style={{ alignItems: 'center' }} >
                <View style={[styles.tab__item, { backgroundColor: `${props.tabColor}`, }]}>
                    <Image source={props.imageSrc}
                        style={{ width: '24px', height: '24px' }} />
                    {modal ? props.modal : null}
                </View>
                <Text style={{ fontSize: '12px', color: 'white', marginTop: '4px' }}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    tab__item: {
        width: '49px',
        height: '49px',
        borderRadius: '16px',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TabItem;
