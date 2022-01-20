import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../Products/ProductApi";

interface Product {
    name: string;
    price: string;
}

export default function Home()
{
    const { data } = useGetProductsQuery();


    const listItems = data?.map((sum, i) =>
        <li className="m-4 bg-neutral text-white p-8" key={i}>{sum.name}: {sum.price}</li>
    );

    return (
        <>
        {data && 
            <ul>
                {listItems}
            </ul>
        }
        </>
    );
}