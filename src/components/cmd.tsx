import { useEffect, useState } from 'react';
import '../styles/header/cmd.scss';

const Cmd = () => {
    const [clicked, setClicked] = useState(false);
    const [cmdHide, setCmdHide] = useState(true);

    useEffect(() => {
        const HandleButton = () => {

            if (clicked) return;
            
            setClicked(true);
            setCmdHide(!cmdHide);

            setTimeout(() => {
                setClicked(false);
            }, 500);

            if (cmdHide)
            {
                console.log("cmd show");
            }
            else
            {
                console.log("cmd hide");
            }
        };

        const button = document.querySelector('.cmd-toggle-btn');
        button?.addEventListener('click', HandleButton);

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

export default Cmd;