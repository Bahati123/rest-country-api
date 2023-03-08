// import {Component} from 'react';
// import Listingcomponent from './component/listingcomponent.js';
// import {Routes,Route} from 'react-router-dom';
// import Navbar from './component/navbar.js';
// import Body from './body.js';
// import Login from './component/login.js';
// import Footer from './component/Footer.js';
// // import './App.css';
// class App extends Component{
  
//   render(){
//     return(
//           <div>

//           <Navbar/>

//           <Routes>
           

//             <Route path="home" element={ <Body/>} ></Route>
//             <Route path="about" element={ <Listingcomponent/>} ></Route>
//             <Route path="sign" element={ <Lo/>} ></Route>
//           </Routes>
//           <Footer/>
//         </div>
      

//   )}
// }
import React, { Component } from "react";
import JsonData from "./data.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      getdata:''
    };
  }
   componentDidMount() {
    this.setState({data:JsonData})
  }
  searchdata=(event)=>{
    const getdata=event.target.value.toLowerCase()
    this.setState({getdata:getdata})
  
  }
  

  render() {
  const filtereddata=JsonData.filter((jsonItem)=>(
   jsonItem.name.toLocaleLowerCase().includes(this.state.getdata)
  ))

    return( <div>
      <div className='p-3'><input type='text' placeholder="search....." className='h-6' onChange={this.searchdata} />
      <li class="nav-item dropdown item-center text-center ">
                  <div class="dropdown  spacing-between ">
                  <input type='text' placeholder="filter by region" className='h-6' onChange={this.filtercontinent} />
                        <div class="dropdown-content ">
                          <a href="africa" class="text-light p-2 ">africa</a>
                          <a href="America" class="text-light p-2 ">America</a>
                          <a href="Asia" class="text-light p-2 ">Asia</a>
                          <a href="Oceania" class="text-light p-2 ">Oceania</a>
                          <a href="Europe" class="text-light p-2 ">Europe</a>
                        </div>
                      </div>
                  </li>  
      </div>
    <div className='grid grid-cols-4   justify-end p-9 w-full mt-8'>
    
      {console.log(this.state.getdata)}
    
      {filtereddata.map((dataitem)=>(
      
        <div className='w-full sticky '>
          
       <img src={dataitem.flag} className='h-20 p-3 '></img>
          <p>{dataitem.name}</p>
          <p>population:{dataitem.population}</p>
          <p>region:{dataitem.region}</p>
          <p>capital:{dataitem.capital}</p>
          
        </div>
        
      ))}
      </div>
    </div>)
  }
}
export default App;

