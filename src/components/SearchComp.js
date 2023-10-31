import React from 'react';
import { Input, Layout } from '@ui-kitten/components';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchIcon = () =>{
    return(
        <MaterialIcons name="search" size={26} color="black" />
    )
}

const Search = () => {

    const [value, setValue] = React.useState('');

    return (
        <Layout style={{flexDirection: 'row', margin:10}}>
            <Input
                style={{flex:1}}
                placeholder='Search'
                value={value}
                accessoryLeft={SearchIcon}
                onChangeText={nextValue => setValue(nextValue)}
            />
        </Layout>

    );
};

export default Search;