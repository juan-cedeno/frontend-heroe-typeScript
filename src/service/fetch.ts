import config from "../interface/config";
import { User } from "../interface/User";

const BASE_URL = config.urlApi;
const token = localStorage.getItem('token') || ''

export const fetchSinToken = async (
  endPoint: string,
  data: string | object,
  method: "GET" | "POST" | "PUT" | "DELETE"

): Promise<User> => {

  const url = `${BASE_URL}/${endPoint}`;

  if (method === "GET") {
    const resp = await fetch(url);
    return await resp.json();

  } else {
     const resp = await fetch(url, {
      headers : {
          'Content-type': 'application/json'
      },    
      method,
      body: JSON.stringify(data),
    });
    return await resp.json();
  }
}

export const fetchConToken = async (
     endPoint: string,
     data: string | object,
     method: "GET" | "POST" | "PUT" | "DELETE"
   ): Promise<User> => {
   
     const url = `${BASE_URL}/${endPoint}`;
   
     if (method === "GET") {
       const resp = await fetch(url , {
            headers : {
           'x-token' : token!
          }
       });
       return await resp.json();
     } else {
       const resp = await fetch(url, {
         headers: {
           "Content-type": "application/json",
           'x-token' : token!
         },
         method,
         body: JSON.stringify(data),
       });
       return await resp.json();
     }
   }
   
