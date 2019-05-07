import React, {Component} from 'react';
import {Image, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {
  Container,
  Footer,
  FooterTab,
  Badge,
  Input,
  Item,
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
  Right,
  List,
  ListItem,
} from 'native-base';

const theme = {
  Button: {
    raised: true,
  },
};

class GameComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
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
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C6TodOOcgcGiJVMJthzOgoDXp0Wvh0TBg_DWO0CgMjSUfPtDJQ',
                    }}
                  />
                </Left>
                <Body>
                  <Text>DJ Paul</Text>
                  <Text note numberOfLines={1}>
                    Its time to turn up. .
                  </Text>
                </Body>
                <Right>
                  <Button transparent danger>
                    <Text style={{ fontSize: 18 }}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://cbssanfran.files.wordpress.com/2014/03/107164328.jpg?w=1000',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Dj Tiesto</Text>
                  <Text note numberOfLines={1}>
                    One night only . .
                  </Text>
                </Body>
                <Right>
                  <Button transparent danger>
                    <Text style={{ fontSize: 18 }}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://i2.wp.com/xttrawave.com/wp-content/uploads/2019/01/Top-20-Best-EDM-DJs-of-2019-steve-aoki.jpg?resize=735%2C400&ssl=1',
                    }}
                  />
                </Left>
                <Body>
                  <Text>Steve Aoki</Text>
                  <Text note numberOfLines={1}>
                    Find me at Opera . .
                  </Text>
                </Body>
                <Right>
                  <Button transparent danger>
                    <Text style={{ fontSize: 18 }}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});
export default GameComponent;
