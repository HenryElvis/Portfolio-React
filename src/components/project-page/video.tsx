interface VideoProps
{
    video:
    {
        hasVideo: boolean;
        videoSrc: string;
    };
}

const Video: React.FC<VideoProps> = ({video}) => {

    if (!video.hasVideo) return null;

    return (
        <>
            <section>
                <p>Vidéo</p>
                <video controls>
                <source src={video.videoSrc} type="video/mp4" />
                </video>
            </section>
        </>
    );
};

export default Video;