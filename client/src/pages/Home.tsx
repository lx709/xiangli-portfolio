import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Record<string, boolean>>({});
  const repos = [
    { key: 'minigpt4', owner: 'Vision-CAIR', repo: 'MiniGPT-4', num: 25743 },
    { key: 'rsgpt', owner: 'Lavender105', repo: 'RSGPT', num: 144 },
    { key: 'vrsbench', owner: 'lx709', repo: 'VRSBench', num: 66 },
    { key: 'rsclip', owner: 'lx709', repo: 'RS-CLIP', num: 43 },
  ];

  const [githubStars, setGithubStars] = useState<Record<string, number>>(
    repos.reduce((acc, { key, num }) => ({ ...acc, [key]: num }), {})
  );

  useEffect(() => {
    const fetchGithubStars = async () => {

      const stars: Record<string, number> = {};
      for (const { key, owner, repo, num } of repos) {
        try {
          const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
          const data = await response.json();
          stars[key] = data.stargazers_count || 0;
        } catch (error) {
          console.error(`Failed to fetch stars for ${owner}/${repo}:`, error);
        }
      }
      setGithubStars(prev => ({ ...prev, ...stars }));
    };

    fetchGithubStars();
  }, []);

  const toggleDropdown = (name: string) => {
    setExpandedDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const profileImage = "https://raw.githubusercontent.com/lx709/lx709.github.io/main/images/lx.jpg";

  const news = [
    { date: "04/2026", text: "Geo-R1 was accepted for publication at ISPRS J." },
    { date: "03/2026", text: "I will serve as an Area Chair for NeurIPS 2026." },
    { date: "02/2026", text: "One paper accepted for publication at CVPR 2026 (oral)." },
    { date: "02/2026", text: "RS-RAG was accepted for publication at IEEE GRSM." },
    { date: "01/2026", text: "One paper accepted for publication at ICLR 2026." },
    { date: "10/2025", text: "We released Geo-R1, a reasoning-centric MLLM for aerial imagery." },
    { date: "09/2025", text: "REOBench was accepted for publication at NeurIPS 2025 Datasets & Benchmarks Track." },
    { date: "09/2025", text: "I will serve as an Area Chair of ICLR 2026." },
    { date: "09/2025", text: "I joined the University of Bristol as a Lecturer in Computer Vision." },
    { date: "08/2025", text: "I received the IEEE GRSS Early Career Award 2025." },
  ];

  const publications = [
    {
      title: "MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models",
      authors: "Deyao Zhu, Jun Chen, Xiaoqian Shen, Xiang Li, Mohamed Elhoseiny",
      venue: "ICLR, 2024",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/aoQc8aMmnhtk8J8RUBKwEN/minigpt4_749c3d62.png",
      links: { project: "https://minigpt-4.github.io/", paper: "https://arxiv.org/abs/2304.10592", code: "https://github.com/Vision-CAIR/MiniGPT-4", demo: "https://huggingface.co/spaces/Vision-CAIR/MiniGPT-4" },
      githubRepoKey: 'minigpt4'
    },
    {
      title: "MiniGPT-v2: Large Language Model as a Unified Interface for Vision-Language Multi-task Learning",
      authors: "Jun Chen, Deyao Zhu, Xiaoqian Shen, Xiang Li, Zechun Liu, Pengchuan Zhang, Raghuraman Krishnamoorthi, Vikas Chandra, Yunyang Xiong, Mohamed Elhoseiny",
      venue: "arXiv, 2023",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/aoQc8aMmnhtk8J8RUBKwEN/minigpt-v2_b770e726.png",
      links: { project: "https://minigpt-4.github.io/", paper: "https://arxiv.org/abs/2310.09478", code: "https://github.com/Vision-CAIR/MiniGPT-4", demo: "https://huggingface.co/spaces/Vision-CAIR/MiniGPT-4" },
      githubRepoKey: 'minigpt4'
    },
    {
      title: "RSGPT: A Remote Sensing Vision Language Model and Benchmark",
      authors: "Yuan Hu, Jianlong Yuan, Congcong Wen, Xiaonan Lu, Xiang Li*",
      venue: "ISPRS JPRS, 2025",
      badge: "ESI Highly Cited Paper (1%)",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/aoQc8aMmnhtk8J8RUBKwEN/rsgpt_e6519f4d.png",
      links: { project: "https://github.com/Lavender105/RSGPT", paper: "https://arxiv.org/abs/2406.12384", code: "https://github.com/Lavender105/RSGPT" },
      githubRepoKey: 'rsgpt'
    },
    {
      title: "VRSBench: A Benchmark for Vision-based Remote Sensing Scene Classification",
      authors: "Xiang Li, Jian Ding, Mohamed Elhoseiny",
      venue: "NeurIPS, 2024",
      image: "https://raw.githubusercontent.com/lx709/VRSBench/main/fig_example.png",
      links: { project: "https://vrsbench.github.io/", paper: "https://arxiv.org/abs/2406.12384", code: "https://github.com/lx709/VRSBench" },
      githubRepoKey: 'vrsbench'
    },
    {
      title: "Uni3DL: A Unified Model for 3D Vision-Language Understanding",
      authors: "Xiang Li, Jian Ding, Zhaoyang Chen, Mohamed Elhoseiny",
      venue: "ECCV, 2024",
      image: "https://raw.githubusercontent.com/lx709/Uni3DL/main/images/teaser.png",
      links: { project: "https://uni3dl.github.io/", paper: "https://arxiv.org/abs/2312.03026" }
    },
    {
      title: "RS-CLIP: Zero Shot Remote Sensing Scene Classification via Contrastive Vision-Language Supervision",
      authors: "Xiang Li, Xiang Li, Congcong Wen, Nan Zhou",
      venue: "JAG, 2023",
      badge: "ESI Highly Cited Paper (1%)",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/aoQc8aMmnhtk8J8RUBKwEN/rsclip_5f70622f.png",
      links: { project: "https://github.com/lx709/RS-CLIP", paper: "https://www.sciencedirect.com/science/article/pii/S1569843223003217", code: "https://github.com/lx709/RS-CLIP" },
      githubRepoKey: 'rsclip'
    },
  ];

  const awards = [
    "IEEE GRSS Early Career Award 2025",
    "Outstanding Reviewer for ICCV 2021",
  ];

  const academicServices = {
    areaChairs: ["NeurIPS 2026", "ICLR 2026"],
    guestEditors: [
      "Associate Editor for IET Computer Vision",
      "Guest Editor, IEEE Geoscience and Remote Sensing Magazine (IEEE GRSM)",
      "Guest Editor, IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (IEEE JSTARS)",
      "Guest Editor, Geoscience and Remote Sensing Symposium (GSIS)",
    ],
    conferenceProgramCommittee: [
      "CVPR 2022/2023/2024/2025/2026, ICCV 2021/2023/2025, ECCV 2022/2024/2026, NeurIPS 2023/2024/2025, ICLR 2024/2025, AAAI 2022/2023/2024",
    ],
    journalReviewers: [
      "TPAMI, TIP, TGRS, TMM, TVCG, IJCV, Pattern Recognition, Remote Sensing of Environment, ISPRS JPRS, JAG",
    ],
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation Bar - Dark with white text */}
      <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-8 py-4 flex-wrap">
            <Link href="/" className="font-semibold hover:text-gray-300 transition">HOME</Link>
            <Link href="/publications" className="font-semibold hover:text-gray-300 transition">PUBLICATIONS</Link>
            <Link href="/teaching" className="font-semibold hover:text-gray-300 transition">TEACHING</Link>
            <Link href="/recruiting" className="font-semibold hover:text-gray-300 transition">RECRUITING</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Profile Section */}
        <section className="mb-20 py-12">
          <div className="flex flex-col md:flex-row gap-12 items-start max-w-6xl mx-auto">
            {/* Left Sidebar - Photo, Title, and Icons */}
            <div className="flex flex-col items-center gap-6 flex-shrink-0 md:w-64">
              {/* Profile Photo */}
              <div>
                <img
                  src={profileImage}
                  alt="Xiang Li (李祥)"
                  className="w-48 h-48 rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Name and Short Intro */}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Xiang Li</h1>
                <p className="text-lg text-gray-600 mb-1">Lecturer (Assistant Professor)</p>
                <p className="text-sm text-gray-500 mb-4">
                  <a href="#" className="text-blue-600 hover:underline">University of Bristol</a>
                </p>
              </div>

              {/* Social Media Icons - Horizontal Stack with Brand Colors */}
              <div className="flex gap-5 justify-center">
                <a href="mailto:lixiang709709@gmail.com" title="Email" className="transition hover:opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://x.com/lix709" title="Twitter" className="transition hover:opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1DA1F2">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/xiang-li-3317b082/" title="LinkedIn" className="transition hover:opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://scholar.google.com/citations?user=4Apl5FgAAAAJ" title="Google Scholar" className="transition hover:opacity-80">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/aoQc8aMmnhtk8J8RUBKwEN/M6HWMSRUJHns_f959d927.jpg" alt="Google Scholar" className="w-8 h-8" />
                </a>
                <a href="https://github.com/lx709" title="GitHub" className="transition hover:opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#333333">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Detailed Bio */}
            <div className="flex-1">
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                <p>
                  I am a Lecturer (Assistant Professor) in the School of Computer Science at the University of Bristol and a faculty member of the Machine Learning and Computer Vision <span className="font-semibold">MaVi group</span>. Prior to joining Bristol, I held a Lecturer position at the University of Reading. Before that, I was a Postdoctoral Researcher at KAUST, working with Prof. <a href="https://www.mohamedelhoseiny.com/" className="text-blue-600 hover:underline">Mohamed Elhoseiny</a>, and at NYU, working with Prof. <a href="https://engineering.nyu.edu/faculty/yi-fang" className="text-blue-600 hover:underline">Yi Fang</a>.
                </p>
                
                <p className="mt-4">
                  My research focuses on <span className="font-semibold">multimodal large language models</span>, <span className="font-semibold">computer vision</span>, and <span className="font-semibold">remote sensing</span>. I have published over 60 papers in top conferences and journals such as CVPR, ICCV, NeurIPS, TPAMI, and IJCV, with over 10k citations on Google Scholar and an h-index of 28. I contributed to the well-known <span className="font-semibold">MiniGPT-4</span> project with over 4000 citations on Google Scholar and the first conversational MLLM in remote sensing - <span className="font-semibold">RSGPT</span>.
                </p>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-800">🔥 Hiring PhD students and interns:</p>
                  <p className="text-yellow-800">Welcome enthusiastic students passionate about multimodal LLMs, 3D vision, and remote sensing to apply for PhD positions and internships.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Interests</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              I'm currently working on multimodal large language models, computer vision, and remote sensing. My research primarily focuses on the following aspects:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold">Vision-Language Models:</span> Generalist models, vision-language alignment, multi-agent, few-shot learning</li>
              <li><span className="font-semibold">Remote Sensing:</span> EO foundation models, RS MLLMs, image processing, spatiotemporal reasoning</li>
              <li><span className="font-semibold">3D Vision:</span> Point cloud processing, 3D scene understanding, reconstruction, VLA</li>
            </ul>
          </div>
        </section>

        {/* Latest News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
            {news.map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-3 border-b border-gray-100 last:border-b-0">
                <span className="text-sm font-semibold text-blue-600 flex-shrink-0">[{item.date}]</span>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Selected Publications</h2>
          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row gap-6">
                  {pub.image && (
                    <div className="flex-shrink-0 w-full md:w-64">
                      <img src={pub.image} alt={pub.title} className="w-full h-auto rounded-lg object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-sm text-gray-500 mb-3">{pub.venue}</p>
                    {pub.badge && (
                      <div className="mb-3 inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded">
                        {pub.badge}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {pub.links.project && <a href={pub.links.project} className="text-blue-600 hover:underline text-sm">Project</a>}
                      {pub.links.paper && <a href={pub.links.paper} className="text-blue-600 hover:underline text-sm">Paper</a>}
                      {pub.links.code && (
                        <a href={pub.links.code} className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                          Code
                          {pub.githubRepoKey && githubStars[pub.githubRepoKey] !== undefined && (
                            <span className="text-gray-600">⭐ {githubStars[pub.githubRepoKey]}</span>
                          )}
                        </a>
                      )}
                      {pub.links.demo && <a href={pub.links.demo} className="text-blue-600 hover:underline text-sm">Demo</a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Honors & Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Honors & Awards</h2>
          <ul className="space-y-2">
            {awards.map((award, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Academic Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Academic Service</h2>
          <div className="space-y-6">
            {/* Area Chairs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Area Chair</h3>
              <ul className="space-y-2">
                {academicServices.areaChairs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Associate Editors */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Associate Editor</h3>
              <ul className="space-y-2">
                {academicServices.guestEditors.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conference Program Committee */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conference Reviewer</h3>
              <ul className="space-y-2">
                {academicServices.conferenceProgramCommittee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Journal Reviewers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Journal Reviewer</h3>
              <ul className="space-y-2">
                {academicServices.journalReviewers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-12 text-center text-sm text-gray-600">
          <p>© 2026 Xiang Li. All rights reserved. | Last updated: April 2026</p>
        </footer>
      </div>
    </div>
  );
}
