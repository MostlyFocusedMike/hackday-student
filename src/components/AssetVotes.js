import React from 'react'
import { AssetAdapter } from '../adapters'

class AssetVotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: props.asset.votes,
            id: props.asset.id,
            voteCheck: 0,
            "vote_value": 0
        }
    }
    handleVote = (e) => {
        e.preventDefault();
        e.persist()
        const num = parseInt(e.target.dataset.count)
        if (Math.abs(this.state.voteCheck + num) > 1) {
            return false;
        }
        this.setState((prevState) => {
            return {
                votes: prevState.votes + num,
                voteCheck:  prevState.voteValue + num,
                "vote_value":  num,
            }
        }, () => {
            this.handleSubmit(e)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        AssetAdapter.update({id: this.state.id, "vote_value": this.state["vote_value"] }).then(console.log)
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