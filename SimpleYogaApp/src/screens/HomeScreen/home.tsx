import React from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.root}>
                <Image style={styles.image} source={require('../../assets/images/homescreen.png')}></Image>
            </View>
            <Text>Build your own personalized yoga experience</Text>
            <View>
                <Button
                    onPress={() => register(navigation)}
                    title="Register"
                />
                <Button
                    onPress={() => login(navigation)}
                    title="Login"
                />
            </View>
        </View>
    )
}

const bottomNavContainer = createAppContainer

const register = (navigation: any) => {
    navigation.navigate('Main', { name: 'User'});
}

const login = (navigation : any) => {
    navigation.navigate('Main', { name: 'User'});
}

const styles = StyleSheet.create({
    root: {

    },
    image: {
        width: 200,
        height: 200
    }
})

export default HomeScreen;