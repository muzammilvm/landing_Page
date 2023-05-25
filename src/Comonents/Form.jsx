import React from 'react'
import './Form.css'
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator'
import { useNavigate } from 'react-router-dom';

function Form(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [number, setNumber] = useState('')
    const [error, seterror] = useState('')
    const [nerror, setnerror] = useState('')
    const [numerror, setnumerror] = useState('')
    const [comerror, setcomerror] = useState('')

    const navigate = useNavigate()

    function emailvalid() {

        if (validator.isEmail(email)) {
            seterror('')
        } else {
            seterror('Please Enter Valid Email')
        }

    }

    function namevalid(e) {
        setName(e)

        if (validator.isEmpty(name)) {
            setnerror('this field is required')
        } else {
            setnerror('')
        }

    }

    function numbervalid(e) {
        setNumber(e)

        if (validator.isNumeric(number)) {
            setnumerror('')
        } else {
            setnumerror('Please Enter Number')
        }

    }

    function validate() {

    }

    console.log(name, email, number, company);
    const handlesubmit = async (e) => {
        e.preventDefault()
        if (name == '' || email == '' || company == '' || number == '') {
            alert("please fill all field")

        } else {
            if(validator.isEmail(email) ){
                if(validator.isNumeric(number)){
                    let body = {
                        name,
                        email,
                        company_name: company,
                        phone_number: number,
                        lead_types_id: "sandbox"
                    }
                    try {
                        const data = await axios.post("https://dashboard.omnisellcrm.com/api/store", body)
                        let datas = {
                            name: name,
                            email: email,
                            company: company,
                            number: number
                        };
                        props.onSubmit(datas)
                        console.log(data.config.data);
        
                        navigate('home')
                    } catch (error) {
                        console.log(error);
                    }
                }else{
                    alert('please Enter valid Numbers')
                }
            }else{
                alert('please Enter valid Email')
            }
            

        }

    }
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-4 "></div>
                    <div className="col-md-4 ">
                        <div className="form">
                            <h1 className='mt-5'>Form</h1>
                            <form className='form'>
                                <input onKeyUp={(e) => { namevalid(e.target.value) }}
                                    placeholder='Name' type="text" className='form-control mt-5' />
                                {
                                    !name && <p className='valid'>This field is required</p>
                                }

                                <input onChange={(e) => { setEmail(e.target.value) }} onKeyUp={emailvalid}
                                    placeholder='Email' type="text" className='form-control' />
                                {
                                    error && <p className='valid'>{error}</p>
                                }{
                                    !email && !error && <p className='valid'>This field is required</p>
                                }

                                <input onChange={(e) => { setCompany(e.target.value) }}
                                    placeholder='Company Name' type="text" className='form-control' />
                                {
                                    !company && <p className='valid'>This field is required</p>
                                }

                                <input onKeyUp={(e) => { numbervalid(e.target.value) }}
                                    placeholder='Phone Number' type="text" className='form-control' />
                                {
                                    numerror && <p className='valid'>{numerror}</p>
                                }
                                {
                                    !number && !numerror && <p className='valid'>This field is required</p>
                                }

                                <button className='btn btn-primary' onClick={(e) => handlesubmit(e)}>Submit</button>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 "></div>
                </div>
            </div>
        </div>
    )
}

export default Form
