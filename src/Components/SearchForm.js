import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = () => {
  const [text, setText] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { getStolenBikeData } = useContext(GlobalContext);

  let newStartDate = new Date(startDate);
  newStartDate.toTimeString();
  newStartDate = Number(newStartDate);

  let newEndDate = new Date(endDate);
  newEndDate.toTimeString();
  newEndDate = Number(newEndDate);

  const getSearchResult = () => {
    if (newStartDate == 0 && newEndDate == 0) {
      getStolenBikeData(1, text);
    } else {
      console.log(newStartDate);
      getStolenBikeData(1, text, newStartDate, newEndDate);
    }
  };

  return (
    <div className='text-center m-4 d-flex align-items-center justify-content-center flex-wrap'>
      <input
        className='text-center mx-5 my-2 shadow input'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Search by case description'
      />
      <DatePicker
        onSelect={(date) => setStartDate(new Date(date))}
        onChange={(date) => setStartDate(new Date(date))}
        selected={startDate}
        placeholderText='From'
        className='mx-5 my-2 text-center shadow input'
      />
      <DatePicker
        onSelect={(date) => setEndDate(new Date(date))}
        onChange={(date) => setEndDate(new Date(date))}
        selected={endDate}
        placeholderText='To'
        className='mx-5 mt-2 text-center shadow input'
      />
      <Button
        type='submit'
        color='danger'
        className='shadow my-3 text-white'
        onClick={() => getSearchResult()}
      >
        Find cases
      </Button>
    </div>
  );
};

export default SearchForm;
