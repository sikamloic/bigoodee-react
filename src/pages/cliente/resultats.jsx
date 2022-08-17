import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {TextField, InputAdornment} from '@mui/material';
import {Link} from 'react-router-dom';

export default class resultats extends Component {
  items = [1,2,3,4];
  render() {
    return (
      <div>
        <Header back="true"></Header>
        <div className="px-5 text-gray-600 mt-10 space-y-10 mb-5 flex flex-col lg:flex-row items-center lg:justify-around">
          <form className="border-2 rounded-md space-y-5 flex flex-col items-center p-2 md:w-72">
            <TextField 
              label="choix de la ville"
              type="button"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (<InputAdornment position="start"><img src={require('../../assets/arrow-down-pink2.svg').default} alt="" /></InputAdornment>),
              }}
            />
            <TextField 
              label="type de prestation"
              type="button"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (<InputAdornment position="start"><img src={require('../../assets/arrow-down-pink2.svg').default} alt="" /></InputAdornment>),
              }}
            />
            <TextField 
              label="choix de votre date"
              type="button"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (<InputAdornment position="start"><img src={require('../../assets/arrow-down-pink2.svg').default} alt="" /></InputAdornment>),
              }}
            />
            <button type="submit" className='bg-[#ff3e79] text-white rounded-md uppercase w-44 h-12'>rechercher</button>
          </form>
          <div className="space-y-5 md:min-w-[650px]">
            <div className="flex items-start space-x-2 md:w-96">
              <img src={require('../../assets/key-orange.svg').default} alt="" />
              <div className="">Paiement en ligne 100% sécurisé. Annulation possible jusqu’à 48 heures avant le début de la prestation.</div>
            </div>
            <div className='space-y-5 md:space-y-0 md:grid grid-cols-2 gap-4'>
              {
                this.items.map(()=>
                  <div className="border-2 rounded-md relative z-50 px-2 pt-1 pb-3">
                    <div className="absolute -top-3 border-2 rounded-md pt-0.5 bg-white ">
                      <img src={require('../../assets/nadia.svg').default} alt="" className="w-full" />
                    </div>
                    <div className="flex justify-end">
                      <div className="grid grid-cols-2 place-items-end gap-2">
                        <div className="uppercase">sarah</div>
                        <div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] text-[#FFB156] font-semibold text-lg bg-opacity-40 rounded-md uppercase">40 €</div>
                        <div className="flex items-center">
                          <img src={require('../../assets/localisation.svg').default} alt="" className='w-3' />
                          <div className="text-sm">Nantes</div>
                        </div>
                        <img src={require('../../assets/carte-visite.svg').default} alt="" />
                        <div className="text-sm">7 avis (5/5)</div>
                        <img src={require('../../assets/argent2.svg').default} alt="" className="" />
                      </div>
                    </div>
                    <div className="md:flex justify-center items-center">
                      <div className="flex space-x-2 mt-5">
                        <Link className="uppercase w-36 h-10 rounded-md cursor-pointer bg-[#FF3E79] text-white flex justify-center items-center" to="/infos-coiffeuse">voir  profil</Link>
                        <button className="uppercase w-36 h-10 rounded-md cursor-pointer border-2 border-[#FF3E79] text-[#FF3E79]">contactez-la</button>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
