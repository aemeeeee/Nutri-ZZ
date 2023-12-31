import styled from 'styled-components';

// From w3schools
const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  font-size: ${props => props.fontSize || "15px"};

  &:hover{
    .dropdown-content {
      display: block;
      cursor: pointer;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-btn {
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
    font-size: inherit;
  }
`;

const DropdownElement = styled.h3` 
  color: black;
  font-size: ${props => props.fontSize || "15px"};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

//

const MessageDiv = styled.div`

  position: relative;
  width: "fit-content";

  &:hover {
    .component-message {
      display: block;
      white-space: nowrap;
    }
  }
  .component-message {
    display :none;
    position: absolute;
    top: -70px;
    transition: 0.1s all linear;
    background-color: #f9f9f9;
    padding: 10px 20px;
    border-radius: 30px;
    width: fit-content;
    font-size: 15px;
  }
`;

const PrimaryButton = styled.div`
  background-color: #f1b6ac;
  border-radius: 50px;
  width: ${props => props.width || "100%"};
  color: white;
  // font-weight: 100;
  font-size: 20px;
  margin: 10px auto;
  padding: 10px 5px;
  // transition: 0.1s linear all;
  text-align: center;
  &: hover{
    background-color: var(--primary-dark);
    cursor: pointer;
  }
`;

const SecButton = styled.div`
  background-color: #f1b6ac;
  border-radius: 50px;
  width: ${props => props.width || "100%"};
  color: white;
  // font-weight: 100;
  font-size: 25px;
  margin: 10px auto;
  padding: 10px 0;
  // transition: 0.1s linear all;
  text-align: center;
  &: hover{
    background-color: var(--primary-dark);
    cursor: pointer;
  }
`;

const BackArrowDiv = styled.div`
  position: absolute;
  top: 2px;
  left: 30px;
  color: var(--primary-letter);
  font-size: 40px;
  z-index: 12;
  background: transparent;
`;



export {Dropdown, DropdownElement, MessageDiv, PrimaryButton, BackArrowDiv, SecButton};
