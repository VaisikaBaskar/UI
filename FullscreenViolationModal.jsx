import React from 'react';
import './FullscreenViolationModal.css';

/**
 * FullscreenViolationModal.jsx
 * Standalone Fullscreen Violation Warning Modal for InterviewOS.
 * Styled in the neubrutalist developer aesthetic of builddistributedsystem.com.
 *
 * @param {Object} props
 * @param {boolean} [props.isOpen=true] - Whether the modal is currently displayed
 * @param {number} [props.currentViolation=1] - Current violation count (e.g. 1)
 * @param {number} [props.maxViolations=3] - Maximum allowed violations before auto-submission
 * @param {Function} [props.onReturnToFullscreen] - Callback invoked when user clicks 'RETURN TO FULLSCREEN'
 */
export default function FullscreenViolationModal({
  isOpen = true,
  currentViolation = 1,
  maxViolations = 3,
  onReturnToFullscreen,
}) {
  if (!isOpen) return null;

  const warningsRemaining = Math.max(0, maxViolations - currentViolation);

  const handleAction = (e) => {
    e.preventDefault();

    // Request fullscreen mode if available
    if (typeof document !== 'undefined') {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    }

    if (onReturnToFullscreen) {
      onReturnToFullscreen();
    }
  };

  return (
    <div
      className="fullscreen-violation-root fullscreen-violation-overlay"
      id="fullscreen-violation-root"
    >
      {/* 2. CENTERED WHITE MODAL */}
      <div
        className="fullscreen-violation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fullscreen-violation-title"
      >
        {/* MODAL INNER BODY */}
        <div className="fullscreen-violation-modal-body">
          {/* 4. STATUS ROW */}
          <div className="fullscreen-violation-status-row">
            <span className="fullscreen-violation-badge">
              WARNING {currentViolation} / {maxViolations}
            </span>
            <span className="fullscreen-violation-status-label">
              PROCTORING VIOLATION
            </span>
          </div>

          {/* 5. MAIN HEADING */}
          <h1
            className="fullscreen-violation-title"
            id="fullscreen-violation-title"
          >
            FULLSCREEN EXITED
          </h1>

          {/* 6. YELLOW WARNING MESSAGE BOX */}
          <div className="fullscreen-violation-warning-box" role="alert">
            <div className="fullscreen-violation-warning-headline">
              You exited fullscreen mode.
            </div>
            <div className="fullscreen-violation-warning-subtext">
              Please return to fullscreen immediately. Repeated violations will result in automatic test submission.
            </div>
          </div>

          {/* 7. VIOLATION STATISTICS BOX */}
          <div
            className="fullscreen-violation-stats-box"
            aria-label="Proctoring Warning Statistics"
          >
            <div className="fullscreen-violation-stat-item">
              VIOLATIONS: <strong>{currentViolation} / {maxViolations}</strong>
            </div>
            <div className="fullscreen-violation-stat-item">
              WARNINGS LEFT: <strong>{warningsRemaining}</strong>
            </div>
          </div>

          {/* 8. YELLOW ACTION BUTTON */}
          <button
            type="button"
            className="fullscreen-violation-action-btn"
            id="fullscreen-violation-action-btn"
            onClick={handleAction}
          >
            RETURN TO FULLSCREEN
          </button>
        </div>
      </div>
    </div>
  );
}
