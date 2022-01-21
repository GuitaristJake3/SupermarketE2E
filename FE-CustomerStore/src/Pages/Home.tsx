import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import { useGetProductsQuery } from "../Products/ProductApi";

export default function Home() {
    const [category, setCategory] = useState<string | undefined>('');
    const { data } = useGetProductsQuery(category);

    const listItems = data?.map((sum, i) =>
        <li className="bg-neutral text-white p-8" key={i}>{sum.name}: {sum.price}</li>
    );

    return (
        <div className="w-full flex flex-row items-stretch">
            <div className="flex-none w-1/5 mb-4">
                <Categories onChange={id => setCategory(id)}/>
            </div>
            <div className="grow">
                <ul className="m-4">
                    {data &&
                        <>
                            {listItems}
                        </>  
                    }
                </ul>
            </div>
        </div>
    );
}