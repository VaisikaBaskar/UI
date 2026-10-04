/**
 * InterviewOS — Trainer Question Bank Management Module
 * Question Rules at Individual Question Level
 */

(function () {
  'use strict';

  // Canonical Aptitude MCQs for Quantitative & Analytical Aptitude Question Bank
  const DEFAULT_APTITUDE_MCQS = [
    {
      id: 'q-apt-01',
      order: 1,
      sessionOrder: 1,
      contentType: 'text',
      questionText: 'A number is increased by 20%. The new number is 240. What is the original number?',
      text: 'A number is increased by 20%. The new number is 240. What is the original number?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'A number is increased by 20%. The new number is 240. What is the original number?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '180', imageUrl: '', isCorrect: false },
        { label: 'B', text: '200', imageUrl: '', isCorrect: true },
        { label: 'C', text: '220', imageUrl: '', isCorrect: false },
        { label: 'D', text: '240', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'B',
      correctIndex: 1,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Percentage',
      tags: ['Percentage', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['increased by 20%', '240', 'original number']
    },
    {
      id: 'q-apt-02',
      order: 2,
      sessionOrder: 2,
      contentType: 'text',
      questionText: 'A can complete a work in 10 days. B can complete the same work in 15 days. How many days will they take together?',
      text: 'A can complete a work in 10 days. B can complete the same work in 15 days. How many days will they take together?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'A can complete a work in 10 days. B can complete the same work in 15 days. How many days will they take together?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '5 days', imageUrl: '', isCorrect: false },
        { label: 'B', text: '6 days', imageUrl: '', isCorrect: true },
        { label: 'C', text: '8 days', imageUrl: '', isCorrect: false },
        { label: 'D', text: '12 days', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'B',
      correctIndex: 1,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Time and Work',
      tags: ['Time and Work', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['complete a work in 10 days', '15 days', 'take together']
    },
    {
      id: 'q-apt-03',
      order: 3,
      sessionOrder: 3,
      contentType: 'text',
      questionText: 'A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?',
      text: 'A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '10%', imageUrl: '', isCorrect: false },
        { label: 'B', text: '15%', imageUrl: '', isCorrect: false },
        { label: 'C', text: '20%', imageUrl: '', isCorrect: true },
        { label: 'D', text: '25%', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'C',
      correctIndex: 2,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Profit and Loss',
      tags: ['Profit and Loss', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['500 and sells it for', '600', 'profit percentage']
    },
    {
      id: 'q-apt-04',
      order: 4,
      sessionOrder: 4,
      contentType: 'text',
      questionText: 'Find the next number:\n\n2, 6, 12, 20, 30, ?',
      text: 'Find the next number:\n\n2, 6, 12, 20, 30, ?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'Find the next number:\n\n2, 6, 12, 20, 30, ?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '36', imageUrl: '', isCorrect: false },
        { label: 'B', text: '40', imageUrl: '', isCorrect: false },
        { label: 'C', text: '42', imageUrl: '', isCorrect: true },
        { label: 'D', text: '44', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'C',
      correctIndex: 2,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Number Series',
      tags: ['Number Series', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['2, 6, 12, 20, 30', 'next number']
    },
    {
      id: 'q-apt-05',
      order: 5,
      sessionOrder: 5,
      contentType: 'text',
      questionText: 'The average of 5 numbers is 24. If one number is removed, the average of the remaining 4 numbers becomes 20. What is the removed number?',
      text: 'The average of 5 numbers is 24. If one number is removed, the average of the remaining 4 numbers becomes 20. What is the removed number?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'The average of 5 numbers is 24. If one number is removed, the average of the remaining 4 numbers becomes 20. What is the removed number?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '30', imageUrl: '', isCorrect: false },
        { label: 'B', text: '35', imageUrl: '', isCorrect: false },
        { label: 'C', text: '40', imageUrl: '', isCorrect: true },
        { label: 'D', text: '44', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'C',
      correctIndex: 2,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Average',
      tags: ['Average', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['average of 5 numbers is 24', 'remaining 4 numbers becomes 20', 'removed number']
    },
    {
      id: 'q-apt-06',
      order: 6,
      sessionOrder: 6,
      contentType: 'text',
      questionText: 'The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?',
      text: 'The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '15', imageUrl: '', isCorrect: false },
        { label: 'B', text: '20', imageUrl: '', isCorrect: true },
        { label: 'C', text: '25', imageUrl: '', isCorrect: false },
        { label: 'D', text: '30', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'B',
      correctIndex: 1,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Ratio',
      tags: ['Ratio', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['ratio of boys to girls', '30 boys', 'how many girls']
    },
    {
      id: 'q-apt-07',
      order: 7,
      sessionOrder: 7,
      contentType: 'text',
      questionText: 'A person invests ₹5,000 at a simple interest rate of 8% per annum for 2 years. What is the simple interest?',
      text: 'A person invests ₹5,000 at a simple interest rate of 8% per annum for 2 years. What is the simple interest?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'A person invests ₹5,000 at a simple interest rate of 8% per annum for 2 years. What is the simple interest?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '₹600', imageUrl: '', isCorrect: false },
        { label: 'B', text: '₹700', imageUrl: '', isCorrect: false },
        { label: 'C', text: '₹800', imageUrl: '', isCorrect: true },
        { label: 'D', text: '₹900', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'C',
      correctIndex: 2,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Simple Interest',
      tags: ['Simple Interest', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['5,000 at a simple interest', '8% per annum', 'simple interest']
    },
    {
      id: 'q-apt-08',
      order: 8,
      sessionOrder: 8,
      contentType: 'text',
      questionText: 'A can complete a work in 12 days, while B can complete it in 18 days. How many days will they take to complete the work together?',
      text: 'A can complete a work in 12 days, while B can complete it in 18 days. How many days will they take to complete the work together?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'A can complete a work in 12 days, while B can complete it in 18 days. How many days will they take to complete the work together?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '6.5 days', imageUrl: '', isCorrect: false },
        { label: 'B', text: '7.2 days', imageUrl: '', isCorrect: true },
        { label: 'C', text: '8 days', imageUrl: '', isCorrect: false },
        { label: 'D', text: '9 days', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'B',
      correctIndex: 1,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Time and Work',
      tags: ['Time and Work', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['complete a work in 12 days', '18 days', 'take to complete the work together']
    },
    {
      id: 'q-apt-09',
      order: 9,
      sessionOrder: 9,
      contentType: 'text',
      questionText: 'A shopkeeper buys an article for ₹800 and sells it for ₹920. What is the profit percentage?',
      text: 'A shopkeeper buys an article for ₹800 and sells it for ₹920. What is the profit percentage?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'A shopkeeper buys an article for ₹800 and sells it for ₹920. What is the profit percentage?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '10%', imageUrl: '', isCorrect: false },
        { label: 'B', text: '12%', imageUrl: '', isCorrect: false },
        { label: 'C', text: '15%', imageUrl: '', isCorrect: true },
        { label: 'D', text: '20%', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'C',
      correctIndex: 2,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Profit and Loss',
      tags: ['Profit and Loss', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['800 and sells it for', '920', 'profit percentage']
    },
    {
      id: 'q-apt-10',
      order: 10,
      sessionOrder: 10,
      contentType: 'text',
      questionText: 'Find the next number:\n\n3, 7, 13, 21, 31, ?',
      text: 'Find the next number:\n\n3, 7, 13, 21, 31, ?',
      imageUrl: '',
      image: null,
      questionContent: {
        text: 'Find the next number:\n\n3, 7, 13, 21, 31, ?',
        imageUrl: ''
      },
      options: [
        { label: 'A', text: '41', imageUrl: '', isCorrect: false },
        { label: 'B', text: '42', imageUrl: '', isCorrect: false },
        { label: 'C', text: '43', imageUrl: '', isCorrect: true },
        { label: 'D', text: '45', imageUrl: '', isCorrect: false }
      ],
      correctAnswer: 'C',
      correctIndex: 2,
      positiveMarks: 1.0,
      negativeMarks: 0.25,
      difficulty: 'Medium',
      priority: 'Medium',
      relevance: 'Medium',
      topicMarker: 'Number Series',
      tags: ['Number Series', 'Aptitude'],
      stage: 'Aptitude',
      matchKeywords: ['3, 7, 13, 21, 31', 'next number']
    }
  ];

  // Default sample question bank definitions matching Trainer Workspace
  const DEFAULT_BANKS = [
    {
      id: 'qb-101',
      questionBankTitle: 'Quantitative & Analytical Aptitude',
      title: 'Quantitative & Analytical Aptitude',
      description: 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.',
      desc: 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.',
      status: 'Published',
      updatedAt: '16 Sep 2026',
      usedInAssessments: 3,
      institute: 'InterviewOS Training Academy',
      stage: 'Aptitude',
      questionType: 'MCQ',
      contentType: 'text',
      optionsCount: 4,
      questionCount: DEFAULT_APTITUDE_MCQS.length,
      questions: [...DEFAULT_APTITUDE_MCQS]
    }
  ];

  // Specific sample banks that have been removed from the Trainer section
  const REMOVED_SAMPLE_BANK_KEYS = new Set([
    'qb-102',
    'qb-103',
    'qb-104',
    '102',
    '103',
    '104',
    'data structures & algorithms',
    'system design fundamentals',
    'business & technical communication'
  ]);

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================

  // IDs that were part of the old hardcoded mock dataset — purged on load.
  const LEGACY_HARDCODED_IDS = new Set([
    'question-001','question-002','question-003',
    'question-101','question-102',
    'question-201'
  ]);

  // Safe helper for bank institute
  function getBankInstitute(bank) {
    if (!bank) return 'InterviewOS Training Academy';
    return (
      bank.institute ||
      bank.instituteName ||
      bank.organization ||
      bank.company ||
      'InterviewOS Training Academy'
    );
  }

  // Safe helper for bank stage
  function getBankStage(bank) {
    if (!bank) return 'APTITUDE';
    const directVal = bank.stage || bank.category || bank.assessmentType || bank.section || '';
    if (directVal) {
      const upper = String(directVal).toUpperCase().trim();
      if (upper.includes('APTITUDE') || upper.includes('ANALYTICAL') || upper.includes('REASONING') || upper.includes('NUMERICAL')) return 'APTITUDE';
      if (upper.includes('COD') || upper.includes('PROGRAM') || upper.includes('ALGORITHM') || upper.includes('SYSTEM DESIGN') || upper.includes('DEV') || upper.includes('ENG')) return 'CODING';
      if (upper.includes('COMMUN') || upper.includes('VERBAL') || upper.includes('ENGLISH') || upper.includes('BEHAVIOR')) return 'COMMUNICATION';
      return upper;
    }
    const combined = ((bank.questionBankTitle || bank.title || '') + ' ' + (bank.description || bank.desc || '')).toLowerCase();
    if (combined.includes('coding') || combined.includes('data structure') || combined.includes('algorithm') || combined.includes('system design') || combined.includes('engineering') || combined.includes('programming') || combined.includes('software') || combined.includes('frontend') || combined.includes('backend') || combined.includes('network') || combined.includes('database')) {
      return 'CODING';
    }
    if (combined.includes('communication') || combined.includes('verbal') || combined.includes('english') || combined.includes('behavioral') || combined.includes('speaking') || combined.includes('comprehension')) {
      return 'COMMUNICATION';
    }
    return 'APTITUDE';
  }

  // Load and unify all question banks (exact parity with trainer-home.js)
  function loadAllQuestionBanks() {
    let deletedIds = new Set();
    try {
      const delRaw = localStorage.getItem('interviewos_deleted_question_banks');
      if (delRaw) {
        const parsed = JSON.parse(delRaw);
        if (Array.isArray(parsed)) {
          deletedIds = new Set(parsed.filter(Boolean).map(x => String(x).toLowerCase().trim()));
        }
      }
    } catch (e) {}

    // Ensure removed sample banks are marked as deleted
    REMOVED_SAMPLE_BANK_KEYS.forEach(key => deletedIds.add(key));

    deletedIds.delete('qb-101');
    deletedIds.delete('101');
    deletedIds.delete('quantitative & analytical aptitude');

    const map = new Map();
    DEFAULT_BANKS.forEach(b => {
      const idKey = String(b.id || '').toLowerCase().trim();
      const titleKey = String(b.questionBankTitle || b.title || '').toLowerCase().trim();
      if (!deletedIds.has(idKey) && !deletedIds.has(titleKey)) {
        map.set(b.id, {
          ...b,
          title: b.questionBankTitle || b.title,
          desc: b.description || b.desc,
          questions: Array.isArray(b.questions) ? [...b.questions] : []
        });
      }
    });

    try {
      const raw = localStorage.getItem('interviewos_question_banks');
      if (raw) {
        let stored = JSON.parse(raw);
        if (!Array.isArray(stored) && stored && typeof stored === 'object') {
          stored = [stored];
        }
        if (Array.isArray(stored) && stored.length > 0) {
          stored.forEach((b, idx) => {
            if (!b || typeof b !== 'object') return;

            const bTitle = String(b.questionBankTitle || b.title || '').trim().toLowerCase();
            const rawId = b.id !== undefined && b.id !== null ? String(b.id).trim() : '';
            const bId = rawId.toLowerCase();
            const bIdPlain = bId.replace(/^qb-/, '');

            if (
              (bId && (deletedIds.has(bId) || REMOVED_SAMPLE_BANK_KEYS.has(bId) || REMOVED_SAMPLE_BANK_KEYS.has(bIdPlain))) ||
              (bTitle && (deletedIds.has(bTitle) || REMOVED_SAMPLE_BANK_KEYS.has(bTitle)))
            ) {
              return;
            }

            const id = rawId || ('qb-storage-' + idx);
            let matchedKey = null;
            for (const [k, val] of map.entries()) {
              const kLower = String(k).toLowerCase().trim();
              const kPlain = kLower.replace(/^qb-/, '');
              const valTitle = String(val.questionBankTitle || val.title || '').toLowerCase().trim();

              const idMatches = Boolean(bId && (kLower === bId || kPlain === bIdPlain || ('qb-' + bIdPlain) === ('qb-' + kPlain)));
              const titleMatches = Boolean(bTitle && valTitle === bTitle);

              if (idMatches || titleMatches) {
                matchedKey = k;
                break;
              }
            }

            const hasQuestionsArray = Array.isArray(b.questions);
            const questions = hasQuestionsArray ? b.questions : [];
            const qCount = hasQuestionsArray
              ? b.questions.length
              : (typeof b.questionCount === 'number' ? b.questionCount : 0);

            const item = {
              id: matchedKey || id,
              questionBankTitle: b.questionBankTitle || b.title || (matchedKey && (map.get(matchedKey).questionBankTitle || map.get(matchedKey).title)) || 'Untitled Question Bank',
              title: b.questionBankTitle || b.title || (matchedKey && (map.get(matchedKey).questionBankTitle || map.get(matchedKey).title)) || 'Untitled Question Bank',
              description: b.description || b.desc || (matchedKey && (map.get(matchedKey).description || map.get(matchedKey).desc)) || 'Custom trainer question bank with curated MCQ questions.',
              desc: b.description || b.desc || (matchedKey && (map.get(matchedKey).description || map.get(matchedKey).desc)) || 'Custom trainer question bank with curated MCQ questions.',
              questions: questions,
              questionCount: qCount,
              status: b.status || (matchedKey && map.get(matchedKey).status) || 'Draft',
              updatedAt: b.updatedAt || (matchedKey && map.get(matchedKey).updatedAt) || 'Recent',
              usedInAssessments: b.usedInAssessments !== undefined ? b.usedInAssessments : (matchedKey ? map.get(matchedKey).usedInAssessments : 1),
              institute: getBankInstitute(b) || (matchedKey && getBankInstitute(map.get(matchedKey))),
              stage: getBankStage(b) || (matchedKey && getBankStage(map.get(matchedKey)))
            };

            if (matchedKey) {
              const existing = map.get(matchedKey);
              if ((!questions || questions.length === 0) && Array.isArray(existing.questions) && existing.questions.length > 0) {
                item.questions = existing.questions;
                item.questionCount = existing.questions.length;
              }
              map.set(matchedKey, Object.assign({}, existing, item));
            } else {
              map.set(id, item);
            }
          });
        }
      }
    } catch (err) {
      console.warn('LocalStorage retrieval error in loadAllQuestionBanks:', err);
    }

    // Reconcile and ensure Quantitative & Analytical Aptitude has the 4 MCQs
    reconcileQuantitativeAptitudeBank(map);

    const bankList = Array.from(map.values());
    return bankList.length > 0 ? bankList : DEFAULT_BANKS;
  }

  function reconcileQuantitativeAptitudeBank(map) {
    // 1. Gather all candidate questions from existing banks or local/session storage to reuse IDs
    const candidateQuestions = [];
    for (const bank of map.values()) {
      if (bank && Array.isArray(bank.questions)) {
        bank.questions.forEach(q => { if (q) candidateQuestions.push(q); });
      }
    }

    try {
      ['interviewos_questions', 'interviewos_staged_questions', 'ios_session_questions', 'interviewos_builder_questions'].forEach(k => {
        const raw = localStorage.getItem(k) || sessionStorage.getItem(k);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            parsed.forEach(q => { if (q) candidateQuestions.push(q); });
          }
        }
      });
    } catch (e) {}

    function matchTarget(targetDef) {
      const tNorm = targetDef.questionText.toLowerCase().replace(/[\r\n\s]+/g, ' ').trim();
      for (const q of candidateQuestions) {
        const qNorm = (q.questionText || q.text || '').toLowerCase().replace(/[\r\n\s]+/g, ' ').trim();
        if (qNorm === tNorm) return q;
        if (targetDef.matchKeywords && targetDef.matchKeywords.every(kw => qNorm.includes(kw.toLowerCase()))) {
          return q;
        }
      }
      return null;
    }

    const reconciledQuestions = DEFAULT_APTITUDE_MCQS.map((def, idx) => {
      const existingQ = matchTarget(def);
      if (existingQ) {
        return {
          ...def,
          ...existingQ,
          id: existingQ.id || def.id,
          order: idx + 1,
          sessionOrder: idx + 1,
          contentType: 'text',
          questionText: existingQ.questionText || def.questionText,
          text: existingQ.text || def.text,
          options: def.options.map((opt, oIdx) => {
            const exOpt = Array.isArray(existingQ.options) ? existingQ.options[oIdx] : null;
            const exText = exOpt ? (typeof exOpt === 'object' ? exOpt.text : exOpt) : opt.text;
            return {
              label: opt.label,
              text: exText || opt.text,
              imageUrl: '',
              isCorrect: opt.label === def.correctAnswer
            };
          }),
          correctAnswer: def.correctAnswer,
          correctIndex: def.correctIndex,
          positiveMarks: existingQ.positiveMarks !== undefined ? existingQ.positiveMarks : def.positiveMarks,
          negativeMarks: existingQ.negativeMarks !== undefined ? existingQ.negativeMarks : def.negativeMarks,
          difficulty: existingQ.difficulty || def.difficulty,
          priority: existingQ.priority || def.priority,
          relevance: existingQ.relevance || def.relevance,
          topicMarker: def.topicMarker,
          tags: Array.isArray(existingQ.tags) && existingQ.tags.length > 0 ? existingQ.tags : def.tags,
          stage: 'Aptitude'
        };
      }
      return { ...def };
    });

    // 2. Duplicate Protection: Check if a Question Bank with title "Quantitative & Analytical Aptitude" already exists
    let targetKey = null;
    for (const [k, val] of map.entries()) {
      const kLower = String(k).toLowerCase().trim();
      const valTitle = String(val.questionBankTitle || val.title || '').toLowerCase().trim();
      if (kLower === 'qb-101' || valTitle === 'quantitative & analytical aptitude') {
        targetKey = k;
        break;
      }
    }

    if (targetKey && map.has(targetKey)) {
      const existing = map.get(targetKey);
      existing.title = 'Quantitative & Analytical Aptitude';
      existing.questionBankTitle = 'Quantitative & Analytical Aptitude';
      existing.desc = 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.';
      existing.description = 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.';
      existing.stage = 'Aptitude';
      existing.status = existing.status || 'Published';
      existing.questionType = 'MCQ';
      existing.contentType = 'text';
      existing.questionCount = reconciledQuestions.length;
      existing.questions = reconciledQuestions;
      map.set(targetKey, existing);
    } else {
      const newBank = {
        id: 'qb-101',
        questionBankTitle: 'Quantitative & Analytical Aptitude',
        title: 'Quantitative & Analytical Aptitude',
        description: 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.',
        desc: 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.',
        status: 'Published',
        updatedAt: '16 Sep 2026',
        usedInAssessments: 3,
        institute: 'InterviewOS Training Academy',
        stage: 'Aptitude',
        questionType: 'MCQ',
        contentType: 'text',
        optionsCount: 4,
        defaultPositiveMarks: 1.0,
        defaultNegativeMarks: 0.25,
        defaultDifficulty: 'Medium',
        defaultPriority: 'Medium',
        defaultRelevance: 'Medium',
        questionCount: reconciledQuestions.length,
        questions: reconciledQuestions
      };
      map.set('qb-101', newBank);
    }

    // 3. Persist to localStorage
    try {
      const bankArray = Array.from(map.values());
      localStorage.setItem('interviewos_question_banks', JSON.stringify(bankArray));

      // Maintain deleted question banks list, keeping removed sample banks tracked
      const delRaw = localStorage.getItem('interviewos_deleted_question_banks');
      let delArr = [];
      if (delRaw) {
        const parsed = JSON.parse(delRaw);
        if (Array.isArray(parsed)) delArr = parsed;
      }
      delArr = delArr.filter(x => {
        const s = String(x).toLowerCase().trim();
        return s !== 'qb-101' && s !== '101' && s !== 'quantitative & analytical aptitude';
      });
      REMOVED_SAMPLE_BANK_KEYS.forEach(key => {
        if (!delArr.includes(key)) delArr.push(key);
      });
      localStorage.setItem('interviewos_deleted_question_banks', JSON.stringify(delArr));
    } catch (e) {}
  }

  let allBanks = loadAllQuestionBanks();

  // Resolve active question bank from URL parameter, storage, or fallback
  const urlParams = new URLSearchParams(window.location.search);
  const targetBankId = (
    urlParams.get('bankId') ||
    urlParams.get('id') ||
    sessionStorage.getItem('interviewos_selected_bank_id') ||
    localStorage.getItem('interviewos_selected_bank_id') ||
    ''
  ).toLowerCase().trim();

  const targetBankTitle = (
    urlParams.get('bankTitle') ||
    urlParams.get('title') ||
    sessionStorage.getItem('interviewos_selected_bank_title') ||
    localStorage.getItem('interviewos_selected_bank_title') ||
    ''
  ).toLowerCase().trim();

  const targetStageParam = (
    urlParams.get('stage') ||
    sessionStorage.getItem('interviewos_selected_stage') ||
    localStorage.getItem('interviewos_selected_stage') ||
    ''
  ).toLowerCase().trim();

  let activeBank = null;
  if (targetBankId) {
    const targetPlain = targetBankId.replace(/^qb-/, '');

    // 1. Direct match by ID in allBanks
    activeBank = allBanks.find(b => {
      const bId = String(b.id || '').toLowerCase().trim();
      const bPlain = bId.replace(/^qb-/, '');
      return bId === targetBankId || bPlain === targetPlain || ('qb-' + bPlain) === targetBankId || ('qb-' + targetPlain) === bId;
    });

    // 2. Direct check for qb-storage-X index
    if (!activeBank) {
      const storageMatch = targetBankId.match(/^qb-storage-(\d+)$/i);
      if (storageMatch) {
        const sIdx = parseInt(storageMatch[1], 10);
        activeBank = allBanks.find(b => {
          const bId = String(b.id || '').toLowerCase().trim();
          return bId === `qb-storage-${sIdx}`;
        });
      }
    }
  }

  // 3. Fallback to title match
  if (!activeBank && targetBankTitle) {
    activeBank = allBanks.find(b => {
      const bTitle = String(b.questionBankTitle || b.title || '').toLowerCase().trim();
      return bTitle === targetBankTitle || bTitle.includes(targetBankTitle) || targetBankTitle.includes(bTitle);
    });
  }

  // 4. Fallback to stage match
  if (!activeBank && targetStageParam) {
    activeBank = allBanks.find(b => {
      const bStage = String(b.stage || b.category || '').toLowerCase().trim();
      return bStage === targetStageParam || bStage.includes(targetStageParam);
    });
  }

  // 5. Ultimate fallback
  if (!activeBank) {
    activeBank = allBanks.length > 0 ? allBanks[0] : DEFAULT_BANKS[0];
  }

  // Resolved ID: preserve exact ID requested (e.g. qb-storage-1) or activeBank's ID
  const resolvedBankId = (activeBank && activeBank.id)
    ? String(activeBank.id)
    : (targetBankId ? targetBankId : 'qb-101');

  // Active working question bank (selected bank)
  let currentQuestionBank = {
    id: resolvedBankId,
    questionBankTitle: activeBank.questionBankTitle || activeBank.title || 'Untitled Question Bank',
    title: activeBank.questionBankTitle || activeBank.title || 'Untitled Question Bank',
    description: activeBank.description || activeBank.desc || 'Custom trainer question bank with curated MCQ questions.',
    desc: activeBank.description || activeBank.desc || 'Custom trainer question bank with curated MCQ questions.',
    status: activeBank.status || 'Published',
    updatedAt: activeBank.updatedAt || 'Recent',
    usedInAssessments: activeBank.usedInAssessments !== undefined ? activeBank.usedInAssessments : 1,
    institute: getBankInstitute(activeBank),
    stage: getBankStage(activeBank),
    questions: Array.isArray(activeBank.questions) ? JSON.parse(JSON.stringify(activeBank.questions)) : [],
    questionCount: Array.isArray(activeBank.questions) ? activeBank.questions.length : (activeBank.questionCount || 0)
  };

  // Active builder state
  let activeBuilderQuestionId = null; // null = adding new question
  // NOTE: builderContentType is removed — content type is now attachment-based (text + optional image)
  let builderOptions = [
    { label: 'A', text: '', imageUrl: '' },
    { label: 'B', text: '', imageUrl: '' },
    { label: 'C', text: '', imageUrl: '' },
    { label: 'D', text: '', imageUrl: '' }
  ];
  let builderCorrectAnswer = 'A';
  let builderTags = [];
  let builderImageUrl = ''; // question-level image

  // Flag: true when page was entered directly via #create-mcq from Trainer Workspace
  let enteredViaCreateMcq = false;

  // Session-created questions and active tab for Create MCQ navigation
  let sessionQuestions = [];
  let activeMcqTab = 'current'; // 'current' | 'previous'

  // Delete modal state
  let pendingDeleteQuestionId = null;

  // Staged assessment questions
  let stagedAssessmentQuestions = [];

  // Active question index in the Review View palette (0-based)
  let activeReviewQuestionIndex = 0;

  function persistBanks() {
    try {
      currentQuestionBank.questionCount = Array.isArray(currentQuestionBank.questions) ? currentQuestionBank.questions.length : 0;
      const targetId = String(currentQuestionBank.id || '').trim().toLowerCase();
      const targetIdPlain = targetId.replace(/^qb-/i, '');
      const targetTitle = String(currentQuestionBank.questionBankTitle || currentQuestionBank.title || '').trim().toLowerCase();

      let stored = [];
      const raw = localStorage.getItem('interviewos_question_banks');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) stored = parsed;
        else if (parsed && typeof parsed === 'object') stored = [parsed];
      }

      // Check if targetId matches qb-storage-X index
      const storageMatch = targetId.match(/^qb-storage-(\d+)$/i);
      let matchedIdx = -1;
      if (storageMatch) {
        const sIdx = parseInt(storageMatch[1], 10);
        if (stored[sIdx]) {
          matchedIdx = sIdx;
        }
      }

      if (matchedIdx < 0) {
        for (let i = 0; i < stored.length; i++) {
          const b = stored[i];
          if (!b) continue;
          const bId = String(b.id || ('qb-storage-' + i)).trim().toLowerCase();
          const bIdPlain = bId.replace(/^qb-/i, '');
          const bTitle = String(b.questionBankTitle || b.title || '').trim().toLowerCase();
          if ((targetId && (bId === targetId || bIdPlain === targetIdPlain)) || (targetTitle && bTitle && bTitle === targetTitle)) {
            matchedIdx = i;
            break;
          }
        }
      }

      const bankData = JSON.parse(JSON.stringify(currentQuestionBank));
      if (matchedIdx >= 0) {
        stored[matchedIdx] = Object.assign({}, stored[matchedIdx], bankData);
      } else {
        stored.push(bankData);
      }
      localStorage.setItem('interviewos_question_banks', JSON.stringify(stored));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  // ==========================================================================
  // DOM REFERENCES
  // ==========================================================================
  const dom = {
    // Tabs
    tabBtnQb: document.getElementById('tab-btn-qb'),
    tabBtnAssess: document.getElementById('tab-btn-assess'),
    panelQb: document.getElementById('panel-qb'),
    panelAssess: document.getElementById('panel-assess'),

    // Dedicated View Bank MCQ Question Review Interface
    qbViewBankFlow: document.getElementById('qb-view-bank-flow'),
    mcqViewHero: document.getElementById('mcq-view-hero'),
    viewBankNameBadge: document.getElementById('view-bank-name-badge'),
    viewBankNameBadgeWrap: document.getElementById('view-bank-name-badge-wrap'),
    viewStageBadge: document.getElementById('view-stage-badge'),
    viewStageBadgeWrap: document.getElementById('view-stage-badge-wrap'),
    viewCountBadge: document.getElementById('view-count-badge'),
    viewCountBadgeWrap: document.getElementById('view-count-badge-wrap'),
    viewBankTitleDisplay: document.getElementById('view-bank-title-display'),
    btnViewBackToQb: document.getElementById('btn-view-back-to-qb'),
    viewMcqNavTabsBar: document.getElementById('view-mcq-nav-tabs-bar'),
    viewTabBtnCurrentQ: document.getElementById('view-tab-btn-current-q'),
    viewTabBtnOverview: document.getElementById('view-tab-btn-overview'),
    viewTabNum: document.getElementById('view-tab-num'),
    viewMcqCard: document.getElementById('view-mcq-card'),
    viewOverviewPanel: document.getElementById('view-overview-panel'),
    viewOverviewLayout2col: document.getElementById('view-overview-layout-2col'),
    viewOverviewRowsContainer: document.getElementById('view-overview-rows-container'),
    viewOverviewCountPill: document.getElementById('view-overview-count-pill'),
    viewOverviewPaletteGrid: document.getElementById('view-overview-palette-grid'),
    viewOverviewEasyCount: document.getElementById('view-overview-easy-count'),
    viewOverviewMedCount: document.getElementById('view-overview-med-count'),
    viewOverviewHardCount: document.getElementById('view-overview-hard-count'),
    viewOverviewEmptyState: document.getElementById('view-overview-empty-state'),
    viewOverviewPagination: document.getElementById('view-overview-pagination'),
    btnOverviewPaginationPrev: document.getElementById('btn-overview-pagination-prev'),
    overviewPaginationIndicator: document.getElementById('overview-pagination-indicator'),
    btnOverviewPaginationNext: document.getElementById('btn-overview-pagination-next'),
    viewPalettePagination: document.getElementById('view-palette-pagination'),
    btnPalettePaginationPrev: document.getElementById('btn-palette-pagination-prev'),
    palettePaginationIndicator: document.getElementById('palette-pagination-indicator'),
    btnPalettePaginationNext: document.getElementById('btn-palette-pagination-next'),
    viewCardTitle: document.getElementById('view-card-title'),
    viewQText: document.getElementById('view-q-text'),
    viewImageWrap: document.getElementById('view-image-wrap'),
    viewImageImg: document.getElementById('view-image-img'),
    viewImgIndicator: document.getElementById('view-img-indicator'),
    viewOptionsContainer: document.getElementById('view-options-container'),
    viewStage: document.getElementById('view-stage'),
    viewDifficulty: document.getElementById('view-difficulty'),
    viewPriority: document.getElementById('view-priority'),
    viewPosMarks: document.getElementById('view-pos-marks'),
    viewNegMarks: document.getElementById('view-neg-marks'),
    viewTagsContainer: document.getElementById('view-tags-container'),
    btnViewCancel: document.getElementById('btn-view-cancel'),
    btnViewPrev: document.getElementById('btn-view-prev'),
    btnViewEdit: document.getElementById('btn-view-edit'),
    btnViewNext: document.getElementById('btn-view-next'),
    viewEmptyState: document.getElementById('view-empty-state'),
    btnViewEmptyCreate: document.getElementById('btn-view-empty-create'),

    // Dedicated Single Question View Screen
    singleQuestionViewScreen: document.getElementById('single-question-view-screen'),
    singleQBankBadge: document.getElementById('single-q-bank-badge'),
    singleQStageBadge: document.getElementById('single-q-stage-badge'),
    singleQPageTitle: document.getElementById('single-q-page-title'),
    btnSingleQBack: document.getElementById('btn-single-q-back'),
    singleQCard: document.getElementById('single-q-card'),
    singleQCardTitle: document.getElementById('single-q-card-title'),
    singleQDiffBadge: document.getElementById('single-q-diff-badge'),
    singleQText: document.getElementById('single-q-text'),
    singleQImageWrap: document.getElementById('single-q-image-wrap'),
    singleQImageImg: document.getElementById('single-q-image-img'),
    singleQOptionsContainer: document.getElementById('single-q-options-container'),
    singleQStage: document.getElementById('single-q-stage'),
    singleQDifficulty: document.getElementById('single-q-difficulty'),
    singleQPriority: document.getElementById('single-q-priority'),
    singleQPosMarks: document.getElementById('single-q-pos-marks'),
    singleQNegMarks: document.getElementById('single-q-neg-marks'),
    singleQTagsContainer: document.getElementById('single-q-tags-container'),
    btnSingleQFooterBack: document.getElementById('btn-single-q-footer-back'),
    btnSingleQPrev: document.getElementById('btn-single-q-prev'),
    btnSingleQEdit: document.getElementById('btn-single-q-edit'),
    btnSingleQNext: document.getElementById('btn-single-q-next'),

    // Legacy Question Review Interface (null-safe)
    qbReviewView: document.getElementById('qb-review-view'),
    qbReviewTitle: document.getElementById('qb-review-title'),
    qbReviewStage: document.getElementById('qb-review-stage'),
    qbReviewCount: document.getElementById('qb-review-count'),
    qbReviewPaletteCard: document.getElementById('qb-review-palette-card'),
    qbPaletteGrid: document.getElementById('qb-palette-grid'),
    qbPaletteCount: document.getElementById('qb-palette-count'),
    qbReviewCard: document.getElementById('qb-review-card'),
    qbReviewCardContent: document.getElementById('qb-review-card-content'),
    qbReviewEmptyState: document.getElementById('qb-review-empty-state'),
    btnReviewAddMcq: document.getElementById('btn-review-add-mcq'),
    btnEmptyCreateMcq: document.getElementById('btn-empty-create-mcq'),

    // Layout Elements for MCQ Builder Mode
    mainHeroEditorial: document.getElementById('main-hero-editorial'),
    mainTabsNavBar: document.getElementById('main-tabs-nav-bar'),
    qbHeaderCard: document.getElementById('qb-header-card'),
    mcqCreateHero: document.getElementById('mcq-create-hero'),
    tableContainerCard: document.getElementById('table-container-card'),

    // Top Summary Stats
    statTotalVal: document.getElementById('stat-total-val'),
    statPubVal: document.getElementById('stat-pub-val'),
    statDraftVal: document.getElementById('stat-draft-val'),
    statAssessVal: document.getElementById('stat-assess-val'),

    // Question Bank Detail View Header (Static / Focused Repository Mode)
    qbDetailTitle: document.getElementById('qb-detail-title'),
    qbDetailId: document.getElementById('qb-detail-id'),
    qbDetailInstitute: document.getElementById('qb-detail-institute'),
    qbDetailStage: document.getElementById('qb-detail-stage'),
    qbDetailStatus: document.getElementById('qb-detail-status'),
    qbDetailDesc: document.getElementById('qb-detail-desc'),
    qbDetailStatTotal: document.getElementById('qb-detail-stat-total'),
    qbDetailStatUpdated: document.getElementById('qb-detail-stat-updated'),
    qbDetailStatAssess: document.getElementById('qb-detail-stat-assess'),
    qbDetailStatStatus: document.getElementById('qb-detail-stat-status'),
    btnBackToQb: document.getElementById('btn-back-to-qb'),

    // Legacy Question Bank Header references (null-safe)
    qbBankTitle: document.getElementById('qb-bank-title'),
    qbCountChip: document.getElementById('qb-count-chip'),
    btnCreateMcq: document.getElementById('btn-create-mcq'),
    btnSaveBankMain: document.getElementById('btn-save-bank-main'),
    // btnSaveBankBottom removed — duplicate button deleted from HTML

    // Individual Question Builder
    individualMcqBuilder: document.getElementById('individual-mcq-builder'),
    builderCardTitle: document.getElementById('builder-card-title'),
    btnBuilderClose: document.getElementById('btn-builder-close'),
    builderValidationNotice: document.getElementById('builder-validation-notice'),
    // NOTE: builderSegText / builderSegImage removed — now attachment-based
    builderTextWrap: document.getElementById('builder-text-wrap'),
    builderImageWrap: document.getElementById('builder-image-wrap'),
    builderQText: document.getElementById('builder-q-text'),
    btnQAttachImage: document.getElementById('btn-q-attach-image'),
    builderImageZone: document.getElementById('builder-image-zone'),
    builderFileInput: document.getElementById('builder-file-input'),
    builderImagePreviewBox: document.getElementById('builder-image-preview-box'),
    builderImageImg: document.getElementById('builder-image-img'),
    qImgHintText: document.getElementById('q-img-hint-text'),
    btnBuilderRemoveImage: document.getElementById('btn-builder-remove-image'),
    builderOptionsContainer: document.getElementById('builder-options-container'),
    btnBuilderAddOption: document.getElementById('btn-builder-add-option'),
    builderStage: document.getElementById('builder-stage'),
    heroStageBadge: document.getElementById('hero-stage-badge'),
    heroStageBadgeWrap: document.getElementById('hero-stage-badge-wrap'),
    builderDifficulty: document.getElementById('builder-difficulty'),
    builderPriority: document.getElementById('builder-priority'),
    builderRelevance: document.getElementById('builder-relevance'),
    builderPosMarks: document.getElementById('builder-pos-marks'),
    builderNegMarks: document.getElementById('builder-neg-marks'),
    builderTagsContainer: document.getElementById('builder-tags-container'),
    builderTagInput: document.getElementById('builder-tag-input'),
    btnBuilderAddTag: document.getElementById('btn-builder-add-tag'),
    btnBuilderCancel: document.getElementById('btn-builder-cancel'),
    btnBuilderSaveQuestion: document.getElementById('btn-builder-save-question'),
    btnBuilderAddAnother: document.getElementById('btn-builder-add-another'),

    // MCQ Builder Tabs & Previous Questions Panel
    mcqNavTabsBar: document.getElementById('mcq-nav-tabs-bar'),
    tabBtnCurrentQ: document.getElementById('tab-btn-current-q'),
    tabBtnPreviousQ: document.getElementById('tab-btn-previous-q'),
    prevQCountBadge: document.getElementById('prev-q-count-badge'),
    previousQuestionsPanel: document.getElementById('previous-questions-panel'),
    prevQuestionsPanelTitle: document.getElementById('prev-questions-panel-title'),
    prevQuestionsListContainer: document.getElementById('prev-questions-list-container'),
    btnCreateNewFromPrev: document.getElementById('btn-create-new-from-prev'),

    // Saved Questions List
    tableCountDisplay: document.getElementById('table-count-display'),
    qbSearchInput: document.getElementById('qb-search-input'),
    qbGridPreview: document.getElementById('qb-grid-preview'),
    qbQuestionsListContainer: document.getElementById('qb-questions-list-container'),
    emptyStateBox: document.getElementById('empty-state-box'),

    // Tab 02 Assessment Integration
    assessQbSelect: document.getElementById('assess-qb-select'),
    assessQbPreviewBox: document.getElementById('assess-qb-preview-box'),
    btnAddSelectedAssess: document.getElementById('btn-add-selected-assess'),
    stagingList: document.getElementById('staging-list'),
    stagingCountDisplay: document.getElementById('staging-count-display'),
    stagingMarksDisplay: document.getElementById('staging-marks-display'),
    stagingSummaryQcount: document.getElementById('staging-summary-qcount'),
    btnCreateAssess: document.getElementById('btn-create-assess'),
    btnSaveAssessDraft: document.getElementById('btn-save-assess-draft'),

    // Delete Confirmation Modal
    modalDelete: document.getElementById('modal-delete'),
    btnCancelDelete: document.getElementById('btn-cancel-delete'),
    btnConfirmDelete: document.getElementById('btn-confirm-delete'),

    // Toast
    toastNotice: document.getElementById('toast-notification'),
    toastText: document.getElementById('toast-text'),

    // ── NEW: Question Review View ──────────────────────────────────────────
    qbReviewView: document.getElementById('qb-review-view'),
    qbReviewHeader: document.getElementById('qb-review-header'),
    qbReviewTitle: document.getElementById('qb-review-title'),
    qbReviewStage: document.getElementById('qb-review-stage'),
    qbReviewCount: document.getElementById('qb-review-count'),
    btnReviewAddMcq: document.getElementById('btn-review-add-mcq'),
    btnQbBulkUpload: document.getElementById('btn-qb-bulk-upload'),
    qbReviewPaletteCard: document.getElementById('qb-review-palette-card'),
    qbPaletteCount: document.getElementById('qb-palette-count'),
    qbPaletteGrid: document.getElementById('qb-palette-grid'),
    qbReviewCard: document.getElementById('qb-review-card'),
    qbReviewCardContent: document.getElementById('qb-review-card-content'),
    qbReviewEmptyState: document.getElementById('qb-review-empty-state'),
    btnEmptyCreateMcq: document.getElementById('btn-empty-create-mcq')
  };

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message) {
    if (!dom.toastNotice) return;
    dom.toastText.textContent = message;
    dom.toastNotice.classList.add('is-active');
    setTimeout(() => {
      dom.toastNotice.classList.remove('is-active');
    }, 3200);
  }

  // ==========================================================================
  // TAB SWITCHING
  // ==========================================================================
  function switchTab(tabId) {
    if (tabId === 'qb') {
      if (dom.tabBtnQb) dom.tabBtnQb.classList.add('is-active');
      if (dom.tabBtnAssess) dom.tabBtnAssess.classList.remove('is-active');
      if (dom.panelQb) dom.panelQb.classList.add('is-active');
      if (dom.panelAssess) dom.panelAssess.classList.remove('is-active');
      renderQuestionsList();
    } else {
      closeBuilder();
      if (dom.tabBtnAssess) dom.tabBtnAssess.classList.add('is-active');
      if (dom.tabBtnQb) dom.tabBtnQb.classList.remove('is-active');
      if (dom.panelAssess) dom.panelAssess.classList.add('is-active');
      if (dom.panelQb) dom.panelQb.classList.remove('is-active');
      renderAssessmentTab();
    }
  }

  // ==========================================================================
  // INDIVIDUAL MCQ BUILDER LOGIC
  // ==========================================================================
  function openBuilderForQuestion(questionId = null) {
    activeBuilderQuestionId = questionId;
    dom.builderValidationNotice.classList.remove('is-visible');
    dom.builderValidationNotice.textContent = '';

    const questions = currentQuestionBank.questions || [];

    if (questionId) {
      // Edit existing question
      const q = questions.find(item => item.id === questionId) || sessionQuestions.find(item => item.id === questionId);
      if (!q) return;

      const orderNum = q.sessionOrder || (sessionQuestions.findIndex(item => item.id === questionId) + 1) || q.order || 1;
      const orderStr = String(orderNum).padStart(2, '0');
      dom.builderCardTitle.textContent = `QUESTION ${orderStr} // MULTIPLE CHOICE QUESTION`;

      builderImageUrl = q.imageUrl || '';
      dom.builderQText.value = q.questionText || '';

      // Load options with backward-compat defaults
      builderOptions = (q.options || []).map(o => ({
        label: o.label,
        text: o.text || '',
        imageUrl: o.imageUrl || ''
      }));
      if (builderOptions.length < 2) {
        builderOptions = [
          { label: 'A', text: '', imageUrl: '' },
          { label: 'B', text: '', imageUrl: '' },
          { label: 'C', text: '', imageUrl: '' },
          { label: 'D', text: '', imageUrl: '' }
        ];
      }

      builderCorrectAnswer = q.correctAnswer || 'A';
      dom.builderDifficulty.value = q.difficulty || 'Medium';
      dom.builderPriority.value = q.priority || 'Medium';
      if (dom.builderRelevance) dom.builderRelevance.value = q.relevance || 'Medium';
      dom.builderPosMarks.value = q.positiveMarks !== undefined ? q.positiveMarks : 1.0;
      dom.builderNegMarks.value = q.negativeMarks !== undefined ? q.negativeMarks : 0.25;
      builderTags = [...(q.tags || [])];
      if (dom.builderStage) {
        dom.builderStage.value = q.stage || currentQuestionBank.stage || 'Aptitude';
      }
    } else {
      // Add new question
      const nextOrder = sessionQuestions.length + 1;
      const orderStr = String(nextOrder).padStart(2, '0');
      dom.builderCardTitle.textContent = `QUESTION ${orderStr} // MULTIPLE CHOICE QUESTION`;

      builderImageUrl = '';
      dom.builderQText.value = '';

      builderOptions = [
        { label: 'A', text: '', imageUrl: '' },
        { label: 'B', text: '', imageUrl: '' },
        { label: 'C', text: '', imageUrl: '' },
        { label: 'D', text: '', imageUrl: '' }
      ];

      builderCorrectAnswer = 'A';
      dom.builderDifficulty.value = 'Medium';
      dom.builderPriority.value = 'Medium';
      if (dom.builderRelevance) dom.builderRelevance.value = 'Medium';
      dom.builderPosMarks.value = 1.0;
      dom.builderNegMarks.value = 0.25;
      builderTags = [];
      if (dom.builderStage) {
        dom.builderStage.value = currentQuestionBank.stage || 'Aptitude';
      }
    }

    syncQuestionImageUI();
    renderBuilderOptions();
    renderBuilderTags();

    // Enter Create MCQ Mode: Hide review and repository elements, show ONLY MCQ form
    document.body.classList.add('mcq-builder-active');
    if (dom.qbViewBankFlow) dom.qbViewBankFlow.style.display = 'none';
    if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
    if (dom.qbReviewView) dom.qbReviewView.style.display = 'none';
    if (dom.mainHeroEditorial) dom.mainHeroEditorial.style.display = 'none';
    if (dom.mainTabsNavBar) dom.mainTabsNavBar.style.display = 'none';
    if (dom.qbHeaderCard) dom.qbHeaderCard.style.display = 'none';
    if (dom.tableContainerCard) dom.tableContainerCard.style.display = 'none';
    if (dom.mcqCreateHero) dom.mcqCreateHero.style.display = 'flex';
    if (dom.mcqNavTabsBar) dom.mcqNavTabsBar.style.display = 'flex';
    if (dom.btnCreateMcq) dom.btnCreateMcq.style.display = 'none';

    switchMcqTab('current');
    updateMcqTabCounts();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    dom.builderQText.focus();
  }

  function closeBuilder() {
    const hash = (window.location.hash || '').toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const action = (params.get('action') || '').toLowerCase();
    const isCreateMcq = hash === '#create-mcq' || hash.startsWith('#create-mcq') || action === 'create' || enteredViaCreateMcq;

    // Clear hash so it doesn't force re-opening builder
    if (window.location.hash) {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch (e) {}
    }

    // If entered via Create MCQ without a bankId in query, return to Trainer Workspace
    if (isCreateMcq && !params.get('bankId') && !params.get('id')) {
      window.location.href = 'trainer-home.html';
      return;
    }

    // Otherwise restore Question Review view on the current page
    showQuestionBankDetailRoute();
    activeBuilderQuestionId = null;
  }

  // Sync question-level image UI: show/hide attach zone, preview, hint
  function syncQuestionImageUI() {
    const hasImage = !!builderImageUrl;
    if (hasImage) {
      dom.builderImageWrap.style.display = 'flex';
      dom.builderImageImg.src = builderImageUrl;
      dom.builderImagePreviewBox.style.display = 'flex';
      if (dom.builderImageZone) dom.builderImageZone.style.display = 'none';
      if (dom.qImgHintText) dom.qImgHintText.style.display = 'none';
    } else {
      dom.builderImageImg.src = '';
      dom.builderImagePreviewBox.style.display = 'none';
      dom.builderImageWrap.style.display = 'none';
      if (dom.builderImageZone) dom.builderImageZone.style.display = 'none';
      if (dom.qImgHintText) dom.qImgHintText.style.display = 'none';
    }
  }

  function renderBuilderOptions() {
    dom.builderOptionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const total = builderOptions.length;

    builderOptions.forEach((opt, idx) => {
      opt.label = letters[idx] || String.fromCharCode(65 + idx);
      opt.text = opt.text || '';
      opt.imageUrl = opt.imageUrl || '';

      const isCorrect = opt.label === builderCorrectAnswer;
      const canRemove = total > 2;
      const hasImage = !!opt.imageUrl;
      const hasText = !!(opt.text && opt.text.trim());
      const isImageOnly = hasImage && !hasText;

      const row = document.createElement('div');
      row.className = `builder-option-row ${isCorrect ? 'is-correct-answer' : ''}`;

      row.innerHTML = `
        <div class="opt-left-group">
          <label class="builder-option-radio-label" title="Mark Option ${opt.label} as correct answer">
            <input type="radio" name="builder_opt_radio" value="${opt.label}" ${isCorrect ? 'checked' : ''} />
            <span class="opt-label-text">OPT ${opt.label}</span>
          </label>
        </div>

        <div class="opt-middle-group">
          <input type="text" class="builder-option-input form-input" placeholder="Enter option ${opt.label} text..." value="${escapeHtml(opt.text)}" style="${isImageOnly ? 'display: none;' : ''}" />
          ${hasImage ? `
            <div class="opt-compact-preview">
              <img src="${opt.imageUrl}" alt="Option ${opt.label} attachment" />
              <span class="opt-preview-tag">Image attached</span>
              <button type="button" class="opt-img-remove" title="Remove option image">✕ REMOVE</button>
            </div>
          ` : ''}
        </div>

        <div class="opt-right-group">
          <button type="button" class="attach-img-btn opt-attach-btn" title="Attach image to option ${opt.label}">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>+ IMAGE</span>
          </button>
          <input type="file" class="opt-file-input" accept="image/*" style="display:none;" />

          <button type="button" class="btn-trash-opt btn-remove-builder-opt" data-index="${idx}" ${canRemove ? '' : 'disabled'} title="${canRemove ? `Delete option ${opt.label}` : 'Minimum 2 options required'}" aria-label="Delete option ${opt.label}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      `;

      // ── Radio: mark correct answer
      const radio = row.querySelector('input[type="radio"]');
      radio.addEventListener('change', () => {
        builderCorrectAnswer = opt.label;
        renderBuilderOptions();
      });

      // ── Text input: sync to state
      const textInput = row.querySelector('.builder-option-input');
      textInput.addEventListener('input', (e) => { opt.text = e.target.value; });
      textInput.addEventListener('blur', () => {
        if (hasImage && !opt.text.trim()) {
          renderBuilderOptions();
        }
      });

      // ── + IMAGE button: trigger file input
      const attachBtn = row.querySelector('.opt-attach-btn');
      const fileInput = row.querySelector('.opt-file-input');
      if (attachBtn && fileInput) {
        attachBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (re) => {
              opt.imageUrl = re.target.result;
              renderBuilderOptions();
            };
            reader.readAsDataURL(file);
          }
        });
      }

      // ── Remove image
      const removeImgBtn = row.querySelector('.opt-img-remove');
      if (removeImgBtn) {
        removeImgBtn.addEventListener('click', () => {
          opt.imageUrl = '';
          renderBuilderOptions();
        });
      }

      // ── Remove option
      const btnRemove = row.querySelector('.btn-remove-builder-opt');
      btnRemove.addEventListener('click', () => {
        if (builderOptions.length <= 2) return;
        builderOptions.splice(idx, 1);
        if (builderCorrectAnswer === opt.label) builderCorrectAnswer = 'A';
        renderBuilderOptions();
      });

      dom.builderOptionsContainer.appendChild(row);
    });

    if (builderOptions.length >= 4) {
      dom.btnBuilderAddOption.disabled = true;
      dom.btnBuilderAddOption.textContent = 'MAXIMUM 4 OPTIONS REACHED';
    } else {
      dom.btnBuilderAddOption.disabled = false;
      dom.btnBuilderAddOption.textContent = `+ ADD OPTION (${builderOptions.length + 1} OF 4)`;
    }
  }

  function renderBuilderTags() {
    dom.builderTagsContainer.innerHTML = '';
    builderTags.forEach((tag, idx) => {
      const chip = document.createElement('span');
      chip.className = 'tag-interactive-chip is-selected';
      chip.innerHTML = `#${escapeHtml(tag)} <span class="tag-remove-x" data-index="${idx}">✕</span>`;
      chip.querySelector('.tag-remove-x').addEventListener('click', () => {
        builderTags.splice(idx, 1);
        renderBuilderTags();
      });
      dom.builderTagsContainer.appendChild(chip);
    });
  }

  function addBuilderTag() {
    const raw = dom.builderTagInput.value.trim();
    const warnEl = document.getElementById('tm-duplicate-warn');
    if (!raw) return;

    // Case-insensitive duplicate check
    const isDuplicate = builderTags.some(t => t.toLowerCase() === raw.toLowerCase());
    if (isDuplicate) {
      if (warnEl) { warnEl.style.display = 'block'; }
      return;
    }

    if (warnEl) { warnEl.style.display = 'none'; }
    builderTags.push(raw);
    renderBuilderTags();
    dom.builderTagInput.value = '';
    dom.builderTagInput.focus();
    closeTmDropdown();
  }

  function validateQuestionPayload() {
    const qText = dom.builderQText.value.trim();

    // 1. Question must have text OR image (or both)
    if (!qText && !builderImageUrl) {
      showBuilderError('Add question text or attach a question image.');
      dom.builderQText.focus();
      return null;
    }

    // 2. Options count (min 2, max 4)
    if (builderOptions.length < 2) {
      showBuilderError('A minimum of 2 answer options is required.');
      return null;
    }
    if (builderOptions.length > 4) {
      showBuilderError('A maximum of 4 answer options is allowed.');
      return null;
    }

    // 3. Each option must have text OR image (or both)
    for (let i = 0; i < builderOptions.length; i++) {
      const opt = builderOptions[i];
      if (!opt.text.trim() && !opt.imageUrl) {
        showBuilderError(`Option ${opt.label}: add option text or attach an option image.`);
        return null;
      }
    }

    // 4. Correct answer
    if (!builderCorrectAnswer) {
      showBuilderError('Please select one correct answer radio.');
      return null;
    }

    // 5. Marks
    const pos = parseFloat(dom.builderPosMarks.value);
    const neg = parseFloat(dom.builderNegMarks.value);
    if (isNaN(pos) || pos < 0) {
      showBuilderError('Positive marks must be 0 or greater.');
      return null;
    }
    if (isNaN(neg) || neg < 0) {
      showBuilderError('Negative marks penalty must be 0 or greater.');
      return null;
    }

    dom.builderValidationNotice.classList.remove('is-visible');
    dom.builderValidationNotice.textContent = '';

    // Determine legacy contentType for backward compat
    const legacyContentType = builderImageUrl && !qText ? 'image' : 'text';

    return {
      // Legacy fields — kept for backward compatibility
      contentType: legacyContentType,
      questionText: qText || '',
      imageUrl: builderImageUrl || '',
      // Unified content object
      questionContent: {
        text: qText || '',
        imageUrl: builderImageUrl || ''
      },
      options: builderOptions.map(o => ({
        label: o.label,
        text: (o.text || '').trim(),
        imageUrl: o.imageUrl || '',
        isCorrect: o.label === builderCorrectAnswer
      })),
      correctAnswer: builderCorrectAnswer,
      positiveMarks: pos,
      negativeMarks: neg,
      difficulty: dom.builderDifficulty.value || 'Medium',
      priority: dom.builderPriority.value || 'Medium',
      relevance: dom.builderRelevance ? dom.builderRelevance.value : 'Medium',
      tags: [...builderTags],
      stage: (dom.builderStage ? dom.builderStage.value : currentQuestionBank.stage) || 'Aptitude'
    };
  }

  function showBuilderError(msg) {
    dom.builderValidationNotice.textContent = msg;
    dom.builderValidationNotice.classList.add('is-visible');
  }

  function saveCurrentQuestion(closeAfterSave = true) {
    const payload = validateQuestionPayload();
    if (!payload) return false;

    if (!currentQuestionBank.questions) currentQuestionBank.questions = [];

    let savedQuestionObj = null;

    if (activeBuilderQuestionId) {
      // Updating existing question
      const idx = currentQuestionBank.questions.findIndex(q => q.id === activeBuilderQuestionId);
      const sessionIdx = sessionQuestions.findIndex(q => q.id === activeBuilderQuestionId);
      const sessionOrder = sessionIdx >= 0 ? sessionQuestions[sessionIdx].sessionOrder : (sessionQuestions.length || 1);

      savedQuestionObj = {
        ...payload,
        id: activeBuilderQuestionId,
        order: idx >= 0 ? currentQuestionBank.questions[idx].order : (currentQuestionBank.questions.length + 1),
        sessionOrder: sessionOrder
      };

      if (idx >= 0) {
        currentQuestionBank.questions[idx] = savedQuestionObj;
        activeReviewQuestionIndex = idx;
      } else {
        currentQuestionBank.questions.push(savedQuestionObj);
        activeReviewQuestionIndex = currentQuestionBank.questions.length - 1;
      }

      if (sessionIdx >= 0) {
        sessionQuestions[sessionIdx] = savedQuestionObj;
      } else {
        sessionQuestions.push(savedQuestionObj);
      }

      showToast(`Question ${String(sessionOrder).padStart(2, '0')} updated.`);
    } else {
      // Adding new question
      const sessionOrder = sessionQuestions.length + 1;
      const newOrder = currentQuestionBank.questions.length + 1;
      const newId = 'question-' + String(Date.now()).slice(-6);

      savedQuestionObj = {
        ...payload,
        id: newId,
        order: newOrder,
        sessionOrder: sessionOrder
      };

      currentQuestionBank.questions.push(savedQuestionObj);
      sessionQuestions.push(savedQuestionObj);

      showToast(`Question ${String(sessionOrder).padStart(2, '0')} saved.`);
    }

    persistBanks();
    renderQuestionsList();
    renderPreviousQuestionsList();
    updateMcqTabCounts();

    if (closeAfterSave) {
      closeBuilder();
    }
    return true;
  }

  // ==========================================================================
  // TOPIC MARKER AUTOCOMPLETE & SUGGESTIONS
  // ==========================================================================
  const TOPIC_SUGGESTIONS = [
    'Percentages',
    'Profit and Loss',
    'Probability',
    'Permutation and Combination',
    'Partnership',
    'Number System',
    'Time and Work',
    'Time, Speed and Distance',
    'Ratio and Proportion',
    'Averages',
    'Simple Interest',
    'Compound Interest',
    'Logical Reasoning',
    'Quantitative Aptitude',
    'Data Interpretation',
    'Verbal Ability'
  ];

  function getAllAvailableTopics() {
    const set = new Set(TOPIC_SUGGESTIONS);
    if (currentQuestionBank && Array.isArray(currentQuestionBank.questions)) {
      currentQuestionBank.questions.forEach(q => {
        if (Array.isArray(q.tags)) {
          q.tags.forEach(t => { if (t && typeof t === 'string' && t.trim()) set.add(t.trim()); });
        }
        if (q.topicMarker && typeof q.topicMarker === 'string' && q.topicMarker.trim()) {
          set.add(q.topicMarker.trim());
        }
        if (q.topic && typeof q.topic === 'string' && q.topic.trim()) {
          set.add(q.topic.trim());
        }
      });
    }
    return Array.from(set);
  }

  function getTopicRank(topic, q) {
    const lower = topic.toLowerCase();
    if (lower === q) return 1; // exact match
    if (lower.startsWith(q)) return 2; // starts with query
    const words = lower.split(/[\s,/-]+/);
    if (words.some(w => w.startsWith(q))) return 3; // a word in topic starts with query
    if (lower.includes(q)) return 4; // substring match
    return -1; // no match
  }

  function getMatchingTopics(query) {
    const q = (query || '').toLowerCase().trim();
    if (!q) return [];

    const allTopics = getAllAvailableTopics();
    const scored = [];

    allTopics.forEach((topic, originalIndex) => {
      const rank = getTopicRank(topic, q);
      if (rank > 0) {
        scored.push({ topic, rank, originalIndex });
      }
    });

    scored.sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return a.originalIndex - b.originalIndex;
    });

    return scored.slice(0, 5).map(item => item.topic);
  }

  function closeTmDropdown() {
    const dd = document.getElementById('tm-suggestion-dropdown');
    if (dd) {
      dd.style.display = 'none';
      dd.innerHTML = '';
    }
  }

  function initTopicAutocomplete() {
    const input  = dom.builderTagInput;
    const ddEl   = document.getElementById('tm-suggestion-dropdown');
    const warnEl = document.getElementById('tm-duplicate-warn');
    if (!input || !ddEl) return;

    let highlightedIndex = -1;

    function renderSuggestions(query) {
      const q = (query || '').toLowerCase().trim();
      if (!q) {
        closeTmDropdown();
        return;
      }

      const matches = getMatchingTopics(q);
      if (matches.length === 0) {
        closeTmDropdown();
        return;
      }

      highlightedIndex = -1;
      ddEl.innerHTML = '';

      matches.forEach((topic) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'tm-suggestion-item';
        card.dataset.topic = topic;
        card.textContent = topic;

        const selectHandler = (e) => {
          e.preventDefault();
          input.value = topic;
          if (warnEl) warnEl.style.display = 'none';
          closeTmDropdown();
          input.focus();
        };

        card.addEventListener('mousedown', selectHandler);
        card.addEventListener('click', selectHandler);

        ddEl.appendChild(card);
      });

      ddEl.style.display = 'flex';
    }

    // Suggestions dynamically appear when user types text in the input
    input.addEventListener('input', () => {
      if (warnEl) warnEl.style.display = 'none';
      renderSuggestions(input.value);
    });

    // If focused and input already has text, re-render suggestions
    input.addEventListener('focus', () => {
      if (input.value && input.value.trim().length > 0) {
        renderSuggestions(input.value);
      }
    });

    // Arrow key navigation through suggestions
    input.addEventListener('keydown', (e) => {
      const items = ddEl.querySelectorAll('.tm-suggestion-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        highlightedIndex = Math.max(highlightedIndex - 1, -1);
      } else {
        return;
      }

      items.forEach((item, i) => {
        item.classList.toggle('is-highlighted', i === highlightedIndex);
      });

      if (highlightedIndex >= 0) {
        input.value = items[highlightedIndex].dataset.topic || items[highlightedIndex].textContent.trim();
      }
    });

    // Close when clicking anywhere outside the Topic Marker wrapper
    document.addEventListener('click', (e) => {
      const wrap = input.closest('.tm-input-wrap');
      if (wrap && !wrap.contains(e.target)) {
        closeTmDropdown();
      }
    });
  }

  function switchMcqTab(tabName) {
    activeMcqTab = tabName;

    if (tabName === 'previous') {
      if (dom.tabBtnCurrentQ) dom.tabBtnCurrentQ.classList.remove('is-active');
      if (dom.tabBtnPreviousQ) dom.tabBtnPreviousQ.classList.add('is-active');

      if (dom.individualMcqBuilder) dom.individualMcqBuilder.classList.add('is-tab-hidden');
      if (dom.previousQuestionsPanel) {
        dom.previousQuestionsPanel.classList.remove('is-tab-hidden');
        renderPreviousQuestionsList();
      }
    } else {
      // 'current'
      if (dom.tabBtnCurrentQ) dom.tabBtnCurrentQ.classList.add('is-active');
      if (dom.tabBtnPreviousQ) dom.tabBtnPreviousQ.classList.remove('is-active');

      if (dom.previousQuestionsPanel) dom.previousQuestionsPanel.classList.add('is-tab-hidden');
      if (dom.individualMcqBuilder) dom.individualMcqBuilder.classList.remove('is-tab-hidden');
    }
  }

  function updateMcqTabCounts() {
    if (dom.prevQCountBadge) {
      dom.prevQCountBadge.textContent = sessionQuestions.length;
    }
    if (dom.prevQuestionsPanelTitle) {
      const count = sessionQuestions.length;
      dom.prevQuestionsPanelTitle.textContent = `PREVIOUS QUESTIONS // ${count} QUESTION${count === 1 ? '' : 'S'} SAVED`;
    }
  }

  function renderPreviousQuestionsList() {
    if (!dom.prevQuestionsListContainer) return;

    updateMcqTabCounts();

    if (sessionQuestions.length === 0) {
      dom.prevQuestionsListContainer.innerHTML = `
        <div style="border: 2px dashed var(--black); background: var(--white); padding: 36px 20px; text-align: center; margin: 8px 0;">
          <div style="font-family: var(--font-mono, monospace); font-size: 13px; font-weight: 900; color: var(--black); letter-spacing: 0.05em; text-transform: uppercase;">
            NO PREVIOUS QUESTIONS YET
          </div>
          <div style="font-size: 12px; color: var(--gray-600); margin-top: 6px; font-family: var(--font-sans);">
            Questions created during this session will appear here in creation order. Click "ADD ANOTHER QUESTION" on the Current Question form to save and build multiple questions.
          </div>
          <button type="button" class="btn-primary-yellow" id="btn-empty-start-q" style="margin-top: 16px; height: 36px; font-size: 11px; padding: 0 16px; display: inline-flex; align-items: center; gap: 6px;">
            START CREATING QUESTION 01 →
          </button>
        </div>
      `;
      const btnStart = document.getElementById('btn-empty-start-q');
      if (btnStart) {
        btnStart.addEventListener('click', () => {
          activeBuilderQuestionId = null;
          openBuilderForQuestion(null);
          switchMcqTab('current');
        });
      }
      return;
    }

    let html = '';
    sessionQuestions.forEach((q, idx) => {
      const orderNum = q.sessionOrder || (idx + 1);
      const orderStr = String(orderNum).padStart(2, '0');
      const stage = q.stage || currentQuestionBank.stage || 'Aptitude';
      const diff = q.difficulty || 'Medium';
      const previewText = q.questionText || (q.imageUrl ? '[IMAGE-ATTACHED QUESTION]' : 'Untitled Question');
      const optCount = q.options ? q.options.length : 0;
      const correctOpt = q.correctAnswer || 'A';
      const posMarks = q.positiveMarks !== undefined ? q.positiveMarks : 1;
      const negMarks = q.negativeMarks !== undefined ? q.negativeMarks : 0.25;

      html += `
        <div class="prev-q-card" data-qid="${q.id}" title="Click to edit Question ${orderStr}">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <span style="font-family:var(--font-mono);font-size:12px;font-weight:900;background:var(--black);color:var(--white);padding:3px 8px;">QUESTION ${orderStr}</span>
              <span style="font-family:var(--font-mono);font-size:10px;font-weight:800;background:var(--yellow);color:var(--black);border:1px solid var(--black);padding:2px 6px;">STAGE: ${escapeHtml(stage.toUpperCase())}</span>
              <span style="font-family:var(--font-mono);font-size:10px;font-weight:800;background:var(--gray-100);color:var(--black);border:1px solid var(--black);padding:2px 6px;">DIFF: ${escapeHtml(diff.toUpperCase())}</span>
              ${q.tags && q.tags.length ? `<span style="font-family:var(--font-mono);font-size:10px;font-weight:700;color:var(--gray-700);background:#f3f4f6;border:1px solid var(--black);padding:2px 6px;"># ${escapeHtml(q.tags[0])}</span>` : ''}
            </div>
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-family:var(--font-mono);font-size:9.5px;font-weight:900;color:#15803d;background:#f0fdf4;border:1px solid #16a34a;padding:2px 7px;">SAVED</span>
              <button type="button" class="btn-secondary btn-edit-prev-item" data-qid="${q.id}" style="height:28px;font-size:10.5px;padding:0 10px;font-weight:800;display:inline-flex;align-items:center;gap:5px;" title="Edit Question ${orderStr}">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                <span>EDIT ↗</span>
              </button>
              <button type="button" class="btn-secondary btn-del-prev-item" data-qid="${q.id}" style="height:28px;font-size:10.5px;padding:0 10px;font-weight:800;color:var(--red);border-color:var(--red);display:inline-flex;align-items:center;gap:5px;" title="Delete Question ${orderStr}">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                <span>DELETE</span>
              </button>
            </div>
          </div>

          <div style="font-family:var(--font-sans);font-size:13.5px;font-weight:600;color:var(--black);margin-bottom:8px;line-height:1.45;word-break:break-word;">
            ${escapeHtml(previewText)}
          </div>

          <div style="display:flex;align-items:center;gap:14px;font-family:var(--font-mono);font-size:11px;color:var(--gray-600);flex-wrap:wrap;">
            <span>${optCount} OPTIONS</span>
            <span>CORRECT: <strong style="color:var(--black);background:var(--yellow);padding:1px 6px;border:1px solid var(--black);">OPT ${escapeHtml(correctOpt)}</strong></span>
            <span>MARKS: <strong>+${posMarks} / -${negMarks}</strong></span>
          </div>
        </div>
      `;
    });

    dom.prevQuestionsListContainer.innerHTML = html;

    dom.prevQuestionsListContainer.querySelectorAll('.prev-q-card').forEach((card) => {
      const qid = card.dataset.qid;
      card.addEventListener('click', () => {
        openBuilderForQuestion(qid);
        switchMcqTab('current');
      });
    });

    dom.prevQuestionsListContainer.querySelectorAll('.btn-edit-prev-item').forEach((btn) => {
      const qid = btn.dataset.qid;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openBuilderForQuestion(qid);
        switchMcqTab('current');
      });
    });

    dom.prevQuestionsListContainer.querySelectorAll('.btn-del-prev-item').forEach((btn) => {
      const qid = btn.dataset.qid;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        promptDeleteQuestion(qid);
      });
    });
  }

  function addAnotherQuestion() {
    const success = saveCurrentQuestion(false);
    if (!success) return;

    // Reset for next question — no data carried over from previous question
    activeBuilderQuestionId = null;
    const nextOrder = sessionQuestions.length + 1;
    const orderStr = String(nextOrder).padStart(2, '0');
    dom.builderCardTitle.textContent = `QUESTION ${orderStr} // MULTIPLE CHOICE QUESTION`;

    builderImageUrl = '';
    dom.builderQText.value = '';
    dom.builderImageWrap.style.display = 'none';

    builderOptions = [
      { label: 'A', text: '', imageUrl: '' },
      { label: 'B', text: '', imageUrl: '' },
      { label: 'C', text: '', imageUrl: '' },
      { label: 'D', text: '', imageUrl: '' }
    ];
    builderCorrectAnswer = 'A';
    dom.builderDifficulty.value = 'Medium';
    dom.builderPriority.value = 'Medium';
    if (dom.builderRelevance) dom.builderRelevance.value = 'Medium';
    dom.builderPosMarks.value = 1.0;
    dom.builderNegMarks.value = 0.25;
    builderTags = [];

    syncQuestionImageUI();
    renderBuilderOptions();
    renderBuilderTags();

    switchMcqTab('current');
    updateMcqTabCounts();

    dom.builderQText.focus();
    showToast(`Saved to Previous Questions. Now creating Question ${orderStr}.`);
  }

  // ==========================================================================
  // QUESTION NUMBER GRID PREVIEW (QUESTION BANK ONLY)
  // ==========================================================================
  function getQuestionTopicInfo(q) {
    let list = [];
    if (Array.isArray(q.tags) && q.tags.length > 0) {
      list = q.tags.map(t => String(t).trim()).filter(Boolean);
    } else if (q.topicMarker) {
      list = [String(q.topicMarker).trim()].filter(Boolean);
    } else if (q.topic) {
      list = [String(q.topic).trim()].filter(Boolean);
    }

    if (list.length === 0) {
      return {
        display: 'NO TOPIC',
        fullTitle: 'NO TOPIC',
        hasTopic: false
      };
    }

    const firstTopic = list[0];
    const extraCount = list.length - 1;
    const display = extraCount > 0 ? `${firstTopic} +${extraCount}` : firstTopic;
    const fullTitle = list.join(', ');

    return {
      display: display,
      fullTitle: fullTitle,
      hasTopic: true
    };
  }

  function getDifficultyInfo(diff) {
    const d = (diff || '').trim().toLowerCase();
    if (d === 'easy') {
      return {
        label: 'EASY',
        pillClass: 'qb-diff--easy',
        itemClass: 'qb-grid-item--easy'
      };
    } else if (d === 'medium') {
      return {
        label: 'MEDIUM',
        pillClass: 'qb-diff--medium',
        itemClass: 'qb-grid-item--medium'
      };
    } else if (d === 'hard') {
      return {
        label: 'HARD',
        pillClass: 'qb-diff--hard',
        itemClass: 'qb-grid-item--hard'
      };
    } else {
      return {
        label: diff ? String(diff).toUpperCase() : 'NOT SET',
        pillClass: 'qb-diff--not-set',
        itemClass: 'qb-grid-item--not-set'
      };
    }
  }

  function renderQuestionGrid(questions, activeQuery = '') {
    if (!dom.qbGridPreview) return;

    if (!questions || questions.length === 0) {
      dom.qbGridPreview.style.display = 'none';
      dom.qbGridPreview.innerHTML = '';
      return;
    }

    dom.qbGridPreview.style.display = 'block';
    dom.qbGridPreview.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'qb-grid-header';
    header.innerHTML = `
      <div class="qb-grid-title-group">
        <span class="qb-grid-badge">QUESTION MAP</span>
        <span class="qb-grid-title">QUESTION NUMBER PALETTE</span>
        <span class="qb-grid-count">(${questions.length} ${questions.length === 1 ? 'QUESTION' : 'QUESTIONS'})</span>
      </div>
      <div class="qb-grid-legend">
        <span class="qb-legend-item"><span class="qb-legend-dot qb-legend--easy"></span>EASY</span>
        <span class="qb-legend-item"><span class="qb-legend-dot qb-legend--medium"></span>MEDIUM</span>
        <span class="qb-legend-item"><span class="qb-legend-dot qb-legend--hard"></span>HARD</span>
      </div>
    `;
    dom.qbGridPreview.appendChild(header);

    const cellsContainer = document.createElement('div');
    cellsContainer.className = 'qb-grid-cells';

    const qLower = (activeQuery || '').toLowerCase().trim();

    questions.forEach((q, idx) => {
      const orderNum = q.order || (idx + 1);
      const orderStr = String(orderNum).padStart(2, '0');

      const topicInfo = getQuestionTopicInfo(q);
      const diffInfo = getDifficultyInfo(q.difficulty);

      const isMatch = !qLower ||
        (q.questionText || '').toLowerCase().includes(qLower) ||
        (q.tags || []).some(t => (t || '').toLowerCase().includes(qLower)) ||
        (q.difficulty || '').toLowerCase().includes(qLower);

      const cell = document.createElement('div');
      cell.className = `qb-grid-item ${diffInfo.itemClass} ${!isMatch ? 'is-dimmed' : ''}`;
      cell.dataset.id = q.id;
      cell.title = `Question ${orderStr} • Difficulty: ${diffInfo.label} • Topic: ${topicInfo.fullTitle}`;

      cell.innerHTML = `
        <div class="qb-grid-item-top">
          <span class="qb-grid-item-num">${orderStr}</span>
          <span class="qb-grid-item-diff ${diffInfo.pillClass}">${diffInfo.label}</span>
        </div>
        <div class="qb-grid-item-topic ${!topicInfo.hasTopic ? 'is-empty' : ''}" title="${escapeHtml(topicInfo.fullTitle)}">
          ${escapeHtml(topicInfo.display)}
        </div>
      `;

      cell.addEventListener('click', () => {
        const card = dom.qbQuestionsListContainer.querySelector(`.q-item-card[data-id="${q.id}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.transition = 'outline 0.2s ease, box-shadow 0.2s ease';
          card.style.outline = '3px solid var(--black)';
          card.style.boxShadow = 'var(--shadow-hard)';
          setTimeout(() => {
            card.style.outline = '';
            card.style.boxShadow = '';
          }, 1400);
        }
      });

      cellsContainer.appendChild(cell);
    });

    dom.qbGridPreview.appendChild(cellsContainer);
  }

  // ==========================================================================
  // QUESTION BANK DETAIL HEADER RENDERING (STATIC REPOSITORY VIEW)
  // ==========================================================================
  function renderBankDetailHeader() {
    const qCount = (currentQuestionBank.questions || []).length;
    currentQuestionBank.questionCount = qCount;

    // ── NEW COMPACT REVIEW HEADER ──────────────────────────────────────────
    if (dom.qbReviewTitle) {
      dom.qbReviewTitle.textContent = (currentQuestionBank.questionBankTitle || 'UNTITLED QUESTION BANK').toUpperCase();
    }
    if (dom.qbReviewStage) {
      dom.qbReviewStage.textContent = (currentQuestionBank.stage || 'APTITUDE').toUpperCase();
    }
    if (dom.qbReviewCount) {
      dom.qbReviewCount.textContent = `${qCount} ${qCount === 1 ? 'MCQ' : 'MCQs'}`;
    }

    // ── LEGACY DETAIL HEADER (null-safe, elements no longer in DOM but preserved) ─
    if (dom.qbDetailTitle) {
      dom.qbDetailTitle.textContent = currentQuestionBank.questionBankTitle || 'Untitled Question Bank';
    }
    if (dom.qbDetailId) {
      dom.qbDetailId.textContent = `ID // ${(currentQuestionBank.id || 'QB-101').toUpperCase()}`;
    }
    if (dom.qbDetailInstitute) {
      dom.qbDetailInstitute.textContent = (currentQuestionBank.institute || 'InterviewOS Training Academy').toUpperCase();
    }
    if (dom.qbDetailStage) {
      dom.qbDetailStage.textContent = (currentQuestionBank.stage || 'APTITUDE').toUpperCase();
    }
    if (dom.qbDetailStatus) {
      const st = (currentQuestionBank.status || 'Published').toLowerCase();
      dom.qbDetailStatus.textContent = currentQuestionBank.status ? currentQuestionBank.status.toUpperCase() : 'PUBLISHED';
      dom.qbDetailStatus.className = `qb-detail-status-badge status-${st === 'published' ? 'published' : 'draft'}`;
    }
    if (dom.qbDetailDesc) {
      dom.qbDetailDesc.textContent = currentQuestionBank.description || 'Custom trainer question bank with curated MCQ questions.';
    }
    if (dom.qbDetailStatTotal) {
      dom.qbDetailStatTotal.textContent = `${qCount} ${qCount === 1 ? 'MCQ' : 'MCQs'}`;
    }
    if (dom.qbDetailStatUpdated) {
      dom.qbDetailStatUpdated.textContent = currentQuestionBank.updatedAt || 'Recent';
    }
    if (dom.qbDetailStatAssess) {
      dom.qbDetailStatAssess.textContent = `${currentQuestionBank.usedInAssessments || 0} Active`;
    }
    if (dom.qbDetailStatStatus) {
      const isPub = (currentQuestionBank.status || 'Published').toLowerCase() === 'published';
      dom.qbDetailStatStatus.textContent = isPub ? 'READY FOR USE' : 'DRAFT EDITING';
      dom.qbDetailStatStatus.style.color = isPub ? 'var(--green)' : 'var(--gray-600)';
    }
    if (dom.heroStageBadge) {
      dom.heroStageBadge.textContent = (currentQuestionBank.stage || 'APTITUDE').toUpperCase();
    }
    if (dom.builderStage && currentQuestionBank.stage) {
      const stageVal = currentQuestionBank.stage.charAt(0).toUpperCase() + currentQuestionBank.stage.slice(1).toLowerCase();
      if (['Aptitude', 'Coding', 'Communication'].includes(stageVal)) {
        dom.builderStage.value = stageVal;
      }
    }
  }

  // ==========================================================================
  // VIEW BANK FLOW — DEDICATED MCQ QUESTION REVIEW INTERFACE
  // ==========================================================================
  let activeViewBankTab = 'current'; // 'current' | 'overview'
  let overviewCurrentPage = 1;
  const OVERVIEW_PAGE_SIZE = 5;

  function highlightOverviewSelection(targetQId, doScroll = false) {
    document.querySelectorAll('.qb-overview-unified-row').forEach(r => {
      r.classList.toggle('is-highlighted', r.dataset.id === targetQId);
    });

    document.querySelectorAll('.qb-overview-pal-box').forEach(b => {
      b.classList.toggle('is-active', b.dataset.id === targetQId);
    });

    if (doScroll) {
      const targetRow = document.getElementById(`overview-row-${targetQId}`);
      if (targetRow) {
        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function navigateToOverviewQuestion(targetIdx, targetQId) {
    const targetPage = Math.floor(targetIdx / OVERVIEW_PAGE_SIZE) + 1;
    activeReviewQuestionIndex = targetIdx;

    if (targetPage !== overviewCurrentPage) {
      overviewCurrentPage = targetPage;
      renderViewBankOverview(targetQId);
    } else {
      highlightOverviewSelection(targetQId, true);
    }
  }

  function renderViewBankOverview(targetSelectedQId = null) {
    if (!dom.viewOverviewRowsContainer || !dom.viewOverviewPaletteGrid) return;

    const questions = currentQuestionBank.questions || [];
    const totalQ = questions.length;

    // Handle 0 questions
    if (totalQ === 0) {
      if (dom.viewOverviewLayout2col) dom.viewOverviewLayout2col.style.display = 'none';
      if (dom.viewOverviewEmptyState) dom.viewOverviewEmptyState.style.display = 'block';
      if (dom.viewOverviewPagination) dom.viewOverviewPagination.style.display = 'none';
      if (dom.viewPalettePagination) dom.viewPalettePagination.style.display = 'none';
      return;
    }

    if (dom.viewOverviewLayout2col) dom.viewOverviewLayout2col.style.display = 'grid';
    if (dom.viewOverviewEmptyState) dom.viewOverviewEmptyState.style.display = 'none';

    // Right column count pill: keeps total question bank count unchanged (e.g. 10 QUESTIONS)
    if (dom.viewOverviewCountPill) {
      dom.viewOverviewCountPill.textContent = `${totalQ} ${totalQ === 1 ? 'QUESTION' : 'QUESTIONS'}`;
    }

    // Counts for legend calculated across all questions in the bank
    let easyCount = 0;
    let medCount = 0;
    let hardCount = 0;

    questions.forEach((q) => {
      const rawDiff = (q.difficulty || 'Medium').trim().toLowerCase();
      if (rawDiff === 'easy') {
        easyCount++;
      } else if (rawDiff === 'hard') {
        hardCount++;
      } else {
        medCount++;
      }
    });

    // Dynamic pagination calculations (5 questions per page)
    const totalPages = Math.ceil(totalQ / OVERVIEW_PAGE_SIZE) || 1;
    if (overviewCurrentPage < 1) overviewCurrentPage = 1;
    if (overviewCurrentPage > totalPages) overviewCurrentPage = totalPages;

    const startIndex = (overviewCurrentPage - 1) * OVERVIEW_PAGE_SIZE;
    const endIndex = Math.min(startIndex + OVERVIEW_PAGE_SIZE, totalQ);
    const pageQuestions = questions.slice(startIndex, endIndex);

    dom.viewOverviewRowsContainer.innerHTML = '';
    dom.viewOverviewPaletteGrid.innerHTML = '';

    // ── 1. Left Column: Paginated Question Rows (5 questions per page) ────────
    pageQuestions.forEach((q, localIdx) => {
      const idx = startIndex + localIdx;
      const orderNum = q.order || (idx + 1);
      const orderStr = String(orderNum).padStart(2, '0');

      // Difficulty calculation & counting
      const rawDiff = (q.difficulty || 'Medium').trim();
      const diffLower = rawDiff.toLowerCase();
      let diffClass = 'med';
      let diffText = 'MEDIUM';
      if (diffLower === 'easy') {
        diffClass = 'easy';
        diffText = 'EASY';
      } else if (diffLower === 'hard') {
        diffClass = 'hard';
        diffText = 'HARD';
      }

      // Topic marker
      const tagsList = Array.isArray(q.tags) && q.tags.length > 0
        ? q.tags.filter(Boolean)
        : (q.topicMarker ? [q.topicMarker] : ['Aptitude']);
      const cleanTag = String(tagsList[0] || 'Aptitude').replace(/^#/, '');

      // Question text
      const qText = q.questionText || q.text || '';

      const row = document.createElement('div');
      row.className = 'qb-overview-unified-row';
      row.id = `overview-row-${q.id}`;
      row.dataset.id = q.id;
      row.dataset.index = idx;

      row.innerHTML = `
        <div class="qb-overview-num-badge">
          <span>${orderStr}</span>
        </div>
        <div class="qb-overview-main-info">
          <div class="qb-overview-qtext">${escapeHtml(qText)}</div>
          <div class="qb-overview-meta-line">
            <span class="qb-overview-topic-tag">#${escapeHtml(cleanTag)}</span>
          </div>
        </div>
        <div class="qb-overview-actions">
          <span class="qb-overview-diff-badge diff-${diffClass}">${diffText}</span>
          <button type="button" class="btn-secondary btn-overview-row-view" data-id="${q.id}" data-index="${idx}" title="View Full Question">
            <span>VIEW</span>
            <span style="font-weight:900;">→</span>
          </button>
        </div>
      `;

      // Bind view action: Open dedicated Single Question View Screen for this question
      const viewBtn = row.querySelector('.btn-overview-row-view');
      if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openSingleQuestionViewScreen(idx);
        });
      }

      // Highlight sync on row click
      row.addEventListener('click', (e) => {
        if (e.target.closest('button, a')) return;
        activeReviewQuestionIndex = idx;
        highlightOverviewSelection(q.id, false);
      });

      // Double-click on row navigates directly to dedicated Single Question View Screen
      row.addEventListener('dblclick', (e) => {
        if (e.target.closest('button, a')) return;
        openSingleQuestionViewScreen(idx);
      });

      dom.viewOverviewRowsContainer.appendChild(row);
    });

    // ── 2. Right Column: Question Number Palette Grid (ALL questions accessible) ──
    questions.forEach((q, idx) => {
      const orderNum = q.order || (idx + 1);
      const orderStr = String(orderNum).padStart(2, '0');

      const rawDiff = (q.difficulty || 'Medium').trim();
      const diffLower = rawDiff.toLowerCase();
      let diffClass = 'med';
      let diffText = 'MEDIUM';
      if (diffLower === 'easy') {
        diffClass = 'easy';
        diffText = 'EASY';
      } else if (diffLower === 'hard') {
        diffClass = 'hard';
        diffText = 'HARD';
      }

      const tagsList = Array.isArray(q.tags) && q.tags.length > 0
        ? q.tags.filter(Boolean)
        : (q.topicMarker ? [q.topicMarker] : ['Aptitude']);
      const cleanTag = String(tagsList[0] || 'Aptitude').replace(/^#/, '');

      let displayTopic = cleanTag.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ');
      displayTopic = displayTopic.replace(/\bAnd\b/g, 'and');

      const palBox = document.createElement('div');
      palBox.className = `qb-overview-pal-box diff-${diffClass}`;
      palBox.dataset.id = q.id;
      palBox.dataset.index = idx;
      palBox.title = `Question ${orderStr} (${diffText}) — Click to jump, Double-click to view`;

      palBox.innerHTML = `
        <div class="pal-box-top">
          <span class="pal-num">${orderStr}</span>
          <span class="pal-diff-badge diff-${diffClass}">${diffText}</span>
        </div>
        <div class="pal-topic" title="${escapeHtml(displayTopic)}">${escapeHtml(displayTopic)}</div>
      `;

      // Single-click: Navigate directly to exact question, switching page if necessary
      palBox.addEventListener('click', () => {
        navigateToOverviewQuestion(idx, q.id);
      });

      // Double-click: Open dedicated Single Question View Screen
      palBox.addEventListener('dblclick', () => {
        openSingleQuestionViewScreen(idx);
      });

      dom.viewOverviewPaletteGrid.appendChild(palBox);
    });

    // Highlight target question or active question on this page
    let qIdToHighlight = targetSelectedQId;
    let shouldScroll = !!targetSelectedQId;

    if (!qIdToHighlight) {
      const activeQuestion = questions[activeReviewQuestionIndex];
      const activeMatchesPage = activeQuestion && pageQuestions.some(pq => pq.id === activeQuestion.id);
      qIdToHighlight = activeMatchesPage ? activeQuestion.id : (pageQuestions[0] ? pageQuestions[0].id : null);
    }

    if (qIdToHighlight) {
      highlightOverviewSelection(qIdToHighlight, shouldScroll);
    }

    // Update legend counts
    if (dom.viewOverviewEasyCount) dom.viewOverviewEasyCount.textContent = String(easyCount);
    if (dom.viewOverviewMedCount) dom.viewOverviewMedCount.textContent = String(medCount);
    if (dom.viewOverviewHardCount) dom.viewOverviewHardCount.textContent = String(hardCount);

    // Update pagination controls
    const paginationText = `${overviewCurrentPage} / ${totalPages}`;
    const showPagination = totalQ > OVERVIEW_PAGE_SIZE;

    if (dom.viewOverviewPagination) {
      dom.viewOverviewPagination.style.display = showPagination ? 'flex' : 'none';
      if (dom.overviewPaginationIndicator) dom.overviewPaginationIndicator.textContent = paginationText;
      if (dom.btnOverviewPaginationPrev) dom.btnOverviewPaginationPrev.disabled = (overviewCurrentPage <= 1);
      if (dom.btnOverviewPaginationNext) dom.btnOverviewPaginationNext.disabled = (overviewCurrentPage >= totalPages);
    }

    if (dom.viewPalettePagination) {
      dom.viewPalettePagination.style.display = 'none';
    }
  }

  // ==========================================================================
  // DEDICATED SINGLE QUESTION VIEW SCREEN
  // ==========================================================================
  let currentSingleQuestionIndex = 0;

  function renderSingleQuestionView(idx) {
    const questions = currentQuestionBank.questions || [];
    const totalQ = questions.length;
    if (totalQ === 0) return;

    if (idx < 0) idx = 0;
    if (idx >= totalQ) idx = totalQ - 1;
    currentSingleQuestionIndex = idx;
    activeReviewQuestionIndex = idx;

    const q = questions[idx];
    if (!q) return;

    const bTitle = currentQuestionBank.questionBankTitle || currentQuestionBank.title || 'QUANTITATIVE & ANALYTICAL APTITUDE';
    const bStage = currentQuestionBank.stage || 'APTITUDE';

    if (dom.singleQBankBadge) dom.singleQBankBadge.textContent = bTitle.toUpperCase();
    if (dom.singleQStageBadge) dom.singleQStageBadge.textContent = bStage.toUpperCase();

    const orderNum = q.order || (idx + 1);
    const orderStr = String(orderNum).padStart(2, '0');

    if (dom.singleQPageTitle) {
      dom.singleQPageTitle.textContent = `QUESTION ${orderStr} DETAILS`;
    }
    if (dom.singleQCardTitle) {
      dom.singleQCardTitle.textContent = `QUESTION ${orderStr} // MULTIPLE CHOICE QUESTION`;
    }

    // Difficulty badge
    const rawDiff = (q.difficulty || 'Medium').trim();
    const diffLower = rawDiff.toLowerCase();
    let diffClass = 'med';
    let diffText = 'MEDIUM';
    if (diffLower === 'easy') {
      diffClass = 'easy';
      diffText = 'EASY';
    } else if (diffLower === 'hard') {
      diffClass = 'hard';
      diffText = 'HARD';
    }

    if (dom.singleQDiffBadge) {
      dom.singleQDiffBadge.className = `qb-overview-diff-badge diff-${diffClass}`;
      dom.singleQDiffBadge.textContent = diffText;
    }

    // Question content
    if (dom.singleQText) {
      dom.singleQText.textContent = q.questionText || q.text || '';
    }

    // Question image
    const qImg = q.imageUrl || (q.questionContent && q.questionContent.imageUrl) || '';
    if (dom.singleQImageWrap && dom.singleQImageImg) {
      if (qImg) {
        dom.singleQImageImg.src = qImg;
        dom.singleQImageWrap.style.display = 'flex';
      } else {
        dom.singleQImageImg.src = '';
        dom.singleQImageWrap.style.display = 'none';
      }
    }

    // Answer options
    if (dom.singleQOptionsContainer) {
      dom.singleQOptionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      const rawOpts = Array.isArray(q.options) && q.options.length > 0 ? q.options : [
        { label: 'A', text: '', isCorrect: false },
        { label: 'B', text: '', isCorrect: false },
        { label: 'C', text: '', isCorrect: false },
        { label: 'D', text: '', isCorrect: false }
      ];

      rawOpts.forEach((opt, oIdx) => {
        const label = opt.label || letters[oIdx] || String.fromCharCode(65 + oIdx);
        const isCorrect = (label === q.correctAnswer) || opt.isCorrect === true || (q.correctIndex === oIdx);
        const textVal = opt.text || '';
        const optImg = opt.imageUrl || '';

        const optCard = document.createElement('div');
        optCard.className = `single-q-option-card ${isCorrect ? 'is-correct' : ''}`;

        let imgHtml = '';
        if (optImg) {
          imgHtml = `<div style="margin-top:6px;"><img src="${escapeHtml(optImg)}" alt="Option ${label} graphic" style="max-height:80px;border:1px solid var(--black);" /></div>`;
        }

        optCard.innerHTML = `
          <div class="single-q-option-left">
            <span class="single-q-option-letter">${label}</span>
            <div style="display:flex;flex-direction:column;gap:4px;flex:1;min-width:0;">
              <span class="single-q-option-text">${escapeHtml(textVal)}</span>
              ${imgHtml}
            </div>
          </div>
          ${isCorrect ? `
            <span class="single-q-correct-badge">✓ CORRECT ANSWER</span>
          ` : ''}
        `;
        dom.singleQOptionsContainer.appendChild(optCard);
      });
    }

    // Question Settings
    if (dom.singleQStage) {
      dom.singleQStage.value = q.stage || currentQuestionBank.stage || 'Aptitude';
    }
    if (dom.singleQDifficulty) {
      dom.singleQDifficulty.value = q.difficulty || 'Medium';
    }
    if (dom.singleQPriority) {
      dom.singleQPriority.value = q.priority || 'Medium';
    }
    if (dom.singleQPosMarks) {
      dom.singleQPosMarks.value = q.positiveMarks !== undefined ? q.positiveMarks : 1;
    }
    if (dom.singleQNegMarks) {
      dom.singleQNegMarks.value = q.negativeMarks !== undefined ? q.negativeMarks : 0.25;
    }
    if (dom.singleQTagsContainer) {
      dom.singleQTagsContainer.innerHTML = '';
      const tags = Array.isArray(q.tags) && q.tags.length > 0 ? q.tags : (q.topicMarker ? [q.topicMarker] : []);
      if (tags.length > 0) {
        tags.forEach(t => {
          const clean = String(t).replace(/^#/, '');
          const chip = document.createElement('span');
          chip.className = 'tm-tag-chip';
          chip.style.cssText = 'background:var(--yellow);border:1.5px solid var(--black);font-family:var(--font-mono);font-size:11px;font-weight:800;padding:3px 8px;display:inline-flex;align-items:center;box-shadow:1px 1px 0 var(--black);';
          chip.textContent = `#${clean}`;
          dom.singleQTagsContainer.appendChild(chip);
        });
      } else {
        const emptyChip = document.createElement('span');
        emptyChip.style.cssText = 'font-family:var(--font-mono);font-size:11px;color:var(--gray-500);';
        emptyChip.textContent = 'NO TOPIC MARKER';
        dom.singleQTagsContainer.appendChild(emptyChip);
      }
    }

    // Prev / Next button states
    if (dom.btnSingleQPrev) {
      if (idx > 0) {
        dom.btnSingleQPrev.disabled = false;
        dom.btnSingleQPrev.style.opacity = '1';
        dom.btnSingleQPrev.style.cursor = 'pointer';
      } else {
        dom.btnSingleQPrev.disabled = true;
        dom.btnSingleQPrev.style.opacity = '0.45';
        dom.btnSingleQPrev.style.cursor = 'not-allowed';
      }
    }
    if (dom.btnSingleQNext) {
      if (idx < totalQ - 1) {
        dom.btnSingleQNext.disabled = false;
        dom.btnSingleQNext.style.opacity = '1';
        dom.btnSingleQNext.style.cursor = 'pointer';
      } else {
        dom.btnSingleQNext.disabled = true;
        dom.btnSingleQNext.style.opacity = '0.45';
        dom.btnSingleQNext.style.cursor = 'not-allowed';
      }
    }
  }

  function openSingleQuestionViewScreen(idx) {
    if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
    if (dom.qbViewBankFlow) dom.qbViewBankFlow.style.display = 'block';

    switchViewBankTab('current');
    renderViewBankQuestion(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeSingleQuestionViewScreen() {
    if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
    if (dom.qbViewBankFlow) dom.qbViewBankFlow.style.display = 'block';

    overviewCurrentPage = Math.floor(currentSingleQuestionIndex / OVERVIEW_PAGE_SIZE) + 1;
    switchViewBankTab('overview');

    const questions = currentQuestionBank.questions || [];
    const q = questions[currentSingleQuestionIndex];
    if (q) {
      highlightOverviewSelection(q.id, true);
    }
  }

  function editFromSingleQuestionView() {
    const questions = currentQuestionBank.questions || [];
    const q = questions[currentSingleQuestionIndex];
    if (q) {
      if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
      openBuilderForQuestion(q.id);
    }
  }

  function switchViewBankTab(tab) {
    if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
    activeViewBankTab = tab;
    if (tab === 'overview') {
      if (dom.viewTabBtnCurrentQ) dom.viewTabBtnCurrentQ.classList.remove('is-active');
      if (dom.viewTabBtnOverview) dom.viewTabBtnOverview.classList.add('is-active');
      if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'none';
      if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'none';
      renderViewBankOverview();
      if (dom.viewOverviewPanel) dom.viewOverviewPanel.style.display = 'block';
    } else {
      activeViewBankTab = 'current';
      if (dom.viewTabBtnOverview) dom.viewTabBtnOverview.classList.remove('is-active');
      if (dom.viewTabBtnCurrentQ) dom.viewTabBtnCurrentQ.classList.add('is-active');
      if (dom.viewOverviewPanel) dom.viewOverviewPanel.style.display = 'none';
      const questions = currentQuestionBank.questions || [];
      if (questions.length === 0) {
        if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'block';
        if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'none';
      } else {
        if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'none';
        if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'block';
      }
    }
  }

  function renderViewBankQuestion(idx) {
    if (!dom.qbViewBankFlow) return;

    const questions = currentQuestionBank.questions || [];
    const totalQ = questions.length;

    // Header Badges & Title (selected bank context)
    const bTitle = currentQuestionBank.questionBankTitle || currentQuestionBank.title || 'Untitled Question Bank';
    const bStage = currentQuestionBank.stage || 'APTITUDE';
    if (dom.viewBankNameBadge) dom.viewBankNameBadge.textContent = bTitle.toUpperCase();
    if (dom.viewBankTitleDisplay) dom.viewBankTitleDisplay.textContent = bTitle.toUpperCase();
    if (dom.viewStageBadge) dom.viewStageBadge.textContent = bStage.toUpperCase();
    if (dom.viewCountBadge) dom.viewCountBadge.textContent = `${totalQ} ${totalQ === 1 ? 'MCQ' : 'MCQs'}`;

    renderViewBankOverview();

    if (totalQ === 0) {
      if (activeViewBankTab === 'overview') {
        if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'none';
        if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'none';
        if (dom.viewOverviewPanel) dom.viewOverviewPanel.style.display = 'block';
      } else {
        if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'block';
        if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'none';
        if (dom.viewOverviewPanel) dom.viewOverviewPanel.style.display = 'none';
      }
      if (dom.viewMcqNavTabsBar) dom.viewMcqNavTabsBar.style.display = 'flex';
      return;
    }

    if (activeViewBankTab === 'overview') {
      if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'none';
      if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'none';
      if (dom.viewOverviewPanel) dom.viewOverviewPanel.style.display = 'block';
    } else {
      if (dom.viewEmptyState) dom.viewEmptyState.style.display = 'none';
      if (dom.viewMcqCard) dom.viewMcqCard.style.display = 'block';
      if (dom.viewOverviewPanel) dom.viewOverviewPanel.style.display = 'none';
    }
    if (dom.viewMcqNavTabsBar) dom.viewMcqNavTabsBar.style.display = 'flex';

    if (idx < 0) idx = 0;
    if (idx >= totalQ) idx = totalQ - 1;
    activeReviewQuestionIndex = idx;

    const q = questions[idx];
    if (!q) return;

    const orderNum = q.order || (idx + 1);
    const orderStr = String(orderNum).padStart(2, '0');

    // 1. Tab & Card Titles
    if (dom.viewTabNum) dom.viewTabNum.textContent = orderStr;
    if (dom.viewCardTitle) {
      dom.viewCardTitle.textContent = `QUESTION ${orderStr} // MULTIPLE CHOICE QUESTION`;
    }

    // 2. Question Text
    if (dom.viewQText) {
      dom.viewQText.value = q.questionText || q.text || '';
    }

    // 3. Question Image
    const qImg = q.imageUrl || (q.questionContent && q.questionContent.imageUrl) || '';
    if (dom.viewImageWrap && dom.viewImageImg) {
      if (qImg) {
        dom.viewImageImg.src = qImg;
        dom.viewImageWrap.style.display = 'flex';
        if (dom.viewImgIndicator) dom.viewImgIndicator.style.display = 'inline-flex';
      } else {
        dom.viewImageImg.src = '';
        dom.viewImageWrap.style.display = 'none';
        if (dom.viewImgIndicator) dom.viewImgIndicator.style.display = 'none';
      }
    }

    // 4. Answer Options
    if (dom.viewOptionsContainer) {
      dom.viewOptionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      const rawOpts = Array.isArray(q.options) && q.options.length > 0 ? q.options : [
        { label: 'A', text: '', isCorrect: false },
        { label: 'B', text: '', isCorrect: false },
        { label: 'C', text: '', isCorrect: false },
        { label: 'D', text: '', isCorrect: false }
      ];

      rawOpts.forEach((opt, oIdx) => {
        const label = opt.label || letters[oIdx] || String.fromCharCode(65 + oIdx);
        const isCorrect = (label === q.correctAnswer) || opt.isCorrect === true || (q.correctIndex === oIdx);
        const textVal = opt.text || '';
        const optImg = opt.imageUrl || '';
        const hasImage = !!optImg;
        const hasText = !!textVal.trim();
        const isImageOnly = hasImage && !hasText;

        const row = document.createElement('div');
        row.className = `builder-option-row ${isCorrect ? 'is-correct-answer' : ''}`;
        if (isCorrect) {
          row.style.background = '#f0fdf4';
          row.style.border = '1.5px solid var(--green, #00875a)';
          row.style.boxShadow = '1px 1px 0 var(--green, #00875a)';
        }

        row.innerHTML = `
          <div class="opt-left-group">
            <label class="builder-option-radio-label" title="${isCorrect ? 'Correct answer' : 'Option ' + label}" style="cursor:default;">
              <input type="radio" name="view_opt_radio_${idx}" value="${label}" ${isCorrect ? 'checked' : ''} disabled style="accent-color:var(--green, #00875a);cursor:default;" />
              <span class="opt-label-text" style="${isCorrect ? 'color:var(--green, #00875a);font-weight:900;' : ''}">OPT ${label}</span>
            </label>
          </div>

          <div class="opt-middle-group">
            <input type="text" class="builder-option-input form-input" readonly value="${escapeHtml(textVal)}" style="background:#fff;cursor:default;${isImageOnly ? 'display: none;' : ''}${isCorrect ? 'border-color:var(--green, #00875a);font-weight:700;' : ''}" />
            ${hasImage ? `
              <div class="opt-compact-preview">
                <img src="${escapeHtml(optImg)}" alt="Option ${label} graphic" />
                <span class="opt-preview-tag">Image attached</span>
              </div>
            ` : ''}
          </div>

          <div class="opt-right-group">
            ${isCorrect ? `
              <span style="font-family:var(--font-mono);font-size:10px;font-weight:900;background:var(--green, #00875a);color:#fff;padding:3px 8px;border:1px solid var(--black);display:inline-flex;align-items:center;gap:4px;white-space:nowrap;">
                ✓ CORRECT ANSWER
              </span>
            ` : ''}
            <button type="button" class="attach-img-btn" disabled style="opacity:0.5;cursor:default;" title="+ Image (View mode)">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>+ IMAGE</span>
            </button>
            <button type="button" class="btn-trash-opt" disabled style="opacity:0.35;cursor:default;" title="Delete option (View mode)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        `;
        dom.viewOptionsContainer.appendChild(row);
      });
    }

    // 5. Question Settings
    if (dom.viewStage) {
      dom.viewStage.value = q.stage || currentQuestionBank.stage || 'Aptitude';
    }
    if (dom.viewDifficulty) {
      dom.viewDifficulty.value = q.difficulty || 'Medium';
    }
    if (dom.viewPriority) {
      dom.viewPriority.value = q.priority || 'Medium';
    }
    if (dom.viewPosMarks) {
      dom.viewPosMarks.value = q.positiveMarks !== undefined ? q.positiveMarks : 1;
    }
    if (dom.viewNegMarks) {
      dom.viewNegMarks.value = q.negativeMarks !== undefined ? q.negativeMarks : 0.25;
    }
    if (dom.viewTagsContainer) {
      dom.viewTagsContainer.innerHTML = '';
      const tags = Array.isArray(q.tags) && q.tags.length > 0 ? q.tags : (q.topicMarker ? [q.topicMarker] : []);
      if (tags.length > 0) {
        tags.forEach(t => {
          const clean = String(t).replace(/^#/, '');
          const chip = document.createElement('span');
          chip.className = 'tm-tag-chip';
          chip.style.cssText = 'background:var(--yellow);border:1.5px solid var(--black);font-family:var(--font-mono);font-size:11px;font-weight:800;padding:3px 8px;display:inline-flex;align-items:center;box-shadow:1px 1px 0 var(--black);';
          chip.textContent = `#${clean}`;
          dom.viewTagsContainer.appendChild(chip);
        });
      } else {
        const emptyChip = document.createElement('span');
        emptyChip.style.cssText = 'font-family:var(--font-mono);font-size:11px;color:var(--gray-500);';
        emptyChip.textContent = 'NO TOPIC MARKER';
        dom.viewTagsContainer.appendChild(emptyChip);
      }
    }

    // 6. Navigation Buttons State
    if (dom.btnViewNext) {
      if (idx >= totalQ - 1) {
        dom.btnViewNext.disabled = true;
        dom.btnViewNext.style.opacity = '0.45';
        dom.btnViewNext.style.cursor = 'not-allowed';
        dom.btnViewNext.title = 'End of Question Bank (no more questions)';
      } else {
        dom.btnViewNext.disabled = false;
        dom.btnViewNext.style.opacity = '1';
        dom.btnViewNext.style.cursor = 'pointer';
        dom.btnViewNext.title = 'View next question';
      }
    }

    if (dom.btnViewPrev) {
      if (idx > 0) {
        dom.btnViewPrev.style.display = 'inline-flex';
      } else {
        dom.btnViewPrev.style.display = 'none';
      }
    }
  }

  // ==========================================================================
  // QUESTION REVIEW INTERFACE — PALETTE + QUESTION CARD + PREV/NEXT NAV
  // ==========================================================================

  function renderQuestionReview() {
    const questions = currentQuestionBank.questions || [];
    const totalQ = questions.length;

    if (!dom.qbReviewEmptyState || !dom.qbReviewPaletteCard || !dom.qbReviewCard) return;

    if (totalQ === 0) {
      dom.qbReviewEmptyState.style.display = 'block';
      dom.qbReviewPaletteCard.style.display = 'none';
      dom.qbReviewCard.style.display = 'none';
      return;
    }

    dom.qbReviewEmptyState.style.display = 'none';
    dom.qbReviewPaletteCard.style.display = 'block';
    dom.qbReviewCard.style.display = 'block';

    // Clamp index to valid range
    if (activeReviewQuestionIndex >= totalQ) activeReviewQuestionIndex = totalQ - 1;
    if (activeReviewQuestionIndex < 0) activeReviewQuestionIndex = 0;

    // ── Palette count badge ───────────────────────────────────────────────────
    if (dom.qbPaletteCount) {
      dom.qbPaletteCount.textContent = `(${totalQ} ${totalQ === 1 ? 'QUESTION' : 'QUESTIONS'})`;
    }

    // ── Palette Grid ─────────────────────────────────────────────────────────
    if (dom.qbPaletteGrid) {
      dom.qbPaletteGrid.innerHTML = '';
      questions.forEach((q, idx) => {
        const orderNum = q.order || (idx + 1);
        const orderStr = String(orderNum).padStart(2, '0');
        const diff = (q.difficulty || '').toLowerCase();
        const diffClass = diff === 'easy' ? 'diff-easy' : diff === 'hard' ? 'diff-hard' : 'diff-med';
        const diffLabel = diff === 'easy' ? 'EASY' : diff === 'hard' ? 'HARD' : 'MED';
        const isActive = idx === activeReviewQuestionIndex;

        const cell = document.createElement('div');
        cell.className = `qb-pal-card ${diffClass}${isActive ? ' is-active' : ''}`;
        cell.setAttribute('role', 'button');
        cell.setAttribute('tabindex', '0');
        cell.setAttribute('aria-label', `Question ${orderStr} — ${diffLabel}`);
        cell.title = `Question ${orderStr} • ${(q.difficulty || 'Medium').toUpperCase()} • ${(q.tags || []).join(', ') || 'No topic'}`;
        cell.innerHTML = `
          <span class="qb-pal-num">${orderStr}</span>
          <span class="qb-pal-diff">${diffLabel}</span>
        `;
        cell.addEventListener('click', () => {
          activeReviewQuestionIndex = idx;
          renderQuestionReview();
          dom.qbReviewCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        cell.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            cell.click();
          }
        });
        dom.qbPaletteGrid.appendChild(cell);
      });
    }

    // ── Current Question Card ─────────────────────────────────────────────────
    renderReviewQuestionCard(questions, activeReviewQuestionIndex);
  }

  function renderReviewQuestionCard(questions, idx) {
    if (!dom.qbReviewCardContent) return;
    const totalQ = questions.length;
    const q = questions[idx];
    if (!q) return;

    const orderNum = q.order || (idx + 1);
    const orderStr = String(orderNum).padStart(2, '0');
    const optCount = Array.isArray(q.options) ? q.options.length : 0;
    const diff = (q.difficulty || 'Medium').toLowerCase();
    const diffLabel = diff === 'easy' ? 'EASY' : diff === 'hard' ? 'HARD' : 'MEDIUM';
    const diffClass = diff === 'easy' ? 'qb-diff-easy' : diff === 'hard' ? 'qb-diff-hard' : 'qb-diff-med';
    const posMarks = q.positiveMarks !== undefined ? q.positiveMarks : 1;
    const negMarks = q.negativeMarks !== undefined ? q.negativeMarks : 0.25;

    // Build topic pills HTML
    const tags = Array.isArray(q.tags) && q.tags.length > 0 ? q.tags : (q.topicMarker ? [q.topicMarker] : []);
    const topicsHtml = tags.length > 0
      ? tags.map(t => `<span class="qb-review-topic-pill">#${escapeHtml(t)}</span>`).join('')
      : `<span class="qb-review-topic-pill" style="color:var(--gray-500);">NO TOPIC</span>`;

    // Question image
    const imgHtml = q.imageUrl
      ? `<div class="qb-review-q-img-wrap"><img src="${escapeHtml(q.imageUrl)}" alt="Question graphic" class="qb-review-q-img" /></div>`
      : '';

    // Previous / next context
    const hasPrev = idx > 0;
    const hasNext = idx < totalQ - 1;
    const prevOrderStr = hasPrev ? String((questions[idx - 1].order || idx)).padStart(2, '0') : '';
    const nextOrderStr = hasNext ? String((questions[idx + 1].order || (idx + 2))).padStart(2, '0') : '';

    dom.qbReviewCardContent.innerHTML = `
      <div class="qb-review-actions-row">
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="qb-review-q-num-chip">QUESTION ${orderStr}</span>
          <span class="qb-review-q-format-chip">TEXT • ${optCount} OPTIONS</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="qb-review-q-marks-chip">+${posMarks} / -${negMarks} MARKS</span>
          <button type="button" class="btn-secondary btn-review-edit" data-id="${escapeHtml(q.id)}" title="Edit Question ${orderStr}">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            EDIT
          </button>
          <button type="button" class="btn-danger btn-review-delete" data-id="${escapeHtml(q.id)}" title="Delete Question ${orderStr}">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            DELETE
          </button>
        </div>
      </div>

      <div class="qb-review-q-body">
        <div class="qb-review-q-text">${escapeHtml(q.questionText || '')}</div>
        ${imgHtml}
      </div>

      <div class="qb-review-dashed-line"></div>

      <div class="qb-review-meta-row">
        <div class="qb-review-meta-group">
          <span class="qb-review-meta-label">TOPIC MARKER</span>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">${topicsHtml}</div>
        </div>
        <div class="qb-review-meta-group">
          <span class="qb-review-meta-label">DIFFICULTY</span>
          <span class="qb-review-diff-pill ${diffClass}">${diffLabel}</span>
        </div>
      </div>

      <div class="qb-review-dashed-line"></div>

      <div class="qb-review-nav-bar">
        <button type="button" class="qb-review-nav-btn" id="btn-review-prev" ${!hasPrev ? 'disabled' : ''} aria-label="Previous question">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          ${hasPrev ? `← QUESTION ${prevOrderStr}` : '← PREVIOUS'}
        </button>
        <span class="qb-review-nav-counter">${orderStr} / ${String(totalQ).padStart(2,'0')}</span>
        <button type="button" class="qb-review-nav-btn" id="btn-review-next" ${!hasNext ? 'disabled' : ''} aria-label="Next question">
          ${hasNext ? `QUESTION ${nextOrderStr} →` : 'NEXT →'}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    `;

    // Bind edit button
    const editBtn = dom.qbReviewCardContent.querySelector('.btn-review-edit');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        const qid = editBtn.dataset.id;
        openBuilderForQuestion(qid);
      });
    }

    // Bind delete button
    const delBtn = dom.qbReviewCardContent.querySelector('.btn-review-delete');
    if (delBtn) {
      delBtn.addEventListener('click', () => {
        promptDeleteQuestion(delBtn.dataset.id);
      });
    }

    // Bind PREV nav
    const prevBtn = dom.qbReviewCardContent.querySelector('#btn-review-prev');
    if (prevBtn && hasPrev) {
      prevBtn.addEventListener('click', () => {
        activeReviewQuestionIndex = idx - 1;
        renderQuestionReview();
        dom.qbReviewCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    // Bind NEXT nav
    const nextBtn = dom.qbReviewCardContent.querySelector('#btn-review-next');
    if (nextBtn && hasNext) {
      nextBtn.addEventListener('click', () => {
        activeReviewQuestionIndex = idx + 1;
        renderQuestionReview();
        dom.qbReviewCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }

  // ==========================================================================
  // STRUCTURED QUESTIONS LIST RENDERING & DRAG-AND-DROP REORDERING
  // ==========================================================================
  let draggedQuestionId = null;

  function renderQuestionsList() {
    const questions = currentQuestionBank.questions || [];
    const totalQ = questions.length;

    // Update Detail Header with selected bank details & stats
    renderBankDetailHeader();

    // Also render the new Question Review Interface
    renderQuestionReview();
    renderViewBankQuestion(activeReviewQuestionIndex);

    // Update Question Count & Header (null-safe — some UI chips may have been removed)
    if (dom.qbCountChip) dom.qbCountChip.textContent = `QUESTIONS: ${String(totalQ).padStart(2, '0')}`;
    if (dom.tableCountDisplay) dom.tableCountDisplay.textContent = `${totalQ} QUESTIONS CONFIGURED`;

    // Summary Cards update (null-safe — stat cards may be absent from the DOM)
    const pubCount = questions.filter(q => q.correctAnswer).length;
    if (dom.statTotalVal) dom.statTotalVal.textContent = totalQ;
    if (dom.statPubVal) dom.statPubVal.textContent = pubCount;
    if (dom.statDraftVal) dom.statDraftVal.textContent = totalQ - pubCount;
    if (dom.statAssessVal) dom.statAssessVal.textContent = '08';

    if (!dom.qbQuestionsListContainer) return;
    const query = (dom.qbSearchInput ? dom.qbSearchInput.value : '').toLowerCase().trim();

    // Render Question Number Grid Preview (null-safe)
    if (dom.qbGridPreview) renderQuestionGrid(questions, query);
    const filtered = questions.filter(q => {
      if (!query) return true;
      const matchText = (q.questionText || '').toLowerCase().includes(query);
      const matchTags = (q.tags || []).some(t => t.toLowerCase().includes(query));
      const matchDiff = (q.difficulty || '').toLowerCase().includes(query);
      return matchText || matchTags || matchDiff;
    });

    if (filtered.length === 0) {
      dom.qbQuestionsListContainer.innerHTML = '';
      dom.emptyStateBox.style.display = 'block';
      return;
    }

    dom.emptyStateBox.style.display = 'none';
    dom.qbQuestionsListContainer.innerHTML = '';

    filtered.forEach((q, idx) => {
      const orderNum = q.order || (idx + 1);
      const orderStr = String(orderNum).padStart(2, '0');
      const optCount = q.options ? q.options.length : 0;

      const card = document.createElement('div');
      card.className = 'q-item-card';
      card.dataset.id = q.id;
      card.setAttribute('draggable', 'true');

      // Compute content badge: TEXT / IMAGE / MIXED
      const qType = (q.contentType || 'text').toLowerCase();
      const qOpts = q.options || [];
      const hasImgOpt = qOpts.some(o => (o.type || 'text') === 'image');
      const hasTextOpt = qOpts.some(o => (o.type || 'text') === 'text');
      const contentBadge = (hasImgOpt && hasTextOpt)
        ? 'MIXED'
        : (qType === 'image' || (hasImgOpt && !hasTextOpt))
          ? 'IMAGE'
          : 'TEXT';

      // Render Answer Options
      const qOptions = Array.isArray(q.options) ? q.options : [];
      const optionsHtml = qOptions.length > 0 ? `
        <div class="q-options-container">
          <div class="q-options-heading">ANSWER OPTIONS</div>
          <div class="q-options-grid">
            ${qOptions.map((opt, oIdx) => {
              const label = (typeof opt === 'object' && opt && opt.label) ? opt.label : String.fromCharCode(65 + oIdx);
              const optText = typeof opt === 'string' ? opt : (opt.text || '');
              const optImg = (typeof opt === 'object' && opt) ? (opt.imageUrl || '') : '';
              const isCorrect = (typeof opt === 'object' && opt && opt.isCorrect) || (label === q.correctAnswer);

              return `
                <div class="q-option-box ${isCorrect ? 'is-correct' : ''}">
                  <span class="q-option-marker">${escapeHtml(label)}</span>
                  <div class="q-option-content">
                    ${optText ? `<span class="q-option-text">${escapeHtml(optText)}</span>` : ''}
                    ${optImg ? `<img src="${escapeHtml(optImg)}" alt="Option ${escapeHtml(label)} graphic" class="q-option-img" />` : ''}
                  </div>
                  ${isCorrect ? `<span class="q-option-correct-badge">✓ CORRECT</span>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : '';

      // Topic tags (kept unchanged)
      const tagsList = Array.isArray(q.tags) ? q.tags.filter(Boolean) : [];
      const tagsHtml = tagsList.length > 0 ? `
        <div class="q-pill-row">
          ${tagsList.map(t => `<span class="tag-pill">#${escapeHtml(t)}</span>`).join('')}
        </div>
      ` : '';

      card.innerHTML = `
        <div class="q-item-header">
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="q-drag-grip" title="Drag card to reorder question" aria-label="Drag handle">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor" aria-hidden="true">
                <circle cx="3" cy="3" r="1.5"></circle>
                <circle cx="9" cy="3" r="1.5"></circle>
                <circle cx="3" cy="8" r="1.5"></circle>
                <circle cx="9" cy="8" r="1.5"></circle>
                <circle cx="3" cy="13" r="1.5"></circle>
                <circle cx="9" cy="13" r="1.5"></circle>
              </svg>
            </div>
            <span class="q-seq-chip">QUESTION ${orderStr}</span>
            <span style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:var(--gray-600);">
              ${contentBadge} · ${optCount} OPTIONS
            </span>
          </div>

          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-family:var(--font-mono);font-size:10.5px;font-weight:800;background:var(--green-light);color:var(--green);border:1px solid var(--green);padding:2px 8px;">
              ANSWER: ${escapeHtml(q.correctAnswer)}
            </span>
            <span style="font-family:var(--font-mono);font-size:10.5px;font-weight:800;background:var(--gray-100);border:1px solid var(--black);padding:2px 8px;">
              +${q.positiveMarks} / -${q.negativeMarks} MARKS
            </span>
          </div>
        </div>

        <div class="q-item-body">
          <div class="q-text-preview">${escapeHtml(q.questionText)}</div>
          ${q.imageUrl ? `<img src="${escapeHtml(q.imageUrl)}" alt="Question Graphic" style="max-height:140px;border:1.5px solid var(--black);margin-top:4px;display:block;" />` : ''}
          ${tagsHtml}
          ${optionsHtml}
        </div>

        <div class="q-item-footer">
          <div class="q-drag-hint-wrap" title="Click and hold to drag vertically" style="display:flex;align-items:center;gap:6px;color:var(--gray-600);font-family:var(--font-mono);font-size:10px;font-weight:800;letter-spacing:0.04em;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">
              <polyline points="7 10 12 5 17 10"></polyline>
              <polyline points="7 14 12 19 17 14"></polyline>
            </svg>
            <span>DRAG TO REORDER</span>
          </div>

          <div style="display:flex;gap:8px;">
            <button type="button" class="btn-secondary btn-q-edit" data-id="${q.id}" style="padding:6px 12px;font-size:11px;display:inline-flex;align-items:center;gap:5px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              <span>EDIT</span>
            </button>
            <button type="button" class="btn-danger btn-q-delete" data-id="${q.id}" style="padding:6px 10px;font-size:11px;display:inline-flex;align-items:center;gap:5px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              <span>DELETE</span>
            </button>
          </div>
        </div>
      `;

      // Prevent dragging when clicking interactive buttons
      card.querySelectorAll('button').forEach(btn => btn.setAttribute('draggable', 'false'));

      // Event bindings
      card.querySelector('.btn-q-edit').addEventListener('click', (e) => {
        e.stopPropagation();
        openBuilderForQuestion(q.id);
      });
      card.querySelector('.btn-q-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        promptDeleteQuestion(q.id);
      });

      // Drag and Drop Listeners
      card.addEventListener('dragstart', (e) => {
        if (e.target.closest('button, a, input, select')) {
          e.preventDefault();
          return;
        }
        draggedQuestionId = q.id;
        card.classList.add('is-dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', q.id);
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('is-dragging');
        document.querySelectorAll('.q-item-card').forEach(c => {
          c.classList.remove('drop-target-top', 'drop-target-bottom', 'is-dragging');
        });
        draggedQuestionId = null;
      });

      card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (!draggedQuestionId || draggedQuestionId === q.id) return;

        const rect = card.getBoundingClientRect();
        const isBottom = e.clientY > (rect.top + rect.height / 2);

        card.classList.toggle('drop-target-bottom', isBottom);
        card.classList.toggle('drop-target-top', !isBottom);
      });

      card.addEventListener('dragleave', (e) => {
        if (!card.contains(e.relatedTarget)) {
          card.classList.remove('drop-target-top', 'drop-target-bottom');
        }
      });

      card.addEventListener('drop', (e) => {
        e.preventDefault();
        card.classList.remove('drop-target-top', 'drop-target-bottom');
        if (!draggedQuestionId || draggedQuestionId === q.id) return;

        const rect = card.getBoundingClientRect();
        const isBottom = e.clientY > (rect.top + rect.height / 2);

        reorderQuestion(draggedQuestionId, q.id, isBottom);
      });

      dom.qbQuestionsListContainer.appendChild(card);
    });
  }

  function reorderQuestion(draggedId, targetId, insertAfter) {
    const questions = currentQuestionBank.questions || [];
    const fromIdx = questions.findIndex(q => q.id === draggedId);
    if (fromIdx < 0) return;

    const targetIdx = questions.findIndex(q => q.id === targetId);
    if (targetIdx < 0 || fromIdx === targetIdx) return;

    // Remove the dragged question
    const [draggedItem] = questions.splice(fromIdx, 1);

    // Find destination index in the updated array
    let newTargetIdx = questions.findIndex(q => q.id === targetId);
    let destinationIdx = insertAfter ? newTargetIdx + 1 : newTargetIdx;

    if (destinationIdx < 0) destinationIdx = 0;
    if (destinationIdx > questions.length) destinationIdx = questions.length;

    // Insert at destination
    questions.splice(destinationIdx, 0, draggedItem);

    // Update order property (1-based)
    questions.forEach((q, i) => {
      q.order = i + 1;
    });

    persistBanks();
    renderQuestionsList();
    showToast('Question order updated.');
  }

  function moveQuestion(questionId, direction) {
    const questions = currentQuestionBank.questions || [];
    const idx = questions.findIndex(q => q.id === questionId);
    if (idx < 0) return;

    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= questions.length) return;

    const temp = questions[idx];
    questions[idx] = questions[targetIdx];
    questions[targetIdx] = temp;

    questions.forEach((q, i) => {
      q.order = i + 1;
    });

    persistBanks();
    renderQuestionsList();
    showToast('Question order updated.');
  }

  function promptDeleteQuestion(questionId) {
    pendingDeleteQuestionId = questionId;
    dom.modalDelete.classList.add('is-visible');
  }

  function confirmDeleteQuestion() {
    if (!pendingDeleteQuestionId) return;
    const questions = currentQuestionBank.questions || [];
    currentQuestionBank.questions = questions.filter(q => q.id !== pendingDeleteQuestionId);
    sessionQuestions = sessionQuestions.filter(q => q.id !== pendingDeleteQuestionId);

    // Re-index order property
    currentQuestionBank.questions.forEach((q, i) => {
      q.order = i + 1;
    });

    pendingDeleteQuestionId = null;
    dom.modalDelete.classList.remove('is-visible');
    persistBanks();
    renderQuestionsList();
    renderPreviousQuestionsList();
    updateMcqTabCounts();
    showToast('Question deleted.');
  }

  // ==========================================================================
  // SAVE QUESTION BANK
  // ==========================================================================
  function saveQuestionBank() {
    const title = dom.qbBankTitle.value.trim();
    if (!title) {
      showToast('Please enter a Question Bank Title.');
      dom.qbBankTitle.focus();
      return;
    }

    currentQuestionBank.questionBankTitle = title;
    const questions = currentQuestionBank.questions || [];

    if (questions.length === 0) {
      showToast('Please add at least one MCQ question before saving.');
      return;
    }

    // Validate each question
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.questionText || !q.options || q.options.length < 2 || !q.correctAnswer) {
        showToast(`Question ${String(i + 1).padStart(2, '0')} is incomplete. Please edit and resolve.`);
        return;
      }
    }

    currentQuestionBank.updatedAt = new Date().toISOString().replace('T', ' ').slice(0, 16);
    currentQuestionBank.status = 'Published';
    persistBanks();

    showToast(`Question Bank "${title}" saved successfully with ${questions.length} questions!`);
    renderQuestionsList();
    renderAssessmentTab();
  }

  // ==========================================================================
  // TAB 02: ASSESSMENT CREATION INTEGRATION
  // ==========================================================================
  function renderAssessmentTab() {
    if (!dom.assessQbSelect) return;

    dom.assessQbSelect.innerHTML = '<option value="">-- Choose a Saved Question Bank --</option>';

    allBanks.forEach((b, idx) => {
      const count = b.questions ? b.questions.length : 0;
      const opt = document.createElement('option');
      opt.value = b.questionBankTitle;
      opt.textContent = `${b.questionBankTitle} (${count} Questions) — [${b.status || 'Ready'}]`;
      if (b.questionBankTitle === currentQuestionBank.questionBankTitle) {
        opt.selected = true;
      }
      dom.assessQbSelect.appendChild(opt);
    });

    updateAssessmentBankPreview(dom.assessQbSelect.value);
  }

  function updateAssessmentBankPreview(bankTitle) {
    if (!dom.assessQbPreviewBox || !dom.btnAddSelectedAssess) return;
    if (!bankTitle) {
      dom.assessQbPreviewBox.innerHTML = '<span style="font-family:var(--font-mono);font-size:11px;color:var(--gray-500);">No Question Bank selected.</span>';
      dom.btnAddSelectedAssess.disabled = true;
      return;
    }

    const bank = allBanks.find(b => b.questionBankTitle === bankTitle);
    if (!bank) return;

    dom.btnAddSelectedAssess.disabled = false;
    const questions = bank.questions || [];

    dom.assessQbPreviewBox.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <strong style="font-size:14px;">${escapeHtml(bank.questionBankTitle)}</strong>
        <span class="tag-pill" style="background:var(--yellow);">${questions.length} QUESTIONS</span>
      </div>
      <div style="font-family:var(--font-mono);font-size:10.5px;color:var(--gray-600);">
        STATUS: ${bank.status || 'Ready'} · LAST UPDATED: ${bank.updatedAt || 'Recent'}
      </div>
      <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray-700);max-height:120px;overflow-y:auto;border:1px solid var(--black);padding:6px;background:var(--white);">
        ${questions.map((q, i) => `<div>Q${String(i+1).padStart(2,'0')}. ${escapeHtml(q.questionText)} (+${q.positiveMarks}m, Answer: ${q.correctAnswer})</div>`).join('')}
      </div>
    `;
  }

  function stageQuestionsFromSelectedBank() {
    if (!dom.assessQbSelect) return;
    const selectedTitle = dom.assessQbSelect.value;
    const bank = allBanks.find(b => b.questionBankTitle === selectedTitle);
    if (!bank || !bank.questions || bank.questions.length === 0) {
      showToast('Selected Question Bank has no questions to stage.');
      return;
    }

    stagedAssessmentQuestions = [...bank.questions];
    renderAssessmentStaging();
    showToast(`Imported ${bank.questions.length} questions from "${bank.questionBankTitle}" into assessment!`);
  }

  function renderAssessmentStaging() {
    if (!dom.stagingCountDisplay || !dom.stagingList) return;
    dom.stagingCountDisplay.textContent = stagedAssessmentQuestions.length;
    if (dom.stagingSummaryQcount) dom.stagingSummaryQcount.textContent = `${stagedAssessmentQuestions.length} QUESTIONS`;

    let totalMarks = 0;
    stagedAssessmentQuestions.forEach(q => {
      totalMarks += (q.positiveMarks || 0);
    });
    if (dom.stagingMarksDisplay) dom.stagingMarksDisplay.textContent = totalMarks.toFixed(1);

    if (stagedAssessmentQuestions.length === 0) {
      dom.stagingList.innerHTML = '<div style="font-family:var(--font-mono);font-size:11px;color:var(--gray-500);text-align:center;padding:24px 0;">No questions staged yet. Select a Question Bank and click "+ ADD SELECTED QUESTION BANK TO ASSESSMENT".</div>';
      return;
    }

    dom.stagingList.innerHTML = stagedAssessmentQuestions.map((q, i) => `
      <div style="border:1.5px solid var(--black);padding:8px 10px;background:var(--white);box-shadow:var(--shadow-xs);display:flex;align-items:center;justify-content:space-between;gap:8px;font-family:var(--font-mono);font-size:11px;">
        <div style="display:flex;align-items:center;gap:8px;overflow:hidden;">
          <span style="background:var(--black);color:var(--yellow);padding:2px 5px;font-weight:800;">${String(i + 1).padStart(2, '0')}</span>
          <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700;">${escapeHtml(q.questionText)}</span>
        </div>
        <span style="font-weight:800;color:var(--green);white-space:nowrap;">+${q.positiveMarks}m</span>
      </div>
    `).join('');
  }

  // ==========================================================================
  // UTILITY ESCAPE
  // ==========================================================================
  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // ROUTING & VIEW CONTROLLER
  // ==========================================================================
  function syncStageFromRoute() {
    const params = new URLSearchParams(window.location.search);
    let stage = params.get('stage') || sessionStorage.getItem('interviewos_selected_stage') || currentQuestionBank.stage || 'Aptitude';
    const lower = String(stage).toLowerCase();
    let normalized = 'Aptitude';
    if (lower.includes('cod')) normalized = 'Coding';
    else if (lower.includes('comm')) normalized = 'Communication';
    else normalized = 'Aptitude';

    if (dom.builderStage) {
      dom.builderStage.value = normalized;
    }
    if (dom.heroStageBadge) {
      dom.heroStageBadge.textContent = normalized.toUpperCase();
    }
    if (dom.heroStageBadgeWrap) {
      dom.heroStageBadgeWrap.style.display = 'inline-flex';
    }
    const heroBankNameBadge = document.getElementById('hero-bank-name-badge');
    const heroBankNameBadgeWrap = document.getElementById('hero-bank-name-badge-wrap');
    if (heroBankNameBadge) {
      const bTitle = currentQuestionBank.questionBankTitle || currentQuestionBank.title || 'Untitled Bank';
      heroBankNameBadge.textContent = bTitle.toUpperCase();
    }
    if (heroBankNameBadgeWrap) {
      heroBankNameBadgeWrap.style.display = 'inline-flex';
    }
    currentQuestionBank.stage = normalized;
  }

  function showCreateMcqRoute() {
    enteredViaCreateMcq = true;

    // Isolate screen: strictly hide all Question Bank Detail sections and View Bank flow
    if (dom.mainHeroEditorial) dom.mainHeroEditorial.style.display = 'none';
    if (dom.qbViewBankFlow) dom.qbViewBankFlow.style.display = 'none';
    if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
    if (dom.qbHeaderCard) dom.qbHeaderCard.style.display = 'none';
    if (dom.tableContainerCard) dom.tableContainerCard.style.display = 'none';
    if (dom.mainTabsNavBar) dom.mainTabsNavBar.style.display = 'none';
    if (dom.btnCreateMcq) dom.btnCreateMcq.style.display = 'none';

    // Show Create MCQ components
    document.body.classList.add('mcq-builder-active');
    if (dom.mcqCreateHero) dom.mcqCreateHero.style.display = 'flex';
    if (dom.mcqNavTabsBar) dom.mcqNavTabsBar.style.display = 'flex';

    // Sync Stage preselection from route / state
    syncStageFromRoute();

    // Reset and initialize builder if not already editing a question
    if (activeBuilderQuestionId === null) {
      openBuilderForQuestion(null);
    }
    switchMcqTab('current');
    updateMcqTabCounts();
  }

  function showQuestionBankDetailRoute() {
    enteredViaCreateMcq = false;

    // Hide Create MCQ components
    document.body.classList.remove('mcq-builder-active');
    if (dom.mcqCreateHero) dom.mcqCreateHero.style.display = 'none';
    if (dom.individualMcqBuilder) dom.individualMcqBuilder.style.display = 'none';
    if (dom.heroStageBadgeWrap) dom.heroStageBadgeWrap.style.display = 'none';
    if (dom.mcqNavTabsBar) dom.mcqNavTabsBar.style.display = 'none';
    if (dom.previousQuestionsPanel) {
      dom.previousQuestionsPanel.style.display = 'none';
      dom.previousQuestionsPanel.classList.add('is-tab-hidden');
    }

    // Hide legacy detail components (no longer in DOM, null-safe)
    if (dom.qbHeaderCard) dom.qbHeaderCard.style.display = 'none';
    if (dom.tableContainerCard) dom.tableContainerCard.style.display = 'none';
    if (dom.mainHeroEditorial) dom.mainHeroEditorial.style.display = 'none';
    if (dom.btnCreateMcq) dom.btnCreateMcq.style.display = 'none';
    if (dom.qbReviewView) dom.qbReviewView.style.display = 'none';

    // Show View Bank MCQ Flow
    if (dom.singleQuestionViewScreen) dom.singleQuestionViewScreen.style.display = 'none';
    if (dom.qbViewBankFlow) dom.qbViewBankFlow.style.display = 'block';

    const rawHash = (window.location.hash || '').toLowerCase();
    const tabParam = (new URLSearchParams(window.location.search).get('tab') || '').toLowerCase();
    if (rawHash === '#overview' || tabParam === 'overview' || rawHash === '#question-map' || tabParam === 'question-map') {
      overviewCurrentPage = 1;
      switchViewBankTab('overview');
    } else {
      renderViewBankQuestion(activeReviewQuestionIndex);
    }
  }

  function handleRoute() {
    const rawHash = window.location.hash || '';
    const hash = rawHash.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const action = (params.get('action') || '').toLowerCase();

    // Priority 1: Create MCQ Route (#create-mcq or ?action=create)
    if (hash === '#create-mcq' || hash.startsWith('#create-mcq') || action === 'create') {
      showCreateMcqRoute();
      return;
    }

    // Priority 2: Question Bank Detail Route (?bankId=... or default repository view)
    showQuestionBankDetailRoute();
  }

  // ==========================================================================
  // INITIALIZATION & EVENT BINDINGS
  // ==========================================================================
  function init() {
    // Re-capture View Bank & review-view DOM refs here — the top-level `dom` object is built
    // at IIFE parse time (before DOMContentLoaded), so getElementById returns null
    // for elements that exist in the HTML. We fix those refs now that the DOM is ready.
    dom.qbViewBankFlow         = document.getElementById('qb-view-bank-flow');
    dom.mcqViewHero            = document.getElementById('mcq-view-hero');
    dom.viewBankNameBadge      = document.getElementById('view-bank-name-badge');
    dom.viewBankNameBadgeWrap  = document.getElementById('view-bank-name-badge-wrap');
    dom.viewStageBadge         = document.getElementById('view-stage-badge');
    dom.viewStageBadgeWrap     = document.getElementById('view-stage-badge-wrap');
    dom.viewCountBadge         = document.getElementById('view-count-badge');
    dom.viewCountBadgeWrap     = document.getElementById('view-count-badge-wrap');
    dom.viewBankTitleDisplay   = document.getElementById('view-bank-title-display');
    dom.btnViewBackToQb        = document.getElementById('btn-view-back-to-qb');
    dom.viewMcqNavTabsBar      = document.getElementById('view-mcq-nav-tabs-bar');
    dom.viewTabBtnCurrentQ     = document.getElementById('view-tab-btn-current-q');
    dom.viewTabNum             = document.getElementById('view-tab-num');
    dom.viewMcqCard            = document.getElementById('view-mcq-card');
    dom.viewCardTitle          = document.getElementById('view-card-title');
    dom.viewQText              = document.getElementById('view-q-text');
    dom.viewImageWrap          = document.getElementById('view-image-wrap');
    dom.viewImageImg           = document.getElementById('view-image-img');
    dom.viewImgIndicator       = document.getElementById('view-img-indicator');
    dom.viewOptionsContainer   = document.getElementById('view-options-container');
    dom.viewStage              = document.getElementById('view-stage');
    dom.viewDifficulty         = document.getElementById('view-difficulty');
    dom.viewPriority           = document.getElementById('view-priority');
    dom.viewPosMarks           = document.getElementById('view-pos-marks');
    dom.viewNegMarks           = document.getElementById('view-neg-marks');
    dom.viewTagsContainer      = document.getElementById('view-tags-container');
    dom.btnViewCancel          = document.getElementById('btn-view-cancel');
    dom.btnViewPrev            = document.getElementById('btn-view-prev');
    dom.btnViewEdit            = document.getElementById('btn-view-edit');
    dom.btnViewNext            = document.getElementById('btn-view-next');
    dom.viewEmptyState         = document.getElementById('view-empty-state');
    dom.btnViewEmptyCreate     = document.getElementById('btn-view-empty-create');
    dom.viewTabBtnOverview     = document.getElementById('view-tab-btn-overview');
    dom.viewOverviewPanel      = document.getElementById('view-overview-panel');
    dom.viewOverviewLayout2col = document.getElementById('view-overview-layout-2col');
    dom.viewOverviewRowsContainer = document.getElementById('view-overview-rows-container');
    dom.viewOverviewCountPill  = document.getElementById('view-overview-count-pill');
    dom.viewOverviewPaletteGrid= document.getElementById('view-overview-palette-grid');
    dom.viewOverviewEasyCount  = document.getElementById('view-overview-easy-count');
    dom.viewOverviewMedCount   = document.getElementById('view-overview-med-count');
    dom.viewOverviewHardCount  = document.getElementById('view-overview-hard-count');
    dom.viewOverviewEmptyState = document.getElementById('view-overview-empty-state');
    dom.viewOverviewPagination = document.getElementById('view-overview-pagination');
    dom.btnOverviewPaginationPrev = document.getElementById('btn-overview-pagination-prev');
    dom.overviewPaginationIndicator = document.getElementById('overview-pagination-indicator');
    dom.btnOverviewPaginationNext = document.getElementById('btn-overview-pagination-next');
    dom.viewPalettePagination = document.getElementById('view-palette-pagination');
    dom.btnPalettePaginationPrev = document.getElementById('btn-palette-pagination-prev');
    dom.palettePaginationIndicator = document.getElementById('palette-pagination-indicator');
    dom.btnPalettePaginationNext = document.getElementById('btn-palette-pagination-next');

    // Dedicated Single Question View Screen refs
    dom.singleQuestionViewScreen = document.getElementById('single-question-view-screen');
    dom.singleQBankBadge        = document.getElementById('single-q-bank-badge');
    dom.singleQStageBadge       = document.getElementById('single-q-stage-badge');
    dom.singleQPageTitle        = document.getElementById('single-q-page-title');
    dom.btnSingleQBack          = document.getElementById('btn-single-q-back');
    dom.singleQCard             = document.getElementById('single-q-card');
    dom.singleQCardTitle        = document.getElementById('single-q-card-title');
    dom.singleQDiffBadge        = document.getElementById('single-q-diff-badge');
    dom.singleQText             = document.getElementById('single-q-text');
    dom.singleQImageWrap        = document.getElementById('single-q-image-wrap');
    dom.singleQImageImg         = document.getElementById('single-q-image-img');
    dom.singleQOptionsContainer = document.getElementById('single-q-options-container');
    dom.singleQStage            = document.getElementById('single-q-stage');
    dom.singleQDifficulty       = document.getElementById('single-q-difficulty');
    dom.singleQPriority         = document.getElementById('single-q-priority');
    dom.singleQPosMarks         = document.getElementById('single-q-pos-marks');
    dom.singleQNegMarks         = document.getElementById('single-q-neg-marks');
    dom.singleQTagsContainer    = document.getElementById('single-q-tags-container');
    dom.btnSingleQFooterBack    = document.getElementById('btn-single-q-footer-back');
    dom.btnSingleQPrev          = document.getElementById('btn-single-q-prev');
    dom.btnSingleQEdit          = document.getElementById('btn-single-q-edit');
    dom.btnSingleQNext          = document.getElementById('btn-single-q-next');

    // Legacy Question Review Interface refs (null-safe)
    dom.qbReviewView        = document.getElementById('qb-review-view');
    dom.qbReviewHeader      = document.getElementById('qb-review-header');
    dom.qbReviewTitle       = document.getElementById('qb-review-title');
    dom.qbReviewStage       = document.getElementById('qb-review-stage');
    dom.qbReviewCount       = document.getElementById('qb-review-count');
    dom.qbReviewPaletteCard = document.getElementById('qb-review-palette-card');
    dom.qbPaletteGrid       = document.getElementById('qb-palette-grid');
    dom.qbPaletteCount      = document.getElementById('qb-palette-count');
    dom.qbReviewCard        = document.getElementById('qb-review-card');
    dom.qbReviewCardContent = document.getElementById('qb-review-card-content');
    dom.qbReviewEmptyState  = document.getElementById('qb-review-empty-state');
    dom.btnReviewAddMcq     = document.getElementById('btn-review-add-mcq');
    dom.btnQbBulkUpload     = document.getElementById('btn-qb-bulk-upload');
    dom.btnEmptyCreateMcq   = document.getElementById('btn-empty-create-mcq');

    // View Bank Navigation: Tab Switching (Current Question vs Overview)
    if (dom.viewTabBtnCurrentQ) {
      dom.viewTabBtnCurrentQ.addEventListener('click', () => {
        switchViewBankTab('current');
      });
    }

    if (dom.viewTabBtnOverview) {
      dom.viewTabBtnOverview.addEventListener('click', () => {
        switchViewBankTab('overview');
      });
    }

    // Overview Pagination Navigation (5 questions per page)
    const handleOverviewPrevPage = () => {
      if (overviewCurrentPage > 1) {
        overviewCurrentPage--;
        renderViewBankOverview();
      }
    };

    const handleOverviewNextPage = () => {
      const questions = currentQuestionBank.questions || [];
      const totalPages = Math.ceil(questions.length / OVERVIEW_PAGE_SIZE) || 1;
      if (overviewCurrentPage < totalPages) {
        overviewCurrentPage++;
        renderViewBankOverview();
      }
    };

    if (dom.btnOverviewPaginationPrev) {
      dom.btnOverviewPaginationPrev.addEventListener('click', handleOverviewPrevPage);
    }
    if (dom.btnOverviewPaginationNext) {
      dom.btnOverviewPaginationNext.addEventListener('click', handleOverviewNextPage);
    }
    if (dom.btnPalettePaginationPrev) {
      dom.btnPalettePaginationPrev.addEventListener('click', handleOverviewPrevPage);
    }
    if (dom.btnPalettePaginationNext) {
      dom.btnPalettePaginationNext.addEventListener('click', handleOverviewNextPage);
    }

    // View Bank Navigation: NEXT QUESTION →
    if (dom.btnViewNext) {
      dom.btnViewNext.addEventListener('click', () => {
        const questions = currentQuestionBank.questions || [];
        if (activeReviewQuestionIndex < questions.length - 1) {
          activeReviewQuestionIndex++;
          renderViewBankQuestion(activeReviewQuestionIndex);
          if (dom.viewMcqCard) {
            dom.viewMcqCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }

    // View Bank Navigation: ← PREV QUESTION
    if (dom.btnViewPrev) {
      dom.btnViewPrev.addEventListener('click', () => {
        if (activeReviewQuestionIndex > 0) {
          activeReviewQuestionIndex--;
          renderViewBankQuestion(activeReviewQuestionIndex);
          if (dom.viewMcqCard) {
            dom.viewMcqCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }

    // View Bank Action: EDIT QUESTION
    if (dom.btnViewEdit) {
      dom.btnViewEdit.addEventListener('click', () => {
        const questions = currentQuestionBank.questions || [];
        const q = questions[activeReviewQuestionIndex];
        if (q) {
          openBuilderForQuestion(q.id);
        }
      });
    }

    // View Bank Empty State: + CREATE FIRST MCQ →
    if (dom.btnViewEmptyCreate) {
      dom.btnViewEmptyCreate.addEventListener('click', () => {
        openBuilderForQuestion(null);
      });
    }

    // Single Question View: Back to Overview (Header & Footer)
    if (dom.btnSingleQBack) {
      dom.btnSingleQBack.addEventListener('click', closeSingleQuestionViewScreen);
    }
    if (dom.btnSingleQFooterBack) {
      dom.btnSingleQFooterBack.addEventListener('click', closeSingleQuestionViewScreen);
    }

    // Single Question View: Prev / Next
    if (dom.btnSingleQPrev) {
      dom.btnSingleQPrev.addEventListener('click', () => {
        if (currentSingleQuestionIndex > 0) {
          renderSingleQuestionView(currentSingleQuestionIndex - 1);
        }
      });
    }
    if (dom.btnSingleQNext) {
      dom.btnSingleQNext.addEventListener('click', () => {
        const questions = currentQuestionBank.questions || [];
        if (currentSingleQuestionIndex < questions.length - 1) {
          renderSingleQuestionView(currentSingleQuestionIndex + 1);
        }
      });
    }

    // Single Question View: Edit Question
    if (dom.btnSingleQEdit) {
      dom.btnSingleQEdit.addEventListener('click', editFromSingleQuestionView);
    }

    // Immediately synchronize header with resolved question bank
    renderBankDetailHeader();

    // Tab switching (null-safe in standalone repository view)
    if (dom.tabBtnQb) {
      dom.tabBtnQb.addEventListener('click', () => switchTab('qb'));
    }
    if (dom.tabBtnAssess) {
      dom.tabBtnAssess.addEventListener('click', () => switchTab('assess'));
    }

    // Question Bank Header & Detail controls (null-safe)
    if (dom.qbBankTitle) {
      dom.qbBankTitle.value = currentQuestionBank.questionBankTitle || 'Untitled Question Bank';
      dom.qbBankTitle.addEventListener('input', (e) => {
        currentQuestionBank.questionBankTitle = e.target.value;
      });
    }
    if (dom.btnCreateMcq) {
      dom.btnCreateMcq.addEventListener('click', () => openBuilderForQuestion(null));
    }
    if (dom.btnSaveBankMain) {
      dom.btnSaveBankMain.addEventListener('click', saveQuestionBank);
    }

    // Review View: "+ CREATE MCQ" header button
    if (dom.btnReviewAddMcq) {
      dom.btnReviewAddMcq.addEventListener('click', () => openBuilderForQuestion(null));
    }

    // Review View: "+ CREATE FIRST MCQ" empty-state button
    if (dom.btnEmptyCreateMcq) {
      dom.btnEmptyCreateMcq.addEventListener('click', () => openBuilderForQuestion(null));
    }

    // Review View: "BULK UPLOAD" button (toast placeholder for now)
    if (dom.btnQbBulkUpload) {
      dom.btnQbBulkUpload.addEventListener('click', () => {
        showToast('Bulk upload via Excel coming soon!');
      });
    }

    // Question image — "+ IMAGE" attachment button directly opens file browser
    if (dom.btnQAttachImage) {
      dom.btnQAttachImage.addEventListener('click', () => {
        dom.builderFileInput.click();
      });
    }

    // Question image upload zone click → file input
    dom.builderImageZone.addEventListener('click', () => dom.builderFileInput.click());
    dom.builderFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (re) => {
          builderImageUrl = re.target.result;
          syncQuestionImageUI();
        };
        reader.readAsDataURL(file);
      }
    });
    dom.btnBuilderRemoveImage.addEventListener('click', () => {
      builderImageUrl = '';
      dom.builderFileInput.value = '';
      syncQuestionImageUI();
    });

    // Add Option
    dom.btnBuilderAddOption.addEventListener('click', () => {
      if (builderOptions.length >= 4) return;
      const nextLetter = String.fromCharCode(65 + builderOptions.length);
      builderOptions.push({ label: nextLetter, text: '', imageUrl: '' });
      renderBuilderOptions();
    });

    // Builder Add Tag
    dom.btnBuilderAddTag.addEventListener('click', addBuilderTag);
    dom.builderTagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const highlighted = document.querySelector('.tm-suggestion-item.is-highlighted');
        if (highlighted) {
          dom.builderTagInput.value = highlighted.dataset.topic || highlighted.textContent.trim();
          closeTmDropdown();
        } else {
          addBuilderTag();
        }
      }
      if (e.key === 'Escape') {
        closeTmDropdown();
      }
    });
    initTopicAutocomplete();

    // Stage Selector change listener
    if (dom.builderStage) {
      dom.builderStage.addEventListener('change', (e) => {
        const val = e.target.value;
        if (dom.heroStageBadge) {
          dom.heroStageBadge.textContent = val.toUpperCase();
        }
        currentQuestionBank.stage = val;
      });
    }

    // Builder Footer actions
    dom.btnBuilderClose.addEventListener('click', closeBuilder);
    dom.btnBuilderCancel.addEventListener('click', closeBuilder);
    dom.btnBuilderSaveQuestion.addEventListener('click', () => saveCurrentQuestion(true));
    dom.btnBuilderAddAnother.addEventListener('click', addAnotherQuestion);

    // MCQ Builder Navigation Tabs
    if (dom.tabBtnCurrentQ) {
      dom.tabBtnCurrentQ.addEventListener('click', () => switchMcqTab('current'));
    }
    if (dom.tabBtnPreviousQ) {
      dom.tabBtnPreviousQ.addEventListener('click', () => switchMcqTab('previous'));
    }
    if (dom.btnCreateNewFromPrev) {
      dom.btnCreateNewFromPrev.addEventListener('click', () => {
        activeBuilderQuestionId = null;
        openBuilderForQuestion(null);
        switchMcqTab('current');
      });
    }

    // Search filter (null-safe — element removed in review-view redesign)
    if (dom.qbSearchInput) {
      dom.qbSearchInput.addEventListener('input', renderQuestionsList);
    }

    // Delete Modal (null-safe guards)
    if (dom.btnCancelDelete && dom.modalDelete) {
      dom.btnCancelDelete.addEventListener('click', () => {
        dom.modalDelete.classList.remove('is-visible');
        pendingDeleteQuestionId = null;
      });
    }
    const btnCancelX = document.getElementById('btn-cancel-delete-x');
    if (btnCancelX) {
      btnCancelX.addEventListener('click', () => {
        if (dom.modalDelete) dom.modalDelete.classList.remove('is-visible');
        pendingDeleteQuestionId = null;
      });
    }
    if (dom.btnConfirmDelete) dom.btnConfirmDelete.addEventListener('click', confirmDeleteQuestion);

    // Assessment Tab (null-safe for standalone repository view)
    if (dom.assessQbSelect) {
      dom.assessQbSelect.addEventListener('change', (e) => {
        updateAssessmentBankPreview(e.target.value);
      });
    }
    if (dom.btnAddSelectedAssess) {
      dom.btnAddSelectedAssess.addEventListener('click', stageQuestionsFromSelectedBank);
    }
    if (dom.btnCreateAssess) {
      dom.btnCreateAssess.addEventListener('click', () => {
        if (stagedAssessmentQuestions.length === 0) {
          showToast('Please stage questions from a Question Bank first.');
          return;
        }
        showToast('Assessment created with Question Bank questions!');
      });
    }
    if (dom.btnSaveAssessDraft) {
      dom.btnSaveAssessDraft.addEventListener('click', () => {
        showToast('Assessment saved as draft.');
      });
    }

    // Routing & page rendering (Create MCQ takes highest priority)
    handleRoute();

    // Listen for hash & popstate events for dynamic route switching
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);

    // Real-time synchronization when returning to page or visibility changes
    window.addEventListener('pageshow', () => {
      const freshBanks = loadAllQuestionBanks();
      if (freshBanks.length > 0) {
        allBanks = freshBanks;
        const targetId = (
          new URLSearchParams(window.location.search).get('bankId') ||
          new URLSearchParams(window.location.search).get('id') ||
          sessionStorage.getItem('interviewos_selected_bank_id') ||
          localStorage.getItem('interviewos_selected_bank_id') ||
          currentQuestionBank.id ||
          ''
        ).toLowerCase().trim();
        const targetPlain = targetId.replace(/^qb-/, '');
        const matched = allBanks.find(b => {
          const bId = String(b.id || '').toLowerCase().trim();
          const bPlain = bId.replace(/^qb-/, '');
          return bId === targetId || bPlain === targetPlain || ('qb-' + bPlain) === targetId || ('qb-' + targetPlain) === bId;
        });
        if (matched) {
          currentQuestionBank = {
            ...matched,
            questionBankTitle: matched.questionBankTitle || matched.title || 'Untitled Question Bank',
            title: matched.questionBankTitle || matched.title || 'Untitled Question Bank',
            description: matched.description || matched.desc || 'Custom trainer question bank with curated MCQ questions.',
            desc: matched.description || matched.desc || 'Custom trainer question bank with curated MCQ questions.',
            questions: Array.isArray(matched.questions) ? JSON.parse(JSON.stringify(matched.questions)) : [],
            questionCount: Array.isArray(matched.questions) ? matched.questions.length : 0,
            institute: getBankInstitute(matched),
            stage: getBankStage(matched)
          };
          renderBankDetailHeader();
          renderQuestionsList();
        }
      }
    });
  }

  // Expose namespace for compatibility
  window.InterviewOS = {
    saveQuestionBank,
    openBuilderForQuestion,
    moveQuestion,
    showToast
  };

  // Prevent middle-click autoscroll cursor from triggering unexpectedly
  window.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
