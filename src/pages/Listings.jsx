import {useState, useEffect} from "react";
import axios from "axios";
import  House from "../components/House";

const Listings = () => {
    const [houses, setHouses] = useState([]);

    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("http://localhost:3001/api/destinations");
            setHouses(response.data);
        };

        loadHouses();
    },[]);
    return (
        <main id="listings" className="main-content">
            <div id="houses" className="columns">
                {houses.map((house)=>(
                <House 
                    key={house._id}
                    title={house.name}
                    description={house.short_desc}
                    main_image={house.main_image}
                />
                ))}
                {/*<House 
                    title="Farm House"
                    description="Chickens"
                    />
                <House 
                    title="Modern Home"
                    description="Lots of corners"
                />*/}
            </div>
        </main>
    );
}

export default Listings;