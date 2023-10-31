import React from 'react';
import {
    ApplicationProvider,
    Layout
} from '@ui-kitten/components';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Card,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const UserImage = () => {
    return (
        <Image
            style={styles.userImage} 
            source={require('../images/profile.png')}
        />
    )
}

const Settings = (props) => {
    return(
        <Layout style={styles.settingLayout}>
            <Layout style={styles.settingNameLayout}>
                <Text style={styles.settingName}>{props.name}</Text>
            </Layout>
            <Layout style={styles.settingIcon}>
                <AntDesign name="right" size={24} color="black" />
            </Layout>
        </Layout>
    )
}

const UserAccount = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            <View>
                <Layout style={styles.upperContainer}>
                    <Layout style={styles.imageLayout}>
                        <UserImage />
                    </Layout>
                    <Layout style={styles.infoLayout}>
                        <Text style={styles.username}>Username Here</Text>
                        <Text style={styles.bio}>Profile Bio Sample</Text>
                    </Layout>
                    <Layout style={styles.iconCircle}>
                        <Ionicons name="md-camera-sharp" size={20} color="white" />
                    </Layout>
                </Layout>
                <Settings name="Account Setup"/>
                <Settings name="Job Management"/>
                <Settings name="Status Management"/>
            </View>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    upperContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#299B01',
        borderRadius: 10,
        margin: 10,
        padding: 5,
    },
    imageLayout:{
        backgroundColor: 'transparent'
    },
    userImage:{
        height: 80,
        width: 80,
        margin:20,
        marginRight: 10,
    },
    infoLayout:{
        backgroundColor: 'transparent',
        margin: 20,
    },
    username:{
        color: 'white',
        fontSize: 20
    },
    bio:{
        color: 'white',
    },
    iconCircle:{
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#025E85'
    },
    settingLayout:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        borderRadius: 10
    },
    settingNameLayout:{
        margin: 20,
    },
    settingName:{
        fontSize: 18,
    },
    settingIcon:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 20
    }
});

export default UserAccount;


