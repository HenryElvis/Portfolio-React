import { useEffect, useState } from 'react';
import '/src/styles/projects/presentation.scss';
import Video from './video';

const Presentation = () => {
    const [data, /*setData*/] = useState<string>("");
    const [projectVideo, setProjectVideo] = useState({ hasVideo: false, videoSrc: "" });

    const storedData = sessionStorage.getItem("dataToFetch");

    if (storedData)
        console.log("Data fetched from session storage: ", storedData);

    useEffect(() => 
    {
        if (!storedData) return;

        fetch(storedData)
        .then((response) =>
        {
            if (!response.ok)
                throw new Error("Network response was not ok");

            return response.json();
        })
        .then((data) =>
        {
            setProjectVideo({ hasVideo: data.hasVideo, videoSrc: data.videoSrc });
        })
        .catch((error: any) => {
            console.error("Error fetching item data:", error.message);
        });

    }, [data]);

    return (
        <>
            <h1>
                Project Presentation
            </h1>

            <section>
                <h2>Introduction</h2>
                <p>Here is a brief introduction to the project.</p>

                <img src="" alt="" />
                <img src="" alt="" />
            </section>

            <section>
                <h2>Objective</h2>
                <p>Here is the objective of the project.</p>

                <img src="" alt="" />
                <img src="" alt="" />
            </section>

            <section>
                <h2>Control</h2>
                <p>Here is the methodology used in the project.</p>

                <img src="" alt="" />
                <img src="" alt="" />
            </section>

            <Video video={projectVideo} />
        </>
    );
};

export default Presentation;