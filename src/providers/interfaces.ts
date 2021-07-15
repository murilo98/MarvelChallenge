import internal from 'stream';

export interface iCreator {
    name: string;
    resourceURI: string;
    role: string;
}

export interface iCharacters {
    resourceURI: string;
    name: string;
}

export interface iResponseData {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    creators: {
        avaliable: number;
        collectionURI: string;
        items: iCreator[];
    };
    characters: {
        avaliable: number;
        collectionURI: string;
        items: iCharacters[];
    };
    pageCount: number;
}
