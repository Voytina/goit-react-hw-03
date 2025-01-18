import { useEffect, useState } from "react"
import Items from "./Items/Items"

export default function Todo (){


    const arrayTodoes = [

        {id: crypto.randomUUID(),value :'справа номер 1 '},
        {id: crypto.randomUUID(),value:'справа номер 2 '},
        {id: crypto.randomUUID(),value:'справа номер 3 '},

    ]


    const [toDo,setToDo] = useState(()=>{
        const data = localStorage.getItem('toDo');
        const dataParse = JSON.parse(data);
        
        return dataParse
    });

    const [addToDo,setAddToDo] = useState('');


    useEffect(()=>{
        localStorage.setItem('toDo',JSON.stringify(toDo))
    },[toDo])



    function inputChange (e){
        setAddToDo(e.target.value);
    }


    
    function addToDoItem (){
        const obj = {
            id: crypto.randomUUID(),value:addToDo,
        };

        setToDo(prev => [...prev,obj])
    }
  
    


    return (
    <div className="todo-container">
        <div className="todo-header">
            <input type="value" placeholder="Додати нову справу..." onChange={inputChange} />
            <button className="todo-button" onClick={addToDoItem}>Зберегти</button>
        </div>
        <div className="todo-list">
            <Items  setToDo={setToDo} toDo={toDo} />
        </div>
    </div>
    )


}