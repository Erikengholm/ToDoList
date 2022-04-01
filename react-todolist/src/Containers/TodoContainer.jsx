import { useState } from "react";

import AddToDoItem from "../Components/AddToDoItem/AddToDoItem";

import ToDoList from "../Components/ToDoList/ToDoList";
import DoneList from "../Components/DoneList/DoneList";


const ToDoContainer = () =>{

    const[todoItems,SetTodoItems] = useState([]);

    const[doneItems,SetDoneItems] = useState([]);


    //Dessa två metoder kommer att uppdatera state dvs komponenter
    //p kommer renderas om
    const additem = (item) =>{

        //Lägger till ett nytt todoitem denna metod anropas från addtodoitem
        SetTodoItems([...todoItems,item])

    };

    const moveitem = (item) =>{

        let filteredArray = todoItems.filter(todoItem =>{
            return(todoItem !== item);
        })

        //Ta bort item från todoitem
        SetTodoItems(filteredArray)

        //Flytta item till done items
        SetDoneItems([...doneItems,item]);

    };

    return (<>
        <AddToDoItem add={additem}/>

        <ToDoList items={todoItems} move={moveitem} />
        <DoneList items={doneItems} />
    </>)

};

export default ToDoContainer