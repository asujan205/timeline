import {useState,useEffect} from 'react';


export default function useCheckSvgIsValid(value){
 const[valid,setValid]=useState();
 const urlRegex=/https?:\/\/.*\.(?:svg)/;

 useEffect(()=>{
  if(!urlRegex.test(value))
 {
 	setValid(false);
 }
 else
 	{
 		setValid(true);
 	}
 },[value])
 return[valid,setValid]
}