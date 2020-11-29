import React, { Component } from  'react';
import './Character.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Character extends Component {
  
  render() {
    var img = "linear-gradient(to right, transparent, #424242), url("+this.props.image+")";
    return(
      <Card className={"Character hide-" + this.props.hide} style={{backgroundImage: img}} >
        <CardContent>
        <Typography className="card-info card-title" color="textPrimary" gutterBottom>
          {this.props.title}
        </Typography>
        <Typography className="card-info card-name" variant="h5" component="h2">
          {this.props.name}
        </Typography>
        <Typography className="card-info card-age">
          Age: {this.props.age}
        </Typography>
        <Typography className="card-info card-nickname">
          Nickname: {this.props.nickname}
        </Typography>
        <Typography className="card-info card-status">
          Status: {this.props.status}
        </Typography>
          
        </CardContent>
      </Card>
    )
  }

}
