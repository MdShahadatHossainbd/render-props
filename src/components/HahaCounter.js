import React, { Component } from 'react'

class HahaCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <button onClick = {incrementCount}> HahaCounter {count}</button>
            
    }
}

export default HahaCounter
