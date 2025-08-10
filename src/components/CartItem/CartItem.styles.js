import styled from "styled-components";
import { COLORS } from "../../lib/constants/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid ${COLORS.PRIMARY.main};
  padding: 10px;
  margin : 10px 0;
border-radius: 10px;


  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 120px;
    object-fit: cover;
  }
`;
