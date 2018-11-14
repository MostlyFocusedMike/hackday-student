import React from 'react'

const AssetInfo = (props) => {
    const {asset: {name, description, link}} = props
    return (
        <div id="asset-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={`${link}`} target="_blank">{link}</a>
        </div>
    )
}

export default AssetInfo;