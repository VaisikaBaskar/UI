/**
 * InterviewOS — Create Question Bank Modal Controller
 * Handles Stage selection (Step 1) and Question Bank Name creation (Step 2)
 */

(function () {
  'use strict';

  function initCreateAssessmentModal() {
    const modal = document.getElementById('create-assessment-modal');
    const triggerBtn = document.getElementById('btn-create-mcq');
    const cancelBtnStep1 = document.getElementById('btn-stage-cancel');
    const cancelBtnStep2 = document.getElementById('btn-stage-cancel-step2');
    const stageBtns = document.querySelectorAll('.stage-option-btn');

    const step1 = document.getElementById('stage-modal-step-1');
    const step2 = document.getElementById('stage-modal-step-2');
    const stageBadge = document.getElementById('stage-modal-badge');
    const stageText = document.getElementById('stage-modal-stage-text');
    const inputQbName = document.getElementById('input-qb-name');
    const qbNameError = document.getElementById('qb-name-error');
    const submitBtn = document.getElementById('btn-stage-create-qb');
    const formStep2 = document.getElementById('form-create-qb-name');

    if (!modal) return;

    let previousActiveElement = null;
    let selectedStage = null; // 'APTITUDE', 'CODING', 'COMMUNICATION'

    function resetModalState() {
      selectedStage = null;
      if (step1) step1.style.display = 'block';
      if (step2) step2.style.display = 'none';
      if (inputQbName) {
        inputQbName.value = '';
        inputQbName.classList.remove('has-error');
      }
      if (qbNameError) {
        qbNameError.textContent = '';
        qbNameError.style.display = 'none';
      }
    }

    function openModal(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      previousActiveElement = document.activeElement;
      resetModalState();

      modal.style.display = 'flex';
      // Force reflow for CSS transition
      void modal.offsetWidth;
      modal.classList.add('is-visible');

      // Focus first stage option
      const firstBtn = modal.querySelector('.stage-option-btn');
      if (firstBtn) firstBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('is-visible');
      setTimeout(() => {
        modal.style.display = 'none';
        resetModalState();
        if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
          previousActiveElement.focus();
        }
      }, 150);
    }

    function goToStep2(stageKey) {
      selectedStage = (stageKey || '').toUpperCase().trim();
      const stageDisplay = selectedStage.charAt(0) + selectedStage.slice(1).toLowerCase();

      if (stageBadge) {
        stageBadge.textContent = selectedStage;
      }
      if (stageText) {
        stageText.textContent = stageDisplay;
      }

      if (step1) step1.style.display = 'none';
      if (step2) step2.style.display = 'block';

      if (inputQbName) {
        inputQbName.value = '';
        inputQbName.classList.remove('has-error');
        setTimeout(() => {
          inputQbName.focus();
        }, 50);
      }
      if (qbNameError) {
        qbNameError.textContent = '';
        qbNameError.style.display = 'none';
      }
    }

    function showError(msg) {
      if (!qbNameError) return;
      qbNameError.textContent = msg;
      qbNameError.style.display = 'block';
      if (inputQbName) {
        inputQbName.classList.add('has-error');
        inputQbName.focus();
      }
    }

    function clearError() {
      if (qbNameError) {
        qbNameError.textContent = '';
        qbNameError.style.display = 'none';
      }
      if (inputQbName) {
        inputQbName.classList.remove('has-error');
      }
    }

    function handleCreateQuestionBank() {
      if (!selectedStage) {
        showError('Please select an assessment stage first.');
        return;
      }

      const enteredName = (inputQbName ? inputQbName.value : '').trim();

      // 1. Validation: Name is REQUIRED
      if (!enteredName) {
        showError('* QUESTION BANK NAME IS REQUIRED');
        return;
      }

      // 2. Duplicate Protection: Check whether the same Question Bank name already exists for the selected stage
      let existingBanks = [];
      try {
        const raw = localStorage.getItem('interviewos_question_banks');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) existingBanks = parsed;
        }
      } catch (e) {
        console.warn('Error reading question banks:', e);
      }

      const targetStageNorm = selectedStage.toLowerCase();
      const targetTitleNorm = enteredName.toLowerCase();

      const duplicate = existingBanks.find(b => {
        if (!b) return false;
        const bStage = String(b.stage || b.category || '').toLowerCase().trim();
        const bTitle = String(b.questionBankTitle || b.title || '').toLowerCase().trim();
        return bStage === targetStageNorm && bTitle === targetTitleNorm;
      });

      if (duplicate) {
        showError('QUESTION BANK ALREADY EXISTS');
        return;
      }

      // 3. Create Question Bank record using existing schema
      const stageDisplay = selectedStage.charAt(0) + selectedStage.slice(1).toLowerCase();
      const newBankId = 'qb-' + Date.now();

      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const now = new Date();
      const formattedDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

      const newBank = {
        id: newBankId,
        title: enteredName,
        questionBankTitle: enteredName,
        desc: `${stageDisplay} question bank with curated MCQ questions.`,
        description: `${stageDisplay} question bank with curated MCQ questions.`,
        questionCount: 0,
        status: 'Published',
        updatedAt: formattedDate,
        usedInAssessments: 0,
        institute: 'InterviewOS Training Academy',
        stage: stageDisplay,
        questionType: 'MCQ',
        contentType: 'text',
        optionsCount: 4,
        questions: []
      };

      existingBanks.push(newBank);

      // Persist to localStorage
      try {
        localStorage.setItem('interviewos_question_banks', JSON.stringify(existingBanks));

        // Ensure not marked deleted
        const delRaw = localStorage.getItem('interviewos_deleted_question_banks');
        if (delRaw) {
          const delArr = JSON.parse(delRaw);
          if (Array.isArray(delArr)) {
            const filtered = delArr.filter(x => {
              const s = String(x).toLowerCase().trim();
              return s !== newBankId && s !== targetTitleNorm;
            });
            localStorage.setItem('interviewos_deleted_question_banks', JSON.stringify(filtered));
          }
        }
      } catch (err) {
        console.error('Error saving question bank:', err);
      }

      // Set active target for Question Bank Detail & MCQ builder
      try {
        localStorage.setItem('interviewos_selected_bank_id', newBank.id);
        sessionStorage.setItem('interviewos_selected_bank_id', newBank.id);
        localStorage.setItem('interviewos_selected_bank_title', newBank.title);
        sessionStorage.setItem('interviewos_selected_bank_title', newBank.title);
        localStorage.setItem('interviewos_selected_stage', selectedStage);
        sessionStorage.setItem('interviewos_selected_stage', selectedStage);
      } catch (err) {}

      // Update question banks list in current view if on trainer-home
      if (typeof window.syncQuestionBanksFromStorage === 'function') {
        window.syncQuestionBanksFromStorage();
      }

      // Close modal cleanly before navigating
      closeModal();

      // Open existing manual MCQ creation flow for this newly created bank
      const targetUrl = `trainer-question-bank.html?stage=${encodeURIComponent(stageDisplay.toLowerCase())}&bankId=${encodeURIComponent(newBank.id)}&bankTitle=${encodeURIComponent(newBank.title)}#create-mcq`;

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 100);
    }

    // Trigger open from "+ CREATE QUESTION BANK" button
    if (triggerBtn) {
      triggerBtn.addEventListener('click', openModal);
    }

    // Also support any element with [data-open-create-assessment-modal]
    document.querySelectorAll('[data-open-create-assessment-modal]').forEach(el => {
      el.addEventListener('click', openModal);
    });

    // Close on cancel buttons
    if (cancelBtnStep1) {
      cancelBtnStep1.addEventListener('click', closeModal);
    }
    if (cancelBtnStep2) {
      cancelBtnStep2.addEventListener('click', closeModal);
    }

    // Close on outside overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Clear error on input
    if (inputQbName) {
      inputQbName.addEventListener('input', clearError);
    }

    // Handle submit in Step 2
    if (formStep2) {
      formStep2.addEventListener('submit', (e) => {
        e.preventDefault();
        handleCreateQuestionBank();
      });
    }
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleCreateQuestionBank();
      });
    }

    // Close on Escape key & keyboard tab trap
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('is-visible')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      // Keyboard tab cycle inside visible step in modal
      if (e.key === 'Tab') {
        const visibleStep = step2 && step2.style.display !== 'none' ? step2 : step1;
        if (!visibleStep) return;
        const focusables = visibleStep.querySelectorAll('button:not([disabled]), input:not([disabled])');
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Wire stage selection buttons
    stageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const stage = (btn.dataset.stage || '').toUpperCase();
        goToStep2(stage);
      });
    });

    // Expose open helper globally
    window.openCreateAssessmentModal = openModal;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCreateAssessmentModal);
  } else {
    initCreateAssessmentModal();
  }
})();
