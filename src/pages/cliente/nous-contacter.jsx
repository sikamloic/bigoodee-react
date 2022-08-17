import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DashboardCliente from '../../components/dashboard-cliente';
import { TextField} from '@mui/material';

export default class nousContacter extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <div className="px-4 space-y-5 md:space-y-0 my-6 flex flex-col md:flex-row justify-around md:items-start">
            <div className="border-2 md:border-0 p-2 rounded-md"><DashboardCliente index="4" show="true"></DashboardCliente></div>
            <form className="space-y-3 md:w-[400px] lg:w-[580px]">
              <TextField 
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                size='small'
              />
              <TextField 
                label="Commentaires"
                type="text"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <button type='submit' className='bg-[#FF3E79] uppercase rounded-md text-white w-full h-10'>envoyer</button>
            </form>
          </div>
        <Footer></Footer>
      </div>
    )
  }
}
