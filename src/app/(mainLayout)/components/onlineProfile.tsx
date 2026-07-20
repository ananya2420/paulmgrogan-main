import React from 'react';

const ProfileCard = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${className}`}>
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{title}</h3>
    {children}
  </div>
);

export default function OnlineProfile() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="mb-10 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-extrabold text-slate-900">Paul (Captain Paul) Grogan</h1>
        <p className="text-blue-700 font-medium mt-1">Maritime Executive | Wharton C-Suite Candidate | Rotary President | Commissioner Candidate</p>
        <p className="text-slate-500 text-sm mt-2">Hernando, Florida · 18,124 Followers</p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Card */}
        <ProfileCard title="About" className="md:col-span-2">
          <p className="text-slate-700 leading-relaxed text-sm">
            Maritime professional, entrepreneur, and community leader navigating life with integrity. As First Officer at Atlantic Power, 
            I lead with trust and accountability. I run a research and marketing company dedicated to helping businesses grow from local 
            to international scales, building strong connections and delivering measurable results.
          </p>
        </ProfileCard>

        {/* Skills Card */}
        <ProfileCard title="Top Skills">
          <div className="flex flex-wrap gap-2">
            {['Sales', 'Leadership', 'Project Management', 'Management', 'Marketing', 'Sales Management', 'Maritime Logistics', 'Nonprofit Leadership'].map(skill => (
              <span key={skill} className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-600">{skill}</span>
            ))}
          </div>
        </ProfileCard>

        {/* Experience Section */}
        <ProfileCard title="Full Experience" className="md:col-span-3">
          <div className="space-y-8">
            {[
              { role: "Manatee Tour Captain", org: "Plantation Adventure Center", date: "Apr 2026 - Present", desc: "Maritime operations and tour leadership." },
              { role: "Founder", org: "Paul M Grogan Research", date: "May 2025 - Present", desc: "Research, branding, and marketing strategies for global/local growth. Oversaw campaigns and strategic decision-making." },
              { role: "Lead Pastor / Director", org: "InnerBeautyMinistry", date: "Oct 2015 - Present", desc: "Non-profit management, fundraising, and community outreach counseling." },
              { role: "Second Mate", org: "Harvey Gulf International Marine", date: "Feb 2013 - Present", desc: "Navigation, operational safety, risk assessments, and crew management (AFNI 2nd Mate Unlimited)." },
              { role: "President", org: "Citrus County Classified", date: "Jan 2013 - Present", desc: "Publisher of a community-focused media platform connecting local businesses and residents." }
            ].map((job, i) => (
              <div key={i} className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-slate-900">{job.role}</h4>
                <p className="text-sm font-semibold text-blue-600">{job.org}</p>
                <p className="text-xs text-slate-400 mb-1">{job.date}</p>
                <p className="text-sm text-slate-600">{job.desc}</p>
              </div>
            ))}
          </div>
        </ProfileCard>

        {/* Licenses & Education */}
        <ProfileCard title="Licenses & Education">
          <ul className="text-sm text-slate-700 space-y-2">
            <li><strong>USCG Master's License</strong></li>
            <li>Digital Citizenship Consultant (USIDHR)</li>
            <li>Business Consulting (USIDHR)</li>
            <li>Fletcher Technical Community College: Maritime Studies</li>
            <li>University of Phoenix: General Studies</li>
          </ul>
        </ProfileCard>

        <ProfileCard title="Civic & Organizations" className="md:col-span-2">
          <p className="text-sm text-slate-700">
            <strong>Rotary President</strong> | <strong>2nd Vice Chairman, FaithHaven</strong> | <strong>Member, YMCA</strong>
          </p>
          <p className="text-xs text-slate-500 mt-2 italic">
            Bringing communities together for the greater good online and offline.
          </p>
        </ProfileCard>
      </div>
    </div>
  );
}