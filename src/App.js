
import './App.css';
import MovieCard from './Components/MovieCard';
import { useState } from 'react';


import Add from './Components/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Filtre } from './Components/Filtre';
import {Route,BrowserRouter} from 'react-router-dom'


function App({dataMovie,setDataMovie}) {
  const AddMovie=(movie)=>{
    setDataMovie([...dataMovie,movie])
  }

  const [search,setSearch]= useState('');
  const [rate,setRate]= useState(0)



  return (
    <div className="App">
      
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <Add AddMovie={AddMovie}/>
      <Filtre setSearch={setSearch} setRate={setRate}  rate={rate}/>
      </div>

      <MovieCard dataMovie={dataMovie.filter(el=> el.title.trim().toLowerCase().includes(search.toLowerCase().trim()) && el.rating >= rate)}/> 
   
    </div>
  );
}
export default App;