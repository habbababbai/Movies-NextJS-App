"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const MovieDetail = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const imageUrl = searchParams.get("imageUrl");
    const description = searchParams.get("description");

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            {imageUrl ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                    alt={title as string}
                    width={300}
                    height={450}
                    className="w-auto h-auto"
                />
            ) : (
                <div className="min-w-32 w-32 h-44 flex items-center justify-center bg-gray-700 text-white">
                    No image
                </div>
            )}
            <p className="mt-4 text-lg">{description}</p>
        </div>
    );
};

export default MovieDetail;
