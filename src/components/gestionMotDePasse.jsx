import React, { Component } from 'react';
import { TextField, InputAdornment,  } from '@mui/material';

export default class gestionMotDePasse extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    return (
      <div> 
        <div>
          <div className="bg-white absolute top-1/4 w-72 p-3 rounded-md right1 right-[10%] sm:left-[30%] md:left-[40%] space-y-5 -m-0.5">
            <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
            <div className="text-center">Gestion du mot passe</div>
            <form className="space-y-3">
              <TextField 
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                size='small'
                InputProps={{
                  endAdornment: (<InputAdornment position="start"><img src={require('../assets/eye-pink-visible.svg').default} alt="" /></InputAdornment>),
                }}
              />
              <TextField 
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                size='small'
                InputProps={{
                  endAdornment: (<InputAdornment position="start"><img src={require('../assets/eye-pink-visible.svg').default} alt="" /></InputAdornment>),
                }}
              />
              <TextField 
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                size='small'
                InputProps={{
                  endAdornment: (<InputAdornment position="start"><img src={require('../assets/eye-pink-visible.svg').default} alt="" /></InputAdornment>),
                }}
              />
              <button type='submit' className='bg-[#FF3E79] uppercase rounded-md text-white w-full h-10' onClick = {this.props.onClose}>envoyer</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
