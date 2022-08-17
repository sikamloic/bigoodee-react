import React, { Component } from 'react';
import Header from '../components/header';
import { TextField, InputAdornment} from '@mui/material';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';

export default class connexion extends Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
    }

    handleOpen = () => this.setState({open:true});
    handleClose = () => this.setState({open:false});
    
  render() {
    return (
      <div>
        <Header color = "rose"></Header>
        <div className='block md:flex justify-between items-center md:px-20 md:relative'>
            <img src={require('../assets/inscription.svg').default} alt="" className="hidden md:block -mb-[85px]" />
            <div className="md:absolute bottom-[85px]">
                <img src={require('../assets/inscription3.svg').default} alt="" className="hidden md:block" />
            </div>
            <div className="px-5 md:w-[475px] md:relative z-[1000] md:bg-white">
                <div className="text-center uppercase text-[#ff3e79] text-xl font-bold my-5">connexion</div>
                <form className="space-y-5">
                    <TextField 
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: (<InputAdornment position="start"><img src={require('../assets/email.svg').default} alt="" /></InputAdornment>),
                        }}
                    />
                    <TextField 
                        label="Mot de passe"
                        type="password"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: (<InputAdornment position="start"><img src={require('../assets/eye-invisible.svg').default} alt="" /></InputAdornment>),
                        }}
                    />
                    <Link className='text-sm text-[#ff3e79] cursor-pointer' to="/reinitialiser">
                        Mot de passe oublié ?
                    </Link>
                    <button type='submit' className='bg-[#ff3e79] text-center text-lg uppercase h-10 w-full text-white rounded-md'>se connecter</button>
                </form>
                <fieldset className='border-t-2 mx-5 text-gray-600 my-5'><legend className='px-5 text-sm' >Ou</legend></fieldset>
                <div className="text-gray-600 text-sm mb-2">se connecter avec</div>
                <button type='submit' className='bg-[#2D88FF] text-center text-lg uppercase h-10 w-full text-white rounded-md' onClick={this.handleOpen}>s'inscrire</button>
                <div className='flex justify-center items-center px-7 mt-5'>
                    <p className='text-start text-sm text-gray-600 my-5'>Vous n’avez pas encore de  compte ? <Link className='text-[#ff3e79] cursor-pointer' to="/inscription">s'inscrire</Link></p>
                </div>
            </div>
            <img src={require('../assets/inscription2.svg').default} alt="" className="hidden md:block" />
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
