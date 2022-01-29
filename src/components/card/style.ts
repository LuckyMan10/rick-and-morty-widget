import styled from "styled-components";

const StyledCard = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 210px;
  text-align: center;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  transition: 0.2s;
  background: white;
  .card-image {
    max-width: 200px;
    border-radius: 10px;
  }
  .card-name {
    font-size: 15px;
  }
  &:hover {
    transition: 0.2s;
    transform: scale(1.1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  @media (max-width: 540px) {
  }
`;

export { StyledCard };
