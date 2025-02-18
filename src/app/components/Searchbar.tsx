"use client";

import { useQuery } from "@tanstack/react-query";

async function getApiData() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&t=Dune:-part-two`;

    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch movie data");

    return response.json();
}

export default function Searchbar() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["movieData"],
        queryFn: getApiData,
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
