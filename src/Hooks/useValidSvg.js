import {useState,useEffect} from 'react';
 export default function useCheckValidSvg(valid,detect,svgUrl)
 {
 	const[svg,setSvg]=useState(null);
 	 useEffect(() => {
      if(valid===true){
        fetch(svgUrl)
            .then(res => res.text())
            .then(setSvg)
      }
      
          
       
              if(detect===true && valid===false){
              setSvg(svgUrl);
                }
              if(detect===false && valid===false){
              alert("valid bro valid"); 
               }
            
       
           
    }, [svgUrl,valid,detect]);
 	 return[svg,setSvg];
 }