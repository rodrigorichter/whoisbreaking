import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Gallery from './components/Gallery.js';
import Searchbar from './components/Searchbar.js';
import Searchfilters from './components/Searchfilters.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      dead: false,
      pageSize: 10,
      currentPage: 0,
      lockPagination: false,
      freeLockPaginationDelay: 1500,
      paginationHeightThreshold: 100,
    };

    window.setInterval(() => {
      console.log(this.state.freeLockPaginationDelay);
      this.setState({ lockPagination: false });
    }, 1000);

    window.onscroll = () => {
      if (
        (window.innerHeight + document.documentElement.scrollTop + this.state.paginationHeightThreshold
          >= document.documentElement.offsetHeight) &&
        (!this.state.lockPagination)
      ) {
        this.setState({ currentPage: parseInt(this.state.currentPage) + 1, lockPagination: true });
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
      <ThemeProvider theme={theme}>
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
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
