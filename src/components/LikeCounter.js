import React, { Component } from 'react'

class likeCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <button onClick = {incrementCount}>Likes {count}</button>
            
    }
}

export default likeCounter
