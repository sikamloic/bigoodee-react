import React, { Component } from 'react';
import { Modal, Backdrop, Fade } from '@mui/material';
import AddMoyenPaiement from './addMoyenPaiement';

export default class moyenPaiement extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: false
    }
  }

  openModal(){
    this.setState({
      open: true
    })
  }
  render() {
    return (
      <div>
        <div className="bg-white absolute text-gray-600 right right-[9%] sm:left-[30%] md:left-[20%] lg:left-[30%] top-1/4 w-80 md:w-[500px] rounded-lg px-3 space-y-5 pb-5 flex flex-col items-center">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <img src={require('../assets/moyen-paiement.svg').default} alt="" className="" />
          <div className="text-center">Vous n’avez pas encore de Carte Bancaire enregistrée.</div>
          <button className="bg-[#FF3E79] uppercase w-full rounded-md text-white h-10" onClick={() => this.openModal()}>ajouter ma carte</button>
          <Modal 
            open={this.state.open}
            onClose={() => {this.setState({open: false})}}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 50,
            }}
          >
            <Fade in={this.state.open}><div><AddMoyenPaiement onClose = {() => {this.setState({open: false})}}></AddMoyenPaiement></div></Fade>
          </Modal>
        </div>
      </div>
    )
  }
}
