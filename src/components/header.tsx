import '../styles/header.scss';

const Header = () =>
{
    return (
        <section id="title">
            <h1 translate="no" id="titleAnim">P1RTF1L!1</h1>
            <p>12222222222</p>

            <button id="cmd-toggle-btn">
                <i className="fa-solid fa-terminal fa-bounce"></i>
            </button>
        </section>
    );
}

export default Header;