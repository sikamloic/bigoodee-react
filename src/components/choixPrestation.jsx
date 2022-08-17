import React, { Component } from 'react'


export function SubPrestation({check, sub}){
  if(check === true && sub.length !== 0){
    return(
      <div className="space-y-2">
        {
          sub.map((item, i, tab) =>
            <div className="border-2 px-2 flex justify-between items-center py-1 rounded-md text-sm cursor-pointer bg-[#E0E0E0]">
              <div className="flex items-center space-x-2">
                <img src={require('../assets/hair.svg').default} alt="" />
                <div className="">{item.nom}</div>
              </div>
              <img src={item.check ? `${require('../assets/check-on.svg').default}`:`${require('../assets/check-off.svg').default}` } alt="" />
            </div>
          )
        }
      </div>
    )
  }
}

export default class choixPrestation extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      items: [
        {
          nom: 'vanilles (twists)', 
          check: false,
          sub:[
            {nom: 'vanilles (twists) effet mi-longue', check: false},
            {nom: 'vanilles (twists) effet longue', check: false},
          ]
        },
        {
          nom: 'nattes', 
          check: false,
          sub:[
            {nom: 'nattes', check: false},
          ]
        },
        {
          nom:"Braids",
          check: false,
          sub: []
        },
        {
          nom:"brushing",
          check: false,
          sub: []
        },
        {
          nom:"crochet braids",
          check: false,
          sub: []
        },
        {
          nom:"pose lace wig",
          check: false,
          sub: []
        },
        {
          nom:"lace frontal",
          check: false,
          sub: []
        },
      ],
    }
  }

  change(tab,i){
    tab[i].check = !tab[i].check
    this.setState({
      items: tab
    })
    // if(tab[i].sub.length === 0){
    //   this.props.onGetPrestation(tab[i].nom)
    // }
  }

  valider(){
    this.props.onClose()
  }

  render() {
    return (
      <div>
        <div className="absolute text-gray-600 rounded-lg bg-white space-y-5 w-[300px] max-h-[450px] overflow-y-scroll top-5 p-2 right1 right-[9%] sm:left-[30%] md:left-[30%] lg:left-[40%]">
          <button className='absolute top-2 right-2' onClick = {this.props.onClose}><img src={require('../assets/close.svg').default} alt="" /></button>
          <div className="text-center">type de prestation</div>
          <div className="space-y-3">
            {
              this.state.items.map((item, i, tab) =>
                  <div className="">
                    <div className="border-2 px-2 flex justify-between items-center py-1 rounded-md cursor-pointer mb-1" onClick={() => this.change(tab, i)}>
                      <div className="flex items-center space-x-2">
                        <img src={require('../assets/hair.svg').default} alt="" />
                        <div className="">{item.nom}</div>
                      </div>
                      <img src={item.check ? `${require('../assets/check-off-pink.svg').default}`:`${require('../assets/check-on-pink.svg').default}` } alt="" />
                    </div>
                    <div className="">
                      <SubPrestation check={item.check} sub={item.sub}></SubPrestation>
                    </div>
                  </div>
                )
            }
          </div>
          <button className="uppercase rounded-md h-10 bg-[#FF3E79] text-white w-full" onClick={() => this.valider()}>valider</button>
        </div>
      </div>
    )
  }
}
