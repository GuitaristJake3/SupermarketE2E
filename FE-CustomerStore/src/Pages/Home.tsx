import { useEffect, useState } from "react";
import { useGetItemsQuery } from "../Items/ItemApi";

interface Product {
    name: string;
    price: string;
}

export default function Home()
{
    const { data } = useGetItemsQuery();


    const listItems = data?.map((sum, i) =>
        <li className="m-4 bg-neutral text-white p-8" key={i}>{sum.name}</li>
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