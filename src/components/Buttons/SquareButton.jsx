import React from "react";
import styled from "styled-components";

const SquareButton = ({ buttonTxt, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{buttonTxt}</ButtonWrapper>;
};

export default SquareButton;

const ButtonWrapper = styled.button`
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;
