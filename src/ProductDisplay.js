import React from 'react';

function ProductDisplay(props) {
  const payload = props.payload;
  const searchText = props.searchText;
  const inStock = props.inStock;

  const products = payload.slice().filter(product => {
    if (inStock && !product.stocked) {
      return false;
    }
    if (searchText && product.name.indexOf(searchText) === -1) {
      return false;
    }
    return true;
  });

  const rows = [];
  products.forEach((product, index) => {
    if (index == 0 || product.category != products[index - 1].category) {
      rows.push(
        <th>
          <td colSpan="2">{product.category}</td>
        </th>
        );
    }
    rows.push(
      <tr>
        <td className={product.stocked ? '' : 'out-of-stock'}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
      );
  });

  return (
    <tbody>{rows}</tbody>
  );
}

export default ProductDisplay;
