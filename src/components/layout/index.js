import styled from 'styled-components';
import { DEVICE } from '../../style/media-queries';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  @media ${DEVICE.TABLET} {
    padding: 0 5rem;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Container = styled.main`
  width: 100%;
  max-width: 40rem;
  padding: 0 1rem;
  box-sizing: border-box;
  @media ${DEVICE.TABLET} {
    padding: 0 5rem;
  }
`;
