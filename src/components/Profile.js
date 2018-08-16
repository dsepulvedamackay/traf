import React from 'react';
import {Text, View} from 'react-native';

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Perfil',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
    }

    logout() {
        console.log('Cerrando sesión');
    }

    render() {
        return (
            <View >
               <Text>wena wena perfil</Text>
            </View>
        )
    }
}