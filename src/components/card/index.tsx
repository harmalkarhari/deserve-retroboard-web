import React, { useState } from 'react';
// import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
// import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid';
// import { TrashIcon } from '@heroicons/react/outline';


interface CardProps {
    onDelete: () => void;
    text: string;
}
// Card component
export const Card: React.FC<CardProps> = ({ text, onDelete }) => {
    const [heartFilled, setHeartFilled] = React.useState(false);

    return (
        <div className="bg-white rounded shadow p-4 m-4 flex justify-between items-center">
            <p className="text-gray-800 text-sm">{text}</p>
            <div className="flex items-center">
                <button
                    className="text-red-500 hover:text-red-600 mr-2"
                    onClick={() => setHeartFilled(!heartFilled)}
                >
                    {/* {heartFilled ? (
            <SolidHeartIcon className="w-5 h-5" />
          ) : (
            <OutlineHeartIcon className="w-5 h-5" />
          )} */}
                </button>
                <button
                    onClick={() => onDelete()}
                    className="text-red-500 hover:text-red-600"
                >
                    {/* <TrashIcon className="w-5 h-5" /> */}
                </button>
            </div>
        </div>
    );
};