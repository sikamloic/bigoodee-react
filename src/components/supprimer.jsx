import React, { Component } from 'react'

export default class supprimer extends Component {
  head = ""
  message = ""
  constructor(props) {
    super(props)

    this.state = {}
    if(this.props.name === "compte"){
      this.head = "Supprimer un compte";
      this.message = "souhaitez-vous supprimer définitivement votre compte?"
    }
    else if(this.props.name === "carte"){
      this.head = "Supprimer ma carte";
      this.message = "Souhaitez-vous supprimer cette Carte bancaire ?"
    }
  }
  render() {
    return (
      <div>
        <div className="bg-white absolute text-gray-600 right right-[9%] sm:left-[30%] md:left-[20%] lg:left-[30%] top-1/4 w-80 rounded-lg px-3 space-y-5 pb-5 flex flex-col items-center">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <div className="text-center text-black font-semibold">{this.head}</div>
          <div className="text-center">{this.message}</div>
          <div className="flex items-center space-x-2">
            <button className="uppercase rounded-md h-10 w-36 bg-[#FF3E79] text-white">confirmer</button>
            <button className="uppercase rounded-md h-10 w-36 border-2 border-[#FF3E79] text-[#FF3E79]" onClick = {this.props.onClose}>annuler</button>
          </div>
        </div>
      </div>
    )
  }
}
