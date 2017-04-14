import React from 'react';

function SearchBar(props) {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." value={props.inputValue} onChange={props.onTextInputChanged} />
      <p>
        <input type="checkbox" checked={props.inStock} onChange={props.onFilterInputChecked} />
        {' '} Only show products in stock
      </p>
    </div>
  );
}

export default SearchBar;
