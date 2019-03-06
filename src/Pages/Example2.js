import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Example2.scss';

const Example2 = () => {
  return (
    <div styleName="test">Another Example Component with CSS Modules</div>
  );
}

export default CSSModules(Example2, styles);