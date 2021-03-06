import styled from 'styled-components';

const handleFloat = (float) => {
  switch (float) {
    case 'right':
      return 'right';
    case 'left':
      return 'left';
    case 'none':
      return 'none';
  }
};

const ButtonPrimary = styled.button`
  width: 20%;
  padding: 10px;
  background-color: var(--mainGreen); //normal
  color: white; //hover
  font-weight: bold;
  border: none;
  font-size: 18px;
  float: ${({ float }) => handleFloat(float)};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #6c836c;
  }
`;
export default ButtonPrimary;

/*
export const StyleInputFields = styled.inputFields `
  padding: 1em;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  font-weight: 400px;
  margin: auto;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 18px;
`;


export const ddContainer = styled.ddContainer`
    width:90%;
    background-color: white;
    border: 1px solid #ccc;
    font-size: 15px;
    border-radius: 0px;
    display: inline-block;
    position: relative;
    margin: auto;
    right: 0;
`;


export const ddWrapper = styled.ddWrapper`
    display: flex;
    min-height: 38px;
    flex-wrap: wrap; 

    &:focus{
        border:1px solid black;
    }
`;

export const ddHeader = styled.ddHeader`
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    padding:5%;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    align-items:flex-start;

    &__title--bold{
        font-weight: bold;
    }
`;

export const titleBold = styled.titleBold`
    font-weight: bold;
`;

export const ddList = styled.ddList`
    top: 100%;
    position: absolute;
    z-index: 1;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    width:100%;
    border-radius: 4px;
`;


export const ddBtn = styled.ddBtn`
    display: flex;
        justify-content: space-between;
        background-color: white;
        font-size: 16px;
        padding: 5%;
        border: 0;
        width: 100%;
        text-align: left;
        margin:0;

    &:hover{
        background-color: var(--offWhite);
        font-weight: bold;
        cursor: pointer;
        }
`;
*/
