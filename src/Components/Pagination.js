import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { GlobalContext } from '../Context/GlobalState';

const Pagination = () => {
  const {
    stolenBikes,
    page,
    query,
    startDate,
    endDate,
    getStolenBikeData,
  } = useContext(GlobalContext);
  return (
    <div className='text-center my-4'>
      {page > 1 && (
        <>
          <Button
            color='primary'
            outline
            className='mr-2'
            onClick={() => getStolenBikeData(1, query, startDate, endDate)}
          >
            {'<<'} First
          </Button>
          <Button
            color='primary'
            outline
            className='mr-2'
            onClick={() =>
              getStolenBikeData(page - 1, query, startDate, endDate)
            }
          >
            {'<'} Prev
          </Button>
        </>
      )}
      <Button color='primary' className='mr-2'>
        {page}
      </Button>
      {stolenBikes.incidents.length === 10 && (
        <>
          <Button
            color='primary'
            outline
            className='mr-2'
            onClick={() =>
              getStolenBikeData(page + 1, query, startDate, endDate)
            }
          >
            {page + 1}
          </Button>
          <Button
            color='primary'
            outline
            className='mr-2'
            onClick={() =>
              getStolenBikeData(page + 2, query, startDate, endDate)
            }
          >
            {page + 2}
          </Button>
          <Button
            color='primary'
            outline
            className='mr-2'
            onClick={() =>
              getStolenBikeData(page + 1, query, startDate, endDate)
            }
          >
            Next {'>'}
          </Button>
        </>
      )}
    </div>
  );
};

export default Pagination;
