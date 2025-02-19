"use client";
import { useQuery } from "@tanstack/react-query";
import getMovies from "./api/getMovies";
import Image from "next/image";

export default function Home() {
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await getMovies(),
        queryKey: ["movies"], //Array according to Documentation
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Sorry There was an Error</div>;

    return (
        <div className="container mx-auto">
            <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold text-4xl">
                React Query Movies
            </h1>
            <div className="grid grid-cols-4 gap-4 p-10">
                {data?.results?.map(
                    (movie: {
                        id: number;
                        title: string;
                        poster_path: string;
                    }) => {
                        return (
                            <div key={"movie" + movie.id}>
                                <h1>{movie.title}</h1>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}
