import React from 'react';
import {View, Image} from 'react-native';

import LogoImage from '../../assets/images/yodj.png'

const LogoComponent = () => {
    return (
    <View style={{alignItems: 'center'}}>
        <Image
            source={LogoImage}
            resizeMode={'contain'}
            style={{
                width:200,
                height:250
            }}
        />
    </View>
    )
}

export default LogoComponent;