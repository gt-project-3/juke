// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// class GameComponent extends Component {
//     render() {

//         return (
//             <View>
//                 <Text>Hello I'm the Game Page</Text>
//             </View>
//         );
//     }
// }

// // const styles = StyleSheet.create({

// // });

// export default GameComponent;

import React, { Component } from 'react';
import { AppRegistry, View, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={400}
            />
        );
    }
}

export default class UselessTextInputMultiline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{
                        backgroundColor: this.state.text,
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        marginTop: 200
                    }}
                    >
                        <UselessTextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />

                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Message DJ"
                        // onPress={this.getLocationHandler}
                        />
                    </View >
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        margin: 8
    }
}
);

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => UselessTextInputMultiline
);
