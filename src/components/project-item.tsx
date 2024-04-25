import React from "react";

interface ProjectData
{
    title: string;
    imagePath: string;
    content: string;
    alt: string;
    warningContent: boolean;
}

interface ProjectItemProps
{
    index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ index }) =>
{
    const [itemData, setItemData] = React.useState<ProjectData | null>(null);

    const isWarningContent = itemData?.warningContent;

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

    return (
        <div className={isWarningContent ? "content-warning" : ""}>
            <div className="project-image">
                <a href={isWarningContent ? "/" : "/project"}>
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