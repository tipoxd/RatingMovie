import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;


export function MovieSimilar(movie) {

    const [SimilarMovie, setSimilarMovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setSimilarMovie(data.results); // ⬅️ Guardar datos
            });

    }, [])
    return (
        <>
            <h1 className="[ text-lg  font-bold text-gray-400 ]">Similares</h1>
            <div className="[ p-3  rounded-lg flex flex-col  gap-5 bg-stone-900 ] [ lg:grid lg:grid-cols-6 ]">
                {SimilarMovie.map(item => {
                    return item.backdrop_path == null ?
                        <div key={item.id} className="card card-compact hover:scale-[1.12] transition-all w-full bg-stone-800 shadow-xl [ lg:w-52 ]">
                            <figure><img className='object-cover w-[100px]' src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1 className="card-title text-lg text-primary">{item.title}</h1>
                                <p className="text-gray-500">{item.release_date}</p>
                                <a href={`/movie/${item.id}`}>
                                    <div className=" w-full "><a className="cursor-pointer flex justify-end items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                    </svg>
                                        Ver Trailer</a>
                                    </div>
                                </a>
                            </div>
                        </div>
                        :
                        <div key={item.id} className="card card-compact hover:scale-[1.12] transition-all w-full bg-stone-800 shadow-xl [ lg:w-52 ]">
                            <figure><img src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1 className="card-title text-lg text-primary">{item.title}</h1>
                                <p className="text-gray-500">{item.release_date}</p>
                                <a href={`/movie/${item.id}`}>
                                    <div className=" w-full "><a className="cursor-pointer flex justify-end items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                    </svg>
                                        Ver Trailer</a>
                                    </div>
                                </a>
                            </div>
                        </div>

                }
                )
                }
            </div>
        </>);
}
