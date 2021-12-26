import { useState } from "react";

export default function Admin()
{
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");

    function addItem()
    {
        fetch(import.meta.env.VITE_API_URL + "/api/products", {
            method: 'POST',
            headers: {
              'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
              name,
              price,
            }),
        });
    }

    return (
        <>
            <div className="m-4 bg-neutral text-5xl text-white p-8">Admin</div>
            <div className="form-control m-4">
                <label className="label mt-4">
                    <span className="label-text">Name</span>
                </label> 
                <input placeholder="name" className="input input-bordered" type="text" value={name} onChange={e => setName(e.target.value)}/>

                <label className="label mt-4">
                    <span className="label-text">Price</span>
                </label> 
                <input placeholder="price" className="input input-bordered" type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                <button className="btn btn-primary mt-4" onClick={addItem}>Add Item</button>
            </div>
        </>
    );
}