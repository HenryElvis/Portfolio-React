import React from "react";

import '../styles/cards/card.scss';

interface CardData
{
    title: string;
    description: string;
}

interface CardProps
{
    index: string;
}

const Card: React.FC<CardProps> = ({ index }) =>
{
    const [cardData, setCardData] = React.useState<CardData | null>(null);

    React.useEffect(() =>
    {
        fetch("../data/card-data.json")
        .then((response) => 
        {
            if (!response.ok)
                throw new Error("Network response was not ok");

            return response.json();
        })
        .then((data) => 
        {
            const cardFound = data[index];

            if (cardFound)
                setCardData(cardFound[0]);
            else
                console.error("Card not found:", index);
        })
        .catch((error: any) => {
            console.error("Error fetching card data:", error.message);
        });
    }, [index]);

    return (
        <div className="description">
          <h2>{cardData?.title}</h2>
          <p>{cardData?.description}</p>
        </div>
    );
};

export default Card;