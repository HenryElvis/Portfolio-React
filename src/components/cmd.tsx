import '../styles/cmd/cmd.scss';

const Cmd = () => {

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