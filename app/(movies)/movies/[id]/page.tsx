import { Suspense } from "react";
import MovieInfo from "../../../about-us/components/movie-info";
import MovieVideos from "../../../about-us/components/movie-videos";

export default async function MovieDetail({
    params: { id },
}: {
    params: {id :string};
}) {
    return <div>
        <h3>Movie Detail Page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}><MovieInfo id={id} /></Suspense>

        <h4>Videos</h4>
        <Suspense fallback={<h1>Loading movie video</h1>}><MovieVideos id={id} /></Suspense>
    </div>
}