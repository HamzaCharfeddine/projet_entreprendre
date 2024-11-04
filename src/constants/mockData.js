export const vulnerabilities = [
    {
        severity: 'high',
        title: 'Exposed SSL Certificate',
        description: 'Your SSL certificate is visible',
        recommendation: 'Store SSL certificates in secure environment variables or a key management service',
    },
    {
        severity: 'medium',
        title: 'Open Ports Detected',
        description: 'Ports 80 and 443 are exposed to public access',
        recommendation: 'Configure your firewall to restrict access to necessary services only',
    },
    {
        severity: 'low',
        title: 'Cookie Security',
        description: 'Secure flag not set on session cookies',
        recommendation: 'Enable secure flag for all session cookies in your application settings',
    },
];