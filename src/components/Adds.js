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
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerifiedIcon = (props) => (
    <Icon {...props} name='verified-user' />
);


const Adds = (props) => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <TouchableOpacity activeOpacity={1} onPress = {() => props.navigation.navigate('ProductDescription')}>
                <Layout style={styles.container}>
                    <Layout style={styles.card}>
                        <Layout style={styles.layout1} level='1'>
                            <Image style={styles.image} source={require('../images/workers.jpg')} />
                        </Layout>
                        <Layout style={styles.layout2} level='1'>
                            <Layout style={{ flex: 2 }}>
                                <Text style={styles.heading}>
                                    This is the heading
                                </Text>
                                <Layout style={styles.star}>
                                    <View style={styles.verifiedView}>
                                        <Text style={styles.verified}>Verified Service</Text>
                                        <MaterialIcons style={styles.verifyIcon} name='verified-user' size={14} color='#025E85' />
                                    </View>
                                    <StarRating />
                                </Layout>
                                <Text style={styles.desc} level='1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                </Text>
                            </Layout>
                            <Button style={styles.button} size='small'>
                                Enquire
                            </Button>
                        </Layout>
                    </Layout>
                </Layout>
            </TouchableOpacity>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    layout1: {
        flex: 2,
        justifyContent: 'center',

    },
    layout2: {
        flex: 3,
        flexDirection: 'column'

    },
    star: {
        flexDirection: 'row'
    },
    star1: {
        height: 15,
        width: 15
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    verifiedView: {
        flexDirection: 'row',
        marginRight: 10,
    },
    verified: {
        fontSize: 12,
        color: '#025E85'
    },
    verifyIcon: {
        marginTop: 2,
    },
    desc: {

        fontWeight: 'normal',
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    button: {

        height: 50,
        marginTop: 10,
        backgroundColor: '#025E85',
        borderWidth: 0,


    },
    icon: {
        width: 10,
        height: 10,
    }
})
export default Adds;