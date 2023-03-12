import React from 'react'

function Home() {

    const handleClick=()=>{
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{height:"40rem"}}>
      <h1 className='text-center text-success m-5'>Welcome!!</h1>
      
      <button className='btn btn-warning' onClick={handleClick}>Logout </button>
    </div>
  )
}

export default Home
