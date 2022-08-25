import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default class coiffeusesPreferees extends Component {
  render() {
    return (
      <div>
        <div className="bg-white absolute text-gray-600 right right-[9%] sm:left-[30%] md:left-[20%] lg:left-[30%] top-1/4 w-80 md:w-[500px] rounded-lg px-3 space-y-5 pb-5">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <div className="space-y-3">
            <div className="text-center mt-5 text-black font-semibold">Mes coiffeuses préférées</div>
            <div className="hidden md:block text-center">Contactez en toutes sécurité vos coiffeuses préférées et réserver une réservation.</div>
          </div>
          <div className="space-y-2">
            <NavLink className="flex justify-between items-center px-2 py-1 bg-white rounded-md w-full border-2 cursor-pointer" to="/infos-coiffeuse">
              <div className="flex space-x-2 items-center">
                <Avatar src={require('../assets/pp.svg').default}></Avatar>
                <div className="">
                  <div className="">Clarisse</div>
                  <div className="flex">
                    <img src={require('../assets/localisation.svg').default} alt="" className='w-3' />
                    <div className="">Nantes</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#FFB156] bg-opacity-10 rounded-md py-1 px-2"><img src={require('../assets/healt-full-orange.svg').default} alt="" /></div>
            </NavLink>
            <NavLink className="flex justify-between items-center px-2 py-1 bg-white rounded-md w-full border-2 cursor-pointer" to="/infos-coiffeuse">
              <div className="flex space-x-2 items-center">
                <Avatar src={require('../assets/pp.svg').default}></Avatar>
                <div className="">
                  <div className="">Clarisse</div>
                  <div className="flex">
                    <img src={require('../assets/localisation.svg').default} alt="" className='w-3' />
                    <div className="">Nantes</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#FFB156] bg-opacity-10 rounded-md py-1 px-2"><img src={require('../assets/healt-full-orange.svg').default} alt="" /></div>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}
