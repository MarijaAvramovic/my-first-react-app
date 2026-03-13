import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marija from './Greeting.jsx'
import { FavoriteFood, FavoriteDrink, Bio, Avatar, TodoList, MyList, MarijaStraja} from './FavoriteFood.jsx'
import TodoListAgain from './ToDo.jsx'
import { AppHere } from './Button.jsx'
import Avatar2 from './Avatar.jsx'
 import Gallery from './Galery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Gallery />
    <Avatar2 />
    <AppHere />
    <Marija />
   <MarijaStraja />
    <FavoriteFood />
    <Bio />
    <Avatar />
    <TodoList />
    <MyList />
    <TodoListAgain />
  </StrictMode>,
)
