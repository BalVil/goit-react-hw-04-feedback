import styled from 'styled-components';

export const ButtonWrapp = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  padding: 5px 10px;

  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
  background-color: inherit;
  border-radius: 5px;
  text-transform: capitalize;

  transition: background-color 200ms linear;

  :active {
    background-color: #1e90ff;
  }
`;
