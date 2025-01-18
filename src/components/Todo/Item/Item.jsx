export default function Item ({del,item:{value,id}}){

    

    return(
    <div className="item-container">
        <p className="item-text">{value}</p>
        <button className="item-delete-button" onClick={()=>{del(id)}}>Видалити</button>
    </div>
    )

}