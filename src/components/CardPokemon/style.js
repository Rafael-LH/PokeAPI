import styled from 'styled-components'

const SECONS = '.4s';

export const ContentCard = styled.div`
  text-align: center;
  width: 250px;
  box-shadow: -1px -1px 10px 0px rgba(0,0,0,0.75);
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin: 13px;
  cursor: pointer;
  transition: ease ${SECONS};
  :hover{
    transition: ease ${SECONS};
    transform: scale(1.1);
  }
`
export const Img = styled.img`
  width: 150px;
`