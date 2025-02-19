import MovieList from "./components/MovieList";

export default function Home() {
    return (
        <div className="container mx-auto width-4/5">
            <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold text-4xl">
                React Query Movies
            </h1>
            <MovieList />
        </div>
    );
}
