import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


class DJCardShowcase extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'https://unsplash.com/photos/g763DLmVJO8' }} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                //Your text here
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