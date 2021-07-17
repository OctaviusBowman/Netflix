import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 3px 0 0 3px;

    @media (max-width: 1000px) {
        border-radius: 2px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 60px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 20px;
    border: 0;
    cursor: pointer;
    border-radius: 0 2px 2px 0;

    &:hover {
        background: #f40612;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px
        }
    }

    @media (max-width: 1000px) {
        height: 50px;
        margin-top: 10px;
        width: 200px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 2px;
    }
`;

export const Text = styled.p`
    font-weight: bold;
    color: white;
    letter-spacing: 1px;
    text-align: center;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;