import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
           <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1550045928-9d8b3864d696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    }}
                  />
                  <Body>
                    <Text>DJ Tech</Text>
                    <Text note>Its my Birthday</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent danger>
                    <Icon
                      active
                      name="headset"
                      style={{
                        fontSize: 25,
                        color: 'red',
                      }}
                    />
                    <Text style={{fontSize: 18}}>Spins</Text>
                  </Button>
                </Left>
                <Button transparent danger>
                  <Icon
                    active
                    name="chatbubbles"
                    style={{
                      fontSize: 25,
                      color: 'red',
                    }}
                  />
                  <Text style={{fontSize: 18}}>Request</Text>
                </Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1542627310-b292a9df2058?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    }}
                  />
                  <Body>
                    <Text>DJ Sunshine</Text>
                    <Text note>Females can spin too</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1547583073-4b4fe00854c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent danger>
                    <Icon
                      active
                      name="headset"
                      style={{
                        fontSize: 25,
                        color: 'red',
                      }}
                    />
                    <Text style={{fontSize: 18}}>Spins</Text>
                  </Button>
                </Left>
                <Right>
                  <Button transparent danger>
                    <Icon
                      active
                      name="chatbubbles"
                      style={{
                        fontSize: 25,
                        color: 'red',
                      }}
                    />
                    <Text style={{fontSize: 18}}>Request</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}