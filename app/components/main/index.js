import React, { Component } from 'react'

import { Button, Card, Texy } from 'react-native-elements'

class ArticleComponent extends Component {
  render () {
    return (

      <Card
        title='HELLO WORLD'
        image={require('../images/pic2.jpg')}>
        <Text style={{ marginBottom: 10 }}>
                  The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='VIEW NOW' />
      </Card>

    )
  }
}

// const styles = StyleSheet.create({

// });

export default ArticleComponent
