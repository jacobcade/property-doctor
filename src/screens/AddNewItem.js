import { ApplicationProvider, BottomNavigationTab } from '@ui-kitten/components';
import Reach from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import ProductDescription from './ProductDescription';


const StarIcon = (props) => (
    <Icons {...props} name='star' />
);

export default function AddNewItem(params) {
    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            
                <ProductDescription/>
            
            
        </ApplicationProvider>
    )
};


