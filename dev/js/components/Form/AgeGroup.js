import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAgeGroup } from '../../actions/index';

class AgeGroup extends Component {

  ageList() {
    return this.props.ageGroup.map( age => {
      return (
        <li 
          key={ age.id }
          onClick={() => this.props.selectAgeGroup(age.name)}
          value={ age.name }
        >
          {age.name}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul className="DropDown">
          {this.ageList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ageGroup: state.ageGroup,
    main: state.main.toObject()
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectAgeGroup: selectAgeGroup}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(AgeGroup);