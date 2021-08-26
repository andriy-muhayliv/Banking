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
        <NativeRouter>
            <View >
                <Route exact path='/' component={Home} />
                <Route path='/card' component={Card} />
                <Route path='/topup' component={TopUp} />
                <Route path='/settings' component={Settings} />
            </View>
            {/* Ve can refactoring code below */}
            <View style={styles.nav__menu}>
                <Link to='/' onPress={() => {
                    props.setTopText('Home');
                    sethomeStroke(true);
                    setcardStroke(false);
                    setTopUpStroke(false);
                    setSettingsStroke(false);
                }} style={{ flex: 1, }} >
                    <View style={{ alignItems: 'center' }} >
                        <Image source={homeStroke ? require('../images_icons/NavItem/HomeActive.svg') : require('../images_icons/NavItem/Home.svg')}
                            style={{ width: '24px', height: '24px' }} />
                        <Text >Home</Text>
                    </View>
                </Link>
                <Link to='/card' onPress={() => {
                    props.setTopText('Card');
                    sethomeStroke(false);
                    setcardStroke(true);
                    setTopUpStroke(false);
                    setSettingsStroke(false);
                }} style={{ flex: 1, }} >
                    <View style={{ alignItems: 'center' }}>
                        <Image source={cardStroke ? require('../images_icons/NavItem/CardActive.svg') : require('../images_icons/NavItem/Card.svg')}
                            style={{ width: '24px', height: '24px' }} />
                        <Text>Card</Text>
                    </View>
                </Link>
                <Link to='/topup' onPress={() => {
                    props.setTopText('Top up');
                    sethomeStroke(false);
                    setcardStroke(false);
                    setTopUpStroke(true);
                    setSettingsStroke(false);
                }} style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={topUpStroke ? require('../images_icons/NavItem/money-bag 1Active.svg') : require('../images_icons/NavItem/money-bag 1.svg')}
                            style={{ width: '24px', height: '24px' }} />
                        <Text>Top up</Text>
                    </View>
                </Link>
                <Link to='/settings' onPress={() => {
                    props.setTopText('Settings');
                    sethomeStroke(false);
                    setcardStroke(false);
                    setTopUpStroke(false);
                    setSettingsStroke(true);
                }} style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={settingsStroke ? require('../images_icons/NavItem/bar-chartActive.svg') : require('../images_icons/NavItem/bar-chart.svg')}
                            style={{ width: '24px', height: '24px', stroke: 'red' }} />
                        <Text>Settings</Text>
                    </View>
                </Link>
            </View>
        </NativeRouter>
    )
}

const styles = StyleSheet.create({
    nav__menu: {
        width: '100%',
        height: '81px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: '0',
        backgroundColor: 'white',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        boxShadow: '0px 3px 8px #0D1F3C',
        paddingTop: '10px',
    }
});

export default BottomNavigation;