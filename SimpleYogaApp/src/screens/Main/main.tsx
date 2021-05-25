import React from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList} from 'react-native';
import { Divider } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'hello'
    }
];

const Main = ({ navigation, route}) => {

    const renderItem = () => {

    };

    return (
        <View>
            <View style={styles.root}>
                <Text>Hi, {route.params.name}</Text>
                
            </View>
            <Divider style={{ backgroundColor: 'blue' }} />;
            <View>
                <Text>Recent Sequence</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
            <View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        width: 200,
        height: 200
    }
})

export default Profile;