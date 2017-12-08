import React from 'react';

import {connect} from 'react-redux';

import './guess-list.css';

export function GuessList(props) {
  // no need for 'this' keyword, because not a class definition
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

const mapStateToProps = state => {
  guesses: state.guesses
}

// allow communication between GuessList and state
export default connect(mapStateToProps)(GuessList);