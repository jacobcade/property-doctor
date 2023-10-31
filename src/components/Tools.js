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
                                This is the heading
                            </Text>
                            <Layout style={styles.star}>
                                <StarRating/>
                            </Layout>
                            <Text style={styles.price}>
                                LKR 25,000
                            </Text>
                            <Button style={styles.button} size='small'>
                                Buy Now
                            </Button>
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
    },
    star: {
        flexDirection: 'row'
    },
    heading: {
        fontWeight: 'bold',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    button: {
        alignSelf: 'stretch',
        marginTop: 10,
    },
    price: {
        fontWeight: 'bold',
    },
})
export default Tools;