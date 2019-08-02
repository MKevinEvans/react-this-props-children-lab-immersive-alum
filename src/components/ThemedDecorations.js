// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {
  
  const children = this.props.children.map(child =>
        <div className="children"> {child} </div>)
 
  render () {
    return(
      <div>
        {children}
      </div>
      )
    }
}

export default ThemedDecoration