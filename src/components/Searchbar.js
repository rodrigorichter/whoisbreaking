import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Searchbar.css';

class Searchbar extends  React.Component {	
  constructor( props ) {
    super( props );
    this.state = {
      query: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchedQuery(this.state.query);
  };

  render() {

    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit} className="Searchbar">
        <TextField id="search-input" label="Search" onChange={(e)=>{ this.setState({query: e.target.value}) }} />
      </form>
    )
  }

}

export default Searchbar;

