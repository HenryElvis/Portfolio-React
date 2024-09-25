import '/src/styles/projects/blocs.scss';

interface BlocPresentationProps {
    blocPresentation: 
    {
        title: string;
        description: string;
        image1: string;
        image2: string;
        alt1: string;
        alt2: string;
    };
}

const BlocPresentation: React.FC<BlocPresentationProps> = ({blocPresentation}) => {
    return (
        <>
            <section>
                <h2>{blocPresentation.title}</h2>
                <p id="bloc-p">{blocPresentation.description}</p>

                <img src={blocPresentation.image1} alt={blocPresentation.alt1} />
                <img src={blocPresentation.image2} alt={blocPresentation.alt2} />
            </section>
        </>
    );
};

export default BlocPresentation;