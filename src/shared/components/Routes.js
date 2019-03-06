import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../../Pages/Home.js';
import {Example2} from '../../Pages/Example2.js';

export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/example2' component={Example2} />
    </div>
  );
};