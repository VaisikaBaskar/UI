import React from 'react';
import './AssessmentAutoSubmitted.css';

/**
 * AssessmentAutoSubmitted.jsx
 * Standalone Assessment Auto-Submitted Page Component for InterviewOS.
 * Reuses the exact layout, design system, typography, and buttons of the Assessment Submitted page.
 *
 * @param {Object} props
 * @param {string} [props.assessmentName='ASSESSMENT 03 · SECTION: APTITUDE'] - Assessment title and section
 * @param {string} [props.submissionTimestamp='OCTOBER 12, 2026 AT 10:28:45 AM'] - Recorded submission date & time
 * @param {number} [props.answersSaved=19] - Number of candidate answers saved
 * @param {number} [props.totalQuestions=20] - Total assessment questions count
 * @param {number} [props.unansweredCount=1] - Total unanswered questions count
 * @param {number} [props.fullscreenViolations=3] - Count of fullscreen exit events
 * @param {string} [props.timeConsumed='18M 45S (OF 20M ALLOCATED)'] - Recorded section time consumed
 * @param {string} [props.candidateId='STU-8492'] - Identifier for candidate session
 * @param {string} [props.overviewUrl='assessment-overview-wireframe.html'] - Target overview URL
 * @param {string} [props.dashboardUrl='student-dashboard-wireframe.html'] - Target dashboard URL
 * @param {string} [props.destinationUrl='submission-confirmation-wireframe.html'] - Target submission URL
 * @param {Function} [props.onBackOverview] - Optional callback
 * @param {Function} [props.onBackDashboard] - Optional callback
 * @param {Function} [props.onViewSubmission] - Optional callback
 */
export default function AssessmentAutoSubmitted({
  assessmentName = 'ASSESSMENT 03 · SECTION: APTITUDE',
  submissionTimestamp = 'OCTOBER 12, 2026 AT 10:28:45 AM',
  answersSaved = 19,
  totalQuestions = 20,
  unansweredCount = 1,
  fullscreenViolations = 3,
  timeConsumed = '18M 45S (OF 20M ALLOCATED)',
  candidateId = 'STU-8492',
  overviewUrl = 'assessment-overview-wireframe.html',
  dashboardUrl = 'student-dashboard-wireframe.html',
  destinationUrl = 'submission-confirmation-wireframe.html',
  onBackOverview,
  onBackDashboard,
  onViewSubmission,
}) {
  return (
    <div className="auto-submit-root auto-submission-page">
      {/* Sticky Site Header (Identical to Assessment Submitted Page) */}
      <header className="site-header auto-submit-header">
        <div className="header-inner">
          <a className="logo-lockup" href={overviewUrl} aria-label="InterviewOS home">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>
            <div className="logo-text-block">
              <span className="logo-name">InterviewOS</span>
              <span className="logo-sub">Assessment 03 / Section 01</span>
            </div>
          </a>

          {/* 6. TOP RIGHT LABEL: PROCTORING VIOLATION */}
          <div className="header-right-tag" id="header-right-label">
            PROCTORING VIOLATION &middot; SESSION CLOSED &middot; CANDIDATE: {candidateId}
          </div>
        </div>
      </header>

      {/* Centered Confirmation Main Content (Identical layout to Assessment Submitted page) */}
      <main>
        <div className="confirmation-card" role="region" aria-labelledby="auto-submit-heading">

          {/* 1. Yellow square success-style visual at the top (Identical to Assessment Submitted) */}
          <div className="success-icon-box" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          {/* 5. AUTO-SUBMITTED STATUS BADGE (InterviewOS Yellow Theme) */}
          <div className="status-badge" style={{ background: 'var(--yellow)' }}>
            <span className="status-badge-dot" style={{ background: 'var(--black)' }}></span>
            <span>AUTO-SUBMITTED</span>
          </div>

          {/* 2. MAIN TITLE: TEST AUTO-SUBMITTED (Same font, size, weight, black color) */}
          <h1 className="confirm-heading" id="auto-submit-heading">
            TEST AUTO-SUBMITTED
          </h1>

          {/* 3. SUBTITLE: PROCTORING VIOLATION (Same typography, neutral text color, no red) */}
          <p className="confirm-sub">
            PROCTORING VIOLATION
          </p>

          {/* 4. SINGLE ALERT BOX (Pale red background, thin dark red border, black offset shadow) */}
          <div className="alert-box" role="alert">
            <div className="alert-headline">
              You exited fullscreen {fullscreenViolations} times.
            </div>
            <div className="alert-subtext">
              Your test has been automatically submitted due to repeated fullscreen violations.
            </div>
          </div>

          {/* 7. ASSESSMENT DETAILS BOX (Exact 5-row structure from Assessment Submitted page) */}
          <div className="summary-matrix" aria-label="Auto-Submission Details">
            <div className="summary-row">
              <span className="summary-label">ASSESSMENT:</span>
              <span className="summary-val">{assessmentName}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">SUBMISSION TIMESTAMP:</span>
              <span className="summary-val">{submissionTimestamp}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">ANSWERED QUESTIONS:</span>
              <span className="summary-val" style={{ color: 'var(--green)' }}>
                {answersSaved} OF {totalQuestions} QUESTIONS
              </span>
            </div>
            <div className="summary-row">
              <span className="summary-label">UNANSWERED QUESTIONS:</span>
              <span className="summary-val" style={{ color: 'var(--gray-600)' }}>
                {unansweredCount} {unansweredCount === 1 ? 'QUESTION' : 'QUESTIONS'}
              </span>
            </div>
            <div className="summary-row">
              <span className="summary-label">TIME CONSUMED:</span>
              <span className="summary-val">{timeConsumed}</span>
            </div>
          </div>

          {/* 8. BUTTONS (Exact buttons, dimensions, borders, shadows & hover from Assessment Submitted) */}
          <div className="cta-stack">
            {/* Primary button */}
            <a
              href={overviewUrl}
              onClick={onBackOverview ? (e) => { e.preventDefault(); onBackOverview(); } : undefined}
              className="btn-primary"
              id="btn-back-overview"
            >
              <span>BACK TO ASSESSMENT OVERVIEW</span>
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'currentColor', strokeWidth: 2.5, fill: 'none' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Secondary button */}
            <a
              href={dashboardUrl}
              onClick={onBackDashboard ? (e) => { e.preventDefault(); onBackDashboard(); } : undefined}
              className="btn-secondary"
              id="btn-back-dashboard"
            >
              <span>RETURN TO DASHBOARD</span>
            </a>

            {/* Preserved View Submission Action */}
            <a
              href={destinationUrl}
              onClick={onViewSubmission ? (e) => { e.preventDefault(); onViewSubmission(); } : undefined}
              className="btn-secondary"
              id="btn-view-submission"
            >
              <span>VIEW SUBMISSION &rarr;</span>
            </a>
          </div>

        </div>
      </main>

      {/* Production Footer (Identical to Assessment Submitted Page) */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-left">
            <span className="site-footer-brand">INTERVIEWOS &copy; 2026</span>
            <span className="site-footer-tagline">Built for better technical interviews</span>
          </div>
          <nav className="site-footer-links" aria-label="Site legal links">
            <a href="#" className="site-footer-link">Privacy</a>
            <span className="site-footer-sep">&middot;</span>
            <a href="#" className="site-footer-link">Terms</a>
            <span className="site-footer-sep">&middot;</span>
            <a href="#" className="site-footer-link">Security</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
