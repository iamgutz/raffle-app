import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Teko', sans-serif;
  font-size: 3.36rem;
  font-weight: normal;
  margin: 1rem 0;
  display: block;
  line-height: 3.36rem;
`;

export const SuperTitle = styled(Title)`
  font-size: 9rem;
  font-weight: bold;
  line-height: 9rem;
`;

export const Headline = styled.h2`
  font-family: 'Montserrat', sans-serif;
`;

export const SubTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const P = styled.p`
  font-family: 'Catamaran', sans-serif;
  font-size: 1.5rem;
  ${({ textAlign }) => textAlign && `
    text-align: ${textAlign};
  `}
`;
