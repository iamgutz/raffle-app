import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ROSE, WHITE, ROTI, SILVER_CHALICE, DUSTY_GRAY } from 'style/colors';

const Button = styled.button `
  border: none;
  font-family: 'PT Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  color: ${ROTI};
  border: 3px solid ${ROTI};
  ${({ primary }) =>  primary && `
    color: ${ROSE};
    border-color: ${ROSE};
  `}
  ${({ secondary }) =>  secondary && `
  color: ${WHITE};
  border-color: ${WHITE};
  `}
  ${({ disabled }) => disabled && `
    border-color: ${SILVER_CHALICE};
    color: ${DUSTY_GRAY};
    opacity: 0.7;
    cursor: not-allowed;
  `}
`;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  secondary: false,
};

export default Button;
