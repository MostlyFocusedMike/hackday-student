import React from 'react'

class AssetVotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: props.asset.votes,
            voteValue: 0
        }
    }
    handleVote = (e) => {
        e.preventDefault();
        const num = parseInt(e.target.dataset.count)
        const voteCheck = this.state.voteValue + num;
        if (Math.abs(voteCheck) > 1) {
            return false;
        }
        this.setState((prevState) => {
            return {
                votes: prevState.votes + num,
                voteValue:  prevState.voteValue + num,
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <form id="asset-votes" onSubmit={this.handleSubmit}>
                <button id="vote-up" data-count="1" onClick={this.handleVote}>Up</button>
                {this.state.votes}
                <button id="vote-up" data-count="-1" onClick={this.handleVote}>Down</button>
            </form>
        )
    }
}

export default AssetVotes;