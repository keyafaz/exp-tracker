import React, { Component } from 'react';
import Button from './Button'
import Input from './Input'
import Radium from 'radium'
@Radium

export default class Income extends Component {
  state = {
    incomeForm: {
      date: '',
      amount: '',
      name: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddIncome(this.state.incomeForm)
    this.clearForm()
  }
  clearForm = () => this.setState({
    incomeForm: {
      date: '',
      amount: '',
      name: ''
    }
  })

  onChange = ({ target: { name, value } }) => {
    const incomeForm = { ...this.state.incomeForm, [name]: value }
    this.setState({ incomeForm })
  }

  render() {
    return (
      <div>
        <div >
          <form style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Input
              name='name'
              label='Name'
              type='text'
              value={this.state.incomeForm['name']}
              onChange={e => this.onChange(e)}
            />
            <Input
              type='number'
              name='amount'
              label='Amount'
              value={this.state.incomeForm['amount']}
              onChange={e => this.onChange(e)} />
            <Input
              type='date'
              name='date'
              label='Date received'
              value={this.state.incomeForm['date']}
              onChange={e => this.onChange(e)} />
            <Button theme='primary' onClick={this.handleSubmit} style={{ fontSize: 14, margin: 12, background: 'gray', borderColor: 'darkgray' }}>Add+ income</Button>
          </form>
        </div>
      </div>
    )
  }
}

