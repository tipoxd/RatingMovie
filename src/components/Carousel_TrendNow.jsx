import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
export function Carousel_Trend_now() {
    const [Jsonmovie, setJsonmovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=es-VE`)
            .then((response) => response.json())
            .then((data) => {
                setJsonmovie(data.results); // ⬅️ Guardar datos
            });
    }, [])


    return (
        <>
            <h1 className="[ text-lg  font-bold text-gray-400 ]">Trending Now</h1>
            <div className="  carousel carousel-end h-96 rounded-box ">
                {Jsonmovie.map(item => <div key={item.id} className="carousel-item relative ">
                    <img className=' w-52 duration-150 object-cover hover:w-96 transition-all' src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="Drink" />
                    <div className='[ absolute w-full flex justify-center bottom-2    ]'>{item.title}</div>

                </div>)
                }
            </div>
        </>);
}