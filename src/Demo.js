import axios from 'axios';
import { useEffect, useState } from 'react';
function Demo() {
const [data, setData] = useState("");
const [searchQuery, setSearchQuery] = useState("");
const [filteredData, setFilteredData] = useState([]);
 const [asce, setAsce] = useState("");
const [dsce, setDsce] = useState("");
const [increment, setIncrement] = useState("");
const [decrement,setDecrement] = useState("");
const [status, setStatus]=useState("true");

useEffect(()=>{
    api()
    },[])


    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    
        const filteredArray = data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredArray);
      };
    
    const api = async()=>{
    const result = await axios ("https://coralmango.com/api/react-test")
    console.log(result.data);
    if (result) {
      setData(result.data)
      setFilteredData(result.data)
    }
    }
    //name 
const accending = () =>{
    const sort = data.sort((a,b)=>{
     return a.name.localeCompare(b.name);
    })
    setAsce({asce:sort})
   }
   
   const decending = () => {
    const sort = data.sort((a,b)=>{
     return b.name.localeCompare(a.name);
    })
    setDsce({dsce:sort})
   }
   
   
   //age
   const increase = () =>{
     const sort = data.sort((a,b)=>{
      return a.age - (b.age);
     })
     setIncrement({increment:sort})
    }
    
    const decrease = () => {
     const sort = data.sort((a,b)=>{
      return b.age - (a.age);
     })
     setDecrement({decrement:sort})
    }
   

   return (
        <div className="App">

<input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e)=>handleInputChange(e)}/>
    {status ?
      <div>      
      <table >
            <thead>
    <tr>
      <th>name</th>
      <th>age</th>
      <th>occuption</th>
    </tr>
    </thead>
    </table>     
  
         
      {filteredData.map(item => (
        <table >
            <tbody>
        <tr>
            <div>
       <td> <div key={item.id}>{item.name}</div></td>
       <td><div key={item.id}>{item.age}</div></td>
       <td><div key={item.id}>{item.occupation}</div></td>
        </div>
       </tr> 
       </tbody>
       </table>
      ))
      } 
      </div>
      : 
      <div>
      {filteredData.map(item => (
        <div >
       <div>
       <p> <div key={item.id}>{item.name}</div></p>
       <p><div key={item.id}>{item.age}</div></p>
       <p><div key={item.id}>{item.occupation}</div></p>
        </div>
       </div>
      ))
      } 
      </div>
      }

     
     <div>
      <p>sort by name:</p>  
        <input type="radio" value="A to Z" name="name" onChange={()=>accending()} /> A to Z <br />
        <input type="radio" value="Z to A" name="name" onChange={()=>decending()} /> Z to A
        </div>
        
        <div>
        <p>sort by age:</p>
        <input type="radio" value="low to high " name="age" onChange={()=>increase()} /> low to high <br />
        <input type="radio" value="high to low" name="age" onChange={()=>decrease()} /> high to low
        </div>
        
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    
    </div>
)}

export default Demo