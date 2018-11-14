import React from 'react'

const AssetInfo = (props) => {
    const {asset: {title, description, link}} = props
    return (
        <div id="asset-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={`${link}`} target="_blank">Visit Resource</a>
        </div>
    )
}

export default AssetInfo;