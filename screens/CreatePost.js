import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from "../config"

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {}

 


   addStory = async() => {
    if (
      this.state.day &&
      this.state.note
    ) {
      let storyData = {
        day: this.state.day,
        note: this.state.note,
      };
     
     await firebase.database().ref('/notes/' + Math.random().toString(36).slice(2)).set(storyData);
     this.props.setUpdateToTrue();
    } else {
      alert(
        'Erro',
        'Todos os campos são obrigatórios!',
        [{ text: 'OK', onPress: () => console.log('Ok pressionado') }],
        { cancelable: false }
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}></View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Lembrete</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
           <TextInput
              style={styles.inputFont}
              onChangeText={(day) => this.setState({ day })}
              placeholder={'Day'}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.inputFont} 
              onChangeText={(note) => this.setState({ note })}
              placeholder={'Note'}
              placeholderTextColor="white"
            />
            <View style={styles.submitButton}>
              <Button
              onPress={() => {
                this.addStory(),
                this.props.navigation.navigate('Feed'), 
                this.setState({day: "", note:""})
              }}
              title="Enviar"
              color="#841584"
              />
            </View>
          </View>
        <View style={{ flex: 0.08 }} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 50
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
    
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    
  },
  fieldsContainer: {
    flex: 0.85,
  },
  inputFont: {
    height: RFValue(40),
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
