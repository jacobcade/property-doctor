import { ApplicationProvider, Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { Button, ButtonGroup, Icon } from '@ui-kitten/components';
import SegmentedControl from '../components/SegementedTabs';
import FloatingActionButton from '../components/FloatingActionButtons';
import SegTab2 from '../components/SegementedTab2';


const bigtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Commodo sed egestas egestas fringilla phasellus faucibus. Nullam non nisi est sit amet facilisis magna. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nullam ac tortor vitae purus faucibus ornare. Congue eu consequat ac felis donec et. Ut lectus arcu bibendum at varius vel pharetra. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Lorem mollis aliquam ut porttitor leo a. Id neque aliquam vestibulum morbi. Eu facilisis sed odio morbi quis commodo odio aenean. Amet nulla facilisi morbi tempus iaculis. Cum sociis natoque penatibus et. Dui ut ornare lectus sit amet est placerat in. Vel turpis nunc eget lorem. Mattis nunc sed blandit libero volutpat. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. "

const ProductDescription = (props) => {

    const [tabIndex, setTabIndex] = React.useState(0);
    const handleTabsChange = index => {
        setTabIndex(index);
    };

    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../images/workers.jpg')} />
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.title}>
                            Sample Ad Name Here:
                        </Text>
                        <Text style={styles.specialdetails}>
                            Other details are goes here
                        </Text>
                        <View style={styles.rating}>
                            <AirbnbRating
                                showRating={false}
                                isDisabled={true} size={25}
                                starContainerStyle={{ paddingTop: 10, justifyContent: 'space-between' }} />
                        </View>

                        <SegTab2/>

                        <Text style={styles.details}>
                            {bigtext}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Layout>
                <FloatingActionButton/>
            </Layout>
        </ApplicationProvider>
    )
};
const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 420,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    title: {
        fontSize: 25,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    specialdetails: {
        fontSize: 20,
        color: '#303030'
    },
    details: {
        fontSize: 17
    },
    rating: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        flex: 1
    },
});

export default ProductDescription;

