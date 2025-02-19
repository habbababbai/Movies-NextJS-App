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
                <h1 className="text-white text-left">{title}</h1>
                {description ? (
                    <div>{description}</div>
                ) : (
                    <div>No description for this movie.</div>
                )}
            </div>
        </div>
    );
}
