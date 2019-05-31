import styled from 'styled-components';

const ImgSVG = styled.img`
  ${({ width }) => width && `
    width: ${width};
  `}
  ${({ padding }) => padding && `
    padding: ${padding};
  `}
`;

export default ImgSVG;
