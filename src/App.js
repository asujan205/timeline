
import React,{useState,useEffect, createElement} from 'react';
import TimelineItem from './timelineitem.js';
import Select from 'react-select';
import {groupedOptions} from'./docs/data';
import useLocalStorage from './Hooks/useLocalStorage.js';
import './TimelineInputButtonCss/InputCss.css'
function App() {  
  const[user,setData]=useState([]);

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
   
    e.target.Name.value = "";
    e.target.svgUrl.value="";
    e.target.color.value="";
    e.target.date.value='';
  };
   const[timelinedata,setTimelinedata]=useLocalStorage(user);
  useEffect(()=>{  
  setTimelinedata(user);
  },[user])
 
   //console.log(timelinedata)



const ShowTimeline=()=>{
  
  const inerPart=document.getElementById('timeline').innerHTML;
   const orderHtml = '<html><head><title></title></head><body>' + inerPart + '</body></html>'
 console.log(orderHtml); 

 
}
  return (

    <div>
      <div className="forminput">
    <form onSubmit={saveuser}>
      
        <lable>Name:</lable>
<input type="text" name="Name" className='inputFeild'/><br/>
<lable>SVG:</lable>
<input type='text' name='svgUrl' className='textArea'/><br/>
<lable>backgroundColor:</lable>
<Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={groupedOptions}
        
      /><br/>
      <label>Date</label>
      <input type="date" name="date"  className='DatePicker'/><br/>
<input type="submit" onClick={ShowTimeline}  className='sumbit-btn'/> 
    
    </form>
    </div>
 
    <div className="main-timeline"  id="timeline"  >
 
            {timelinedata.map((data) => (
              <>
                <TimelineItem data={data}  />
               
                </>
            ))}
        </div>
      
    </div>

  );
  

 
}

export default App;
