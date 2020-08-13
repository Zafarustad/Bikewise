import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = () => {
  const [text, setText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { getStolenBikeData } = useContext(GlobalContext);

  const onStartDateSelect = (date) => {
    let newStartDate = new Date(date);
    newStartDate.toTimeString();
    newStartDate = Number(newStartDate);
    setStartDate(newStartDate);
  };

  const onEndDateSelect = (date) => {
    let newEndDate = new Date(date);
    newEndDate.toTimeString();
    newEndDate = Number(newEndDate);
    setEndDate(newEndDate);
  };

  const getSearchResult = () => {
    getStolenBikeData(1, text, startDate, endDate);
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
        onChange={(date) => onStartDateSelect(date)}
        selected={startDate}
        placeholderText='From (MM/DD/YYYY)'
        className='mx-5 my-2 text-center shadow input'
      />
      <DatePicker
        onChange={(date) => onEndDateSelect(date)}
        selected={endDate}
        placeholderText='To (MM/DD/YYYY)'
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
