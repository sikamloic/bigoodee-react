import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DashboardCliente from '../../components/dashboard-cliente';
import { Avatar } from '@mui/material';

export default class historique extends Component {
  items = [1,2,3,4];

  render() {
    return (
      <div className='text-gray-600'>
        <Header back="true"></Header>
        <div className="my-10 flex justify-around items-start">
          <DashboardCliente index="1"></DashboardCliente>
          <div className="px-5 space-y-5 rounded-lg shadow-lg md:w-[400px] lg:w-[600px] md:p-4">
            <div className="text-[#FF3E79] font-semibold text-lg text-center md:text-start">Mon historique</div>
            <div className="space-y-5">
              <div className="">Cette semaine</div>
              <div className="space-y-3">
                {
                  this.items.map( () =>
                    <div className="flex justify-between items-center rounded-lg h-12 border-2 py-2 px-3">
                      <div className="flex items-start">
                        <div className="flex items-center space-x-2">
                          <Avatar src={require('../../assets/pp.svg').default}></Avatar>
                          <div className="-space-y-1">
                            <div className="font-semibold">Clarisse </div>
                            <div className="">Fulani locks</div>
                          </div>
                        </div>
                        <div className="text-[#FFB156]">40€</div>
                      </div>
                      <div className="cursor-pointer flex justify-center items-center h-10 w-16 bg-[#FF3E79] bg-opacity-40 rounded-md"><img src={require('../../assets/messages-pink.svg').default} alt="" /></div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
