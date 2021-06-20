import {useState,useEffect} from 'react';


export default function useSvgCodeCheck(value){
 const[detect,setDetect]=useState();
  const svgRegex=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/;
 useEffect(()=>{
  if(!svgRegex.test(value))
 {
 	setDetect(false);
 }
 else
 	{
 		setDetect(true);
 	}
 },[value])
 return[detect,setDetect];
}