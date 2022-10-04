import { createBrowserRouter } from "react-router-dom";
import Counties from "../Countries/Counties";
import Country from "../Country/Country";

export let router = createBrowserRouter([
  {path: '/',
   loader: async () => {
    return fetch('https://restcountries.com/v3.1/all')
   }, 
  element: <Counties></Counties>},
  {
    path: '/country/:name',
     loader: async ({params}) => {
       return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
     },
    element:<Country></Country>
  }
])