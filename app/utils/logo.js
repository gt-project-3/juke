import React, { Component } from 'react';

import { Image } from 'react-native';

import LogoImage from '../assets/images/yodj.png'

const LogoTitle = () => (

    <
    Image source = { LogoImage }
    resizeMode = "contain"
    style = {
        {
            width: 190,
            height: 80
        }
    }
    />
)

export default LogoTitle;