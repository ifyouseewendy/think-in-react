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

    this.inputChanged = this.inputChanged.bind(this);
    this.inputChecked = this.inputChecked.bind(this);
  }

  inputChanged(e) {
    const value = e.target.value;
    this.setState({inputValue: value});
  }

  inputChecked(e) {
    const value = e.target.checked;
    this.setState({inputChecked: value});
  }

  displayProducts(payload) {
    const value = this.state.inputValue;
    const inStock = this.state.inputChecked;

    const products = payload.slice().filter((product) => {
      if (inStock && !product.stocked) {
        return false;
      }
      if (value && product.name.indexOf(value) === -1) {
        return false;
      }

      return true;
    });

    let rows = [];
    products.forEach((product, index) => {
      if (index == 0 || product.category != products[index-1].category) {
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
          <p>inputValue: {this.state.inputValue}</p>
          <p>inputChecked: {this.state.inputChecked ? 'true' : 'false'}</p>
        </div>
        <div className='search'>
          <div className='search-input'>
            <input type='text' placeholder='Search...' value={this.state.inputValue} onChange={this.inputChanged} />
          </div>
          <div className='search-filter'>
            <input type='checkbox' checked={this.state.inputChecked} onChange={this.inputChecked} />
            <span>Only show products in stock</span>
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
            {this.displayProducts(this.props.payload)}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
