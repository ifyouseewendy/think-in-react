import React from 'react';
import ProductDisplay from './ProductDisplay';

function ProductTable(props) {
  return (
    <div className="Display">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <ProductDisplay
          payload={props.payload}
          searchText={props.searchText}
          inStock={props.inStock}
        />
      </table>
    </div>
  );
}

export default ProductTable;
