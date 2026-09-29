// ─────────────────────────────────────────────────────────────
// MASTER RESOURCE DIRECTORY – FIXED (deduplicated & consolidated)
// ─────────────────────────────────────────────────────────────

// ===== MASTER FIELDS DATA (merged from all sections) =====
const FIELDS = [
  // ── CREATIVE ARTS ──
  {id:"design",icon:"🎨",name:"Design & Creative Tools",desc:"Professional tools for UI/UX, graphic design, and visual creation",resources:[
    {name:"Figma",url:"https://www.figma.com",badge:"freemium",tags:["UI/UX","Prototyping"],desc:"The industry standard for UI/UX design. Real-time collaboration, interactive prototypes, and design systems — all in browser.",logo:"Fi",c:"#F24E1E"},
    {name:"Canva",url:"https://www.canva.com",badge:"freemium",tags:["Graphics","Templates"],desc:"Drag-and-drop design for presentations, social posts, posters, and videos. Thousands of professional templates, beginner-friendly.",logo:"C",c:"#00C4CC"},
    {name:"Adobe Express",url:"https://www.adobe.com/express",badge:"freemium",tags:["Quick Design","Branding"],desc:"Adobe's free design tool for social graphics, flyers, and short videos. Powered by Firefly AI for generative content creation.",logo:"Ae",c:"#FF0000"},
    {name:"Coolors",url:"https://coolors.co",badge:"free",tags:["Color","Palette"],desc:"The fastest color palette generator. Explore, lock, and share gorgeous color combinations. Export in any format.",logo:"Co",c:"#7B2FBE"},
    {name:"unDraw",url:"https://undraw.co",badge:"free",tags:["Illustrations","SVG"],desc:"Open-source SVG illustrations for any idea. Adjust the accent color and download completely free for any use.",logo:"uD",c:"#5C7CFA"},
    {name:"Pexels",url:"https://www.pexels.com",badge:"free",tags:["Stock Photos","Videos"],desc:"100% free high-quality stock photos and videos. No attribution required. Updated daily by talented photographers worldwide.",logo:"Px",c:"#05A081"}
  ]},
  {id:"writing",icon:"✍️",name:"Writing & Content Creation",desc:"Tools for better writing, grammar, research, and long-form content",resources:[
    {name:"Grammarly",url:"https://www.grammarly.com",badge:"freemium",tags:["Grammar","AI Writing"],desc:"AI writing assistant that corrects grammar, spelling, punctuation, style, and tone in real-time across 500,000+ apps and sites.",logo:"G",c:"#15C26B"},
    {name:"Hemingway Editor",url:"https://hemingwayapp.com",badge:"freemium",tags:["Clarity","Editing"],desc:"Makes writing bold and clear. Highlights complex sentences, passive voice, and overused adverbs — instantly improves readability.",logo:"HW",c:"#DD4B39"},
    {name:"Zotero",url:"https://www.zotero.org",badge:"free",tags:["Citations","Research"],desc:"Free, open-source reference manager. Collect sources from the web, organize them, annotate PDFs, and auto-generate citations in any style.",logo:"Z",c:"#CC2936"},
    {name:"Purdue OWL",url:"https://owl.purdue.edu",badge:"free",tags:["Style Guides","APA/MLA"],desc:"The most comprehensive free writing guide online. Covers APA, MLA, Chicago, grammar rules, research papers, and academic writing.",logo:"OWL",c:"#CFB991"},
    {name:"ProWritingAid",url:"https://prowritingaid.com",badge:"freemium",tags:["Deep Editing","Style"],desc:"Advanced writing analysis tool offering 20+ in-depth style reports. Great for long-form content, novels, and professional documents.",logo:"PWA",c:"#6B2FBF"},
    {name:"Scrivener",url:"https://www.literatureandlatte.com/scrivener",badge:"paid",tags:["Long-form","Novel Writing"],desc:"Professional writing software for long-form projects like novels, dissertations, and screenplays. Industry standard among authors.",logo:"Sc",c:"#A8512B"}
  ]},
  {id:"music",icon:"🎵",name:"Music & Audio Production",desc:"Learn music theory, production, and instruments with these verified tools",resources:[
    {name:"Musictheory.net",url:"https://www.musictheory.net",badge:"free",tags:["Theory","Ear Training"],desc:"Free, structured music theory lessons from absolute basics to advanced harmony. Interactive exercises with instant feedback.",logo:"MT",c:"#7B1FA2"},
    {name:"Bandlab",url:"https://www.bandlab.com",badge:"free",tags:["DAW","Collaboration"],desc:"Free browser-based DAW with 0 paywalls — record, mix, master, and collaborate on music with 90M+ users worldwide.",logo:"BL",c:"#E91E63"},
    {name:"Splice",url:"https://splice.com",badge:"freemium",tags:["Samples","Plugins"],desc:"The #1 platform for music production samples, loops, and plugin rentals. Massive library used by professional producers globally.",logo:"Sp",c:"#FF4800"},
    {name:"GarageBand",url:"https://www.apple.com/mac/garageband",badge:"free",tags:["DAW","Apple"],desc:"Apple's free professional-grade DAW for Mac and iOS. 1000+ instruments, loops, and effects. Perfect entry point for music production.",logo:"GB",c:"#FF6B35"},
    {name:"LANDR",url:"https://www.landr.com",badge:"freemium",tags:["Mastering","Distribution"],desc:"AI-powered mastering and music distribution platform. Get professional-sounding masters and release on Spotify, Apple Music, etc.",logo:"LN",c:"#00C8B4"}
  ]},
  {id:"photography",icon:"📷",name:"Photography",desc:"Tutorials, editing tools, and communities for photographers at all levels",resources:[
    {name:"Digital Photography School",url:"https://digital-photography-school.com",badge:"free",tags:["Tutorials","Tips"],desc:"500+ free photography tutorials covering composition, lighting, exposure, post-processing, and every camera setting explained clearly.",logo:"DPS",c:"#E53935"},
    {name:"Lightroom (Free Mobile)",url:"https://lightroom.adobe.com",badge:"freemium",tags:["Editing","RAW"],desc:"Adobe Lightroom's mobile app is free with basic editing. Industry-standard RAW photo editor with powerful color grading tools.",logo:"Lr",c:"#31A8FF"},
    {name:"VSCO",url:"https://vsco.co",badge:"freemium",tags:["Presets","Mobile"],desc:"Photography app with film-inspired presets loved by creatives. Community platform to share and discover work from photographers worldwide.",logo:"VSCO",c:"#000000"},
    {name:"Unsplash",url:"https://unsplash.com",badge:"free",tags:["Stock Photos","Royalty-Free"],desc:"100,000+ beautiful royalty-free photos contributed by photographers worldwide. Free to download and use commercially.",logo:"Un",c:"#111111"},
    {name:"Snapseed",url:"https://snapseed.online",badge:"free",tags:["Mobile Editing","Filters"],desc:"Google's powerful free photo editing app for iOS and Android. Professional-grade selective adjustments and healing tool.",logo:"SS",c:"#4CAF50"}
  ]},
  {id:"film",icon:"🎬",name:"Film & Filmmaking",desc:"Resources for filmmakers, screenwriters, editors, and cinematographers",resources:[
    {name:"No Film School",url:"https://nofilmschool.com",badge:"free",tags:["Tutorials","Gear"],desc:"The leading free resource for independent filmmakers — tutorials, gear reviews, industry news, and interviews with working professionals.",logo:"NFS",c:"#E53935"},
    {name:"DaVinci Resolve",url:"https://www.blackmagicdesign.com/products/davinciresolve",badge:"free",tags:["Editing","Color Grading"],desc:"Hollywood-grade free video editing, color grading, VFX, and audio post-production software. Used on major feature films.",logo:"DVR",c:"#F57C00"},
    {name:"Final Draft",url:"https://www.finaldraft.com",badge:"paid",tags:["Screenwriting","Industry"],desc:"Industry-standard screenwriting software used by professional screenwriters in Hollywood since 1991. Auto-formats to industry standards.",logo:"FD",c:"#0D47A1"},
    {name:"Pond5",url:"https://www.pond5.com",badge:"freemium",tags:["Stock Footage","SFX"],desc:"World's largest stock media marketplace with 30M+ clips, sound effects, music, and 3D assets for productions of all sizes.",logo:"P5",c:"#FF5722"}
  ]},
  {id:"art",icon:"🖼️",name:"Visual Art & Drawing",desc:"Tutorials, communities, and tools for painters, illustrators, and digital artists",resources:[
    {name:"Proko",url:"https://www.proko.com",badge:"freemium",tags:["Figure Drawing","Anatomy"],desc:"World-class free figure drawing and anatomy lessons by professional illustrators. YouTube channel plus premium in-depth courses.",logo:"Pr",c:"#D32F2F"},
    {name:"Ctrl+Paint",url:"https://www.ctrlpaint.com",badge:"freemium",tags:["Digital Painting","Fundamentals"],desc:"Free digital painting library covering fundamentals, value, color, and brushwork. 100+ lessons by Matt Kohr for concept artists.",logo:"C+P",c:"#212121"},
    {name:"Krita",url:"https://krita.org",badge:"free",tags:["Digital Art","Open Source"],desc:"Free, professional open-source digital painting app. Industry-used by illustrators and concept artists. Rivals Photoshop for painting.",logo:"Kr",c:"#3DAEE9"},
    {name:"Line of Action",url:"https://line-of-action.com",badge:"free",tags:["Figure Practice","Timed"],desc:"Free gesture drawing practice tool. Timed pose sessions with human figures, animals, hands, and faces to develop drawing speed.",logo:"LoA",c:"#E53935"}
  ]},
  {id:"architecture",icon:"🏛️",name:"Architecture & Urban Design",desc:"Tools, portfolios, and references for architects, planners, and interior designers",resources:[
    {name:"ArchDaily",url:"https://www.archdaily.com",badge:"free",tags:["Projects","News"],desc:"World's most visited architecture website. Browse 110,000+ building projects, news, competitions, and job listings globally.",logo:"AD",c:"#FF0000"},
    {name:"Dezeen",url:"https://www.dezeen.com",badge:"free",tags:["Design News","Interiors"],desc:"Leading design and architecture magazine with daily coverage of architecture, interiors, product design, and sustainable building.",logo:"Dz",c:"#000000"},
    {name:"SketchUp Free",url:"https://app.sketchup.com",badge:"freemium",tags:["3D Modeling","BIM"],desc:"The most intuitive 3D modeling tool for architects and designers. Large 3D Warehouse library and live terrain integration.",logo:"SU",c:"#00BCD4"},
    {name:"Archisoup",url:"https://www.archisoup.com",badge:"free",tags:["Learning","CAD Resources"],desc:"Comprehensive architecture student resource with free CAD blocks, tutorials, career guides, and software training materials.",logo:"AS",c:"#795548"}
  ]},
  {id:"literature",icon:"📚",name:"Literature & Reading",desc:"Free classics, literary analysis, and platforms for readers and writers",resources:[
    {name:"Project Gutenberg",url:"https://www.gutenberg.org",badge:"free",tags:["Classic Books","Free"],desc:"60,000+ free public domain ebooks. Every major classic novel, poem, and play from Shakespeare to Tolstoy, freely downloadable.",logo:"PG",c:"#4CAF50"},
    {name:"Goodreads",url:"https://www.goodreads.com",badge:"free",tags:["Book Discovery","Reviews"],desc:"World's largest book recommendation community. Track your reading, find books by mood or genre, and join book clubs.",logo:"Gr",c:"#F4F1EA"},
    {name:"Sparknotes",url:"https://www.sparknotes.com",badge:"freemium",tags:["Study Guides","Analysis"],desc:"Free literary analysis, character guides, themes, and chapter summaries for 700+ works. Plus AP test prep for English Literature.",logo:"SN",c:"#C41E3A"},
    {name:"Standard Ebooks",url:"https://standardebooks.org",badge:"free",tags:["Ebooks","Beautifully Formatted"],desc:"Beautifully formatted, free public domain ebooks with modern typography. Higher quality than basic Gutenberg editions.",logo:"SE",c:"#1565C0"},
    {name:"Lit Hub",url:"https://lithub.com",badge:"free",tags:["Contemporary","Essays"],desc:"Daily literary news, essays, author interviews, excerpts, and book reviews. The best contemporary literary journalism online.",logo:"LH",c:"#B71C1C"},
    {name:"Open Library",url:"https://openlibrary.org",badge:"free",tags:["Digital Lending","Archive"],desc:"Internet Archive's free digital lending library with 4M+ books. Borrow digital copies of books for free with a free account.",logo:"OL",c:"#2196F3"}
  ]},

  // ── ACADEMIC & LANGUAGES ──
  {id:"academic",icon:"🎓",name:"Academic Learning",desc:"World-class free and open academic courses and lecture libraries",resources:[
    {name:"MIT OpenCourseWare",url:"https://ocw.mit.edu",badge:"free",tags:["MIT","All Subjects"],desc:"Free lecture notes, exams, and videos from every MIT department — 2,500+ courses spanning science, engineering, humanities, and more.",logo:"MIT",c:"#A31F34"},
    {name:"Coursera",url:"https://www.coursera.org",badge:"freemium",tags:["University Courses","Certificates"],desc:"5K+ courses from Stanford, Yale, Google, and IBM. Audit most courses free; pay for certificates and specializations.",logo:"C",c:"#0056D2"},
    {name:"edX",url:"https://www.edx.org",badge:"freemium",tags:["Harvard","MicroMasters"],desc:"Harvard, MIT, and 160+ institutions offer free-audit online courses in STEM, business, law, and humanities.",logo:"edX",c:"#02262B"},
    {name:"Academic Earth",url:"https://academicearth.org",badge:"free",tags:["Lectures","Aggregator"],desc:"Curated aggregator of free online courses from top universities including Oxford, Yale, Stanford, Berkeley, and Cambridge.",logo:"AE",c:"#2C3E50"},
    {name:"Open Yale Courses",url:"https://oyc.yale.edu",badge:"free",tags:["Yale","Full Courses"],desc:"Complete Yale undergraduate courses with video lectures, transcripts, and syllabi — free for everyone worldwide.",logo:"OYC",c:"#00356B"},
    {name:"The Great Courses (Wondrium)",url:"https://www.wondrium.com",badge:"paid",tags:["Lectures","Expert Instructors"],desc:"Premium video lecture series by top professors on history, science, philosophy, mathematics, and the arts.",logo:"GC",c:"#8B1A1A"}
  ]},
  {id:"languages",icon:"🌍",name:"Language Learning",desc:"Apps, tools, and communities for mastering new languages",resources:[
    {name:"Duolingo",url:"https://www.duolingo.com",badge:"freemium",tags:["Gamified","40+ Languages"],desc:"The world's most popular language learning app. Gamified lessons in 40+ languages with streaks, leagues, and personalized review.",logo:"DL",c:"#58CC02"},
    {name:"Anki",url:"https://apps.ankiweb.net",badge:"free",tags:["Flashcards","Spaced Repetition"],desc:"Powerful open-source flashcard app using spaced repetition — the proven method for vocabulary retention. Used by medical students worldwide.",logo:"ANK",c:"#0070F3"},
    {name:"italki",url:"https://www.italki.com",badge:"freemium",tags:["Tutors","Conversation"],desc:"Connect with professional language teachers and community tutors for 1-on-1 lessons in 150+ languages at affordable rates.",logo:"ik",c:"#00BFFF"},
    {name:"Clozemaster",url:"https://www.clozemaster.com",badge:"freemium",tags:["Intermediate","Fill-in-the-blank"],desc:"Gamified fill-in-the-blank sentences for intermediate and advanced learners. 50K+ sentences per language sourced from real texts.",logo:"CM",c:"#5D4037"},
    {name:"Pimsleur",url:"https://www.pimsleur.com",badge:"freemium",tags:["Audio","Speaking"],desc:"Audio-first language courses built on the scientifically proven Pimsleur method. Ideal for commuters and audio learners.",logo:"Pi",c:"#E91E63"},
    {name:"Language Transfer",url:"https://www.languagetransfer.org",badge:"free",tags:["Thinking Method","Podcast"],desc:"Mihalis Eleftheriou's completely free audio courses for Spanish, German, Greek, and more using the revolutionary Thinking Method.",logo:"LT",c:"#388E3C"}
  ]},
  {id:"history",icon:"🏺",name:"History",desc:"Courses, documentaries, and archives for exploring human history",resources:[
    {name:"Crash Course History",url:"https://www.youtube.com/user/crashcourse",badge:"free",tags:["YouTube","World History"],desc:"John Green's iconic YouTube series covering world history, US history, and European history with engaging visuals and analysis.",logo:"CC",c:"#8B0000"},
    {name:"JSTOR",url:"https://www.jstor.org",badge:"freemium",tags:["Academic","Journals"],desc:"Millions of academic history journal articles, book chapters, and primary sources from major academic publishers worldwide.",logo:"JS",c:"#8B4513"},
    {name:"Internet History Sourcebooks",url:"https://sourcebooks.fordham.edu",badge:"free",tags:["Primary Sources","Fordham"],desc:"Fordham University's massive free collection of primary source documents from ancient, medieval, and modern world history.",logo:"IHS",c:"#703F12"},
    {name:"World History Encyclopedia",url:"https://www.worldhistory.org",badge:"freemium",tags:["Articles","Images"],desc:"Non-profit encyclopedia with 6K+ peer-reviewed history articles, timelines, maps, and a vast image library. Free for personal use.",logo:"WHE",c:"#B7410E"},
    {name:"Historymap",url:"https://geacron.com",badge:"freemium",tags:["Maps","Interactive"],desc:"Interactive historical world atlas from 3000 BCE to today. Watch borders, empires, and civilizations rise and fall on an animated map.",logo:"HM",c:"#4A6741"},
    {name:"Dan Carlin Hardcore History",url:"https://www.dancarlin.com/hardcore-history-series",badge:"freemium",tags:["Podcast","Deep Dives"],desc:"Award-winning long-form history podcast. Dan Carlin's multi-hour episodes on Genghis Khan, WWI, Rome, and more are legendary.",logo:"DC",c:"#1A1A1A"}
  ]},
  {id:"philosophy",icon:"🤔",name:"Philosophy",desc:"Courses, podcasts, and texts for exploring ideas and critical thinking",resources:[
    {name:"Philosophy Bites",url:"https://philosophybites.com",badge:"free",tags:["Podcast","Interviews"],desc:"Concise interviews with leading philosophers on everything from consciousness and free will to justice and meaning. 200+ episodes.",logo:"PB",c:"#6A0572"},
    {name:"Stanford Encyclopedia of Philosophy",url:"https://plato.stanford.edu",badge:"free",tags:["Reference","Academic"],desc:"The definitive free academic reference for philosophy. Peer-reviewed, regularly updated entries written by leading philosophers worldwide.",logo:"SEP",c:"#8C1515"},
    {name:"MIT OpenCourseWare — Philosophy",url:"https://ocw.mit.edu/courses/linguistics-and-philosophy",badge:"free",tags:["MIT Courses","Logic"],desc:"Free MIT course materials covering ethics, philosophy of mind, metaphysics, logic, and philosophy of language.",logo:"MIT",c:"#A31F34"},
    {name:"Crash Course Philosophy",url:"https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR",badge:"free",tags:["YouTube","Intro"],desc:"PBS's 46-episode introductory philosophy series covering ethics, epistemology, logic, existentialism, and political philosophy.",logo:"CC",c:"#2E86AB"},
    {name:"Project Gutenberg (Philosophy)",url:"https://www.gutenberg.org",badge:"free",tags:["Classic Texts","Free"],desc:"Free digital library with thousands of classic philosophy texts — Plato, Aristotle, Kant, Nietzsche, Hume, and more.",logo:"PG",c:"#5D4037"},
    {name:"Wireless Philosophy (Wi-Phi)",url:"https://www.wi-phi.com",badge:"free",tags:["Videos","Concepts"],desc:"Short, animated philosophy videos introducing core concepts in logic, critical thinking, ethics, and epistemology for newcomers.",logo:"WP",c:"#1976D2"}
  ]},
  {id:"game-dev",icon:"🎮",name:"Game Development",desc:"Engines, tutorials, and communities for aspiring and indie game developers",resources:[
    {name:"Unity Learn",url:"https://learn.unity.com",badge:"freemium",tags:["Unity","Tutorials"],desc:"Official Unity learning platform with 750+ hours of structured tutorials, pathway courses, and hands-on projects for all skill levels.",logo:"Un",c:"#222222"},
    {name:"Godot Engine",url:"https://godotengine.org",badge:"free",tags:["Open Source","2D/3D"],desc:"Free and open-source game engine with intuitive scene system, GDScript, and C# support. Ideal for 2D and 3D indie games.",logo:"GD",c:"#478CBF"},
    {name:"Unreal Online Learning",url:"https://dev.epicgames.com/community/learning",badge:"free",tags:["Unreal","AAA"],desc:"Epic Games' free learning portal with courses, webinars, and sample projects for Unreal Engine 5 development.",logo:"UE",c:"#1A1A1A"},
    {name:"itch.io",url:"https://itch.io",badge:"free",tags:["Game Jam","Indie"],desc:"Open game marketplace and game jam platform. Explore 700K+ indie games and find beginner-friendly game jams to practice with.",logo:"itch",c:"#FA5C5C"},
    {name:"GDQuest",url:"https://www.gdquest.com",badge:"freemium",tags:["Godot","Open Source"],desc:"High-quality open-source Godot tutorials and courses. All projects are freely available on GitHub, made by and for the community.",logo:"GDQ",c:"#37474F"},
    {name:"GameDev.tv",url:"https://www.gamedev.tv",badge:"freemium",tags:["Udemy","Complete Courses"],desc:"Highly rated Unity, Unreal, Blender, and game design courses by Ben Tristem. Bestselling game development courses on Udemy.",logo:"GTV",c:"#E53935"}
  ]},

  // ── LIFESTYLE & WELLNESS ──
  {id:"fitness",icon:"💪",name:"Fitness & Exercise",desc:"Training programs, nutrition science, and fitness tools for every goal",resources:[
    {name:"Bodyweight Fitness (Reddit)",url:"https://www.reddit.com/r/bodyweightfitness",badge:"free",tags:["No Equipment","Community"],desc:"750K+ member community with free recommended workout routines, progress tracking, form checks, and a complete beginner program.",logo:"BWF",c:"#FF4500"},
    {name:"Jefit",url:"https://www.jefit.com",badge:"freemium",tags:["Workout Tracker","Plans"],desc:"Exercise database with 1,300+ exercises, workout planning tools, performance tracking, and a supportive fitness community.",logo:"JF",c:"#E91E63"},
    {name:"Examine.com",url:"https://examine.com",badge:"freemium",tags:["Nutrition Science","Supplements"],desc:"Independent, evidence-based analysis of supplements and nutrition. No industry funding — just peer-reviewed research summaries.",logo:"EX",c:"#2E7D32"},
    {name:"Nike Training Club",url:"https://www.nike.com/ntc-app",badge:"free",tags:["Guided Workouts","App"],desc:"Nike's free workout app with 185+ free guided workouts from strength training to yoga. No gym equipment needed for most.",logo:"NTC",c:"#111111"},
    {name:"Starting Strength",url:"https://startingstrength.com",badge:"freemium",tags:["Barbell","Novice"],desc:"Mark Rippetoe's proven novice barbell strength training program and wiki. The gold standard beginner program for building strength.",logo:"SS",c:"#C62828"},
    {name:"AthleanX (YouTube)",url:"https://www.youtube.com/user/JDCav24",badge:"free",tags:["Science-based","YouTube"],desc:"Jeff Cavaliere's evidence-based exercise science YouTube channel. 500+ videos on proper form, injury prevention, and optimal training.",logo:"AX",c:"#D32F2F"}
  ]},
  {id:"cooking",icon:"👨‍🍳",name:"Cooking & Culinary Arts",desc:"Recipes, techniques, and culinary education for every skill level",resources:[
    {name:"Serious Eats",url:"https://www.seriouseats.com",badge:"free",tags:["Technique","Food Science"],desc:"The internet's most scientifically rigorous food site. Recipe development by J. Kenji López-Alt and editors who test everything.",logo:"SE",c:"#D4291A"},
    {name:"NYT Cooking",url:"https://cooking.nytimes.com",badge:"freemium",tags:["Recipes","Guides"],desc:"NY Times' premium recipe collection with 20K+ recipes, how-to guides, instructional videos, and detailed chef techniques.",logo:"NYT",c:"#121212"},
    {name:"ChefSteps",url:"https://www.chefsteps.com",badge:"freemium",tags:["Sous Vide","Advanced"],desc:"Premium culinary school online covering sous vide, fermentation, pastry, and professional techniques with cinematic video lessons.",logo:"CS",c:"#E74C3C"},
    {name:"Bon Appétit (YouTube)",url:"https://www.youtube.com/bappetit",badge:"free",tags:["YouTube","Entertaining"],desc:"Bon Appétit's acclaimed YouTube channel with Test Kitchen videos, professional techniques, and entertaining food content.",logo:"BA",c:"#F4A300"},
    {name:"Allrecipes",url:"https://www.allrecipes.com",badge:"free",tags:["Home Cooking","Community"],desc:"World's largest cooking community with 60K+ rated recipes, ingredient substitution guides, and meal planning tools.",logo:"AR",c:"#E53935"},
    {name:"MasterClass — Culinary",url:"https://www.masterclass.com/categories/food-and-entertaining",badge:"paid",tags:["Celebrity Chefs","Premium"],desc:"Gordon Ramsay, Thomas Keller, Dominique Ansel, and others teach their techniques in cinematic, high-production lesson series.",logo:"MC",c:"#D4AC0D"}
  ]},
  {id:"wellness",icon:"🌱",name:"Mindfulness & Wellness",desc:"Meditation, mental wellness, and evidence-based mindfulness resources",resources:[
    {name:"Headspace",url:"https://www.headspace.com",badge:"freemium",tags:["Meditation","Guided"],desc:"Guided meditation and mindfulness app with structured courses in stress, sleep, focus, and anxiety management.",logo:"HS",c:"#F47D31"},
    {name:"Insight Timer",url:"https://insighttimer.com",badge:"freemium",tags:["Free Meditations","Teachers"],desc:"World's largest free meditation app — 70K+ free guided meditations from 10K+ teachers, plus a silent timer and community.",logo:"IT",c:"#E74C3C"},
    {name:"Waking Up (Sam Harris)",url:"https://www.wakingup.com",badge:"paid",tags:["Secular","Neuroscience"],desc:"Secular mindfulness and meditation app by neuroscientist Sam Harris. Theory-first approach grounded in contemplative science.",logo:"WU",c:"#1A1A2E"},
    {name:"Greater Good Science Center",url:"https://greatergood.berkeley.edu",badge:"free",tags:["UC Berkeley","Science"],desc:"UC Berkeley's free magazine and resource hub on the science of well-being, gratitude, mindfulness, and compassion.",logo:"GGS",c:"#003262"},
    {name:"Calm",url:"https://www.calm.com",badge:"freemium",tags:["Sleep","Breathing"],desc:"Leading wellness app for meditation, breathing exercises, sleep stories, and stress reduction. Free tier with core content.",logo:"CM",c:"#4A90D9"},
    {name:"Mindful.org",url:"https://www.mindful.org",badge:"free",tags:["Articles","Practices"],desc:"Free mindfulness magazine with practice guides, science articles, and guided meditations from leading mindfulness teachers.",logo:"MO",c:"#2ECC71"}
  ]},
  {id:"travel",icon:"✈️",name:"Travel & Exploration",desc:"Planning tools, guides, and communities for curious global explorers",resources:[
    {name:"Lonely Planet",url:"https://www.lonelyplanet.com",badge:"freemium",tags:["Destination Guides","Tips"],desc:"The world's most trusted travel guide brand with free destination guides, itineraries, travel tips, and community forums.",logo:"LP",c:"#008080"},
    {name:"Google Trips / Travel",url:"https://www.google.com/travel",badge:"free",tags:["Planning","Flights"],desc:"Google's free travel planning hub — explore destinations, find flights, compare hotels, and organize trip itineraries all in one place.",logo:"GT",c:"#4285F4"},
    {name:"Rome2Rio",url:"https://www.rome2rio.com",badge:"free",tags:["Transport","Routes"],desc:"Comprehensive trip planning tool showing all transport options between any two places — flights, trains, ferries, and buses with prices.",logo:"R2R",c:"#F05700"},
    {name:"Nomad List",url:"https://nomadlist.com",badge:"freemium",tags:["Remote Work","Cities"],desc:"Database of 1,000+ cities ranked by cost, internet speed, weather, and safety — essential for digital nomads and remote workers.",logo:"NL",c:"#FF4757"},
    {name:"WikiVoyage",url:"https://www.wikivoyage.org",badge:"free",tags:["Open Source","Guides"],desc:"Free, open-source travel guide and wiki with comprehensive destination articles written collaboratively by travelers worldwide.",logo:"WV",c:"#339966"},
    {name:"TripAdvisor",url:"https://www.tripadvisor.com",badge:"free",tags:["Reviews","Booking"],desc:"World's largest travel platform with 1B+ reviews of hotels, restaurants, and attractions. Plan, compare, and book your trip.",logo:"TA",c:"#00A680"}
  ]},
  {id:"ux-research",icon:"🔬",name:"UX Research & Design",desc:"User research methods, tools, and career resources for UX professionals",resources:[
    {name:"Nielsen Norman Group",url:"https://www.nngroup.com/articles",badge:"freemium",tags:["Research Reports","Articles"],desc:"The world's leading UX research firm. Free evidence-based articles on usability, information architecture, and interaction design.",logo:"NNG",c:"#E53935"},
    {name:"UX Collective",url:"https://uxdesign.cc",badge:"free",tags:["Medium","Community"],desc:"Curated Medium publication with thoughtful UX design and research articles from practitioners worldwide. 550K+ followers.",logo:"UXC",c:"#000000"},
    {name:"Maze",url:"https://maze.co/guides",badge:"freemium",tags:["User Testing","Research Tools"],desc:"Usability testing platform with free guides on user research methods — card sorting, first-click tests, tree testing, and more.",logo:"MZ",c:"#FF6154"},
    {name:"Google UX Design Certificate",url:"https://www.coursera.org/professional-certificates/google-ux-design",badge:"freemium",tags:["Career","Coursera"],desc:"7-course Google UX Design Professional Certificate on Coursera — from user research basics to portfolio-ready case studies.",logo:"G",c:"#4285F4"},
    {name:"Laws of UX",url:"https://lawsofux.com",badge:"free",tags:["Principles","Reference"],desc:"Jon Yablonski's beautifully designed reference for the psychological principles every UX designer should know. Free and open-source.",logo:"LUX",c:"#2D3436"},
    {name:"UXTools.co",url:"https://uxtools.co",badge:"free",tags:["Tool Comparison","Survey"],desc:"Annual UX tools survey and comparison guide. Find and compare the best prototyping, research, and collaboration tools in design.",logo:"UXT",c:"#6C5CE7"}
  ]},

  // ── BUSINESS & PROFESSIONAL ──
  {id:"business",icon:"💼",name:"Business & Entrepreneurship",desc:"Top resources for founders, managers, and business learners",resources:[
    {name:"Harvard Business Review",url:"https://hbr.org",badge:"freemium",tags:["Strategy","Leadership"],desc:"The world's most influential business publication. Management strategy, leadership, innovation, and case studies from HBS faculty.",logo:"HBR",c:"#A31F34"},
    {name:"Y Combinator Startup School",url:"https://www.startupschool.org",badge:"free",tags:["Startups","Founders"],desc:"Free online curriculum from Y Combinator covering how to start a startup, find co-founders, build product, and raise funding.",logo:"YC",c:"#FF6600"},
    {name:"Investopedia",url:"https://www.investopedia.com",badge:"free",tags:["Business Concepts","Dictionary"],desc:"The most visited finance and business dictionary on the web. 30K+ articles explaining business, investing, and economics terms.",logo:"INV",c:"#1B6CA8"},
    {name:"Coursera Business",url:"https://www.coursera.org/browse/business",badge:"freemium",tags:["MBA","Certificates"],desc:"Business courses from Wharton, Yale, Google, and IBM. Specializations in project management, business analytics, and leadership.",logo:"C",c:"#0056D2"},
    {name:"MIT OpenCourseWare — Management",url:"https://ocw.mit.edu/courses/management",badge:"free",tags:["MIT","Strategy"],desc:"Free MIT Sloan School management course materials — entrepreneurship, organizational design, operations, and system dynamics.",logo:"MIT",c:"#A31F34"},
    {name:"CB Insights",url:"https://www.cbinsights.com/research",badge:"freemium",tags:["VC","Market Research"],desc:"Data-driven research on venture capital, startups, corporate strategy, and emerging tech. Free weekly newsletter with key insights.",logo:"CBI",c:"#1A5276"}
  ]},
  {id:"marketing",icon:"📣",name:"Marketing & Growth",desc:"Digital marketing, SEO, content strategy, and growth resources",resources:[
    {name:"Google Digital Garage",url:"https://learndigital.withgoogle.com",badge:"free",tags:["Digital Marketing","Certificates"],desc:"Free courses from Google covering digital marketing fundamentals, data analytics, and career development with certification.",logo:"GDG",c:"#4285F4"},
    {name:"HubSpot Academy",url:"https://academy.hubspot.com",badge:"free",tags:["Inbound","CRM"],desc:"Free marketing, sales, and service certifications from HubSpot — inbound marketing, email marketing, content strategy, and SEO.",logo:"HS",c:"#FF7A59"},
    {name:"Moz Blog",url:"https://moz.com/blog",badge:"freemium",tags:["SEO","SERPs"],desc:"Industry-leading SEO blog with in-depth guides, ranking factor research, algorithm updates, and free beginner's guide to SEO.",logo:"MOZ",c:"#4B96C8"},
    {name:"Neil Patel Blog",url:"https://neilpatel.com/blog",badge:"free",tags:["Growth","Content"],desc:"In-depth marketing guides, case studies, and strategy posts from digital marketing expert Neil Patel. Covers SEO, content, and ads.",logo:"NP",c:"#FF3C00"},
    {name:"Marketing Examples",url:"https://marketingexamples.com",badge:"free",tags:["Case Studies","Copywriting"],desc:"Real-world marketing case studies and copywriting examples from the world's most successful brands. Curated swipe file format.",logo:"ME",c:"#6C5CE7"},
    {name:"Semrush Academy",url:"https://www.semrush.com/academy",badge:"freemium",tags:["SEO Tools","Analytics"],desc:"Free online marketing courses and certification programs from Semrush covering SEO, content, PPC, and social media marketing.",logo:"SR",c:"#FF6B00"}
  ]},
  {id:"finance",icon:"💰",name:"Finance & Investing",desc:"Personal finance, investment research, and financial literacy tools",resources:[
    {name:"Investopedia",url:"https://www.investopedia.com",badge:"free",tags:["Concepts","Tutorials"],desc:"The definitive finance reference — 30K+ articles on investing, trading, personal finance, economics, and financial markets.",logo:"INV",c:"#1B6CA8"},
    {name:"Yahoo Finance",url:"https://finance.yahoo.com",badge:"free",tags:["Markets","Real-time"],desc:"Free real-time stock quotes, financial news, earnings calendars, portfolio tracking, and historical price data for global markets.",logo:"YF",c:"#6001D2"},
    {name:"Morningstar",url:"https://www.morningstar.com",badge:"freemium",tags:["Fund Research","Ratings"],desc:"Investment research platform with 5-star ratings, analyst reports, portfolio analysis tools, and comprehensive fund data.",logo:"MS",c:"#E52013"},
    {name:"The Motley Fool",url:"https://www.fool.com",badge:"freemium",tags:["Stock Picks","Analysis"],desc:"Financial advice website offering stock analysis, investment guidance, financial news, and educational resources for individual investors.",logo:"MF",c:"#CF6E00"},
    {name:"Bogleheads",url:"https://www.bogleheads.org",badge:"free",tags:["Index Investing","Community"],desc:"Community forum and wiki devoted to John Bogle's index fund investing philosophy. 100K+ members discussing long-term passive investing.",logo:"BH",c:"#1F618D"},
    {name:"Personal Finance Club",url:"https://www.personalfinanceclub.com",badge:"freemium",tags:["Beginner","Infographics"],desc:"Visual, easy-to-understand personal finance education covering budgeting, investing, debt payoff, and retirement planning.",logo:"PFC",c:"#27AE60"}
  ]},
  {id:"economics",icon:"📈",name:"Economics",desc:"Macro, microeconomics, and applied economics learning resources",resources:[
    {name:"Khan Academy Economics",url:"https://www.khanacademy.org/economics-finance-domain",badge:"free",tags:["Micro","Macro"],desc:"Free comprehensive economics curriculum — microeconomics, macroeconomics, AP Economics exam prep, and international trade.",logo:"KA",c:"#00A86B"},
    {name:"EconLib",url:"https://www.econlib.org",badge:"free",tags:["Library","Encyclopedia"],desc:"Liberty Fund's Library of Economics and Liberty — Concise Encyclopedia of Economics with 150+ articles by leading economists.",logo:"EL",c:"#1A237E"},
    {name:"Our World in Data",url:"https://ourworldindata.org",badge:"free",tags:["Data","Global"],desc:"Oxford-based research publication presenting economic, social, and environmental data through compelling interactive visualizations.",logo:"OWID",c:"#B03A2E"},
    {name:"FRED Economic Data",url:"https://fred.stlouisfed.org",badge:"free",tags:["Macro Data","Federal Reserve"],desc:"Federal Reserve Bank of St. Louis database with 800K+ US and international economic time series. Essential for economic research.",logo:"FRED",c:"#215732"},
    {name:"IMF Data",url:"https://www.imf.org/en/Data",badge:"free",tags:["Global","IMF"],desc:"International Monetary Fund's free database of global economic indicators, exchange rates, debt statistics, and forecasts.",logo:"IMF",c:"#0067A0"},
    {name:"Planet Money (NPR)",url:"https://www.npr.org/podcasts/510289/planet-money",badge:"free",tags:["Podcast","Applied"],desc:"NPR's award-winning economics podcast explaining how the economy actually works through relatable, story-driven reporting.",logo:"PM",c:"#CC0000"}
  ]},
  {id:"law",icon:"⚖️",name:"Law & Legal Studies",desc:"Free legal resources, case law, and law school study tools",resources:[
    {name:"Cornell LII",url:"https://www.law.cornell.edu",badge:"free",tags:["US Law","Case Law"],desc:"Cornell Law School's Legal Information Institute — free access to the entire US Code, CFR, Supreme Court decisions, and UCC.",logo:"LII",c:"#B7272D"},
    {name:"Google Scholar (Legal)",url:"https://scholar.google.com",badge:"free",tags:["Case Law","Journals"],desc:"Search federal and state court opinions, legal journals, and law review articles for free — millions of legal documents indexed.",logo:"GS",c:"#4285F4"},
    {name:"Oyez",url:"https://www.oyez.org",badge:"free",tags:["SCOTUS","Audio"],desc:"Free multimedia database of every Supreme Court case since 1955 with oral argument audio, transcripts, and plain-English summaries.",logo:"OY",c:"#8B1A1A"},
    {name:"Fastcase",url:"https://www.fastcase.com",badge:"freemium",tags:["Legal Research","Case Law"],desc:"Legal research platform with AI-powered search across state and federal case law, statutes, regulations, and court rules.",logo:"FC",c:"#003087"},
    {name:"JSTOR (Law)",url:"https://www.jstor.org",badge:"freemium",tags:["Academic","Law Reviews"],desc:"Digital library with 12M+ academic articles including comprehensive law review and legal journal archives from top institutions.",logo:"JS",c:"#8B4513"},
    {name:"Casetext",url:"https://casetext.com",badge:"freemium",tags:["AI Research","Brief Analysis"],desc:"AI-powered legal research platform with CARA A.I. that finds relevant cases based on brief uploads. Used by 10K+ law firms.",logo:"CT",c:"#1B4F72"}
  ]},
  {id:"psychology",icon:"🧠",name:"Psychology",desc:"Academic and applied psychology resources for students and professionals",resources:[
    {name:"APA PsycNET",url:"https://psycnet.apa.org",badge:"freemium",tags:["Research","APA"],desc:"American Psychological Association's database of 5M+ records in psychology, behavioral science, and mental health literature.",logo:"APA",c:"#003087"},
    {name:"Simply Psychology",url:"https://www.simplypsychology.org",badge:"free",tags:["Concepts","A-Level"],desc:"Accessible psychology articles, study guides, and resources for students. Covers cognitive, developmental, social, and abnormal psychology.",logo:"SP",c:"#D32F2F"},
    {name:"Noba Project",url:"https://nobaproject.com",badge:"free",tags:["Open Textbook","Academic"],desc:"Free, open psychology textbook with 150+ modules by leading psychology researchers. Used by 700K+ students worldwide.",logo:"NP",c:"#1565C0"},
    {name:"Psychology Today",url:"https://www.psychologytoday.com",badge:"free",tags:["Applied","Therapist Finder"],desc:"Mental health articles, blogs, therapist directory, and psychology news. Bridges academic research and everyday mental health topics.",logo:"PT",c:"#0083BF"},
    {name:"Crash Course Psychology",url:"https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6",badge:"free",tags:["YouTube","Intro"],desc:"PBS's fast-paced, engaging 40-episode YouTube series covering all major psychology topics with clear visuals and examples.",logo:"CC",c:"#2E86AB"}
  ]},
  {id:"self-dev",icon:"🚀",name:"Personal Development",desc:"Productivity, habits, and mindset resources for continuous growth",resources:[
    {name:"Blinkist",url:"https://www.blinkist.com",badge:"freemium",tags:["Book Summaries","Audio"],desc:"Key insights from 5K+ nonfiction books in 15-minute text and audio summaries. Perfect for busy learners and voracious readers.",logo:"BL",c:"#1DB954"},
    {name:"James Clear (Atomic Habits)",url:"https://jamesclear.com/articles",badge:"free",tags:["Habits","Productivity"],desc:"Research-backed articles on behavior change, habit formation, and continuous improvement from the author of Atomic Habits.",logo:"JC",c:"#FF6B35"},
    {name:"Ness Labs",url:"https://nesslabs.com",badge:"freemium",tags:["Mindful Productivity","Neuroscience"],desc:"Science-based articles on mindful productivity, mental models, creativity, and learning. Weekly newsletter plus premium community.",logo:"NL",c:"#7C3AED"},
    {name:"TED Talks (Self-improvement)",url:"https://www.ted.com/topics/self-improvement",badge:"free",tags:["Talks","Inspiration"],desc:"Curated TED Talks on personal growth, resilience, motivation, leadership, and human potential from world-class thinkers.",logo:"TED",c:"#E62B1E"},
    {name:"Farnam Street",url:"https://fs.blog",badge:"free",tags:["Mental Models","Decision-making"],desc:"Shane Parrish's blog on mental models, decision-making, learning, and clear thinking. One of the highest-quality knowledge sites.",logo:"FS",c:"#2C3E50"},
    {name:"Huberman Lab",url:"https://www.hubermanlab.com",badge:"free",tags:["Neuroscience","Podcast"],desc:"Stanford neuroscientist Andrew Huberman's free podcast covering neuroscience-based tools for everyday performance and wellbeing.",logo:"HL",c:"#E74C3C"}
  ]},
  {id:"journalism",icon:"📰",name:"Journalism & Media",desc:"Resources for reporters, editors, and media literacy learners",resources:[
    {name:"Reuters Journalism Institute",url:"https://reutersinstitute.politics.ox.ac.uk",badge:"free",tags:["Research","Media"],desc:"Oxford's Reuters Institute for the Study of Journalism — free research reports on global media, digital news, and press freedom.",logo:"RI",c:"#FF8000"},
    {name:"Poynter",url:"https://www.poynter.org",badge:"free",tags:["Fact-checking","Ethics"],desc:"Leading journalism education and media news resource. Covers fact-checking, ethics, writing craft, and the business of news.",logo:"PT",c:"#D62828"},
    {name:"Knight Center",url:"https://journalismcourses.org",badge:"free",tags:["Courses","MOOC"],desc:"University of Texas Knight Center's free online journalism courses taught by working journalists and media professionals worldwide.",logo:"KC",c:"#BF5700"},
    {name:"ProPublica Nerds",url:"https://source.opennews.org",badge:"free",tags:["Data Journalism","Code"],desc:"OpenNews Source — tutorials, case studies, and code for data journalists. Learn how newsrooms do investigative data reporting.",logo:"PN",c:"#24282E"},
    {name:"First Draft",url:"https://firstdraftnews.org",badge:"free",tags:["Misinformation","Verification"],desc:"Essential guides and training on detecting misinformation, verifying social media content, and responsible reporting in the digital age.",logo:"FD",c:"#2980B9"},
    {name:"MuckRack",url:"https://muckrack.com",badge:"freemium",tags:["PR","Press Contacts"],desc:"Journalist database and PR platform for finding reporters, pitching stories, tracking media coverage, and monitoring brand mentions.",logo:"MR",c:"#3498DB"}
  ]},
  {id:"edtech",icon:"🎓",name:"Education Technology",desc:"Platforms and tools redefining how we teach and learn online",resources:[
    {name:"Coursera",url:"https://www.coursera.org",badge:"freemium",tags:["University Courses","Certificates"],desc:"Online learning platform with 5K+ courses from 200+ top universities and companies. Audit most courses free; pay for certificates.",logo:"C",c:"#0056D2"},
    {name:"edX",url:"https://www.edx.org",badge:"freemium",tags:["MicroMasters","University"],desc:"Nonprofit online learning from MIT, Harvard, Berkeley, and 160+ institutions. Free audit track for most courses; paid certificates.",logo:"edX",c:"#02262B"},
    {name:"Khan Academy",url:"https://www.khanacademy.org",badge:"free",tags:["K-12","Personalized"],desc:"100% free, world-class education for anyone, anywhere. K-12 through college math, sciences, history, art, and computing.",logo:"KA",c:"#00A86B"},
    {name:"Google for Education",url:"https://edu.google.com",badge:"free",tags:["Classroom","Workspace"],desc:"Free educational tools including Google Classroom, Chromebook resources, and Workspace for Education for teachers and institutions.",logo:"GfE",c:"#4285F4"},
    {name:"Common Sense Education",url:"https://www.commonsense.org/education",badge:"free",tags:["Digital Literacy","Curriculum"],desc:"Free PreK-12 digital citizenship and media literacy curriculum, lesson plans, and app reviews trusted by 1M+ educators.",logo:"CS",c:"#2E7D32"},
    {name:"TeachersPayTeachers",url:"https://www.teacherspayteachers.com",badge:"freemium",tags:["Lesson Plans","Resources"],desc:"Marketplace with 6M+ teacher-created educational resources. Find lesson plans, worksheets, and activities for every grade and subject.",logo:"TPT",c:"#4CAF50"}
  ]},

  // ── STEM ──
  {id:"physics",icon:"⚛️",name:"Physics",desc:"Courses, simulations, and references for students and researchers",resources:[
    {name:"PhET Simulations",url:"https://phet.colorado.edu",badge:"free",tags:["Simulations","Interactive"],desc:"University of Colorado's free interactive physics and science simulations. Run experiments on circuits, waves, motion, and more.",logo:"PhET",c:"#2196F3"},
    {name:"The Feynman Lectures",url:"https://www.feynmanlectures.caltech.edu",badge:"free",tags:["Classical","Quantum"],desc:"Richard Feynman's legendary Caltech physics lectures — all three volumes freely available online, officially published by Caltech.",logo:"FL",c:"#9C27B0"},
    {name:"HyperPhysics",url:"http://hyperphysics.phy-astr.gsu.edu",badge:"free",tags:["Reference","Concepts"],desc:"Georgia State University's concept map-based physics reference. Every physics topic from mechanics to quantum theory with linked diagrams.",logo:"HP",c:"#0097A7"},
    {name:"MIT OpenCourseWare Physics",url:"https://ocw.mit.edu/courses/physics",badge:"free",tags:["MIT Courses","Lectures"],desc:"Free MIT course materials — lectures, problem sets, and exams for 8.01, 8.02, quantum mechanics, and advanced physics topics.",logo:"MIT",c:"#A31F34"},
    {name:"Physics Stack Exchange",url:"https://physics.stackexchange.com",badge:"free",tags:["Q&A","Community"],desc:"Peer-reviewed Q&A for physics students and researchers. Over 200K answered questions across all areas of classical and modern physics.",logo:"PSE",c:"#F48024"},
    {name:"arXiv Physics",url:"https://arxiv.org/archive/physics",badge:"free",tags:["Preprints","Research"],desc:"Cornell's preprint server for physics research. Access cutting-edge papers before formal publication — the standard in physics research.",logo:"arXiv",c:"#B31B1B"}
  ]},
  {id:"chemistry",icon:"🧪",name:"Chemistry",desc:"Resources for organic, inorganic, physical, and analytical chemistry",resources:[
    {name:"ChemLibreTexts",url:"https://chem.libretexts.org",badge:"free",tags:["Textbooks","Open"],desc:"Free, peer-reviewed chemistry textbooks and resources covering general, organic, analytical, inorganic, and physical chemistry.",logo:"CLT",c:"#1E88E5"},
    {name:"PubChem",url:"https://pubchem.ncbi.nlm.nih.gov",badge:"free",tags:["Molecules","Database"],desc:"NCBI's database of 100M+ chemical compounds with structures, properties, biological activities, and safety data for each.",logo:"PC",c:"#00B0A0"},
    {name:"Royal Society of Chemistry",url:"https://www.rsc.org",badge:"freemium",tags:["Journals","Education"],desc:"RSC's education resources, chemistry news, peer-reviewed journals, and the award-winning ChemSpider structure database.",logo:"RSC",c:"#D50000"},
    {name:"ChemDraw (Lite)",url:"https://chemdrawdirect.perkinelmer.cloud",badge:"free",tags:["Structure Drawing","Tools"],desc:"PerkinElmer's ChemDraw Direct — browser-based chemical structure editor used in academic and pharmaceutical research worldwide.",logo:"CD",c:"#6A1B9A"},
    {name:"NIST WebBook",url:"https://webbook.nist.gov",badge:"free",tags:["Thermodynamics","Spectra"],desc:"National Institute of Standards and Technology's free database of thermochemical, spectroscopic, and physical property data.",logo:"NIST",c:"#1565C0"},
    {name:"Khan Academy Chemistry",url:"https://www.khanacademy.org/science/chemistry",badge:"free",tags:["Courses","AP Chem"],desc:"Free structured chemistry curriculum from atomic theory through kinetics, equilibrium, acids and bases, and electrochemistry.",logo:"KA",c:"#00A86B"}
  ]},
  {id:"biology",icon:"🧬",name:"Biology & Life Sciences",desc:"Resources for molecular biology, genetics, ecology, and medical sciences",resources:[
    {name:"NCBI",url:"https://www.ncbi.nlm.nih.gov",badge:"free",tags:["Databases","Genomics"],desc:"National Center for Biotechnology Information — hosts GenBank, PubMed, BLAST, and dozens of essential life science databases.",logo:"NCBI",c:"#326599"},
    {name:"iBiology",url:"https://www.ibiology.org",badge:"free",tags:["Video Lectures","Cell Biology"],desc:"Free video seminars by leading biomedical researchers on cell biology, biochemistry, microscopy, and cutting-edge life science topics.",logo:"iB",c:"#2E7D32"},
    {name:"OpenStax Biology",url:"https://openstax.org/details/books/biology-2e",badge:"free",tags:["Textbook","Open Access"],desc:"Peer-reviewed, openly licensed college-level biology textbook by Rice University. Covers all major biology topics; free to read online.",logo:"OS",c:"#FF6F00"},
    {name:"BioRxiv",url:"https://www.biorxiv.org",badge:"free",tags:["Preprints","Research"],desc:"Cold Spring Harbor Laboratory's preprint server for life sciences. Access biology research before formal peer-reviewed publication.",logo:"bRx",c:"#8B4513"},
    {name:"Scitable by Nature",url:"https://www.nature.com/scitable",badge:"free",tags:["Genetics","Education"],desc:"Nature Education's free genetics and cell biology learning library — 1000+ articles, figures, and animated lessons from Nature editors.",logo:"N",c:"#006699"},
    {name:"Allen Brain Atlas",url:"https://www.brain-map.org",badge:"free",tags:["Neuroscience","Atlas"],desc:"Allen Institute's free, comprehensive gene expression atlas of the mouse and human brain. Essential for neuroscience research.",logo:"ABA",c:"#C62828"}
  ]},
  {id:"mathematics",icon:"📐",name:"Mathematics & Statistics",desc:"Interactive tools and courses for learning and computing mathematics",resources:[
    {name:"Desmos",url:"https://www.desmos.com",badge:"free",tags:["Graphing","Calculus"],desc:"Beautiful, powerful online graphing calculator. Plot functions, create parametric art, explore equations, and share interactive graphs.",logo:"D",c:"#2D70B3"},
    {name:"Brilliant",url:"https://brilliant.org",badge:"freemium",tags:["Problem Solving","Interactive"],desc:"Interactive problem-solving courses in math, science, and CS. Thousands of visual, hands-on problems that build genuine intuition.",logo:"⚡",c:"#FF5500"},
    {name:"Symbolab",url:"https://www.symbolab.com",badge:"freemium",tags:["Step-by-step","Solver"],desc:"Advanced math solver with step-by-step solutions. Covers algebra, calculus, trigonometry, matrices, and statistics.",logo:"SL",c:"#E6422D"},
    {name:"3Blue1Brown",url:"https://www.3blue1brown.com",badge:"free",tags:["Visual Math","Videos"],desc:"Grant Sanderson's legendary YouTube channel explaining linear algebra, calculus, neural networks, and number theory through animations.",logo:"3B1B",c:"#4A4A8A"},
    {name:"Wolfram MathWorld",url:"https://mathworld.wolfram.com",badge:"free",tags:["Reference","Encyclopedia"],desc:"The most extensive mathematical resource online — 13,000+ entries covering every area of mathematics with rigorous definitions.",logo:"MW",c:"#DD1100"},
    {name:"GeoGebra",url:"https://www.geogebra.org",badge:"free",tags:["Geometry","Interactive"],desc:"Free interactive mathematics software for geometry, algebra, statistics, and calculus. Used by 100M+ students and teachers worldwide.",logo:"GG",c:"#8A4182"}
  ]},
  {id:"statistics",icon:"📉",name:"Statistics & Probability",desc:"Courses, tools, and references for mastering statistics",resources:[
    {name:"StatQuest",url:"https://statquest.org",badge:"free",tags:["YouTube","Intuitive"],desc:"Josh Starmer's legendary YouTube series making statistics, machine learning, and bioinformatics genuinely understandable with clear visuals.",logo:"SQ",c:"#4CAF50"},
    {name:"OpenIntro Statistics",url:"https://www.openintro.org/book/stat",badge:"free",tags:["Textbook","Open Source"],desc:"Free, peer-reviewed introductory statistics textbook with videos, exercises, and a fully free PDF download.",logo:"OIS",c:"#1565C0"},
    {name:"R Project",url:"https://www.r-project.org",badge:"free",tags:["R Language","Statistical Computing"],desc:"Free, open-source statistical computing environment. The most powerful tool for statistical analysis, used in academia and industry.",logo:"R",c:"#276DC3"},
    {name:"Seeing Theory",url:"https://seeing-theory.brown.edu",badge:"free",tags:["Visual","Probability"],desc:"Brown University's beautifully animated visual introduction to probability and statistics. Makes abstract concepts instantly clear.",logo:"ST",c:"#E91E63"},
    {name:"Khan Academy Statistics",url:"https://www.khanacademy.org/math/statistics-probability",badge:"free",tags:["Courses","AP Stats"],desc:"Free statistics and probability curriculum from basic probability to hypothesis testing, regression, and AP Statistics exam prep.",logo:"KA",c:"#00A86B"}
  ]},
  {id:"data-science",icon:"📊",name:"Data Science & Analytics",desc:"Platforms and tools for data analysis, visualization, and machine learning",resources:[
    {name:"Kaggle",url:"https://www.kaggle.com",badge:"free",tags:["Datasets","Competitions"],desc:"The world's largest data science community. Free datasets, cloud notebooks, competitions with cash prizes, and structured courses.",logo:"K",c:"#20BEFF"},
    {name:"Google Colab",url:"https://colab.research.google.com",badge:"free",tags:["Python","GPU Free"],desc:"Free Jupyter notebook environment running on Google's cloud with GPU/TPU access. Perfect for ML projects and data analysis.",logo:"GC",c:"#F4B400"},
    {name:"Tableau Public",url:"https://public.tableau.com",badge:"free",tags:["Visualization","Dashboards"],desc:"Create stunning interactive data visualizations and dashboards. Publish publicly for free on Tableau's gallery platform.",logo:"T",c:"#E8762D"},
    {name:"Power BI",url:"https://powerbi.microsoft.com",badge:"freemium",tags:["BI","Reports"],desc:"Microsoft's industry-leading business intelligence platform. Build interactive reports and dashboards from multiple data sources.",logo:"PB",c:"#F2C811"},
    {name:"DBeaver",url:"https://dbeaver.io",badge:"free",tags:["SQL","Databases"],desc:"Free universal database tool supporting 80+ databases. Query, edit, and manage SQL and NoSQL databases with a powerful GUI.",logo:"DB",c:"#3D5AFE"},
    {name:"Metabase",url:"https://www.metabase.com",badge:"freemium",tags:["BI","Self-hosted"],desc:"Open-source business intelligence and analytics platform. Ask questions about your data and share results with your team.",logo:"MB",c:"#509EE3"}
  ]},
  {id:"engineering",icon:"⚙️",name:"Engineering & Technical Tools",desc:"Essential references and tools for engineers across all disciplines",resources:[
    {name:"Wolfram Alpha",url:"https://www.wolframalpha.com",badge:"freemium",tags:["Computation","Math"],desc:"Computational intelligence engine for solving complex math, physics, chemistry, and engineering equations instantly.",logo:"W",c:"#DD1100"},
    {name:"Fusion 360",url:"https://www.autodesk.com/products/fusion-360",badge:"freemium",tags:["CAD","3D Design"],desc:"Industry-standard 3D CAD/CAM/CAE tool by Autodesk for mechanical and product engineers. Free for students and startups.",logo:"F",c:"#E8740A"},
    {name:"MATLAB Online",url:"https://matlab.mathworks.com",badge:"paid",tags:["Simulation","Numerical"],desc:"Industry-standard numerical computing environment for engineers. Run MATLAB in browser with no installation needed.",logo:"M",c:"#E16737"},
    {name:"NPTEL",url:"https://nptel.ac.in",badge:"free",tags:["Courses","IIT/IISc"],desc:"IIT & IISc India's free engineering courses with certifications — Civil, Mechanical, Electrical, CS, Chemical, and more.",logo:"N",c:"#FF6B00"},
    {name:"CircuitLab",url:"https://www.circuitlab.com",badge:"freemium",tags:["Simulation","Electronics"],desc:"Browser-based circuit design and SPICE simulation tool. Build, test, and share circuits without installing any software.",logo:"CL",c:"#2B6CB0"},
    {name:"SketchUp Free",url:"https://app.sketchup.com",badge:"freemium",tags:["3D Modeling","Architecture"],desc:"Intuitive 3D modeling tool used by architects, engineers, and interior designers. Powerful free tier runs entirely in browser.",logo:"S",c:"#00BCD4"}
  ]},
  {id:"astronomy",icon:"🌌",name:"Astronomy & Space Science",desc:"Explore the universe through verified educational tools and databases",resources:[
    {name:"NASA",url:"https://www.nasa.gov",badge:"free",tags:["Space","Official"],desc:"NASA's official site with free mission data, 100,000+ images and videos, citizen science programs, and astronomy news.",logo:"NASA",c:"#0B3D91"},
    {name:"Stellarium Web",url:"https://stellarium-web.org",badge:"free",tags:["Planetarium","Sky Map"],desc:"Free open-source planetarium in your browser. Simulate the night sky anywhere on Earth at any time with 300,000+ stars.",logo:"St",c:"#142A52"},
    {name:"Sky & Telescope",url:"https://skyandtelescope.org",badge:"freemium",tags:["News","Observing"],desc:"The definitive astronomy magazine since 1941. Observing guides, equipment reviews, and the latest astronomical discoveries.",logo:"S&T",c:"#00305C"},
    {name:"NASA ADS",url:"https://ui.adsabs.harvard.edu",badge:"free",tags:["Research","Papers"],desc:"Astrophysics Data System — searchable database of 13M+ astronomy, astrophysics, and geophysics research papers.",logo:"ADS",c:"#1B3D8F"},
    {name:"Zooniverse",url:"https://www.zooniverse.org",badge:"free",tags:["Citizen Science","Classification"],desc:"World's largest citizen science platform. Classify galaxies, discover planets, and contribute to real scientific research from home.",logo:"Zoo",c:"#00979D"},
    {name:"Heavens-Above",url:"https://www.heavens-above.com",badge:"free",tags:["Satellites","ISS Tracking"],desc:"Real-time satellite and ISS pass predictions for your location. Track 15,000+ satellites and get precise overhead flyby times.",logo:"HA",c:"#1A237E"}
  ]},
  {id:"geography",icon:"🗺️",name:"Geography & GIS",desc:"Maps, GIS tools, and spatial data resources for geographers and planners",resources:[
    {name:"Google Earth",url:"https://earth.google.com/web",badge:"free",tags:["Satellite","3D Maps"],desc:"Explore the entire planet in 3D with satellite imagery, 3D terrain, and Street View. Built-in historical imagery going back decades.",logo:"GE",c:"#4285F4"},
    {name:"QGIS",url:"https://qgis.org",badge:"free",tags:["GIS","Open Source"],desc:"The leading free and open-source Geographic Information System. Full-featured GIS for spatial data analysis, mapping, and publishing.",logo:"QGIS",c:"#589632"},
    {name:"OpenStreetMap",url:"https://www.openstreetmap.org",badge:"free",tags:["Mapping","Crowdsourced"],desc:"Free, editable world map built by volunteers. Data is freely usable under an open license. Power behind dozens of major apps.",logo:"OSM",c:"#7EBC6F"},
    {name:"National Geographic Education",url:"https://education.nationalgeographic.org",badge:"free",tags:["Lessons","Maps"],desc:"Free geography lesson plans, interactive maps, and educational resources from National Geographic for K-12 and beyond.",logo:"NG",c:"#FFCC00"}
  ]},
  {id:"public-health",icon:"🧬",name:"Public Health & Epidemiology",desc:"Global health data, epidemiology tools, and public health education",resources:[
    {name:"CDC",url:"https://www.cdc.gov",badge:"free",tags:["Disease Control","Guidelines"],desc:"US Centers for Disease Control — disease surveillance, clinical guidelines, vaccine schedules, and public health statistics.",logo:"CDC",c:"#0033A0"},
    {name:"WHO Health Data",url:"https://www.who.int/data/gho",badge:"free",tags:["WHO Data","Indicators"],desc:"WHO's free global health data repository with 1000+ health indicators covering 194 countries from 1960 to present.",logo:"GHO",c:"#0093D5"},
    {name:"Coursera Public Health",url:"https://www.coursera.org/browse/health/public-health",badge:"freemium",tags:["Courses","Johns Hopkins"],desc:"Johns Hopkins Bloomberg School of Public Health courses on epidemiology, biostatistics, and global health.",logo:"C",c:"#0056D2"},
    {name:"HealthMap",url:"https://www.healthmap.org",badge:"free",tags:["Disease Surveillance","Real-time"],desc:"Harvard Medical School's real-time disease outbreak monitoring dashboard. Track emerging infectious diseases globally.",logo:"HM",c:"#E53935"}
  ]},

  // ── TECHNOLOGY & COMPUTING ──
  {id:"programming",icon:"💻",name:"Programming & Development",desc:"Best platforms to learn, practice, and level up your coding skills",resources:[
    {name:"LeetCode",url:"https://leetcode.com",badge:"freemium",tags:["DSA","Interviews"],desc:"#1 platform for coding interview prep. 3000+ DSA problems, company-specific question banks, weekly contests, mock interviews.",logo:"L",c:"#FFA116"},
    {name:"MDN Web Docs",url:"https://developer.mozilla.org",badge:"free",tags:["Reference","Web Dev"],desc:"Mozilla's definitive reference for HTML, CSS, and JavaScript APIs. The go-to documentation trusted by millions of web developers.",logo:"MDN",c:"#FF6611"},
    {name:"GitHub",url:"https://github.com",badge:"freemium",tags:["Code","Open Source"],desc:"The world's largest code hosting platform. Version control with Git, open source collaboration, CI/CD pipelines, and Copilot AI.",logo:"GH",c:"#8B949E"},
    {name:"freeCodeCamp",url:"https://www.freecodecamp.org",badge:"free",tags:["Curriculum","Certifications"],desc:"Learn to code for free with 3000+ hours of curriculum covering web development, Python, data science, ML, and much more.",logo:"fCC",c:"#0A0A23"},
    {name:"The Odin Project",url:"https://www.theodinproject.com",badge:"free",tags:["Full Stack","Projects"],desc:"Free open-source full-stack web development curriculum. Build real projects in HTML, CSS, JavaScript, Node.js, and Ruby.",logo:"OP",c:"#D24315"},
    {name:"Replit",url:"https://replit.com",badge:"freemium",tags:["IDE","Collaborative"],desc:"Browser-based IDE supporting 50+ languages. Code, run, and deploy apps without any local setup. Great for beginners and teams.",logo:"R",c:"#F26207"}
  ]},
  {id:"ai-ml",icon:"🤖",name:"AI & Machine Learning",desc:"Cutting-edge tools and platforms for AI development and research",resources:[
    {name:"Hugging Face",url:"https://huggingface.co",badge:"free",tags:["Models","NLP"],desc:"The GitHub of Machine Learning — 500K+ open models, datasets, and demo spaces. Hub for the entire open-source AI community.",logo:"🤗",c:"#FF9D0A"},
    {name:"Papers With Code",url:"https://paperswithcode.com",badge:"free",tags:["Research","SOTA"],desc:"Every major ML paper with linked open-source code implementations. Track state-of-the-art benchmarks across every AI task.",logo:"PC",c:"#21CBCE"},
    {name:"DeepLearning.AI",url:"https://www.deeplearning.ai",badge:"freemium",tags:["Courses","Certificates"],desc:"Andrew Ng's world-famous AI education platform. Deep learning specializations, MLOps, and NLP courses used by 5M+ learners.",logo:"DL",c:"#0062FF"},
    {name:"Google AI Studio",url:"https://aistudio.google.com",badge:"free",tags:["Gemini","Prototyping"],desc:"Free browser-based tool to prototype with Google's Gemini models. Test prompts, build AI apps, and export to production APIs.",logo:"GAS",c:"#4285F4"},
    {name:"fast.ai",url:"https://www.fast.ai",badge:"free",tags:["Practical DL","PyTorch"],desc:"Free top-down practical deep learning courses. World-renowned for making state-of-the-art AI accessible to programmers.",logo:"fi",c:"#FF7F00"},
    {name:"Weights & Biases",url:"https://wandb.ai",badge:"freemium",tags:["MLOps","Experiment Tracking"],desc:"The leading platform for ML experiment tracking, model versioning, dataset management, and collaborative model reports.",logo:"W&B",c:"#FFBE00"}
  ]},
  {id:"cybersecurity",icon:"🔒",name:"Cybersecurity",desc:"Hands-on labs and references for security learners and professionals",resources:[
    {name:"TryHackMe",url:"https://tryhackme.com",badge:"freemium",tags:["Hands-on","Beginner"],desc:"Browser-based cybersecurity learning platform with guided rooms covering networks, web hacking, malware analysis, and more.",logo:"THM",c:"#1DB954"},
    {name:"Hack The Box",url:"https://www.hackthebox.com",badge:"freemium",tags:["Pentesting","CTF"],desc:"Elite hacking labs used by professionals, red teams, and CTF competitors. Machines, Pro Labs, and Academy learning paths.",logo:"HTB",c:"#2D7D00"},
    {name:"OWASP",url:"https://owasp.org",badge:"free",tags:["Web Security","Reference"],desc:"Open Web Application Security Project — definitive reference for the OWASP Top 10, testing guides, and secure development.",logo:"OW",c:"#004F7C"},
    {name:"Cybrary",url:"https://www.cybrary.it",badge:"freemium",tags:["Certifications","Career"],desc:"Structured training paths for CompTIA Security+, CEH, CISSP, and OSCP certifications. Industry-recognized courses.",logo:"Cy",c:"#0078D4"},
    {name:"PortSwigger Web Academy",url:"https://portswigger.net/web-security",badge:"free",tags:["Web Hacking","Labs"],desc:"Free online labs from the creators of Burp Suite covering every web vulnerability — SQLi, XSS, SSRF, JWT attacks, and more.",logo:"PS",c:"#FF6633"},
    {name:"SANS Internet Stormcast",url:"https://isc.sans.edu",badge:"free",tags:["Threat Intel","Daily"],desc:"Daily threat intelligence podcast and dashboard from SANS Institute. Monitor real-time internet threats, exploits, and vulnerabilities.",logo:"SANS",c:"#003366"}
  ]},
  {id:"devops",icon:"🔧",name:"DevOps & Cloud Infrastructure",desc:"Infrastructure, CI/CD, containers, and cloud computing resources",resources:[
    {name:"AWS Free Tier",url:"https://aws.amazon.com/free",badge:"freemium",tags:["Cloud","AWS"],desc:"Amazon Web Services' free tier gives 12 months of 60+ services including EC2, S3, RDS, and Lambda — perfect for learning.",logo:"AWS",c:"#FF9900"},
    {name:"Docker",url:"https://docs.docker.com",badge:"free",tags:["Containers","DevOps"],desc:"Official Docker documentation and learning resources. Master containerization, Docker Compose, and container orchestration fundamentals.",logo:"D",c:"#2496ED"},
    {name:"GitHub Actions",url:"https://docs.github.com/en/actions",badge:"freemium",tags:["CI/CD","Automation"],desc:"GitHub's workflow automation platform. Build, test, and deploy code with free CI/CD minutes for public and private repos.",logo:"GHA",c:"#2088FF"},
    {name:"Kubernetes",url:"https://kubernetes.io/docs/home",badge:"free",tags:["Orchestration","K8s"],desc:"Official Kubernetes docs and interactive tutorials. Learn container orchestration from the source for production deployments.",logo:"K8s",c:"#326CE5"},
    {name:"Terraform",url:"https://developer.hashicorp.com/terraform",badge:"free",tags:["IaC","HashiCorp"],desc:"HashiCorp's official Terraform docs for infrastructure as code across AWS, Azure, GCP, and 300+ providers.",logo:"TF",c:"#7B42BC"},
    {name:"Linux Foundation Training",url:"https://training.linuxfoundation.org",badge:"freemium",tags:["Linux","CKA"],desc:"Official Linux Foundation training for LFCS, CKA, CKAD, and CKS certifications. Free intro courses alongside paid paths.",logo:"LF",c:"#003366"}
  ]},
  {id:"cloud-computing",icon:"☁️",name:"Cloud Computing",desc:"Learn AWS, Azure, Google Cloud, and cloud architecture fundamentals",resources:[
    {name:"AWS Skill Builder",url:"https://skillbuilder.aws",badge:"freemium",tags:["AWS","Certifications"],desc:"Official AWS training platform with 500+ free courses covering all AWS services. Prep for Solutions Architect, Developer, and more.",logo:"AWS",c:"#FF9900"},
    {name:"Microsoft Learn",url:"https://learn.microsoft.com",badge:"free",tags:["Azure","Microsoft 365"],desc:"Microsoft's free learning platform with guided paths for Azure certifications, Power Platform, Microsoft 365, and GitHub.",logo:"ML",c:"#00A4EF"},
    {name:"Google Cloud Training",url:"https://cloud.google.com/training",badge:"freemium",tags:["GCP","Data Engineering"],desc:"Official Google Cloud learning platform with free introductory courses and lab environments for GCP certifications.",logo:"GCP",c:"#4285F4"},
    {name:"LinuxCommand.org",url:"https://linuxcommand.org",badge:"free",tags:["Linux","Shell Scripting"],desc:"William Shotts' comprehensive guide to the Linux command line. Covers bash scripting, file management, and system administration.",logo:"LC",c:"#000000"}
  ]},
  {id:"networking",icon:"🕸️",name:"Computer Networking",desc:"Courses and references for network engineering, protocols, and certification",resources:[
    {name:"Cisco Learning Network",url:"https://learningnetwork.cisco.com",badge:"freemium",tags:["CCNA","Cisco"],desc:"Official Cisco learning community for CCNA, CCNP, and CCIE exam prep. Free community resources plus paid official courseware.",logo:"Cisco",c:"#049FD9"},
    {name:"Network Chuck",url:"https://networkchuck.com",badge:"free",tags:["YouTube","CCNA"],desc:"Highly engaging free networking content on YouTube covering CCNA, Linux, Python for NetOps, hacking, and cloud fundamentals.",logo:"NC",c:"#FF3B3B"},
    {name:"Cloudflare Learning Center",url:"https://www.cloudflare.com/learning",badge:"free",tags:["Protocols","Security"],desc:"Free deep-dive articles on DNS, HTTP, TLS, CDN, BGP, DDoS, and how the internet works — written for developers and students.",logo:"CF",c:"#F6821F"},
    {name:"Professor Messer",url:"https://www.professormesser.com",badge:"free",tags:["CompTIA","Network+"],desc:"Free video training for CompTIA Network+, Security+, and A+ certifications. 100% free video library with high pass rates.",logo:"PM",c:"#2196F3"}
  ]},
  {id:"mobile-dev",icon:"📱",name:"Mobile App Development",desc:"iOS, Android, and cross-platform mobile development resources",resources:[
    {name:"Apple Developer Documentation",url:"https://developer.apple.com/documentation",badge:"free",tags:["iOS","Swift"],desc:"Official Apple developer docs for Swift, SwiftUI, UIKit, and all Apple frameworks. Required reading for any iOS/macOS developer.",logo:"AP",c:"#000000"},
    {name:"Android Developers",url:"https://developer.android.com",badge:"free",tags:["Android","Kotlin"],desc:"Official Android developer documentation with guides, API references, codelabs, and training for building Android apps in Kotlin.",logo:"And",c:"#3DDC84"},
    {name:"Flutter Dev",url:"https://flutter.dev/docs",badge:"free",tags:["Cross-platform","Dart"],desc:"Google's official Flutter docs for building native-quality iOS, Android, web, and desktop apps from a single Dart codebase.",logo:"Fl",c:"#54C5F8"},
    {name:"React Native",url:"https://reactnative.dev",badge:"free",tags:["Cross-platform","JavaScript"],desc:"Official React Native docs for building mobile apps for iOS and Android using JavaScript and React. Meta's open-source framework.",logo:"RN",c:"#61DAFB"}
  ]},
  {id:"blockchain",icon:"⛓️",name:"Blockchain & Web3",desc:"Learn blockchain development, DeFi, NFTs, and smart contract programming",resources:[
    {name:"CryptoZombies",url:"https://cryptozombies.io",badge:"free",tags:["Solidity","Learn-to-Code"],desc:"Free gamified course for learning Solidity smart contract development by building a zombie game on Ethereum. 400K+ learners.",logo:"CZ",c:"#B388FF"},
    {name:"Ethereum.org Learn",url:"https://ethereum.org/en/learn",badge:"free",tags:["Ethereum","Smart Contracts"],desc:"Official Ethereum learning hub with curated guides for developers, validators, and users. Start from beginner to advanced DApp dev.",logo:"ETH",c:"#627EEA"},
    {name:"Alchemy University",url:"https://university.alchemy.com",badge:"free",tags:["Ethereum Dev","Full Stack"],desc:"Free 6-week Ethereum Developer Bootcamp and Road to Web3 challenges. Taught by leading blockchain engineers at Alchemy.",logo:"AU",c:"#4B69FF"},
    {name:"DeFi Llama",url:"https://defillama.com",badge:"free",tags:["DeFi","Analytics"],desc:"Real-time TVL tracking, protocol analytics, and DeFi data across 50+ blockchain networks. Essential dashboard for DeFi research.",logo:"DFL",c:"#5CC8FF"},
    {name:"OpenZeppelin",url:"https://docs.openzeppelin.com",badge:"free",tags:["Smart Contracts","Security"],desc:"Industry-standard audited smart contract library for Ethereum. OpenZeppelin Contracts are used in billions of dollars of protocols.",logo:"OZ",c:"#4DD0E1"},
    {name:"Etherscan",url:"https://etherscan.io",badge:"free",tags:["Explorer","Analytics"],desc:"The leading block explorer and analytics platform for Ethereum. Track transactions, contracts, wallet addresses, and token transfers.",logo:"ES",c:"#3498DB"}
  ]},
  {id:"social-sciences",icon:"🏛️",name:"Social Sciences",desc:"Sociology, anthropology, political science, and social research resources",resources:[
    {name:"JSTOR",url:"https://www.jstor.org",badge:"freemium",tags:["Academic","Journals"],desc:"Digital library of 12M+ academic articles across social sciences, humanities, and natural sciences from 2K+ publishers.",logo:"JS",c:"#8B4513"},
    {name:"Pew Research Center",url:"https://www.pewresearch.org",badge:"free",tags:["Survey Data","Trends"],desc:"Nonpartisan fact tank providing free polling data, demographic research, and analysis on social issues, public opinion, and trends.",logo:"PEW",c:"#1B6CA8"},
    {name:"SocArXiv",url:"https://osf.io/preprints/socarxiv",badge:"free",tags:["Preprints","Open Access"],desc:"Open archive of social science research papers. Free preprints across sociology, political science, economics, and related fields.",logo:"SA",c:"#338FFF"},
    {name:"World Bank Open Data",url:"https://data.worldbank.org",badge:"free",tags:["Development","Global Data"],desc:"Free access to World Bank's comprehensive development data — 16K+ indicators across 200+ countries on poverty, health, and education.",logo:"WB",c:"#0066CC"},
    {name:"Google Scholar",url:"https://scholar.google.com",badge:"free",tags:["Academic Search","Citations"],desc:"Search across academic journals, theses, books, abstracts, and court opinions. Find and track citations across social science fields.",logo:"GS",c:"#4285F4"}
  ]}
];


