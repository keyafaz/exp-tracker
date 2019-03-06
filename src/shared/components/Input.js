import React, { Component } from 'react'
import Radium from 'radium'


@Radium
export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.value || '' }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange = (event) => {
    let value
    event.target.type === 'number' ? value = parseInt(event.target.value) : value = event.target.value
    Array.isArray(this.props.category.slice())
      ? this.props.onChange(this.props.category.slice().concat([event.target.name]), value)
      : this.props.onChange([this.props.category, event.target.name], value)
  }

  render({ props: { children, style, required, className, defaultValue, id, pattern, title, name, max, onChange, onClick, onKeyUp, size, value, label, type, disabled, autoFocus, hasError, errorMessage, onboarding } } = this) {
    let valid = true
    if (pattern) {
      pattern = new RegExp(pattern)
      valid = pattern.test(value)
    }
    const defaultValueStyle = (defaultValue && defaultValue !== value)
      ? { fontFamily: 'Neue Haas Grotesk Display Std', color: 'red' }
      : null
    const inputDefaultStyles = {
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor:'gray',
      backgroundColor: 'transparent',
      height: 32,
      paddingTop: 4,
      paddingRight: 0,
      paddingBottom: 4,
      paddingLeft: 0,
      fontFamily: 'Neue Haas Grotesk Text Std',
      fontSize: 16,
      width: '100%',
      transition: '.2s',
      ...defaultValueStyle
    }
    const inputHoverStyles = {
      borderBottomColor: hasError ? 'red' :'gray'
    }
    const inputFocusStyles = {
      borderBottomColor: 'red'
    }
    const inputDisabledStyles = {
      borderBottomStyle: 'dotted',
      borderBottomColor:'light gray',
    }
    const inputErrorStyles = {
      color: 'red',
      borderBottomColor: 'red'
    }

    const labelDefaultStyles = {
      opacity: this.state.value ? 1 : 0,
      fontSize: 12,
      color:'gray',
      display: 'block',
      transition: '.2s'
    }
    const labelHoverStyles = {
      color: hasError ? 'red' : '#959595'
    }
    const labelFocusStyles = {
      color: 'black'
    }
    const labelDisabledStyles = {
      color:'gray',
    }
    const labelErrorStyles = {
      color: 'red'
    }
    return (
      <div key={id} style={{ ...style }}>
        {(hasError || !valid) && <span style={{ color: 'red', fontSize: 14 }}>{errorMessage}</span>}
        <input
          name={name}
          type={type}
          placeholder={label}
          value={value}
          id={id}
          onKeyUp={onKeyUp}
          autoFocus={(autoFocus) ? 'true' : null}
          disabled={(disabled) ? 'true' : null}
          onChange={(onboarding) ? this.onChange : onChange}
          key={id + '-input'}
          maxLength={max}
          style={{
            ...inputDefaultStyles,
            ...(Radium.getState(this.state, id + '-label', ':hover')) && inputHoverStyles,
            ...(disabled) && inputDisabledStyles,
            ...(hasError) && inputErrorStyles,
            ':hover': inputHoverStyles,
            ':focus': inputFocusStyles
          }} />

        <label key={id + '-label'} style={{
          ...labelDefaultStyles,
          ...(Radium.getState(this.state, id + '-input', ':hover')) && labelHoverStyles,
          ...(Radium.getState(this.state, id + '-input', ':focus')) && labelFocusStyles,
          ...(disabled) && labelDisabledStyles,
          ...(hasError) && labelErrorStyles,
          ':hover': inputHoverStyles
        }} htmlFor={id}>{label}</label>
      </div>
    )
  }
}
