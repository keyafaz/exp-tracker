import React, { Component } from 'react'
import { hexToRgb } from './style/helpers'

import Radium from 'radium';
@radium


export default class Button extends Component {
  render({ props: { children, style, className, onClick, disabled, theme } } = this) {

    const borderWidth = 2

    const defaultStyles = {
      borderStyle: 'solid',
      borderRadius: this.props.theme === 'primary' ? 8: 40,
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: '.2s',
      color: 'white',
      backgroundColor: '#00BDFF',
      borderColor: '#00BDFF',
      fontSize: 30,
      lineHeight: 40 - (borderWidth * 2) + 'px',
      width: !this.props.theme === 'primary' && 40,
      height: !this.props.theme === 'primary' && 40,
      ':hover': {
        backgroundColor: '#3BCDFF',
        borderColor: '#3BCDFF',
        boxShadow: `0 4px 8px 0 rgba(${hexToRgb('#00BDFF').r}, ${hexToRgb('#00BDFF').g}, ${hexToRgb('#00BDFF').b}, 0.33)`
      },
      ':focus': {
        boxShadow: 'inset 0 0 0 2px white'
      },
      ':active': {
        backgroundColor: '#06A4EE',
        borderColor: '#06A4EE',
        boxShadow: 'inset 0 0 0 0 transparent'
      }
    }

    const disabledStyles = (() => {
      if (disabled) {
        return {
          pointerEvents: 'none',
          backgroundColor: '#D8DADA',
          borderColor: '#ADADAD',
          color: '#ADADAD',
          opacity: '.5'
        }
      } else { return null }
    })()

    return (
      <button style={{ ...defaultStyles, ...disabledStyles, ...style }} onClick={onClick}>{children}</button >
    )
  }
}
