import { Shuffle } from "@mui/icons-material";
let shuffledColors
const colors  = ["#DCF3FE", "#E4F6E5", "#FFE6E7", "#F0E3EC", "#FFF1E3"];

  const shuffle = (array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


export default shuffledColors = shuffle(colors);