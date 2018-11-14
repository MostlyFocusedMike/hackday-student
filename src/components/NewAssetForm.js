import React from 'react';
import SubmissionPopUp from './SubmissionPopUp'
import { AssetAdapter } from '../adapters';

class NewAssetForm extends React.Component {
  constructor() {
    super();

    this.initState = {
        title: "",
        description: "",
        link: "",
        popUpVisible: false
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
    this.setState({
        popUpVisible: true
    })
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
        {
            this.state.popUpVisible ?
            <SubmissionPopUp /> : ""
        }
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