import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './Toolbar.css';

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  const filtersIndex = filters.map((filter) => {
    return {id: shortid.generate(), value: filter}
  });

  const filtersButtons = filtersIndex.map((filter) => {
    const isActive = selected == filter.value ? 'active' : '';
    return <button className={isActive + ' filters-button'} key={filter.id} onClick={ evt => onSelectFilter(evt.currentTarget.innerHTML)}>{filter.value}</button>
  });
  
  return (
      <div className="filters-list">
        {filtersButtons}
      </div>
  )
}

Toolbar.propTypes = {
  filters : PropTypes.arrayOf(PropTypes.string).isRequired,
  selected : PropTypes.string.isRequired,
  onSelectFilter :  PropTypes.func.isRequired
}

export default Toolbar;