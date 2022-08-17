import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {TextField, Avatar} from '@mui/material';

export default class messages extends Component {
  render() {
    return (
      <div>
        <div className="hidden md:block">
          <Header></Header>
        </div>
        <div className="text-gray-600 my-10">
          <div className="bg-[#ff3e79] bg-opacity-10">
            <div className="md:hidden flex items-center bg-white px-5 pb-5 justify-between">
              <img src={require('../../assets/back.svg').default} alt="" />
              <div className="font-semibold text-lg">Messages</div>
              <button className='invisible'></button>
            </div>
            <div className="bg-white text-center pb-10 text-[#ff3e79] font-semibold text-lg">Mes messages</div>
            <form className="bg-white pb-2 mb-0.5 px-5 md:px-16 grid grid-cols-12 gap-2">
              <div className="col-span-10">
                <TextField 
                  label="Rechercher un contact"
                  type="search"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
              </div>
              <button className="bg-[#ff3e79] bg-opacity-10 flex justify-center items-center col-span-2 rounded-lg cursor-pointer">
                <img src={require('../../assets/search-pink.svg').default} alt="" />
              </button>
            </form>
            <div className="bg-white px-5 py-2 space-y-5 md:px-16">
              <div className="bg-[#FFB156] rounded-lg pl-2.5 cursor-pointer">
                <div className="bg-[#FFCFDD] rounded-r-lg flex justify-between w-full items-center p-2 md:px-5">
                  <div className="flex items-center space-x-2">
                    <Avatar src={require('../../assets/pp.svg').default}></Avatar>
                    <div className="space-y-1">
                      <div className="">Sarah</div>
                      <div className="max-w-[150px] overflow-ellipsis overflow-hidden whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam. Placeat, consectetur?</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="">16:38</div>
                    <div className="flex justify-center items-center bg-[#ff3e79] w-5 h-5 rounded-full text-white overflow-ellipsis overflow-hidden whitespace-nowrap">12</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFB156] rounded-lg pl-2.5 cursor-pointer">
                <div className="bg-[#FFCFDD] rounded-r-lg flex justify-between w-full items-center p-2 md:px-5">
                  <div className="flex items-center space-x-2">
                    <Avatar src={require('../../assets/pp.svg').default}></Avatar>
                    <div className="space-y-1">
                      <div className="">Sarah</div>
                      <div className="max-w-[150px] overflow-ellipsis overflow-hidden whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quam. Placeat, consectetur?</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="">16:38</div>
                    <div className="flex justify-center items-center bg-[#ff3e79] w-5 h-5 rounded-full text-white overflow-ellipsis overflow-hidden whitespace-nowrap">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
