
import { height } from "@mui/system";
import { SPACING } from "@src/lib/constants/spacing";



export const style = {
container : {
    width : "70%",
    height : "40vh",
    overflow: "scroll",
    padding : `${SPACING.SIZE_16} ${SPACING.SIZE_16}`,
    position : "absolute",
  top : "69px",
  left : "13%",
  borderRadius : "0px 0px 10px 10px"
},

smallContainer : {
    width : "10%",
    height : "fit-content",
    padding : `${SPACING.SIZE_16} ${SPACING.SIZE_16}`,
    position : "absolute",
  top : "69px",
  borderRadius : "0px 0px 10px 10px"
}
}

