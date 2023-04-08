import styled from '@emotion/styled';
import { Form as FormikForm, ErrorMessage as Message } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
export const ErrorMessage = styled(Message)`
  color: red;
  margin-left: auto;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: green;
  transition: 250ms;
  margin-left: auto;
  margin-right: auto;
  :hover {
    scale: 1.05;
  }
  :active {
    scale: 0.95;
    background-color: blue;
  }
  :disabled {
    background-color: red;
    color: black;
  }
`;
