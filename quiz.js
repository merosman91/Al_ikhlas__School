// Wait for the DOM to be fully loaded before running any script
document.addEventListener('DOMContentLoaded', function() {
    console.log("Quiz script: DOM is ready.");

    // --- DOM Element References ---
    const stageSelect = document.getElementById('stage');
    const subjectSelect = document.getElementById('subject');
    const difficultySelect = document.getElementById('difficulty');
    const quizSetup = document.getElementById('quiz-setup');
    const quizContainer = document.getElementById('quiz-container');
    const quizResult = document.getElementById('quiz-result');

    // --- Quiz State Variables ---
    let currentQuiz = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let seconds = 0;
    let selectedAnswers = [];

    // --- Initial Setup ---
    function initializeQuiz() {
        if (!stageSelect || !subjectSelect) {
            console.error("Quiz Error: Could not find stage or subject select elements in the DOM.");
            return;
        }

        // Add event listener for stage selection
        stageSelect.addEventListener('change', handleStageChange);
        
        console.log("Quiz script: Initialized successfully.");
    }

    // --- Event Handlers ---
    function handleStageChange() {
        const selectedStage = this.value;
        console.log(`Stage changed to: ${selectedStage}`);

        // Reset and disable subject dropdown
        subjectSelect.innerHTML = '<option value="">اختر المادة</option>';
        subjectSelect.disabled = true;

        if (selectedStage) {
            populateSubjects(selectedStage);
        }
    }

    // --- Core Functions ---
    function populateSubjects(stage) {
        console.log(`Populating subjects for stage: ${stage}`);

        // Ensure the stage exists in our database
        if (!questionBank || !questionBank[stage]) {
            console.error(`Quiz Error: Stage "${stage}" not found in questionBank.`);
            showNotification(`لا توجد مواد للمرحلة المختارة`, 'error');
            return;
        }

        const subjects = Object.keys(questionBank[stage]);
        console.log(`Found subjects: ${subjects.join(', ')}`);

        if (subjects.length === 0) {
            showNotification('لا توجد مواد متاحة لهذه المرحلة', 'warning');
            return;
        }

        // Populate the dropdown with subjects
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = getSubjectArabicName(subject);
            subjectSelect.appendChild(option);
        });

        // Enable the subject dropdown for selection
        subjectSelect.disabled = false;
        console.log("Subjects populated and dropdown enabled.");
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

    // Make this function globally accessible from the HTML onclick attribute
    window.startQuiz = function() {
        const stage = stageSelect.value;
        const subject = subjectSelect.value;
        const difficulty = difficultySelect.value;

        if (!stage || !subject) {
            showNotification('الرجاء اختيار المرحلة والمادة', 'error');
            return;
        }

        // Ensure the path exists in the database
        if (!questionBank[stage] || !questionBank[stage][subject] || !questionBank[stage][subject][difficulty]) {
            showNotification('لا توجد أسئلة متاحة لهذا الاختيار', 'error');
            return;
        }

        const questions = [...questionBank[stage][subject][difficulty]];
        if (questions.length === 0) {
            showNotification('لا توجد أسئلة متاحة لهذا الاختيار', 'error');
            return;
        }

        // Shuffle and select 10 questions
        currentQuiz = shuffleArray(questions).slice(0, 10);
        currentQuestionIndex = 0;
        score = 0;
        seconds = 0;
        selectedAnswers = [];

        // Switch UI to quiz view
        quizSetup.style.display = 'none';
        quizContainer.style.display = 'block';
        quizResult.style.display = 'none';

        loadQuestion();
        startTimer();
    };

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

    // Make selectAnswer globally accessible
    window.selectAnswer = function(answerIndex) {
        const options = document.querySelectorAll('.option-item');
        options.forEach(option => option.classList.remove('selected'));
        options[answerIndex].classList.add('selected');
        
        selectedAnswers[currentQuestionIndex] = answerIndex;
    };

    // Make navigation functions globally accessible
    window.nextQuestion = function() {
        if (currentQuestionIndex < currentQuiz.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            submitQuiz();
        }
    };

    window.previousQuestion = function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    };

    window.submitQuiz = function() {
        stopTimer();
        
        // Calculate score
        score = 0;
        currentQuiz.forEach((question, index) => {
            if (selectedAnswers[index] === question.correct) {
                score++;
            }
        });

        showResults();
    };

    function showResults() {
        quizContainer.style.display = 'none';
        quizResult.style.display = 'block';

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
        const resultScore = document.querySelector('.result-score');
        if (resultScore) {
            resultScore.style.setProperty('--score', `${percentage * 3.6}deg`);
            // Note: The CSS animation for this is already in style.css
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

    // Make resetQuiz globally accessible
    window.resetQuiz = function() {
        quizResult.style.display = 'none';
        quizSetup.style.display = 'block';
        stageSelect.value = '';
        subjectSelect.innerHTML = '<option value="">اختر المادة</option>';
        subjectSelect.disabled = true;
        difficultySelect.value = 'medium';
        
        // Reset state
        currentQuiz = [];
        currentQuestionIndex = 0;
        score = 0;
        seconds = 0;
        selectedAnswers = [];
    };

    // --- Helper Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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
        } else if (type === 'warning') {
            notification.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        }

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // --- Run the initializer ---
    initializeQuiz();
});
