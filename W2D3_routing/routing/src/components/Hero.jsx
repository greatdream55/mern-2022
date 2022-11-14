import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Hero = (props) => {

    const [hero, setHero] = useState(null)
    const { heroId } = useParams();
    console.log(heroId)

    // ! to use navigate we must first invoke it
    const navigate = useNavigate();

    useEffect(() => {
        // axios.get("https://akabab.github.io/superhero-api/api/id/" + heroId + ".json")
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
            .then((apiResponse) => {
                console.log(apiResponse.data);
                setHero(apiResponse.data)
            })
            .catch(err => {
                console.log("❌", err)
                navigate("/theWildCardRouteWillCatchThis", {replace:true})
            })
    }, [heroId, navigate])


    return (
        <>
            <h3>Hero id is {heroId}</h3>
            {
                hero ? (
                    <div>
                        {/* {JSON.stringify(hero)} */}
                        <h2>{hero.name}</h2>
                        <img src={hero?.images?.md} alt={hero.name} />

                    </div>
                ) : <p>Loading...</p>
            }
        </>
    )
}

export default Hero