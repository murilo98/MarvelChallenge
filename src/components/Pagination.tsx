import React, { useState } from 'react';

export interface IProps {
    search?: any;
}

export const Pagination: any = ({ search }: IProps) => {
    const limit = 10;

    const [page, setPage] = useState(1);

    const setCurrentPage = async (accumalatorPage: number) => {
        if (page === 1 && accumalatorPage === -1) return;

        setPage(page + accumalatorPage);

        const offset = (page - 1) * limit;

        await search({ offset, limit });
    };

    return (
        <div>
            <button onClick={() => setCurrentPage(-1)} type="button">
                Previous
            </button>
            <button onClick={() => setCurrentPage(1)} type="button">
                Next
            </button>
        </div>
    );
};

Pagination.defaultProps = {
    search: () => {
        Promise.resolve();
    },
};
