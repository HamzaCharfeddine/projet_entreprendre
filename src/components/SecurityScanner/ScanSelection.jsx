import React from 'react';

export const ScanSelection = ({
                                  selectedType,
                                  setSelectedType,
                                  inputUrl,
                                  setInputUrl,
                                  handleStartScan
                              }) => {
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div>
            <h1 style={{ color: '#1e40af', marginBottom: '20px' }}>SaaSpect</h1>

            <div style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    Select Scan Type:
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <button
                        onClick={() => setSelectedType('localhost')}
                        style={{
                            ...buttonStyle,
                            backgroundColor: selectedType === 'localhost' ? '#2563eb' : '#e2e8f0',
                            color: selectedType === 'localhost' ? 'white' : '#2563eb',
                        }}
                    >
                        Localhost
                    </button>
                    <button
                        onClick={() => setSelectedType('hosted')}
                        style={{
                            ...buttonStyle,
                            backgroundColor: selectedType === 'hosted' ? '#2563eb' : '#e2e8f0',
                            color: selectedType === 'hosted' ? 'white' : '#2563eb',
                        }}
                    >
                        Hosted Website
                    </button>
                </div>
            </div>

            {selectedType === 'hosted' && (
                <input
                    type="text"
                    placeholder="Enter website URL"
                    value={inputUrl}
                    onChange={e => setInputUrl(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                    }}
                />
            )}

            <button
                onClick={handleStartScan}
                disabled={!selectedType || (selectedType === 'hosted' && !inputUrl)}
                style={{
                    ...buttonStyle,
                    opacity: !selectedType || (selectedType === 'hosted' && !inputUrl) ? 0.5 : 1,
                }}
            >
                Start Scanning
            </button>
        </div>
    );
};