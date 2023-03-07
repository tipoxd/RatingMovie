import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { MovieSimilar } from '../components/MovieSimilar';
const API_KEY = import.meta.env.VITE_API_KEY;






export const Movie_data = () => {
    const [Jsonmovie, setJsonmovie] = useState([]);
    const { movie_id } = useParams();

    async function Info_movie() {
        await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=es-ES`)
            .then((response) => response.json())
            .then((data) => {
                setJsonmovie(data); // ⬅️ Guardar datos
            });


    }

    useEffect(() => {
        Info_movie();

    }, [])

    //<iframe width="100%" height="600px" src={`https://www.youtube.com/embed/${Jsonmovie[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    if (Jsonmovie.length != 0) {
        return (
            <>
                <div className="[ flex flex-col  gap-1 ] [ lg:flex-row ] [  md:flex-row ]">
                    <div className="[  flex justify-center ] [ lg:w-1/4 ] [ md:w-1/4 ]">
                        <img className='[ rounded-lg object-cover   ] [ lg:w-4/5  ] [ md:w-4/5  ]' src={"https://image.tmdb.org/t/p/w780" + Jsonmovie.poster_path} ></img>
                    </div>
                    <div className={`[ w-full gap-3 flex flex-col  p-3 rounded-lg ] [ lg:w-3/4 ] [ md:w-3/4 ] `}>
                        < div >
                            <h1 className='[ text-lg font-bold text-primary ]'>{Jsonmovie.title}</h1>
                            <p className='[ text-gray-400 ]'>{Jsonmovie.overview}</p>
                        </div>
                        <div className='[ flex flex-col gap-5 ] [ lg:flex-row ] [ md:flex-row ]'>
                            <div>
                                <label className='font-bold text-primary '>Categoria</label>
                                {Jsonmovie.genres.map((Items, Index) =>
                                    <p key={Index} className='[ text-sm text-gray-400 ]'>{Items.name}</p>
                                )
                                }
                            </div>

                            <div>
                                <label className='[ font-bold text-primary ]'>Producciones</label>
                                <div className="[ avatar-group -space-x-6 ]">
                                    {Jsonmovie.production_companies.map((Items, Index) => {
                                        return Items.logo_path != null ?
                                            <div key={Index} className="[ avatar ]">
                                                <div className="[ bg-white w-12  ]">
                                                    <img className='[ object-cover  ]' title={Items.name} src={"https://image.tmdb.org/t/p/w500" + Items.logo_path} />
                                                </div>
                                            </div>
                                            :
                                            "";
                                    }
                                    )
                                    }
                                </div>
                            </div>

                            <div>
                                <label className='[ font-bold text-primary ]'>Lenguajes</label>
                                <div className="[  flex flex-col ]">
                                    {
                                        Jsonmovie.spoken_languages.map((Items, Index) =>
                                            <p key={Index} className='[ text-sm text-gray-400 ]'>{Items.english_name}</p>
                                        )
                                    }
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>

                </div >

                <MovieSimilar movie_id={movie_id}></MovieSimilar>
            </>)
    }

}


