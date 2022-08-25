import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Rating} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Banner from '../../components/banner';

export default class accueil extends Component {
  items = [1,2,3]
  render() {
    return (
      <div className='w-screen'>
        <Header/>
        <div className="bg-[#ff3e79] w-screen">
          <Banner></Banner>
          <div className="bg-[#FFCFDD] p-2 flex flex-col items-center text-gray-600 space-y-7 md:py-6">
            <div className="">De nombreuses clientes nous rejoignent !</div>
            <div className="relative flex items-start bg-white rounded-md p-1.5 w-[292px] h-44">
              <div className="">
                <img src={require('../../assets/nadia.svg').default} alt="" />
                <p className="text-sm text-black font-semibold">Nadia</p>
                <Rating value={5} />
              </div>
              <div className="text-start">
                très gentille, 
                travail professionnel
                assurée, ponctuelle... 
                j’ai vraiment appréciée
              </div>
              <div className="absolute bottom-2 right-2">10 septembre 2020</div>
            </div>
          </div>
          <div className="text-gray-600 space-y-5 py-3 bg-white mb-2 md:py-6">
            <div className="text-[#ff3e79] font-semibold text-lg text-center">Comment ça marche ?</div>
            <div className="px-10 space-y-3 md:flex md:items-start md:space-y-0 md:relative md:justify-center md:px-5 lg:px-20 md:space-x-3 lg:space-x-10">
              <img src={require('../../assets/Line.svg').default} alt="" className="absolute top-5 hidden md:block" />
              <div className="flex flex-col items-center space-y-4 z-50">
                <img src={require('../../assets/1.svg').default} alt="" className="" />
                <div className="font-semibold">Réservez</div>
                <div className="text-center text-sm lg:px-20 md:px-10">
                  Je souhaite me faire coiffer,
                  je choisis ma prestation et le jour
                  où je souhaite me faire coiffer.
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 z-50">
                <img src={require('../../assets/2.svg').default} alt="" className="" />
                <div className="font-semibold">Sélectionnez</div>
                <div className="text-center text-sm lg:px-20 md:px-10">
                  Je choisis parmi de nombreuses
                  coiffeseuses qualifiées et expérimentées.
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 z-50">
                <img src={require('../../assets/3.svg').default} alt="" className="" />
                <div className="font-semibold">Validez</div>
                <div className="text-center text-sm md:px-20">
                  Je valide ma prestation en payant
                  directement sur la plateforme.
                  mon rendez-vous est confirmé.
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-600 space-y-5 py-3 bg-white mb-2 md:py-6">
            <div className="text-[#ff3e79] font-semibold text-lg text-center">Tu es coiffeuse ?</div>
            <div className="px-10 space-y-3 md:space-y-0 md:flex md:items-start md:justify-center">
              <div className="flex flex-col items-center space-y-4">
                <img src={require('../../assets/coiffes-disponibilite.svg').default} alt="" className="" />
                <div className="font-semibold">Coiffes selon tes disponibilités</div>
                <div className="text-center text-sm lg:px-20 md:px-10">
                  tu gères ton planning et tes rendez-vous
                  depuis ton profil en toute indépendance
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={require('../../assets/gagner-argent.svg').default} alt="" className="md:w-36" />
                <div className="font-semibold">Gagnes de l’argent</div>
                <div className="text-center text-sm md:px-20">
                  Tu coiffes à domicile et gagnes 
                  un complément de revenu ou transformes 
                  ta passion de coiffeuse en activité principale.
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={require('../../assets/revenus-assures.svg').default} alt="" className="" />
                <div className="font-semibold">Revenus assurés</div>
                <div className="text-center text-sm md:px-20">
                  Tu fixes toi-même tes tarifs à l’avance 
                  et perçois la totalité du règlement de 
                  tes prestations.
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className='bg-[#ff3e79] text-white h-10 w-44 uppercase rounded-md cursor-pointer'>Devenir coiffeuse</button>
            </div>
          </div>
          <div className="bg-white py-3 space-y-5 text-gray-600 text-sm mb-2 md:px-20 md:py-6">
            <div className="text-center md:text-lg">
              Déjà présent dans de nombreuses villes,
              ... et bientôt près de chez vous!
            </div>
            <Swiper
              pagination={true}
              autoplay={{
                delay: 1000
              }}
              slidesPerView={1.2}
              breakpoints = {{
                768 : {
                  slidesPerView : 2.5
                },

                1024 : {
                  slidesPerView : 5
                }
              }}
            >
              <SwiperSlide>
                <div className="py-2.5 px-1.5 flex flex-col items-center w-56 shadow-lg rounded-md space-y-3 cursor-pointer text-center">
                  <div className="relative">
                    <img src={require('../../assets/paris.svg').default} alt="" className="" />
                    <div className="absolute text-[#ff3e79] w-full bottom-6 bg-black bg-opacity-60 h-12 justify-center items-center flex"><p>Bientôt disponible</p></div>
                  </div>
                  <div className="border-[#ff3e79] border-[2px] w-[180px] rounded-md h-14 flex justify-center items-center">
                    Réserves ta coiffeuse à Paris et sa région
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2.5 px-1.5 flex flex-col items-center w-56 shadow-lg rounded-md space-y-3 cursor-pointer text-center">
                  <img src={require('../../assets/nantes.svg').default} alt="" className="" />
                  <div className="border-[#ff3e79] border-[2px] w-[180px] rounded-md h-14 flex justify-center items-center">
                    Réserves ta coiffeuse à Nantes
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2.5 px-1.5 flex flex-col items-center w-56 shadow-lg rounded-md space-y-3 cursor-pointer text-center">
                  <img src={require('../../assets/rennes.svg').default} alt="" className="" />
                  <div className="border-[#ff3e79] border-[2px] w-[180px] rounded-md h-14 flex justify-center items-center">
                    Réserves ta coiffeuse à Rennes
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2.5 px-1.5 flex flex-col items-center w-56 shadow-lg rounded-md space-y-3 cursor-pointer text-center">
                  <img src={require('../../assets/bordeaux.svg').default} alt="" className="" />
                  <div className="border-[#ff3e79] border-[2px] w-[180px] rounded-md h-14 flex justify-center items-center">
                    Réserves ta coiffeuse à Bordeaux
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-2.5 px-1.5 flex flex-col items-center w-56 shadow-lg rounded-md space-y-3 cursor-pointer text-center">
                  <img src={require('../../assets/lille.svg').default} alt="" className="" />
                  <div className="border-[#ff3e79] border-[2px] w-[180px] rounded-md h-14 flex justify-center items-center">
                    <p className="">Réserves ta coiffeuse à lille</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="bg-white px-5 text-gray-600 space-y-7 py-5 mb-2 md:flex md:px-20 md:items-center md:justify-around md:py-6">
            <div className="space-y-5 md: w-72">
              <div className="md:text-xl">
                Découvrez un ensemble de 
                conseils pour la coiffure 
                et l’entretien des cheveux 
                bouclés, frisés et crépus.
              </div>
              <button className="bg-[#ff3e79] uppercase text-white h-10 w-44 p-1 cursor-pointer rounded-md">
                decouvrir
              </button>
            </div>
            <div className="md:relative">
              <img src={require('../../assets/accueil-BFC.svg').default} alt="" className="" />
              <div className="flex md:absolute md:-top-2 md:transform-gpu md:rotate-12 -right-20">
                <div className="bg-[#ff3e79] text-white text-xs w-10/12 max-h-10 text-start pl-2">
                  <div className="">Téléchargez gratuitement</div>
                  <div className="">notre guide des coiffures pour les BFC</div>
                </div>
                <div className="bg-white rounded-full shadow-lg w-16 h-16 flex justify-center items-center -ml-2 -mt-3 p-2">
                  <img src={require('../../assets/seche-cheveux.svg').default} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-10 md:px-20">
            <div className="flex justify-center items-center">
              <p className="text-start w-44 md:w-56 md:text-lg">
                Un besoin de soins capillaires
                ou de mèches à tresser ?
                Découvrez le top des soins Pour 
                cheveux  crépus, frisés et bouclés.
              </p>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="bg-[#ff3e79] text-white uppercase rounded-md w-56 p-1 cursor-pointer">DÉCOUVRIR BIGOOSHOP</button>
            </div>
            <img src={require('../../assets/bigooshop.svg').default} alt="" className="-mt-32 hidden md:block" />
            <img src={require('../../assets/bigooshopsm.svg').default} alt="" className="md:hidden" />
          </div>
          <div className="bg-[#FFCFDD] hidden md:flex justify-around py-10 items-center">
            <div className="">
              <img src={require('../../assets/footer.svg').default} alt="" className="" />
            </div>
            <div className="flex flex-col items-center space-y-5">
              <div className="text-[#8C8C8C] text-center text-xl w-64">Télecharger dès à présent notre appication mobile</div>
              <div className="flex space-x-10">
                <img src={require('../../assets/google_play.svg').default} alt="" className="cursor-pointer" />
                <img src={require('../../assets/appstore.svg').default} alt="" className="cursor-pointer" />
              </div>
            </div> 
          </div>
          <div className="bg-white h-4"></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
