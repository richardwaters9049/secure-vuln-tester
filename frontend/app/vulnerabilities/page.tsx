// app/vulnerabilities/page.tsx
"use client";
import React, { useEffect, useState } from 'react';

interface Vulnerability {
    id: number;
    title: string;
    description: string;
    code_example: string;
    fix: string;
    difficulty: string;
    is_exploited: boolean;
}

const VulnerabilityList: React.FC = () => {
    const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVulnerabilities = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/vulnerabilities/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVulnerabilities(data);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchVulnerabilities();
    }, []);

    // Function to copy code to clipboard
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Code copied to clipboard!');
        } catch (err) {
            alert('Failed to copy code!');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-6xl font-bold my-6 p-6 text-white text-center">Vulnerability Listings</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {vulnerabilities.length > 0 ? (
                <div>
                    {vulnerabilities.map((vulnerability) => (
                        <div key={vulnerability.id} className="p-8 flex flex-col gap-1 border rounded shadow bg-gray-600 text-white mb-3">
                            <h2 className="text-3xl font-semibold">{vulnerability.title}</h2>
                            <p className="mt-2"><strong>Description:</strong> {vulnerability.description}</p>

                            <p className="mt-4"><strong>Code Example:</strong></p>
                            <div className="relative">
                                <pre className="bg-gray-700 p-4 rounded overflow-x-auto">
                                    <code>{vulnerability.code_example}</code>
                                </pre>
                                <button
                                    onClick={() => copyToClipboard(vulnerability.code_example)}
                                    className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white p-1 rounded"
                                    title="Copy code to clipboard"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6m-3-3v6m-1-6V9m-3-3h6a1 1 0 011 1v4m-2-2H9a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1v-4" />
                                    </svg>
                                </button>
                            </div>

                            <p className="mt-4"><strong>Fix:</strong></p>
                            <div className="relative">
                                <pre className="bg-gray-700 p-4 rounded overflow-x-auto">
                                    <code>{vulnerability.fix}</code>
                                </pre>
                                <button
                                    onClick={() => copyToClipboard(vulnerability.fix)}
                                    className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white p-1 rounded"
                                    title="Copy fix to clipboard"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6m-3-3v6m-1-6V9m-3-3h6a1 1 0 011 1v4m-2-2H9a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1v-4" />
                                    </svg>
                                </button>
                            </div>

                            <p className="mt-4"><strong>Difficulty:</strong> {vulnerability.difficulty}</p>
                            <p className="mt-2"><strong>Exploited:</strong> {vulnerability.is_exploited ? 'Yes' : 'No'}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-white">No vulnerabilities found.</p>
            )}
        </div>
    );
};

export default VulnerabilityList;
