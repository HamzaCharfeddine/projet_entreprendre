import React from 'react';

export const RiskCategories = ({ vulnerabilities, expandedRiskCategory, setExpandedRiskCategory }) => {
    const riskCategories = [
        {
            label: 'High Risk',
            count: vulnerabilities.filter(v => v.severity === 'high').length,
            color: '#ef4444',
            risks: vulnerabilities.filter(v => v.severity === 'high'),
        },
        {
            label: 'Medium Risk',
            count: vulnerabilities.filter(v => v.severity === 'medium').length,
            color: '#f59e0b',
            risks: vulnerabilities.filter(v => v.severity === 'medium'),
        },
        {
            label: 'Low Risk',
            count: vulnerabilities.filter(v => v.severity === 'low').length,
            color: '#3b82f6',
            risks: vulnerabilities.filter(v => v.severity === 'low'),
        },
    ];

    return (
        <div style={{ marginTop: '20px' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                }}
            >
                {riskCategories.map((category, index) => (
                    <div
                        key={index}
                        style={{
                            border: `1px solid ${category.color}`,
                            borderRadius: '8px',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={() =>
                            setExpandedRiskCategory(
                                expandedRiskCategory === category.label
                                    ? null
                                    : category.label
                            )
                        }
                    >
                        <div style={{ color: category.color, fontWeight: 'bold' }}>
                            {category.label}
                        </div>
                        <div>{category.count} Vulnerabilities</div>
                    </div>
                ))}
            </div>
            {expandedRiskCategory && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{expandedRiskCategory} Vulnerabilities</h3>
                    {riskCategories
                        .find(cat => cat.label === expandedRiskCategory)
                        .risks.map((risk, index) => (
                            <div
                                key={index}
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    marginBottom: '10px',
                                }}
                            >
                                <h4>{risk.title}</h4>
                                <p>{risk.description}</p>
                                <strong>Recommendation:</strong>
                                <p>{risk.recommendation}</p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};