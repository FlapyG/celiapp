import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native';


/*export class TextFieldMultiline extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'random text' };
    }

    render() {
        return (
            <View style={{top:20}}>
        <View style = {style.Text}>
    <TextAreaInput
        preText = 'test'
        numberOfLines = {4}
        value={preText}
        />
        </View>
        </View>
    );
    }
}*/

export default class TextFieldMultiline extends React.Component {
    render() {
        return (
        <View style = {styles.Text}>
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable = {true}
                maxLength = {400}
                multiline = {true}
            />
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
     Text:{
           borderWidth: 2,
           borderColor: 'grey',
           borderRadius: 20,
           marginLeft: 10,
           marginRight: 10,
           alignContent: 'space-around'
           }
});


/*
Example of calling this Component:

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { text: 'random text'
      };
    }

    render() {
      return (
      <View style={{top:20}}>
        <View style = {style.Text}>
        <TextAreaInput
         preText = 'test'
         numberOfLines = {4}
         value={this.state.text}
         onChangeText={(text) => this.setState({text})}
        />
        </View>
       </View>

    );
  }
}*/

