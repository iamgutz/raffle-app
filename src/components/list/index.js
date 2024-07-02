import styled from 'styled-components';
import Config from '../../config';

export const List = styled.ul`
  list-style: none;
  display: block;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  & > li {
    border-bottom: 1px solid ${Config.theme.listItemBgColorEven};
    &:last-child {
      border-bottom: none;
    }
    &:nth-child(even) {
      background: ${Config.theme.listItemBgColorEven};
    }
  }
`;

export const Item = styled.li`
  font-size: 1rem;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem;
`;
