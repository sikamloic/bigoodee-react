import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';

export default class infosCoiffeuse extends Component {
  render() {
    return (
      <div>
        <Header back="true"></Header>
        <div className="px-5 text-gray-600 my-10 md:mt-20 space-y-10 md:px-40 lg:px-64">
          <div className="relative rounded-md shadow-lg  h-80 bg-white">
            <div className="absolute flex flex-col items-center space-y-1.5 right-1/4 -top-10 md:right-[40%]">
              <div className="bg-[#FFB156] pt-1 rounded-md"><img src={require('../../assets/sarah.svg').default} alt="" className='w-full -mb-0.5' /></div>
              <div className="font-semibold text-lg">Sarah</div>
            </div>
            <div className="absolute bottom-6 md:right-[15%] lg:right-[30%] bg-[#FF3E79]">
              <div className="grid grid-cols-3 place-items-center gap-2 bg-white mb-1 py-3 px-2">
                <div className="flex items-center">
                  <img src={require('../../assets/localisation.svg').default} alt="" className='w-5' />
                  <div className="">Nantes</div>
                </div>
                <Rating value = {5} size="small"></Rating>
                <div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] bg-opacity-40 rounded-md"><img src={require('../../assets/coeur-orange.svg').default} alt="" /></div>
                <div className="">se déplace</div>
                <div className="">à domicile</div>
                <div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] text-[#FF3E79] bg-opacity-40 rounded-md uppercase">avis</div>
              </div>
              <div className="grid grid-cols-12 bg-white gap-4 pt-3 px-2">
                <NavLink className="col-span-4 cursor-pointer flex justify-center items-center h-10 w-16 bg-[#FF3E79] bg-opacity-40 rounded-md" to="/discussions">
                  <img src={require('../../assets/messages-pink.svg').default} alt="" />
                </NavLink>
                <div className="col-span-8 bg-[#FF3E79] h-10 uppercase rounded-md text-white flex justify-center items-center text-sm cursor-pointer">réserver la prestation</div>
              </div>
            </div>
          </div>
          <div className="items-start flex flex-col space-y-3">
            <div className="text-black font-semibold text-lg">Biographie</div>
            <div className="">Je suis sarah, et je ravie de m’occuperde vous.</div>
          </div>
          <div className="items-start flex flex-col space-y-3">
            <div className="text-black font-semibold text-lg">Galerie</div>
            <div className="w-full">
              <Swiper 
                slidesPerView={3} 
                spaceBetween={10}
                breakpoints = {{
                  768 : {
                    slidesPerView : 5
                  }
                }}
              >
                <SwiperSlide>
                  <img src={require('../../assets/galerie.svg').default} alt="" className="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require('../../assets/galerie2.svg').default} alt="" className="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require('../../assets/galerie3.svg').default} alt="" className="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require('../../assets/galerie4.svg').default} alt="" className="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require('../../assets/galerie.svg').default} alt="" className="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-black font-semibold text-lg">Autres prestations</div>
            <div className="space-y-2">
              <div className="bg-[#FFB156] rounded-lg pl-2 border-2 h-12 cursor-pointer">
                <div className="bg-white flex justify-between items-center px-2 h-full">
                  <div className="text-[#FF3E79] uppercase text-sm">tissages</div>
                  <div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] text-[#FFB156] font-semibold text-lg bg-opacity-10 rounded-md uppercase">40 €</div>
                </div>
              </div>
              <div className="bg-[#FFB156] rounded-lg pl-2 border-2 h-12 cursor-pointer">
                <div className="bg-white flex justify-between items-center px-2 h-full">
                  <div className="text-[#FF3E79] uppercase text-sm">tresses pour enfants</div>
                  <div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] text-[#FFB156] font-semibold text-lg bg-opacity-10 rounded-md uppercase">40 €</div>
                </div>
              </div>
              <div className="bg-[#FFB156] rounded-lg pl-2 border-2 h-12 cursor-pointer">
                <div className="bg-white flex justify-between items-center px-2 h-full">
                  <div className="text-[#FF3E79] uppercase text-sm">tissages</div>
                  <div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] text-[#FFB156] font-semibold text-lg bg-opacity-10 rounded-md uppercase">40 €</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
