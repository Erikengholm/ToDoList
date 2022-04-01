import './DoneList.css'


const DoneList = ({items}) =>{

    const list = items.map(DoneItem =>{

        return (<li key={DoneItem}>{DoneItem}</li>)

    });

    return (<div className="todoDivStyle">
        <ul>
            {list}
        </ul>
    </div>)
};

export default DoneList