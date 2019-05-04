import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, } from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';

class ArticleComponent extends Component {
    render() {

        return (
            
                 <ThemeProvider>
                    <Button title="Hey!" />
                </ThemeProvider>
            
        );
    }
}

// const styles = StyleSheet.create({

// });

export default ArticleComponent;