import React from 'react';
import { AssetAdapter } from '../adapters';

class NewAssetForm extends React.Component {
  constructor() {
    super();

    this.initState = {
        title: "",
        description: "",
        link: "",
    };
    this.state = this.initState;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    this.setState(this.initState);

    AssetAdapter.create(this.state)
        .then(console.log)
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState(this.initState);
  }

  render() {
    return (
      <form
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={this.state.title}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={this.state.description}
        />
        <label htmlFor="link">Link</label>
        <input
          id="link"
          name="link"
          type="text"
          value={this.state.link}
        />
        <button>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default NewAssetForm;