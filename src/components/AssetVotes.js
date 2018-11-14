import React from 'react'

const AssetVotes = (props) => {
    return (
        <form id="asset-votes">
            <button id="vote-up">Up</button>
            {props.asset.votes}
            <button id="vote-up">Down</button>
        </form>
    )
}

export default AssetVotes;