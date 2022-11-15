import React from 'react'

export default function Home() {
  return (
    <div style = {{backgroundColor:'#87CEEB'}}>        
        <img className="stretch" src={require('./logo.jpeg')}        
        height="300"/>
        <h1 class="container">
            Want to read books for free?
        </h1>
        <h2 class="container">
            You are at the right place.
        </h2>
    </div>
  )
}
