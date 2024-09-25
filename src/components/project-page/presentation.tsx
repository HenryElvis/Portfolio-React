import { useEffect, useState } from 'react';
import '/src/styles/projects/presentation.scss';
import Video from './video';
import BlocPresentation from './bloc-presentation';

const Presentation = () => {
    const [data, /*setData*/] = useState<string>("");
    const [projectVideo, setProjectVideo] = useState({ hasVideo: false, videoSrc: "" });
    const [blocPres, setBlocPresentation] = useState({ title : "", description : "", image1 : "", image2 : "", alt1 : "", alt2 : "" });

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
            setBlocPresentation({ title: data.title, description: data.description, image1: data.image1, image2: data.image2, alt1: data.alt1, alt2: data.alt2 });
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

            <BlocPresentation blocPresentation={blocPres}/>

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