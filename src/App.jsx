import { useEffect, useId, useState } from 'react';
import './App.css'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback'

import Notification from './components/Notification/Notification'
import Todo from './components/Todo/Todo';





export default  function App (){


  const [responce,setResponce] = useState(()=>{


    const data = JSON.parse(localStorage.getItem('key'));

    return data

  });

  useEffect(()=>{

    localStorage.setItem('key',JSON.stringify(responce))


  },[responce])


  const updateFeedback = feedbackType => {
    setResponce((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }))
  }


  const totalResponce = Object.values(responce).reduce((total,value) => { return total+=value},0);


  function resetResponce () {

    setResponce({
      good: 0,
    neutral: 0,
    bad: 0
    })
  }

  const interest = Math.round((responce.good / totalResponce) * 100);







  return (
    <div>
      <Description/>
      <Options update={updateFeedback} item={responce} total={totalResponce} reset={resetResponce}/>

      {
        totalResponce > 0 ?  <Feedback item ={responce} interest={interest}/> : <Notification/>
      }


      <Todo/>

    </div>
  )

}