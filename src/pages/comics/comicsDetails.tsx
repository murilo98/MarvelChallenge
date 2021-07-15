/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { TopbarWraper, BottonbarWraper, SearchBar } from '../../layout';
import { Container, CardList, DetailsCard } from '../../styles/styles';

import { CreatorsList, CharactersList } from '../../components';
import Logo from '../../assets/png-clipart-logo-marvel-comics.png';
import { iResponseData } from '../../providers';

const Comics: React.FC = ({ location }: any) => {
    const [comic, setComic] = useState<iResponseData>();

    useEffect(() => {
        const { state } = location;

        setComic(state);
    }, []);

    return (
        <>
            <TopbarWraper>
                <img src={Logo} alt="logoMarvel" />
                <SearchBar>
                    <Link to="/">
                        <button type="button">Go Back</button>
                    </Link>
                </SearchBar>
            </TopbarWraper>
            <Container>
                <CardList>
                    {comic ? (
                        <DetailsCard key={comic.id} thumbnail={comic.thumbnail}>
                            <div id="img" />
                            <h1>Sinopse:</h1>
                            <h2 className="description">{comic.description}</h2>
                            <h2 className="title">{comic.title}</h2>
                            <CreatorsList creators={comic.creators.items} />
                            <CharactersList
                                characters={comic.characters.items}
                            />
                            <h1>Number of Pages:</h1>
                            <h3 className="pages">{comic.pageCount}</h3>
                        </DetailsCard>
                    ) : null}
                </CardList>
            </Container>
            <BottonbarWraper />
        </>
    );
};
export default Comics;
