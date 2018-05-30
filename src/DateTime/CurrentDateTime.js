import React from 'react';

import './CurrentDateTime.css';

class CurrentDateTime extends React.Component {
  render(){
    return (
      <div className='CurrentDateTime'>
        <div className='day'>{this.props.value.day}</div>
        <div className='date'>{this.props.value.date}</div>
        <div className='time'>{this.props.value.time}</div>
      </div>
    );
  }
}

export default CurrentDateTime;