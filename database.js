// Question Bank Database
const questionBank = {
    primary: {
        mathematics: {
            easy: [
                {
                    question: "ما هو ناتج جمع 2 + 3؟",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                },
                {
                    question: "كم عدد أضلاع المثلث؟",
                    options: ["2", "3", "4", "5"],
                    correct: 1
                },
                {
                    question: "ما هو العدد الذي يأتي بعد 9؟",
                    options: ["8", "10", "11", "12"],
                    correct: 1
                },
                {
                    question: "كم عدد أيام الأسبوع؟",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "ما هو ناتج 5 - 2؟",
                    options: ["2", "3", "4", "5"],
                    correct: 1
                }
            ],
            medium: [
                {
                    question: "ما هو ناتج ضرب 6 × 4؟",
                    options: ["20", "24", "28", "30"],
                    correct: 1
                },
                {
                    question: "ما هو ناتج 15 ÷ 3؟",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "كم عدد أضلاع المربع؟",
                    options: ["2", "3", "4", "5"],
                    correct: 2
                },
                {
                    question: "ما هو العدد الزوجي التالي لـ 8؟",
                    options: ["9", "10", "11", "12"],
                    correct: 1
                },
                {
                    question: "ما هو ناتج 7 + 8؟",
                    options: ["13", "14", "15", "16"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "ما هو ناتج 12 × 8؟",
                    options: ["88", "96", "104", "112"],
                    correct: 1
                },
                {
                    question: "ما هو باقي قسمة 17 ÷ 5؟",
                    options: ["1", "2", "3", "4"],
                    correct: 1
                },
                {
                    question: "ما هو مربع العدد 9؟",
                    options: ["18", "27", "81", "72"],
                    correct: 2
                },
                {
                    question: "كم هو ناتج (5 + 3) × 2؟",
                    options: ["13", "16", "18", "20"],
                    correct: 1
                },
                {
                    question: "ما هو العدد الأولي التالي لـ 7؟",
                    options: ["8", "9", "10", "11"],
                    correct: 3
                }
            ]
        },
        arabic: {
            easy: [
                {
                    question: "ما هو الحرف الأول في كلمة 'مدرسة'؟",
                    options: ["م", "د", "ر", "س"],
                    correct: 0
                },
                {
                    question: "كم عدد حروف كلمة 'قلم'؟",
                    options: ["2", "3", "4", "5"],
                    correct: 1
                },
                {
                    question: "ما هو عكس كلمة 'كبير'؟",
                    options: ["طويل", "قصير", "صغير", "ضخم"],
                    correct: 2
                },
                {
                    question: "أي من هذه حروف علة؟",
                    options: ["ب", "ت", "ا", "د"],
                    correct: 2
                },
                {
                    question: "ما هو جمع كلمة 'ولد'؟",
                    options: ["أولاد", "أولاد", "أطفال", "كل ما سبق"],
                    correct: 3
                }
            ],
            medium: [
                {
                    question: "ما هو المضارع من الفعل 'كتب'؟",
                    options: ["يكتب", "كتب", "اكتب", "كتاب"],
                    correct: 0
                },
                {
                    question: "أي من هذه كلمة تنتهي بألف لينة؟",
                    options: ["كتاب", "قلم", "مدرسة", "بيت"],
                    correct: 0
                },
                {
                    question: "ما هو نوع كلمة 'جميل'؟",
                    options: ["اسم", "فعل", "حرف", "ظرف"],
                    correct: 0
                },
                {
                    question: "ما هو المفرد من 'كتب'؟",
                    options: ["كتاب", "كاتب", "مكتبة", "يكتب"],
                    correct: 0
                },
                {
                    question: "أي من هذه علامات ترقيم؟",
                    options: ["أ", "ب", "؟", "د"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "ما هو المصدر من الفعل 'استخرج'؟",
                    options: ["خرج", "استخراج", "خروج", "تخرج"],
                    correct: 1
                },
                {
                    question: "ما هو نوع 'كان' في الجملة: 'كان الطالب مجتهداً'؟",
                    options: ["فعل متعدي", "فعل لازم", "فعل ناسخ", "حرف"],
                    correct: 2
                },
                {
                    question: "ما هو إعراب كلمة 'الطلاب' في جملة 'جاء الطلاب'؟",
                    options: ["مبتدأ", "فاعل", "مفعول به", "مضاف إليه"],
                    correct: 1
                },
                {
                    question: "أي من هذه كلمة همزة قطع؟",
                    options: ["استخدام", "إيمان", "اجتماع", "اشتراك"],
                    correct: 1
                },
                {
                    question: "ما هو التصغير الصحيح لكلمة 'كتاب'؟",
                    options: ["كتيب", "كتائب", "كتاب", "كتيبان"],
                    correct: 0
                }
            ]
        },
        english: {
            easy: [
                {
                    question: "What is the plural of 'cat'?",
                    options: ["cats", "cat", "cates", "cattes"],
                    correct: 0
                },
                {
                    question: "How many days are in a week?",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "What color is the sky?",
                    options: ["red", "blue", "green", "yellow"],
                    correct: 1
                },
                {
                    question: "What is 2 + 3?",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                },
                {
                    question: "Which is a vowel?",
                    options: ["b", "c", "a", "d"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "What is the past tense of 'go'?",
                    options: ["goes", "went", "gone", "going"],
                    correct: 1
                },
                {
                    question: "Which is a noun?",
                    options: ["run", "beautiful", "book", "quickly"],
                    correct: 2
                },
                {
                    question: "What is the opposite of 'hot'?",
                    options: ["warm", "cool", "cold", "dry"],
                    correct: 2
                },
                {
                    question: "How many months are in a year?",
                    options: ["10", "11", "12", "13"],
                    correct: 2
                },
                {
                    question: "Which is a question word?",
                    options: ["and", "but", "what", "or"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "What is the comparative form of 'good'?",
                    options: ["gooder", "better", "best", "more good"],
                    correct: 1
                },
                {
                    question: "Which sentence is in passive voice?",
                    options: ["The cat chased the mouse", "The mouse was chased by the cat", "The cat is chasing the mouse", "The mouse chases the cat"],
                    correct: 1
                },
                {
                    question: "What is the correct preposition: 'I'm good ___ mathematics'?",
                    options: ["in", "at", "on", "with"],
                    correct: 1
                },
                {
                    question: "Which is a modal verb?",
                    options: ["run", "can", "running", "ran"],
                    correct: 1
                },
                {
                    question: "What is the correct form: 'If I ___ rich, I would travel'?",
                    options: ["am", "was", "were", "will be"],
                    correct: 2
                }
            ]
        },
        science: {
            easy: [
                {
                    question: "كم عدد أرجل الإنسان؟",
                    options: ["1", "2", "3", "4"],
                    correct: 1
                },
                {
                    question: "ما هو لون السماء في يوم مشمس؟",
                    options: ["أحمر", "أخضر", "أزرق", "أصفر"],
                    correct: 2
                },
                {
                    question: "أي من هذه مصادر للضوء؟",
                    options: ["الشمس", "القمر", "الأرض", "النجوم"],
                    correct: 0
                },
                {
                    question: "كم عدد فصول السنة؟",
                    options: ["2", "3", "4", "5"],
                    correct: 2
                },
                {
                    question: "ماذا يحتاج الإنسان للعيش؟",
                    options: ["الماء فقط", "الطعام فقط", "الماء والهواء", "الماء والهواء والطعام"],
                    correct: 3
                }
            ],
            medium: [
                {
                    question: "ما هي وحدة قياس درجة الحرارة؟",
                    options: ["متر", "كيلوجرام", "سيلسيوس", "ثانية"],
                    correct: 2
                },
                {
                    question: "أي من هذه جزء من النبات؟",
                    options: ["الجذور", "الأوراق", "الأزهار", "كل ما سبق"],
                    correct: 3
                },
                {
                    question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
                    options: ["الأرض", "المريخ", "المشتري", "زحل"],
                    correct: 2
                },
                {
                    question: "كم عدد عظام الهيكل العظمي البشري؟",
                    options: ["106", "206", "306", "406"],
                    correct: 1
                },
                {
                    question: "ما هو الغاز الذي نستنشقه؟",
                    options: ["ثاني أكسيد الكربون", "النيتروجين", "الأكسجين", "الهيدروجين"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "ما هي سرعة الضوء؟",
                    options: ["300,000 كم/ث", "150,000 كم/ث", "500,000 كم/ث", "1,000,000 كم/ث"],
                    correct: 0
                },
                {
                    question: "ما هو الرقم الذري للهيدروجين؟",
                    options: ["1", "2", "3", "4"],
                    correct: 0
                },
                {
                    question: "ما هي أكبر غدة في جسم الإنسان؟",
                    options: ["الغدة الدرقية", "الكبد", "البنكرياس", "الغدة النخامية"],
                    correct: 1
                },
                {
                    question: "كم يبلغ وزن الدم في جسم الإنسان البالغ؟",
                    options: ["2-3 كجم", "4-5 كجم", "6-7 كجم", "8-9 كجم"],
                    correct: 1
                },
                {
                    question: "ما هي وظيفة الكلوروفيل في النبات؟",
                    options: ["التنفس", "البناء الضوئي", "النمو", "التكاثر"],
                    correct: 1
                }
            ]
        },
        history: {
            easy: [
                {
                    question: "ما هي عاصمة السودان؟",
                    options: ["بورتسودان", "أم درمان", "الخرطوم", "الأبيض"],
                    correct: 2
                },
                {
                    question: "كم عدد ولايات السودان؟",
                    options: ["15", "16", "17", "18"],
                    correct: 3
                },
                {
                    question: "ما هو النهر الذي يجري في السودان؟",
                    options: ["النيل", "الأمازون", "المسيسيبي", "الدانوب"],
                    correct: 0
                },
                {
                    question: "ما هي عملة السودان؟",
                    options: ["الريال", "الدينار", "الجنيه", "الدرهم"],
                    correct: 2
                },
                {
                    question: "في أي قارة يقع السودان؟",
                    options: ["آسيا", "أوروبا", "أفريقيا", "أمريكا"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "من هو أول رئيس لجمهورية السودان؟",
                    options: ["جعفر النميري", "عبد الفضيل الماحي", "إسماعيل الأزهري", "عمر البشير"],
                    correct: 2
                },
                {
                    question: "في أي عام استقل السودان؟",
                    options: ["1954", "1955", "1956", "1957"],
                    correct: 2
                },
                {
                    question: "ما هي أكبر دولة في أفريقيا من حيث المساحة؟",
                    options: ["مصر", "الجزائر", "نيجيريا", "السودان"],
                    correct: 1
                },
                {
                    question: "أي من هذه حضارات قديمة في السودان؟",
                    options: ["الفرعونية", "الكوشية", "الرومانية", "اليونانية"],
                    correct: 1
                },
                {
                    question: "ما هي اللغة الرسمية في السودان؟",
                    options: ["الإنجليزية فقط", "العربية فقط", "العربية والإنجليزية", "الفرنسية"],
                    correct: 2
                }
            ],
            hard: [
                {
                    question: "من هو مؤسس مملكة مروي؟",
                    options: ["الملك أركماني", "الملكة أماني شخيتو", "الملك طهرقة", "الملكة كانداكا"],
                    correct: 0
                },
                {
                    question: "في أي عام وقعت معاهدة الحكم الذاتي؟",
                    options: ["1950", "1952", "1953", "1955"],
                    correct: 2
                },
                {
                    question: "ما هي أهم صادرات السودان التاريخية؟",
                    options: ["النفط", "القطن", "الذهب", "كل ما سبق"],
                    correct: 3
                },
                {
                    question: "من هو قائد ثورة 1924؟",
                    options: ["علي عبدالفتاح", "عبدالخالق محجوب", "الإمام المهدي", "محمد أحمد المهدي"],
                    correct: 0
                },
                {
                    question: "كم
