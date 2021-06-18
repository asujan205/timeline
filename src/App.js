
import React,{useState,useEffect, createElement} from 'react';
import TimelineItem from './timelineitem.js';
import Select from 'react-select';
import {groupedOptions} from'./docs/data';



function App() {  
  const[user,setData]=useState([]);
  const[valid,setValid]=useState(false);
   
    const urlRegex=/https?:\/\/.*\.(?:svg)/;
  const saveuser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: e.target.Name.value,
      svgUrl:e.target.svgUrl.value,
      bgColor:e.target.color.value,
      dateTime:e.target.date.value,
    };
    setData([...user, newUser]);
     checkValid(e.target.svgUrl.value);
    e.target.Name.value = "";
    e.target.svgUrl.value="";
    e.target.color.value="";
    e.target.date.value='';
  };
 const checkValid = (value) => {
     if (!urlRegex.test(value)) {
      setValid(false);
    } 
    else {
      setValid(true);
    }
      }

  useEffect(() => {
    const json = JSON.stringify(user);
    localStorage.setItem("users", json);
  }, [user]);

  useEffect(() => {
  const json = localStorage.getItem("users");
  const users = JSON.parse(json);
  if (users) {
    setData(users);
  }
}, []);

const a=()=>{
  
  const inerPart=document.getElementById('timeline').innerHTML;
   const orderHtml = '<html><head><title></title></head><body>' + inerPart + '</body></html>'
  console.log(orderHtml); 

 
}
  return (

    <div>
      <div className="forminput">
    <form onSubmit={saveuser}>
      
        <lable>Name:</lable>
<input type="text" name="Name"/><br/>
<lable>SVG:</lable>
<input type='text' name='svgUrl' /><br/>
<lable>backgroundColor:</lable>
<Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={groupedOptions}
        
      /><br/>
      <label>Date</label>
      <input type="date" name="date" /><br/>
<input type="submit" onClick={a} /> 
    
    </form>
    </div>
 
    <div className="main-timeline"  id="timeline"  >
 
            {user.map((data) => (
                <TimelineItem data={data} valid={valid} />
            ))}
        </div>
      
    </div>

  );
  

 
}

export default App;