// ===== HELPER FUNCTIONS (single declaration) =====
function hexRgba(h,a){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return `rgba(${r},${g},${b},${a})`;}

function makeCard(r){
  const bc=r.badge==='free'?'badge-free':r.badge==='freemium'?'badge-freemium':'badge-paid';
  const isEmoji=/\p{Emoji}/u.test(r.logo||'');
  const ls=isEmoji?`background:rgba(255,255,255,.05);font-size:1.2rem;`:`background:${hexRgba(r.c||'#3B82F6',.12)};color:${r.c||'#60A5FA'};font-size:${r.logo&&r.logo.length>2?'.65rem':'.88rem'};`;
  return `<a class="res-card" href="${r.url}" target="_blank" rel="noopener">
    <div class="rc-top">
      <div class="rc-logo" style="${ls}">${r.logo||r.name.slice(0,2)}</div>
      <span class="rc-badge ${bc}">${r.badge}</span>
    </div>
    <div class="rc-name">${r.name}</div>
    <div class="rc-desc">${r.desc}</div>
    <div class="rc-footer">
      <div class="rc-tags">${r.tags.map(t=>`<span class="rc-tag">${t}</span>`).join('')}</div>
      <span class="rc-link">Visit ↗</span>
    </div>
  </a>`;
}

