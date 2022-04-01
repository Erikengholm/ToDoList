import { useRef } from "react";
import "./AddToDoItem.css"

//Komponenten tar en callback function som heter add som skickas tillbaka til förädern
const AddToDoItem = ({add}) =>{

    const todovalue = useRef();

    return (<div className="todoHeaderStyle">
            <input type="text" ref={todovalue}/>
            <button onClick={() => add(todovalue.current.value)}>Lägg til item</button>
    </div>)

}

export default AddToDoItem