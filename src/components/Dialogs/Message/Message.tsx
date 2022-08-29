import React from 'react';

type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div>
            {message}
        </div>
    );
};
