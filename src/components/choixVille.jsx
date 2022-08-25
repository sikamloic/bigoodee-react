import React, { Component, useState } from 'react'


export function SubVille({check, sub, onGetSubVille}){
  const [tabs, setTabs] = useState(sub)
  function select(tab, index){
    tab[index].check = !tab[index].check;
    setTabs([...tab]);
    let i = index + 1;
    while(i !== index){
      if(i === tab.length){
        i = 0;
      }
      if(i > index && i < tab.length){
        for(let j = i; j <= tab.length - 1; j++){
          tab[j].check = false;
          setTabs([...tab]);
        }
        i = 0;
      }
      if(i < index){
        for(let j = i; j < index; j++){
          tab[j].check = false;
          setTabs([...tab]);
          i = j + 1;
        }
      }
    }
    if(tab[index].check === true){
      onGetSubVille(tab[index].nom);
    }
    else{
      onGetSubVille("");
    }
  }
  if(check === true && sub.length !== 0){
    return(
      <div className="space-y-2">
        {
          tabs.map((item, i, tab) =>
            <div key={item.nom} className="border-2 px-2 flex justify-between items-center py-1 rounded-md text-sm cursor-pointer bg-[#E0E0E0]" onClick={() => select(tab, i)}>
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

export default class choixVille extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      items: [
        {
          nom: 'Paris', 
          check: false,
          sub:[
            {nom: 'Seine-et-Marne (77)', check: false},
            {nom: 'Yvelines (78)', check: false},
            {nom: 'Essonne (91)', check: false},
            {nom: 'Hauts-de-Seine (92)', check: false},
            {nom: 'Seine-Saint-Denis (93)', check: false},
          ]
        },
        {
          nom: 'Lille', 
          check: false,
          sub: []
        },
        {
          nom: 'Nantes', 
          check: false,
          sub: []
        },
        {
          nom: 'Bordeaux', 
          check: false,
          sub: []
        },
        {
          nom: 'Rennes', 
          check: false,
          sub: []
        },
      ],
      ville: ""
    }
    this.getSubVille = this.getSubVille.bind(this)
  }

  select(tab, index){
    tab[index].check = !tab[index].check;
    this.setState({
      items: tab
    });
    let i = index + 1;
    while(i !== index){
      if(i === tab.length){
        i = 0;
      }
      if(i > index && i < tab.length){
        for(let j = i; j <= tab.length - 1; j++){
          tab[j].check = false;
          this.setState({
            items: tab
          });
        }
        i = 0;
      }
      if(i < index){
        for(let j = i; j < index; j++){
          tab[j].check = false;
          this.setState({
            items: tab
          });
          i = j + 1;
        }
      }
    }
    if(tab[index].sub.length === 0 && tab[index].check === true){
      this.setState({
        ville: tab[index].nom
      })
    }
    else{
      this.setState({
        ville: ""
      })
    }
  }

  getSubVille(nom){
    this.setState({
      ville: nom
    })
  }

  valider(){
    this.props.onGetVille(this.state.ville)
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
                  <div className="" key={item.nom}>
                    <div className="border-2 px-2 flex justify-between items-center py-1 rounded-md cursor-pointer mb-1" onClick={() => this.select(tab, i)}>
                      <div className="flex items-center space-x-2">
                        <img src={require('../assets/hair.svg').default} alt="" />
                        <div className="">{item.nom}</div>
                      </div>
                      <img src={item.check ? `${require('../assets/check-off-pink.svg').default}`:`${require('../assets/check-on-pink.svg').default}` } alt="" />
                    </div>
                    <div className="">
                      <SubVille check={item.check} sub={item.sub} onGetSubVille={this.getSubVille}></SubVille>
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
