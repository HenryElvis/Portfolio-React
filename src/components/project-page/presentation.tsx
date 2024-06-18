import { useEffect, useState } from 'react';
// import { GetData } from "../../components/global";

const Presentation = () => {
    const [data, /*setData*/] = useState<string>("");

    useEffect(() => 
    {
        // const fetchedData = GetData();
        // console.log("Data: ", fetchedData);
        // setData(fetchedData);
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