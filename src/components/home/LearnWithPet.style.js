
import { COLORS } from "@src/lib/constants/colors";
import styled from "styled-components";


export const CardContainer = styled.div`

.card-content {
padding : 30px!important;
}
.date {
color : ${COLORS.GLOBAL.GRAY_20}}
.content {
 display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
} ;
.button {
display : flex ;
 justifyContent : center ; 
  width : 100% ;
   color : ${COLORS.PRIMARY.main};
   padding-bottom : 30px;
    }

`