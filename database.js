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
                    question: "كم عدد سنوات حكم المهدية؟",
                    options: ["10 سنوات", "13 سنة", "15 سنة", "20 سنة"],
                    correct: 1
                },
                {
                    question: "أين تقع أهرامات مروي؟",
                    options: ["بالقرب من الخرطوم", "بالقرب من الشمالية", "بالقرب من بورتسودان", "بالقرب من الأبيض"],
                    correct: 1
                }
            ]
        },
        geography: {
            easy: [
                {
                    question: "كم عدد قارات العالم؟",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "ما هو أكبر محيط في العالم؟",
                    options: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"],
                    correct: 2
                },
                {
                    question: "ما هي العاصمة الحالية للسودان؟",
                    options: ["الخرطوم", "أم درمان", "بورتسودان", "الأبيض"],
                    correct: 2
                },
                {
                    question: "أي من هذه دول جوار للسودان؟",
                    options: ["مصر", "نيجيريا", "المغرب", "تونس"],
                    correct: 0
                },
                {
                    question: "ما هو لون البحر الأحمر على الخريطة؟",
                    options: ["أزرق", "أخضر", "أصفر", "أحمر"],
                    correct: 0
                }
            ],
            medium: [
                {
                    question: "ما هي أكبر ولاية سودانية من حيث المساحة؟",
                    options: ["الخرطوم", "شمال كردفان", "دارفور", "النيل الأزرق"],
                    correct: 1
                },
                {
                    question: "أين يقع تقاطع النيل الأبيض والنيل الأزرق؟",
                    options: ["في الخرطوم", "في أم درمان", "في بحري", "في الأبيض"],
                    correct: 0
                },
                {
                    question: "ما هو اسم الصحراء التي تغربي السودان؟",
                    options: ["الصحراء الكبرى", "صحراء النوبة", "صحراء كالاهاري", "صحراء الربع الخالي"],
                    correct: 1
                },
                {
                    question: "ما هي الدولة التي تقع شرق السودان؟",
                    options: ["تشاد", "إثيوبيا", "ليبيا", "مصر"],
                    correct: 1
                },
                {
                    question: "ما هو longest river flowing through Sudan?",
                    options: ["نهر النيل", "نهر عطبرة", "نهر الرهد", "نهر السوباط"],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "ما هي أهمية جبال المقطم؟",
                    options: ["غنية بالذهب", "تحمي الخرطوم من الفيضانات", "مصدر للحجر الجيري", "كل ما سبق"],
                    correct: 3
                },
                {
                    question: "كم يبلغ طول خط ساحل السودان على البحر الأحمر؟",
                    options: ["حوالي 500 كم", "حوالي 750 كم", "حوالي 850 كم", "حوالي 1000 كم"],
                    correct: 2
                },
                {
                    question: "ما هي المنطقة الاقتصادية البحرية للسودان؟",
                    options: ["200 ميل بحري", "300 ميل بحري", "12 ميل بحري", "500 ميل بحري"],
                    correct: 0
                },
                {
                    question: "أي من هذه مدن سودانية تقع على دائرة عرض 10 شمالاً تقريباً؟",
                    options: ["الخرطوم", "الفاشر", "الدمازين", "سواكن"],
                    correct: 1
                },
                {
                    question: "ما هو المشروع الزراعي الأكبر في السودان؟",
                    options: ["مشروع الجزيرة", "مشروع الرهد", "مشروع السوكي", "مشروع أبي حمد"],
                    correct: 0
                }
            ]
        },
        religious_studies: {
            easy: [
                {
                    question: "كم عدد أركان الإسلام؟",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "ما هو الركن الأول من أركان الإسلام؟",
                    options: ["الصلاة", "الزكاة", "الشهادتان", "الصوم"],
                    correct: 2
                },
                {
                    question: "كم عدد الصلوات المفروضة في اليوم؟",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "في أي شهر يصوم المسلمون؟",
                    options: ["شعبان", "رمضان", "شوال", "ذو الحجة"],
                    correct: 1
                },
                {
                    question: "ما هو اسم الكتاب المقدس في الإسلام؟",
                    options: ["التوراة", "الإنجيل", "الزبور", "القرآن الكريم"],
                    correct: 3
                }
            ],
            medium: [
                {
                    question: "من هو النبي الذي أرسل إلى قوم عاد؟",
                    options: ["نوح", "هود", "صالح", "إبراهيم"],
                    correct: 1
                },
                {
                    question: "ما هي السورة التي تسمى "أم القرآن"؟",
                    options: ["الفاتحة", "البقرة", "آل عمران", "الإخلاص"],
                    correct: 0
                },
                {
                    question: "كم عدد الحجاج في الحج الأكبر؟",
                    options: ["3", "4", "5", "6"],
                    correct: 0
                },
                {
                    question: "أي من هذه ليست من الصلوات الخمس؟",
                    options: ["الفجر", "الظهر", "العصر", "التراويح"],
                    correct: 3
                },
                {
                    question: "ما هي الغزوة التي وقعت في شهر رمضان؟",
                    options: ["غزوة بدر", "غزوة أحد", "غزوة الخندق", "غزوة حنين"],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "ما هو الحكم الشرعي لترك الصلاة تكاسلاً؟",
                    options: ["مكروه", "حرام", "كفر", "بدعة"],
                    correct: 2
                },
                {
                    question: "كم عدد الآيات في سورة البقرة؟",
                    options: ["256", "286", "296", "306"],
                    correct: 1
                },
                {
                    question: "من هو أول من دفن في البقيع؟",
                    options: ["عثمان بن مظعون", "إبراهيم ابن النبي", "رقيّة بنت الرسول", "عبد الرحمن بن عوف"],
                    correct: 0
                },
                {
                    question: "ما هي السورة التي يطلق عليها "قلب القرآن"؟",
                    options: ["يس", "الفاتحة", "الإخلاص", "الكوثر"],
                    correct: 0
                },
                {
                    question: "في أي عام وقعت غزوة تبوك؟",
                    options: ["8 هـ", "9 هـ", "10 هـ", "11 هـ"],
                    correct: 1
                }
            ]
        }
    },
    middle: {
        mathematics: {
            easy: [
                {
                    question: "ما هو ناتج (-3) + 5؟",
                    options: ["2", "8", "-2", "-8"],
                    correct: 0
                },
                {
                    question: "ما هو الجذر التربيعي للعدد 64؟",
                    options: ["6", "7", "8", "9"],
                    correct: 2
                },
                {
                    question: "كم يساوي 15% من 200؟",
                    options: ["15", "20", "30", "40"],
                    correct: 2
                },
                {
                    question: "ما هو محيط مربع طول ضلعه 5 سم؟",
                    options: ["10 سم", "15 سم", "20 سم", "25 سم"],
                    correct: 2
                },
                {
                    question: "ما هو ناتج 2³ (2 للقوة 3)؟",
                    options: ["6", "8", "9", "12"],
                    correct: 1
                }
            ],
            medium: [
                {
                    question: "حل المعادلة: 2x + 5 = 15",
                    options: ["x = 5", "x = 10", "x = 7.5", "x = 3"],
                    correct: 0
                },
                {
                    question: "ما هو مساحة دائرة نصف قطرها 7 سم؟ (π = 22/7)",
                    options: ["44 سم²", "154 سم²", "77 سم²", "22 سم²"],
                    correct: 1
                },
                {
                    question: "إذا كان المجموع الكلي لزوايا المثلث 180°، فما هي قيمة الزاوية الثالثة إذا كانت الزاويتان الأخريان 60° و 80°؟",
                    options: ["30°", "40°", "50°", "60°"],
                    correct: 1
                },
                {
                    question: "ما هو العدد التالي في المتتالية: 2, 6, 12, 20, ...؟",
                    options: ["28", "30", "32", "34"],
                    correct: 1
                },
                {
                    question: "ما هو البسط المبسط للكسر 24/36؟",
                    options: ["2/3", "3/4", "4/5", "6/9"],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "ما هو قيمة س في المعادلة التربيعية: x² - 5x + 6 = 0؟",
                    options: ["x = 2, 3", "x = -2, -3", "x = 1, 6", "لا يوجد حل حقيقي"],
                    correct: 0
                },
                {
                    question: "ما هو المضروب 5! (5 factorial)؟",
                    options: ["60", "80", "100", "120"],
                    correct: 3
                },
                {
                    question: "ما هو محيط شكل من 6 أضلاع منتظمة (سداسي منتظم) طول ضلعه 4 سم؟",
                    options: ["16 سم", "20 سم", "24 سم", "28 سم"],
                    correct: 2
                },
                {
                    question: "ما هو لوغاريتم العدد 100 للأساس 10؟",
                    options: ["1", "2", "10", "100"],
                    correct: 1
                },
                {
                    question: "إذا كان متوسط الأعداد 5 أعداد هو 12، فما هو مجموع هذه الأعداد؟",
                    options: ["48", "60", "72", "84"],
                    correct: 1
                }
            ]
        },
        arabic: {
            easy: [
                {
                    question: "اختر الجملة الصحيحة إملائياً:",
                    options: ["ذهب الطالبُ الى المدرسة", "ذهب الطالبَ إلى المدرسة", "ذهب الطالبِ إلى المدرسة", "ذهب الطالبُ إلى المدرسة"],
                    correct: 3
                },
                {
                    question: "ما هو عكس كلمة 'نافع'؟",
                    options: ["ضار", "جميل", "طيب", "جديد"],
                    correct: 0
                },
                {
                    question: "أي من التالية همزة قطع؟",
                    options: ["استخرج", "اجتماع", "امتحان", "إيمان"],
                    correct: 3
                },
                {
                    question: "ما هو جمع 'مؤنث'؟",
                    options: ["مؤنثون", "مؤنثات", "مآنيث", "كل ما سبق صحيح"],
                    correct: 2
                },
                {
                    question: "ما هو المضارع من 'أعطى'؟",
                    options: ["يعطي", "أعطي", "يعطى", "يعطو"],
                    correct: 0
                }
            ],
            medium: [
                {
                    question: "ما هو إعراب 'الطالبَ' في جملة: 'رأيتُ الطالبَ مجتهداً'؟",
                    options: ["مفعول به", "فاعل", "مبتدأ", "مضاف إليه"],
                    correct: 0
                },
                {
                    question: "اختر الجملة التي لا تحتوي على خطأ:",
                    options: ["الطلابُ مجتهدون", "الطلابِ مجتهدون", "الطلابَ مجتهدون", "الطلابُ مجتهدين"],
                    correct: 0
                },
                {
                    question: "ما هو نوع 'أن' في جملة: 'أريد أن أذاكر'؟",
                    options: ["مصدرية", "تفسيرية", "زائدة", "شرطية"],
                    correct: 0
                },
                {
                    question: "ما هو تصغير كلمة 'كتاب'؟",
                    options: ["كتيب", "كتبين", "كوتب", "كتائب"],
                    correct: 0
                },
                {
                    question: "ما هو اسم الآلة من 'حفر'؟",
                    options: ["محفار", "حفارة", "مِحْفَر", "كلها صحيحة"],
                    correct: 3
                }
            ],
            hard: [
                {
                    question: "ما هو نوع الأسلوب في قوله تعالى: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ'؟",
                    options: ["استفهام", "تقرير", "استفهام تقريري", "نداء"],
                    correct: 2
                },
                {
                    question: "ما هو إعراب 'مُخْلِصِينَ' في قوله تعالى: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ'؟",
                    options: ["حال", "تمييز", "مفعول لأجله", "نعت لفاعل مضمر"],
                    correct: 0
                },
                {
                    question: "ما هو الفعل الذي يتعدى إلى مفعولين بنفسه؟",
                    options: ["أعطى", "أعطى", "ظن", "كل ما سبق"],
                    correct: 2
                },
                {
                    question: "أي من هذه الكلمات تنتهي بألف لينة؟",
                    options: ["هُدى", "عَصا", "مَوْلَى", "كل ما سبق"],
                    correct: 3
                },
                {
                    question: "ما هو الفعل الأجوف؟",
                    options: ["علم", "قال", "كرم", "ذهب"],
                    correct: 1
                }
            ]
        },
        english: {
            easy: [
                {
                    question: "Choose the correct verb: 'She ___ to school every day.'",
                    options: ["go", "goes", "going", "went"],
                    correct: 1
                },
                {
                    question: "What is the past participle of 'write'?",
                    options: ["wrote", "written", "writing", "write"],
                    correct: 1
                },
                {
                    question: "Which is a preposition?",
                    options: ["run", "under", "quickly", "beautiful"],
                    correct: 1
                },
                {
                    question: "What is the plural of 'child'?",
                    options: ["childs", "children", "childes", "child"],
                    correct: 1
                },
                {
                    question: "Complete the sentence: 'I have ___ apples.'",
                    options: ["a", "an", "some", "is"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "Which sentence is grammatically correct?",
                    options: ["Neither of the boys are here.", "Neither of the boys is here.", "Neither of the boys were here.", "Neither of the boys have been here."],
                    correct: 1
                },
                {
                    question: "What is the correct form: 'If I ___ you, I would study harder.'",
                    options: ["am", "was", "were", "will be"],
                    correct: 2
                },
                {
                    question: "Which is a compound adjective?",
                    options: ["well-known", "very good", "extremely tall", "quite expensive"],
                    correct: 0
                },
                {
                    question: "Identify the type of clause: 'The book that I read was interesting.'",
                    options: ["Noun clause", "Adjective clause", "Adverb clause", "Independent clause"],
                    correct: 1
                },
                {
                    question: "What is the correct reported speech: He said, 'I am tired now.'",
                    options: ["He said that he was tired then.", "He said that he is tired now.", "He said that I was tired then.", "He said that he am tired now."],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "Which sentence uses the subjunctive mood correctly?",
                    options: ["I recommend that he studies hard.", "I recommend that he study hard.", "I recommend that he is studying hard.", "I recommend that he studied hard."],
                    correct: 1
                },
                {
                    question: "What is the correct inversion: 'Not only ___ pass the exam, but he also got the highest score.'",
                    options: ["he did", "did he", "he was", "was he"],
                    correct: 1
                },
                {
                    question: "Identify the error: 'The professor, along with his students, are attending the conference.'",
                    options: ["The professor", "along with", "are", "attending"],
                    correct: 2
                },
                {
                    question: "Which is a dangling modifier?",
                    options: ["Walking down the street, the car hit me.", "While walking down the street, I was hit by a car.", "The car hit me while I was walking down the street.", "I was hit by the car while walking down the street."],
                    correct: 0
                },
                {
                    question: "What is the correct punctuation for the sentence: 'She is a doctor ___ she is also a researcher.'",
                    options: [",", ";", ":", "-"],
                    correct: 1
                }
            ]
        },
        physics: {
            easy: [
                {
                    question: "ما هي وحدة قياس القوة؟",
                    options: ["جول", "نيوتن", "واط", "باسكال"],
                    correct: 1
                },
                {
                    question: "ما هو السرعة إذا تحرك جسم مسافة 100 متر في 20 ثانية؟",
                    options: ["2 م/ث", "5 م/ث", "10 م/ث", "20 م/ث"],
                    correct: 1
                },
                {
                    question: "ما هو الجهاز المستخدم لقياس التيار الكهربائي؟",
                    options: ["الفولتميتر", "الأميتر", "الأوميتر", "البارومتر"],
                    correct: 1
                },
                {
                    question: "ما هو القانون الذي يصف العلاقة بين الجهد والتيار والمقاومة؟",
                    options: ["قانون نيوتن", "قانون أوم", "قانون كولوم", "قانون فاراداي"],
                    correct: 1
                },
                {
                    question: "ما هي وحدة قياس الطاقة؟",
                    options: ["نيوتن", "واط", "جول", "باسكال"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "إذا كانت كتلة جسم 10 كجم وتسارعه 2 م/ث²، فما هي القوة المؤثرة عليه؟",
                    options: ["5 نيوتن", "10 نيوتن", "20 نيوتن", "40 نيوتن"],
                    correct: 2
                },
                {
                    question: "ما هو الضغط عند نقطة تحت عمق 10 أمتار في الماء (كثافة الماء 1000 كجم/م³)؟",
                    options: ["100,000 باسكال", "98,000 باسكال", "10,000 باسكال", "1,000 باسكال"],
                    correct: 1
                },
                {
                    question: "ما هي العدسة التي تستخدم لتصحيح قصر النظر؟",
                    options: ["عدسة محدبة", "عدسة مقعرة", "عدسة اسطوانية", "لا تستخدم عدسة"],
                    correct: 1
                },
                {
                    question: "ما هو مبدأ عمل المحول الكهربائي؟",
                    options: ["قانون أوم", "قانون كولوم", "قانون فاراداي للحث الكهرومغناطيسي", "قانون هوك"],
                    correct: 2
                },
                {
                    question: "ما هي ظاهرة انحناء الضوء عند مروره بين وسطين مختلفين؟",
                    options: ["الانعكاس", "الانكسار", "الحيود", "التداخل"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "ما هو العزم الزاوي لجسم كتلته 2 كجم يدور في دائرة نصف قطرها 3 متر بسرعة زاوية 4 راديان/ث؟",
                    options: ["24 كجم·م²/ث", "48 كجم·م²/ث", "12 كجم·م²/ث", "6 كجم·م²/ث"],
                    correct: 0
                },
                {
                    question: "ما هي الطاقة الحركية لجسم كتلته 5 كجم يتحرك بسرعة 10 م/ث؟",
                    options: ["50 جول", "100 جول", "250 جول", "500 جول"],
                    correct: 2
                },
                {
                    question: "كم يبلغ الشحنة الكهربائية التي تمر في موصل إذا مر تيار 2 أمبير لمدة 10 ثوانٍ؟",
                    options: ["5 كولوم", "10 كولوم", "20 كولوم", "0.2 كولوم"],
                    correct: 2
                },
                {
                    question: "ما هو فرق الجهد بين نقطتين إذا انتقل شحنة مقدارها 5 كولوم بينهما وأنجزت شغل 100 جول؟",
                    options: ["5 فولت", "10 فولت", "20 فولت", "500 فولت"],
                    correct: 2
                },
                {
                    question: "ما هو المبدأ الفيزيائي الذي يفسر طفو السفن؟",
                    options: ["قانون نيوتن الأول", "قانون أرخميدس", "قانون باسكال", "قانون برنولي"],
                    correct: 1
                }
            ]
        },
        chemistry: {
            easy: [
                {
                    question: "ما هو الرقم الذري للأكسجين؟",
                    options: ["6", "7", "8", "16"],
                    correct: 2
                },
                {
                    question: "ما هو الرمز الكيميائي للذهب؟",
                    options: ["Go", "Gd", "Au", "Ag"],
                    correct: 2
                },
                {
                    question: "كم عدد الروابط في جزيء الماء (H₂O)؟",
                    options: ["1", "2", "3", "4"],
                    correct: 1
                },
                {
                    question: "ما هو المركب الكيميائي للماء؟",
                    options: ["H₂O", "CO₂", "O₂", "NaCl"],
                    correct: 0
                },
                {
                    question: "ما هو pH للمحاليل القاعدية؟",
                    options: ["أقل من 7", "يساوي 7", "أكبر من 7", "يعتمد على درجة الحرارة"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "ما هي كتلة المول الواحد من الماء (H₂O) تقريباً؟",
                    options: ["10 جم", "18 جم", "20 جم", "28 جم"],
                    correct: 1
                },
                {
                    question: "ما هو التفاعل الذي يطلق طاقة؟",
                    options: ["ماص للحرارة", "طارد للحرارة", "حفاز", "تعادل"],
                    correct: 1
                },
                {
                    question: "أي من هذه لا يعتبر من العناصر النادرة؟",
                    options: ["الهيليوم", "النيون", "الأرجون", "النيتروجين"],
                    correct: 3
                },
                {
                    question: "ما هو اسم المركب CH₄؟",
                    options: ["الميثان", "الأيثان", "البروبان", "البوتان"],
                    correct: 0
                },
                {
                    question: "ما هو نوع الرابطة في جزيء كلوريد الصوديوم (NaCl)؟",
                    options: ["تساهمية", "أيونية", "فلزية", "هيدروجينية"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "كم عدد الإلكترونات في غاز النبيل النيون (Ne)؟",
                    options: ["8", "10", "12", "20"],
                    correct: 1
                },
                {
                    question: "ما هو التفاعل المتوازن لاحتراق الميثان (CH₄)؟",
                    options: ["CH₄ + O₂ → CO₂ + H₂O", "CH₄ + 2O₂ → CO₂ + 2H₂O", "2CH₄ + O₂ → 2CO₂ + H₂O", "CH₄ + O₂ → CO + H₂O"],
                    correct: 1
                },
                {
                    question: "ما هو التركيز المولاري لمحلول يحتوي على 58.5 جم من NaCl في 2 لتر من الماء؟ (Na=23, Cl=35.5)",
                    options: ["0.5 مولار", "1 مولار", "2 مولار", "4 مولار"],
                    correct: 0
                },
                {
                    question: "ما هو قانون الغاز المثالي؟",
                    options: ["P₁V₁ = P₂V₂", "PV = nRT", "V/T = k", "P₁/T₁ = P₂/T₂"],
                    correct: 1
                },
                {
                    question: "أي من هذه المجموعات الوظيفية في الأحماض الكربوكسيلية؟",
                    options: ["-OH", "-COOH", "-NH₂", "-CHO"],
                    correct: 1
                }
            ]
        },
        biology: {
            easy: [
                {
                    question: "ما هو العضو الرئيسي في جهاز الدوران؟",
                    options: ["الرئتان", "القلب", "الكبد", "المعدة"],
                    correct: 1
                },
                {
                    question: "كم عدد الكروموسومات في الخلية البشرية الطبيعية؟",
                    options: ["23", "46", "69", "92"],
                    correct: 1
                },
                {
                    question: "ما هي العملية التي تصنع بها النباتات غذاءها؟",
                    options: ["التنفس", "البناء الضوئي", "النتح", "الإخراج"],
                    correct: 1
                },
                {
                    question: "أي من هذه فقاريات؟",
                    options: ["العنكبوت", "الحوت", "الحشرة", "القشريات"],
                    correct: 1
                },
                {
                    question: "ما هو اسم أكبر دماغ في جسم الإنسان؟",
                    options: ["المخ", "المخيخ", "النخاع الشوكي", "القنطرة"],
                    correct: 0
                }
            ],
            medium: [
                {
                    question: "ما هي المرحلة الأولى في الانقسام المتساوي (الميتوز)؟",
                    options: ["الطور الاستوائي", "الطور التمهيدي", "الطور الانفصالي", "الطور النهائي"],
                    correct: 1
                },
                {
                    question: "أي من هذه ليست وظيفة للكبد؟",
                    options: ["إفراز الصفراء", "تخزين الجلوكوز", "تنقية الدم", "ضخ الدم"],
                    correct: 3
                },
                {
                    question: "ما هو اسم الهرمون الذي ينظم سكر الدم؟",
                    options: ["الأدرينالين", "الإنسولين", "الثيروكسين", "النمو"],
                    correct: 1
                },
                {
                    question: "أين يحدث الهضم الأولي للكربوهيدرات؟",
                    options: ["المعدة", "الأمعاء الدقيقة", "الفم", "المريء"],
                    correct: 2
                },
                {
                    question: "ما هي الوحدة الوظيفية في الكلية؟",
                    options: ["النفيرون", "الحويصلة الهوائية", "الساركومير", "النيورون"],
                    correct: 0
                }
            ],
            hard: [
                {
                    question: "ما هي المرحلة التي يتم فيها تضاعف المادة الوراثية (DNA)؟",
                    options: ["G1", "S", "G2", "M"],
                    correct: 1
                },
                {
                    question: "ما هو اسم المسار الذي تنتقل فيه الإشارات العصبية؟",
                    options: ["الدورة الدموية", "الجهاز اللمفاوي", "المشبك العصبي", "الجهاز الهضمي"],
                    correct: 2
                },
                {
                    question: "أي من هذه أنزيمات هضمية في المعدة؟",
                    options: ["الأميليز", "الليباز", "البيبسين", "اللاكتاز"],
                    correct: 2
                },
                {
                    question: "ما هي النسبة المئوية للأكسجين في الهواء الذي نزفره؟",
                    options: ["16%", "21%", "12%", "8%"],
                    correct: 0
                },
                {
                    question: "أي من هذه عمليات لا تتطلب طاقة (لا إرادية)؟",
                    options: ["التنفس الخلوي", "البناء الضوئي", "انتشار الأكسجين", "كل ما سبق"],
                    correct: 3
                }
            ]
        }
    }
};
