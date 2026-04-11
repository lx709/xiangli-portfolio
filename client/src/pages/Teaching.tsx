import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Teaching() {
  const [expandedDropdowns, setExpandedDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (name: string) => {
    setExpandedDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">COMS30035 - Machine Learning</h1>
          <p className="text-lg text-gray-700">University of Bristol, 2025/26</p>
        </section>

        {/* Course Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            This unit acquaints students with machine learning algorithms important in modern data and computer science applications. Topics include kernel machines, probabilistic inference, neural networks, HMMs, and ensemble models.
          </p>
        </section>

        {/* Course Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Lecturers</h3>
              <p className="text-gray-700">James Cussens, Xiang Li, Wei-Hong Li, Xiyue Zhang</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Lectures:</strong> Mondays, Queen's 1.4 Pugsley</li>
                <li><strong>Labs:</strong> Tuesdays 15:00-18:00, MVB 2.11</li>
                <li><strong>Drop-in:</strong> Thursdays 17:00-18:00, Queen's 1.06</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Major:</strong> Mid-term test (30%) + Coursework (70%)</li>
                <li><strong>Minor:</strong> Exam (100%)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <a href="https://uob-coms30035.github.io/" className="text-blue-600 hover:underline">
                Course Homepage
              </a>
            </li>
            <li>
              <a href="https://github.com/COMS30035" className="text-blue-600 hover:underline">
                GitHub Organization
              </a>
            </li>
            <li>Blackboard (announcements and materials)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
