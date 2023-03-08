
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;
export const Search = () => {
    const [Jsonmovie, setJsonmovie] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=falsTe`)
            .then((response) => response.json())
            .then((data) => {
                setJsonmovie(data.results); // ⬅️ Guardar datos
            });

    }, [])
    return (
        <>
            <h1 className="[ text-lg  font-bold text-gray-400 ]">{query}</h1>
            <div className="[ p-3  rounded-lg flex flex-col  gap-5 bg-stone-900 ] [ lg:grid lg:grid-cols-6 ]">
                {Jsonmovie.map(item => <div key={item.id} className="card card-compact hover:scale-[1.12] transition-all w-full bg-stone-800 shadow-xl [ lg:w-52 ]">
                    <figure><img src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className="card-title text-lg text-primary">{item.title}</h1>
                        <p className="text-gray-500">{item.release_date}</p>
                        <Link to={`/movie/${item.id}`}>
                            <div className=" w-full "><a className="cursor-pointer flex justify-end items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

                                </a>
                            </div>
                        </Link>
                    </div>
                </div>)}
            </div>
        </>);
}
