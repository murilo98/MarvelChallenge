import styled from 'styled-components';
import Search from '../assets/png-loupe.png';

export const TopbarWraper = styled.header`
    display: flex;
    padding: 10px 10px;
    align-items: center;
    justify-content: space-between;
    background-color: #ed1d24;
`;

export const SearchBar = styled.div`
    input {
        background: #f4ede8;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 5px;
        width: 300px;
    }
    button {
        background: #f4ede8;
        align-self: center;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 5px;
        width: 70px;
        height: 30px;
        color: #312e38;
        font-weight: bold;
        margin-top: 16px;
        transition: background 0.2s;
        &:hover {
            background: #d3d3d3;
        }
    }
`;
