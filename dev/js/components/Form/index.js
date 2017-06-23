import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestWrap from './QuestWrap';
import AgeGroup from './AgeGroup';
import Hobby from './Hobby';
import Cross from './Cross';
import ButtonForm from './ButtonForm';
import { changeFirstname, changeSurname, changeSex, changeHobby, nextStep, start } from '../../actions';

class Form extends Component {

  render() {
    
    return (
      <QuestWrap>
        <Cross
          value="Intro"
          onClick={ this.props.onStart }
        />
        <h1>Dotazník</h1>
        <form
          onSubmit={ this.props.onNextStep }
        >
          <div>
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
          <div>
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
          <div>
            <label>Věková kategorie<span>*</span></label>
            <AgeGroup />
          </div>
          <div>
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
          <div>
            <label>Oblibená činnost<span>*</span></label>
            <input
              list="hobby"
              name="hobby"
              required
              onChange={ this.props.onChangeHobby }
            />
            <Hobby />
          </div>
          <ButtonForm>
            Odeslat formulář
          </ButtonForm>
        </form> 
      </QuestWrap>
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
    main: state.main.toObject()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);