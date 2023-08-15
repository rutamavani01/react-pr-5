import './style.css';
import { useState } from 'react';
const Form = () => {

    const[input,setInput] = useState({
        email : '',
        password : ''
    })
    const[formerror,setFormError] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,[e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const err = {};
        if(!input.email){
            err.email = "Name is required!";
        }
        if(!input.password){
            err.password = "Password is required!";
        }
        setFormError(err);
    }

    return ( 
            <section className="form body-color">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                          <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label"></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Email address" aria-describedby="emailHelp"  name="email" onChange={{handleChange}} />
                                    <span style={{color : 'red'}}>{formerror.email}</span>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"></label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"  placeholder='password' name="password" onChange={{handleChange}}/>
                                    <span style={{color : 'red'}}>{formerror.password}</span>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary"  onClick={ () => handleSubmit() } >Submit</button>
                        </form>
                        </div>
                        {/* <div className="col-6 p-4">
                            <h4 className='text-white pb-3'>Enter your feedback</h4>
                            <textarea placeholder='Enter your feedback'></textarea>
                        </div> */}
                    </div>
                </div>
            </section>
    )
}
export default Form;