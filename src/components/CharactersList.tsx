import React from 'react';

import { iCharacters } from '../providers';

interface IProps {
    characters?: iCharacters[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CharactersList: any = ({ characters = [] }: IProps) => {
    return (
        <div>
            {characters.length === 0 ? (
                <h1>Characters Not Avaliable</h1>
            ) : (
                <ul>
                    <h1>Characters on this Comic:</h1>
                    {characters.map(character => (
                        <li key={character.name}>{character.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

CharactersList.defaultProps = {
    characters: [],
};
