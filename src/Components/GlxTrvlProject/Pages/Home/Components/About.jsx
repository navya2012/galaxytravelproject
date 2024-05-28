import React from 'react'

const About = ({heading, paragraph, image}) => {
    // console.log(heading,paragraph)
    return (
        <>
            <section className="container my-5 px-5" id="about">
                <h1 className="text-center display-4 fw-lighter pb-4">{heading}</h1>
                <div className="d-lg-flex gap-5  justify-content-center align-items-start text-center text-md-start">
                    <img src={image} alt="" className="img-fluid w-50 pb-5" />
                    <div>
                        <h2>About Our Website</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum soluta culpa aut dolor odio ad cumque
                            delectus amet deserunt iure assumenda laboriosam fuga et eveniet sit vitae, distinctio quidem! Quidem
                            dignissimos sit vel aliquam dolorem cupiditate magni sunt aut et incidunt. Quas unde natus magni expedita,
                            molestias labore asperiores!</p>
                        <p>{paragraph}</p>
                        <button className="btn btn-outline-danger">Know More..</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About