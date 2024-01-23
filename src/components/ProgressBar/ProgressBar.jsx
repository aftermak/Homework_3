import React from 'react'

export default function ProgressBar({progress}) {
    const progressValue = () => progress.filter((item) => item.completed).length

  return (
    <div>
        <label htmlFor="progress">Your Progress</label>
        <progress id='progress' max={progress.length} value={progressValue()}></progress>
        <label>{progressValue()} of {progress.length} completed</label>
    </div>
    
  )
}
