/**
 * InterviewOS — Bulk MCQ Excel Upload Module
 * Standalone, robust bulk question importer using SheetJS
 */

(function () {
  'use strict';

  // Standard Template Headers
  const TEMPLATE_HEADERS = [
    'Question Content Type',
    'Question Text',
    'Question Image URL',
    'Option A Text',
    'Option A Image URL',
    'Option A Type',
    'Option B Text',
    'Option B Image URL',
    'Option B Type',
    'Option C Text',
    'Option C Image URL',
    'Option C Type',
    'Option D Text',
    'Option D Image URL',
    'Option D Type',
    'Correct Answer',
    'Difficulty',
    'Priority',
    'Relevance',
    'Positive Marks',
    'Negative Marks',
    'Topic Marker'
  ];

  // Standard Example Row
  const TEMPLATE_EXAMPLE_ROW = [
    'TEXT',
    '[EXAMPLE] A number is increased by 20%. The new number is 240. What is the original number?',
    '',
    '180',
    '',
    'TEXT',
    '200',
    '',
    'TEXT',
    '220',
    '',
    'TEXT',
    '240',
    '',
    'TEXT',
    'B',
    'Easy',
    'Medium',
    'Medium',
    1,
    0.25,
    'Percentages'
  ];

  // Column width definitions for a neat template in Excel
  const TEMPLATE_COL_WIDTHS = [
    { wch: 22 }, // Question Content Type
    { wch: 65 }, // Question Text
    { wch: 30 }, // Question Image URL
    { wch: 22 }, // Option A Text
    { wch: 25 }, // Option A Image URL
    { wch: 16 }, // Option A Type
    { wch: 22 }, // Option B Text
    { wch: 25 }, // Option B Image URL
    { wch: 16 }, // Option B Type
    { wch: 22 }, // Option C Text
    { wch: 25 }, // Option C Image URL
    { wch: 16 }, // Option C Type
    { wch: 22 }, // Option D Text
    { wch: 25 }, // Option D Image URL
    { wch: 16 }, // Option D Type
    { wch: 16 }, // Correct Answer
    { wch: 14 }, // Difficulty
    { wch: 14 }, // Priority
    { wch: 14 }, // Relevance
    { wch: 16 }, // Positive Marks
    { wch: 16 }, // Negative Marks
    { wch: 30 }  // Topic Marker
  ];

  // Local state for active file and parsed data
  let selectedFile = null;
  let parsedResult = null;

  // DOM Elements cache
  let dom = {};

  // Escape helper for safe HTML rendering
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Normalize key string for tolerant header matching
  function normalizeKey(k) {
    return String(k || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  // Safe row field accessor
  function getVal(row, keyNames) {
    for (const k of Object.keys(row)) {
      const kNorm = normalizeKey(k);
      for (const target of keyNames) {
        if (kNorm === normalizeKey(target)) {
          const v = row[k];
          return String(v !== undefined && v !== null ? v : '').trim();
        }
      }
    }
    return '';
  }

  // Format file size
  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  // Get question banks from localStorage or global state
  function getQuestionBanks() {
    try {
      const raw = localStorage.getItem('interviewos_question_banks');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading question banks from localStorage:', e);
    }
    return [];
  }

  // Save question banks to localStorage
  function saveQuestionBanks(bankList) {
    try {
      localStorage.setItem('interviewos_question_banks', JSON.stringify(bankList));
    } catch (e) {
      console.error('Error saving question banks to localStorage:', e);
    }
  }

  // Generate and download Excel Template
  function downloadTemplate() {
    if (typeof XLSX === 'undefined') {
      alert('Excel export engine is loading. Please try again in a moment.');
      return;
    }

    try {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([TEMPLATE_HEADERS, TEMPLATE_EXAMPLE_ROW]);
      ws['!cols'] = TEMPLATE_COL_WIDTHS;
      XLSX.utils.book_append_sheet(wb, ws, 'InterviewOS_MCQs');
      XLSX.writeFile(wb, 'InterviewOS_MCQ_Bulk_Upload_Template.xlsx');
    } catch (err) {
      console.error('Template download error:', err);
      alert('Failed to generate template: ' + err.message);
    }
  }

  // Populate Question Bank dropdown in Step 2
  function populateQuestionBankSelect(preferredBankId) {
    if (!dom.targetBankSelect) return;

    const banks = getQuestionBanks();
    dom.targetBankSelect.innerHTML = '';

    if (banks.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '-- No Question Banks Available --';
      dom.targetBankSelect.appendChild(opt);
      updateBankPreview(null);
      return;
    }

    let defaultSelectedId = null;

    banks.forEach((b, idx) => {
      const title = b.questionBankTitle || b.title || 'Untitled Bank';
      const bId = String(b.id || `qb-${idx + 1}`);
      const qCount = Array.isArray(b.questions) ? b.questions.length : (b.questionCount || 0);
      const stage = (b.stage || b.category || 'Aptitude').toUpperCase();

      const opt = document.createElement('option');
      opt.value = bId;
      opt.textContent = `${title} (${qCount} ${qCount === 1 ? 'MCQ' : 'MCQs'} — ${stage})`;

      if (preferredBankId && (bId.toLowerCase() === String(preferredBankId).toLowerCase() || title.toLowerCase() === String(preferredBankId).toLowerCase())) {
        opt.selected = true;
        defaultSelectedId = bId;
      } else if (!defaultSelectedId && idx === 0) {
        opt.selected = true;
        defaultSelectedId = bId;
      }

      dom.targetBankSelect.appendChild(opt);
    });

    const activeId = dom.targetBankSelect.value || defaultSelectedId;
    const selectedBank = banks.find(b => String(b.id) === String(activeId)) || banks[0];
    updateBankPreview(selectedBank);
  }

  // Update target bank preview chip
  function updateBankPreview(bank) {
    if (!dom.targetBankPreview) return;
    if (!bank) {
      dom.targetBankPreview.innerHTML = '<span>No question bank selected.</span>';
      return;
    }
    const qCount = Array.isArray(bank.questions) ? bank.questions.length : (bank.questionCount || 0);
    const stage = (bank.stage || 'APTITUDE').toUpperCase();
    const inst = bank.institute || 'InterviewOS Training Academy';

    dom.targetBankPreview.innerHTML = `
      <span>TARGET: <strong>${escapeHtml(bank.questionBankTitle || bank.title)}</strong></span>
      <span>${escapeHtml(inst)}</span>
      <span class="bulk-bank-preview-badge">${qCount} CURRENT MCQs // ${escapeHtml(stage)}</span>
    `;
  }

  // Parse and validate Excel file content
  function parseAndValidateExcel(buffer, targetBank) {
    if (typeof XLSX === 'undefined') {
      throw new Error('XLSX library is not loaded.');
    }

    const wb = XLSX.read(buffer, { type: 'array' });
    const firstSheetName = wb.SheetNames[0];
    if (!firstSheetName) {
      return {
        detectedCount: 0,
        validQuestions: [],
        duplicates: [],
        errors: [{ rowNum: 1, messages: ['The uploaded Excel workbook contains no sheets.'] }]
      };
    }

    const firstSheet = wb.Sheets[firstSheetName];
    const rawRows = XLSX.utils.sheet_to_json(firstSheet, { defval: '' });

    const errors = [];
    const validQuestions = [];
    const duplicates = [];
    let exampleRowCount = 0;
    let detectedCount = 0;

    // Track existing question signatures in the target bank for duplicate detection
    const existingQuestions = (targetBank && Array.isArray(targetBank.questions)) ? targetBank.questions : [];
    const seenSignatures = new Set();

    existingQuestions.forEach(q => {
      const txt = (q.questionText || q.text || (q.questionContent && q.questionContent.text) || '').toLowerCase().replace(/\s+/g, ' ').trim();
      const img = (q.imageUrl || (q.questionContent && q.questionContent.imageUrl) || '').toLowerCase().trim();
      const sig = txt + '|||' + img;
      if (sig !== '|||') seenSignatures.add(sig);
    });

    rawRows.forEach((row, idx) => {
      const rowNum = idx + 2; // Excel row number (1-based, row 1 is header)

      const qContentType = (getVal(row, ['Question Content Type', 'ContentType', 'Type']) || 'TEXT').toUpperCase();
      const qText = getVal(row, ['Question Text', 'Text', 'Question']);
      const qImageUrl = getVal(row, ['Question Image URL', 'QuestionImageUrl', 'ImageUrl', 'Image']);

      // Skip completely blank rows
      const hasAnyContent = Boolean(qText || qImageUrl || getVal(row, ['Option A Text', 'Option B Text']));
      if (!hasAnyContent) return;

      detectedCount++;

      // Identify and skip the template example row
      const isExample = (
        qText.toLowerCase().includes('[example]') ||
        qText.toLowerCase().startsWith('example') ||
        getVal(row, ['Topic Marker', 'Topic']).toLowerCase().includes('example') ||
        (qText.includes('A number is increased by 20%') && getVal(row, ['Correct Answer']).toUpperCase() === 'B')
      );
      if (isExample) {
        exampleRowCount++;
        return;
      }

      const rowErrors = [];

      // 1. Content validation
      if (qContentType !== 'TEXT' && qContentType !== 'IMAGE') {
        rowErrors.push('Question Content Type must be TEXT or IMAGE.');
      } else if (qContentType === 'TEXT' && !qText) {
        rowErrors.push('TEXT question must have Question Text.');
      } else if (qContentType === 'IMAGE' && !qImageUrl) {
        rowErrors.push('IMAGE question must have Question Image URL.');
      }

      // 2. Options validation (A, B, C, D)
      const options = [];
      ['A', 'B', 'C', 'D'].forEach(label => {
        const optText = getVal(row, [`Option ${label} Text`, `Option${label}Text`, `Option ${label}`]);
        const optImg = getVal(row, [`Option ${label} Image URL`, `Option${label}ImageUrl`]);
        let optType = (getVal(row, [`Option ${label} Type`, `Option${label}Type`]) || (optImg && !optText ? 'IMAGE' : 'TEXT')).toUpperCase();

        if (optType !== 'TEXT' && optType !== 'IMAGE') {
          optType = 'TEXT';
        }

        const hasOptionContent = Boolean(optText || optImg);

        if (hasOptionContent) {
          if (optType === 'TEXT' && !optText) {
            rowErrors.push(`Option ${label} is marked as TEXT but has no option text.`);
          }
          if (optType === 'IMAGE' && !optImg) {
            rowErrors.push(`Option ${label} is marked as IMAGE but has no image URL.`);
          }
          options.push({
            label,
            text: optText,
            imageUrl: optImg,
            type: optType.toLowerCase()
          });
        }
      });

      if (options.length < 2) {
        rowErrors.push('At least 2 options (e.g. Option A and Option B) must contain content.');
      }

      // 3. Correct Answer validation
      const rawCorrect = getVal(row, ['Correct Answer', 'Answer', 'CorrectAnswer']).toUpperCase();
      if (!['A', 'B', 'C', 'D'].includes(rawCorrect)) {
        rowErrors.push('Correct Answer must be A, B, C, or D.');
      } else {
        const correctOpt = options.find(o => o.label === rawCorrect);
        if (!correctOpt) {
          rowErrors.push(`Correct Answer is '${rawCorrect}', but Option ${rawCorrect} has no content.`);
        }
      }

      // 4. Difficulty validation
      let difficulty = getVal(row, ['Difficulty']) || 'Medium';
      const diffUpper = difficulty.toUpperCase();
      if (diffUpper === 'EASY') difficulty = 'Easy';
      else if (diffUpper === 'MEDIUM') difficulty = 'Medium';
      else if (diffUpper === 'HARD') difficulty = 'Hard';
      else {
        rowErrors.push('Difficulty must be Easy, Medium, or Hard.');
      }

      // 5. Priority validation
      let priority = getVal(row, ['Priority']) || 'Medium';
      const prioUpper = priority.toUpperCase();
      if (prioUpper === 'LOW') priority = 'Low';
      else if (prioUpper === 'MEDIUM') priority = 'Medium';
      else if (prioUpper === 'HIGH') priority = 'High';
      else {
        rowErrors.push('Priority must be Low, Medium, or High.');
      }

      // 6. Relevance validation
      let relevance = getVal(row, ['Relevance']) || 'Medium';
      const relUpper = relevance.toUpperCase();
      if (relUpper === 'LOW') relevance = 'Low';
      else if (relUpper === 'MEDIUM') relevance = 'Medium';
      else if (relUpper === 'HIGH') relevance = 'High';
      else {
        rowErrors.push('Relevance must be Low, Medium, or High.');
      }

      // 7. Marks validation
      const posRaw = getVal(row, ['Positive Marks', 'PositiveMarks', 'Marks']);
      const negRaw = getVal(row, ['Negative Marks', 'NegativeMarks', 'Negative']);
      const posMarks = posRaw === '' ? 1.0 : parseFloat(posRaw);
      const negMarks = negRaw === '' ? 0.25 : parseFloat(negRaw);

      if (isNaN(posMarks) || posMarks < 0) {
        rowErrors.push('Positive Marks must be a valid positive number.');
      }
      if (isNaN(negMarks) || negMarks < 0) {
        rowErrors.push('Negative Marks must be a valid number (0 or greater).');
      }

      if (rowErrors.length > 0) {
        errors.push({
          rowNum,
          messages: rowErrors
        });
        return;
      }

      // Duplicate Check against both existing bank questions and previously processed rows in file
      const normTxt = qText.toLowerCase().replace(/\s+/g, ' ').trim();
      const normImg = qImageUrl.toLowerCase().trim();
      const sig = normTxt + '|||' + normImg;

      if (seenSignatures.has(sig)) {
        duplicates.push({
          rowNum,
          questionText: qText || qImageUrl
        });
        return;
      }
      seenSignatures.add(sig);

      // Topic Marker & tags
      const topicRaw = getVal(row, ['Topic Marker', 'TopicMarker', 'Topic', 'Tags']);
      const tags = topicRaw ? topicRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
      const topicMarker = tags.length > 0 ? tags[0] : (targetBank ? (targetBank.stage || 'General') : 'General');

      validQuestions.push({
        contentType: qContentType.toLowerCase(),
        questionText: qText,
        text: qText,
        imageUrl: qImageUrl,
        image: qImageUrl || null,
        questionContent: {
          text: qText,
          imageUrl: qImageUrl
        },
        options: options.map(o => ({
          label: o.label,
          text: o.text,
          imageUrl: o.imageUrl,
          isCorrect: o.label === rawCorrect
        })),
        correctAnswer: rawCorrect,
        correctIndex: ['A', 'B', 'C', 'D'].indexOf(rawCorrect),
        positiveMarks: posMarks,
        negativeMarks: negMarks,
        difficulty,
        priority,
        relevance,
        topicMarker,
        tags: tags.length > 0 ? tags : [topicMarker],
        stage: (targetBank && targetBank.stage) || 'Aptitude'
      });
    });

    return {
      detectedCount,
      exampleRowCount,
      validQuestions,
      duplicates,
      errors
    };
  }

  // Handle file selection from file input or drag-and-drop
  function handleFile(file) {
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.xlsx')) {
      alert('Invalid file format. Please upload an Excel file with the .xlsx extension.');
      return;
    }

    selectedFile = file;
    dom.fileNameDisplay.textContent = file.name;
    dom.fileSizeDisplay.textContent = formatBytes(file.size);
    dom.fileInfoBox.style.display = 'flex';
    dom.dropzone.style.display = 'none';
    dom.errorCard.style.display = 'none';
    dom.summaryCard.style.display = 'none';

    // Read and parse file
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const buffer = e.target.result;
        const banks = getQuestionBanks();
        const targetId = dom.targetBankSelect.value;
        const targetBank = banks.find(b => String(b.id) === String(targetId)) || banks[0];

        parsedResult = parseAndValidateExcel(buffer, targetBank);

        const netDetected = parsedResult.detectedCount - parsedResult.exampleRowCount;
        dom.detectedBadge.textContent = `${netDetected} QUESTIONS DETECTED${parsedResult.exampleRowCount > 0 ? ' (EXAMPLE ROW EXCLUDED)' : ''}`;

        // If there are validation errors, immediately render the error summary
        if (parsedResult.errors.length > 0) {
          renderErrors(parsedResult);
          dom.uploadActionRow.style.display = 'none';
        } else {
          dom.errorCard.style.display = 'none';
          dom.uploadActionRow.style.display = 'flex';
        }
      } catch (err) {
        console.error('File parsing error:', err);
        alert('Failed to parse Excel file: ' + err.message);
        resetFileInput();
      }
    };
    reader.readAsArrayBuffer(file);
  }

  // Render validation error panel
  function renderErrors(result) {
    dom.errorCard.style.display = 'flex';
    dom.errorCounts.textContent = `${result.validQuestions.length} valid questions · ${result.errors.length} invalid questions`;
    dom.errorList.innerHTML = '';

    result.errors.forEach(err => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Row ${err.rowNum}:</strong> ${escapeHtml(err.messages.join(' ' ))}`;
      dom.errorList.appendChild(li);
    });
  }

  // Reset file input back to empty dropzone
  function resetFileInput() {
    selectedFile = null;
    parsedResult = null;
    dom.fileInput.value = '';
    dom.fileInfoBox.style.display = 'none';
    dom.dropzone.style.display = 'flex';
    dom.uploadActionRow.style.display = 'none';
    dom.errorCard.style.display = 'none';
    dom.summaryCard.style.display = 'none';
  }

  // Execute import of validated questions into selected target bank
  function executeImport() {
    if (!parsedResult) return;

    if (parsedResult.errors.length > 0) {
      alert('Please fix the validation errors before uploading.');
      return;
    }

    const banks = getQuestionBanks();
    const targetId = dom.targetBankSelect.value;
    const targetBank = banks.find(b => String(b.id) === String(targetId));

    if (!targetBank) {
      alert('Selected target Question Bank could not be found.');
      return;
    }

    if (!Array.isArray(targetBank.questions)) {
      targetBank.questions = [];
    }

    const initialCount = targetBank.questions.length;
    const newQuestions = parsedResult.validQuestions.map((q, idx) => {
      const qNum = initialCount + idx + 1;
      return {
        ...q,
        id: `q-bulk-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 5)}`,
        order: qNum,
        sessionOrder: qNum
      };
    });

    // Append new questions to target bank
    targetBank.questions.push(...newQuestions);
    targetBank.questionCount = targetBank.questions.length;

    // Format current date e.g. "23 Sep 2026"
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    targetBank.updatedAt = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    // Persist to storage
    saveQuestionBanks(banks);

    // Update Question Bank detail if currently open in window
    if (window.InterviewOS && typeof window.InterviewOS.saveQuestionBank === 'function') {
      try {
        window.InterviewOS.saveQuestionBank();
      } catch (e) {}
    }

    // Synchronize workspace view
    if (typeof window.syncQuestionBanksFromStorage === 'function') {
      window.syncQuestionBanksFromStorage();
    }

    // Fire storage event to sync any open tabs
    try {
      window.dispatchEvent(new StorageEvent('storage', { key: 'interviewos_question_banks' }));
    } catch (e) {}

    // Show Import Complete Summary
    const netDetected = parsedResult.detectedCount - parsedResult.exampleRowCount;
    dom.sumValDetected.textContent = netDetected;
    dom.sumValAdded.textContent = newQuestions.length;
    dom.sumValDuplicates.textContent = parsedResult.duplicates.length;
    dom.sumValInvalid.textContent = parsedResult.errors.length;
    dom.summarySubtitle.textContent = `Successfully added ${newQuestions.length} questions to "${targetBank.questionBankTitle || targetBank.title}".`;

    // Hide input step and show summary
    dom.step1.style.display = 'none';
    dom.step2.style.display = 'none';
    dom.step3.style.display = 'none';
    dom.summaryCard.style.display = 'flex';

    // Show Toast Notice if toast element exists
    const toast = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-text');
    if (toast && toastText) {
      toastText.textContent = `${newQuestions.length} QUESTIONS ADDED TO ${String(targetBank.questionBankTitle || targetBank.title).toUpperCase()}`;
      toast.classList.add('is-active');
      setTimeout(() => toast.classList.remove('is-active'), 3500);
    }
  }

  // Open modal
  function openModal(preselectedBankId = null) {
    populateQuestionBankSelect(preselectedBankId);
    resetFileInput();

    dom.step1.style.display = 'flex';
    dom.step2.style.display = 'flex';
    dom.step3.style.display = 'flex';
    dom.summaryCard.style.display = 'none';

    dom.modalOverlay.style.display = 'flex';
    void dom.modalOverlay.offsetWidth;
    dom.modalOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  function closeModal() {
    dom.modalOverlay.classList.remove('is-visible');
    setTimeout(() => {
      dom.modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
      resetFileInput();
    }, 180);
  }

  // Initialize UI & Event Listeners
  function init() {
    dom = {
      modalOverlay: document.getElementById('modal-bulk-upload'),
      btnCloseModal: document.getElementById('btn-close-bulk-modal'),
      btnDownloadTemplate: document.getElementById('btn-bulk-download-template'),
      targetBankSelect: document.getElementById('bulk-target-bank-select'),
      targetBankPreview: document.getElementById('bulk-target-bank-preview'),
      dropzone: document.getElementById('bulk-file-dropzone'),
      fileInput: document.getElementById('bulk-file-input'),
      btnBrowseFile: document.getElementById('btn-bulk-browse-file'),
      fileInfoBox: document.getElementById('bulk-file-info-box'),
      fileNameDisplay: document.getElementById('bulk-file-name-display'),
      fileSizeDisplay: document.getElementById('bulk-file-size-display'),
      detectedBadge: document.getElementById('bulk-detected-questions-badge'),
      btnRemoveFile: document.getElementById('btn-bulk-remove-file'),
      errorCard: document.getElementById('bulk-error-card'),
      errorCounts: document.getElementById('bulk-error-counts'),
      errorList: document.getElementById('bulk-error-list'),
      uploadActionRow: document.getElementById('bulk-upload-action-row'),
      btnSubmitUpload: document.getElementById('btn-bulk-upload-submit'),
      summaryCard: document.getElementById('bulk-summary-card'),
      summarySubtitle: document.getElementById('bulk-summary-subtitle'),
      sumValDetected: document.getElementById('sum-val-detected'),
      sumValAdded: document.getElementById('sum-val-added'),
      sumValDuplicates: document.getElementById('sum-val-duplicates'),
      sumValInvalid: document.getElementById('sum-val-invalid'),
      btnDone: document.getElementById('btn-bulk-done'),
      step1: document.getElementById('bulk-step-1'),
      step2: document.getElementById('bulk-step-2'),
      step3: document.getElementById('bulk-step-3')
    };

    if (!dom.modalOverlay) return;

    // Trigger button on trainer-home.html
    const triggerBtn = document.getElementById('btn-bulk-upload');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    }

    // Trigger button on trainer-question-bank.html if present
    const qbTriggerBtn = document.getElementById('btn-qb-bulk-upload');
    if (qbTriggerBtn) {
      qbTriggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Pre-select current bank id if available
        const urlParams = new URLSearchParams(window.location.search);
        const currentId = urlParams.get('bankId') || urlParams.get('id') || 'qb-101';
        openModal(currentId);
      });
    }

    // Close button
    if (dom.btnCloseModal) {
      dom.btnCloseModal.addEventListener('click', closeModal);
    }

    // Backdrop click
    dom.modalOverlay.addEventListener('click', (e) => {
      if (e.target === dom.modalOverlay) {
        closeModal();
      }
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.modalOverlay.classList.contains('is-visible')) {
        closeModal();
      }
    });

    // Download template
    if (dom.btnDownloadTemplate) {
      dom.btnDownloadTemplate.addEventListener('click', downloadTemplate);
    }

    // Target Bank select change
    if (dom.targetBankSelect) {
      dom.targetBankSelect.addEventListener('change', () => {
        const banks = getQuestionBanks();
        const b = banks.find(item => String(item.id) === String(dom.targetBankSelect.value));
        updateBankPreview(b);
      });
    }

    // Browse button -> file input click
    if (dom.btnBrowseFile && dom.fileInput) {
      dom.btnBrowseFile.addEventListener('click', () => dom.fileInput.click());
    }

    // Dropzone click -> file input click
    if (dom.dropzone && dom.fileInput) {
      dom.dropzone.addEventListener('click', (e) => {
        if (e.target !== dom.btnBrowseFile) {
          dom.fileInput.click();
        }
      });
    }

    // File Input change
    if (dom.fileInput) {
      dom.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleFile(e.target.files[0]);
        }
      });
    }

    // Drag and drop support
    if (dom.dropzone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dom.dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dom.dropzone.classList.add('is-dragover');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dom.dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dom.dropzone.classList.remove('is-dragover');
        });
      });

      dom.dropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
          handleFile(files[0]);
        }
      });
    }

    // Remove / change file button
    if (dom.btnRemoveFile) {
      dom.btnRemoveFile.addEventListener('click', resetFileInput);
    }

    // Submit upload questions button
    if (dom.btnSubmitUpload) {
      dom.btnSubmitUpload.addEventListener('click', executeImport);
    }

    // Done button
    if (dom.btnDone) {
      dom.btnDone.addEventListener('click', () => {
        closeModal();
        // If on Question Bank Detail page, trigger reload or re-render
        if (window.location.pathname.includes('trainer-question-bank.html')) {
          window.location.reload();
        }
      });
    }
  }

  // Expose global API
  window.InterviewOSBulkUpload = {
    open: openModal,
    close: closeModal,
    downloadTemplate: downloadTemplate
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
