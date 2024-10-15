// app/landing/page.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-tr from-indigo-600 to-gray-400">
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow text-lg">
        <h2 className="text-2xl font-bold mb-4">Project Overview 📽️</h2>
        <p>The Vulnerability Management Application is designed to help security professionals, developers, and IT teams identify, understand, and remediate common vulnerabilities in software applications. This project serves as a centralized repository of known vulnerabilities, offering detailed descriptions, examples of exploitable code, and suggested fixes. By fostering a better understanding of these vulnerabilities, the application aims to enhance the overall security posture of software products and contribute to a safer digital environment.</p>
      </div>
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow text-lg">
        <h2 className="text-2xl font-bold mb-2">How It Works ⚙️</h2>
        <p>The application functions by aggregating information about various vulnerabilities into a user-friendly interface. Users can navigate through a list of vulnerabilities, which are presented in a grid format for easy access. Each entry includes:</p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Title:</strong> The name of the vulnerability.</li>
          <li><strong>Description:</strong> A detailed explanation of the vulnerability, including its potential impact.</li>
          <li><strong>Code Examples:</strong> Snippets of code that illustrate how the vulnerability may be exploited.</li>
          <li><strong>Fix Recommendations:</strong> Guidance on how to mitigate the vulnerability.</li>
          <li><strong>Difficulty Rating:</strong> An assessment of how easy it is to exploit the vulnerability.</li>
          <li><strong>Exploitation Status:</strong> An indication of whether the vulnerability is actively being exploited in the wild.</li>
        </ul>
      </div>
      <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Technology Used 🧑‍💻</h2>
        <p>This application leverages a modern technology stack to ensure performance, security, and scalability. Key technologies used include:</p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Frontend:</strong>
            <ul className="list-disc list-inside">
              <li>React.js: For building dynamic and interactive user interfaces.</li>
              <li>Tailwind CSS: For styling, allowing for responsive and customizable designs.</li>
            </ul>
          </li>
          <li><strong>Backend:</strong>
            <ul className="list-disc list-inside">
              <li>Django: A robust web framework for developing the API that serves the vulnerability data.</li>
              <li>Django REST Framework: For creating RESTful APIs to facilitate communication between the frontend and backend.</li>
            </ul>
          </li>
          <li><strong>Database:</strong>
            <ul className="list-disc list-inside">
              <li>PostgreSQL/MySQL: For storing vulnerability data and related information.</li>
            </ul>
          </li>
          <li><strong>Version Control:</strong>
            <ul className="list-disc list-inside">
              <li>Git: For managing code changes and collaboration among developers.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Expected Output 👀</h2>
        <p>Upon deployment, users will be able to:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Browse a comprehensive list of vulnerabilities.</li>
          <li>Access detailed information on each vulnerability, including its impact and mitigation strategies.</li>
          <li>Copy code examples and fixes to their clipboard for ease of use.</li>
          <li>Utilize the application as a reference guide in software development and security practices.</li>
          <li>Contribute to the repository by submitting new vulnerabilities or fixes, thus enriching the community knowledge base.</li>
        </ul>
      </div>
      <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Cybersecurity ❌</h2>
        <p>The Vulnerability Management Application is highly relevant to the field of cybersecurity, as it serves as an educational tool for understanding common vulnerabilities that affect software applications. In an era where cyber threats are increasing in sophistication and frequency, it is essential for developers and security professionals to stay informed about the vulnerabilities that can be exploited by malicious actors. This application promotes awareness of these vulnerabilities, enabling users to implement best practices in secure coding and risk management, ultimately reducing the attack surface of their applications.</p>
      </div>
      <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Related Methods 🔧</h2>
        <p>The application incorporates several cybersecurity methodologies and best practices, including:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Static Code Analysis: Analyzing code at rest to identify potential vulnerabilities before deployment.</li>
          <li>Dynamic Application Security Testing (DAST): Testing applications while they are running to discover vulnerabilities that may not be evident in the code itself.</li>
          <li>Continuous Integration/Continuous Deployment (CI/CD): Integrating security checks into the development pipeline to ensure that vulnerabilities are identified and addressed early in the development process.</li>
          <li>Secure Coding Practices: Educating developers on best practices for writing secure code, including input validation, error handling, and safe data storage techniques.</li>
          <li>Vulnerability Management Frameworks: Aligning with frameworks such as OWASP (Open Web Application Security Project) to stay up-to-date with industry standards and practices for vulnerability management.</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
