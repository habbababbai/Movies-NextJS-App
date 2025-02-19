"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import getMoviesByTitle from "../api/getMoviesByTitle";
import SearchResult from "../components/SearchResult";

export default function SearchResults() {
    const searchParams = useSearchParams();
    const title = searchParams.get("title") || "";

    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await getMoviesByTitle(title),
        queryKey: ["search", title],
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Sorry There was an Error</div>;

    return (
        <div className="grid grid-cols-1 gap-4 p-10">
            {data?.results?.map(
                (movie: {
                    id: number;
                    title: string;
                    poster_path: string;
                    overview: string;
                }) => {
                    return (
                        <SearchResult
                            key={`movie${movie.id}`}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            description={movie.overview}
                        />
                    );
                }
            )}
        </div>
    );
}
