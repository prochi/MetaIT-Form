import React, { Component } from 'react';
import { connect } from 'react-redux';
import P from './P';

class Thanks extends Component {

  render() {
    return (
      <div>
        <P>Dotazník byl úspěšně odeslán</P>
      </div>
    );
  }
}

export default Thanks;