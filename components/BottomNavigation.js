import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Link, NativeRouter, Route } from "react-router-native";
import Card from './Card';
import Home from './Home';
import Settings from './Settings';
import TopUp from './TopUp';


const BottomNavigation = (props) => {
    //Activated nav link
    const [homeStroke, sethomeStroke] = useState(true);
    const [cardStroke, setcardStroke] = useState(false);
    const [topUpStroke, setTopUpStroke] = useState(false);
    const [settingsStroke, setSettingsStroke] = useState(false);

    return (
        <NativeRouter style={{flex:1}}>
            <View style={{flex: 9}}>
                <Route exact path='/' component={Home} />
                <Route path='/card' component={Card} />
                <Route path='/topup' component={TopUp} />
                <Route path='/settings' component={Settings} />
            </View>
            {/* Ve can refactoring code below */}
            <View style={styles.nav__menu}>
                <Link to='/' underlayColor="none" onPress={() => {
                    props.setTopText('Home');
                    sethomeStroke(true);
                    setcardStroke(false);
                    setTopUpStroke(false);
                    setSettingsStroke(false);
                }} style={{ flex: 1, }} >
                    <View style={{ alignItems: 'center' }} >
                        <Image source={homeStroke ? require('../images_icons/NavItem/HomeActive.svg') : require('../images_icons/NavItem/Home.svg')}
                            style={{ width: 24, height: 24 }} />
                        <Text >Home</Text>
                    </View>
                </Link>
                <Link to='/card' underlayColor="none" onPress={() => {
                    props.setTopText('Card');
                    sethomeStroke(false);
                    setcardStroke(true);
                    setTopUpStroke(false);
                    setSettingsStroke(false);
                }} style={{ flex: 1, }} >
                    <View style={{ alignItems: 'center' }}>
                        <Image source={cardStroke ? require('../images_icons/NavItem/CardActive.svg') : require('../images_icons/NavItem/Card.svg')}
                            style={{ width: 24, height: 24 }} />
                        <Text>Card</Text>
                    </View>
                </Link >
                <Link to='/topup' underlayColor="none" onPress={() => {
                    props.setTopText('Top up');
                    sethomeStroke(false);
                    setcardStroke(false);
                    setTopUpStroke(true);
                    setSettingsStroke(false);
                }} style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={topUpStroke ? require('../images_icons/NavItem/money-bag 1Active.svg') : require('../images_icons/NavItem/money-bag 1.svg')}
                            style={{ width: 24, height: 24 }} />
                        <Text>Top up</Text>
                    </View>
                </Link>
                <Link to='/settings' underlayColor="none" onPress={() => {
                    props.setTopText('Settings');
                    sethomeStroke(false);
                    setcardStroke(false);
                    setTopUpStroke(false);
                    setSettingsStroke(true);
                }} style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={settingsStroke ? require('../images_icons/NavItem/bar-chartActive.svg') : require('../images_icons/NavItem/bar-chart.svg')}
                            style={{ width: 24, height: 24,  }} />
                        <Text>Settings</Text>
                    </View>
                </Link>
            </View>
        </NativeRouter>
    )
}

const styles = StyleSheet.create({
    nav__menu: {
        flex:1,
        width: '100%',
        height: 81,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOffset: {
            width: 2,
            height: -6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        shadowColor: '#0D1F3C',
        paddingTop: 10,
    }
});

export default BottomNavigation;