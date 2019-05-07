import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, ScrollView } from 'react-native';
import MapView from 'react-native-maps';


class PickLocation extends Component {

    state = {
        focusedLocation: {
            latitude: 33.753746,
            longitude: -84.386330,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width /
                Dimensions.get("window").height * 0.0122
        },
        locationChosen: false
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude

                },
                locationChosen: true
            }
        })
    }

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }

            };
            this.pickLocationHandler(coordsEvent);
        },
            err => {
                console.log(err);
                alert("Fetching position failed. Please pick one manually")
            })
    }


    render() {
        let marker = null;

        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />
        }

        return (
            <ScrollView>
                <View style={styles.container}>
                    <MapView
                        initalRegion={this.state.focusedLocation}
                        style={styles.map}
                        onPress={this.pickLocationHandler}
                        ref={ref => this.map = ref}>
                        {marker}
                    </MapView>
                    <Text>Map</Text>
                    <View style={styles.button}>
                        <Button
                            title="Locate Me"
                            onPress={this.getLocationHandler}
                        />
                    </View >
                </View >
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: 550
    },
    button: {
        margin: 8
    }
}

);

export default PickLocation;