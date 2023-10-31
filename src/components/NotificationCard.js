import { ApplicationProvider, BottomNavigationTab, Layout, Divider, Icon } from '@ui-kitten/components';
import Reach from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';


//no need for a seperate component i guess; check Notifications.js

export default function NotificationCard(params) {
    return (
        <ApplicationProvider {...eva} theme={eva.light} >

            <Layout style={styles.container}>
                <Layout style={styles.textcontainer}>
                <Text style={styles.title}>Recieved New Service Ticket</Text>
                <Text style={styles.datentime}>Feb 24, 2022 at 9:23 AM</Text>
                </Layout>
                <Icon name='arrow-down' style={styles.icon} fill='#025E85' />
            </Layout>
            
            
        </ApplicationProvider>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5E85',
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 20,
        top: 0
    },
    textcontainer: {
        backgroundColor: 'transparent',
        width: '95%',
        paddingRight: 10
    },
    title: {
        fontSize: 20,
        color: '#383838'
    },
    datentime: {
        fontSize: 13,
        color: '#858585'
    },
    divider:{
        height: 2,
        width: 350,
        color: '#1c1d1f'
    },
    icon: {
        width: 35,
        height: 35,
      },
})
