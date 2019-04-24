import React, { Component } from 'react';
import { StyleSheet, View, Button, MainText } from 'react-native';

class SharePlaceScreen extends Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a place with us!</HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <PickInput
                        placeData={this.state.constrols.placeName}
                        onChangeText={this.placeNameChangedHandler} />
                    <View style={styles.button}>
                        <Button
                            title="Sharea place!"
                            onPress={this.placeAddedHandler}
                            disabled={this.state.controls.placeName.valid} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

}

);

export default SharePlaceScreen;