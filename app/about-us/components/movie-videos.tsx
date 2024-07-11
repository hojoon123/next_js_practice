
async function getVideos(id:string) {
    throw new Error('something Error');
    // return (await fetch(`${API_URL}/${id}/videos`)).json();
}

export default async function MovieVideos({id}:{id:string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}