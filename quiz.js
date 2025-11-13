let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let seconds = 0;
let selectedAnswers = [];

// Initialize quiz
document.addEventListener('DOMContentLoaded', function() {
    const stageSelect = document.getElementById('stage');
    const subjectSelect = document.getElementById('subject');

    stageSelect.addEventListener('change', function() {
        populateSubjects(this.value);
        subjectSelect.disabled = false;
    });
});

function populateSubjects(stage) {
    const subjectSelect = document.getElementById('subject');
    subjectSelect.innerHTML = '<option value="">اختر المادة</option>';
    
    const subjects = Object.keys(questionBank[stage]);
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = getSubjectArabicName(subject);
        subjectSelect.appendChild(option);
    });
}

function getSubjectArabicName(subject) {
    const names = {
        mathematics: 'الرياضيات',
        arabic: 'اللغة العربية',
        english: 'اللغة الإنجليزية',
        science: 'العلوم',
        history: 'التاريخ',
        geography: 'الجغرافيا',
        religious_studies: 'التربية الإسلامية',
        physics: 'الفيزياء',
        chemistry: 'الكيمياء',
        biology: 'الأحياء'
    };
    return names[subject] || subject;
}

function startQuiz() {
    const stage = document.getElementById('stage').value;
    const subject = document.getElementById('subject').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!stage || !subject) {
        showNotification('الرجاء اختيار المرحلة والمادة', 'error');
        return;
    }

    const questions = questionBank[stage][subject][difficulty];
    if (!questions || questions.length === 0) {
        showNotification('لا توجد أسئلة متاحة لهذا الاختيار', 'error');
        return;
    }

    // Shuffle and select 10 questions
    currentQuiz = shuffleArray([...questions]).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    selectedAnswers = [];

    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';

    loadQuestion();
    startTimer();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    
    questionContainer.innerHTML = `
        <div class="question-text">${question.question}</div>
        <div class="options-grid">
            ${question.options.map((option, index) => `
                <div class="option-item" onclick="selectAnswer(${index})">
                    <span class="option-text">${option}</span>
                </div>
            `).join('')}
        </div>
    `;

    updateProgress();
    updateButtons();
}

function selectAnswer(answerIndex) {
    const options = document.querySelectorAll('.option-item');
    options.forEach(option => option.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    
    selectedAnswers[currentQuestionIndex] = answerIndex;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        submitQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('quiz-progress').textContent = `${currentQuestionIndex + 1}/${currentQuiz.length}`;
}

function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentQuiz.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('quiz-timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function submitQuiz() {
    stopTimer();
    
    // Calculate score
    score = 0;
    currentQuiz.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct) {
            score++;
        }
    });

    // Show results
    showResults();
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    const percentage = Math.round((score / currentQuiz.length) * 100);
    const correctAnswers = score;
    const wrongAnswers = currentQuiz.length - score;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('time-taken').textContent = 
        `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Update progress circle
    const resultScore = document.querySelector('.result-score::before');
    if (resultScore) {
        resultScore.style.background = `conic-gradient(var(--success-color) ${percentage * 3.6}deg, var(--light-color) 0deg)`;
    }

    // Show message based on score
    const messageEl = document.getElementById('result-message');
    let message = '';
    let messageClass = '';

    if (percentage >= 90) {
        message = 'ممتاز! أداء رائع جداً!';
        messageClass = 'success';
    } else if (percentage >= 70) {
        message = 'جيد جداً! واصل التميز!';
        messageClass = 'good';
    } else if (percentage >= 50) {
        message = 'جيد! يمكنك التحسن أكثر!';
        messageClass = 'average';
    } else {
        message = 'تحتاج للمزيد من الدراسة والممارسة!';
        messageClass = 'poor';
    }

    messageEl.textContent = message;
    messageEl.className = 'result-message ' + messageClass;
}

function resetQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('stage').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('subject').disabled = true;
    document.getElementById('difficulty').value = 'medium';
    
    // Reset progress
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    selectedAnswers = [];
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        border-radius: 50px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideDown 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    `;

    // Set background color based on type
    if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { opacity: 0; transform: translate(-50%, -20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes slideUp {
        from { opacity: 1; transform: translate(-50%, 0); }
        to { opacity: 0; transform: translate(-50%, -20px); }
    }
    .notification-success { background: var(--success-color) !important; }
    .notification-error { background: var(--danger-color) !important; }
    .notification-info { background: var(--primary-color) !important; }
`;
document.head.appendChild(style);
