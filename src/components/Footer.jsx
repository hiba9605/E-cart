import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-10 w-full bg-violet-600 '>
      <div className='flex p-8 justify-between'>

        <div style={{width:'400px'}} >
        <h1 className='text-2xl font-bold text-white' ><i className='fa-solid fa-truck-fast me-1'></i>Daily Cart</h1>
        <p className='text-white'>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p className='text-white'>Code licensed Luminar, docs CC BY 3.0.</p>
          <p className='text-white'>Currently v5.3.2.</p>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold text-white'>Links</h1>
          <Link className='text-white' to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
          <Link className='text-white' to={'/home'} style={{textDecoration:'none'}}>Home Page</Link>
          <Link className='text-white' to={'/home'} style={{textDecoration:'none'}}>Watch History Page</Link>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold text-white'>Guides</h1>
          <a className='text-white' style={{textDecoration:'none'}} href="https://react.dev" target='_blank'>React</a>
          <a className='text-white' style={{textDecoration:'none'}} href="https://react.dev" target='_blank'>React Router</a>
          <a className='text-white' style={{textDecoration:'none'}} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
    
        </div>

        <div>
          <h1 className='text-2xl font-bold text-white'>Contact Us</h1>
          <div>
          <input placeholder='Enter your E-mail Here' type="text" className='form-control rounded-md me-2 p-1' />
          <button className='btn btn-info'><i className='fa-solid fa-arrow-right text-white'></i></button>
          </div>
          <div className='mt-2 flex justify-between'>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="https://www.instagram.com/?hl=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="https://in.linkedin.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="https://github.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
          </div>
        </div>



      </div>

           <p className='text-center mt-5 text-white'>Copyright &copy; June 2024 Batch, E Cart. Built with React Redux</p>
      

    </div>
  )
}

export default Footer