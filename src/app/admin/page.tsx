"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { useState } from "react";

const adminUser = {
  name: "N.D.P. Gunawardhana",
  role: "Director (IT)",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
};

const sidebarItems = [
  { icon: "fa-solid fa-gauge-high", label: "Overview", id: "overview" },
  { icon: "fa-solid fa-book", label: "Modules", id: "modules" },
  { icon: "fa-solid fa-upload", label: "Upload Content", id: "upload" },
  { icon: "fa-solid fa-users", label: "Users", id: "users" },
  { icon: "fa-solid fa-clipboard-check", label: "Assessments", id: "assessments" },
  { icon: "fa-solid fa-certificate", label: "Certificates", id: "certificates" },
  { icon: "fa-solid fa-chart-bar", label: "Reports", id: "reports" },
  { icon: "fa-solid fa-gear", label: "Settings", id: "settings" },
];

const recentUploads = [
  { name: "Maritime Safety - Lesson 8.mp4", type: "Video", size: "245 MB", uploader: "Mr. Ranjith Bandara", date: "2 hours ago", status: "Processing" },
  { name: "Navigation Charts Guide.pdf", type: "PDF", size: "12 MB", uploader: "Prof. Nimal Fernando", date: "5 hours ago", status: "Published" },
  { name: "Fishing Regulations 2026.pptx", type: "Presentation", size: "8 MB", uploader: "Mrs. Chamari Silva", date: "1 day ago", status: "Published" },
  { name: "Aquaculture Basics - Quiz Set B", type: "MCQ", size: "-", uploader: "Dr. Kumara Perera", date: "2 days ago", status: "Draft" },
];

const pendingApprovals = [
  { module: "Deep Sea Navigation Advanced", instructor: "Mr. Ranjith Bandara", submitted: "Jun 21, 2026", lessons: 8 },
  { module: "Coral Reef Protection", instructor: "Prof. Nimal Fernando", submitted: "Jun 20, 2026", lessons: 5 },
];

const userStats = [
  { label: "Total Users", value: "10,847", change: "+124 this week", icon: "fa-solid fa-users", color: "bg-primary/10 text-primary" },
  { label: "Active Learners", value: "3,291", change: "+56 today", icon: "fa-solid fa-user-graduate", color: "bg-green-100 text-green-600" },
  { label: "Modules Published", value: "156", change: "+3 this month", icon: "fa-solid fa-book", color: "bg-accent/20 text-accent" },
  { label: "Certificates Issued", value: "5,243", change: "+89 this week", icon: "fa-solid fa-certificate", color: "bg-blue-100 text-blue-600" },
];

const topModules = [
  { name: "Boat License Certification", enrolled: 4600, completion: 72 },
  { name: "Maritime Safety & Sea Navigation", enrolled: 2100, completion: 65 },
  { name: "Weather & Ocean Safety", enrolled: 3200, completion: 80 },
  { name: "Sustainable Fishing Practices", enrolled: 1800, completion: 45 },
  { name: "Fish Processing & Export", enrolled: 980, completion: 88 },
];

