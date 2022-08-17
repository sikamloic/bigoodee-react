import React, { Component } from 'react';
import { Modal, Backdrop, Fade } from '@mui/material';
import Supprimer from './supprimer';

export default class addMoyenPaiement extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <div>
        <div className="bg-white absolute text-gray-600 right right-[9%] sm:left-[30%] md:left-[20%] lg:left-[30%] top-1/4 w-80 md:w-[500px] rounded-lg px-3 space-y-5 pb-5 flex flex-col items-center">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <div className="text-center text-black font-semibold">Moyen de paiement</div>
          <div className="text-center">Ma carte</div>
          <div className="bg-[#FFB156] bg-opacity-10 p-2 space-y-3 flex flex-col items-start w-72 rounded-md text-black">
            <div className="flex justify-between items-center w-full">
              <div className="text-xs">Nom du titulaire de la carte</div>
              <div className="flex space-x-1">
                <div className="flex justify-center items-center bg-[#FFB156] bg-opacity-10 px-2 py-1 rounded-md cursor-pointer" onClick={() => {this.setState({open: true})}}>
                  <img src={require('../assets/delete-orange.svg').default} alt="" />
                </div>
                <div className="flex justify-center items-center bg-[#FF3E79] bg-opacity-10 px-2 py-1 rounded-md cursor-pointer">
                  <img src={require('../assets/edit-pink.svg').default} alt="" />
                </div>
              </div>
              <Modal 
                open={this.state.open}
                onClose={() => {this.setState({open: false})}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 50,
                }}
              >
                <Fade in={this.state.open}><div><Supprimer name = "carte" onClose = {() => {this.setState({open: false})}}></Supprimer></div></Fade>
              </Modal>
            </div>
            <div className="text-xs">xxxx xxxx xxxx 1235</div>
            <div className="flex justify-between items-center w-full">
              <div className="">11/20</div>
              <img src={require('../assets/carte-visite.svg').default} alt="" className="" />
            </div>
          </div>
          <button className="bg-[#FF3E79] uppercase w-full rounded-md text-white h-10">enregistrer</button>
        </div>
      </div>
    )
  }
}
