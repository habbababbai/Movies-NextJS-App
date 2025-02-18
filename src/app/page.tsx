import Providers from "./components/Providers";
import Searchbar from "./components/Searchbar";

export default function Home() {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Searchbar />
                </Providers>
            </body>
        </html>
    );
}
