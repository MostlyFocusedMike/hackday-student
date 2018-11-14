import React from 'react'
import AssetVotes from './AssetVotes'
import AssetInfo from './AssetInfo'

const AssetCard = (props) => {
    const {asset} = props
    console.log('Here is the asset in question:', asset);
    return (
        <div id="asset-card">
            <AssetInfo asset={asset}/>
            <AssetVotes asset={asset}/>
        </div>
    )
}

export default AssetCard;