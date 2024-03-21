import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const clickToBackHandler=()=>{
        navigate('/');
    }

    const[transactionField, setTransactionField]=useState({
        date:"",
        product:"",
        transactor:"",
        quantity:"",
        price:"",
        type:""
    });

    useEffect(()=>{
        fetchTransaction();
    },[id])

    const fetchTransaction=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/transactions/"+id);
            //console.log(result.data.transactions);
            setTransactionField(result.data.transactions)
        }catch(err){
            console.log("something wrong");
        }
    }

    const changeTransactionFieldHandler =(e)=>{
        setTransactionField({
            ...transactionField,
            [e.target.name]: e.target.value
        });
        console.log(transactionField);
    }

    const onSubmitChange =async(e)=>{
        e.preventDefault();
        try{
            await axios.put("http://127.0.0.1:8000/api/transactionupdate/"+id, transactionField);
            navigate('/');
        }catch(err){
            console.log("Something wrong")
        }
    }

    return(
        <div className="container">
            <h1>Edit Form</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-lable">ID</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter the ID" name="id" value={id} disabled/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" name="date" value={transactionField.date} onChange={e=>changeTransactionFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Product</label>
                    <input type="text" className="form-control" id="product" placeholder="Product Name" name="product" value={transactionField.product} onChange={e=>changeTransactionFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Transactor</label>
                    <input type="text" className="form-control" id="transactor" placeholder="Transactor Name" name="transactor" value={transactionField.transactor} onChange={e=>changeTransactionFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" name="quantity" value={transactionField.quantity} onChange={e=>changeTransactionFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Price (in SLR)</label>
                    <input type="number" className="form-control" id="price" placeholder="Enter Price" name="price" value={transactionField.price} onChange={e=>changeTransactionFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Type</label>
                    <select className="form-select" id="type" name="type" value={transactionField.type} onChange={e=>changeTransactionFieldHandler(e)}>
                        <option value="income">Buy</option>
                        <option value="expense">Sell</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Update</button>
            </form>
            <div className="container d-flex justify-content-center">
                <button className="btn btn-primary" onClick={clickToBackHandler}>Back to Home</button>
            </div>
        </div>
    )
}

export default Edit;