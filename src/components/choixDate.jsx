import React, { Component } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';

export default class choixDate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: new Date() || null
    }
  }
  render() {
    return (
      <div>
        <div className="absolute text-gray-600 rounded-lg bg-white space-y-5 w-[300px] max-h-[450px] overflow-y-scroll top-5 p-2 right1 right-[9%] sm:left-[30%] md:left-[30%] lg:left-[40%] [@media (max-width: 450px)]:m-5">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <div className="text-center">type de prestation</div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              openTo="day"
              displayStaticWrapperAs="desktop"
              value={this.state.value} 
              onChange={(newValue) => {this.setState({value: newValue})}}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div className="">{this.state.value}</div>
        </div>
      </div>
    )
  }
}
