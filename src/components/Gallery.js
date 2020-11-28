import React, { Component } from  'react';
import './Gallery.css';
import Character from './Character.js';
import Container from '@material-ui/core/Container';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: [],
    };
  }

  updateGalleryCharacters() {
    var urlRoot = "https://www.breakingbadapi.com/api/characters?name=";
    var url = urlRoot + this.props.searchQuery;
    url = url + "&limit=" + this.props.pageSize + "&offset=" + parseInt(this.props.currentPage) * parseInt(this.props.pageSize);
    
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          characters: this.state.characters.concat(result)
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  componentDidMount() {
    this.updateGalleryCharacters();
  }

  componentDidUpdate(prevProps) {
    if (parseInt(prevProps.currentPage) !== 0 && parseInt(this.props.currentPage) === 0) {
      this.setState({ characters: [] });
    }

    if (prevProps.searchQuery !== this.props.searchQuery ||
        prevProps.onlyDead !== this.props.onlyDead ||
        prevProps.currentPage !== this.props.currentPage) {
          this.updateGalleryCharacters();
        }
  }

  
    
  render() {
    const { error, isLoaded, characters } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
      return <div>Loading...</div>;

    } else {
      return (
        <Container className="Gallery">
          {characters.map(character => (
            <Character 
              id={character.char_id} 
              name={character.name} 
              title={character.occupation.join(', ')}
              age="55"
              nickname={character.nickname}
              status={character.status}
              image={character.img}
              />
          ))}
        </Container>
      );
    }
  }

}