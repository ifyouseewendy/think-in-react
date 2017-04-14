import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      inputChecked: false
    };
  }

  displayProducts() {
    const products = this.props.payload;
    let rows = [];

    products.forEach((product, index) => {
      if(index == 0 || product.category != products[index-1].category) {
        rows.push(
          <th>
            <td colSpan='2'>{product.category}</td>
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
      <tbody>
      {rows}
      </tbody>
    );
  }

  render() {
    return (
      <div className='product'>
        <div className='debug'>
          {this.props.payload[0].category}
        </div>
        <div className='search'>
          <div className='search-input'>
            <input type='text' placeholder='Search...' value={this.state.inputValue} />
          </div>
          <div className='search-filter'>
            <input type='checkbox' checked={this.state.inputChecked} /><span>Only show products in stock</span>
          </div>
        </div>
        <div className='Display'>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
              </tr>
            </thead>
            {this.displayProducts()}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
