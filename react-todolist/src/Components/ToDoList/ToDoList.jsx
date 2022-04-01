import './ToDoList.css'


const ToDoList = ({items,move}) =>{

    const list = items.map(todoItem =>{

        return (<li>{todoItem} <button onClick={() => move(todoItem)}>klart</button></li>)

    });

    return (<div className="todoDivStyle">
        <ul>
            {list}
        </ul>
    </div>)
};

export default ToDoList