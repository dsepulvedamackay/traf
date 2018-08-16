import React from 'react';
import {Button, View, ScrollView} from 'react-native';
import {Card, FormInput, FormLabel} from "react-native-elements";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Bienvenido a Traf',
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
        this.props = {email: '', password: ''};
    }

    login() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View>
             <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                <Card>
                    <FormLabel>Correo</FormLabel>
                    <FormInput placeholder="Email"
                               value={this.props.email}/>

                    <FormLabel>Contraseña</FormLabel>
                    <FormInput secureTextEntry placeholder="Contraseña..."
                               value={this.props.password}/>

                    <Button
                        buttonStyle={{marginTop: 40}}
                        backgroundColor="#03A9F4"
                        title="Entrar"
                        onPress={() => {
                            this.login()
                        }}
                    />
                </Card>
                </ScrollView>
            </View>
        )
    }
}