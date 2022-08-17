import React, { Component } from 'react'

export default class confirmationReservation extends Component {

  img = "";
  title = "";
  message = "";
  btn = false;

  constructor(props) {
    super(props)
    if(this.props.name === "success"){
      this.img = require('../assets/success.svg').default;
      this.title = "Résevation confirmée";
      this.message = " louise,vous avez Rendez-vous mardi 11 mars à 12 heures avec sarah pour les vanilles";
      this.btn = true;
    }
    else{
      this.img = require('../assets/danger.svg').default;
      this.title = "Résevation non confirmée";
      this.message = " louise, nous avons rencontrer un problème lors du paiement, merci de vérifier vos informations.";
      this.btn = false;
    }
  }
  render() {
    return (
      <div>
        <div className="absolute text-gray-600 rounded-lg bg-white space-y-5 w-[300px] md:w-[500px] top-[25%] p-2 right1 right-[9%] sm:left-[30%] md:left-[20%] lg:left-[30%] flex flex-col items-center">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <img src={this.img} alt="" />
          <div className="text-center font-semibold">{this.title}</div>
          <div className="text-center">{this.message}</div>
          <button className={this.btn ? 'uppercase rounded-md p-1 text-white bg-[#ff3e79] w-full':'hidden'}>DÉCOUVRez bigooshop</button>
        </div>
      </div>
    )
  }
}
