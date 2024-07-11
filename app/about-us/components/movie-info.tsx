import { API_URL } from "../../(home)/page";

async function getMovie(id:string) {
    return (await fetch(`${API_URL}/${id}`)).json();
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}