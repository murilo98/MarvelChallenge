/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { api, Logger } from '../../services';

import { TopbarWraper, BottonbarWraper, SearchBar } from '../../layout';
import { Container, CardList, ComicsCard } from '../../styles/styles';

import { iResponseData } from '../../providers';

import { CreatorsList, Pagination } from '../../components';
import Logo from '../../assets/png-clipart-logo-marvel-comics.png';

const Comics: React.FC = (props: any) => {
    const [comics, setComics] = useState<iResponseData[]>([]);
    const [query, setQuery] = useState('');

    const redirectComicDetails = (comic: iResponseData) => {
        props.history.push({
            pathname: '/details',
            state: comic, // your data array of objects
        });
    };

    const search = ({ limit = 10, offset = 0 } = {}) => {
        let title;

        if (query.length > 0) title = query;

        api.get('/comics', { params: { limit, offset, title } })
            .then(response => {
                Logger.log(response.data.data.results);
                setComics(response.data.data.results);
            })
            .catch(err => Logger.log(err));
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <>
            <TopbarWraper>
                <img src={Logo} alt="logoMarvel" />
                <SearchBar>
                    <input
                        type="text"
                        value={query}
                        placeholder="Search for a Specific Character"
                        onChange={e => setQuery(e.target.value)}
                    />

                    <button type="button" onClick={() => search()}>
                        Search
                    </button>
                </SearchBar>
            </TopbarWraper>
            <Container>
                <CardList>
                    {comics.map(comic => {
                        return (
                            <ComicsCard
                                key={comic.id}
                                thumbnail={comic.thumbnail}
                            >
                                <div id="img" />
                                <h2 className="title">{comic.title}</h2>
                                <CreatorsList creators={comic.creators.items} />
                                <button
                                    type="button"
                                    onClick={() =>
                                        redirectComicDetails(
                                            comic as iResponseData,
                                        )
                                    }
                                >
                                    View More Details
                                </button>
                            </ComicsCard>
                        );
                    })}
                </CardList>
            </Container>
            <BottonbarWraper>
                <Pagination search={search} />
            </BottonbarWraper>
        </>
    );
};
export default Comics;
