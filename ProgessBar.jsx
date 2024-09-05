import React, { useEffect, useState } from 'react'

const ProgessBar = () => {

    const clickHandler =()=>{
        setRunning(!running);
        if(progress == "100"){
            setProgress(0);
        }
    }
    const [progress, setProgress] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval;

      if(progress<100 && running){
        interval = setInterval(() => {
            setProgress((prevProgress) => Math.min(prevProgress + 1, 100)); // Ensures progress does not exceed 100
        }, 40);
    
      }
      
      return ()=>clearInterval(interval)
      
    }, [progress,running])
    
  return (
    <>
    <main >
          <div className='loadingBar' style={{ width: `${progress}%` , backgroundColor:'#00c251', height:'100%'}}  >
          
        </div> 
        <span className='title'>
          {progress}%
        </span>     
    </main>
   <div className='btn'> <button onClick={clickHandler}>{progress=="100"? "Clear Progress":running ? 'Pause Progress' : 'Start Progress'}</button></div>
    </>
  )
}

export default ProgessBar