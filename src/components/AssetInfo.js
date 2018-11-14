import React from 'react'

const AssetInfo = (props) => {
    const {asset: {title, description, link}} = props
    return (
        <div id="asset-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={`${link}`} target="_blank">{link}</a>
        </div>
    )
}

export default AssetInfo;