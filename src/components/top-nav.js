import React from 'react';

import {connect} from 'react-redux';

import {auralUpdate, restartGame} from '../actions';

import './top-nav.css';

export function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => this.props.dispatch(restartGame())}
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
            className="visuallyhidden focusable status-link"
            onClick={() => this.props.dispatch(auralUpdate())}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Do not pass mapStateToProps, because only need to 
// add dispatch prop to TopNav component
export default connect()(TovNav);
