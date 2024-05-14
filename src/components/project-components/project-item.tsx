import React, { useEffect, useState } from "react";

interface ProjectData
{
    title: string;
    imagePath: string;
    content: string;
    alt: string;
    dataToFetch: string;
    warningContent: boolean;
}

interface ProjectItemProps
{
    index: number;
}

let DataToFetch: string = "";

const ProjectItem: React.FC<ProjectItemProps> = ({ index }) =>
{
    const [itemData, setItemData] = useState<ProjectData | null>(null);
    const [dataToFetch, setDataToFetch] = useState<string>("");

    const isWarningContent = itemData?.warningContent;

    useEffect(() =>
    {
        fetch("/data/project-data.json")
        .then((response) =>
        {
            if (!response.ok)
                throw new Error("Network response was not ok");

            return response.json();
        })
        .then((data) =>
        {
            const itemFound = data[index];

            if (itemFound)
            {
                setItemData(itemFound[0]);
                setDataToFetch(itemFound[0].dataToFetch);
            }
            else
                console.error("Item not found:", index);
        })
        .catch((error: any) => {
            console.error("Error fetching item data:", error.message);
        });

    }, [index, dataToFetch]);

    function SetDataToFetch() : void
    {
        if (itemData)
        {
            setDataToFetch(itemData.dataToFetch);
            DataToFetch = itemData.dataToFetch;
        }

        console.log("SetDataToFetch dataToFetch:", GetDataToFetch());
    }

    return (
        <div className={isWarningContent ? "content-warning" : ""}>
            <div className="project-image">
                <a href={isWarningContent ? "/" : "/project"} onClick={SetDataToFetch}>
                    <img src={itemData?.imagePath} alt={itemData?.alt} />
                </a>
            </div>
            <div className="project-content">
                <div>
                    <h2>{itemData?.title}</h2>
                </div>
                <div>
                    <p>{itemData?.content}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;

export function GetDataToFetch() : string
{
    if (!DataToFetch || DataToFetch === "")
        return "";

    return DataToFetch;
}
