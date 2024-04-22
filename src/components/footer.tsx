import '../styles/footer.scss';

const Footer = () => {
    return (
        <article>
            <div>
                <a href="https://github.com/HenryElvis" target="_blank">
                    <i className="fa-brands fa-github fa-bounce"></i>
                    <p>Github</p>
                </a>
            </div>
            <div>
                <a href="https://discord.gg/A2zrCnfCSg" target="_blank">
                    <i className="fa-brands fa-discord fa-bounce"></i>
                    <p>Discord</p>
                </a>
            </div>
            <div>
                <a href="https://itch.io/profile/kiraa24" target="_blank">
                    <i className="fa-brands fa-itch-io fa-bounce"></i>
                    <p>Itch.io</p>
                </a>
            </div>
            <div>
                <a href="https://www.twitch.tv/kiraa24a" target="_blank">
                    <i className="fa-brands fa-twitch fa-bounce"></i>
                    <p>Twitch</p>
                </a>
            </div>
        </article>
    )
}

export default Footer;