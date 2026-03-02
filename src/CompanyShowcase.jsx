import React from "react";
import "./CompanyShowcase.css";

const CompanyShowcase = () => (
  <div className="company-layout">
    {/* Top Section: Left and Right Columns */}
    <div className="company-top">
      <div className="company-top-left">
        <h2>We Just keep growing<br />with 6.3k Companies</h2>
        <p>Nullam egestas tellus at enim ornare tristique.<br />Class aptent taciti sociosqu ad litora torquent</p>
      </div>
      <div className="company-top-right">
        <div className="company-logos-grid">
          {[
            { name: "Netflix", file: "netflix.png" },
            { name: "YouTube", file: "youtube.png" },
            { name: "Google", file: "google.png" },
            { name: "Lenovo", file: "lenovo.png" },
            { name: "Slack", file: "slack.png" },
            { name: "Verizon", file: "verizon.png" },
            { name: "Lexmark", file: "lexmark.png" },
            { name: "Microsoft", file: "microsoft.png" }
          ].map(({ name, file }) => (
            <div className="company-logo-card" key={name}>
              <img src={require(`./assets/${file}`)} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Bottom Section: Full Width Stats */}
    <div className="company-bottom">
      <div className="company-stats">
        <div><span className="stat-main orange"><svg width="24" height="24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> 67.1k</span><span>Students</span></div>
        <div><span className="stat-main blue"><svg width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> 26k</span><span>Certified Instructor</span></div>
        <div><span className="stat-main red"><svg width="24" height="24" fill="none" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> 72</span><span>Country Language</span></div>
        <div><span className="stat-main green"><svg width="24" height="24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2l4-4"/></svg> 99.9%</span><span>Success Rate</span></div>
        <div><span className="stat-main gold"><svg width="24" height="24" fill="none" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 8v8M8 8v8"/></svg> 57</span><span>Trusted Companies</span></div>
      </div>
    </div>
  </div>
);

export default CompanyShowcase;
