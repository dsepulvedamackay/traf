import React from 'react';
import {Text, View} from 'react-native';


export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Inicio',
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

    render() {
        return (
            <View>
               <Text>wena wena inicio</Text> 
            </View>
        )
    }
}