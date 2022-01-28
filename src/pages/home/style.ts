import styled from "styled-components";

const StyledHomePage = styled.main`
    font-family: "Montserrat", sans-serif;
    .homePage {
        &__cards {
            position: relative;
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }
        &__title {
            text-align: center;
        }
    }
`;

export {StyledHomePage}