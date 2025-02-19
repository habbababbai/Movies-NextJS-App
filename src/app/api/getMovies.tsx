async function getData() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
    };

    const response = fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

export default async function getMovies() {
    const data = await getData();
    console.log(data);
    return data;
}
