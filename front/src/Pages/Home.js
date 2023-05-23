import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200" style={{backgroundImage: "url(https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=360)"}}>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-neutral-focus">Productivity Plus</h1>
      <p className="text-2xl py-6 font-bold text-neutral-focus">Maximize Efficiency with the #1 to-do Checklist</p>
      <Link smooth to="/LogIn"><button className="btn font-bold btn-neutral-focus text-secondary-content">Get Started</button></Link>
    </div>
  </div>
</div>
  )
}

export default Home