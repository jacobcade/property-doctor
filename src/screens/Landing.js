import React from 'react';
import {
    ApplicationProvider,
    Layout,
    Text
} from '@ui-kitten/components';
import {
    ScrollView,
} from 'react-native-gesture-handler';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import Category from '../components/Category';
import AddCard from '../components/AddCard';
import ToolsMini from '../components/ToolsMini';

const Heading = (props) => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ScrollView>
                <Layout style={styles.container}>
                    <Layout style={styles.headingLayout}>
                        <Text style={styles.heading}>{props.name}</Text>
                    </Layout>
                    <Layout style={styles.seeAllLayout}>
                        <TouchableOpacity
                            onPress = {() => props.navigation.navigate('AllAdds')}
                        >
                            <Text style={styles.seeAll} >See All {'>>'}</Text>
                        </TouchableOpacity>
                    </Layout>
                </Layout>
            </ScrollView>
        </ApplicationProvider>
    )
}

const Landing = (props) => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ScrollView>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Heading name="Categories" {...props} />
                    <ScrollView horizontal={true}>
                        <Category />
                        <Category />
                        <Category />
                    </ScrollView>
                </Layout>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Heading name="All Adds" screen="AllAdds" />
                    <ScrollView horizontal={true}>
                        <AddCard />
                        <AddCard />
                        <AddCard />
                    </ScrollView>
                </Layout>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Heading name="Trending Adds" />
                    <ScrollView horizontal={true}>
                        <AddCard />
                        <AddCard />
                        <AddCard />
                    </ScrollView>
                </Layout><Layout style={{ backgroundColor: 'transparent' }}>
                    <Heading name="Popular Adds" />
                    <ScrollView horizontal={true}>
                        <AddCard />
                        <AddCard />
                        <AddCard />
                    </ScrollView>
                </Layout>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Heading name="Materials and Tools" />
                    <ScrollView horizontal={true}>
                        <ToolsMini />
                        <ToolsMini />
                        <ToolsMini />
                    </ScrollView>
                </Layout>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Heading name="Work station" />
                    <ScrollView horizontal={true}>
                        <ToolsMini />
                        <ToolsMini />
                        <ToolsMini />
                    </ScrollView>
                </Layout>
            </ScrollView>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 5
    },
    headingLayout: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    seeAllLayout: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: 'transparent'
    },
    seeAll: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#025E85',
        marginRight: 10
    },
})

export default Landing;