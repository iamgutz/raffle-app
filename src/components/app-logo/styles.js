import styled from 'styled-components';

export const AppLogoSVG = styled.img`
  width: 20rem;
  ${({ xlarge }) => xlarge && `
    width: 40rem;
  `}
  ${({ large }) => large && `
    width: 30rem;
  `}
  ${({ medium }) => medium && `
    width: 20rem;
  `}
  ${({ small }) => small && `
    width: 10rem;
  `}
  ${({ xsmall }) => xsmall && `
    width: 5rem;
  `}
`;
