import React, { useState } from 'react';
import './style.css';
export function App() {
  const [securityScore, setSecurityScore] = useState(75);
  const [scanning, setScanning] = useState(false);

  const vulnerabilities = [
    {
      severity: 'high',
      title: 'Exposed SSL Certificate',
      description: 'Your SSL certificate is visible',
      recommendation:
        'Store SSL certificates in secure environment variables or a key management service',
    },
    {
      severity: 'medium',
      title: 'Open Ports Detected',
      description: 'Ports 80 and 443 are exposed to public access',
      recommendation:
        'Configure your firewall to restrict access to necessary services only',
    },
    {
      severity: 'low',
      title: 'Cookie Security',
      description: 'Secure flag not set on session cookies',
      recommendation:
        'Enable secure flag for all session cookies in your application settings',
    },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ fontSize: '24px', color: '#2563eb' }}>🛡️</div>
          <h1 style={{ fontSize: '24px', margin: 0 }}>SaaSpect</h1>
        </div>
        <button
          style={{
            padding: '8px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ⚙️
        </button>
      </div>

      {/* Security Score Card */}
      <div
        style={{
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          marginBottom: '20px',
          backgroundColor: 'white',
        }}
      >
        <h2 style={{ margin: '0 0 15px 0' }}>Security Score</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb' }}
          >
            {securityScore}/100
          </div>
          <button
            onClick={() => setScanning(!scanning)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            {scanning ? 'Scanning...' : 'Start Scan'}
          </button>
        </div>
      </div>

      {/* Risk Summary */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {[
          { label: 'High Risk', count: 1, color: '#ef4444' },
          { label: 'Medium Risk', count: 1, color: '#f59e0b' },
          { label: 'Low Risk', count: 1, color: '#3b82f6' },
        ].map((risk, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              backgroundColor: 'white',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: risk.color }}>⚠️</span>
              <div>
                <div style={{ color: '#6b7280', fontSize: '14px' }}>
                  {risk.label}
                </div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {risk.count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vulnerabilities List */}
      <div
        style={{
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          backgroundColor: 'white',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Detected Vulnerabilities</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {vulnerabilities.map((vuln, index) => (
            <div
              key={index}
              style={{
                padding: '15px',
                borderRadius: '6px',
                border: `1px solid ${
                  vuln.severity === 'high'
                    ? '#ef4444'
                    : vuln.severity === 'medium'
                    ? '#f59e0b'
                    : '#3b82f6'
                }`,
                backgroundColor: '#fff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    color:
                      vuln.severity === 'high'
                        ? '#ef4444'
                        : vuln.severity === 'medium'
                        ? '#f59e0b'
                        : '#3b82f6',
                  }}
                >
                  ⚠️
                </span>
                <h3 style={{ margin: 0 }}>{vuln.title}</h3>
              </div>
              <p style={{ margin: '10px 0', color: '#6b7280' }}>
                {vuln.description}
              </p>
              <div>
                <strong style={{ fontSize: '14px', color: '#374151' }}>
                  Recommendation:
                </strong>
                <p
                  style={{
                    margin: '5px 0',
                    fontSize: '14px',
                    color: '#6b7280',
                  }}
                >
                  {vuln.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Features */}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          borderRadius: '8px',
          background: 'linear-gradient(to right, #2563eb, #7c3aed)',
          color: 'white',
        }}
      >
        <h3 style={{ margin: '0 0 15px 0' }}>Upgrade to Premium</h3>
        <p style={{ margin: '0 0 15px 0' }}>
          Get access to advanced security features:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
          <li style={{ marginBottom: '8px' }}>Deep scan capabilities</li>
          <li style={{ marginBottom: '8px' }}>Custom security policies</li>
          <li style={{ marginBottom: '8px' }}>24/7 threat monitoring</li>
        </ul>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#2563eb',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}

export default App;
