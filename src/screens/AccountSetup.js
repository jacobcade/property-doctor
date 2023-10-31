import React from 'react';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider,
    Text,
    Layout
} from '@ui-kitten/components';
import {
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountSetup = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ScrollView>
                <Layout style={styles.container}>
                    <Layout style={styles.topContainer}>
                        <Layout style={styles.imageLayout}>
                            <Image style={styles.image} source={require('../images/workers.jpg')} />
                            <Layout style={styles.iconCircle}>
                                <Ionicons name="md-camera-sharp" size={20} color="white" />
                            </Layout>
                        </Layout>
                        <Text style={styles.username}>
                            User Name Here
                        </Text>
                        <Text style={styles.bio}>
                            Profile Bio Here
                        </Text>
                        <Text>
                            Address
                        </Text>
                    </Layout>
                    <Layout style={styles.botContainer}>
                        <Text>
                            Profile Type - Apartment
                        </Text>
                        <Text>
                            Connect -
                        </Text>
                        <Text>
                            Package Details
                        </Text>
                    </Layout>
                </Layout>
            </ScrollView>
        </ApplicationProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 20,
        margin: 10,
    },
    topContainer: {
        marginTop: 40,
        alignSelf: 'center',
        alignItems: 'center',
    },
    imageLayout: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    iconCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#025E85',
        position: 'absolute'
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bio: {
        fontWeight: 'normal',
    },
    botContainer: {
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }

})
export default AccountSetup;