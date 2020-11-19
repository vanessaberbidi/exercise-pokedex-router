import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link className="nav-link" to="/"> Go to Home</Link>     
      </div>
    )
  }
}