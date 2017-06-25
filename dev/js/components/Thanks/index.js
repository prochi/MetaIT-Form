import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.scss';

class Thanks extends Component {

  render() {
    return (
      <div className="ThanksWrapper">
        <p>Dotazník byl úspěšně odeslán</p>
      </div>
    );
  }
}

export default Thanks;