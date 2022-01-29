import styled from "styled-components";

const StyledError = styled.div`
  width: 100%;
  height: 90%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  .error {
    text-align: center;
  }
`;

export { StyledError };
