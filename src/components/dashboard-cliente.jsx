import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class dashboardCliente extends Component {
    items = [
        {nom: "Mon profil", img: require('../assets/profil.svg').default, imgPink: require('../assets/profil-pink.svg').default, to: "cliente/profil"},
        {nom: "Mon historique", img: require('../assets/historique.svg').default, imgPink: require('../assets/historique-pink.svg').default, to: "cliente/historique"},
        {nom: "Inviter des amis", img: require('../assets/iniviter-des-amis.svg').default, imgPink: require('../assets/iniviter-des-amis-pink.svg').default, to: "cliente/inviter-des-amis"},
        {nom: "Questions fréquentes", img: require('../assets/aide.svg').default, imgPink: require('../assets/aide-pink.svg').default},
        {nom: "Nous contacter", img: require('../assets/nous-contacter.svg').default, imgPink: require('../assets/nous-contacter-pink.svg').default, to: "cliente/nous-contacter"},
        {nom: "Paramètres", img: require('../assets/parametres.svg').default, imgPink: require('../assets/parametres-pink.svg').default, to: "cliente/parametres"},
    ];
  render() {
    return (
      <div className={`${this.props.show === "true" ? 'flex':'hidden'} space-y-5 md:flex flex-col items-start`}>
        {
          this.items.map((item, i) =>
            <NavLink key={item.nom} className="flex items-center space-x-2 hover:scale-[1.2] hover:text-[#ff3e79] cursor-pointer" color="inherit" underline="none" to={"/" + item.to}>
              {/* <img src={item.imgPink} alt="" className={`${i.toString() === this.props.index ? 'block':'hidden'}`} />
              <img src={item.img} alt="" className={`${i.toString() === this.props.index ? 'hidden':''}`} /> */}
              <img src={i.toString() === this.props.index ? `${item.imgPink}`:`${item.img}`} alt="" />
              <div className={`${i.toString() === this.props.index ? 'text-[#ff3e79]':''}`}>{item.nom}</div>
            </NavLink>
          )
        }
      </div>
    )
  }
}
