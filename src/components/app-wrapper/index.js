import styled from 'styled-components';
import Config from 'config';

const AppWrapper = styled.div`
  background-color: ${Config.theme.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${Config.theme.textColor};
  text-align: center;
`;

export default AppWrapper;
