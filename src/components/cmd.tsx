import { useEffect, useState } from 'react';
import '../styles/cmd/cmd.scss';

const Cmd = () => {
    const [isCmdHide, setCmdHide] = useState(true);

    useEffect(() => {
        const cmdContainer = document.getElementById("terminal")!;
        setCmdHide(cmdContainer?.classList.contains("hidden"));
    
        if (isCmdHide === false)
        {
            cmdContainer?.scrollIntoView({ behavior: "smooth" })
        }

    }, [isCmdHide]);

    return (
        <div id="terminal" className="hidden">
            <div id="output"></div>
            <p id="cmd-input">
                <span>elvis@portfolio:~$</span>
                <input type="text" autoFocus id="input"/>
            </p>
        </div>
    )
}

export default Cmd;