function buildContent(){
  const main=document.getElementById('main-content');
  if(!main) return;
  main.innerHTML=FIELDS.map(f=>`
    <section class="field-section" data-field="${f.id}" id="f-${f.id}">
      <div class="field-header">
        <div class="field-icon-wrap">${f.icon}</div>
        <div><div class="field-title">${f.name}</div><div class="field-sub">${f.desc}</div></div>
      </div>
      <div class="res-grid">${f.resources.map(r=>makeCard(r)).join('')}</div>
    </section>`).join('');
  revealObserve();
}

function filterField(id,btn){
  document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.field-section').forEach(s=>{
    s.style.display=id==='all'||s.dataset.field===id?'':'none';
  });
  if(id!=='all'){const el=document.getElementById('f-'+id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
}

function revealObserve(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target);}
    });
  },{threshold:.08});
  document.querySelectorAll('.field-section').forEach(el=>obs.observe(el));

  const cardObs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){setTimeout(()=>e.target.classList.add('rev'),i*40);cardObs.unobserve(e.target);}
    });
  },{threshold:.05});
  document.querySelectorAll('.res-card').forEach(el=>cardObs.observe(el));
}

// ===== PARTICLE SYSTEM (single instance) =====
const pc=document.getElementById('pc'),pctx=pc&&pc.getContext('2d');
let PW=0,PH=0,pparts=[];
function pResize(){if(pc){PW=pc.width=window.innerWidth;PH=pc.height=window.innerHeight;}}
pResize();window.addEventListener('resize',pResize);
class PP{
  constructor(){this.reset();}
  reset(){this.x=Math.random()*PW;this.y=Math.random()*PH;this.vx=(Math.random()-.5)*.25;this.vy=-(Math.random()*.35+.08);this.s=Math.random()*1.5+.4;this.life=0;this.max=Math.random()*180+80;this.col=Math.random()>.5?'rgba(59,130,246,':'rgba(16,185,129,';this.a=Math.random()*.35+.1;}
  update(){this.x+=this.vx;this.y+=this.vy;this.life++;if(this.life>this.max)this.reset();}
  draw(){if(!pctx)return;pctx.beginPath();pctx.arc(this.x,this.y,this.s,0,Math.PI*2);pctx.fillStyle=this.col+(this.a*(1-this.life/this.max))+')';pctx.fill();}
}
if(pc){for(let i=0;i<70;i++)pparts.push(new PP());(function anim(){if(!pctx)return;pctx.clearRect(0,0,PW,PH);pparts.forEach(p=>{p.update();p.draw();});requestAnimationFrame(anim);})();}

