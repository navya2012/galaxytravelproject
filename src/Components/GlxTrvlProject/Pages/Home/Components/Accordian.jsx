import React, { useState } from 'react'
import '../../CSSModules/HomeStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Accordian = () => {
    const data = [
        {
            question: "Question 1?",
            answers: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id facilis ab possimus iste alias, necessitatibus explicabo sunt, iure laborum est sed impedit saepe minus pariatur? Mollitia, recusandae. Nesciunt, odit!!"
        },
        {
            question: "Question 2?",
            answers: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id facilis ab possimus iste alias, necessitatibus explicabo sunt, iure laborum est sed impedit saepe minus pariatur? Mollitia, recusandae. Nesciunt, odit!"
        },
        {
            question: "Question 3?",
            answers: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id facilis ab possimus iste alias, necessitatibus explicabo sunt, iure laborum est sed impedit saepe minus pariatur? Mollitia, recusandae. Nesciunt, odit!"
        },
        {
            question: "Question 4?",
            answers: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id facilis ab possimus iste alias, necessitatibus explicabo sunt, iure laborum est sed impedit saepe minus pariatur? Mollitia, recusandae. Nesciunt, odit!"
        },
        {
            question: "Question 5?",
            answers: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id facilis ab possimus iste alias, necessitatibus explicabo sunt, iure laborum est sed impedit saepe minus pariatur? Mollitia, recusandae. Nesciunt, odit!"
        },
        {
            question: "Question 6?",
            answers: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id facilis ab possimus iste alias, necessitatibus explicabo sunt, iure laborum est sed impedit saepe minus pariatur? Mollitia, recusandae. Nesciunt, odit!"
        },
    ]
    
    const [selected,setSelected] = useState(null)

    const handleSelected = (i) =>{
        console.log(i)
        if(selected=== i){
            setSelected(null)
        }else{
            setSelected(i)
        }
           
    }
    return (
        <>
            <section className='container' >
                <h1 className="text-center display-4 fw-lighter py-5">FAQs</h1>
                <div className='faq p-5' >
                    <div className='item '>
                        {
                            data.map((item, i) => {
                                return (
                                    <>
                                        <div className='wrapper' key={i} >
                                            <div className='question'  onClick={()=> {handleSelected(i)}}  >
                                                <h3>{item.question}</h3>
                                                {/* <img src={require("../../../../../Assets/GlxTrvl/up-arrow.png")} alt="No Icon" /> */}
                                                <FontAwesomeIcon icon={faAngleUp} style={{fontSize:'40px'}} className={selected === i ? 'reverse' : ''} />
                                            </div>

                                            <div className=''>
                                               {
                                                selected === i && <p>{item.answers}</p>
                                               }
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Accordian