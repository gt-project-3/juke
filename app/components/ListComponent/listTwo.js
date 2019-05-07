import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
class ListTwoComponent extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Text>DJ Spin Playlist</Text>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text>A lot by 21 Savage</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Sico Mode by Travis Scott</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Thottiana by Blueface</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Suge by DaBaby</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Look Back At It by A Boogie Wit da Hoodie</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Act Up by City Girls</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Close to Me by Ellie Golding X Diplo feat. Swae Lee</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Envy Me by Calboy</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Con Calma by Daddy Yanky X Katie Perry feat. Snow</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Drip Too Hard by Lil Baby X Gunna</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
export default ListTwoComponent;
