// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {
  
  const children = this.props.children.map()
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