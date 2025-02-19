async function getData(title: string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
    };
    const replacedTitle = title.replace(" ", "-");
    const response = fetch(
        `https://api.themoviedb.org/3/search/movie?query=${replacedTitle}&include_adult=false&language=en-US&page=1z`,
        options
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));
    return response;
}

export default async function getMoviesByTitle(title: string) {
    const data = await getData(title);
    console.log(data);
    return data;
}
