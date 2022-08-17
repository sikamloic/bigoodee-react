import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DashboardCliente from '../../components/dashboard-cliente';

export default class inviter extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="px-4 text-gray-600 space-y-7 md:space-y-0 my-6 flex flex-col md:flex-row justify-around md:items-start">
          <div className="border-2 md:border-0 p-2 rounded-md"><DashboardCliente index="2" show="true"></DashboardCliente></div>
          <div className="flex flex-col items-center space-y-5 md:w-[400px] lg:w-[580px]">
            <img src={require('../../assets/invite-amis.svg').default} alt="" />
            <div className="text-center">Gagnes 5€  quand tes amis réservent leurs premières prestation.</div>
            <button className="bg-[#FF3E79] uppercase rounded-md text-white w-44 h-10">inviter des amis</button>
            <div className="text-center">offre valable pour chaque nouveau membre que tu invites. partages vite cette bonne nouvelle.</div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
