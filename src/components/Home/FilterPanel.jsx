import React from 'react';
import { subCategoryList, brandList } from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import './styles.css';

const FilterPanel = ({

}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Category</p>
      <FilterListToggle
        options={subCategoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    <div className='input-group'>
      <p className='label'>Cuisine</p>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterListToggle
        options={brandList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;