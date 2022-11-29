import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin">
                <span className="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loading;