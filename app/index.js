import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootNavigator } from './routes';

class App extends Component {
  render() {
    const Nav = RootNavigator();

    return (
      <View style={styles.container}>
        <Nav />
        {/* <Router>
          <Scene key="root" style={{ paddingTop: 64 }}>
            <Scene key="home" component={Home} title="Home" />
            <Scene key="chat" component={Chat} title="Chat" />
          </Scene>
        </Router> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
