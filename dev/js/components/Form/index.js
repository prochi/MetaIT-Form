import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames'
import AgeGroup from './AgeGroup';
import Hobby from './Hobby';
import Cross from './Cross';
import { changeFirstname, changeSurname, changeSex, changeHobby, nextStep, start } from '../../actions';
import Select from 'react-select';
import style from './style.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      ageclass: "FormDiv Close",
      hobbyclass: "FormDiv Close",
    };
  }

  openAgeSelect() {
    if(this.state.ageclass === "FormDiv Close") {
      this.setState({ ageclass: "FormDiv Open" });
    }
    else {
      this.setState({ ageclass: "FormDiv Close" });
    }
  }

  openHobbySelect() {
    if(this.state.hobbyclass === "FormDiv Close") {
      this.setState({ hobbyclass: "FormDiv Open" });
    }
    else {
      this.setState({ hobbyclass: "FormDiv Close" });
    }
  }

  render() {

    return (
      <div className="QuestWrap">
        <Cross
          value="Intro"
          onClick={ this.props.onStart }
        />
        <h1>Dotazník</h1>
        <form
          onSubmit={ this.props.onNextStep }
        >
          <div className="FormDiv">
            <label>Jméno<span>*</span></label>
            <input
              id="firstname"
              type="text"
              required
              value={ this.props.main.firstname }
              onChange={ this.props.onChangeFirstname }
              autoComplete="off"
            />
          </div>
          <div className="FormDiv">
            <label>Příjmení<span>*</span></label>
            <input
              id="surname"
              type="text"
              required
              value={ this.props.main.surname }
              onChange={ this.props.onChangeSurname }
              autoComplete="off"
            />
          </div>
          <div className={this.state.ageclass}>
            <label>Věková kategorie<span>*</span></label>
            <div
              onClick={this.openAgeSelect.bind(this)}
            >
              <span className="SpanSelect">
                {this.props.main.agegroup}
              </span>
              <AgeGroup/>
            </div>
          </div>
          <div className="FormDiv">
            <label>Pohlaví<span>*</span></label>
            <span>
              <input
                type="radio"
                name="sex"
                value="Muž"
                checked={ this.props.main.sex === 'Muž' }
                onChange={ this.props.onChangeSex }
              />Muž
            </span>
            <span>
              <input
                type="radio"
                name="sex"
                value="Žena"
                checked={ this.props.main.sex === 'Žena' }
                onChange={ this.props.onChangeSex }
              />Žena
            </span>
          </div>
          <div className="FormDiv">
            <label>Oblibená činnost<span>*</span></label>
            <input
              list="hobby"
              name="hobby"
              spellCheck="true"
              required
              onChange={ this.props.onChangeHobby }
            />
          </div>
          <div className={this.state.hobbyclass}>
            <label>Oblíbená činnost<span>*</span></label>
            <div
              onClick={this.openHobbySelect.bind(this)}
            >
              <span className="SpanInput">
                <input
                  list="hobby"
                  name="hobby"
                  spellCheck="true"
                  required
                  onChange={ this.props.onChangeHobby }
                />
              </span>
              <Hobby/>
            </div>
          </div>
          <button className="ButtonForm">
            Odeslat formulář
          </button>
        </form> 
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeFirstname: (e) => dispatch(changeFirstname(e.target.value)),
    onChangeSurname: (e) => dispatch(changeSurname(e.target.value)),
    onChangeSex: (e) => dispatch(changeSex(e.target.value)),
    onChangeHobby: (e) => dispatch(changeHobby(e.target.value)),
    onNextStep: (e) => dispatch(nextStep(3)),
    onStart: (e) => dispatch(start(1)),
  }
}

function mapStateToProps(state) {
  return {
    main: state.main.toObject(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);