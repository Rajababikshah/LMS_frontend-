import React from 'react';
import InstructorSidebar from './InstructorSidebar';
import './InstructorEarning.css';
import avatar1 from './assets/avatar1.jpg';

export default function InstructorEarning(){
  return (
    <div className="instructor-dashboard-page">
      <div className="dashboard-flex-layout">
        <InstructorSidebar />
        <main className="dashboard-main-content">
          <div className="instructor-dashboard-header">
            <div className="dashboard-header-left">
              <span className="dashboard-greeting">Good Morning</span>
              <h1 className="dashboard-title">Earning</h1>
            </div>
            <div className="dashboard-header-right">
              <div className="dashboard-search-bar">
                <span className="dashboard-search-icon">🔍</span>
                <input type="text" placeholder="Search" className="dashboard-search-input" />
              </div>
              <span className="dashboard-profile-icon"><img src={avatar1} alt="Instructor" /></span>
            </div>
          </div>

          

          <div className="earning-stats-grid">
            <div className="earning-stat">
              <div className="stat-icon-box">📦</div>
              <div className="stat-text">
                <div className="stat-value">$13,804.00</div>
                <div className="stat-label">Total Revenue</div>
              </div>
            </div>
            <div className="earning-stat">
              <div className="stat-icon-box">💳</div>
              <div className="stat-text">
                <div className="stat-value">$16,593.00</div>
                <div className="stat-label">Current Balance</div>
              </div>
            </div>
            <div className="earning-stat">
              <div className="stat-icon-box">🏧</div>
              <div className="stat-text">
                <div className="stat-value">$13,184.00</div>
                <div className="stat-label">Total Withdrawals</div>
              </div>
            </div>
            <div className="earning-stat">
              <div className="stat-icon-box">👑</div>
              <div className="stat-text">
                <div className="stat-value">$162.00</div>
                <div className="stat-label">Today Revenue</div>
              </div>
            </div>
          </div>

          <div className="earning-main-grid">
            <div className="earning-chart-panel">
              <div className="panel-header">Statistic <span className="panel-sub">Revenue</span></div>
              <div className="chart-area-wrapper">
                <div className="chart-area">
                  <svg width="100%" height="220" viewBox="0 0 800 220" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#e6fcef" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,120 C80,80 160,140 240,100 C320,60 400,100 480,80 C560,60 640,120 720,90 L800,90 L800,220 L0,220 Z" fill="url(#g)" />
                    <polyline points="0,120 80,80 160,140 240,100 320,60 400,100 480,80 560,60 640,120 720,90 800,90" fill="none" stroke="#10b981" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                  <div className="chart-x-labels">
                    <span>Aug 01</span>
                    <span>Aug 10</span>
                    <span>Aug 20</span>
                    <span>Aug 31</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="earning-side-panel">
              <div className="card payment-card">
                <div className="visa-label">VISA</div>
                <div className="card-number">4855 •••• •••• ••••</div>
                <div className="card-meta">
                  <div>04/24</div>
                  <div>Vako Shvili</div>
                </div>
              </div>

              <div className="add-card">+ Add new card</div>
            </aside>
            {/* Withdraw section moved here so it appears below the statistics chart */}
            <div className="withdraw-grid" style={{gridColumn:'1 / -1'}}>
              <div className="withdraw-panel">
                <div className="withdraw-title">Withdraw your money</div>
                <div className="payment-methods">
                  <div className="method selected">
                    <div className="method-left">
                      <div className="method-brand">VISA</div>
                      <div className="method-number">4855 **** **** ****</div>
                    </div>
                    <div className="method-right">04/24 &nbsp; Vako Shvili</div>
                  </div>
                  <div className="method">
                    <div className="method-left">
                      <div className="method-brand">Mastercard</div>
                      <div className="method-number">2855 **** **** ****</div>
                    </div>
                    <div className="method-right">04/24 &nbsp; Vako Shvili</div>
                  </div>
                  <div className="method note">
                    <div className="method-left">PayPal</div>
                    <div className="method-right">You will be redirected to the PayPal site after reviewing your order.</div>
                  </div>
                </div>

                <div className="withdraw-current">
                  <div className="balance">$16,593.00</div>
                  <div className="balance-label">Current Balance</div>
                  <button className="withdraw-btn">Withdraw Money</button>
                </div>
              </div>

              <div className="withdraw-history">
                <div className="withdraw-title">Withdraw History</div>
                <table className="history-table">
                  <thead>
                    <tr><th>DATE</th><th>METHOD</th><th>AMOUNT</th><th>STATUS</th><th></th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>21 Sep, 2021 at 2:14 AM</td>
                      <td>Mastercards</td>
                      <td>American Express</td>
                      <td><span className="status pending">Pending</span></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>21 Sep, 2021 at 2:14 AM</td>
                      <td>Visa</td>
                      <td>American Express</td>
                      <td><span className="status pending">Pending</span></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>21 Sep, 2021 at 2:14 AM</td>
                      <td>Visa</td>
                      <td>American Express</td>
                      <td><span className="status completed">Completed</span></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>21 Sep, 2021 at 2:14 AM</td>
                      <td>Mastercards</td>
                      <td>American Express</td>
                      <td><span className="status canceled">Canceled</span></td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
