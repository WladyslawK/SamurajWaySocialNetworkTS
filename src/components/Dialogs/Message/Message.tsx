import React from 'react';

type MessageType = {
    id: number
    message: string
}

export const Message: React.FC<MessageType> = ({id, message}) => {
    return (
        <div key={id}>
            {message}
        </div>
    );
};
