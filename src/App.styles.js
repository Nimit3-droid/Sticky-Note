import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Segoe UI', Roboto,'Open Sans', sans-serif;
    padding: 2vh 4vw;
    `;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 80px 0px;
`;

export { Wrapper, Header }