import React from 'react';
import { 
    StyleSheet,
    Text,
    View
 } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import StartRating from './StarRating';

const TestingComp = () =>{
    return(
        <View>
            <Text>This is just a testing component</Text>
            <View>
                <MaterialIcons name='verified-user' size={20} color='#025E85'/>
                <StartRating/>
            </View>
        </View>
    )
}
export default TestingComp;