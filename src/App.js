import React, {
  Component
} from 'react';
import './App.css';
import Debug from './Debug';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      inStock: false
    };

    this.onTextInputChanged = this.onTextInputChanged.bind(this);
    this.onFilterInputChecked = this.onFilterInputChecked.bind(this);
  }

  onTextInputChanged(e) {
    const value = e.target.value;
    this.setState({searchText: value});
  }

  onFilterInputChecked(e) {
    const checked = e.target.checked;
    this.setState({inStock: checked});
  }

  render() {
    return (
      <div className='product'>
        <Debug state={this.state} />
        <SearchBar
          searchText={this.state.searchText}
          inStock={this.state.inStock}
          onTextInputChanged={this.onTextInputChanged}
          onFilterInputChecked={this.onFilterInputChecked}
        />
        <ProductTable
          payload={this.props.payload}
          searchText={this.state.searchText}
          inStock={this.state.inStock}
        />
      </div>
    );
  }
}

export default App;
