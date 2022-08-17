import React, { Component } from 'react';
import {TextField, InputAdornment, Checkbox} from '@mui/material';

export default class donneesBancaires extends Component {
  render() {
    return (
      <div>
        <div className="absolute text-gray-600 rounded-lg bg-white space-y-5 w-[300px] top-[25%] p-2 right1 right-[9%] sm:left-[30%] md:left-[30%] lg:left-[40%]">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <div className="text-center font-semibold">Données bancaire</div>
          <form className="space-y-3">
            <TextField 
              label="Numéro de carte bancaire"
              type="text"
              variant="outlined"
              fullWidth
              size='small'
              InputProps={{
                endAdornment: (<InputAdornment position="start"><img src={require('../assets/carte-visite.svg').default} alt="" /></InputAdornment>),
              }}
            />
            <TextField 
              label="Nom du titulaire de la carte"
              type="text"
              variant="outlined"
              fullWidth
              size='small'
              InputProps={{
                endAdornment: (<InputAdornment position="start"><img src={require('../assets/person.svg').default} alt="" /></InputAdornment>),
              }}
            />
            <TextField 
              label="date expiration"
              type="text"
              variant="outlined"
              fullWidth
              size='small'
              InputProps={{
                endAdornment: (<InputAdornment position="start"><img src={require('../assets/calendar.svg').default} alt="" /></InputAdornment>),
              }}
            />
            <TextField 
              label="CVv"
              type="text"
              variant="outlined"
              fullWidth
              size='small'
            />
            <div className="flex items-start">
              <Checkbox></Checkbox>
              <div className="text-sm pt-2">Sauvegarder la carte pour les prochaines résevations.</div>
            </div>
            <button className="uppercase rounded-md p-1 text-white bg-[#ff3e79] w-full">confirmer</button>
          </form>
        </div>
      </div>
    )
  }
}
