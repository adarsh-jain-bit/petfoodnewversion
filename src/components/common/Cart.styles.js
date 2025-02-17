
import { COLORS } from "@src/lib/constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${COLORS.GLOBAL.GRAY_05};
  border-radius: 5px;
  height: 100%;
padding : 20px;
  
h5 {
margin : 0;
text-wrap : wrap;
}
p {
font-size : 15px;
margin : 0;
color : ${COLORS.GLOBAL.GRAY_20};
font-weight : lighter;
}
h3 span:first-child{
   text-decoration : line-through;
   color : ${COLORS.GLOBAL.GRAY_20};
   font-size : 15px;
}
  img {
  width : 100%;
    min-height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
