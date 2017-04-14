import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='product'>
        <div className='search'>
          <div className='search-input'>
            <input type='text' placeholder='Search...' />
          </div>
          <div className='search-filter'>
            <input type='checkbox' /><span>Only show products in stock</span>
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
            <tbody>
              <th>
                <td colSpan='2'>Sporting Goods</td>
              </th>
              <tr>
                <td>Football</td>
                <td>$49.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
