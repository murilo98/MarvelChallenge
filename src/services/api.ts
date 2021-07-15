import axios from 'axios';
import md5 from 'md5';

const publicKey = '888fbe8e10a4c816fee5d06fe3099599';
const privateKey = '301ec74d64df9988e2786952626b782c7a521bd3';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

export const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    },
});
