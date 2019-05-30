import React from 'react';
import brandLogo from '../svg/brand-logo.svg';
import { AppLogoSVG } from './styles';

const AppLogo = props => (
  <AppLogoSVG src={brandLogo} {...props} />
);

export default AppLogo;
