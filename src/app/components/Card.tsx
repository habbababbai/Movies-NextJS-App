import Image from "next/image";

interface CardProps {
    title: string;
    imageUrl?: string;
}

export default function Card({ title, imageUrl }: CardProps) {
    return (
        <div className="bg-blue-900 rounded-lg flex flex-col items-center justify-center p-5">
            <h1 className="text-white text-center mb-4">{title}</h1>
            {imageUrl ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                    alt={title}
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
            ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-700 text-white">
                    No image
                </div>
            )}
        </div>
    );
}
