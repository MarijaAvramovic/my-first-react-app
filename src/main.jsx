import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marija from './Greeting.jsx'
import { FavoriteFood, FavoriteDrink, Bio, Avatar, TodoList, MyList, MarijaStraja} from './FavoriteFood.jsx'
import TodoListAgain from './ToDo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
