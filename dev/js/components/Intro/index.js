import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextStep } from '../../actions';
import style from './style.scss';

class Intro extends Component {
  render() {
    return (
      <div>
        <button className="ButtonIntro"
          value="Form"
          onClick={ this.props.onNextStep }
        >
          Spustit dotazník
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNextStep: (e) => dispatch(nextStep(2)),
  }
}

function mapStateToProps(state) {
  return {
    main: state.main.toObject()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)