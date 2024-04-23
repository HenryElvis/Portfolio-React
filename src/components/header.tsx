import { useRef, useEffect, RefObject } from 'react';

import Cmd from './cmd';
import '../styles/header/header.scss';

const Header = () =>
{
    const titleRef = useRef<HTMLElement | null>(null);

    useEffect(() => {

        function AnimationOnFocus()
        {
            if (titleRef.current === null) return;
            
            if (document.hasFocus())
                titleRef.current.style.animationPlayState = "running";
            else
                titleRef.current.style.animationPlayState = "paused";
        }

        AnimationOnFocus();

        window.addEventListener('focus', AnimationOnFocus);
        window.addEventListener('blur', AnimationOnFocus);

        return () => {
            window.removeEventListener('focus', AnimationOnFocus);
            window.removeEventListener('blur', AnimationOnFocus);
        }

    }, []);

    return (
        <section id="title">
            <h1 ref={titleRef as RefObject<HTMLHeadingElement>} translate="no">P1RTF1L!1</h1>
            <p>12222222222</p>

            <Cmd />
        </section>
    );
}

export default Header;