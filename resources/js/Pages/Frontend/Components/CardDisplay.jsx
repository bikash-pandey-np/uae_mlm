import React from 'react';

const CardDisplay = ({ title, number }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h2 className="text-xl font-semibold mt-2">{number}</h2>
        </div>
    );
}

export default CardDisplay;
