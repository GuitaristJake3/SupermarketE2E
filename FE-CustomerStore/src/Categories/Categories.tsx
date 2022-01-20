import { useGetCategoriesQuery } from "./CategoryApi";

export default function Categories()
{
    const { data } = useGetCategoriesQuery();

    let categories = data?.map((l, index) => 
        <li className="btn btn-ghost btn-block rounded-none">
            {l.name}
        </li>
    );

    return (
        <ul>
            {categories}
        </ul>
    );
}