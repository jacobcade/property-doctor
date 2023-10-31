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
                                Category Name
                            </Text>
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
        margin: 5,
        height: 80,
        width: 200,
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
    heading: {
        fontWeight: 'bold',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 10,
    },
})
export default Tools;