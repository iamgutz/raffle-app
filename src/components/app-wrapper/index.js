import styled from 'styled-components';
import { BASTILLE } from 'style/colors';

const AppWrapper = styled.div`
  background-color: ${BASTILLE};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

export default AppWrapper;
