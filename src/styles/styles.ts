import styled from 'styled-components';
import Background from '../assets/thumb-1920-699194.png';

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-image: url(${Background});
`;

const urlImg = (props: iThumbnailData) =>
    `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

interface iThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    };
}

export const ComicsCard = styled.div`
    background: #ed1d24;
    height: 460px;
    width: 250px;
    margin: 10px;
    border: 2px solid #232129;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2,
    p {
        padding: 5px;
        text-align: justify;
    }
    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;

        transition: all 1s;
    }

    .title {
        min-height: 60px;
    }

    &:hover {
        div#img {
            height: 100px;
        }
    }
    button {
        background: #f4ede8;
        align-self: center;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 5px;
        width: 246px;
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
export const DetailsCard = styled.div`
    background: #ed1d24;
    height: 700px;
    width: 450px;
    margin: 10px;
    border: 5px solid #232129;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2,
    p {
        padding: 5px;
        text-align: justify;
    }
    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;

        transition: all 1s;
    }

    .title {
        min-height: 60px;
    }

    &:hover {
        div#img {
            height: 100px;
        }
    }
`;
