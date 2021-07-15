import React from 'react';
import styled from 'styled-components';

export const BottonbarWraper = styled.header`
    display: flex;
    flex: 1 0 10px;
    padding: 10px 10px;
    justify-content: space-around;
    background-color: #ed1d24;
    button {
        background: #f4ede8;
        border: 2px solid #232129;
        margin-right: 16px;
        padding: 0 5px;
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
