import { useEffect, useState } from "react";

interface Product {
    name: string;
    price: string;
}

export default function Home()
{
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/api/products")
        .then(response => response.json())
        .then(data => setItems(data.map((product: Product) => product.name + ": " + product.price)));
    }, []);

    const listItems = items.map((sum, i) =>
        <li className="m-4 bg-neutral text-white p-8" key={i}>{sum}</li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}