import config from "../interface/config";


const BASE_URL = config.urlApi;


export const fetchSinToken = async <T> (
  endPoint: string, 
  data: string | object,
  method: "GET" | "POST" | "PUT" | "DELETE"

):Promise <T>  => {

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

export const fetchConToken = async <T> (
  endPoint: string,
  data: string | object,
  method: "GET" | "POST" | "PUT" | "DELETE"
  ): Promise<T> => {
    
      const token = localStorage.getItem('token') || ''
      const url = `${BASE_URL}/${endPoint}`;
   
       if (method === "GET") {
       const resp = await fetch(url , {
         headers : {
           "Content-type": "application/json",
           'x-token' : token
          },
          
       });
       return await resp.json();
     } else {
       const resp = await fetch(url, {
         headers: {
           "Content-type": "application/json",
           'x-token' : token
         },
         method,
         body: JSON.stringify(data),
       });
       return await resp.json();
     }
   }
   
