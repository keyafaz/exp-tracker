import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example from './Example.js';
import Example2 from './Example2.js';

export default () => {
  return (
    <div>
      <Route exact path='/' component={Example} />
      <Route path='/example2' component={Example2} />
    </div>
  );
};