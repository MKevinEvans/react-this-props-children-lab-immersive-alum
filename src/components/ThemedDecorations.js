// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {
  
  const children = this.props.children.map(this.props.children, child => return <div className="children"> {child}</div>)
  render () {
    return(
      <div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
      )
    }
}

export default ThemedDecoration