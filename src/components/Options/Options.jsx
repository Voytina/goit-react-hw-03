import css from './Options.module.css'


export default  function Options ({reset,update,total,item:{good,bad,neutral}}){

   
    
    


    
    

    return (
        <div className={css.container}>
            <button className={css.btn} onClick={()=>{update('good')}}> Good</button>
            <button className={css.btn} onClick={()=>{update('neutral')}}> Neutral</button>
            <button className={css.btn} onClick={()=>{update('bad')}}>Bad</button>

            {
                total > 0 && <button className={css.btn} onClick={()=>{reset()}}> Reset</button> 
            }


        </div>
    )

}