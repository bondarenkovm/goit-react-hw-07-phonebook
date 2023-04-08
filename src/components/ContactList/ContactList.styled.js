import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: red;
  transition: 250ms;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
    background-color: blue;
  }
`;
