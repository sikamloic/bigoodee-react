import React, { Component } from 'react';
import {Tabs, Tab, TextField, InputAdornment, Modal, Fade, Backdrop} from '@mui/material';
import ChoixPrestation from './choixPrestation.jsx';
import ChoixVille from './choixVille.jsx';
import ChoixDate from './choixDate.jsx';
import {Link} from 'react-router-dom';

export default class banner extends Component {

  constructor(){
    super()
    this.state = {
      value : 0,
      open: false,
      open2: false,
      open3: false,
      Prestation: "",
      Ville: "",
      Date: ""
    }
    this.getPrestation = this.getPrestation.bind(this)
    this.getVille = this.getVille.bind(this)
  }

  getPrestation(prestation){
    this.setState({
      Prestation: prestation
    })
  }

  getVille(ville){
    this.setState({
      Ville: ville
    })
  }
  
  render() {
    return (
      <div className='py-10 flex flex-col items-center bg-white md:flex-row md:justify-around lg:justify-between md:px-5 lg:px-10 md:items-start md:pb-0 w-screen'>
        <div className="hidden md:block text-[#ff3e79] font-semibold text-xl md:-mr-48 mt-10">Decouvrez et reservez la coiffeuse qui vous correspond, en quelques clics !</div>
        <img src={require('../assets/filleavectelephone1.svg').default} alt="" className='md:hidden' />
        <img src={require('../assets/filleavectelephone1xl.svg').default} alt="" className='hidden md:block' />
        <div className="bg-[#ff3e79] pt-5 pb-3 px-2 mx-3 flex flex-col items-center space-y-5 md:-ml-24 lg:ml-0">
          <div className="bg-white p-2 rounded-md">
            <Tabs 
              value={this.state.value} 
              onChange={(e, val) => {this.setState({value:val})}}
              variant="fullWidth"
            >
              <Tab label="Je reserve ma coiffeuse" wrapped />
              <Tab label="Je découvre les coiffures" wrapped />
            </Tabs>
            <div className="py-3">
              <div className={`${this.state.value === 0 ? 'flex flex-col space-y-5 max-h-[250px]':'hidden'}`}>
                <TextField 
                  className=''
                  label="choix de la ville"
                  type="button"
                  variant="outlined"
                  fullWidth
                  value={this.state.Ville}
                  onClick={() => {this.setState({open2: true})}}
                  InputProps={{
                    endAdornment: (<InputAdornment position="start"><img src={require('../assets/arrow-down-pink2.svg').default} alt="" /></InputAdornment>),
                  }}
                />
                <Modal 
                  open={this.state.open2}
                  onClose={() => {this.setState({open2: false})}}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 50,
                  }}
                >
                  <Fade in={this.state.open2}><div><ChoixVille onClose = {() => {this.setState({open2: false})}} onGetVille={this.getVille}></ChoixVille></div></Fade>
                </Modal>
                <TextField
                  className='text-start text-gray-600' 
                  label="type de prestation"
                  type="button"
                  variant="outlined"
                  fullWidth
                  value={this.state.Prestation}
                  onClick={() => {this.setState({open: true})}}
                  InputProps={{
                    endAdornment: (<InputAdornment position="start"><img src={require('../assets/arrow-down-pink2.svg').default} alt="" /></InputAdornment>),
                  }}
                />
                <Modal 
                  open={this.state.open}
                  onClose={() => {this.setState({open: false})}}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 50,
                  }}
                >
                  <Fade in={this.state.open}><div><ChoixPrestation onClose = {() => {this.setState({open: false})}} onGetPrestation={this.getPrestation}></ChoixPrestation></div></Fade>
                </Modal>
                <TextField 
                  label="choix de votre date"
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={() => {this.setState({open3: true})}}
                  InputProps={{
                    endAdornment: (<InputAdornment position="start"><img src={require('../assets/arrow-down-pink2.svg').default} alt="" /></InputAdornment>),
                  }}
                />
                <Modal 
                  open={this.state.open3}
                  onClose={() => {this.setState({open3: false})}}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 50,
                  }}
                >
                  <Fade in={this.state.open3}><div><ChoixDate onClose = {() => {this.setState({open3: false})}}></ChoixDate></div></Fade>
                </Modal>
              </div>
              <div className={`${this.state.value === 1 ? 'grid grid-cols-2 gap-4 place-items-center text-gray-600 text-xs max-h-[250px] overflow-scroll':'hidden'}`}>
                  <div className="">
                    <img src={require('../assets/accueil.svg').default} alt="" />
                    <p className="">Tresses ( braids)</p>
                  </div>
                  <div className="">
                    <img src={require('../assets/accueil2.svg').default} alt="" />
                    <p className="">Tresses ( braids)</p>
                  </div>
                  <div className="">
                    <img src={require('../assets/accueil3.svg').default} alt="" />
                    <p className="">Tresses ( braids)</p>
                  </div>
                  <div className="">
                    <img src={require('../assets/accueil4.svg').default} alt="" />
                    <p className="">Tresses ( braids)</p>
                  </div>
              </div>
            </div>
          </div>
          <Link className="bg-white text-[#ff3e79] uppercase text-center rounded-md py-1 px-2 h-10 w-44" to="/resultats">
            rechercher
          </Link>
        </div>
      </div> 
    )
  }
}
