// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {
  
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