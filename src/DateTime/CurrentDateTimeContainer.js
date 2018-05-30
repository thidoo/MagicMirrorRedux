import React from 'react';
import { connect } from 'react-redux';

import { updateCurrentDateTime }  from './redux/actions';

import CurrentDateTime from './CurrentDateTime';
import DateTimeService from './Service/DateTimeService';

class CurrentDateTimeContainer extends React.Component{
  constructor(props){
    super(props);

    this.dateTimeService = new DateTimeService();
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.props.getCurrentDateTime(this.dateTimeService),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return (
      <CurrentDateTime
        value={this.props.currentDateTime}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    currentDateTime: state.updateCurrentDateTime.currentDateTime
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCurrentDateTime: (dateTimeService) => dispatch(updateCurrentDateTime(dateTimeService))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDateTimeContainer);