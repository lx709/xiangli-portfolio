import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Record<string, boolean>>({});
  const [githubStars, setGithubStars] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchGithubStars = async () => {
      const repos = [
        { key: 'minigpt4', owner: 'Vision-CAIR', repo: 'MiniGPT-4' },
        { key: 'rsgpt', owner: 'Lavender105', repo: 'RSGPT' },
        { key: 'vrsbench', owner: 'lx709', repo: 'VRSBench' },
        { key: 'rsclip', owner: 'lx709', repo: 'RS-CLIP' },
        { key: 'uni3dl', owner: 'lx709', repo: 'Uni3DL' },
      ];

      const stars: Record<string, number> = {};
      for (const { key, owner, repo } of repos) {
        try {
          const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
          const data = await response.json();
          stars[key] = data.stargazers_count || 0;
        } catch (error) {
          console.error(`Failed to fetch stars for ${owner}/${repo}:`, error);
        }
      }
      setGithubStars(stars);
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
      authors: "Li Xiang, Ding Jian, Chen Zhaoyang, Elhoseiny Mohamed",
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


          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="flex gap-8 items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Xiang Li"
                className="w-48 h-48 rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Bio Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Xiang Li</h1>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Lecturer (Assistant Professor)</span> at the{" "}
                <a href="#" className="text-blue-600 hover:underline">School of Computer Science</a>, 
                {" "}<a href="#" className="text-blue-600 hover:underline">University of Bristol</a>
              </p>
              
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                <p>
                  I am a Lecturer (Assistant Professor) in the School of Computer Science at the University of Bristol and a faculty member of the Machine Learning and Computer Vision <span className="font-semibold">MaVi group</span>. Prior to joining Bristol, I held a Lecturer position at the University of Reading. Before that, I was a Postdoctoral Researcher at KAUST, working with Prof. Mohamed Elhoseiny, and at NYU, working with Prof. Yi Fang.
                </p>
                
                <p className="mt-4">
                  My research focuses on <span className="font-semibold">multimodal large language models</span>, <span className="font-semibold">computer vision</span>, and <span className="font-semibold">remote sensing</span>. I have published over 50 papers in top conferences and journals such as CVPR, ICCV, NeurIPS, TPAMI, and IJCV, with citations on Google Scholar and an h-index of 28. I contributed to the well-known <span className="font-semibold">MiniGPT-4</span> project with over 3000 citations on Google Scholar and the first conversational MLLM in remote sensing.
                </p>

                <p className="mt-4">
                  
                </p>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-800">🔥 Hiring PhD students and interns:</p>
                  <p className="text-yellow-800">Welcome enthusiastic students passionate about multimodal LLMs, 3D vision, and remote sensing to apply for PhD positions and internships.</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="mt-6 flex gap-4">
                <a href="mailto:xiang.li@bristol.ac.uk" className="text-blue-600 hover:underline">Email</a>
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                <a href="#" className="text-blue-600 hover:underline">Google Scholar</a>
                <a href="#" className="text-blue-600 hover:underline">CV</a>
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
          <p className="text-gray-600 mb-8">
            See <Link href="/publications" className="text-blue-600 hover:underline">all publications</Link> for the complete list.
          </p>
          
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-24 h-24 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-sm text-gray-600 font-semibold mb-3">{pub.venue}</p>
                  {pub.badge && (
                    <p className="text-xs font-semibold mb-3 inline-block bg-green-200 text-green-900 px-2 py-1 rounded">{pub.badge}</p>
                  )}
                  <div className="flex gap-3 flex-wrap items-center">
                    {pub.links.paper && <a href={pub.links.paper} className="text-blue-600 hover:underline text-sm">pdf</a>}
                    {pub.links.code && (
                      <>
                        <a href={pub.links.code} className="text-blue-600 hover:underline text-sm">code</a>
                        {pub.githubRepoKey && githubStars[pub.githubRepoKey] !== undefined && (
                          <span className="text-xs text-gray-500">⭐ {githubStars[pub.githubRepoKey]}</span>
                        )}
                      </>
                    )}
                    {pub.links.project && <a href={pub.links.project} className="text-blue-600 hover:underline text-sm">project</a>}
                    {pub.links.demo && <a href={pub.links.demo} className="text-blue-600 hover:underline text-sm">demo</a>}
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
