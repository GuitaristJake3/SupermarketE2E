import { useEffect, useState } from "react";

export default function Home()
{
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        fetch("http://localhost:8081/WeatherForecast")
        .then(response => response.json())
        .then(data => setItems(data.map((d: { summary: any; }) => d.summary)));
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