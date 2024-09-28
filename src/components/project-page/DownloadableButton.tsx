import '/src/styles/projects/download-button.scss';

interface DownloadableButtonProps
{
  dowloadSettings :
  {
    isDownloadable: boolean;
    text: string;
    link: string;
  }
}

const DownloadableButton: React.FC<DownloadableButtonProps> = ({ dowloadSettings }) => {

  if (!dowloadSettings.isDownloadable || !dowloadSettings.link) return null;

  return (
    <>
      <a href={dowloadSettings.link} target="_blank" download id='download-button'>
        <button>
          {dowloadSettings.text}
        </button>
      </a>
    </>
  );
};

export default DownloadableButton;