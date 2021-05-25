import React from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View>
            <View style={styles.root}>
                <Text>
                    This is the users profile page
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    },
    image: {
        width: 200,
        height: 200
    }
})

export default Profile;