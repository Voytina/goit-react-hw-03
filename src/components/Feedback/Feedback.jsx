export default function Deedback ({interest,item:{good,bad,neutral}}){

    console.log(interest);
    

    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad { bad}</p>
            <p>{interest} %</p>
        </div>
    )

}