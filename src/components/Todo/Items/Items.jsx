import Item from "../Item/Item"

export default function Items ({setToDo,toDo}){

    
    
    function deleteToDo(id){
        setToDo(prev => prev.filter((value) => value.id !== id))
    }
    
    

    return (
        <ul className="items-list">
            {toDo.map((value, i) => (
            <li key={i} className="items-list-item">
                <Item item={value} del={deleteToDo} />
            </li>
        ))}
    </ul>
  );

}