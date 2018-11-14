import React from 'react'
import AssetCard from './AssetCard'
import { CourseAdapter } from '../adapters'

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
        CourseAdapter.getOne(this.props.courseId)
            .then( resp => {
                this.setState({
                    assets: resp.assets,
                    courseName: resp.name
                })
            })
    }

    render() {
        console.log('the assets that we]re looking for',this.state.assets );
        return (
            <div id="assets-container">
                <h1>Welcome to {this.state.courseName}</h1>
                {
                    this.state.assets.map((asset, idx) => {
                        return <AssetCard asset={asset} key={idx}/>
                    })
                }
            </div>
        )
    }
}

export default AssetsContainer