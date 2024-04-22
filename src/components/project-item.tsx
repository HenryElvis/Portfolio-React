import React from "react";

interface ProjectData
{
    title: string;
    imagePath: string;
    content: string;
    warningContent: boolean;
}

interface ProjectItemProps
{
    index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ index }) =>
{
    const [itemData, setItemData] = React.useState<ProjectData | null>(null);

    React.useEffect(() =>
    {
        fetch("../data/project-data.json")
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
                setItemData(itemFound[0]);
            else
                console.error("Item not found:", index);
        })
        .catch((error: any) => {
            console.error("Error fetching item data:", error.message);
        });

    }, [index]);

    return(
        <div className={itemData?.warningContent ? 'content-warning' : ''}>
            <div>
                <img src={itemData?.imagePath} alt="project" />
            </div>
            <div>
                <h2>{itemData?.title}</h2>
            </div>
            <div>
                <p>{itemData?.content}</p>
            </div>
        </div>
    );
}

export default ProjectItem;