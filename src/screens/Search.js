import Reach from 'react';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider,
    BottomNavigationTab,
    Layout,
    Button
} from '@ui-kitten/components';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchComp from '../components/SearchComp';


const StarIcon = (props) => (
    <Icons {...props} name='star' />
);

export default function Search(params) {
    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            <Layout style={styles.container}>
                <Layout style={styles.input}>
                    <SearchComp />
                </Layout>
                <Button style={styles.button} size='medium'>
                    Search
                </Button>
            </Layout>
        </ApplicationProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row'

    },
    input: {
        flex: 4,
    },
    button: {
        flex: 1,
        alignSelf: 'center',
        marginRight: 10,
    }
})


