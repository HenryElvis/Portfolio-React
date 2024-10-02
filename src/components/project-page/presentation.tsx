import { useEffect, useState } from 'react';
import '/src/styles/projects/presentation.scss';
import Video from './video';
import BlocPresentation from './bloc-presentation';
import DownloadableButton from './DownloadableButton';

const Presentation = () => {
    const [data, /*setData*/] = useState<string>("");
    const [isPageDone, setIsPageDone] = useState({ PageDone: false});
    const [projectVideo, setProjectVideo] = useState({ hasVideo: false, videoSrc: "" });
    const [blocPres1, setBlocPresentation1] = useState({ title : "", description : "", image1 : "", image2 : "", alt1 : "", alt2 : "" });
    const [blocPres2, setBlocPresentation2] = useState({ title : "", description : "", image1 : "", image2 : "", alt1 : "", alt2 : "" });
    const [blocPres3, setBlocPresentation3] = useState({ title : "", description : "", image1 : "", image2 : "", alt1 : "", alt2 : "" });
    const [downloadableSettings, setDownloadableSettings] = useState({ isDownloadable: false, text: "", link: "" });

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
            setIsPageDone(data.pageDone);
            setBlocPresentation1({ title: data.bloc1.title, description: data.bloc1.description, image1: data.bloc1.image1, image2: data.bloc1.image2, alt1: data.bloc1.alt1, alt2: data.bloc1.alt2 });
            setBlocPresentation2({ title: data.bloc2.title, description: data.bloc2.description, image1: data.bloc2.image1, image2: data.bloc2.image2, alt1: data.bloc2.alt1, alt2: data.bloc2.alt2 });
            setBlocPresentation3({ title: data.bloc3.title, description: data.bloc3.description, image1: data.bloc3.image1, image2: data.bloc3.image2, alt1: data.bloc3.alt1, alt2: data.bloc3.alt2 });
            setProjectVideo({ hasVideo: data.hasVideo, videoSrc: data.videoSrc });
            setDownloadableSettings({ isDownloadable: data.isDownloadable, text: data.downladableText, link: data.downlaodLink });
        })
        .catch((error: any) => {
            console.error("Error fetching item data:", error.message);
        });

    }, [data]);

    if (!isPageDone)
    {
        return (
            <>
                <iframe src="https://giphy.com/embed/5huayaHvn5KSkmWZet" width="480" height="480" style={{ border: "none" }} allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lol-wtf-work-5huayaHvn5KSkmWZet">via GIPHY</a></p>
            </>
        )
    }
    else
    {
        return (
            <>
                <BlocPresentation blocPresentation={blocPres1}/>
                    <BlocPresentation blocPresentation={blocPres2}/>
                    <BlocPresentation blocPresentation={blocPres3}/>
            
                    <Video video={projectVideo} />
            
                <DownloadableButton dowloadSettings={downloadableSettings} />
            </>
        );
    }


};

export default Presentation;