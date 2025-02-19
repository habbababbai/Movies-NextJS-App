"use client";
import { useQuery } from "@tanstack/react-query";
import getMovies from "../api/getMovies";
import Image from "next/image";
import Card from "./Card";

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
                        <Card
                            key={`movie${movie.id}`}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                        />
                    );
                }
            )}
        </div>
    );
}
