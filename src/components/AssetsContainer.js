import React from 'react'
import AssetCard from './AssetCard'
import { CoursesAdapter } from '../adapters'

class AssetsContainer extends React.Component {
    constructor() {
        super()
        this.initState = {
            assets: [],
            courseName: ""
        }
        this.state = this.initState;
    }

    componentDidMount() {
        CoursesAdapter.getOne()
            .then( resp => {
                console.log('resp:  ',resp );
                this.setState({
                    assets: resp.assets,
                    courseName: resp.name
                })
            })
    }

    render() {
        return (
            <div id="assets-container">
                <h1>Welcome to {this.state.courseName}</h1>
                {
                    this.state.assets.map(asset => {
                        return <AssetCard asset={asset} />
                    })
                }
            </div>
        )
    }
}

export default AssetsContainer