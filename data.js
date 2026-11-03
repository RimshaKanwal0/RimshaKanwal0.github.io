/* ================================================================
   PORTFOLIO DATA — experience, certificates, skills, projects, links.
   (Name, email and resume link live in index.html so they render instantly.)
   ================================================================ */
window.PORTFOLIO = {

  // Newest first. Shown as clickable tabs.
  experience: [
    {
      tab: "Freelance", role: "Freelance AI Engineer", company: "Self-employed", period: "Sep 2026 — Present",
      points: [
        "I work with clients on AI projects like chatbots, RAG systems and AI agents.",
        "I take the client's idea, build the AI solution and deliver a working product.",
        "I talk with clients directly, share progress and finish work on time."
      ]
    },
    {
      tab: "Paragon Health Food", role: "AI Engineer", company: "Paragon Health Food", period: "Mar 2026 — Aug 2026",
      points: [
        "Built AI chatbots (RAG) that answer staff questions from company documents, with sources.",
        "Made AI agents that do routine business tasks automatically, connected through FastAPI.",
        "Deployed and maintained these services on AWS using Docker and GitHub Actions."
      ]
    },
    {
      tab: "Dexterious Developers", role: "Junior AI/ML Engineer", company: "Dexterious Developers", period: "Dec 2024 — Feb 2026",
      points: [
        "Built RAG systems with LangChain, FAISS and OpenAI that find answers 40% better than keyword search.",
        "Made the system read PDFs, tables and scanned files and give answers with page numbers.",
        "Added quality checks (RAGAS) to measure answers and reduce wrong AI answers."
      ]
    },
    {
      tab: "Devicon Software House", role: "Python Developer Intern", company: "Devicon Software House", period: "Mar 2024 — Oct 2024",
      points: [
        "Wrote Python scripts and backend tools for data processing, automation and APIs.",
        "Wrote SQL queries and data checks, and worked with the team using Git."
      ]
    }
  ],

  certificationsUrl: "https://www.linkedin.com/in/rimsha-kanwal-02a664309/details/certifications/",
  // `url` optional: a certificate's own verify link. Falls back to LinkedIn.
  certifications: [
    { title: "Advanced LLMs with RAG", issuer: "LinkedIn Learning" },
    { title: "Google AI Agents Intensive", issuer: "Google & Kaggle" },
    { title: "Google Data Analytics Professional Certificate", issuer: "Coursera" },
    { title: "Deep Learning: Model Optimization & Tuning", issuer: "LinkedIn Learning" },
    { title: "Advanced Python Programming", issuer: "NAVTTC" },
    { title: "AI Builders Hackathon", issuer: "Devpost" }
  ],
  qr: "assets/qr-certs.svg",

  skills: {
    "Generative AI": ["RAG Pipelines", "AI Agents", "LangChain", "LangGraph", "MCP", "LLM Fine-Tuning (LoRA, QLoRA)", "Vector DBs (FAISS, Pinecone, ChromaDB)"],
    "ML & Deep Learning": ["NLP", "PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "Model Optimization"],
    "Programming": ["Python", "FastAPI", "SQL", "PostgreSQL", "SQLite", "Supabase"],
    "Cloud & DevOps": ["AWS (Lambda, S3, EC2)", "AWS Bedrock & SageMaker", "Docker", "GitHub Actions", "Linux", "VPS Deployment"]
  },

  // `image` optional — a generated cover is used when empty.
  projects: [
    { title: "DocuMind AI", desc: "Ask questions about PDFs, tables and scanned pages and get answers with page-level citations.", tags: ["RAG", "FastAPI", "OpenAI", "OCR"], github: "", live: "", image: "assets/proj-documind.webp" },
    { title: "FinSentiments", desc: "Financial news sentiment analysis with a fine-tuned RoBERTa model: 95% accuracy and 0.95 F1-score.", tags: ["RoBERTa", "NLP", "PyTorch"], github: "https://github.com/RimshaKanwal0/FinSentiments_FYP", live: "", image: "assets/proj-finsentiments.webp" },
    { title: "AI Travel Planner", desc: "Multi-agent planner: specialist agents for flights, hotels, weather and budget, with human approval.", tags: ["LangGraph", "MCP", "Groq"], github: "", live: "", image: "assets/proj-travel.svg" },
    { title: "Hospital Voice AI Agent", desc: "Voice assistant that answers hospital questions and books appointments using RAG.", tags: ["Vapi", "RAG", "FastAPI"], github: "", live: "", image: "assets/proj-hospital.svg" },
    { title: "Serverless Resume Parser", desc: "Upload a resume to S3 and AWS Lambda + Textract extract the details into DynamoDB automatically.", tags: ["AWS Lambda", "Textract", "DynamoDB"], github: "https://github.com/RimshaKanwal0/Serverless-Resume-Parser-using-AWS", live: "", image: "assets/proj-resume-parser.svg" },
    { title: "RAG System from Scratch", desc: "Retrieval-Augmented Generation pipeline with BGE embeddings, ChromaDB and Hugging Face models.", tags: ["LangChain", "ChromaDB", "Hugging Face"], github: "https://github.com/RimshaKanwal0/rag-system", live: "", image: "assets/proj-rag.svg" },
    { title: "Financial Sentiment (95%)", desc: "Fine-tuned RoBERTa with weighted loss for financial sentiment: 95% accuracy, F1 0.95.", tags: ["PyTorch", "Transformers"], github: "https://github.com/RimshaKanwal0/FinancialSentiment-accuracy95", live: "", image: "assets/proj-fin-sentiment.svg" },
    { title: "YouTube Trending Pipeline", desc: "Serverless AWS data pipeline: scheduled Lambda cleaning, S3 storage and Athena SQL analysis.", tags: ["AWS", "Athena", "ETL"], github: "https://github.com/RimshaKanwal0/youtube-trending-data-pipeline", live: "", post: "https://www.linkedin.com/posts/rimsha-kanwal-02a664309_aws-dataengineering-python-ugcPost-7349726115369734144-P8hy/", image: "assets/proj-youtube.svg" },
    { title: "Amazon Books Pipeline", desc: "Apache Airflow ETL that scrapes Amazon book listings and loads them into PostgreSQL, in Docker.", tags: ["Airflow", "PostgreSQL", "Docker"], github: "https://github.com/RimshaKanwal0/amazon-books-data-pipeline", live: "", image: "assets/proj-amazon-books.svg" },
    { title: "Customer Churn Prediction", desc: "ML and deep learning models that find customers likely to leave, with class-imbalance handling.", tags: ["Scikit-learn", "Keras"], github: "https://github.com/RimshaKanwal0/Customer-Churn-Prediction", live: "", image: "assets/proj-churn.svg" },
    { title: "Sleep Disorder Prediction", desc: "Predicts insomnia and sleep apnea from health data, comparing ML models with a neural network.", tags: ["ML", "Keras"], github: "https://github.com/RimshaKanwal0/Sleep-Disorder-Prediction-using-ML-DL", live: "", image: "assets/proj-sleep.svg" },
    { title: "Grants.gov Web Scraper", desc: "Selenium scraper with pagination, retries, logging and CSV export.", tags: ["Selenium", "Python"], github: "https://github.com/RimshaKanwal0/web-scraper", live: "", image: "assets/proj-scraper.svg" }
  ],
  projectsOnFront: 5,

  socials: [
    { name: "GitHub", url: "https://github.com/RimshaKanwal0", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rimsha-kanwal-02a664309/", icon: "linkedin" },
    { name: "Kaggle", url: "https://www.kaggle.com/rimsha234", icon: "kaggle" },
    { name: "Codeforces", url: "https://codeforces.com/profile/rimshakanwal7110", icon: "codeforces" },
    { name: "Dev Community", url: "https://dev.to/rimsha_kanwal", icon: "dev" },
    { name: "Medium", url: "https://medium.com/@rimshakanwal7110", icon: "medium" },
    { name: "Discord", url: "https://discord.com/users/1485359820889526272", icon: "discord" }
  ]
};
