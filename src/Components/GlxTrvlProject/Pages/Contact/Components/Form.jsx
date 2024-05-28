import React from 'react'

const Form = () => {
    return (
        <>
            <section className="container my-5 w-75" id="contact">
                <h1 className="text-center display-2">Contact</h1>

                <form>
                    <div className="mb-4">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control bg-dark text-white  border-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4    ">
                        <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control bg-dark text-white" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-outline-light text-white btn-lg">Submit</button>
                </form>

            </section>
        </>
    )
}

export default Form