import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAgeGroup } from '../../actions/index';

class AgeGroup extends Component {

  ageList() {
    return this.props.ageGroup.map( age => {
      return (
        <option 
          key={age.id} 
        >
          {age.name}
        </option>
      );
    });
  }

  render() {
    return (
      <select
        id="agegroup"
        onChange={ this.props.onSelectAgeGroup }
      >
        {this.ageList()}
      </select>
    )
  }
}

function mapStateToProps(state) {
  return {
    ageGroup: state.ageGroup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectAgeGroup: (e) => dispatch(selectAgeGroup(e.target.value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AgeGroup);