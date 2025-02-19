import MovieList from "./components/MovieList";

export default function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-navy-500 to-blue-500 text-white text-center font-bold text-4xl">
                React Query Movies
            </h1>
            <div className="p-5 m-10 bg-gradient-to-r from-navy-500 to-blue-500  rounded-lg">
                This project is a learning exercise that demonstrates how to
                build a movie search application using the TMDB API, Next.js,
                React Query, and Zustand. The project is hosted on GitHub and
                can be found at{" "}
                <a
                    className="text-navy-900"
                    href="https://github.com/habbababbai/Movies-NextJS-App"
                >
                    Movies-NextJS-App.
                </a>
            </div>
            <h2 className="m-5 text-4xl">List of movies:</h2>
            <MovieList />
        </div>
    );
}
