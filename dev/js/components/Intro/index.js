import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonIntro from './ButtonIntro';
import { nextStep } from '../../actions';

class Intro extends Component {
  render() {
    return (
      <div>
        <ButtonIntro
          value="Form"
          onClick={ this.props.onNextStep }
        >
          Spustit dotazník
        </ButtonIntro>
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