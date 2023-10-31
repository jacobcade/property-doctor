import { Button, Icon, Layout, ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import * as eva from '@eva-design/eva'
import { StyleSheet, Text } from 'react-native';

const FloatingActionButton = (props) => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={styles.floatingbuttonarea}>
                <Layout style={styles.noitemsarea}>
                    <Icon name='minus-circle' style={styles.icon} fill='#025E85' />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>1</Text>
                    <Icon name='plus-circle' style={styles.icon} fill='#025E85' />
                </Layout>
                <Button style={styles.actionbutton}>
                    Buy Now
                </Button>
            </Layout>
        </ApplicationProvider>
    )
};

const styles = StyleSheet.create({
    floatingbuttonarea: {
        flex: 1,
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        marginHorizontal: 20,
        marginBottom: 15,
        backgroundColor:'transparent',
        justifyContent: 'center'
    },
    actionbutton: {
        marginLeft: 10,
        flex: 5,
        width: '100%',
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#025E85',
        borderWidth: 0,
        
    },
    noitemsarea: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 0,
        backgroundColor: '#EFEFEF',
    },
    icon: {
        width: 35,
        height: 35,
      },
});

export default FloatingActionButton;