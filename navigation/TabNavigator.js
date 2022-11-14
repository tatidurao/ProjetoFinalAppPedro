import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { isUpdated: false, }; }
    changeUpdated = () => { this.setState({isUpdated: true}) }

    removeUpdated = () => { this.setState({isUpdated: false}) }

    renderFeed = (props) => { return <Feed setUpdateToFalse={this.removeUpdated}{...props}/> }

    renderStory = (props) => { return <CreatePost setUpdateToTrue={this.changeUpdated}{...props}/> }
    render(){
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "notifications-outline" : "notifications-outline";
                    } else if (route.name === "CriarPost") {
                        iconName = focused ? "add-outline" : "add-outline";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={RFValue(25)}
                            color={color}
                            style={styles.icons}
                        />
                    );
                }
            })}
            activeColor={"#00FFDF"}
            inactiveColor={"gray"}
        >
            <Tab.Screen name="Feed" component={this.renderFeed} options={{unmountOnBlur: true}}/>
            <Tab.Screen name="CriarPost" component={this.renderStory} options={{unmountOnBlur: true}}/>
        </Tab.Navigator>
    );
}}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});
