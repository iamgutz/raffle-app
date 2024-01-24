import styled from 'styled-components';
import PropTypes from 'prop-types';
import Config from 'config';

const Button = styled.button `
  border: none;
  font-family: 'PT Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  color: ${Config.theme.buttonColor};
  border: 3px solid ${Config.theme.buttonColor};
`;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
