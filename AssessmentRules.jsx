import React, { useState, useCallback, useEffect } from 'react';
import './AssessmentRules.css';

/**
 * AssessmentRules.jsx
 * Standalone Assessment Rules & Regulations Component for InterviewOS.
 * Styled in the authentic neubrutalist developer aesthetic of InterviewOS
 * matching the Assessment Submitted confirmation style:
 * Centered white card panel, 2px solid black borders, hard offset drop shadows,
 * yellow highlights, and Inter font.
 *
 * @param {Object} props
 * @param {string} [props.destinationUrl='test-taking-wireframe.html'] - Destination assessment route
 * @param {string} [props.backUrl='section-overview-wireframe.html'] - Back navigation destination
 * @param {Function} [props.onStartAssessment] - Optional callback when assessment starts
 * @param {Function} [props.onBack] - Optional callback for back navigation
 */
export default function AssessmentRules({
  destinationUrl = 'test-taking-wireframe.html',
  backUrl = 'section-overview-wireframe.html',
  onStartAssessment,
  onBack,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
  }, []);

  useEffect(() => {
    if (!isToastVisible) return;
    const timer = setTimeout(() => {
      setIsToastVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, [isToastVisible]);

  const handleStart = (e) => {
    if (e) e.preventDefault();
    if (!isChecked) {
      showToast('Please check the agreement to proceed.');
      return;
    }

    if (onStartAssessment) {
      onStartAssessment();
      return;
    }

    const searchParams = typeof window !== 'undefined' ? window.location.search || '' : '';
    const target = destinationUrl + searchParams;

    showToast('ENTERING ASSESSMENT ENVIRONMENT...');
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.href = target;
      }
    }, 300);
  };

  const handleBack = (e) => {
    if (onBack) {
      e.preventDefault();
      onBack();
    }
  };

  return (
    <div className="ar-page-wrapper">

      {/* 1. TOP SITE HEADER */}
      <header className="ar-site-header">
        <div className="ar-header-inner">
          <div className="ar-logo-lockup">
            <div className="ar-logo-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>
            <div className="ar-logo-text-block">
              <span className="ar-logo-name">INTERVIEWOS</span>
              <span className="ar-logo-sub">V2.0 / ASSESSMENT RULES</span>
            </div>
          </div>

          <div className="ar-header-right">
            <a
              href={backUrl}
              onClick={handleBack}
              className="ar-header-back-link"
              id="header-back-link"
            >
              &larr; BACK TO SECTION OVERVIEW
            </a>
          </div>
        </div>
      </header>

      {/* 2. MAIN CENTERED WHITE CARD PANEL */}
      <main className="ar-main-container">
        <div className="ar-card-panel">

          {/* PROTOCOL BADGE */}
          <div className="ar-protocol-badge">
            <span className="ar-badge-dot" />
            <span>PROTOCOL V2.0 // PRE-ASSESSMENT DIRECTIVE</span>
          </div>

          {/* TITLE & SUBTITLE SECTION */}
          <div className="ar-title-block">
            <h1 className="ar-main-title" id="main-heading">
              <span>ASSESSMENT RULES</span>
              <span className="ar-heading-accent">&amp; REGULATIONS.</span>
            </h1>
            <p className="ar-subtitle">
              Please read and follow all instructions carefully before starting your assessment.
            </p>
          </div>

          {/* 3. ASSESSMENT SUMMARY MATRIX (4 EQUAL COLUMNS) */}
          <section className="ar-summary-matrix" aria-label="Assessment Parameters Summary">
            <div className="ar-summary-col">
              <span className="ar-summary-label">Assessment Type</span>
              <span className="ar-summary-val">Proctored</span>
            </div>
            <div className="ar-summary-col">
              <span className="ar-summary-label">Camera</span>
              <div className="ar-summary-val-row">
                <span className="ar-summary-val">Required</span>
                <span className="ar-active-chip">ACTIVE</span>
              </div>
            </div>
            <div className="ar-summary-col">
              <span className="ar-summary-label">Microphone</span>
              <div className="ar-summary-val-row">
                <span className="ar-summary-val">Required</span>
                <span className="ar-active-chip">ACTIVE</span>
              </div>
            </div>
            <div className="ar-summary-col">
              <span className="ar-summary-label">Warning Limit</span>
              <span className="ar-summary-val">3 Warnings</span>
            </div>
          </section>

          {/* 4. RULES SECTION (2-COL GRID) */}
          <section className="ar-rules-block" aria-labelledby="rules-heading">
            <div className="ar-rules-header">
              <h2 className="ar-rules-heading" id="rules-heading">
                EXAMINATION GUIDELINES &amp; POLICIES
              </h2>
              <span className="ar-rules-protocol-tag">PROTOCOL V2.0</span>
            </div>

            <div className="ar-rules-grid">
              {/* Left Column: Points 01-05 */}
              <div className="ar-rules-column">
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">01</span>
                  <span className="ar-rule-text">Camera must be ON.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">02</span>
                  <span className="ar-rule-text">Microphone must be ON.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">03</span>
                  <span className="ar-rule-text">Keep your face clearly visible.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">04</span>
                  <span className="ar-rule-text">Ensure proper lighting.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">05</span>
                  <span className="ar-rule-text">Avoid background noise.</span>
                </div>
              </div>

              {/* Right Column: Points 06-10 */}
              <div className="ar-rules-column">
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">06</span>
                  <span className="ar-rule-text">Assessment will start in full-screen mode.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">07</span>
                  <span className="ar-rule-text">Tab switching is prohibited.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">08</span>
                  <span className="ar-rule-text">Application switching is prohibited.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">09</span>
                  <span className="ar-rule-text">Copy and paste are not allowed.</span>
                </div>
                <div className="ar-rule-row">
                  <span className="ar-rule-tag">10</span>
                  <span className="ar-rule-text">Maximum 3 warnings are allowed.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. IMPORTANT NOTICE */}
          <section className="ar-notice-strip" aria-label="Important Assessment Notice">
            <span className="ar-notice-badge">IMPORTANT ASSESSMENT NOTICE</span>
            <span className="ar-notice-text">Maximum 3 warnings are allowed.</span>
          </section>

          {/* 6. CONFIRMATION CHECKBOX */}
          <div className="ar-checkbox-block">
            <label className="ar-checkbox-label" htmlFor="rules-agreement">
              <input
                type="checkbox"
                id="rules-agreement"
                className="ar-native-checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="ar-custom-checkbox" aria-hidden="true">
                <svg className="ar-check-svg" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="ar-checkbox-text">
                I have read and understood all the assessment rules and instructions.
              </span>
            </label>
          </div>

          {/* 7. ACTION BUTTONS (INSIDE CENTERED PANEL) */}
          <div className="ar-actions-row">
            <a
              href={backUrl}
              onClick={handleBack}
              className="ar-btn-secondary"
              id="footer-back-link"
            >
              &larr; BACK TO SECTION OVERVIEW
            </a>

            <button
              type="button"
              className={`ar-btn-primary ${!isChecked ? 'is-disabled' : ''}`}
              id="btn-start-assessment"
              disabled={!isChecked}
              aria-disabled={!isChecked}
              onClick={handleStart}
            >
              <span>I UNDERSTAND &amp; START ASSESSMENT</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

        </div>
      </main>

      {/* Toast Notification */}
      <div
        className={`ar-toast ${isToastVisible ? 'is-visible' : ''}`}
        id="ar-toast"
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>

    </div>
  );
}
