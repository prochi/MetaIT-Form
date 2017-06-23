import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intro from '../Intro';
import Thanks from '../Thanks';
import Form from '../Form';

class Questionnaire extends Component {

  render() {
    if (this.props.main.step === 1) {
      return (
        <Intro />
      );
    }
    else if (this.props.main.step === 2) {
      return (
        <Form />
      );
    }
    else if (this.props.main.step === 3) {
      return (
        <Thanks />
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    main: state.main.toObject()
  };
}

export default connect(mapStateToProps)(Questionnaire);