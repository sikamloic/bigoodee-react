import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DashboardCliente from '../../components/dashboard-cliente';
import GestionMotDePasse from '../../components/gestionMotDePasse';
import CoiffeusesPreferees from '../../components/coiffeusesPreferees';
import MoyenPaiement from '../../components/moyenPaiement'
import { Modal, Backdrop, Fade } from '@mui/material';

export default class parametres extends Component {
  constructor(){
    super()
    this.state = {
      open: false,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
    }
  }

  render() {
    return (
      <div className='w-screen'>
        <Header key="sikam"></Header>
        <div className="px-4 space-y-5 md:space-y-0 my-6 flex flex-col md:flex-row justify-around md:items-start">
          <div className="border-2 md:border-0 p-2 rounded-md"><DashboardCliente index="5" show="true"></DashboardCliente></div>
          <div className="space-y-5 text-gray-600 md:w-[400px] lg:w-[580px]">
            <div className="text-[#FF3E79] font-semibold text-lg text-center">Parametres</div>
            <div className="space-y-3">
              <div className="bg-[#FFB156] rounded-lg pl-2.5 border-2 cursor-pointer" onClick={() => {this.setState({open2: true})}}>
                  <div className="bg-white flex items-center justify-between px-2 py-1">
                    <div className="">Moyen de paiement</div>
                  <img src={require('../../assets/arrow-down-pink3.svg').default} alt="" className="" />
                </div>
              </div>
              <Modal 
                open={this.state.open2}
                onClose={() => {this.setState({open2: false})}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 50,
                }}
              >
                <Fade in={this.state.open2}><div><MoyenPaiement onClose = {() => {this.setState({open2: false})}}></MoyenPaiement></div></Fade>
              </Modal>
              <div className="bg-[#FFB156] rounded-lg pl-2.5 border-2 cursor-pointer" onClick={() => {this.setState({open: true})}}>
                  <div className="bg-white flex items-center justify-between px-2 py-1">
                    <div className="">gestion du mot de passe</div>
                  <img src={require('../../assets/arrow-down-pink3.svg').default} alt="" className="" />
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
                <Fade in={this.state.open}><div><GestionMotDePasse onClose = {() => {this.setState({open: false})}}></GestionMotDePasse></div></Fade>
              </Modal>
              <div className="bg-[#FFB156] rounded-lg pl-2.5 border-2 cursor-pointer">
                  <div className="bg-white flex items-center justify-between px-2 py-1">
                    <div className="">supprimer un compte</div>
                  <img src={require('../../assets/arrow-down-pink3.svg').default} alt="" className="" />
                </div>
              </div>
              <div className="bg-[#FFB156] rounded-lg pl-2.5 border-2 cursor-pointer" onClick={() => {this.setState({open1: true})}}>
                  <div className="bg-white flex items-center justify-between px-2 py-1">
                    <div className="">Ma coiffeuse préférée</div>
                  <img src={require('../../assets/arrow-down-pink3.svg').default} alt="" className="" />
                </div>
              </div>
              <Modal 
                open={this.state.open1}
                onClose={() => {this.setState({open1: false})}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 50,
                }}
              >
                <Fade in={this.state.open1}><div><CoiffeusesPreferees onClose = {() => {this.setState({open1: false})}}></CoiffeusesPreferees></div></Fade>
              </Modal>
              <div className="bg-[#FFB156] rounded-lg pl-2.5 border-2 cursor-pointer">
                  <div className="bg-white flex items-center justify-between px-2 py-1">
                    <div className="">CGU</div>
                  <img src={require('../../assets/arrow-down-pink3.svg').default} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
