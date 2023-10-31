import React from 'react';
import {
    ImageBackground,
    Image,
    StyleSheet,
    View
} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
    ApplicationProvider,
    Divider,
    Layout,
    Button,
    Icon,
    Input,
    Text,
    Avatar
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import wallpaper from '../images/wallpaper.jpg';
import pdlogo from '../images/pdlogo.png';

const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
);

const Login = (props) => {

    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    )

    const renderCaption = () => {
        return(
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>
                    Should contain at least 8 characters.
                </Text>
            </View>
        )
    }

    return(
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={styles.container}>
                <ImageBackground source={wallpaper} resizeMode='cover' style={styles.wallpaper}>
                    <Image 
                        source={pdlogo}
                        resizeMode='contain'
                        style={styles.logo}/>
                    <Input
                        style={styles.input}
                        value={value}
                        placeholder='USERNAME'/>
                    <Input
                        style={styles.input}
                        value={value}
                        placeholder='PASSWORD'
                        //caption={renderCaption}
                        //accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={nextValue => setValue(nextValue)}/>
                    <Divider
                        style={styles.divider}
                    />    
                    <Button
                        style={styles.button}
                        appearance='filled'
                        status='primary'
                        size='medium'
                        onPress={() => props.navigation.navigate("Home")}>
                            LOGIN TO START THE DAY
                        </Button>
                    <Text style={styles.text}>Or</Text>
                    <Button
                        style={styles.button}
                        appearance='outline'
                        status='basic'
                        size='medium'
                        onPress = {() => props.navigation.navigate("Home")}>
                            LOGIN TO QUICK ACCESS
                    </Button>
                </ImageBackground>
            </View>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    wallpaper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
        
    },
    logo:{
        marginBottom: 100,
        width: 300,
        height: 110
    },
    text:{
        color: '#bfbfbf',
        fontWeight: 'bold'
    },
    button:{
        margin: 10,
        padding: 10,
        width: 350,
        alignItems: 'center',
    },
    input:{
        width: 350,
        margin: 10
    },
    captionContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    captionIcon:{
        width: 10,
        height: 10,
        maiginRight: 5
    },
    captionText:{
        fontSize: 12,
        fontWeight: "400",
        color: '#8F9BB3'
    },
    divider:{
        height: 2,
        width: 350,
        color: '#296B06'
    }
});

export default Login;