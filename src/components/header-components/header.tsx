import { useRef, useEffect, RefObject } from 'react';

import '../styles/header/header.scss';
import CmdButton from '../cmd-components/cmd-button';
import Cmd from '../cmd-components/cmd';

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
        <div>
            <section id="title">
                <h1 ref={titleRef as RefObject<HTMLHeadingElement>} translate="no">P1RTF1L!1</h1>
                <p>12222222222</p>
            </section>
            
            <CmdButton />
            <Cmd />
        </div>
    );
}

export default Header;