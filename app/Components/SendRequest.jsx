
'use client'
import React from 'react'
import axios from 'axios'; 

export default function SendRequest() {

// Add in the send text function here
const sendRequest = async () => {

    console.log('this is the upload Text function'); 
console.log('Upload Text Button Just clicked'); 


try{

  console.log('this is the try block')
  const expressServerUrl = 'http://172.17.0.2:3000'; // Replace <container_ip> with the actual IP address

  // Make a GET request using Axios
  axios.get(`${expressServerUrl}/`)
    .then((response) => {
      console.log(response.data); // Log the response data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });


}
catch(error){

    console.error('this did not work out', error); 

}

}


  return (
    
    <div onClick={sendRequest} >
    SendRequest
    
    
    </div>
  );
  
}
