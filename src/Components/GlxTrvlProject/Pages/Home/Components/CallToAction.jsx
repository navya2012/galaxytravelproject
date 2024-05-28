import React, { useState } from 'react'
import "../../CSSModules/HomeStyles.css"
import Model from './Model'

const CallToAction = () => {
    const [model, setModel] = useState(false)

    const handleModel = ()=>{
        setModel(!model)
    }
  return (
    <>
            <section className="call-to-action px-3 text-center">
                <h1>Hurry up Book your Tickets !</h1>
                <button className='btn' onClick={handleModel}>Know More...</button>
            </section>
            {
                model && <Model handleModel={handleModel}/>
            }
    </>
  )
}

export default CallToAction