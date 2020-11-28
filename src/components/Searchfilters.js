import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Searchfilters.css';

class Searchfilters extends  React.Component {	
  constructor( props ) {
    super( props );
    this.state = {
      dead: false,
    };
    
  }

  handleChange = (event) => {
    this.setState({ dead: event.target.checked });
    this.props.checkedDead(event.target.checked);
  };

  

  render() {

    return (
      <FormControlLabel className="Onlydeceasedfilter"
        control={
          <Checkbox
            checked={this.state.dead}
            onChange={this.handleChange}
            name="checkedDead"
            color="primary"
          />
        }
        label="Only deceased"
      />
    )
  }

}

export default Searchfilters;

