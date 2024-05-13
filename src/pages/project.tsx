import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "../components/header-components/header";
import Footer from "../components/footer-components/footer";

const Project = () => {

    const [rootCreated, setRootCreated] = useState(false);

    useEffect(() => {
        if (rootCreated === false) {
            const headerRoot = document.getElementById('header') as HTMLElement;
            const footerRoot = document.getElementById('footer');
    
            if (headerRoot) {
                createRoot(headerRoot!).render(<Header />);
            }
    
            if (footerRoot) {
                createRoot(footerRoot!).render(<Footer />);
            }

            setRootCreated(true);
        }
    }, []);

    return (
        <>
            <header>
                <div id='header'></div>
            </header>


            <footer>
                <div id='footer'></div>
            </footer>
        </>
    );
}

export default Project;