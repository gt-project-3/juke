import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
class ListComponent extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Text>DJ Tech Playlist</Text>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Old Town Road by Lil Nas X</Text>
                        </ListItem>
                        <ListItem>
                            <Text>WOW by Post Malone</Text>
                        </ListItem>
                        <ListItem>
                            <Text>7 Rings Ariana Grande</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Middle Child by J.Cole</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Shallow by Lady Gaga + Bradley Cooper</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Going Bad by Meek Mill feat. Drake</Text>
                        </ListItem>
                        <ListItem>
                            <Text>High Hopes by Panic! At the Disco</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Please Me by Cardi B. feat. Bruno Mars</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Better by Khalid</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Girls Like You by Maroon 5 feat. Cardi B.</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
export default ListComponent;
