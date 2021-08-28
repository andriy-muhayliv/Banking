import React, { useState } from 'react'
import { Text, View, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ViewDetailModal = () => {
    const [visible, setVisible] = useState(true)
    return (
        <Modal visible={visible} animationType="slide"  >
            <View style={styles.content} >

                <TouchableOpacity onPress={() => setVisible(false)}>
                    <View style={styles.topButton}>
                        <Image source={require('../../images_icons/closeButton/plus.svg')} style={{ width: 60, height: 60, top: -5 }} />
                    </View>
                </TouchableOpacity>

                <Text style={{ fontWeight: '600', fontSize: 26, }}>
                    British Sterling (GBP)
                </Text>
                <Text style={{ fontSize: 18 }}>£ 8,275.29</Text>
                <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 23, paddingLeft: 50, paddingRight: 50 }}>
                    [Currency name] details
                    here you can find the account number,
                    IBAN and also share and send money
                </Text>
                <Text style={{ fontSize: 18 , marginTop: 60 }}>Account number: 123456789 00</Text>
                <Text style={{ fontSize: 18 }}>Sort code: 98-76-54</Text>
                <Text style={{ fontSize: 18, marginTop: 30 }}>IBAN: GBP 00 12345 6789 100</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 80, marginLeft: 80, width: '50%', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 19, fontWeight: '600' }}>Copy</Text>
                    <Image source={require('../../images_icons/Vertical.svg')} style={{ width: 1, height: 28 }} />
                    <Text style={{ fontSize: 19, fontWeight: '600' }}>Shape</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('close')}>
                    <View style={{ marginTop: 40, width: 200, height: 46, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontWeight: '600', fontSize: 19 }}>Close account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '75%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',

    },
    topButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FFAC30',
        borderRadius: 100,
        top: -30,
        alignItems: 'center',
        position: 'relative'
    }
})


export default ViewDetailModal;