import styled from "styled-components";

const StyledError = styled.div`
  width: 100%;
  height: 90%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .error {
    text-align: center;
    h1 {
      color: red;
    }
  }
`;

export { StyledError };
