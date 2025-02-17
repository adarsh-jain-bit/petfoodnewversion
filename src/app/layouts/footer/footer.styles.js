"use client"
import { COLORS } from "../../../lib/constants/colors";
import styled from "styled-components";


const Footer = styled.div`

background: ${COLORS.GLOBAL.GRAY_30};
width: 100%;  
color : ${COLORS.GLOBAL.WHITE};
&::before{
    content: '';

    height: 1px;
    width: 100%;
    background: #AFAFB6;
  }

`;
const Content = styled.div`
  margin: auto;
  padding: 30px 40px 40px 40px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  
`;
const RedLink = styled.span`
  color: ${COLORS.PRIMARY.main};
`

export  {Footer , Content , Top ,RedLink }