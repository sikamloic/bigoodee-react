import React, { Component } from 'react'
import '../App.css'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

export default class header extends Component {
  menu1 = [
    {nom: "Boutique", img: require('../assets/boutique.svg').default},
    {nom: "Nos coiffures", img: require('../assets/coiffures.svg').default},
    {nom: "Où nous trouver ?", img: require('../assets/localisation.svg').default},
    {nom: "Besoin d'aide?", img: require('../assets/aide.svg').default},
    {nom: "devenir coiffeuse", img: require('../assets/coiffeuse.svg').default},
  ];
  menu2 = ["devenir coiffeuse", "Boutique", "Nos coiffures", "où nous trouver ?", "besoin d’aide ?"];
  menu3 = [
    {nom: "Mon historique", img: require('../assets/historique.svg').default},
    {nom: "Mes messages", img: require('../assets/messages.svg').default},
    {nom: "Inviter des amis", img: require('../assets/iniviter-des-amis.svg').default},
    {nom: "Questions fréquentes", img: require('../assets/aide.svg').default},
    {nom: "Nous contacter", img: require('../assets/nous-contacter.svg').default},
    {nom: "Paramètres", img: require('../assets/parametres.svg').default},
  ];
  logo = ""
  menu = ""

  constructor(){
    super()
    this.state = {
      show: false
    };
  }

  show(){
    this.setState({
      show: !this.state.show
    })
  }

  changeLogo(param){
    if(param === "rose"){
      return this.logo = require('../assets/bigoodeeBlanc.svg').default
    }
    else{
      return this.logo = require('../assets/bigoodeeRose.svg').default
    }
  };

  changeMenu(param){
    if(param === "rose"){
      return this.menu = require('../assets/menu-white.svg').default
    }
    else{
      return this.menu = require('../assets/menu.svg').default
    }
  }

  render() {
    return (
      <div className=''>
        <div className='relative md:hidden'>
          <div className={`${!this.state.show ? 'flex justify-between items-center pt-2.5 px-2':'invisible'} ${this.props.color === "rose" ? 'bg-[#FF3E79]':'bg-white'}`}>
            <div className={`${this.props.color === 'rose' ? '':'invisible'}`}>
              <img src={require('../assets/arrow-left-white.svg').default} alt="" className="" />
            </div>
            <div className={`${this.props.back === 'true' ? '-ml-7':'hidden'}`}>
              <img src={require('../assets/arrow-left-pink.svg').default} alt="" className="" />
            </div>
            <img src={this.changeLogo(this.props.color)} alt="" className={`${this.props.color === "rose" ? 'pl-5 w-32':''} ${this.props.back === "true" ? 'invisible':''}`} />
            <Button onClick={() => this.show()}>
            <img src={this.changeMenu(this.props.color)} alt="" className="" />
            </Button>
          </div>
          <div className={this.state.show ? 'absolute w-11/12 left-4 top-1 pb-3 rounded-lg shadow-md z-[1000] bg-white':'hidden'}>
            <div className='relative'>
              <img src={require('../assets/close.svg').default} alt="fermer" className='absolute top-2 right-5' onClick={() => this.show()} />
              <div className='flex justify-center items-center pt-3'>
                <img src={require('../assets/avatar.svg').default} alt="avatar" />
              </div>
              <div className='border-[1px] border-[#FF3E79] my-3'></div>
              <div className='space-y-2 flex flex-col text-gray-600'>
                {
                  this.menu1.map((item, i) =>
                    <div className={`${i===4 ? 'bg-[#FF3E79] text-white uppercase rounded-md':''} flex space-x-5 px-3 py-1 w-64 items-center ml-8 `}>
                      <img src={item.img} alt="" className='hover:opcity-100' />
                      <div>{item.nom}</div>
                    </div>
                  )
                }
                <div className='border-[1px] border-[#FF3E79] my-3'></div>
                <div className="flex items-center space-x-5 ml-[44px] cursor-pointer">
                  <img src={require('../assets/deconnecter.svg').default} alt="" />
                  <Link className="uppercase text-[#ff3e79]" to="/connexion">se connecter</Link>
                </div>
              </div>
              <div className='space-y-2 hidden flex-col text-gray-600'>
                {
                  this.menu3.map(item =>
                    <div className={` flex space-x-5 px-3 py-1 w-64 pl-10 items-center`}>
                      <img src={item.img} alt="" className='hover:opcity-100' />
                      <div>{item.nom}</div>
                    </div>
                  )
                }
                <div className='border-[1px] border-[#FF3E79] my-3'></div>
                <div className="flex items-center space-x-5 pl-10 cursor-pointer">
                  <img src={require('../assets/deconnecter.svg').default} alt="" />
                  <div className="uppercase text-[#ff3e79]">se déconnecter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block md:space-y-4'>
          <div className="bg-[#FF3E79] flex justify-between md:px-5 lg:px-16 items-center">
            <div className="">
              <img src={require('../assets/bigoodeeBlanc.svg').default} alt="" />
            </div>
            <div className="flex flex-col items-end space-y-2">
              <Link className='text-white hidden uppercase cursor-pointer' to="/connexion">se connecter</Link>
              <div className='flex relative z-50 cursor-pointer items-center space-x-3 parent bg-white rounded-md border-[1.75px] border-[#FF3E79] p-1.5'>
                <img src={require('../assets/avatar2.svg').default} alt="" />
                <div className="text-[#ff3e79] font-semibold">Sikam</div>
                <img src={require('../assets/arrow-down-pink.svg').default} alt="" />
                <div className="hidden absolute right-0 child bg-white top-10 w-64 space-y-3 rounded-xl shadow-xl py-2">
                  {
                    this.menu3.map(item => 
                      <div className="flex items-center space-x-5 pl-5 cursor-pointer">
                        <img src={item.img} alt="" />
                        <div className="">{item.nom}</div>
                      </div>
                    )
                  }
                  <div className='border-[1px] border-[#FF3E79] my-3'></div>
                  <div className="flex items-center space-x-5 pl-5 cursor-pointer">
                    <img src={require('../assets/deconnecter.svg').default} alt="" />
                    <div className="uppercase text-[#ff3e79]">se déconnecter</div>
                  </div>
                </div>
              </div>
              <div className="flex lg:space-x-7 md:space-x-3 items-center text-white uppercase md:text-center justify-center">
                {
                  this.menu2.map(item =>
                    <div className="cursor-pointer">{item}</div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="bg-[#FF3E79] h-2.5"></div>
        </div>
      </div>
    )
  }
}
