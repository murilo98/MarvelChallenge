import React from 'react';

import { iCreator } from '../providers';

interface IProps {
    creators?: iCreator[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreatorsList: any = ({ creators = [] }: IProps) => {
    return (
        <div>
            {creators.length === 0 ? (
                <h1>Creators Not Avaliable</h1>
            ) : (
                <ul>
                    <h1>Created By:</h1>
                    {creators.map(creator => (
                        <li key={creator.name}>{creator.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

CreatorsList.defaultProps = {
    creators: [],
};
