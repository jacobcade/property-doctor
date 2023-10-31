import React from 'react';
import {
    Card,
    Text,
    ApplicationProvider,
    Layout,
    Button,
    Icon,
} from '@ui-kitten/components';
import { View, StyleSheet, Image } from 'react-native';
import * as eva from '@eva-design/eva';
import StarRating from './StarRating';
import { MaterialIcons } from '@expo/vector-icons';

const VerifiedIcon = (props) => (
    <Icon {...props} name='verified-user' />
);


const Tools = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={styles.container}>
                    <Layout style={styles.card}>
                        <Layout style={styles.layout1} level='1'>
                            <Image style={styles.image} source={require('../images/workers.jpg')} />
                        </Layout>
                        <Layout style={styles.layout2} level='1'>
                            <Text style={styles.heading}>
                                Tool Name
                            </Text>
                            <Text style={styles.price}>
                                LKR 25,000
                            </Text>
                            <Layout style={styles.star}>
                                <StarRating/>
                            </Layout>
                        </Layout>
                    </Layout>
            </Layout>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 90,
        width: 240,
        padding: 10,
        borderRadius: 10
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    layout1: {
        flex: 1,
        justifyContent: 'center',
    },
    layout2:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },
    star: {
        flexDirection: 'row'
    },
    heading: {
        fontWeight: 'bold',
    },
    price: {
        fontWeight: 'normal',
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 10,
    },
})
export default Tools;