import React from 'react';

import {connect} from 'react-redux';


export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

const mapStateToProps = state => ({
    auralStatus: state.auralStatus
});

// allow communication between AuralStatus and state
export default connect(mapStateToProps)(AuralStatus);
