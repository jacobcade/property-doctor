import React from 'react';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider,
} from '@ui-kitten/components';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import SearchComp from '../components/SearchComp'
import Adds from '../components/Adds';

const AllAdds = (props) => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ScrollView>
                <SearchComp />
                <Adds {...props}/>
                <Adds />
                <Adds />
                <Adds />
            </ScrollView>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({

})

export default AllAdds;
