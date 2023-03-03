import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;






export const Movie_data = () => {
    const [Jsonmovie, setJsonmovie] = useState([]);
    const { movie_id } = useParams();

    async function Video_es() {
        await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=es-VE`)
            .then((response) => response.json())
            .then((data) => {
                setJsonmovie(data.results); // ⬅️ Guardar datos
            });

        if (Jsonmovie.length == 0) {
            Video_en();
        } else {
            setJsonmovie(Jsonmovie);
        }
    }
    async function Video_en() {
        await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setJsonmovie(data.results); // ⬅️ Guardar datos
            });
    }
    useEffect(() => {
        Video_es();

    }, [])

    if (Jsonmovie.length != 0) {
        return (
            <iframe width="100%" height="600px" src={`https://www.youtube.com/embed/${Jsonmovie[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        )
    }

}


