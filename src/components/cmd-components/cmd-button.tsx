import { useEffect, useState } from 'react';
import '/src/styles/cmd/cmd-button.scss';

const CmdButton = () => {
    const [clicked, setClicked] = useState(false);
    const [cmdHide, setCmdHide] = useState(true);

    useEffect(() => {
        const HandleButton = () => {

            if (clicked) return;
            
            setClicked(true);
            setCmdHide(!cmdHide);

            setTimeout(() => {
                setClicked(false);
            }, 1000);
        };

        const button = document.querySelector('.cmd-toggle-btn');
        button?.addEventListener('click', HandleButton);

        const cmd = document.getElementById('terminal');

        if (cmdHide)
            cmd?.classList.add('hidden');
        else
        {
            cmd?.classList.remove('hidden');
            cmd?.scrollIntoView({ behavior: "smooth" });
        }

        return () => {
            button?.removeEventListener('click', HandleButton);
        };
    }, [clicked, cmdHide]);

    return (
        <button className="cmd-toggle-btn">
            <i className="fa-solid fa-terminal fa-bounce"></i>
        </button>
    )
}

export default CmdButton;