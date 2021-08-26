import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import CurrencyItem from './Currency Item/CurrencyItem'
import ViewDetailModal from './ModalsComponents/VievDetailModal';
import TabItem from './Tabs item/tabItem';



const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.current__balance}>
                <Text style={{ color: '#262F56', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}>Accounts Name (EUR)</Text>
                <Text style={{ color: '#262F56', textAlign: 'center', fontSize: '35px' }}>€3,496.00</Text>
                <Text style={{ color: '#262F56', textAlign: 'center', fontSize: '16px' }}>Current balance</Text>
            </View>
            {/* You can add any page on this button use "modal={<AnyPage />}" */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '332px', height: '77px', marginTop: '24px' }}>
                <TabItem modal={<ViewDetailModal />} text={'View details'} imageSrc={require('../images_icons/Home icons/plus-circle.svg')} tabColor={'#262F56'} />
                <TabItem text={'Exchange'} imageSrc={require('../images_icons/Home icons/trade.svg')} tabColor={'#EDF1F9'} />
                <TabItem text={'Send Money'} imageSrc={require('../images_icons/Home icons/send.svg')} tabColor={'#262F56'} />
                <TabItem text={'Statistic'} imageSrc={require('../images_icons/Home icons/activity.svg')} tabColor={'#EDF1F9'} />
            </View>

            <View style={styles.current_accounts}>
                <Text style={styles.account__text}>
                    All currency accounts
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <CurrencyItem iconSrc={require('../images_icons/Currency Icon/Euro.svg')} currency={'Euro (EUR)'} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    current__balance: {
        width: '325px',
        height: '106px',
        backgroundColor: '#F1F3F6',
        borderRadius: '12px',
        marginTop: '37px',
    },
    current_accounts: {
        width: '100%',
        minHeight: '80vh',
        backgroundColor: 'white',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
    },
    account__text: {
        marginLeft: '32px',
        marginTop: '20px',
        fontSize: '18px',
    }

});

export default Home;