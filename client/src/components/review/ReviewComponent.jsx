import React from 'react';

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const backBarStyle = {
        height: '600px',
        width: '100%',
        'backgroundColor': "#000"
    }
    return (
      <div id="back-bar" className="container" style={backBarStyle}>
      </div>
    )
  }
 }

 export default ReviewComponent;