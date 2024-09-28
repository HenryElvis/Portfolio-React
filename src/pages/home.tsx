import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "../components/header-components/header";
import CardContainers from "../components/card-components/card-containers";
import ProjectContainers from "../components/project-components/project-containers";
import Footer from "../components/footer-components/footer";

const Home = () => {
    const [rootCreated, setRootCreated] = useState(false);

    // sessionStorage.clear();

    useEffect(() => {
        if (rootCreated === false) {
            const headerRoot = document.getElementById('header') as HTMLElement;
            const cardContainersRoot = document.getElementById('card-containers');
            const projectContainersRoot = document.getElementById('project-containers');
            const footerRoot = document.getElementById('footer');
    
            if (headerRoot) {
                createRoot(headerRoot!).render(<Header />);
            }
    
            if (cardContainersRoot) {
                createRoot(cardContainersRoot!).render(<CardContainers />);
            }
    
            if (projectContainersRoot) {
                createRoot(projectContainersRoot!).render(<ProjectContainers />);
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

        <main>
            <div id='card-containers'></div>
            <div id='project-containers'></div>
        </main>

        <footer>
            <div id='footer'></div>
        </footer>
    </>
  );
}

export default Home;