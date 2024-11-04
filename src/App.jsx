import React, { useState, useEffect } from 'react';
import { SecurityScoreIndicator } from './components/SecurityScanner/SecurityScoreIndicator';
import { RiskCategories } from './components/SecurityScanner/RiskCategories';
import { ScanningProgress } from './components/SecurityScanner/ScanningProgress';
import { ScanSelection } from './components/SecurityScanner/ScanSelection';
import { scanningMessages } from './constants/scanningMessages';
import { vulnerabilities } from './constants/mockData';
import { styles } from './components/SecurityScanner/styles';
import './style.css';

export function App() {
    const [stage, setStage] = useState('selection');
    const [scanProgress, setScanProgress] = useState(0);
    const [scanningMessage, setScanningMessage] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [inputUrl, setInputUrl] = useState('');
    const securityScore = 75;
    const [expandedRiskCategory, setExpandedRiskCategory] = useState(null);

    useEffect(() => {
        let progressInterval;
        let messageInterval;

        if (stage === 'scanning') {
            let progress = 0;
            let messageIndex = 0;

            progressInterval = setInterval(() => {
                progress += 3;
                setScanProgress(progress);

                if (progress >= 100) {
                    clearInterval(progressInterval);
                    clearInterval(messageInterval);
                    setStage('results');
                }
            }, 500);

            messageInterval = setInterval(() => {
                if (messageIndex < scanningMessages.length) {
                    setScanningMessage(scanningMessages[messageIndex]);
                    messageIndex++;
                }
            }, 1000);
        }

        return () => {
            if (progressInterval) clearInterval(progressInterval);
            if (messageInterval) clearInterval(messageInterval);
        };
    }, [stage]);

    const handleStartScan = () => {
            setStage('scanning');
    };

    if (stage === 'selection') {
        return (
            <div style={styles.container}>
                <ScanSelection
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    inputUrl={inputUrl}
                    setInputUrl={setInputUrl}
                    handleStartScan={handleStartScan}
                />
            </div>
        );
    }

    if (stage === 'scanning') {
        return (
            <div style={styles.container}>
                <ScanningProgress progress={scanProgress} message={scanningMessage} />
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <h1 style={{ color: '#1e40af' }}>Security Scan Results</h1>
                <button
                    onClick={() => {
                        setStage('selection');
                        setExpandedRiskCategory(null);
                    }}
                    style={styles.button}
                >
                    New Scan
                </button>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <SecurityScoreIndicator score={securityScore} />
            </div>

            <RiskCategories
                vulnerabilities={vulnerabilities}
                expandedRiskCategory={expandedRiskCategory}
                setExpandedRiskCategory={setExpandedRiskCategory}
            />
        </div>
    );
}

export default App;
