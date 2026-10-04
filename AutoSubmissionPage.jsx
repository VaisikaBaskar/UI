import React from 'react';
import './AutoSubmissionPage.css';

/**
 * AutoSubmissionPage.jsx
 * Standalone Test Auto-Submitted Page Component for InterviewOS.
 * Reuses the exact layout, design system, typography, and buttons of the Assessment Submitted page.
 *
 * @param {Object} props
 * @param {string} [props.assessmentName='ASSESSMENT 03 · SECTION: APTITUDE'] - Assessment title and section
 * @param {string} [props.submissionTimestamp='OCTOBER 12, 2026 AT 10:28:45 AM'] - Recorded submission date & time
 * @param {number} [props.answersSaved=19] - Total saved candidate answers count
 * @param {number} [props.totalQuestions=20] - Total assessment questions count
 * @param {number} [props.unansweredCount=1] - Total unanswered questions count
 * @param {number} [props.violations=3] - Total proctoring violations registered
 * @param {string} [props.timeConsumed='18M 45S (OF 20M ALLOCATED)'] - Recorded section time consumed
 * @param {string} [props.candidateId='STU-8492'] - Identifier for candidate session
 * @param {string} [props.overviewUrl='assessment-overview-wireframe.html'] - Navigation destination for overview
 * @param {string} [props.dashboardUrl='student-dashboard-wireframe.html'] - Navigation destination for dashboard
 * @param {string} [props.submissionUrl='submission-confirmation-wireframe.html'] - Navigation destination for receipt
 * @param {Function} [props.onBackOverview] - Optional callback
 * @param {Function} [props.onBackDashboard] - Optional callback
 * @param {Function} [props.onViewSubmission] - Optional callback
 */
