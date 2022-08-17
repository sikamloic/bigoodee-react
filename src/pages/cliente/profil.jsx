import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DashboardCliente from '../../components/dashboard-cliente';
import { TextField} from '@mui/material';

export default class profil extends Component {

  userFile = "";
  imagePath = "";

  constructor(){
    super()
    this.state = {
      imgUrl: require('../../assets/pp.svg').default
    }
  }
  upload(event) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
        var minetype = event.target.files[0].type;
        if (minetype.match(/image\/*/) == null) {
            console.log('erreur');
            return;
        }
        var reader = new FileReader();
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.setState({
            imgUrl : reader.result
          })
        };
    }
  }

  render() {
    return (
      <div>
        <Header back="true"></Header>
        <div className="my-10 px-5 flex justify-around items-start">
          <DashboardCliente index = "0"></DashboardCliente>
          <div className="rounded-md shadow-lg space-y-5 px-1.5 md:w-[500px] lg:w-[700px] py-3 md:px-5 md:items-start flex flex-col">
            <div className="text-[#ff3e79] text-center font-semibold">Mes informations</div>
            <div className="space-y-5 md:space-y-0 md:flex md:space-x-5">
              <div className="flex flex-col items-center space-y-5">
                <div className="border-2 border-dashed border-[#ff3e79] rounded-md">
                  <img src={this.state.imgUrl} alt="" width="100%" className='w-full max-h-64 min-w-[150px]' />
                </div>
                <input type="file" name="" id="image" className='hidden' onChange={(e) => this.upload(e)} />
                <label htmlFor="image" className='uppercase bg-[#ff3e79] bg-opacity-40 rounded-md cursor-pointer h-10 w-56 flex justify-center items-center text-[#ff3e79]'>changer ma photo</label>
              </div>
              <form className="space-y-3">
                <TextField 
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
                <TextField 
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
                <TextField 
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
                <TextField 
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
                <TextField 
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
                <TextField 
                  label="Email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  size='small'
                />
                <div className="flex justify-center items-center w-full">
                  <button type="submit" className="uppercase bg-[#ff3e79] text-white h-10 w-full rounded-md">mise à jour</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
