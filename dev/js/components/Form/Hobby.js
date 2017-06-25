import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Hobby extends Component {

  hobbyList() {
    return this.props.hobbyOption.map( hobby => {
      if (this.props.main.agegroup === hobby.cat) {
        return (
          <li 
            key={hobby.id} 
            value={hobby.name} 
          >
            {hobby.name}
          </li>
        );
      }
    });
  }

  render() {
    
    return (
      <div>
        <ul className="DropDown">
          {this.hobbyList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    main: state.main.toObject(),
    hobbyOption: state.hobbyOption,
  };
}


export default connect(mapStateToProps)(Hobby);