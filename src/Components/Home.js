import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import BikeCard from './BikeCard';
import Pagination from './Pagination';
import SearchForm from './SearchForm';
import Header from './Header';
import Loading from './Loading';

const Home = () => {
  const { stolenBikes, getStolenBikeData, loading, error } = useContext(GlobalContext);

  useEffect(() => {
    getStolenBikeData();
  }, []);

  return (
    <div>
      <Header />
      <SearchForm />
      {!loading && !error && stolenBikes && (
        <>
          {stolenBikes.incidents.length > 0 ? (
            stolenBikes.incidents.map((bike) => (
              <BikeCard bike={bike} key={bike.id} />
            ))
          ) : (
            <h5 className='text-center my-3 text-muted'>No Results Found!</h5>
          )}
          <Pagination />
        </>
      )}
      {loading && <Loading />}
      {error && <h4 className='text-center text-danger'>Oops! Something went wrong</h4>}
    </div>
  );
};

export default Home;
