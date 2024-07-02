import React from 'react';
import { AppLogoImg } from './styles';
import Config from '../../config';

const AppLogo = props => (
    <AppLogoImg
        src={Config.theme.appLogoImgSrc}
        {...props}
    />
);

export default AppLogo;
