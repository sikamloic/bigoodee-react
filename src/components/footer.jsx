import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="bg-[#FFCFDD] flex flex-col items-center space-y-10 px-10 py-3 md:hidden">
            <div className="text-[#8C8C8C] text-center text-xl">Télecharger dès à présent notre appication mobile</div>
            <div className="">
              <img src={require('../assets/footer.svg').default} alt="" className="" />
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img src={require('../assets/google_play.svg').default} alt="" className="" />
              <img src={require('../assets/appstore.svg').default} alt="" className="" />
            </div> 
          </div>
          <div className="bg-[#ff3e79] flex flex-col items-center px-10 md:px-5 text-white">
            <div className="flex flex-col items-center space-y-1 md:flex-row pt-5 md:text-center">
              <div className="flex flex-col items-center">
                <img src={require('../assets/bigoodeeBlanc.svg').default} alt="" />
                <div className="">Des questions ?</div>
                <div className="">Contactez-nous</div>
              </div>
              <div className="border-t-[1.5px] border-white w-32 my-10 md:hidden"></div>
              <div className="border-l-[1.5px] border-white h-32 md:mx-5 lg:mx-10 hidden md:block"></div>
              <div className="flex flex-col items-center space-y-1">
                <div className="">FAQ</div>
                <div className="">CGU</div>
                <div className="">Mentions légales</div>
                <div className="">Qui sommes nous?</div>
                <div className="">Nous contacter</div>
              </div>
              <div className="border-t-[1.5px] border-white w-32 my-10 md:hidden"></div>
              <div className="border-l-[1.5px] border-white h-32 md:mx-5 lg:mx-10 hidden md:block"></div>
              <div className="flex flex-col items-center space-y-1">
                <div className="">Guide de coiffures des BFC</div>
                <div className="">Plan du site</div>
              </div>
              <div className="border-t-[1.5px] border-white w-32 my-10 md:hidden"></div>
              <div className="border-l-[1.5px] border-white h-32 md:mx-5 lg:mx-10 hidden md:block"></div>
              <div className="flex flex-col items-center space-y-1">
                <div className="">Suivez-nous</div>
                <div className="flex space-x-5">
                  <img src={require('../assets/facebook-white.svg').default} alt="" className="" />
                  <img src={require('../assets/insta-white.svg').default} alt="" className="" />
                  <img src={require('../assets/youtube-white.svg').default} alt="" className="" />
                </div>
              </div>
            </div>
            <div className="text-xs mt-10 mb-2">© Bigoodee 2021 tous droits réservés.</div>
          </div>
        </div>
        <div className=""></div>
      </div>
    )
  }
}
