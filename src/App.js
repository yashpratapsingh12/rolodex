import { useState ,useEffect } from 'react';
import SearchBox from './search-box/search-box.component';
import CardList from './components/card-list/card-list.components';


import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';


const App =()=>{

  const[SearchField,setsearchfield] = useState('');
  const[monsters,setmonsters]=useState([]);
  const[filterarray,setfilterarray]=useState(monsters);




   console.log("render")

   useEffect(()=>{

    console.log("fetch is fired")

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response ) => response.json())
     .then((users) => setmonsters(users));

   },[]);

   useEffect(()=>{


   const newfilterarray= monsters.filter((monster)=>{
               
    return monster.name.toLowerCase().includes(SearchField)

  });
  setfilterarray(newfilterarray);


   },[monsters,SearchField])


 


  const onsearchChange=(event)=>{

        const searchfieldstring= event.target.value.toLowerCase();
    
        setsearchfield(searchfieldstring);

   }

 


 

return (
       
    <div className="App">
    <h1 className='app-title'>Monsters book </h1>

 
 <SearchBox 
     className="monster-search-box"

     onchangehandle={onsearchChange}

     placeholder= "search-monsters"

/>


 <CardList monsters={filterarray}/>
</div>
)


}


// class App extends Component{
//   constructor(){
//     super();

//     this.state = { 
//       monsters:[],


//       stringpart :''



    
      
//     }
//   }

//   componentDidMount(){
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response )=>response.json())
   
//    .then((users)=>this.setState(()=>{
//     return {monsters:users}
//    },
//    ()=>{
//     console.log(this.state)
//    }
   
   
//    ))
// }




//   searchbyit= (event)=>{

//     const stringpart= event.target.value.toLowerCase();

      


//       this.setState(()=>{
//         return{stringpart
//         }
//       })



//   }



//   render(){



//     const filterarray= this.state.monsters.filter((monsters)=>{
               
//       return monsters.name.toLowerCase().includes(this.state.stringpart)

//     })
//   return(
  
//     <div className="App">
//         <h1 className='app-title'>Monsters rolodex </h1>

     
//      <SearchBox 
//                  className="monster-search-box"

//                  onchangehandle={this.searchbyit}

//                 placeholder= "search-monsters"

                
                
              
//      />


      
//       {/* <input className='searchbox' type='search' placeholder='search monsters'  onChange={this.searchbyit} /> */}
     
     
     
     
// {/*      
//      {filterarray.map((filterarray)=>{
//       return <div key= {filterarray.id}>   <h1>{filterarray.name}</h1>
      
//       </div>
//      })} */}



//      <CardList monsters={filterarray}/>







//     </div>
    


//     )
//   }
// }

 

export default App;
