import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';

class DJCardShowcase extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                  }}
                />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                  }}
                  style={{height: 200, width: 340, flex: 1}}
                />
                <Text>
                  DJ Sunshine is the next premeir female Dj from Los Angles who
                  official Dj at club Opera in Atlanta. Every weekend spinning
                  the top club bangers that always keep vibes rocking. Meet her
                  there and rock out.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon
                    active
                    name="headset"
                    style={{
                      fontSize: 25,
                      color: 'red',
                    }}
                  />
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
export default DJCardShowcase;
