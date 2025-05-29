import data from '@/data/data.json';

interface Props {
    params: {
        name: string;
    };
}

export default function Work({ params }: Props) {
    const decodedName = decodeURIComponent(params.name);
    const thisData = data.find((d) => d.slug === decodedName);
    console.log(data, thisData);
    return (
        <>
            <h1>{thisData?.name}</h1>
            <p>{thisData?.date}</p>
            <div>
                {thisData?.tag.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
            <p>{thisData?.pic}</p>
            <p>{thisData?.description}</p>
            <p>{thisData?.article}</p>
            <p>{thisData?.url}</p>
            <p>{thisData?.figmaUrl}</p>
        </>
    );
}
