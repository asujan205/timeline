import React,{useState} from 'react';



const  CheckSvgCodeValid=(valid)=>{
  
   const[detect,setDetect]=useState(false);
    
    const svgRegex=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/;
      ;
         
    const detectSvg=(valid)=>{
      if(!svgRegex.test(valid)){
     setDetect(false);
      }
      else{
        setDetect(true);
      }

    }
 return detect;
 
}
export default CheckSvgCodeValid;