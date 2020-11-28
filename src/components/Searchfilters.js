import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Searchfilters extends  React.Component {	
  constructor( props ) {
    super( props );
    this.state = {
      dead: false,
    };
    
  }

  handleChange = (event) => {
    this.setState({ dead: event.target.checked });
  };

  

  render() {

    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.dead}
            onChange={this.handleChange}
            name="checkedDead"
            color="primary"
          />
        }
        label="Only Dead?"
      />
    )
  }

}

export default Searchfilters;

