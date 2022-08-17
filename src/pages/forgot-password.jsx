import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { TextField, InputAdornment} from '@mui/material';

export default class forgotPassword extends Component {
    constructor(){
        super()
        this.state = {
            step1 : true,
            step2 : false
        }
    }
    
    goTo(){
        this.setState({
            step1 : !this.step1,
            step2 : !this.step2
        })
    }
  render() {
    return (
      <div>
        <Header change = "true"></Header>
        <div className="">
            <div className='block md:flex justify-between items-center md:px-20 md:relative'>
                <img src={require('../assets/inscription.svg').default} alt="" className="hidden md:block -mb-[85px]" />
                <div className="md:absolute bottom-[85px]">
                    <img src={require('../assets/inscription3.svg').default} alt="" className="hidden md:block" />
                </div>
                <div className={`px-5 md:w-[475px] md:relative z-[1000] md:bg-white ${this.state.step1 ? 'block':'hidden'}`}>
                    <div className="text-center uppercase text-[#ff3e79] text-xl font-bold my-5">réinitialiser le mot de passe</div>
                    <div className="text-sm mb-5 text-gray-600">rentres ton email, et tu recevras un lien pour réinitialiser ton mot de passe.</div>
                    <form className="space-y-5 mb-5">
                        <TextField 
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: (<InputAdornment position="start"><img src={require('../assets/email.svg').default} alt="" /></InputAdornment>),
                            }}
                        />
                        <button type='submit' className='bg-[#ff3e79] text-center text-lg uppercase h-10 w-full text-white rounded-md' onClick={() => this.goTo()}>reinitialiser le mot de passe</button>
                    </form>
                </div>
                <div className={`px-5 md:w-[475px] md:relative z-[1000] md:bg-white ${this.state.step2 ? 'block':'hidden'}`}>
                    <div className="text-center uppercase text-[#ff3e79] text-xl font-bold my-5">nouveau mot de passe</div>
                    <div className="text-sm mb-5 text-gray-600">rentres ton nouveau mot de passe.</div>
                    <form className="space-y-5 mb-5">
                        <TextField 
                            label="Nouveau mot de passe"
                            type="password"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: (<InputAdornment position="start"><img src={require('../assets/eye-invisible.svg').default} alt="" /></InputAdornment>),
                            }}
                        />
                        <TextField 
                            label="Confirmer le mot de passe"
                            type="password"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: (<InputAdornment position="start"><img src={require('../assets/eye-invisible.svg').default} alt="" /></InputAdornment>),
                            }}
                        />
                        <button type='submit' className='bg-[#ff3e79] text-center text-lg uppercase h-10 w-full text-white rounded-md'>enregistrer le mot de passe</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
