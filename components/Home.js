import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import CurrencyItem from './Currency Item/CurrencyItem'
import Loader from './Loader/Loader';
import ViewDetailModal from './ModalsComponents/VievDetailModal';
import TabItem from './TabsItem/TabItem';



const Home = (props) => {

    let [data, setData] = useState()

    const url = 'https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data';

    if (!data) {
        fetch(url, {
            headers: {
                'x-api-key': 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59',
            }
        })
            .then(responce => responce.json())
            .then(json => setData(json))
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',flex:1 }}>
            <View style={styles.current__balance}>
                <Text style={{ color: '#262F56', textAlign: 'center', paddingTop: 7, fontSize: 18 }}>Accounts Name (EUR)</Text>
                <Text style={{ color: '#262F56', textAlign: 'center', fontSize: 35 }}>€{data ? data.body.balance : <Loader />}</Text>
                <Text style={{ color: '#262F56', textAlign: 'center', fontSize: 16 }}>Current balance</Text>
            </View>
            {/* You can add any page on this button use "modal={<AnyPage />}" */}
            <View style={{ flex:2, flexDirection: 'row', justifyContent: 'space-around', width: 332, height: 77, marginTop: 24 }}>
                <TabItem modal={<ViewDetailModal />} text={'View details'} imageSrc={require('../images_icons/Home icons/plus-circle.svg')} tabColor={'#262F56'} />
                <TabItem text={'Exchange'} imageSrc={require('../images_icons/Home icons/trade.svg')} tabColor={'#EDF1F9'} />
                <TabItem text={'Send Money'} imageSrc={require('../images_icons/Home icons/send.svg')} tabColor={'#262F56'} />
                <TabItem text={'Statistic'} imageSrc={require('../images_icons/Home icons/activity.svg')} tabColor={'#EDF1F9'} />
            </View>

            <View style={styles.current_accounts}>
               <ScrollView > 
                   <Text style={styles.account__text}>
                    All currency accounts
                </Text>
                <View style={{ alignItems: 'center'}}>
                    {data ? data.body.accounts.map((el, id) => {
                        return (<CurrencyItem key={id} title={el.title} currency={el.currency} balance={el.balance} />)
                    }) : <Loader />}
                   
                </View>
                    </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    current__balance: {
        width: '70%',
        height: 106,
        backgroundColor: '#F1F3F6',
        borderRadius: 20,
        marginTop: 30,
        flex:2,
    },
    current_accounts: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex:6,
    },
    account__text: {
        marginLeft: 32,
        marginTop: 20,
        fontSize: 18,
    }

});

export default Home;