export default function AutoSubmissionPage({
  assessmentName = 'ASSESSMENT 03 · SECTION: APTITUDE',
  submissionTimestamp = 'OCTOBER 12, 2026 AT 10:28:45 AM',
  answersSaved = 19,
  totalQuestions = 20,
  unansweredCount = 1,
  violations = 3,
  timeConsumed = '18M 45S (OF 20M ALLOCATED)',
  candidateId = 'STU-8492',
  overviewUrl = 'assessment-overview-wireframe.html',
  dashboardUrl = 'student-dashboard-wireframe.html',
  submissionUrl = 'submission-confirmation-wireframe.html',
  onBackOverview,
  onBackDashboard,
  onViewSubmission,
}) {
  return (
    <div className="auto-submission-root auto-submission-page">
      {/* Sticky Site Header (Identical to Assessment Submitted Page) */}
      <header className="site-header auto-submission-header">
        <div className="header-inner auto-submission-header-inner">
          <a
            className="logo-lockup auto-submission-logo-lockup"
            href={overviewUrl}
            aria-label="InterviewOS home"
          >
            <div className="logo-icon auto-submission-logo-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>
            <div className="logo-text-block auto-submission-logo-text-block">
              <span className="logo-name auto-submission-logo-name">InterviewOS</span>
              <span className="logo-sub auto-submission-logo-sub">Assessment 03 / Section 01</span>
            </div>
          </a>

          {/* Top Right Small Uppercase Technical Label */}
          <div className="header-right-tag auto-submission-header-right-tag">
            PROCTORING VIOLATION &middot; SESSION CLOSED &middot; CANDIDATE: {candidateId}
          </div>
        </div>
      </header>

      {/* Main Centered Content (Identical container to Assessment Submitted page) */}
      <main className="auto-submission-main">
        <div
          className="confirmation-card auto-submission-card"
          role="region"
          aria-labelledby="auto-submission-heading"
        >
          {/* Minimal Neubrutalist Visual Indicator at top (Same yellow square success-style box) */}
          <div className="success-icon-box" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          {/* Technical Status Badge: AUTO-SUBMITTED in InterviewOS Yellow Theme */}
          <div className="status-badge auto-submission-status-badge">
            <span className="status-badge-dot"></span>
            <span>AUTO-SUBMITTED</span>
          </div>

          {/* Main Heading (Black, Same typography and size as ASSESSMENT SUBMITTED) */}
          <h1 className="confirm-heading auto-submission-heading" id="auto-submission-heading">
            TEST AUTO-SUBMITTED
          </h1>

          {/* Subtitle: Neutral text color, replaced with PROCTORING VIOLATION */}
          <p className="confirm-sub auto-submission-confirm-sub">
            PROCTORING VIOLATION
          </p>

          {/* Single Alert Box: Pale red background, dark red border, black offset shadow */}
          <div className="alert-box auto-submission-alert-box" role="alert">
            <div className="alert-headline auto-submission-alert-headline">
              You exited fullscreen {violations} times.
            </div>
            <div className="alert-subtext auto-submission-alert-subtext">
              Your test has been automatically submitted due to repeated fullscreen violations.
            </div>
          </div>

          {/* Assessment Details Box (Exact 5-row structure from Assessment Submitted page) */}
          <div
            className="summary-matrix auto-submission-summary-matrix"
            aria-label="Auto-Submission Details"
          >
            <div className="summary-row auto-submission-summary-row">
              <span className="summary-label auto-submission-summary-label">ASSESSMENT:</span>
              <span className="summary-val auto-submission-summary-val">{assessmentName}</span>
            </div>
            <div className="summary-row auto-submission-summary-row">
              <span className="summary-label auto-submission-summary-label">SUBMISSION TIMESTAMP:</span>
              <span className="summary-val auto-submission-summary-val">{submissionTimestamp}</span>
            </div>
            <div className="summary-row auto-submission-summary-row">
              <span className="summary-label auto-submission-summary-label">ANSWERED QUESTIONS:</span>
              <span className="summary-val auto-submission-summary-val" style={{ color: 'var(--green)' }}>
                {answersSaved} OF {totalQuestions} QUESTIONS
              </span>
            </div>
            <div className="summary-row auto-submission-summary-row">
              <span className="summary-label auto-submission-summary-label">UNANSWERED QUESTIONS:</span>
              <span className="summary-val auto-submission-summary-val" style={{ color: 'var(--gray-600)' }}>
                {unansweredCount} {unansweredCount === 1 ? 'QUESTION' : 'QUESTIONS'}
              </span>
            </div>
            <div className="summary-row auto-submission-summary-row">
              <span className="summary-label auto-submission-summary-label">TIME CONSUMED:</span>
              <span className="summary-val auto-submission-summary-val">{timeConsumed}</span>
            </div>
          </div>

          {/* Action Navigation CTAs (Exact buttons, typography, borders, shadows & hover from Assessment Submitted page) */}
          <div className="cta-stack auto-submission-cta-stack">
            <a
              href={overviewUrl}
              onClick={onBackOverview ? (e) => { e.preventDefault(); onBackOverview(); } : undefined}
              className="btn-primary auto-submission-btn-primary"
              id="btn-back-overview"
            >
              <span>BACK TO ASSESSMENT OVERVIEW</span>
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2.5, fill: 'none' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href={dashboardUrl}
              onClick={onBackDashboard ? (e) => { e.preventDefault(); onBackDashboard(); } : undefined}
              className="btn-secondary auto-submission-btn-secondary"
              id="btn-back-dashboard"
            >
              <span>RETURN TO DASHBOARD</span>
            </a>

            {/* Preserved View Submission Action */}
            <a
              href={submissionUrl}
              onClick={onViewSubmission ? (e) => { e.preventDefault(); onViewSubmission(); } : undefined}
              className="btn-secondary auto-submission-btn-secondary"
              id="btn-view-submission"
            >
              <span>VIEW SUBMISSION &rarr;</span>
            </a>
          </div>
        </div>
      </main>

      {/* Production Footer (Identical to Assessment Submitted Page) */}
      <footer className="site-footer auto-submission-footer">
        <div className="site-footer-inner auto-submission-footer-inner">
          <div className="site-footer-left auto-submission-footer-left">
            <span className="site-footer-brand auto-submission-footer-brand">INTERVIEWOS &copy; 2026</span>
            <span className="site-footer-tagline auto-submission-footer-tagline">Built for better technical interviews</span>
          </div>
          <nav className="site-footer-links auto-submission-footer-links" aria-label="Site legal links">
            <a href="#" className="site-footer-link auto-submission-footer-link">Privacy</a>
            <span className="site-footer-sep auto-submission-footer-sep">&middot;</span>
            <a href="#" className="site-footer-link auto-submission-footer-link">Terms</a>
            <span className="site-footer-sep auto-submission-footer-sep">&middot;</span>
            <a href="#" className="site-footer-link auto-submission-footer-link">Security</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
