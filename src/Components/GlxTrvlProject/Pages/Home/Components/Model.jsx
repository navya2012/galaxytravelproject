import React from 'react'
import '../../CSSModules/HomeStyles.css'
import { FaTimes } from 'react-icons/fa'


const Model = ({handleModel}) => {
  return (
    <>
        <div className='overlay'>
            <div className="model">
                <div className="cross">
                    <FaTimes onClick={handleModel} style={{color:'white'}} size={25}/>
                </div>
               <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quam?</h1>
            </div>
        </div>
    </>
  )
}

export default Model