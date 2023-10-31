import React from 'react';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider,
    Text,
    Layout
} from '@ui-kitten/components';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import SearchComp from '../components/SearchComp'
import Tools from '../components/Tools';

const AllAdds = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ScrollView>
                <SearchComp />
                <Tools/>
                <Tools/>
                <Tools/>
            </ScrollView>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({

})

export default AllAdds;