// ===== COUNTER ANIMATION =====
function animateCounter(el){
  const target=parseInt(el.dataset.target);const duration=1800;const start=performance.now();
  function step(now){const prog=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-prog,3);el.textContent=Math.round(eased*target);if(prog<1)requestAnimationFrame(step);}
  requestAnimationFrame(step);
}
const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target);cObs.unobserve(e.target);}});});
document.querySelectorAll('.counter').forEach(c=>cObs.observe(c));

// ===== CTA STAR TWINKLE =====
(function(){
  const sc=document.getElementById('cta-stars');if(!sc)return;
  const sx=sc.getContext('2d');const SW=sc.width,SH=sc.height;
  const stars=Array.from({length:14},()=>({x:Math.random()*SW,y:Math.random()*SH,r:Math.random()*.9+.3,phase:Math.random()*Math.PI*2,speed:Math.random()*.04+.02,hue:Math.floor(Math.random()*3)}));
  const COLS=['rgba(253,230,138,','rgba(187,247,208,','rgba(186,230,253,'];
  let t=0;
  function drawStars(){
    sx.clearRect(0,0,SW,SH);t++;
    stars.forEach(s=>{
      const alpha=.15+.65*(.5+.5*Math.sin(s.phase+t*s.speed));
      sx.beginPath();sx.arc(s.x,s.y,s.r,0,Math.PI*2);sx.fillStyle=COLS[s.hue]+alpha.toFixed(3)+')';sx.fill();
      if(s.r>.9&&alpha>.55){sx.strokeStyle=COLS[s.hue]+(alpha*.6).toFixed(3)+')';sx.lineWidth=.5;sx.beginPath();sx.moveTo(s.x-s.r*2.5,s.y);sx.lineTo(s.x+s.r*2.5,s.y);sx.moveTo(s.x,s.y-s.r*2.5);sx.lineTo(s.x,s.y+s.r*2.5);sx.stroke();}
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
})();

// ===== NEURAL NETWORK ANIMATION =====
(function(){
  const nc = document.getElementById('neural-canvas');
  if(!nc) return;
  const nx = nc.getContext('2d');
  let NW, NH;
  function resizeNeural(){
    NW = nc.width  = nc.offsetWidth;
    NH = nc.height = nc.offsetHeight;
  }
  resizeNeural();
  window.addEventListener('resize', resizeNeural);

  const EMERALD  = '#12926B';
  const EMERALD2 = '#0B6E4F';
  const LAYERS = [3, 6, 8, 6, 3];
  const LAYER_COUNT = LAYERS.length;

  function buildNodes(){
    const nodes = [];
    const paddingX = NW * 0.10;
    const paddingY = NH * 0.12;
    const usableW  = NW - paddingX * 2;
    const usableH  = NH - paddingY * 2;
    const xStep = usableW / (LAYER_COUNT - 1);
    LAYERS.forEach((count, li) => {
      const x = paddingX + li * xStep;
      const yStep = count > 1 ? usableH / (count - 1) : 0;
      for(let ni = 0; ni < count; ni++){
        const y = count > 1 ? paddingY + ni * yStep : NH / 2;
        nodes.push({
          x, y,
          layer: li, idx: ni,
          baseX: x, baseY: y,
          r: 5 + Math.random() * 3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.012 + Math.random() * 0.018,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.025 + Math.random() * 0.02,
          active: false,
          activeFade: 0
        });
      }
    });
    return nodes;
  }

  function buildEdges(nodes){
    const edges = [];
    let layerStart = [];
    let cumIdx = 0;
    LAYERS.forEach((count) => {
      layerStart.push(cumIdx);
      cumIdx += count;
    });
    for(let li = 0; li < LAYER_COUNT - 1; li++){
      const aStart = layerStart[li], aCount = LAYERS[li];
      const bStart = layerStart[li+1], bCount = LAYERS[li+1];
      for(let ai = 0; ai < aCount; ai++){
        for(let bi = 0; bi < bCount; bi++){
          edges.push({
            from: aStart + ai,
            to: bStart + bi,
            weight: Math.random(),
            pulseT: Math.random(),
            pulseSpeed: 0.003 + Math.random() * 0.005,
            active: false,
            activeFade: 0
          });
        }
      }
    }
    return edges;
  }

  let nodes = buildNodes();
  let edges = buildEdges(nodes);
  let signalCooldown = 0;
  const SIGNAL_INTERVAL = 90;

  function fireSignal(){
    const inputNodes = nodes.filter(n => n.layer === 0);
    const src = inputNodes[Math.floor(Math.random() * inputNodes.length)];
    src.active = true;
    src.activeFade = 1;
    function cascade(node, delay){
      setTimeout(() => {
        edges.forEach(e => {
          if(e.from === nodes.indexOf(node)){
            e.active = true; e.activeFade = 1; e.pulseT = 0;
            const target = nodes[e.to];
            if(target) cascade(target, 80 + Math.random()*60);
          }
        });
        node.active = true; node.activeFade = 1;
      }, delay);
    }
    cascade(src, 0);
  }

  let frame = 0;
  function drawNeural(){
    NW = nc.width  = nc.offsetWidth;
    NH = nc.height = nc.offsetHeight;
    nx.clearRect(0, 0, NW, NH);

    frame++;
    if(frame % 120 === 0) nodes = buildNodes(), edges = buildEdges(nodes);

    signalCooldown--;
    if(signalCooldown <= 0){ fireSignal(); signalCooldown = SIGNAL_INTERVAL; }

    edges.forEach(e => {
      const a = nodes[e.from], b = nodes[e.to];
      if(!a || !b) return;
      const baseAlpha = 0.08 + e.weight * 0.07;
      const activeAlpha = e.activeFade * 0.55;
      const alpha = baseAlpha + activeAlpha;

      nx.beginPath();
      nx.moveTo(a.x, a.y);
      nx.lineTo(b.x, b.y);
      const grad = nx.createLinearGradient(a.x, a.y, b.x, b.y);
      grad.addColorStop(0, 'rgba(11,110,79,'+alpha+')');
      grad.addColorStop(1, 'rgba(18,146,107,'+alpha+')');
      nx.strokeStyle = grad;
      nx.lineWidth = e.activeFade > 0.3 ? 1.2 : 0.7;
      nx.stroke();

      if(e.active){
        e.pulseT += e.pulseSpeed;
        if(e.pulseT >= 1){ e.pulseT = 0; e.active = false; }
        const px = a.x + (b.x - a.x) * e.pulseT;
        const py = a.y + (b.y - a.y) * e.pulseT;
        nx.beginPath();
        nx.arc(px, py, 2.8, 0, Math.PI * 2);
        const pAlpha = e.activeFade * (1 - Math.abs(e.pulseT - 0.5) * 1.2);
        nx.fillStyle = 'rgba(18,200,130,'+Math.max(0,pAlpha)+')';
        nx.fill();
      }

      if(e.activeFade > 0) e.activeFade = Math.max(0, e.activeFade - 0.008);
    });

    nodes.forEach(n => {
      const bobX = Math.sin(n.phase + frame * n.speed) * 3;
      const bobY = Math.cos(n.phase + frame * n.speed * 0.7) * 4;
      n.x = n.baseX + bobX;
      n.y = n.baseY + bobY;

      const pulse = 0.5 + 0.5 * Math.sin(n.pulsePhase + frame * n.pulseSpeed);
      const glowR = n.r + 4 + pulse * 6 + n.activeFade * 8;

      const glowGrad = nx.createRadialGradient(n.x, n.y, n.r * 0.5, n.x, n.y, glowR);
      const glowAlpha = 0.07 + pulse * 0.09 + n.activeFade * 0.4;
      glowGrad.addColorStop(0, 'rgba(18,146,107,'+glowAlpha+')');
      glowGrad.addColorStop(1, 'rgba(18,146,107,0)');
      nx.beginPath();
      nx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
      nx.fillStyle = glowGrad;
      nx.fill();

      const coreGrad = nx.createRadialGradient(n.x - 1, n.y - 1, 0, n.x, n.y, n.r);
      const brightness = 0.55 + pulse * 0.2 + n.activeFade * 0.35;
      coreGrad.addColorStop(0, 'rgba(100,220,170,'+brightness+')');
      coreGrad.addColorStop(0.6, 'rgba(18,146,107,'+(brightness * 0.85)+')');
      coreGrad.addColorStop(1, 'rgba(11,110,79,'+(brightness * 0.6)+')');
      nx.beginPath();
      nx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      nx.fillStyle = coreGrad;
      nx.fill();

      nx.beginPath();
      nx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      nx.strokeStyle = 'rgba(18,200,130,'+(0.3 + n.activeFade * 0.5)+')';
      nx.lineWidth = 0.8;
      nx.stroke();

      if(n.activeFade > 0) n.activeFade = Math.max(0, n.activeFade - 0.012);
    });

    const outputNodes = nodes.filter(n => n.layer === LAYER_COUNT - 1);
    outputNodes.forEach((n, i) => {
      if(n.activeFade > 0.3){
        nx.globalAlpha = n.activeFade * 0.9;
        nx.font = 'bold 9px Manrope, system-ui, sans-serif';
        nx.fillStyle = '#12926B';
        const labels = ['MATCH','PATH','GOAL'];
        nx.fillText(labels[i % 3], n.x + n.r + 6, n.y + 4);
        nx.globalAlpha = 1;
      }
    });

    requestAnimationFrame(drawNeural);
  }
  drawNeural();
})();

// ===== CAROUSEL =====
const track   = document.getElementById('carousel-track');
const cards   = track ? Array.from(track.querySelectorAll('.sector-card')) : [];
const dotsWrap= document.getElementById('car-dots');
const counter = document.getElementById('car-counter');
let current   = 0;
const TOTAL   = cards.length;
const GAP     = 32;

const AUTO_DELAY  = 3500;
const PAUSE_AFTER = 8000;
let autoTimer  = null;
let pauseTimer = null;

function startAuto(){
  clearInterval(autoTimer);
  autoTimer = setInterval(()=>{
    goTo((current + 1) % TOTAL);
  }, AUTO_DELAY);
}

function pauseAuto(){
  clearInterval(autoTimer);
  clearTimeout(pauseTimer);
  pauseTimer = setTimeout(startAuto, PAUSE_AFTER);
}

if(cards.length && dotsWrap){
  cards.forEach((_,i)=>{
    const d=document.createElement('button');
    d.className='car-dot'+(i===0?' active':'');
    d.setAttribute('aria-label','Sector '+(i+1));
    d.addEventListener('click',()=>{ goTo(i); pauseAuto(); });
    dotsWrap.appendChild(d);
  });
}

function carLayout(){
  if(!cards.length) return;
  const cw = cards[0].offsetWidth;
  const vw = track.parentElement.offsetWidth;
  const offset = (vw/2) - (cw/2) - current*(cw+GAP);
  track.style.transform='translateX('+offset+'px)';
}

function goTo(idx){
  if(!TOTAL) return;
  current = ((idx % TOTAL) + TOTAL) % TOTAL;
  cards.forEach((c,i)=>{c.classList.toggle('active',i===current);});
  document.querySelectorAll('.car-dot').forEach((d,i)=>{d.classList.toggle('active',i===current);});
  if(counter) counter.innerHTML='<em>'+(current+1)+'</em> / '+TOTAL;
  carLayout();
}

if(track){
  const prevBtn=document.getElementById('car-prev');
  const nextBtn=document.getElementById('car-next');
  if(prevBtn) prevBtn.addEventListener('click',()=>{ goTo(current-1); pauseAuto(); });
  if(nextBtn) nextBtn.addEventListener('click',()=>{ goTo(current+1); pauseAuto(); });

  document.addEventListener('keydown',e=>{
    // don't hijack arrow keys while the user is typing (e.g. in the search box)
    if(e.target && e.target.closest && e.target.closest('input,textarea,select,[contenteditable="true"],[role="listbox"]')) return;
    if(e.key==='ArrowRight'){ goTo(current+1); pauseAuto(); }
    if(e.key==='ArrowLeft') { goTo(current-1); pauseAuto(); }
  });

  let tx0=null;
  track.addEventListener('touchstart',e=>{tx0=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{
    if(tx0===null)return;
    const dx=e.changedTouches[0].clientX-tx0;
    if(Math.abs(dx)>50){ dx<0?goTo(current+1):goTo(current-1); pauseAuto(); }
    tx0=null;
  },{passive:true});

  cards.forEach((c,i)=>{
    c.addEventListener('click',e=>{
      if(i!==current){e.preventDefault(); goTo(i); pauseAuto();}
    });
  });

  goTo(0);
  window.addEventListener('load',()=>{ goTo(current); startAuto(); });
  startAuto();
}

// ===== INITIALIZATION =====
if(document.getElementById('main-content')){
  buildContent();
}


// ─────────────────────────────────────────────────────────────
// REDESIGN ENHANCEMENTS (home + sector pages)
// Runs only on pages whose <body> has class "riq"; everything else in
// this file behaves exactly as before.
// ─────────────────────────────────────────────────────────────
(function(){
  const body = document.body;
  if(!body || !body.classList.contains('riq')) return;

  // Which sector page each field lives on (matches the sector cards)
  const SECTORS = [
    {key:'stem',      name:'STEM & Sciences',        href:'sector-stem.html',      ids:['physics','chemistry','biology','mathematics','data-science','engineering','statistics','astronomy','geography','public-health']},
    {key:'tech',      name:'Tech & Digital',         href:'sector-tech.html',      ids:['programming','ai-ml','cybersecurity','devops','cloud-computing','networking','mobile-dev','blockchain','robotics','open-source']},
    {key:'creative',  name:'Creative & Humanities',  href:'sector-creative.html',  ids:['design','writing','music','photography','film','art','architecture','literature']},
    {key:'social',    name:'Social & Professional',  href:'sector-social.html',    ids:['business','law','economics','finance','social-sciences','marketing','journalism','edtech','psychology','self-dev']},
    {key:'lifestyle', name:'Learning & Lifestyle',   href:'sector-lifestyle.html', ids:['academic','languages','history','philosophy','game-dev','fitness','cooking','wellness','ux-research','travel']}
  ];
  const sectorOf = {};
  SECTORS.forEach(s => s.ids.forEach(id => sectorOf[id] = s));
  const esc = str => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── STICKY NAV STATE ──
  const nav = document.querySelector('nav');
  const onScroll = () => { if(nav) nav.classList.toggle('scrolled', window.scrollY > 12); };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // ── MOBILE MENU ──
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  function setMenu(open){
    if(!toggle || !menu || !nav) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('menu-open', open);
    menu.hidden = !open;
  }
  if(toggle && menu){
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', e => { if(e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if(window.innerWidth > 980) setMenu(false); });
  }

  // ── SEARCH ACCESS (nav button, "/" and Ctrl/⌘ K) — each page registers its own search ──
  let focusSearch = null;
  document.querySelectorAll('[data-open-search]').forEach(b => b.addEventListener('click', () => {
    setMenu(false); if(focusSearch) focusSearch();
  }));
  document.addEventListener('keydown', e => {
    if(!focusSearch) return;
    const typing = e.target.closest && e.target.closest('input,textarea,select,[contenteditable="true"]');
    if((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)){ e.preventDefault(); focusSearch(); }
    else if(e.key === '/' && !typing){ e.preventDefault(); focusSearch(); }
  });
  const kbd = document.getElementById('search-kbd');
  if(kbd && /Mac|iPhone|iPad/.test(navigator.platform || '')) kbd.textContent = '⌘K';

  // ── ACTIVE NAV LINK WHILE SCROLLING (same-page anchors only) ──
  const navLinks = Array.from(document.querySelectorAll('.nav-center .nav-link[href^="#"]'));
  const sections = navLinks.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  if('IntersectionObserver' in window && sections.length){
    const so = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if(!en.isIntersecting) return;
        navLinks.forEach(a => {
          const on = a.getAttribute('href') === '#' + en.target.id;
          a.classList.toggle('is-current', on);
          if(on) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-45% 0px -50% 0px'});
    sections.forEach(s => so.observe(s));
  }

  if(body.classList.contains('home'))   initHome();
  if(body.classList.contains('sector')) initSector();

  // ═══════════════════════════ HOME ═══════════════════════════
  function initHome(){
    // Field index (Explore section), built from FIELDS so counts stay accurate
    const fieldIndex = document.getElementById('field-index');
    if(fieldIndex && typeof FIELDS !== 'undefined'){
      const byId = {}; FIELDS.forEach(f => byId[f.id] = f);
      fieldIndex.innerHTML = SECTORS.map(s => {
        const fields = s.ids.map(id => byId[id]).filter(Boolean);
        const total = fields.reduce((n,f) => n + f.resources.length, 0);
        return `<div class="fi-col">
          <a class="fi-head" href="${s.href}" target="_blank">
            <span class="fi-name">${esc(s.name)}</span>
            <span class="fi-total">${total} resources</span>
          </a>
          <ul class="fi-list">${fields.map(f => `
            <li><a href="${s.href}" target="_blank" data-field="${f.id}">
              <span class="fi-ico" aria-hidden="true">${f.icon}</span>
              <span class="fi-label">${esc(f.name)}</span>
              <span class="fi-count">${f.resources.length}</span>
            </a></li>`).join('')}
          </ul>
        </div>`;
      }).join('');
    }

    // Resource search across every resource in FIELDS
    const input   = document.getElementById('hero-search-input');
    const results = document.getElementById('hero-search-results');
    const status  = document.getElementById('hero-search-status');
    const clearBt = document.getElementById('hero-search-clear');
    if(!input || !results || typeof FIELDS === 'undefined') return;

    const INDEX = [];
    FIELDS.forEach(f => f.resources.forEach(r => {
      INDEX.push({
        r, field:f, sector:sectorOf[f.id] || null,
        name:r.name.toLowerCase(),
        tags:(r.tags || []).join(' ').toLowerCase(),
        fieldName:f.name.toLowerCase(),
        desc:(r.desc || '').toLowerCase()
      });
    }));

    const setPlaceholder = () => {
      input.placeholder = window.innerWidth < 600
        ? `Search ${INDEX.length} resources`
        : `Search ${INDEX.length} resources — try "python", "figma" or "statistics"`;
    };
    setPlaceholder(); window.addEventListener('resize', setPlaceholder);

    let activeIdx = -1, current = [];

    function score(item, terms){
      let s = 0;
      for(const t of terms){
        let hit = 0;
        if(item.name.startsWith(t)) hit = 6;
        else if(item.name.includes(t)) hit = 4;
        else if(item.tags.includes(t)) hit = 3;
        else if(item.fieldName.includes(t)) hit = 2;
        else if(item.desc.includes(t)) hit = 1;
        if(!hit) return 0;            // every word must match somewhere
        s += hit;
      }
      return s;
    }

    function search(q){
      const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
      if(!terms.length) return [];
      const seen = new Set();
      return INDEX
        .map(it => ({it, s:score(it, terms)}))
        .filter(x => x.s > 0)
        .sort((a,b) => b.s - a.s || a.it.r.name.localeCompare(b.it.r.name))
        .filter(x => { const k = x.it.r.url + '|' + x.it.field.id; if(seen.has(k)) return false; seen.add(k); return true; })
        .slice(0, 8)
        .map(x => x.it);
    }

    function highlight(text, q){
      const terms = q.trim().split(/\s+/).filter(t => t.length > 1).map(t => t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
      const safe = esc(text);
      if(!terms.length) return safe;
      return safe.replace(new RegExp('(' + terms.join('|') + ')', 'ig'), '<mark>$1</mark>');
    }

    function render(q){
      current = search(q);
      activeIdx = -1;
      input.removeAttribute('aria-activedescendant');
      if(clearBt) clearBt.hidden = !q;
      if(!q.trim()){
        results.hidden = true; results.innerHTML = '';
        input.setAttribute('aria-expanded','false');
        if(status) status.textContent = '';
        return;
      }
      if(!current.length){
        results.innerHTML = `<li class="sr-empty" role="presentation">No resources match “${esc(q.trim())}”. Try a field name like <b>Physics</b> or a tool like <b>Figma</b>.</li>`;
        if(status) status.textContent = 'No results';
      } else {
        results.innerHTML = current.map((it,i) => `
          <li role="option" id="sr-opt-${i}" aria-selected="false" data-i="${i}">
            <a class="sr-item" href="${it.r.url}" target="_blank" rel="noopener" tabindex="-1">
              <span class="sr-logo" aria-hidden="true">${esc(it.r.logo || it.r.name.slice(0,2))}</span>
              <span class="sr-main">
                <span class="sr-name">${highlight(it.r.name, q)}</span>
                <span class="sr-meta">${it.field.icon} ${esc(it.field.name)}${it.sector ? ' <span class="sr-sep">/</span> ' + esc(it.sector.name) : ''}</span>
              </span>
              <span class="sr-badge sr-badge-${it.r.badge}">${esc(it.r.badge)}</span>
            </a>
          </li>`).join('');
        if(status) status.textContent = current.length + (current.length === 1 ? ' result' : ' results');
      }
      results.hidden = false;
      input.setAttribute('aria-expanded','true');
    }

    function setActive(i){
      const items = results.querySelectorAll('[role="option"]');
      if(!items.length) return;
      activeIdx = (i + items.length) % items.length;
      items.forEach((el,k) => {
        const on = k === activeIdx;
        el.classList.toggle('is-active', on);
        el.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      input.setAttribute('aria-activedescendant', 'sr-opt-' + activeIdx);
      items[activeIdx].scrollIntoView({block:'nearest'});
    }

    input.addEventListener('input', () => render(input.value));
    input.addEventListener('focus', () => { if(input.value.trim()) render(input.value); });
    input.addEventListener('keydown', e => {
      if(e.key === 'ArrowDown'){ e.preventDefault(); setActive(activeIdx + 1); }
      else if(e.key === 'ArrowUp'){ e.preventDefault(); setActive(activeIdx - 1); }
      else if(e.key === 'Enter'){
        e.preventDefault();
        const pick = current[activeIdx >= 0 ? activeIdx : 0];
        if(pick) window.open(pick.r.url, '_blank', 'noopener');
      }
      else if(e.key === 'Escape'){
        if(input.value){ input.value = ''; render(''); } else input.blur();
      }
    });
    results.addEventListener('mousemove', e => {
      const li = e.target.closest('[role="option"]');
      if(li) setActive(+li.dataset.i);
    });
    document.addEventListener('click', e => {
      if(!e.target.closest('.hero-search')){ results.hidden = true; input.setAttribute('aria-expanded','false'); }
    });
    if(clearBt) clearBt.addEventListener('click', () => { input.value = ''; render(''); input.focus(); });

    // quick-query chips fill the search box
    document.querySelectorAll('[data-query]').forEach(btn => {
      btn.addEventListener('click', () => { input.value = btn.dataset.query; render(input.value); input.focus(); });
    });

    focusSearch = function(){
      const top = input.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({top:Math.max(0, top), behavior: reduceMotion() ? 'auto' : 'smooth'});
      setTimeout(() => input.focus({preventScroll:true}), reduceMotion() ? 0 : 350);
    };
  }

  // ═══════════════════════════ SECTOR PAGES ═══════════════════════════
  function initSector(){
    const main = document.getElementById('main-content');
    const tabs = Array.from(document.querySelectorAll('.ftab'));
    if(!main || !tabs.length) return;

    const idOf = b => { const m = (b.getAttribute('onclick') || '').match(/filterField\('([^']+)'/); return m ? m[1] : null; };
    const allTab = tabs.find(b => idOf(b) === 'all');
    const pageIds = tabs.map(idOf).filter(id => id && id !== 'all');

    // Show only this sector's fields, in the same order as its tabs
    // (buildContent() renders every field in FIELDS on every page)
    main.querySelectorAll('.field-section').forEach(s => { if(!pageIds.includes(s.dataset.field)) s.remove(); });
    pageIds.forEach(id => { const s = document.getElementById('f-' + id); if(s) main.appendChild(s); });
    // moved nodes need fresh observers for the original reveal animation
    if(typeof revealObserve === 'function') revealObserve();

    // Card counts on each field header and tab; searchable text on each card
    const sectionsNow = () => Array.from(main.querySelectorAll('.field-section'));
    sectionsNow().forEach(s => {
      const n = s.querySelectorAll('.res-card').length;
      const head = s.querySelector('.field-header');
      if(head) head.insertAdjacentHTML('beforeend', `<span class="field-count">${n} resources</span>`);
      s.querySelectorAll('.res-card').forEach(c => { c.dataset.search = c.textContent.replace(/\s+/g,' ').toLowerCase(); });
    });
    tabs.forEach(b => {
      const id = idOf(b);
      const n = id === 'all'
        ? main.querySelectorAll('.res-card').length
        : (document.getElementById('f-' + id) ? document.getElementById('f-' + id).querySelectorAll('.res-card').length : 0);
      b.insertAdjacentHTML('beforeend', ` <span class="ftab-count">${n}</span>`);
      b.classList.toggle('is-empty', n === 0);
      b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false');
    });

    // Status line + empty state
    const statusEl = document.createElement('p');
    statusEl.className = 'sector-status'; statusEl.setAttribute('aria-live','polite');
    main.prepend(statusEl);
    const empty = document.createElement('div');
    empty.className = 'sector-empty'; empty.hidden = true;
    main.appendChild(empty);

    const input   = document.getElementById('sector-search-input');
    const clearBt = document.getElementById('sector-search-clear');
    let currentField = 'all';
    const labelOf = id => { const t = tabs.find(b => idOf(b) === id); return t ? t.childNodes[0].textContent.replace(/^\W+/,'').trim() : id; };

    function apply(){
      const q = input ? input.value.trim().toLowerCase() : '';
      const terms = q.split(/\s+/).filter(Boolean);
      let shown = 0;
      sectionsNow().forEach(s => {
        const inTab = currentField === 'all' || s.dataset.field === currentField;
        let matches = 0;
        s.querySelectorAll('.res-card').forEach(c => {
          const ok = !terms.length || terms.every(t => c.dataset.search.includes(t));
          c.classList.toggle('is-filtered-out', !ok);
          if(ok) matches++;
        });
        s.classList.toggle('is-filtered-out', terms.length > 0 && matches === 0);
        if(inTab) shown += matches;
      });
      const scope = currentField === 'all' ? 'this sector' : labelOf(currentField);
      if(clearBt) clearBt.hidden = !q;
      statusEl.textContent = terms.length
        ? `${shown} ${shown === 1 ? 'resource matches' : 'resources match'} “${input.value.trim()}” in ${scope}`
        : `${shown} resources in ${scope}`;
      if(shown === 0){
        if(terms.length){
          empty.innerHTML = `<strong>No matches in ${esc(scope)}</strong>Nothing matches “${esc(input.value.trim())}”. Check the spelling or search all fields.<br><button type="button" data-act="clear">Clear search</button>`;
        } else {
          empty.innerHTML = `<strong>${esc(labelOf(currentField))} has no resources yet</strong>This field is listed but hasn't been filled in. Browse the other fields in this sector in the meantime.<br><button type="button" data-act="all">Show all fields</button>`;
        }
        empty.hidden = false;
      } else {
        empty.hidden = true;
      }
    }
    empty.addEventListener('click', e => {
      const b = e.target.closest('button'); if(!b) return;
      if(b.dataset.act === 'clear' && input){ input.value = ''; apply(); input.focus(); }
      if(b.dataset.act === 'all') window.filterField('all', allTab);
    });

    // Wrap the original filterField so tabs keep working exactly as before,
    // and the search / counts / empty state stay in sync
    const originalFilter = window.filterField;
    if(typeof originalFilter === 'function'){
      window.filterField = function(id, btn){
        originalFilter(id, btn);
        currentField = id;
        tabs.forEach(b => b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false'));
        if(btn && btn.scrollIntoView) btn.scrollIntoView({block:'nearest', inline:'nearest'});
        apply();
      };
    }

    if(input){
      input.placeholder = `Search ${main.querySelectorAll(".res-card").length} resources`;
      input.addEventListener('input', apply);
      input.addEventListener('keydown', e => { if(e.key === 'Escape'){ if(input.value){ input.value = ''; apply(); } else input.blur(); } });
      if(clearBt) clearBt.addEventListener('click', () => { input.value = ''; apply(); input.focus(); });
      focusSearch = function(){
        const r = input.getBoundingClientRect();
        if(r.top < 0 || r.bottom > window.innerHeight){
          const bar = document.querySelector('.sector-toolbar');
          const top = (bar ? bar.getBoundingClientRect().top + window.scrollY : 0) - 80;
          window.scrollTo({top:Math.max(0, top), behavior: reduceMotion() ? 'auto' : 'smooth'});
        }
        setTimeout(() => input.focus({preventScroll:true}), reduceMotion() ? 0 : 300);
      };
    }
    apply();
  }
})();
