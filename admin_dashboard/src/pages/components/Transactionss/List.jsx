import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

const List=()=>{
    const[transactionData, setTransactionData]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async()=>{
        try{
            const result=await axios("http://127.0.0.1:8000/api/transactions");
            //console.log(result.data.results);
            setTransactionData(result.data.results);
        }catch(err){
            console.log("Something wrong");
        }
    }

    const handleDelete=async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/transactiondelete/"+id);
        const newTransactionData=transactionData.filter((item)=>{
            return(
                item.id !==id
            )
        })
        setTransactionData(newTransactionData);
    }
    return(
        <div className="container">
            <h3>Transaction History</h3><br />
            <table className="table">
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
                    { transactionData.map((transaction,id)=>{
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.product}</td>
                                <td>{transaction.transactor}</td>
                                <td>{transaction.qty}</td>
                                <td>{transaction.price}</td>
                                <td>{transaction.type}</td>
                                <td>
                                    <NavLink to={'/view/${transaction.id}'} className="btn btn-success mx-2">View</NavLink>
                                    <NavLink to={'/edit/${transaction.id}'} className="btn btn-info mx-2">Edit</NavLink>
                                    <button onClick={()=>handleDelete(transaction.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            )
                        })
                }
                </tbody>
            </table>
        </div>
    )
}

export default List;