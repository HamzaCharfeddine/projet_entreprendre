import React from 'react';

export const SecurityScoreIndicator = ({ score }) => {
    const greenToRed = `rgb(${255 * (1 - score / 100)}, ${255 * (score / 100)}, 0)`;

    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: greenToRed,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '24px',
            }}
        >
            {score}
        </div>
    );
};