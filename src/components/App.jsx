import { Route, Routes, useParams } from "react-router-dom";
import NavBar from './NavBar'
import { ItemTrendingNow } from "./top_rated";
import { Carousel_Trend_now } from "./Carousel_TrendNow";
import { Movie_data } from "../page/movie";
import { Search } from "../page/Search";


const Home = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Carousel_Trend_now></Carousel_Trend_now>
            <ItemTrendingNow></ItemTrendingNow>
        </div>
    )
}






export default function App() {
    return (<>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:movie_id" element={<Movie_data></Movie_data>}></Route>
            <Route path="/Search/:query" element={<Search></Search>}></Route>
        </Routes>
    </>
    )
}