"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import getMoviesByTitle from "../api/getMoviesByTitle";

export default function Searchbar() {
    const [title, setTitle] = useState("");
    const router = useRouter();

    const handleSearch = async () => {
        await getMoviesByTitle(title);
        router.push(`/search?title=${title}`);
    };
    const handleHome = () => {
        router.push(`/`);
    };

    return (
        <div>
            <button onClick={handleHome}>Home</button>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Search for a movie"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
