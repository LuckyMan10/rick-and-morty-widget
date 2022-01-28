import styled from "styled-components";

const StyledFiltredBar = styled.div`
    padding: 20px;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        .fields {
            display: flex;
            gap: 15px;
            @media (max-width: 900px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        @media (max-width: 555px) {
            .fields > * {
                width: 100%;
            }
        }
        button {
            font-size: 18px;
        }
    }
`;

export { StyledFiltredBar };
