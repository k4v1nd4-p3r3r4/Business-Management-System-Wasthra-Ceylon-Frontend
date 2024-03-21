import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const View =()=>{

    const {id}=useParams();

    const[transaction,setTransaction]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchTransaction();
    },[id]);

    const fetchTransaction=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/transactions/"+id);
            console.log(result.data.transactions);
            setTransaction(result.data.transactions)
        }catch(err){
            console.log("Something Wrong");
        }
    }

    const clickToBackHandler=()=>{
        navigate('/');
    }

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Transaction Details</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Product</th>
                                <th>Transactor</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{transaction.id}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.product}</td>
                                <td>{transaction.transactor}</td>
                                <td>{transaction.quantity}</td>
                                <td>{transaction.price}</td>
                                <td>{transaction.type}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={clickToBackHandler}>Back to Home</button></div>
        </div>
    </div>
}

export default View;