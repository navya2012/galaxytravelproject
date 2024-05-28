import React from 'react'
import SingleCard from './SingleCard'

const Card = () => {
    const data=[
        {
            id:1,
            heading:"Basic",
            line1:'5 Lakhs',
            line2:'No Unlimited Access!!',
            line3:'No Food'
        },
        {
            id:2,
            heading:"Medium",
            line1:'15 Lakhs',
            line2:'No Unlimited Access!!',
            line3:'little Food'
        },
        {
            id:3,
            heading:"Advanced",
            line1:'20 Lakhs',
            line2:' Unlimited Access!!',
            line3:'No Food'
        },
        {
            id:4,
            heading:"More Advanced",
            line1:'25 Lakhs',
            line2:' Unlimited Access!!',
            line3:' Food'
        }
    ]
    return (
        <>
            <section className='px-5'>
                <h1 className="text-center display-4 fw-lighter py-5">Pricing</h1>
                <div className="cards ">
                   {
                    data.map((item) => {
                        return (
                            <>
                                <SingleCard heading={item.heading} line1={item.line1} line2={item.line2} line3={item.line3}/>
                            </>
                        )
                    })
                   }
                </div>

            </section>
        </>
    )
}

export default Card