

import './search-box.style.css';



const SearchBox =(props)=>{

  
    return (

      <input className={`search-box ${props.className}`}

      type="search"
       
       placeholder={props.placeholder}
       onChange={props.onchangehandle} />


    )

  }



export default SearchBox;
