import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Calender from './Calender';

class HomeScreen extends Component
{
    constructor ()
    {
        super();
        this.state = {
        };
    }

    render ()
    {
        return (
            <View>
                <Text> HomeScreen </Text>
                <TouchableOpacity onPress={ this.props.navigation.navigate("AppTabNavigator") } >
                    <Text> GO TO CALENDAR </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;
