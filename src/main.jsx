import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marija from './Greeting.jsx'
import { FavoriteFood, FavoriteDrink} from './FavoriteFood.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Marija />
    <FavoriteDrink />
    <FavoriteFood />
  </StrictMode>,
 
)
