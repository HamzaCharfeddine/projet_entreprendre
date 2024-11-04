import React from 'react';

export const ScanningProgress = ({ progress, message }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#1e40af', marginBottom: '20px' }}>
                Scanning in Progress
            </h1>
            <div
                style={{
                    width: '100%',
                    height: '20px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '10px',
                    marginBottom: '20px',
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#2563eb',
                        borderRadius: '10px',
                        transition: 'width 0.5s ease-in-out',
                    }}
                ></div>
            </div>
            <p style={{ color: '#475569' }}>{message}</p>
        </div>
    );
};