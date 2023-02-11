import React from 'react'
import { useState } from 'react'
const Tables = () => {
    const [product, setProduct] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const [products,setProducts] = useState([
        {
            name : "bramono",
            email : "bramono@gmail.com",
            phone : "087654321"
        },
        {
            name : "Rian",
            email : "rian@gmail.com",
            phone : "087654321"
        },
        {
            name : "Ringgo",
            email : "ringgo@gmail.com",
            phone : "087654321"
        },
        {
            name : "Faris",
            email : "faris@gmail.com",
            phone : "087654321"
        }
    ])

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        console.log(product)
    }

    const handleClick = (e) => {
        setProducts([...products, product])
        setProduct({
            name: "",
            email: "",
            phone: ""
        })
    }

  return (
    <div>
        <div>
            <label htmlFor="name">Nama</label>
            <br />
            <input type="text" placeholder='name' value={product.name} onChange={handleChange} name='name' />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder='email' value={product.email} onChange={handleChange} name='email' />
            <br />
            <label htmlFor="name">Phone</label>
            <br />
            <input type="number" placeholder='phone' value={product.phone} onChange={handleChange} name='phone' />
            <br />
            <button onClick={handleClick}>Add</button>
        </div>
      <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default Tables
