import { ApplicationProvider, BottomNavigationTab, Layout, Divider, Icon } from '@ui-kitten/components';
import Reach from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { AntDesign } from '@expo/vector-icons';
//import NotificationCard from '../components/NotificationCard';

const NotificationCard = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            <Layout style={styles.container}>
                <Layout style={styles.textcontainer}>
                    <Text style={styles.title}>Recieved New Service Ticket Request</Text>
                    <Text style={styles.datentime}>Feb 24, 2022 at 9:23 AM</Text>
                </Layout>
                <Layout>
                    <AntDesign style={styles.icon} name="downcircle" size={24} color="#025E85" />
                </Layout>
            </Layout>
            <Divider style={{height:2, color: 'black'}}/>
        </ApplicationProvider>
    )
};

export default function Notifications(params) {
    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            <ScrollView style={{marginHorizontal: 20}}>
                <Text style={styles.day}>
                    Today
                </Text>
                <NotificationCard />
                <NotificationCard />
                <Text style={styles.day}>
                    Yesterday
                </Text>
                <NotificationCard />
            </ScrollView>
        </ApplicationProvider>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        
        backgroundColor: 'transparent',
        borderBottomColor: '#D1D1D1',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingBottom: 5,
    },
    textcontainer: {
        paddingRight: 0,
        width: '90%',
        backgroundColor: 'transparent'
    },
    title: {
        fontSize: 20,
        color: '#383838'
    },
    datentime: {
        fontSize: 14,
        color: '#858585'
    },
    icon: {
        
                
    },
    day:{
        fontSize: 22,
        fontWeight: '700',
        marginTop: 20
    }
})



// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#ff5E85',
//         flex: 1,
//         flexDirection:'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         margin: 20,
//         top: 0
//     },
//     textcontainer: {
//         backgroundColor: 'transparent',
//         width: '95%',
//         paddingRight: 10
//     },
//     title: {
//         fontSize: 20,
//         color: '#383838'
//     },
//     datentime: {
//         fontSize: 13,
//         color: '#858585'
//     },
//     divider:{
//         height: 2,
//         width: 350,
//         color: '#1c1d1f'
//     },
//     icon: {
//         width: 35,
//         height: 35,
//       },
// })


