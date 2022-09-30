import React from 'react'

interface ICardProps {
    title: string;
    subtitle: string;
    description: string;
    img?: string;
    list?: [string];
    icon?: React.FC;
    type: "Info" | "Process" | "Statistics";
}

const Card: React.FC<ICardProps> = (props) => {
    return (
        <div>
            
        </div>
    )
}

export default Card