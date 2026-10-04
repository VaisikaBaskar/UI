/**
 * InterviewOS — Trainer Home Page Controller
 * Isolated workspace controller for trainer-home.html wireframe
 */

(function () {
  'use strict';

  // ==========================================================================
  // SAMPLE DATA
  // ==========================================================================

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

  const DEFAULT_QUESTION_BANKS = [
    {
      id: 'qb-101',
      title: 'Quantitative & Analytical Aptitude',
      questionBankTitle: 'Quantitative & Analytical Aptitude',
      desc: 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.',
      description: 'Critical numerical ability, sequence decoding, data interpretation, and quantitative logic.',
      questionCount: DEFAULT_APTITUDE_MCQS.length,
      status: 'Published',
      updatedAt: '16 Sep 2026',
      usedInAssessments: 3,
      institute: 'InterviewOS Training Academy',
      stage: 'Aptitude',
      questionType: 'MCQ',
      contentType: 'text',
      optionsCount: 4,
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

  // Safe field extraction for Institute
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

  // Safe field extraction for Stage (Aptitude, Coding, Communication)
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
    const combined = ((bank.title || '') + ' ' + (bank.desc || '')).toLowerCase();
    if (combined.includes('coding') || combined.includes('data structure') || combined.includes('algorithm') || combined.includes('system design') || combined.includes('engineering') || combined.includes('programming') || combined.includes('software') || combined.includes('frontend') || combined.includes('backend') || combined.includes('network') || combined.includes('database')) {
      return 'CODING';
    }
    if (combined.includes('communication') || combined.includes('verbal') || combined.includes('english') || combined.includes('behavioral') || combined.includes('speaking') || combined.includes('comprehension')) {
      return 'COMMUNICATION';
    }
    if (combined.includes('aptitude') || combined.includes('quantitative') || combined.includes('analytical') || combined.includes('reasoning') || combined.includes('numerical') || combined.includes('math') || combined.includes('logic')) {
      return 'APTITUDE';
    }
    return 'APTITUDE';
  }

  const DEFAULT_ASSESSMENTS = [
    {
      id: 'assess-001',
      code: 'ASM-01',
      title: 'Baseline Technical Evaluation',
      type: 'Screening Round',
      questionBank: 'Quantitative & Analytical Aptitude',
      questionCount: 20,
      durationMinutes: 50,
      totalMarks: 100,
      status: 'Draft',
      window: 'Flexible (Self-Paced)'
    },
    {
      id: 'assess-002',
      code: 'ASM-02',
      title: 'Frontend Core Engineering Challenge',
      type: 'Skill Assessment',
      questionBank: 'Quantitative & Analytical Aptitude',
      questionCount: 15,
      durationMinutes: 45,
      totalMarks: 75,
      status: 'Scheduled',
      window: 'Starts 20 Sep 2026, 10:00 AM'
    },
    {
      id: 'assess-003',
      code: 'ASM-03',
      title: 'Senior Backend Infrastructure Benchmark',
      type: 'Final Evaluation',
      questionBank: 'Quantitative & Analytical Aptitude',
      questionCount: 25,
      durationMinutes: 60,
      totalMarks: 100,
      status: 'Active',
      window: 'Open until 18 Sep 2026, 11:59 PM'
    }
  ];

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================

  let questionBanks = [];
  let assessments = [...DEFAULT_ASSESSMENTS];

  let currentQbInstitute = 'all';
  let currentQbStage = 'all';
  let currentQbSearch = '';

  let currentAssessFilter = 'all';
  let currentAssessSearch = '';

  // Initialize Question Banks (merge localStorage if existing, honoring deletions)
  function initQuestionBanks() {
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
    DEFAULT_QUESTION_BANKS.forEach(b => {
      const idKey = String(b.id || '').toLowerCase().trim();
      const titleKey = String(b.title || '').toLowerCase().trim();
      if (!deletedIds.has(idKey) && !deletedIds.has(titleKey)) {
        map.set(b.id, {
          ...b,
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
              const valTitle = String(val.title || '').toLowerCase().trim();

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
              title: b.questionBankTitle || b.title || (matchedKey && map.get(matchedKey).title) || 'Untitled Question Bank',
              desc: b.description || b.desc || (matchedKey && map.get(matchedKey).desc) || 'Custom trainer question bank with curated MCQ questions.',
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
              // If existing entry already had questions loaded and incoming has none, preserve existing questions & count
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
      console.warn('LocalStorage retrieval error in initQuestionBanks:', err);
    }

    // Reconcile and ensure Quantitative & Analytical Aptitude has the 4 MCQs
    reconcileQuantitativeAptitudeBank(map);

    const bankList = Array.from(map.values());
    if (bankList.length === 0 && deletedIds.size === 0) {
      questionBanks = DEFAULT_QUESTION_BANKS.map(b => ({
        ...b,
        questions: Array.isArray(b.questions) ? [...b.questions] : []
      }));
    } else {
      questionBanks = bankList;
    }
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

  // ==========================================================================
  // DOM ELEMENTS
  // ==========================================================================

  const tabBtnQb = document.getElementById('tab-btn-qb');
  const tabBtnAssess = document.getElementById('tab-btn-assess');
  const panelQb = document.getElementById('panel-qb');
  const panelAssess = document.getElementById('panel-assess');

  const qbCardsGrid = document.getElementById('qb-cards-grid');
  const qbEmptyState = document.getElementById('qb-empty-state');
  const qbSearchInput = document.getElementById('qb-search-input');
  const qbCountBadge = document.getElementById('qb-count-badge');
  const qbFilterInstitute = document.getElementById('qb-filter-institute');
  const qbFilterStage = document.getElementById('qb-filter-stage');

  const assessCardsList = document.getElementById('assess-cards-list');
  const assessEmptyState = document.getElementById('assess-empty-state');
  const assessSearchInput = document.getElementById('assess-search-input');
  const assessCountBadge = document.getElementById('assess-count-badge');
  const assessFilterBtns = document.querySelectorAll('[data-assess-filter]');
  const btnCreateAssess = document.getElementById('btn-create-assess');

  const toastNotice = document.getElementById('toast-notice');
  const toastText = document.getElementById('toast-text');

  // Question Bank Selection Modal DOM references (Assessment Creation)
  const modalSelectQb = document.getElementById('modal-select-qb');
  const qbModalSearchInput = document.getElementById('qb-modal-search-input');
  const btnQbModalSearchClear = document.getElementById('btn-qb-modal-search-clear');
  const qbModalList = document.getElementById('qb-modal-list');
  const qbModalEmpty = document.getElementById('qb-modal-empty');
  const qbModalCountBadge = document.getElementById('qb-modal-count-badge');
  const btnCloseQbModal = document.getElementById('btn-close-qb-modal');
  const btnCancelQbModal = document.getElementById('btn-cancel-qb-modal');
  const btnQbModalEmptyClear = document.getElementById('btn-qb-modal-empty-clear');
  const qbModalFilterBtns = document.querySelectorAll('[data-qb-modal-filter]');

  let activeQbModuleId = null;
  let qbModalSearchQuery = '';
  let qbModalFilterStatus = 'all';

  // Delete Confirmation Modal DOM references
  const modalDelete = document.getElementById('modal-delete');
  const modalDeleteTitle = document.getElementById('modal-delete-title');
  const modalDeleteText = document.getElementById('modal-delete-text');
  const btnCancelDelete = document.getElementById('btn-cancel-delete');
  const btnCancelDeleteX = document.getElementById('btn-cancel-delete-x');
  const btnConfirmDelete = document.getElementById('btn-confirm-delete');

  let pendingDeleteTarget = null; // { type: 'bank' | 'assess', id: string, name: string }

  let toastTimer = null;

  // ==========================================================================
  // TOAST FEEDBACK
  // ==========================================================================

  function showToast(message) {
    if (!toastNotice || !toastText) return;
    toastText.textContent = message;
    toastNotice.classList.add('is-active');
    toastNotice.style.display = 'flex';

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('is-active');
      setTimeout(() => {
        toastNotice.style.display = 'none';
      }, 200);
    }, 2800);
  }

  // ==========================================================================
  // TAB SWITCHING
  // ==========================================================================

  function switchTab(activeTab) {
    if (activeTab === 'qb') {
      tabBtnQb.classList.add('is-active');
      tabBtnQb.setAttribute('aria-selected', 'true');
      tabBtnAssess.classList.remove('is-active');
      tabBtnAssess.setAttribute('aria-selected', 'false');

      panelQb.classList.add('is-active');
      panelAssess.classList.remove('is-active');

      initQuestionBanks();
      populateInstituteOptions();
      populateStageOptions();
      renderQuestionBanks();
    } else {
      tabBtnAssess.classList.add('is-active');
      tabBtnAssess.setAttribute('aria-selected', 'true');
      tabBtnQb.classList.remove('is-active');
      tabBtnQb.setAttribute('aria-selected', 'false');

      panelAssess.classList.add('is-active');
      panelQb.classList.remove('is-active');

      initQuestionBanks();
      renderAssessModules();
    }
  }

  // ==========================================================================
  // POPULATE INSTITUTE DROPDOWN OPTIONS
  // ==========================================================================

  function populateInstituteOptions() {
    if (!qbFilterInstitute) return;
    const currentVal = currentQbInstitute || qbFilterInstitute.value || 'all';

    const institutes = new Set();
    questionBanks.forEach(b => {
      const inst = getBankInstitute(b);
      if (inst && inst.toLowerCase() !== 'all' && inst.toLowerCase() !== 'all institutes') {
        institutes.add(inst);
      }
    });

    if (institutes.size === 0) {
      institutes.add('InterviewOS Training Academy');
    }

    const instList = Array.from(institutes);
    qbFilterInstitute.innerHTML = `
      <option value="all">ALL INSTITUTES</option>
      ${instList.map(inst => `
        <option value="${escapeHtml(inst)}">${escapeHtml(inst.toUpperCase())}</option>
      `).join('')}
    `;

    const found = instList.find(i => i.toLowerCase() === currentVal.toLowerCase());
    if (found) {
      qbFilterInstitute.value = found;
      currentQbInstitute = found;
    } else {
      qbFilterInstitute.value = 'all';
      currentQbInstitute = 'all';
    }
  }

  // ==========================================================================
  // POPULATE STAGE DROPDOWN OPTIONS
  // ==========================================================================

  function populateStageOptions() {
    if (!qbFilterStage) return;
    const currentVal = currentQbStage || qbFilterStage.value || 'all';

    // Baseline stages + any custom dynamic stages present in questionBanks data
    const stages = new Set(['APTITUDE', 'CODING', 'COMMUNICATION']);
    questionBanks.forEach(b => {
      const stage = getBankStage(b);
      if (stage && stage.toLowerCase() !== 'all' && stage.toLowerCase() !== 'all stages') {
        stages.add(stage.toUpperCase());
      }
    });

    const stageList = Array.from(stages);
    qbFilterStage.innerHTML = `
      <option value="all">ALL STAGES</option>
      ${stageList.map(st => `
        <option value="${escapeHtml(st)}">${escapeHtml(st)}</option>
      `).join('')}
    `;

    const found = stageList.find(s => s.toLowerCase() === currentVal.toLowerCase());
    if (found) {
      qbFilterStage.value = found;
      currentQbStage = found;
    } else {
      qbFilterStage.value = 'all';
      currentQbStage = 'all';
    }
  }

  // ==========================================================================
  // RESET QB FILTERS
  // ==========================================================================

  function resetQbFilters() {
    currentQbInstitute = 'all';
    currentQbStage = 'all';
    currentQbSearch = '';
    if (qbFilterInstitute) qbFilterInstitute.value = 'all';
    if (qbFilterStage) qbFilterStage.value = 'all';
    if (qbSearchInput) qbSearchInput.value = '';
    renderQuestionBanks();
  }

  // ==========================================================================
  // RENDER QUESTION BANKS
  // ==========================================================================

  function renderQuestionBanks() {
    if (!qbCardsGrid) return;

    const filtered = questionBanks.filter(b => {
      const title = (b.title || '').toLowerCase();
      const desc = (b.desc || '').toLowerCase();
      const inst = getBankInstitute(b);
      const stage = getBankStage(b);

      const matchesSearch = !currentQbSearch ||
        title.includes(currentQbSearch) ||
        desc.includes(currentQbSearch) ||
        inst.toLowerCase().includes(currentQbSearch) ||
        stage.toLowerCase().includes(currentQbSearch);

      const matchesInstitute =
        !currentQbInstitute ||
        currentQbInstitute.toLowerCase() === 'all' ||
        currentQbInstitute.toLowerCase() === 'all institutes' ||
        inst.trim().toLowerCase() === currentQbInstitute.trim().toLowerCase();

      const matchesStage =
        !currentQbStage ||
        currentQbStage.toLowerCase() === 'all' ||
        currentQbStage.toLowerCase() === 'all stages' ||
        stage.trim().toUpperCase() === currentQbStage.trim().toUpperCase();

      return matchesSearch && matchesInstitute && matchesStage;
    });

    // Update count badge
    if (qbCountBadge) {
      qbCountBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'BANK' : 'BANKS'}`;
    }

    if (filtered.length === 0) {
      qbCardsGrid.innerHTML = '';
      qbCardsGrid.style.display = 'none';
      if (qbEmptyState) {
        qbEmptyState.style.display = 'flex';
        const emptyTitle = qbEmptyState.querySelector('.empty-state-title');
        const emptyDesc = qbEmptyState.querySelector('.empty-state-desc');
        const emptyBtn = qbEmptyState.querySelector('button');

        if (questionBanks.length === 0) {
          if (emptyTitle) emptyTitle.textContent = 'NO QUESTION BANKS CREATED YET';
          if (emptyDesc) emptyDesc.textContent = 'Create your first Question Bank to organize MCQ questions for assessments.';
          if (emptyBtn) {
            emptyBtn.textContent = '+ CREATE QUESTION BANK';
            emptyBtn.removeAttribute('data-action');
          }
        } else {
          if (emptyTitle) emptyTitle.textContent = 'NO MATCHING QUESTION BANKS FOUND';
          if (emptyDesc) emptyDesc.textContent = 'No question banks match the selected institute, stage, or search criteria. Try adjusting or clearing your filters.';
          if (emptyBtn) {
            emptyBtn.textContent = 'CLEAR ALL FILTERS';
            emptyBtn.setAttribute('data-action', 'clear-filters');
          }
        }
      }
      return;
    }

    qbCardsGrid.style.display = 'grid';
    if (qbEmptyState) qbEmptyState.style.display = 'none';

    qbCardsGrid.innerHTML = filtered.map((bank, index) => {
      const statusClass =
        bank.status.toLowerCase() === 'published' ? 'is-published' :
        bank.status.toLowerCase() === 'draft' ? 'is-draft' : 'is-archived';

      const padIndex = String(index + 1).padStart(2, '0');
      const bankInst = getBankInstitute(bank);
      const bankStage = getBankStage(bank);
      const totalQuestions = Array.isArray(bank.questions)
        ? bank.questions.length
        : (typeof bank.questionCount === 'number' ? bank.questionCount : 0);
      const questionCountLabel = `${totalQuestions} ${totalQuestions === 1 ? 'MCQ' : 'MCQs'}`;

      return `
        <article class="qb-card" data-bank-id="${bank.id}">
          <div class="qb-card-layout">
            <div class="qb-card-main">
              <div class="qb-card-header">
                <div class="qb-card-title-group">
                  <div class="qb-card-meta-line">
                    <span class="qb-card-index-tag">BANK ${padIndex}</span>
                    <span class="qb-card-ref-id">ID // ${escapeHtml(bank.id).toUpperCase()}</span>
                    <span class="qb-meta-pill qb-institute-pill" title="Institute">${escapeHtml(bankInst)}</span>
                    <span class="qb-meta-pill qb-stage-pill" title="Assessment Stage">${escapeHtml(bankStage || 'STAGE')}</span>
                  </div>
                  <h3 class="qb-card-title">${escapeHtml(bank.title)}</h3>
                  <p class="qb-card-desc">${escapeHtml(bank.desc)}</p>
                </div>
                <div class="qb-card-header-badges">
                  <span class="qb-type-tag">MCQ REPOSITORY</span>
                  <span class="status-tag ${statusClass}">${escapeHtml(bank.status)}</span>
                </div>
              </div>

              <div class="qb-card-stats">
                <div class="stat-item">
                  <span class="stat-item-label">TOTAL QUESTIONS</span>
                  <span class="stat-item-value">${questionCountLabel}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-item-label">LAST UPDATED</span>
                  <span class="stat-item-value">${escapeHtml(bank.updatedAt)}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-item-label">IN ASSESSMENTS</span>
                  <span class="stat-item-value">${bank.usedInAssessments || 0}</span>
                </div>
              </div>

              <div class="qb-card-footer">
                <div class="qb-card-actions-left">
                  <a
                    href="trainer-question-bank.html?bankId=${encodeURIComponent(bank.id)}&bankTitle=${encodeURIComponent(bank.title)}"
                    class="btn-action-view"
                    data-bank-id="${bank.id}"
                    data-bank-title="${escapeHtml(bank.title)}"
                    title="View Question Bank Details"
                  >
                    <span>VIEW BANK</span>
                    <span>→</span>
                  </a>
                  <a
                    href="trainer-question-bank.html?bankId=${encodeURIComponent(bank.id)}&bankTitle=${encodeURIComponent(bank.title)}"
                    class="btn-action-edit"
                    data-bank-id="${bank.id}"
                    data-bank-title="${escapeHtml(bank.title)}"
                    title="Edit Question Bank"
                    style="display:inline-flex;align-items:center;gap:5px;"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                    <span>EDIT</span>
                  </a>
                </div>
                <div class="qb-card-actions-right">
                  <button
                    type="button"
                    class="btn-action-delete"
                    data-action="delete-bank"
                    data-bank-id="${bank.id}"
                    data-bank-title="${escapeHtml(bank.title)}"
                    title="Delete question bank"
                    style="display:inline-flex;align-items:center;gap:5px;"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    <span>DELETE</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="qb-card-side-panel" aria-label="Question Bank Details">
              <div class="qb-side-mid-box" title="Institute Name" style="justify-content: center; text-align: center; padding: 8px 10px;">
                <span class="qb-side-type-label" style="font-size: 11px; font-weight: 800; line-height: 1.35; text-align: center; word-break: break-word;">${escapeHtml(bankInst.toUpperCase())}</span>
              </div>
              <div class="qb-side-status" title="Assessment Stage" style="background: var(--yellow, #ffea00); border: 1.5px solid var(--black); box-shadow: 1px 1px 0 var(--black); padding: 7px 10px; justify-content: center;">
                <span class="qb-side-status-text" style="color: var(--black); font-size: 11px; font-weight: 900; letter-spacing: 0.05em;">${escapeHtml(bankStage.toUpperCase())}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // ==========================================================================
  // CREATE ASSESSMENT WORKFLOW CONTROLLER
  // ==========================================================================

  const TARGET_DEPARTMENTS = [
    'All Engineering Departments',
    'Computer Science & Engineering (CSE)',
    'Information Technology (IT)',
    'Artificial Intelligence & Data Science (AI & DS)',
    'Electronics & Communication (ECE)',
    'Electrical & Electronics (EEE)',
    'Mechanical Engineering (MECH)',
    'Batch 2026 — Core Technical Group',
    'General / All Batches'
  ];

  let assessModules = [];

  function initDefaultModule() {
    return {
      id: 'mod-' + Date.now(),
      title: 'Section 1 — Aptitude & Core Logic',
      type: 'Aptitude',
      institution: 'InterviewOS Training Academy',
      qbId: '',
      qbIds: [],
      duration: 45,
      dept: TARGET_DEPARTMENTS[0],
      startTime: '10:00',
      endTime: '10:45'
    };
  }

  // Preserve user-entered values in DOM across re-renders
  function syncModulesFromDom() {
    const container = document.getElementById('assess-modules-container');
    if (!container) return;
    const moduleCards = container.querySelectorAll('.module-block-card');
    moduleCards.forEach(card => {
      const modId = card.dataset.moduleId;
      const mod = assessModules.find(m => m.id === modId);
      if (!mod) return;
      const titleInput = card.querySelector('[data-field="title"]');
      if (titleInput) mod.title = titleInput.value;
      const typeSelect = card.querySelector('[data-field="type"]');
      if (typeSelect) mod.type = typeSelect.value;
      const instSelect = card.querySelector('[data-field="institution"]');
      if (instSelect) mod.institution = instSelect.value;
      const deptSelect = card.querySelector('[data-field="dept"]');
      if (deptSelect) mod.dept = deptSelect.value;
      const durationInput = card.querySelector('[data-field="duration"]');
      if (durationInput) mod.duration = durationInput.value;
      const startInput = card.querySelector('[data-field="startTime"]');
      if (startInput) mod.startTime = startInput.value;
      const endInput = card.querySelector('[data-field="endTime"]');
      if (endInput) mod.endTime = endInput.value;
    });
  }

  const DUMMY_INSTITUTES = [
    'InterviewOS Training Academy',
    'KSR College of Engineering'
  ];

  function getModuleInstituteList() {
    return [...DUMMY_INSTITUTES];
  }

  function getModuleInstituteOptionsHtml(selectedInst) {
    const instList = getModuleInstituteList();
    const currentSelected = selectedInst || instList[0];
    return instList.map(inst => {
      const isSel = (inst.toLowerCase() === currentSelected.toLowerCase()) ? 'selected' : '';
      return `<option value="${escapeHtml(inst)}" ${isSel}>${escapeHtml(inst.toUpperCase())}</option>`;
    }).join('');
  }

  function getModuleQbOptionsHtml(selectedId, institution) {
    if (!questionBanks || questionBanks.length === 0) {
      return '<option value="">NO QUESTION BANKS AVAILABLE</option>';
    }
    let list = questionBanks;
    if (institution) {
      const filtered = questionBanks.filter(b => getBankInstitute(b).toLowerCase() === institution.toLowerCase());
      if (filtered.length > 0) {
        list = filtered;
      }
    }
    return list.map(b => {
      const isSel = (b.id === selectedId || (!selectedId && b === list[0])) ? 'selected' : '';
      const stage = getBankStage(b);
      return `<option value="${escapeHtml(b.id)}" ${isSel}>${escapeHtml(b.title.toUpperCase())} (${b.questionCount} MCQs // ${escapeHtml(stage)})</option>`;
    }).join('');
  }

  function getModuleTypeOptionsHtml(selectedType) {
    const types = new Set(['Aptitude', 'Coding', 'Communication', 'Technical Evaluation', 'Screening Round', 'Skill Assessment', 'Final Evaluation']);
    questionBanks.forEach(b => {
      const st = getBankStage(b);
      if (st) {
        const formatted = st.charAt(0).toUpperCase() + st.slice(1).toLowerCase();
        types.add(formatted);
      }
    });
    return Array.from(types).map(t => {
      const isSel = (t.toLowerCase() === (selectedType || 'aptitude').toLowerCase()) ? 'selected' : '';
      return `<option value="${escapeHtml(t)}" ${isSel}>${escapeHtml(t.toUpperCase())}</option>`;
    }).join('');
  }

  function getModuleDeptOptionsHtml(selectedDept) {
    return TARGET_DEPARTMENTS.map(d => {
      const isSel = (d === selectedDept || (!selectedDept && d === TARGET_DEPARTMENTS[0])) ? 'selected' : '';
      return `<option value="${escapeHtml(d)}" ${isSel}>${escapeHtml(d.toUpperCase())}</option>`;
    }).join('');
  }

  function renderAssessModules() {
    const container = document.getElementById('assess-modules-container');
    const summary = document.getElementById('assess-form-summary');
    if (!container) return;

    if (assessModules.length === 0) {
      assessModules.push(initDefaultModule());
    }

    if (summary) {
      summary.textContent = `${assessModules.length} ${assessModules.length === 1 ? 'MODULE' : 'MODULES'} CONFIGURED`;
    }

    container.innerHTML = assessModules.map((mod, index) => {
      const padIndex = String(index + 1).padStart(2, '0');
      const isFirst = index === 0;
      const selectedBankIds = Array.isArray(mod.qbIds)
        ? mod.qbIds
        : (mod.qbId ? [mod.qbId] : []);

      return `
        <div class="module-block-card" data-module-id="${mod.id}" data-module-index="${index}">
          <div class="module-block-header">
            <div class="module-badge-wrap">
              <span class="module-badge-num">MODULE ${padIndex}</span>
              <span class="module-header-title">${escapeHtml(mod.title ? mod.title.toUpperCase() : `MODULE ${padIndex}`)}</span>
            </div>
            ${!isFirst ? `
              <button
                type="button"
                class="btn-remove-module"
                data-action="remove-module"
                data-module-id="${mod.id}"
                title="Remove this module"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                <span>REMOVE MODULE</span>
              </button>
            ` : `
              <span class="module-primary-tag">PRIMARY MODULE</span>
            `}
          </div>

          <div class="module-fields-body">
            <!-- Row 1: Module Title & Type -->
            <div class="module-grid-row module-grid-2">
              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>MODULE TITLE</span>
                  <span class="required-marker">*</span>
                </label>
                <input
                  type="text"
                  class="assess-text-input module-input"
                  data-field="title"
                  value="${escapeHtml(mod.title || '')}"
                  placeholder="e.g., Section ${padIndex} — Core Evaluation"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>TYPE</span>
                </label>
                <div class="assess-select-wrap">
                  <select class="assess-select-input module-input" data-field="type">
                    ${getModuleTypeOptionsHtml(mod.type)}
                  </select>
                  <svg class="select-chevron" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Row 2: Institution & Question Bank -->
            <div class="module-grid-row module-grid-2">
              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>INSTITUTION</span>
                </label>
                <div class="assess-select-wrap">
                  <select class="assess-select-input module-input" data-field="institution">
                    ${getModuleInstituteOptionsHtml(mod.institution)}
                  </select>
                  <svg class="select-chevron" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div class="assess-field-group assess-qb-field-group">
                <label class="assess-field-label">
                  <span>${selectedBankIds.length > 1 ? 'QUESTION BANKS' : 'QUESTION BANK'}</span>
                  ${selectedBankIds.length > 0 ? `<span class="field-unit-hint">(${selectedBankIds.length} SELECTED)</span>` : '<span class="required-marker">*</span>'}
                </label>
                <div class="assess-qb-selection-area">
                  ${selectedBankIds.length === 0 ? `
                    <button
                      type="button"
                      class="btn-select-qb"
                      data-action="open-qb-modal"
                      data-module-id="${mod.id}"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span>SELECT QUESTION BANK</span>
                    </button>
                  ` : `
                    <div class="qb-selected-cards-list">
                      ${selectedBankIds.map(bankId => {
                        const bank = questionBanks.find(b => b.id === bankId);
                        if (!bank) return '';
                        const qCount = bank.questionCount || (Array.isArray(bank.questions) ? bank.questions.length : 0);
                        const stage = getBankStage(bank);
                        return `
                          <div class="qb-selected-card" data-bank-id="${escapeHtml(bank.id)}">
                            <div class="qb-selected-card-info">
                              <div class="qb-selected-card-title">${escapeHtml(bank.title)}</div>
                              <div class="qb-selected-card-meta">
                                <span class="qb-selected-meta-count">${qCount} MCQs</span>
                                <span class="qb-selected-meta-dot">•</span>
                                <span class="qb-selected-meta-stage">${escapeHtml(stage.toUpperCase())}</span>
                                ${bank.status ? `
                                  <span class="qb-selected-meta-dot">•</span>
                                  <span class="qb-selected-status-badge ${bank.status.toLowerCase()}">${escapeHtml(bank.status.toUpperCase())}</span>
                                ` : ''}
                              </div>
                            </div>
                            <button
                              type="button"
                              class="qb-selected-remove-btn"
                              data-action="remove-selected-qb"
                              data-module-id="${mod.id}"
                              data-bank-id="${escapeHtml(bank.id)}"
                              title="Remove ${escapeHtml(bank.title)} from this module"
                              aria-label="Remove ${escapeHtml(bank.title)}"
                            >✕</button>
                          </div>
                        `;
                      }).join('')}
                    </div>
                    <button
                      type="button"
                      class="btn-add-another-qb"
                      data-action="open-qb-modal"
                      data-module-id="${mod.id}"
                    >
                      + ADD QUESTION BANK
                    </button>
                  `}
                </div>
              </div>
            </div>

            <!-- Row 3: Target Department / Group & Duration -->
            <div class="module-grid-row module-grid-2">
              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>TARGET DEPARTMENT / GROUP</span>
                </label>
                <div class="assess-select-wrap">
                  <select class="assess-select-input module-input" data-field="dept">
                    ${getModuleDeptOptionsHtml(mod.dept)}
                  </select>
                  <svg class="select-chevron" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>DURATION</span>
                  <span class="field-unit-hint">(MINUTES)</span>
                </label>
                <div class="input-with-unit-wrap">
                  <input
                    type="number"
                    class="assess-text-input module-input"
                    data-field="duration"
                    value="${mod.duration || 45}"
                    min="5"
                    max="360"
                    step="5"
                    placeholder="45"
                    required
                  />
                  <span class="unit-suffix-tag">MIN</span>
                </div>
              </div>
            </div>

            <!-- Row 4: Start Time & End Time -->
            <div class="module-grid-row module-grid-2">
              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>START TIME</span>
                </label>
                <input
                  type="time"
                  class="assess-text-input module-input"
                  data-field="startTime"
                  value="${mod.startTime || '10:00'}"
                  required
                />
              </div>

              <div class="assess-field-group">
                <label class="assess-field-label">
                  <span>END TIME</span>
                </label>
                <input
                  type="time"
                  class="assess-text-input module-input"
                  data-field="endTime"
                  value="${mod.endTime || '10:45'}"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function addAssessmentModule() {
    syncModulesFromDom();
    const nextIdx = assessModules.length + 1;
    const pad = String(nextIdx).padStart(2, '0');

    assessModules.push({
      id: 'mod-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      title: `Section ${nextIdx} — Assessment Module`,
      type: 'Aptitude',
      institution: 'InterviewOS Training Academy',
      qbId: '',
      qbIds: [],
      duration: 45,
      dept: TARGET_DEPARTMENTS[0],
      startTime: '11:00',
      endTime: '11:45'
    });

    renderAssessModules();
    showToast(`+ ADDED MODULE ${pad}`);

    const container = document.getElementById('assess-modules-container');
    if (container && container.lastElementChild) {
      container.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function removeAssessmentModule(modId) {
    if (assessModules.length <= 1) {
      showToast('PRIMARY MODULE CANNOT BE REMOVED');
      return;
    }
    syncModulesFromDom();
    const idx = assessModules.findIndex(m => m.id === modId);
    if (idx !== -1) {
      assessModules.splice(idx, 1);
      renderAssessModules();
      showToast('REMOVED MODULE');
    }
  }

  // ==========================================================================
  // QUESTION BANK SELECTION MODAL CONTROLLER (ASSESSMENT CREATION)
  // ==========================================================================

  function openQbSelectionModal(moduleId) {
    if (!modalSelectQb) return;
    syncModulesFromDom();
    initQuestionBanks();

    activeQbModuleId = moduleId;
    qbModalSearchQuery = '';
    qbModalFilterStatus = 'all';

    if (qbModalSearchInput) {
      qbModalSearchInput.value = '';
    }
    if (btnQbModalSearchClear) {
      btnQbModalSearchClear.style.display = 'none';
    }

    qbModalFilterBtns.forEach(btn => {
      const isAll = btn.dataset.qbModalFilter === 'all';
      btn.classList.toggle('is-active', isAll);
      btn.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });

    renderQbModalList();

    modalSelectQb.style.display = 'flex';
    void modalSelectQb.offsetWidth;
    modalSelectQb.classList.add('is-visible');

    setTimeout(() => {
      if (qbModalSearchInput) qbModalSearchInput.focus();
    }, 60);
  }

  function closeQbSelectionModal() {
    if (!modalSelectQb) return;
    modalSelectQb.classList.remove('is-visible');
    setTimeout(() => {
      modalSelectQb.style.display = 'none';
      activeQbModuleId = null;
    }, 150);
  }

  function renderQbModalList() {
    if (!qbModalList || !qbModalEmpty) return;

    const mod = assessModules.find(m => m.id === activeQbModuleId);
    const selectedIds = new Set(mod ? (mod.qbIds || (mod.qbId ? [mod.qbId] : [])) : []);

    let filtered = questionBanks.slice();

    // 1. Status Filter
    if (qbModalFilterStatus === 'published') {
      filtered = filtered.filter(b => (b.status || '').toLowerCase() === 'published');
    } else if (qbModalFilterStatus === 'draft') {
      filtered = filtered.filter(b => (b.status || 'draft').toLowerCase() === 'draft');
    }

    // 2. Search Filter
    if (qbModalSearchQuery) {
      const q = qbModalSearchQuery.toLowerCase();
      filtered = filtered.filter(b => {
        const title = (b.title || '').toLowerCase();
        const desc = (b.desc || '').toLowerCase();
        const stage = getBankStage(b).toLowerCase();
        const inst = getBankInstitute(b).toLowerCase();
        return title.includes(q) || desc.includes(q) || stage.includes(q) || inst.includes(q);
      });
    }

    // Update Counter Badge
    if (qbModalCountBadge) {
      qbModalCountBadge.textContent = `SHOWING ${filtered.length} OF ${questionBanks.length} QUESTION BANKS`;
    }

    // Empty state check
    if (filtered.length === 0) {
      qbModalList.style.display = 'none';
      qbModalEmpty.style.display = 'block';
      return;
    }

    qbModalEmpty.style.display = 'none';
    qbModalList.style.display = 'flex';

    qbModalList.innerHTML = filtered.map(bank => {
      const isSelected = selectedIds.has(bank.id);
      const stage = getBankStage(bank);
      const qCount = bank.questionCount || (Array.isArray(bank.questions) ? bank.questions.length : 0);
      const status = (bank.status || 'Draft').toUpperCase();

      return `
        <div class="qb-modal-item-card ${isSelected ? 'is-selected' : ''}" data-bank-id="${escapeHtml(bank.id)}">
          <div class="qb-modal-item-info">
            <div class="qb-modal-item-title-row">
              <span class="qb-modal-item-title">${escapeHtml(bank.title.toUpperCase())}</span>
              <span class="qb-modal-status-badge ${(bank.status || 'draft').toLowerCase()}">${escapeHtml(status)}</span>
            </div>
            <div class="qb-modal-item-meta">
              <span class="qb-modal-meta-count">${qCount} MCQs</span>
              <span class="qb-modal-meta-dot">•</span>
              <span class="qb-modal-meta-stage">${escapeHtml(stage.toUpperCase())}</span>
              <span class="qb-modal-meta-dot">•</span>
              <span class="qb-modal-meta-inst">${escapeHtml(getBankInstitute(bank))}</span>
            </div>
            ${bank.desc ? `
              <p class="qb-modal-item-desc">${escapeHtml(bank.desc)}</p>
            ` : ''}
          </div>
          <div class="qb-modal-item-action">
            ${isSelected ? `
              <span class="qb-selected-badge" title="Already added to this module">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>SELECTED</span>
              </span>
            ` : `
              <button
                type="button"
                class="btn-qb-modal-select"
                data-action="select-bank"
                data-bank-id="${escapeHtml(bank.id)}"
              >
                SELECT
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  function handleSelectBank(bankId) {
    if (!activeQbModuleId) return;
    const mod = assessModules.find(m => m.id === activeQbModuleId);
    if (!mod) return;

    if (!Array.isArray(mod.qbIds)) {
      mod.qbIds = mod.qbId ? [mod.qbId] : [];
    }

    if (!mod.qbIds.includes(bankId)) {
      mod.qbIds.push(bankId);
      mod.qbId = mod.qbIds[0];
    }

    closeQbSelectionModal();
    renderAssessModules();
    const bank = questionBanks.find(b => b.id === bankId);
    const bankTitle = bank ? bank.title : 'Question Bank';
    showToast(`+ ADDED "${bankTitle.toUpperCase()}"`);
  }

  function removeQuestionBankFromModule(moduleId, bankId) {
    syncModulesFromDom();
    const mod = assessModules.find(m => m.id === moduleId);
    if (!mod) return;

    if (!Array.isArray(mod.qbIds)) {
      mod.qbIds = mod.qbId ? [mod.qbId] : [];
    }

    const removedBank = questionBanks.find(b => b.id === bankId);
    mod.qbIds = mod.qbIds.filter(id => id !== bankId);
    mod.qbId = mod.qbIds[0] || '';

    renderAssessModules();
    showToast(`REMOVED ${removedBank ? `"${removedBank.title.toUpperCase()}"` : 'QUESTION BANK'}`);
  }

  // ==========================================================================
  // HELPERS & EVENT LISTENERS
  // ==========================================================================

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Tab Events
  if (tabBtnQb) {
    tabBtnQb.addEventListener('click', () => switchTab('qb'));
  }
  if (tabBtnAssess) {
    tabBtnAssess.addEventListener('click', () => switchTab('assess'));
  }

  // Question Bank Search
  if (qbSearchInput) {
    qbSearchInput.addEventListener('input', (e) => {
      currentQbSearch = e.target.value.trim().toLowerCase();
      renderQuestionBanks();
    });
  }

  // Question Bank Institute Filter
  if (qbFilterInstitute) {
    const handleInstituteChange = (e) => {
      currentQbInstitute = e.target.value;
      renderQuestionBanks();
    };
    qbFilterInstitute.addEventListener('change', handleInstituteChange);
    qbFilterInstitute.addEventListener('input', handleInstituteChange);
  }

  // Question Bank Stage Filter
  if (qbFilterStage) {
    const handleStageChange = (e) => {
      currentQbStage = e.target.value;
      renderQuestionBanks();
    };
    qbFilterStage.addEventListener('change', handleStageChange);
    qbFilterStage.addEventListener('input', handleStageChange);
  }

  // QB Empty State Button (Clear Filters)
  if (qbEmptyState) {
    const emptyBtn = qbEmptyState.querySelector('button');
    if (emptyBtn) {
      emptyBtn.addEventListener('click', (e) => {
        if (emptyBtn.dataset.action === 'clear-filters') {
          e.preventDefault();
          e.stopImmediatePropagation();
          resetQbFilters();
        }
      }, true);
    }
  }

  // Create Assessment Workflow Event Bindings
  const modulesContainer = document.getElementById('assess-modules-container');
  if (modulesContainer) {
    modulesContainer.addEventListener('input', (e) => {
      const block = e.target.closest('[data-module-id]');
      if (!block) return;
      const modId = block.dataset.moduleId;
      const field = e.target.dataset.field;
      const mod = assessModules.find(m => m.id === modId);
      if (mod && field) {
        mod[field] = e.target.value;
        if (field === 'title') {
          const titleEl = block.querySelector('.module-header-title');
          if (titleEl) titleEl.textContent = (e.target.value || 'NEW MODULE').toUpperCase();
        }
      }
    });

    modulesContainer.addEventListener('change', (e) => {
      const block = e.target.closest('[data-module-id]');
      if (!block) return;
      const modId = block.dataset.moduleId;
      const field = e.target.dataset.field;
      const mod = assessModules.find(m => m.id === modId);
      if (mod && field) {
        mod[field] = e.target.value;
      }
    });

    modulesContainer.addEventListener('click', (e) => {
      // 1. Remove module
      const btnRemoveMod = e.target.closest('[data-action="remove-module"]');
      if (btnRemoveMod) {
        const modId = btnRemoveMod.dataset.moduleId;
        removeAssessmentModule(modId);
        return;
      }

      // 2. Open QB selection modal
      const btnOpenQb = e.target.closest('[data-action="open-qb-modal"]');
      if (btnOpenQb) {
        const modId = btnOpenQb.dataset.moduleId;
        openQbSelectionModal(modId);
        return;
      }

      // 3. Remove selected QB from module
      const btnRemoveQb = e.target.closest('[data-action="remove-selected-qb"]');
      if (btnRemoveQb) {
        const modId = btnRemoveQb.dataset.moduleId;
        const bankId = btnRemoveQb.dataset.bankId;
        removeQuestionBankFromModule(modId, bankId);
        return;
      }
    });
  }

  // QB Selection Modal Event Bindings
  if (qbModalList) {
    qbModalList.addEventListener('click', (e) => {
      const btnSelect = e.target.closest('[data-action="select-bank"]');
      if (btnSelect) {
        const bankId = btnSelect.dataset.bankId;
        handleSelectBank(bankId);
      }
    });
  }

  if (qbModalSearchInput) {
    qbModalSearchInput.addEventListener('input', (e) => {
      qbModalSearchQuery = e.target.value.trim().toLowerCase();
      if (btnQbModalSearchClear) {
        btnQbModalSearchClear.style.display = qbModalSearchQuery ? 'flex' : 'none';
      }
      renderQbModalList();
    });
  }

  if (btnQbModalSearchClear) {
    btnQbModalSearchClear.addEventListener('click', () => {
      qbModalSearchQuery = '';
      if (qbModalSearchInput) {
        qbModalSearchInput.value = '';
        qbModalSearchInput.focus();
      }
      btnQbModalSearchClear.style.display = 'none';
      renderQbModalList();
    });
  }

  qbModalFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      qbModalFilterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      qbModalFilterStatus = btn.dataset.qbModalFilter || 'all';
      renderQbModalList();
    });
  });

  if (btnQbModalEmptyClear) {
    btnQbModalEmptyClear.addEventListener('click', () => {
      qbModalSearchQuery = '';
      qbModalFilterStatus = 'all';
      if (qbModalSearchInput) qbModalSearchInput.value = '';
      if (btnQbModalSearchClear) btnQbModalSearchClear.style.display = 'none';
      qbModalFilterBtns.forEach(btn => {
        const isAll = btn.dataset.qbModalFilter === 'all';
        btn.classList.toggle('is-active', isAll);
        btn.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });
      renderQbModalList();
    });
  }

  if (btnCloseQbModal) {
    btnCloseQbModal.addEventListener('click', closeQbSelectionModal);
  }
  if (btnCancelQbModal) {
    btnCancelQbModal.addEventListener('click', closeQbSelectionModal);
  }
  if (modalSelectQb) {
    modalSelectQb.addEventListener('click', (e) => {
      if (e.target === modalSelectQb) {
        closeQbSelectionModal();
      }
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalSelectQb && modalSelectQb.classList.contains('is-visible')) {
      closeQbSelectionModal();
    }
  });

  const btnAddModuleTop = document.getElementById('btn-add-module-top');
  if (btnAddModuleTop) btnAddModuleTop.addEventListener('click', addAssessmentModule);

  const formCreateAssess = document.getElementById('create-assessment-form');
  if (formCreateAssess) {
    formCreateAssess.addEventListener('submit', (e) => {
      e.preventDefault();
      syncModulesFromDom();

      const nameInput = document.getElementById('assess-name-input');
      const descInput = document.getElementById('assess-desc-input');
      const name = (nameInput ? nameInput.value : '').trim();
      const desc = (descInput ? descInput.value : '').trim();

      if (!name) {
        if (nameInput) {
          nameInput.focus();
          nameInput.style.borderColor = 'var(--red)';
          setTimeout(() => { nameInput.style.borderColor = ''; }, 2000);
        }
        showToast('PLEASE ENTER AN ASSESSMENT NAME');
        return;
      }

      // Validation: Each module must have at least one question bank selected
      for (let i = 0; i < assessModules.length; i++) {
        const m = assessModules[i];
        const selIds = m.qbIds || (m.qbId ? [m.qbId] : []);
        if (selIds.length === 0) {
          showToast(`PLEASE SELECT AT LEAST ONE QUESTION BANK FOR MODULE ${String(i + 1).padStart(2, '0')}`);
          return;
        }
      }

      // Collect data from each module
      const modulesData = assessModules.map((m, idx) => {
        const selIds = m.qbIds || (m.qbId ? [m.qbId] : []);
        const selBanks = selIds.map(id => questionBanks.find(b => b.id === id)).filter(Boolean);
        const primaryBank = selBanks[0] || questionBanks[0];
        const modTitles = selBanks.map(b => b.title).join(' + ') || (primaryBank ? primaryBank.title : 'General Question Bank');
        const modQCount = selBanks.reduce((sum, b) => sum + (b.questionCount || (Array.isArray(b.questions) ? b.questions.length : 0)), 0);

        return {
          moduleIndex: idx + 1,
          title: m.title || `Module ${String(idx + 1).padStart(2, '0')}`,
          type: m.type || (primaryBank ? getBankStage(primaryBank) : 'Aptitude'),
          institution: m.institution || (primaryBank ? getBankInstitute(primaryBank) : 'InterviewOS Training Academy'),
          qbId: selIds[0] || (primaryBank ? primaryBank.id : ''),
          qbIds: selIds,
          qbTitle: modTitles,
          questionBanks: selBanks.map(b => ({
            id: b.id,
            title: b.title,
            questionCount: b.questionCount || (Array.isArray(b.questions) ? b.questions.length : 0),
            stage: getBankStage(b)
          })),
          questionCount: modQCount,
          duration: parseInt(m.duration, 10) || 45,
          dept: m.dept || TARGET_DEPARTMENTS[0],
          startTime: m.startTime || '10:00',
          endTime: m.endTime || '11:00'
        };
      });

      const totalQCount = modulesData.reduce((sum, m) => sum + (m.questionCount || 0), 0);
      const totalDuration = modulesData.reduce((sum, m) => sum + (m.duration || 0), 0);
      const totalMarks = totalQCount > 0 ? totalQCount * 2 : 100;

      const newAssess = {
        id: 'assess-' + Date.now(),
        code: 'ASM-' + String(assessments.length + 1).padStart(2, '0'),
        title: name,
        desc: desc || 'Custom trainer multi-module assessment configured via InterviewOS.',
        type: modulesData[0]?.type || 'Skill Assessment',
        institution: modulesData[0]?.institution || 'InterviewOS Training Academy',
        questionBank: modulesData.map(m => m.qbTitle).filter(Boolean).join(' + ') || 'Curated Question Banks',
        questionCount: totalQCount,
        durationMinutes: totalDuration,
        totalMarks: totalMarks,
        status: 'Scheduled',
        window: `Starts ${modulesData[0]?.startTime || '10:00 AM'} – ${modulesData[modulesData.length - 1]?.endTime || '11:00 AM'}`,
        modules: modulesData,
        createdAt: new Date().toISOString()
      };

      assessments.unshift(newAssess);
      try {
        localStorage.setItem('interviewos_assessments', JSON.stringify(assessments));
      } catch (err) {
        console.warn('Error saving assessment:', err);
      }

      showToast(`⚡ ASSESSMENT "${name.toUpperCase()}" CREATED SUCCESSFULLY!`);

      // Reset form
      if (nameInput) nameInput.value = '';
      if (descInput) descInput.value = '';
      assessModules = [initDefaultModule()];
      renderAssessModules();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // DELETE CONFIRMATION MODAL CONTROLLER
  // ==========================================================================

  function openDeleteModal(type, id, name) {
    pendingDeleteTarget = { type, id, name };
    if (!modalDelete) return;

    if (type === 'bank') {
      if (modalDeleteTitle) modalDeleteTitle.textContent = 'DELETE THIS QUESTION BANK?';
      if (modalDeleteText) modalDeleteText.textContent = `Are you sure you want to delete "${name}"?`;
      if (btnConfirmDelete) btnConfirmDelete.textContent = 'DELETE QUESTION BANK';
    } else {
      if (modalDeleteTitle) modalDeleteTitle.textContent = 'DELETE THIS ASSESSMENT?';
      if (modalDeleteText) modalDeleteText.textContent = `Are you sure you want to delete "${name}"?`;
      if (btnConfirmDelete) btnConfirmDelete.textContent = 'DELETE ASSESSMENT';
    }

    modalDelete.style.display = 'flex';
    modalDelete.classList.add('is-visible');
  }

  function closeDeleteModal() {
    pendingDeleteTarget = null;
    if (!modalDelete) return;
    modalDelete.classList.remove('is-visible');
    modalDelete.style.display = 'none';
  }

  function executePendingDelete() {
    if (!pendingDeleteTarget) return;
    const { type, id, name } = pendingDeleteTarget;

    if (type === 'bank') {
      const bank = questionBanks.find(b => b.id === id);
      const bTitle = (bank ? bank.title : name || '').trim().toLowerCase();
      const bId = String(id || '').trim().toLowerCase();

      // 1. Remove from in-memory questionBanks array
      questionBanks = questionBanks.filter(b => {
        const itemTitle = (b.title || '').trim().toLowerCase();
        const itemId = String(b.id || '').trim().toLowerCase();
        return itemId !== bId && itemTitle !== bTitle;
      });

      // 2. Track deleted bank in localStorage so default sample banks never reappear
      try {
        let deletedList = [];
        const delRaw = localStorage.getItem('interviewos_deleted_question_banks');
        if (delRaw) {
          const parsed = JSON.parse(delRaw);
          if (Array.isArray(parsed)) deletedList = parsed;
        }
        if (bId && !deletedList.includes(bId)) deletedList.push(bId);
        if (bTitle && !deletedList.includes(bTitle)) deletedList.push(bTitle);
        localStorage.setItem('interviewos_deleted_question_banks', JSON.stringify(deletedList));
      } catch (e) {
        console.warn('Error saving deleted question banks list:', e);
      }

      // 3. Remove from interviewos_question_banks in localStorage
      try {
        const raw = localStorage.getItem('interviewos_question_banks');
        if (raw) {
          let stored = JSON.parse(raw);
          if (Array.isArray(stored)) {
            stored = stored.filter(b => {
              const itemTitle = (b.questionBankTitle || b.title || '').trim().toLowerCase();
              const itemId = String(b.id || '').trim().toLowerCase();
              return itemId !== bId && itemTitle !== bTitle;
            });
            localStorage.setItem('interviewos_question_banks', JSON.stringify(stored));
          }
        }
      } catch (e) {
        console.warn('Error updating stored question banks:', e);
      }

      // 4. Update UI
      populateInstituteOptions();
      populateStageOptions();
      renderQuestionBanks();
      showToast(`REMOVED "${name.toUpperCase()}"`);
    } else if (type === 'assess') {
      assessments = assessments.filter(a => a.id !== id);
      try {
        localStorage.setItem('interviewos_assessments', JSON.stringify(assessments));
      } catch (e) {}
      showToast(`REMOVED "${name.toUpperCase()}"`);
    }

    closeDeleteModal();
  }

  // Bind Delete Modal Controls
  if (btnCancelDelete) {
    btnCancelDelete.addEventListener('click', closeDeleteModal);
  }
  if (btnCancelDeleteX) {
    btnCancelDeleteX.addEventListener('click', closeDeleteModal);
  }
  if (btnConfirmDelete) {
    btnConfirmDelete.addEventListener('click', executePendingDelete);
  }
  if (modalDelete) {
    modalDelete.addEventListener('click', (e) => {
      if (e.target === modalDelete) closeDeleteModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalDelete && modalDelete.classList.contains('is-visible')) {
      closeDeleteModal();
    }
  });

  // Delegate actions inside QB Grid
  if (qbCardsGrid) {
    qbCardsGrid.addEventListener('click', (e) => {
      const viewLink = e.target.closest('.btn-action-view, .btn-action-edit');
      if (viewLink) {
        const bId = viewLink.dataset.bankId;
        const bTitle = viewLink.dataset.bankTitle;
        if (bId) {
          try {
            sessionStorage.setItem('interviewos_selected_bank_id', bId);
            localStorage.setItem('interviewos_selected_bank_id', bId);
            if (bTitle) {
              sessionStorage.setItem('interviewos_selected_bank_title', bTitle);
              localStorage.setItem('interviewos_selected_bank_title', bTitle);
            }
          } catch (err) {}
        }
      }

      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.dataset.action;
      if (action === 'delete-bank') {
        const id = target.dataset.bankId;
        const title = target.dataset.bankTitle || '';
        const bank = questionBanks.find(b => b.id === id || (title && (b.title || '').trim().toLowerCase() === title.trim().toLowerCase()));
        const name = bank ? bank.title : (title || 'Question Bank');
        const resolvedId = bank ? bank.id : id;
        openDeleteModal('bank', resolvedId, name);
      }
    });
  }

  // Delegate actions inside Assess List
  if (assessCardsList) {
    assessCardsList.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.dataset.action;
      if (action === 'edit-assess') {
        const title = target.dataset.assessTitle || 'Assessment';
        showToast(`OPENING EDIT MODE FOR "${title.toUpperCase()}"`);
      } else if (action === 'delete-assess') {
        const id = target.dataset.assessId;
        const assess = assessments.find(a => a.id === id);
        const title = assess ? assess.title : 'Assessment';
        openDeleteModal('assess', id, title);
      }
    });
  }

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  initQuestionBanks();
  populateInstituteOptions();
  populateStageOptions();
  renderQuestionBanks();
  assessModules = [initDefaultModule()];
  renderAssessModules();

  // ==========================================================================
  // REAL-TIME SYNCHRONIZATION
  // ==========================================================================

  function syncQuestionBanksFromStorage() {
    initQuestionBanks();
    populateInstituteOptions();
    populateStageOptions();
    renderQuestionBanks();
  }

  window.addEventListener('pageshow', syncQuestionBanksFromStorage);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncQuestionBanksFromStorage();
    }
  });
  window.addEventListener('storage', (e) => {
    if (e.key === 'interviewos_question_banks' || e.key === 'interviewos_deleted_question_banks') {
      syncQuestionBanksFromStorage();
    }
  });

  window.syncQuestionBanksFromStorage = syncQuestionBanksFromStorage;
})();
