"use client";
import { useQuery } from "@tanstack/react-query";
import getMovies from "../api/getMovies";
import Image from "next/image";

export default function MovieList() {
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await getMovies(),
        queryKey: ["movies"], //Array according to Documentation
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Sorry There was an Error</div>;

    return (
        <div className="grid grid-cols-4 gap-4 p-10">
            {data?.results?.map(
                (movie: { id: number; title: string; poster_path: string }) => {
                    return (
                        <div key={"movie" + movie.id}>
                            <h1>{movie.title}</h1>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt=""
                                width={100}
                                height={100}
                                className="w-auto h-auto"
                            />
                        </div>
                    );
                }
            )}
        </div>
    );
}
