import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
    const [data,setData] = useState([])

    const {id}= useParams();

    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    },[id])

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 order bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of City Climate</h3>
        <div className='mb-2'>
          <strong>Id: {data.id}</strong>
        </div>
        <div className='mb-2'>
          <strong>City: {data.city}</strong>
        </div>
        <div className='mb-2'>
          <strong>Temperature: {data.temperature}</strong>
        </div>
        <div className='mb-2'>
          <strong>Humidity: {data.humidity}</strong>
        </div>
        <div className='mb-2'>
          <strong>Description: {data.short}</strong>
        </div>
        <Link to="/" className='btn btn-danger ms-3'>Cancel</Link>
      </div>
    </div>
  )
}

export default Read
