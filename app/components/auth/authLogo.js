import React from 'react';
import { View, Image } from 'react-native';

import LogoImage from '../../assets/images/nba_login_logo copy.png'
import { getActiveChildNavigationOptions } from 'react-navigation';

const LogoComponent = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={LogoImage}
                resizeMode={'contain'}
                style={{
                    width: 170,
                    height: 150
                }}

            />
        </View>
    )
}

export default LogoComponent;