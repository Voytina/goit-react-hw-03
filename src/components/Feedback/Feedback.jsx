export default function Feedback ({interest,total,item:{bad,good,neutral}}){


    return (
        <div>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>Total : {total}</p>
            <p>Positive : {interest} %</p>
        </div>
    )

}