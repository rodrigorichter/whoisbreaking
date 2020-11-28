import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar.js';
import Gallery from './components/Gallery.js';
import Searchbar from './components/Searchbar.js';
import Searchfilters from './components/Searchfilters.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      dead: false,
      pageSize: 10,
      currentPage: 0,
    };

    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.setState({ currentPage: parseInt(this.state.currentPage) + 1 });
      }
    };
  }

  updateSearchedQuery = (query) => {
    this.setState({ query: query, currentPage: 0 })
  }

  updatecheckedDead = (dead) => {
    this.setState({ dead: dead, currentPage: 0 })
  }

  render() {
    return (
      <div className="App" ref="trackScroll">
        <header className="App-header">
          <Navbar />
        </header>
          <Searchbar searchedQuery={this.updateSearchedQuery}/>
          <Searchfilters checkedDead={this.updatecheckedDead}/>
          <Gallery 
          limit="10" 
          searchQuery={this.state.query} 
          onlyDead={this.state.dead}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          />
          <Button variant="contained" color="primary">{this.state.query}</Button>

      </div>
    );
  }
}

export default App;
