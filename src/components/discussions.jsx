import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Avatar, TextField } from '@mui/material';

export default class discussions extends Component {
  render() {
    return (
      <div>
        <div className="hidden md:block"><Header></Header></div>
        <div className="px-5 mb-10 mt-3 md:hidden">
          <div className="space-y-5">
            <img src={require('../assets/back-pink.svg').default} alt="" className="" />
            <div className="border-2 border-[#ff3e79] space-x-5 rounded-lg flex items-center px-2 py-1">
              <img src={require('../assets/menu.svg').default} alt="" />
              <Avatar src={require('../assets/pp.svg').default}></Avatar>
              <div className="font-semibold">Sarah</div>
            </div>
          </div>
          <div className="h-[500px] overflow-hidden overflow-y-scroll p-2 space-y-5 my-2">
            <div className="flex justify-start">
              <div className="bg-[#FFB156] bg-opacity-10 max-w-[90%] rounded-md p-1 max-h-72 overflow-hidden">Lorem ipsum </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#ff3e79] bg-opacity-10 max-w-[90%] rounded-md p-1 max-h-72 overflow-hidden">lorem100</div>
            </div>
          </div>
          <div className="border-2 border-[#ff3e79] rounded-md flex items-center space-x-2 p-1">
            <TextField
              variant='filled'
              fullWidth
              multiline
              maxRows={5}
              size='small'
            />
            <img src={require('../assets/edit-pink2.svg').default} alt="" className="" />
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <div className="text-center text-[#ff3e79] font-semibold text-lg">Mes discussions</div>
          <div className="border-2">
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
