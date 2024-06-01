import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [restaurantData, setRestaurantData] = useState([]);
    const {restaurantId} = useParams();
    console.log(restaurantId);
    useEffect(() => {
        fetchRestaurantData();
    }, [])

    const fetchRestaurantData = async () => {
        const res =
        {
            name: "Bangalore dabha",
            items: [
                {
                    id: 1,
                    name: "Biryani"
                },
                {
                    id: 2,
                    name: "Dosa"
                },
                {
                    id: 3,
                    name: "Idli"
                }
            ]
        }

        setRestaurantData(res);
    }

    return (
        <section>
            <h1>{restaurantData?.name}</h1>
            <ul>
                {
                    restaurantData?.items?.map((item) => {
                        return <li key={item?.id}>{item?.name}</li>
                    })
                }
            </ul>
        </section>
    )
}

export default RestaurantMenu;