import { useEffect, useState } from "react";
import '/src/styles/projects/icon.scss';

interface IconProps
{
    IsUnity: boolean;
    ClassName?: string;
}

const Icon = ({ IsUnity, ClassName }: IconProps) =>
{
    const [icon, setIcon] = useState<string>("");
    const [className, setClassName] = useState<string>("");

    useEffect(() =>
    {
        if (IsUnity)
            setIcon("Unity");
        else
            setIcon("UE");

        if (ClassName)
            setClassName(ClassName);
    
    }, [IsUnity]);

    return (
        <>
            <img src={`/images/Icons/${icon}.png`} alt={icon} id="icon" className={className}/>
        </>
    );
}

export default Icon;