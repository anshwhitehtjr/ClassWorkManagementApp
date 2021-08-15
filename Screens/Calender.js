import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Calendar from 'react-native-calendar';

class CalenderScreen extends Component
{
    render ()
    {
        return (
            <View>
                <Calendar
                    current={ '2021-15-8' }
                    minDate={ '2000-01-01' }
                    maxDate={ '2021-30-8' }
                    onDateSelect={ date =>
                    {
                        console.log("selected date is ", date.toString().slice(0, 10));
                    }
                    }
                />
                <TouchableOpacity onPress={this.props.navigation.navigate("TaskScreen")} >
                    <Text> ADD TASK </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

export default CalenderScreen;
