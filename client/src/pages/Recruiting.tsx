import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Recruiting() {
  // Navigation toolbar same as Home page
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/publications", label: "PUBLICATIONS" },
    { href: "/teaching", label: "TEACHING" },
    { href: "/recruiting", label: "RECRUITING" },
  ];
  const positions = [
    {
      title: "Postdoc Position",
      icon: "👨‍🔬",
      description: "If you would like to go with CSC or other similar fundings, please fill out the application form or send an email to Xiang Li with the title [Prospective Postdoc].",
    },
    {
      title: "PhD Position",
      icon: "🎓",
      description: "School of Computer Science offers multiple PhD scholarships. If you are interested, please fill out the application form or send an email with the title [Prospective PhD] including: a copy of your CV, why you want to work with the group, and what topics you'd like to explore.",
      scholarships: [
        "Bristol Postgraduate Research and EPSRC Scholarship",
        "PrO-AI CDT",
      ],
    },
    {
      title: "CSC Scholarship for Students from China",
      icon: "🌏",
      description: "The China Scholarship Council (CSC) and the University of Bristol jointly fund multiple scholarships for students from China.",
    },
    {
      title: "Visiting PhD Position",
      icon: "✈️",
      description: "If you are a PhD student at another institution interested in visiting the group for 3-12 months, please fill out the application form or send an email with the title [Prospective Visiting PhD].",
    },
    {
      title: "Research Internship Position",
      icon: "💼",
      description: "We welcome applications from motivated students interested in working on research projects in computer vision and machine learning. Please fill out the application form or send an email with the title [Prospective Research Position].",
    },
  ];

  const researchAreas = [
    "Multimodal Large Language Models",
    "3D Vision",
    "Remote Sensing",
    "AI Agents",
    "World Models",
    "AI for Science",
  ];

  const essentialQualifications = [
    "Strong academic background in Computer Science, Mathematics, Engineering, or related fields",
    "Programming experience in Python, with familiarity in PyTorch or TensorFlow",
    "Mathematical foundation in linear algebra, calculus, statistics, and machine learning",
    "Research experience (publications, thesis projects, or relevant coursework)",
    "English proficiency for international students",
  ];

  const preferredQualifications = [
    "Prior experience with computer vision or machine learning projects",
    "Publications in relevant conferences or journals",
    "Experience with GPU computing and distributed training",
    "Background in optimization, deep learning, or related areas",
    "Open source contributions to relevant projects",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Dark with white text */}
      <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-8 py-4 flex-wrap">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-semibold hover:text-gray-300 transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Available Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Available Positions</h2>
          <div className="space-y-6">
            {positions.map((position, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{position.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{position.title}</h3>
                    <p className="text-slate-700 mb-3">{position.description}</p>
                    {position.scholarships && (
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        {position.scholarships.map((scholarship, i) => (
                          <li key={i}>{scholarship}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Isambard-AI Supercomputing</h3>
              <p className="text-slate-700">Access to over 5000 GH200 GPUs, providing powerful computational resources to support your research.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">One-on-One Mentoring</h3>
              <p className="text-slate-700">At least one hour of 1v1 meetings per week, providing personalized research guidance and career development advice.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Internship Salary</h3>
              <p className="text-slate-700">Competitive internship salary provided to support you in focusing on research work.</p>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Research Areas We're Hiring For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-blue-600 text-xl">→</span>
                <span className="text-slate-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal Candidates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Ideal Candidates</h2>

          {/* Essential Qualifications */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Essential Qualifications</h3>
            <ul className="space-y-3">
              {essentialQualifications.map((qual, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-slate-700">{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Qualifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Preferred Qualifications</h3>
            <ul className="space-y-3">
              {preferredQualifications.map((qual, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">★</span>
                  <span className="text-slate-700">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ready to Apply */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Apply?</h2>
          <p className="text-slate-700 mb-6">
            I encourage you to reach out even if you're unsure about your qualifications. I'm always happy to discuss potential opportunities and help you understand if our research group would be a good fit for your interests and goals.
          </p>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <a href="mailto:xiang92.li@bristol.ac.uk" className="text-blue-600 hover:text-blue-700 font-medium">
              xiang92.li@bristol.ac.uk
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-slate-600 text-sm border-t border-slate-200 pt-8">
          <p>School of Computer Science, University of Bristol</p>
        </div>
      </div>
    </div>
  );
}
