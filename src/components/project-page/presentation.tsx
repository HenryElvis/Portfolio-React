import { useEffect, useState } from 'react';

const Presentation = () => {
    const [data, /*setData*/] = useState<string>("");

    const storedData = sessionStorage.getItem("dataToFetch");

    if (storedData)
    {
        console.log("Data fetched from session storage: ", storedData);
    }

    useEffect(() => 
    {

    }, [data]);

    return (
        <>
            <h1>
                Project Presentation
            </h1>
            <p>{data}</p>
        </>
    );
};

export default Presentation;