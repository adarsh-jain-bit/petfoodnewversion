import { COLORS } from "@src/lib/constants/colors";
import styled from "styled-components";

export const OTPWrapper = styled.div`
padding : 10px;
.otp-heading{
    color: red;
    text-align: center;
}

.otp-image {
    margin: auto;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
}


.otp-box {
    height: 50px;
    outline: none!important;
    width: 50px!important;
    max-width: 200px;
    border: none!important;
    display: flex;
    border: 1px solid;
    box-shadow: 5px 5px 20px ${COLORS.PRIMARY.main};
   
}

.otp-gap {
    width: 15px;
}

.button-wrapper{
display : flex;
flex-direction :row;
gap : 10px;
}
.otpsendbutton {
color : ${COLORS.SUCCESS.main};
border-color : ${COLORS.SUCCESS.main};
}
.resetbutton {
color : ${COLORS.PRIMARY.main};
border-color : ${COLORS.PRIMARY.main};
}
.resetbutton:hover{
  color :  ${COLORS.PRIMARY.light}!important;
   border-color : ${COLORS.PRIMARY.light}!important;
 }


`;