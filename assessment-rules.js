/**
 * InterviewOS — Assessment Rules & Regulations Logic
 * Handles agreement confirmation, button gate states, and existing route navigation.
 */

(function () {
  'use strict';

  const checkbox = document.getElementById('rules-agreement');
  const startBtn = document.getElementById('btn-start-assessment');
  const toast = document.getElementById('ar-toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }

  function setButtonState(isEnabled) {
    if (!startBtn) return;
    if (isEnabled) {
      startBtn.removeAttribute('disabled');
      startBtn.classList.remove('is-disabled');
      startBtn.setAttribute('aria-disabled', 'false');
    } else {
      startBtn.setAttribute('disabled', 'disabled');
      startBtn.classList.add('is-disabled');
      startBtn.setAttribute('aria-disabled', 'true');
    }
  }

  function handleStart(e) {
    if (e) e.preventDefault();

    if (!checkbox || !checkbox.checked) {
      showToast('Please check the agreement to proceed.');
      return;
    }

    // Preserve any existing query parameters from the session
    const searchParams = window.location.search || '';
    const destination = 'test-taking-wireframe.html' + searchParams;

    showToast('ENTERING ASSESSMENT ENVIRONMENT...');
    setTimeout(() => {
      window.location.href = destination;
    }, 300);
  }

  function init() {
    if (checkbox) {
      // Ensure unchecked by default
      checkbox.checked = false;
      setButtonState(false);

      checkbox.addEventListener('change', () => {
        setButtonState(checkbox.checked);
      });
    }

    if (startBtn) {
      startBtn.addEventListener('click', handleStart);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
