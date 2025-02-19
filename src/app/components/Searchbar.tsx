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
        <div className="flex-row flex justify-between bg-blue-800">
            <button className="p-5 bg-blue-900" onClick={handleHome}>
                Home
            </button>
            <div className="flex-row flex bg-blue-900">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Search for a movie"
                    className="w-96 bg-blue-700 p-5"
                />
                <button className="p-5 " onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
}
