import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchResultProps {
    title: string;
    imageUrl?: string;
    description?: string;
}

export default function SearchResult({
    title,
    imageUrl,
    description,
}: SearchResultProps) {
    const router = useRouter();

    const handleViewMore = () => {
        const query = new URLSearchParams({
            title,
            imageUrl,
            description,
        }).toString();
        router.push(`/movieId?${query}`);
    };

    return (
        <div className="bg-blue-900 rounded-lg flex flex-row items-center p-5">
            {imageUrl ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                    alt={title}
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
            ) : (
                <div className="min-w-32 w-32 h-44 flex items-center justify-center bg-gray-700 text-white">
                    No image
                </div>
            )}
            <div className="ml-4">
                <h2 className="text-white text-xl">{title}</h2>
                <p className="text-gray-300">{description}</p>
                <button
                    onClick={handleViewMore}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    View More
                </button>
            </div>
        </div>
    );
}
