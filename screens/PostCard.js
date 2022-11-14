import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';
export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          post_id: this.props.post.key,
          post_data: this.props.post.value
        };
    }

    componentDidMount() { }  

    render() {
      var post = this.state.post_data  
      
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{post.day}</Text>
                        </View>
                    </View>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {post.note}
                        </Text>
              
                    </View>
              
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2a2a2a",
        borderRadius: RFValue(20),
        padding: RFValue(20)
    },
    authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },
    
    authorNameContainer: {
        flex: 0.85,
        justifyContent: "center"
    },
    authorNameText: {
        color: "cyan",
        fontSize: RFValue(20)
    },
    
    captionContainer: {},
    captionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    
});
