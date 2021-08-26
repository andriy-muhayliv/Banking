import React, { useState } from 'react'
import { Text, View, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ViewDetailModal = () => {
    const [visible, setVisible] = useState(true)
    return (
        <Modal visible={visible} animationType="slide" style={{
            borderColor: 'none', position: 'fixed', left: -2, right: -2, bottom: 0, top: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5.43px)'
        }} >
            <View style={styles.content} >

                <TouchableOpacity onPress={() => setVisible(false)}>
                    <View style={styles.topButton}>
                        <Image source={require('../../images_icons/closeButton/plus.svg')} style={{ width: '60px', height: '60px', top: '-5px' }} />
                    </View>
                </TouchableOpacity>

                <Text style={{ fontWeight: 600, fontSize: '26px', }}>
                    British Sterling (GBP)
                </Text>
                <Text style={{ fontSize: '18px' }}>£ 8,275.29</Text>
                <Text style={{ fontSize: '16px', textAlign: 'center', marginTop: '23px', paddingLeft: '50px', paddingRight: '50px' }}>
                    [Currency name] details
                    here you can find the account number,
                    IBAN and also share and send money
                </Text>
                <Text style={{ fontSize: '18px', marginTop: '60px' }}>Account number: 123456789 00</Text>
                <Text style={{ fontSize: '18px' }}>Sort code: 98-76-54</Text>
                <Text style={{ fontSize: '18px', marginTop: '30px' }}>IBAN: GBP 00 12345 6789 100</Text>
                <View style={{ flexDirection: 'row', marginTop: '10px', marginRight: '80px', marginLeft: ' 80px', width: '50%', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: '19px', fontWeight: 600 }}>Copy</Text>
                    <Image source={require('../../images_icons/Vertical.svg')} style={{ width: '1px', height: '28px' }} />
                    <Text style={{ fontSize: '19px', fontWeight: 600 }}>Shape</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <View style={{ marginTop: '40px', width: '200px', height: '46px', border: '1px solid #B5BBC9', borderRadius: '50px', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontWeight: 600, fontSize: '19px' }}>Close account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        height: '75%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        alignItems: 'center',

    },
    topButton: {
        width: '60px',
        height: '60px',
        backgroundColor: '#FFAC30',
        borderRadius: '100px',
        top: '-30px',
        border: '4px solid #EDF1F9',
        alignItems: 'center',
        position: 'relative'
    }
})


export default ViewDetailModal;