import List from './List';
import React, { useState } from 'react';
import axios from "axios";
import "./Home.scss";

const Home=()=>{
    const [transactionField, setTransactionField] = useState({
        id: '',
        date: '',
        product: '',
        transactor: '',
        qty: '',
        price: '',
        type: ''
      });
      const changeTransactionFieldHandler = (e) => {
        setTransactionField({
            ...transactionField,
            [e.target.name]:e.target.value
        });
        //console.log(transactionField);
      }

      const [loading,setLoading]=useState()

      const onSubmitChange=async(e)=>{
        e.preventDefault();
        try{
            const responce=await axios.post("http://127.0.0.1:8000/api/addnew/",transactionField);
            console.log(responce)
            setLoading(true);
        }catch(err){
            console.log("Something wrong");
        }
      }

      if(loading){
        return <Home/>
      }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>Add Transactions</h3><br />
                    <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label">ID:</label>
                        <input type="text" className="form-control" id="id" placeholder="Transaction ID" name="id" onChange={e=>changeTransactionFieldHandler} required />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Date:</label>
                        <input type="date" className="form-control" id="date" name="date" onChange={e=>changeTransactionFieldHandler} required />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Product:</label>
                        <input type="text" className="form-control" id="product" placeholder="Product Name" name="product" onChange={e=>changeTransactionFieldHandler} required />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Transactor:</label>
                        <input type="text" className="form-control" id="transactor" placeholder="Transactor Name" name="transactor" onChange={e=>changeTransactionFieldHandler} required />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Quantity:</label>
                        <input type="number" className="form-control" id="qty" placeholder="Quantity" name="qty" onChange={e=>changeTransactionFieldHandler} required />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-control" id="price" placeholder="Price" name="price" onChange={e=>changeTransactionFieldHandler} required />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Type:</label>
                        <select className="form-select" id="type" name="type" onChange={e=>changeTransactionFieldHandler} required>
                        <option value="">Select Type</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Add</button>
                    
                    <button type="reset" className="btn btn-secondary">clear</button>
                    </form>
                </div>
                <div className='col-md-8'>
                    <List />
                </div>
            </div>
        </div>
    )
};

export default Home;