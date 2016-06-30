import React from 'react';

export default function FilterSelector({filters, activeFilter, onChange}) {
    return (
      <div className='filter-selector'>
        <select onChange={(e) => onChange(e.target.value)} value={(activeFilter) ? activeFilter : ''}>
          {Object.keys(filters).map((filter, idx) => <option key={idx}>{filter}</option>)}
        </select>
      </div>
    );
};
