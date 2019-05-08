import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


class DJCardShowcase extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Text>DJ Tech</Text>
                </Header>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>Diamonds of Atlanta</Text>
                                    <Text note>May 15, 2019</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'https://unsplash.com/photos/g763DLmVJO8' }} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                    Come out and join me at one the hottest clubs in Atlanta, Diamonds of Atlanta. There, I will be on the one's and two's killing the club for the birthday boy Benjamin! If you want to hear one your favorite songs, take a look at my song list and shoot me a message and I'll make sure your song will be played.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default DJCardShowcase