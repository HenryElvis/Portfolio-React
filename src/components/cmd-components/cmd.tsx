import { useEffect, useState } from 'react';
import '../styles/cmd/cmd.scss';

const Cmd = () => {
    const [isCmdHide, setCmdHide] = useState(false);

    useEffect(() => {
        const cmdContainer = document.getElementById("terminal")!;
        setCmdHide(cmdContainer?.classList.contains("hidden"));
    
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