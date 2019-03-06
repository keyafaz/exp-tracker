import React, { Component } from 'react';
import Button from '../shared/components/Button'
import Input from '../shared/components/Input'
import { h4 } from '../shared/components/style/helpers'
import Radium from 'radium'
import Income from '../shared/components/Income'

@Radium

export default class Home extends Component {
  state = {
    incomeForm: {
      name: '',
      date: '',
      amount: '',
    },
    incomes: new Map()
  }

  handleAddIncome = (income) => {
    console.log(income)
    this.state.incomes.set(income.name, income)
  }

  onChange = ({ target: { name, value } }) => {
    const incomeForm = { ...this.state.incomeForm, [name]: value }
    this.setState({ incomeForm })
  }

  render({ onChange } = this) {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {/*     <div style={{ margin: 15, textAlign: 'center' }}>
            <h4 style={{ ...h4, textTransform: 'uppercase' }}>Add Income</h4>
            <Button>+</Button>
          </div> */}

          <Income handleAddIncome={this.handleAddIncome} />

        </div>

        {/*   <div style={{ margin: 15, textAlign: 'center' }}>
          <h4 style={{ ...h4, textTransform: 'uppercase' }}>Add Expense</h4>
          <Button>+</Button>
        </div> */}
      </div>
    )
  }
}

