import { Component } from 'react';
import fetch from 'unfetch';

export default class Version extends Component {
  state = {
    version: 'Fetching'
  };

  componentDidMount() {
    fetch('https://api.github.com/repos/buttercup/buttercup-desktop/tags')
      .then(res => res.json())
      .then(res => {
        this.setState({
          version: res[0].name
        });
      });
  }

  render() {
    return <strong className="version">{this.state.version}</strong>;
  }
}
