import React from 'react';

import { setBooks } from '../redux/actions/books';
import DatalistSelect from './searchForm/DatalistSelectField';
import SearchField from './searchForm/SearchField';
import SelectField from './searchForm/SelectField';

function SearchForm() {
  return (
    <>
      <div className="search-field">
        <SearchField
          type="text"
          placeholder="Search books"
          required={true}
          size="small"
          handleClick={setBooks}
        />
      </div>
      <div className="datalist-select-field">
        <DatalistSelect
          label="Book category"
          options={[
            'all',
            'novel',
            'science',
            'all',
            'novel',
            'science',
            'all',
            'novel',
            'science',
          ]}
          placeholder="Choose category"
          size="small"
        />
      </div>
      <div className="select-field">
        <SelectField label="Sort by" size="small" options={['relevance', 'price', 'date']} />
      </div>
    </>
  );
}

export default SearchForm;
