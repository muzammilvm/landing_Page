import React, { useEffect, useState } from 'react'
import './Home.css'

function Home(props) {
    const [data, setdata] = useState({})
    useEffect(() => {
        // setdata(props.details)
        // console.log(data);
        console.log(props.details);
    }, [])

    return (
        <div>
            <div className="row ro">
                <div className="col-md-4"></div>
                <div className="main col-md-4">
                    <div className="form border border-primary">

                    <h3 className='content'>Name : {props.details.name}</h3>
                    <h3 className='content'>Email : {props.details.email}</h3>
                    <h3 className='content'>Company : {props.details.company}</h3>
                    <h3 className='content'>Number : {props.details.number}</h3>

                    </div>
                </div>
                <div className="col-md-4"></div>

            </div>
        </div>
    )
}

export default Home
