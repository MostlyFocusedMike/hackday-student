import React from 'react';
import SubmissionPopUp from './SubmissionPopUp'
import { AssetAdapter } from '../adapters';

class NewAssetForm extends React.Component {
  constructor() {
    super();

    this.initState = {
        asset: {
            title: "",
            description: "",
            link: "",
        },
        popUpVisible: false,
        success: true
    };
    this.state = this.initState;
  }

  handleChange = (e) => {
    this.setState({
        asset: {
            ...this.state.asset,
            [e.target.name]: e.target.value
        }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    this.setState(this.initState);
    AssetAdapter.create(this.state.asset)
        .then((resp) => {
            if (resp.message) this.setState({ success: false })
            this.setState({
                popUpVisible: true
            })
        })
        .then(() => {
            this.togglePopUp()
        })
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState(this.initState);
  }

  handleDismiss = (e) => {
    e.preventDefault();
    this.setState(this.initiState)
  }
  togglePopUp = () => {
    setTimeout(() => {
        this.setState({
            popUpVisible: false
        })
    }, 1500);
  }
  render() {
    const {asset: {title, link, description}, success, popUpVisible } = this.state
    return (
      <form
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        {
            popUpVisible ?
            <SubmissionPopUp success={success} dismiss={this.handleDismiss}/> : ""
        }
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={description}
        />
        <label htmlFor="link">Link</label>
        <input
          id="link"
          name="link"
          type="text"
          value={link}
        />
        <button>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default NewAssetForm;