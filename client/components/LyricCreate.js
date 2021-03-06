import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: ''}
  }

onSubmit(e) {
  e.preventDefault();

  this.props.mutate({ 
    variables: { 
      content: this.state.content,
      songId: this.props.songId,
    }
  }).then(() => this.setState({ content: ''}));
  // ou aqui tbm 
  // this.setState({ content: ''})
} 

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <labe>Add a Lyric</labe>
        <input
          value={ this.state.content}
          onChange={e => this.setState({ content: e.target.value})}
        />
      </form>
    )
  }
}

const mutation = gql`
    mutation addLyricToSong($content: String!, $songId: ID!) {
      addLyricToSong(content: $content, songId: $songId) {
        id
        lyrics {
          content
        }
      }
    }
`;

export default graphql(mutation)(LyricCreate);
