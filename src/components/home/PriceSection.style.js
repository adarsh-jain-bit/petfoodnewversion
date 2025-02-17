import styled from "styled-components";

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 180px;
  width: 180px;
  border-radius: 100%;
   background: ${(props) => props.bgColor || 'white'};
`;

export { BoxWrapper };
