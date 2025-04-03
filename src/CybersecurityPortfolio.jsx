
import { useState } from "react";

export default function CybersecurityPortfolio() {
  const [activeSection, setActiveSection] = useState("");

  const sectionLabels = {
    "data-protection": "Application & Data Protection",
    "identity-access": "Identity and Access Management",
    "infrastructure-security": "Infrastructure & Endpoint Security",
    "threat-management": "Threat Management & Response",
    "cloud-security": "Cloud Security"
  };

  const sections = {
    "data-protection": [
      {
        title: "Vulnerability Assessment and Penetration Testing (VAPT)",
        description: "VAPT involves identifying and addressing security vulnerabilities through systematic assessments and simulated attacks on applications, networks, and systems."
      },
      {
        title: "Data Security",
        description: "Ensures the protection of data at rest and in transit through encryption, access controls, and continuous monitoring. Includes solutions like Varonis Data Classification, Microsoft Defender for Cloud Apps, Netskope CASB for SaaS and IaaS visibility and control."
      },
      {
        title: "Data Wiping with Authorized Certificate",
        description: "Ensures sensitive data is irrecoverable from decommissioned systems through certified data wiping processes. Utilizes Blancco Drive Eraser to securely erase data, issuing NIST 800-88 compliant certificates."
      }
    ],
    "identity-access": [
      {
        title: "Identity and Access Management (IAM)",
        description: "Governs user identities and access levels using SSO, MFA, and access lifecycle automation. Integrates with PING IAM, Okta, Microsoft SSO, and Privileged Access Management (PAM) tools."
      },
      {
        title: "Zero Trust Architecture (ZTA) Assessment",
        description: "Evaluates controls across identity, device, workload, and network layers using Zero Trust principles, ensuring strict verification before granting access. Leverages CISA’s Zero Trust Maturity Model for implementation."
      }
    ],
    "infrastructure-security": [
      {
        title: "Vulnerability Management",
        description: "Focuses on continuous identification and remediation of vulnerabilities within infrastructure. Uses VMDR to auto-discover hosts and flag CVEs, integrating with Jira or ServiceNow for remediation tracking."
      },
      {
        title: "Network and Infrastructure Security",
        description: "Defends against intrusions and lateral movement through segmentation, NAC, firewalls, IDS/IPS, WAF, and ELK Stack monitoring for anomaly detection."
      },
      {
        title: "Endpoint Protection",
        description: "Protects endpoints against malware, exploits, and unauthorized changes using Cortex XDR, CrowdStrike Falcon, and ThreatLocker for behavioral analytics and automated response."
      }
    ],
    "threat-management": [
      {
        title: "Security Awareness & Training",
        description: "Reduces human risk by educating users about phishing, malware, and social engineering tactics. Uses Proofpoint or KnowBe4 for simulated phishing and adaptive learning paths."
      },
      {
        title: "Threat Intelligence Services",
        description: "Utilizes external and internal feeds to identify IOCs and anticipate attacker behavior. Gathers threat intelligence from Recorded Future or FireEye and feeds IOCs into Cortex XDR or ELK SIEM."
      },
      {
        title: "Incident Response Plan (IRP)",
        description: "Outlines steps for detection, containment, eradication, and recovery from incidents. Includes SOPs for ransomware isolation and incident handling using automation and forensics."
      }
    ],
    "cloud-security": [
      {
        title: "Cloud Security for AWS & Azure",
        description: \`
          IAM Controls: AWS IAM, Azure AD, MFA\n
          Network Security: NSGs, VPCs, firewalls, DDoS protection\n
          Data Protection: KMS, Key Vault, DLP\n
          Monitoring & Logging: GuardDuty, Sentinel, CloudTrail\n
          Compliance: CIS/NIST baselines, AWS Config, Azure Policy\`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">SLED IT Inc.</h1>
        <p className="text-lg">Secure your digital landscape across Onprem, App, Data & Cloud security</p>
        <div className="text-sm text-slate-400 mt-2">Empowering organizations with trust, intelligence, and impenetrable protection.</div>
      </header>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          className="px-4 py-2 rounded-lg font-semibold transition bg-gray-600 hover:bg-gray-700"
          onClick={() => setActiveSection("")}
        >
          Home
        </button>
        {Object.keys(sections).map(key => (
          <button
            key={key}
            className={\`px-4 py-2 rounded-lg font-semibold transition \${activeSection === key ? "bg-blue-600" : "bg-blue-500 hover:bg-blue-600"}\`}
            onClick={() => setActiveSection(key)}
          >{sectionLabels[key]}</button>
        ))}
      </div>

      {activeSection && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-sky-400 border-b border-slate-600 pb-2 mb-4">
            {sectionLabels[activeSection].replace(/\b\w/g, c => c.toUpperCase())}
          </h2>
          {sections[activeSection].map(({ title, description }, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl shadow p-6 mb-4">
              <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
              <p className="text-slate-200 whitespace-pre-line">{description}</p>
            </div>
          ))}
        </div>
      )}

      {!activeSection && (
        <div className="text-center text-slate-400">Select a portfolio category above to view details.</div>
      )}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-sky-400 border-b border-slate-600 pb-2 mb-4">Contact Us</h2>
        <form action="#" method="POST" className="bg-slate-800 p-6 rounded-xl shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-300 mb-1">Name</label>
            <input type="text" name="name" id="name" required className="w-full px-3 py-2 rounded bg-slate-700 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-300 mb-1">Email</label>
            <input type="email" name="email" id="email" required className="w-full px-3 py-2 rounded bg-slate-700 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-slate-300 mb-1">Message</label>
            <textarea name="message" id="message" rows="5" required className="w-full px-3 py-2 rounded bg-slate-700 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">Send</button>
        </form>
      </div>
    </div>
  );
}
