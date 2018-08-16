import React from 'react';
import {Linking, Text, View,ScrollView} from 'react-native';
import {Button, Card} from "react-native-elements";
import {firebaseApp} from '../App'

const images = [
    {
        key: 1,
        name: "Nathan Anderson",
        url: "https://unsplash.com/photos/C9t94JC4_L8",
        image: require("../img/1.jpg")
    },
    {
        key: 2,
        name: "Jamison McAndie",
        url: "https://unsplash.com/photos/waZEHLRP98s",
        image: require("../img/1.jpg")
    },
    {
        key: 3,
        name: "Alberto Restifo",
        url: "https://unsplash.com/photos/cFplR9ZGnAk",
        image: require("../img/1.jpg")
    },
    {
        key: 4,
        name: "John Towner",
        url: "https://unsplash.com/photos/89PFnHKg8HE",
        image: require("../img/1.jpg")
    }
];

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
        this.itemsRef = firebaseApp.database().ref();
    }

    
      render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                {images.map(({name,image, url, key}) => (
                    <Card title={`CARD ${key}`} image={image} key={key}>
                        <Text style={{marginBottom: 10}}>
                            Photo by {name}.
                        </Text>
                        <Button
                            backgroundColor="#03A9F4"
                            title="Ver"
                            onPress={() => Linking.openURL(url)}
                        />
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
  }
}