import {useState,useEffect} from 'react';

 export default function useLocalStorage(user){
 	const[userdata,setUser]=useState([]);
  //console.log(user);
  useEffect(() => {
    const json = JSON.stringify(user);
    localStorage.setItem("users", json);
  }, [user]);

  useEffect(() => {
  const json = localStorage.getItem("users");
  const users = JSON.parse(json);
  if (users) {
    setUser(users);
    
  }

}, []);
  //console.log(userdata)
  return[userdata,setUser];

 }