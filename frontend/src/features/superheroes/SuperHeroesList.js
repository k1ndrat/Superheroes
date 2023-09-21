import { useEffect, useState } from "react";
import { useGetAllSuperHeroesMutation } from "./superHeroSlice";
import SuperHeroElement from "./SuperHeroElement";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SuperHeroesList = () => {
    const [data, setData] = useState([]);
    const [getAllSuperHeroes, { isLoading }] = useGetAllSuperHeroesMutation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllSuperHeroes().unwrap();

                console.log("Data received successfully");
                setData(result);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [getAllSuperHeroes]);

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (data.length === 0) {
        content = <p>There are no superheroes!</p>;
    } else if (data.length < 5) {
        content = (
            <ul className="small-list">
                {data.map((hero, index) => (
                    <SuperHeroElement hero={hero} key={index} />
                ))}
            </ul>
        );
    } else {
        content = (
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, Pagination]}
                slidesPerView={5}
                spaceBetween={20}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                {data.map((hero, index) => (
                    <SwiperSlide key={index}>
                        <SuperHeroElement hero={hero} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
    return <div className="main__container">{content}</div>;
};

export default SuperHeroesList;
