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

    const isYouTubeVideo = video.videoSrc.includes('youtube.com') || video.videoSrc.includes('youtu.be');

    return (
        <>
            <section>
                {isYouTubeVideo ? (
                <iframe
                    width="560"
                    height="315"
                    src={video.videoSrc.replace('watch?v=', 'embed/')}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                    >
                </iframe>
                ) : (
                    <video controls>
                    <source src={video.videoSrc} type="video/mp4" />
                    </video>
                )}
            </section>
        </>
    );
};

export default Video;