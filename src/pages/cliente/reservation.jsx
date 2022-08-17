import React, { Component } from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import DonneesBancaires from '../../components/donneesBancaires';
import ConfirmationReservation from '../../components/confirmationReservation';
import {TextField, InputAdornment, Modal, Fade, Backdrop} from '@mui/material';

export default class reservation extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 open: false,
       open2: false
		}
	}
	render() {
		return (
			<div>
				<Header back="true" color="blanc"></Header>
				<div className="flex flex-col items-center space-y-5 md:space-y-0 md:space-x-5 md:flex-row md:items-start lg:justify-center lg:px-20 text-gray-600 px-5 my-10">
					<div className="rounded-md border-2 px-2 w-full lg:w-[300px]">
						<div className="relative flex justify-end">
							<div className="absolute -top-3 left-1">
								<img src={require('../../assets/nadia.svg').default} alt="" className="" />
							</div>
							<div className="flex items-start mt-1">
								<div className="flex flex-col items-start space-y-2">
									<div className="uppercase">sarah</div>
									<div className="flex items-center">
										<img src={require('../../assets/localisation.svg').default} alt="" className='w-3' />
										<div className="text-sm">Nantes</div>
									</div>
									<div className="text-sm">7 avis (5/5)</div>
								</div>
								<div className="flex flex-col items-end space-y-2">
									<div className="cursor-pointer flex justify-center items-center h-8 w-16 bg-[#FF3E79] text-[#FFB156] font-semibold text-lg bg-opacity-10 rounded-md uppercase">40 €</div>
									<img src={require('../../assets/carte-visite.svg').default} alt="" />
									<img src={require('../../assets/argent2.svg').default} alt="" className="" />
								</div>
							</div>
						</div>
						<div className="mt-3 space-y-3">
							<div className="flex justify-between w-full items-center">
								<div className="flex space-x-2 items-center text-sm">
									<img src={require('../../assets/calendar.svg').default} alt="" />
									<div className="">Le mardi 11 mars 2021 entre 10h:00 - 12h:00</div>
								</div>
								<button className="uppercase rounded-md p-1 bg-[#FF3E79] bg-opacity-10 text-[#FF3E79]">modifier</button>
							</div>
							<div className="flex justify-between w-full items-center">
								<div className="flex space-x-2 items-center text-sm">
									<img src={require('../../assets/hair.svg').default} alt="" />
									<div className="">vanilles (twists) effet mi-longue</div>
								</div>
								<button className="uppercase rounded-md p-1 bg-[#FF3E79] bg-opacity-10 text-[#FF3E79]">modifier</button>
							</div>
						</div>
					</div>
					<div className="w-full space-y-5 lg:w-[500px]">
						<TextField 
							label="Ae75yd1f"
							type="text"
							variant="outlined"
							fullWidth
							size='small'
							className='cursor-pointer'
							InputProps={{
								endAdornment: (<InputAdornment position="start"><img src={require('../../assets/send-pink.svg').default} alt="" /></InputAdornment>),
							}}
						/>
						<div className="">choisis ton moyen de paiement</div>
						<div className="border-2 rounded-md pl-10 pr-2 py-2 space-y-4">
							<div className="flex items-center justify-between -ml-8">
								<div className="flex items-center space-x-2">
									<img src={require('../../assets/carte-visite.svg').default} alt="" />
									<div className="">Carte bancaire : xxxx 2235</div>
								</div>
								<img src={require('../../assets/edit-pink2.svg').default} alt="" className='cursor-pointer' onClick={() => {this.setState({open: true})}} />
								<Modal 
									open={this.state.open}
									onClose={() => {this.setState({open: false})}}
									closeAfterTransition
									BackdropComponent={Backdrop}
									BackdropProps={{
										timeout: 50,
									}}
								>
									<Fade in={this.state.open}><div><DonneesBancaires onClose = {() => {this.setState({open: false})}}></DonneesBancaires></div></Fade>
								</Modal>
							</div>
							<div className="flex items-center justify-between">
								<div className="">prix initial :</div>
								<div className="">40 €</div>
							</div>
							<div className="flex items-center justify-between">
								<div className="">réduction :</div>
								<div className="">40 €</div>
							</div>
							<div className="flex items-center justify-between">
								<div className="font-semibold">net à payer :</div>
								<div className="">40 €</div>
							</div>
						</div>
						<button className='w-full rounded-md p-1 text-white bg-[#FF3E79] uppercase' onClick={() => {this.setState({open2: true})}}>valider le paiement</button>
            <Modal 
							open={this.state.open2}
							onClose={() => {this.setState({open2: false})}}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 50,
							}}
						>
							<Fade in={this.state.open2}><div><ConfirmationReservation name="success" onClose = {() => {this.setState({open2: false})}}></ConfirmationReservation></div></Fade>
						</Modal>
					</div>
				</div>
				<Footer></Footer>
			</div>
		)
	}
}
