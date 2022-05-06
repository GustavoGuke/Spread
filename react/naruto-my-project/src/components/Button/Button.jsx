import styled from "styled-components"
export const Button = ({name, onClick}) => {
  return (
    <ButtonStyled onClick={onClick}>{name}</ButtonStyled>
  )
}
let cor = '#f5f1ef'
const ButtonStyled = styled.button`
    width: 150px;
    height: 40px;
    font-size: 1.2em;
    font-weight: 700;
    border: 0;
    border-radius: 5px;
   // background-color: #f45d0b;
    background-image: linear-gradient(to left,#f45d0b,#f3722d,#f28950);
    color: ${cor};
    box-shadow: gray 3px 3px;
    cursor: pointer;

    &:hover {
        background-image: linear-gradient(#df6363,#ec0d0d)
    }
`

