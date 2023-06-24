//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pagesize=12
  const[pro,setPro]=useState(0);
  const[country,setCountry]=useState("us");
  const key=process.env.REACT_APP_API_KEY;
  console.log(key);
  const changeCountry=(x)=>{
    setCountry(x);
  }
    return (
      <div>
        <Router>
          <Navbar changeCountry={changeCountry}/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={pro}
          />
          <Routes>
            <Route exact  path="/" element={<News setPro={setPro} key="general" pagesize={pagesize} country={country} apikey={key} category="general"/>}/>
            <Route exact  path="/business" element={<News setPro={setPro} key="business" pagesize={pagesize} country={country} apikey={key} category="business"/>}/>
            <Route exact  path="/entertainment" element={<News setPro={setPro} key="entertainment" pagesize={pagesize} country={country} apikey={key} category="entertainment"/>}/>
            <Route exact  path="/health" element={<News setPro={setPro} key="health" pagesize={pagesize} country={country} apikey={key} category="health"/>}/>
            <Route exact  path="/science" element={<News setPro={setPro} key="science" pagesize={pagesize} country={country} apikey={key} category="science"/>}/>
            <Route exact  path="/sports" element={<News setPro={setPro} key="sports" pagesize={pagesize} country={country} apikey={key} category="sports"/>}/>
            <Route exact  path="/technology" element={<News setPro={setPro} key="technology" pagesize={pagesize} country={country} apikey={key} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}
export default App