export default function AdminDashboard() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("overview");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="flex min-h-screen bg-gray-light">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-primary-dark text-white transition-transform lg:transition-none pt-4 lg:pt-0`}>
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src={adminUser.avatar} alt={adminUser.name} className="w-10 h-10 rounded-full object-cover border-2 border-accent/30" />
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{adminUser.name}</p>
                <p className="text-xs text-white/50">{adminUser.role}</p>
              </div>
            </div>
          </div>
          <nav className="p-3 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition ${
                  activeTab === item.id ? "bg-white/15 text-accent font-semibold" : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <i className={`${item.icon} w-5 text-center`} />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-4 left-3 right-3">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition">
              <i className="fa-solid fa-arrow-left w-5 text-center" />
              Back to Learner View
            </Link>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {/* Mobile sidebar toggle */}
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden mb-4 text-primary-dark">
            <i className="fa-solid fa-bars text-xl" />
          </button>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-primary-dark">Admin Dashboard</h1>
                  <p className="text-sm text-gray-mid">Welcome back, {adminUser.name}</p>
                </div>
                <button onClick={() => setShowUploadModal(true)} className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition shrink-0">
                  <i className="fa-solid fa-cloud-arrow-up mr-2" />Upload Content
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {userStats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${stat.color}`}>
                        <i className={`${stat.icon} text-lg`} />
                      </div>
                      <span className="text-2xl font-extrabold text-primary-dark">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-mid font-medium">{stat.label}</p>
                    <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Top Modules */}
                <div className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-primary-dark mb-4">Top Modules by Enrollment</h3>
                  <div className="space-y-4">
                    {topModules.map((mod, i) => (
                      <div key={mod.name} className="flex items-center gap-4">
                        <span className="text-sm font-bold text-primary w-6">{i + 1}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-primary-dark truncate">{mod.name}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                              <div className="bg-primary rounded-full h-1.5" style={{ width: `${mod.completion}%` }} />
                            </div>
                            <span className="text-xs text-gray-mid shrink-0">{mod.completion}% avg</span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-mid shrink-0">{mod.enrolled.toLocaleString()} users</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Approvals */}
                <div className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-bold text-primary-dark mb-4">
                    Pending Approvals <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">{pendingApprovals.length}</span>
                  </h3>
                  <div className="space-y-4">
                    {pendingApprovals.map((item) => (
                      <div key={item.module} className="border border-gray-100 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-primary-dark text-sm">{item.module}</h4>
                            <p className="text-xs text-gray-mid">{item.instructor} - {item.lessons} lessons</p>
                            <p className="text-xs text-gray-400 mt-1">Submitted: {item.submitted}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <button className="flex-1 bg-green-600 text-white text-xs font-semibold py-2 rounded hover:bg-green-700 transition">
                            <i className="fa-solid fa-check mr-1" />Approve
                          </button>
                          <button className="flex-1 border border-gray-200 text-gray-600 text-xs font-semibold py-2 rounded hover:bg-gray-50 transition">
                            <i className="fa-solid fa-eye mr-1" />Review
                          </button>
                          <button className="px-3 border border-red-200 text-red-500 text-xs font-semibold py-2 rounded hover:bg-red-50 transition">
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Uploads */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-primary-dark">Recent Uploads</h3>
                  <button onClick={() => setActiveTab("upload")} className="text-primary text-sm font-medium hover:text-primary-dark">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 text-left text-gray-mid">
                        <th className="pb-3 font-medium">File</th>
                        <th className="pb-3 font-medium hidden sm:table-cell">Type</th>
                        <th className="pb-3 font-medium hidden md:table-cell">Size</th>
                        <th className="pb-3 font-medium hidden lg:table-cell">Uploaded By</th>
                        <th className="pb-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUploads.map((file) => (
                        <tr key={file.name} className="border-b border-gray-50">
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <i className={`text-base ${file.type === "Video" ? "fa-solid fa-file-video text-red-500" : file.type === "PDF" ? "fa-solid fa-file-pdf text-blue-500" : file.type === "Presentation" ? "fa-solid fa-file-powerpoint text-orange-500" : "fa-solid fa-clipboard-question text-green-600"}`} />
                              <span className="font-medium text-primary-dark truncate max-w-[200px]">{file.name}</span>
                            </div>
                          </td>
                          <td className="py-3 text-gray-mid hidden sm:table-cell">{file.type}</td>
                          <td className="py-3 text-gray-mid hidden md:table-cell">{file.size}</td>
                          <td className="py-3 text-gray-mid hidden lg:table-cell">{file.uploader}</td>
                          <td className="py-3">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                              file.status === "Published" ? "bg-green-100 text-green-700" :
                              file.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                              "bg-gray-100 text-gray-600"
                            }`}>{file.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Modules Tab */}
          {activeTab === "modules" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary-dark">Manage Modules</h1>
                <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition">
                  <i className="fa-solid fa-plus mr-2" />Create Module
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr className="text-left text-gray-mid">
                      <th className="p-4 font-medium">Module</th>
                      <th className="p-4 font-medium hidden md:table-cell">Category</th>
                      <th className="p-4 font-medium hidden lg:table-cell">Instructor</th>
                      <th className="p-4 font-medium">Enrolled</th>
                      <th className="p-4 font-medium hidden sm:table-cell">Status</th>
                      <th className="p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Maritime Safety & Sea Navigation", cat: "Safety", inst: "Mr. Ranjith Bandara", enrolled: 2100, status: "Published" },
                      { name: "Sustainable Fishing Practices", cat: "Aquaculture", inst: "Prof. Nimal Fernando", enrolled: 1800, status: "Published" },
                      { name: "Boat License Certification", cat: "Licensing", inst: "Dr. Kumara Perera", enrolled: 4600, status: "Published" },
                      { name: "Fish Processing & Export Standards", cat: "Processing", inst: "Mrs. Chamari Silva", enrolled: 980, status: "Published" },
                      { name: "Deep Sea Navigation Advanced", cat: "Safety", inst: "Mr. Ranjith Bandara", enrolled: 0, status: "Draft" },
                      { name: "Coral Reef Protection", cat: "Conservation", inst: "Prof. Nimal Fernando", enrolled: 0, status: "Under Review" },
                    ].map((mod) => (
                      <tr key={mod.name} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-primary-dark">{mod.name}</td>
                        <td className="p-4 text-gray-mid hidden md:table-cell"><span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">{mod.cat}</span></td>
                        <td className="p-4 text-gray-mid hidden lg:table-cell">{mod.inst}</td>
                        <td className="p-4 text-gray-mid">{mod.enrolled.toLocaleString()}</td>
                        <td className="p-4 hidden sm:table-cell">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            mod.status === "Published" ? "bg-green-100 text-green-700" :
                            mod.status === "Draft" ? "bg-gray-100 text-gray-600" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>{mod.status}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-1">
                            <button className="p-2 text-primary hover:bg-primary/5 rounded"><i className="fa-solid fa-pen-to-square" /></button>
                            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded"><i className="fa-solid fa-eye" /></button>
                            <button className="p-2 text-red-400 hover:bg-red-50 rounded"><i className="fa-solid fa-trash" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Upload Tab */}
          {activeTab === "upload" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-primary-dark">Upload Content</h1>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-primary-dark mb-4">Upload New Content</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setUploadSuccess(true); setTimeout(() => setUploadSuccess(false), 3000); }}>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-1.5">Module</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none">
                        <option>Select Module</option>
                        <option>Maritime Safety & Sea Navigation</option>
                        <option>Sustainable Fishing Practices</option>
                        <option>Boat License Certification</option>
                        <option>Fish Processing & Export Standards</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-1.5">Content Type</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none">
                        <option>Video Lecture</option>
                        <option>PDF Document</option>
                        <option>PowerPoint Presentation</option>
                        <option>MCQ Assessment</option>
                        <option>Image / Infographic</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-1.5">Title</label>
                      <input type="text" placeholder="Content title" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-1.5">Language</label>
                      <div className="flex gap-3">
                        {["English", "Sinhala", "Tamil"].map((l) => (
                          <label key={l} className="flex items-center gap-2 text-sm">
                            <input type="checkbox" defaultChecked={l === "English"} className="rounded border-gray-300 text-primary focus:ring-primary" />
                            {l}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-1.5">File</label>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition cursor-pointer">
                        <i className="fa-solid fa-cloud-arrow-up text-4xl text-gray-300 mb-3" />
                        <p className="text-sm text-gray-mid mb-1">Drag and drop files here or click to browse</p>
                        <p className="text-xs text-gray-400">MP4, PDF, PPTX, PNG, JPG (max 500MB)</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-1.5">Description</label>
                      <textarea rows={3} placeholder="Brief description of this content..." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition">
                      <i className="fa-solid fa-upload mr-2" />Upload Content
                    </button>
                    {uploadSuccess && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-700 text-center">
                        <i className="fa-solid fa-check-circle mr-2" />Content uploaded successfully! It will be reviewed before publishing.
                      </div>
                    )}
                  </form>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-primary-dark mb-4">Upload History</h3>
                    <div className="space-y-3">
                      {recentUploads.map((file) => (
                        <div key={file.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <i className={`text-lg ${file.type === "Video" ? "fa-solid fa-file-video text-red-500" : file.type === "PDF" ? "fa-solid fa-file-pdf text-blue-500" : file.type === "Presentation" ? "fa-solid fa-file-powerpoint text-orange-500" : "fa-solid fa-clipboard-question text-green-600"}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary-dark truncate">{file.name}</p>
                            <p className="text-xs text-gray-mid">{file.uploader} - {file.date}</p>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                            file.status === "Published" ? "bg-green-100 text-green-700" :
                            file.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                            "bg-gray-100 text-gray-600"
                          }`}>{file.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-primary-dark mb-4">Upload Guidelines</h3>
                    <ul className="space-y-2 text-sm text-gray-mid">
                      <li className="flex items-start gap-2"><i className="fa-solid fa-circle-info text-primary mt-0.5 text-xs" />Videos must be MP4 format, max 500MB</li>
                      <li className="flex items-start gap-2"><i className="fa-solid fa-circle-info text-primary mt-0.5 text-xs" />Documents: PDF, PPTX, DOCX accepted</li>
                      <li className="flex items-start gap-2"><i className="fa-solid fa-circle-info text-primary mt-0.5 text-xs" />All content must be uploaded in all 3 languages</li>
                      <li className="flex items-start gap-2"><i className="fa-solid fa-circle-info text-primary mt-0.5 text-xs" />Content requires admin approval before publishing</li>
                      <li className="flex items-start gap-2"><i className="fa-solid fa-circle-info text-primary mt-0.5 text-xs" />MCQs need minimum 10 questions per assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary-dark">User Management</h1>
                <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition">
                  <i className="fa-solid fa-user-plus mr-2" />Add User
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Fishermen", count: 8420, icon: "fa-solid fa-anchor", color: "text-blue-600 bg-blue-100" },
                  { label: "Officers", count: 892, icon: "fa-solid fa-id-badge", color: "text-green-600 bg-green-100" },
                  { label: "Boat Owners", count: 1203, icon: "fa-solid fa-ship", color: "text-orange-600 bg-orange-100" },
                  { label: "Instructors", count: 45, icon: "fa-solid fa-chalkboard-user", color: "text-purple-600 bg-purple-100" },
                ].map((r) => (
                  <div key={r.label} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${r.color}`}>
                      <i className={r.icon} />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-primary-dark">{r.count.toLocaleString()}</p>
                      <p className="text-xs text-gray-mid">{r.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:w-80">
                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input type="text" placeholder="Search users..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none" />
                  </div>
                  <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                    <option>All Roles</option>
                    <option>Fisherman</option>
                    <option>Officer</option>
                    <option>Boat Owner</option>
                    <option>Instructor</option>
                    <option>Admin</option>
                  </select>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr className="text-left text-gray-mid">
                      <th className="p-4 font-medium">User</th>
                      <th className="p-4 font-medium hidden sm:table-cell">Role</th>
                      <th className="p-4 font-medium hidden md:table-cell">District</th>
                      <th className="p-4 font-medium hidden lg:table-cell">Enrolled</th>
                      <th className="p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Samantha Jayawardena", email: "samantha@fisheries.gov.lk", role: "Officer", district: "Galle", enrolled: 5, status: "Active" },
                      { name: "Mahinda Rathnayake", email: "mahinda.r@gmail.com", role: "Boat Owner", district: "Negombo", enrolled: 3, status: "Active" },
                      { name: "Kamal Perera", email: "kamal.p@yahoo.com", role: "Fisherman", district: "Matara", enrolled: 2, status: "Active" },
                      { name: "Priya Selvam", email: "priya.s@fisheries.gov.lk", role: "Officer", district: "Jaffna", enrolled: 4, status: "Active" },
                      { name: "Ruwan Silva", email: "ruwan.s@gmail.com", role: "Fisherman", district: "Hambantota", enrolled: 1, status: "Inactive" },
                    ].map((u) => (
                      <tr key={u.email} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="p-4">
                          <p className="font-medium text-primary-dark">{u.name}</p>
                          <p className="text-xs text-gray-mid">{u.email}</p>
                        </td>
                        <td className="p-4 text-gray-mid hidden sm:table-cell">{u.role}</td>
                        <td className="p-4 text-gray-mid hidden md:table-cell">{u.district}</td>
                        <td className="p-4 text-gray-mid hidden lg:table-cell">{u.enrolled} modules</td>
                        <td className="p-4">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${u.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{u.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-primary-dark">Reports & Analytics</h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: "Training Participation", desc: "Module enrollment and completion rates by district", icon: "fa-solid fa-chart-pie", color: "text-primary" },
                  { title: "User Performance", desc: "Assessment scores, pass rates, and learning analytics", icon: "fa-solid fa-chart-line", color: "text-green-600" },
                  { title: "Progress Tracking", desc: "Individual and group progress across all modules", icon: "fa-solid fa-bars-progress", color: "text-orange-500" },
                  { title: "Certificate Report", desc: "Certificates issued by module, district, and period", icon: "fa-solid fa-certificate", color: "text-accent" },
                  { title: "District Summary", desc: "Training coverage and active users per district", icon: "fa-solid fa-map-location-dot", color: "text-purple-600" },
                  { title: "Export Data", desc: "Download reports in PDF, DOCX, and CSV formats", icon: "fa-solid fa-file-export", color: "text-blue-600" },
                ].map((report) => (
                  <button key={report.title} className="bg-white rounded-xl p-6 shadow-sm text-left hover:shadow-md transition group">
                    <i className={`${report.icon} ${report.color} text-2xl mb-3`} />
                    <h3 className="font-bold text-primary-dark mb-1 group-hover:text-primary transition">{report.title}</h3>
                    <p className="text-xs text-gray-mid">{report.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Assessments / Certificates / Settings tabs - simple placeholder */}
          {["assessments", "certificates", "settings"].includes(activeTab) && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-primary-dark capitalize">{activeTab}</h1>
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <i className="fa-solid fa-wrench text-4xl text-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-primary-dark mb-2">Coming Soon</h3>
                <p className="text-sm text-gray-mid">This section is under development and will be available in the next update.</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowUploadModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-primary-dark">Quick Upload</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-gray-600"><i className="fa-solid fa-xmark text-lg" /></button>
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center mb-4 hover:border-primary/50 transition cursor-pointer">
              <i className="fa-solid fa-cloud-arrow-up text-5xl text-primary/30 mb-3" />
              <p className="text-sm font-medium text-primary-dark">Drop files here or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">MP4, PDF, PPTX, PNG, JPG</p>
            </div>
            <button onClick={() => { setShowUploadModal(false); setActiveTab("upload"); }} className="w-full bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition text-sm">
              Go to Upload Page
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
