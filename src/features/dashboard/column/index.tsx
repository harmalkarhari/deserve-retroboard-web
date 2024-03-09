import React, { useState } from 'react';
import { Card } from '../../../components/card';
import AddIcon from '../../../assets/icons/add.svg';
import { Post, PostWithId, addPost, removePost } from '../dashboard.action';
import { useAppDispatch } from '../../../app/app.hooks';

interface ColumnProps {
    title: string;
    cards: Array<PostWithId>;
    // addCards: (text: Array<string>) => any;
    type: string;
}
// Column component
export const Column: React.FC<ColumnProps> = ({ title, cards, type }) => {
    const [text, setText] = useState('');
    const [showNewText, setShowNewText] = useState(false);
    const dispatch = useAppDispatch();
    const handlePost = () => {
        if (text.trim()) {
            dispatch(addPost({ text, type }));
            setText('');
            setShowNewText(false);
        }
    };

    const toggleShowNewText = () => {
        setShowNewText(!showNewText);
    };

    const handleCancel = () => {
        setShowNewText(false);
        setText('');
    };

    const handleDelete = (card: PostWithId) => {
        dispatch(removePost(card));
    };

    return (
        <div className="flex flex-col w-full md:w-1/3 bg-gray-100 rounded p-3">
            <h6 className="text-sm font-semibold mb-3">{title}</h6>
            <button
                className="bg-blue-500 text-white p-2 rounded mb-3"
                onClick={toggleShowNewText}
            >
                Add New
            </button>

            {showNewText && <div className='w-full'>
                <textarea
                    className="border p-2 mb-2 rounded w-full"
                    style={{ "resize": "none" }}
                    placeholder="Add text here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className='flex justify-end'>
                    <button
                        className="bg-blue-500 text-white p-2 rounded mb-3"
                        onClick={handleCancel}
                        style={{ width: '100px' }}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 text-white p-2 rounded mb-3 ml-2"
                        style={{ width: '100px' }}
                        onClick={handlePost}
                    >
                        Post
                    </button>
                </div>
            </div>
            }
            <div className="overflow-auto max-h-96">
                {cards.map((card, index) => (
                    <Card key={index} text={card.text} onDelete={() => handleDelete(card)} />
                ))}
            </div>
        </div>
    );
};