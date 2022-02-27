import styled from 'styled-components';

// Colors
const aqua = "#86E3CE"
const limeGreen = "#D0E6A5"
// Gradients
const gradients = {
    home : `linear-gradient(to bottom right, ${aqua}, ${limeGreen})`,
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: space-between;
    /* height: 100%; */
    padding: 2rem;
    border-radius: 10px;

    p {
        margin: 2rem 0rem;
    }

    .date {
        color: #555;
    }
    .category {
        background-color: #404040;
        color: white;
        border-radius: 5px;
        padding: 1rem 2rem;
        font-size: large;
        align-self: flex-start;
        margin-top: auto;
    }

    .custom-btn {
       cursor: pointer;
    }

    .custom-btn:hover {
       background-color: #D70040;
       border-radius: 50%;
       padding: 1px;
       color: white
    }
  `;

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export {Wrapper, FlexBox, gradients}