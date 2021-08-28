import React, { Component, useState } from 'react'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'

const TabItem = (props) => {

    const [modal, setModal] = useState(false)


    return (
        <Pressable onPress={() => props.modal ? setModal(true) : null}>
            <View style={{ alignItems: 'center' }} >
                <View style={[styles.tab__item, { backgroundColor: `${props.tabColor}`, }]}>
                    <Image source={props.imageSrc}
                        style={{ width: 24, height: 24 }} />
                    {modal ? props.modal : null}
                </View>
                <Text style={{ fontSize: 12, color: 'white', marginTop: 4 }}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    tab__item: {
        width: 49,
        height: 49,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TabItem;
