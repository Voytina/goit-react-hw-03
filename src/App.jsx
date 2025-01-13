import { useEffect, useState } from 'react';
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';



export default  function App (){
  const [reviews,setReviews] = useState(()=>{
    const data = JSON.parse(localStorage.getItem('key'));    
    return data || {good:0, neutral:0, bad:0}

  })

  useEffect(()=>{
    localStorage.setItem('key',JSON.stringify(reviews))
  },[reviews])

  const updateFeedback = feedbackType => {
    setReviews((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  }

  const totalFeedback = Object.values(reviews).reduce((acc,value) => acc+=value,0);

  const percentagePositiveReviews = Math.round((reviews.good  / totalFeedback) * 100);

  const resetFeedBack  = () =>{
    setReviews({good: 0,
      neutral: 0,
      bad: 0})
  }
  

  return (
    <div>
      <Description/>
      <Options item={reviews} update={updateFeedback} totalFeedback={totalFeedback} reset={resetFeedBack}/>
      {
        totalFeedback > 0 ? <Feedback item={reviews} total={totalFeedback} interest={percentagePositiveReviews} /> :  <Notification/>
      }
    </div>)

}