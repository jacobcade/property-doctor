
import React from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import {
    ApplicationProvider,
    Layout,
    Card,
    Text,
    Icon,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva'
import { MaterialIcons } from '@expo/vector-icons';
import StarRating from './StarRating';


const AddCard = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={styles.container}>
                    <Layout style={styles.card}>
                        <Layout style={styles.layout1}>
                            <Image style={styles.image} source={require('../images/workers.jpg')} />
                        </Layout>
                        <Layout style={styles.layout2}>
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
    image: {
        height: 70,
        width: 70,
        borderRadius: 10
    },
    star: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    heading: {
        fontWeight: 'bold',
    },
    verifiedView: {
        flexDirection: 'row',
    },
    verified: {
        fontSize: 12,
        color: '#025E85'
    },
    verifyIcon: {
        marginTop: 2,
    },
})

export default AddCard;