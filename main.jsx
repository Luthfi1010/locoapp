import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  UserCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Menu,
  Lock,
  Mail,
  LogOut,
  X,
  Send,
  CalendarDays,
  Calendar,
  Eye,
  Pencil,
  Trash2,
  AlertTriangle,
  FolderOpen,
  UploadCloud,
  FileText,
  Sparkles,
  Loader2,
  Target,
  Building,
  ExternalLink,
  MessageSquareWarning,
  TrendingUp,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const initialEmployees = [
  // OPERATION
  { id: 'EMP-001', name: 'Muhammad Ridwan Zain', email: 'm.ridwan@pt-anda.com', phone: '08110000001', address: 'Makassar', birthDate: '1990-01-01', division: 'Operation', jobTitle: 'Direktur Operasional', role: 'Admin', status: 'Aktif', password: 'password123' },
  { id: 'EMP-002', name: 'Nur Rahmi', email: 'nur.rahmi@pt-anda.com', phone: '08110000002', address: 'Makassar', birthDate: '1995-01-13', division: 'Operation', jobTitle: 'HR & Procurement', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  
  // ADMIN & FINANCE
  { id: 'EMP-003', name: 'Resky Yani Fadillah', email: 'resky@pt-anda.com', phone: '08110000003', address: 'Makassar', birthDate: '1992-02-02', division: 'Admin & Finance', jobTitle: 'Manager Admin & Finance', role: 'Manager', status: 'Aktif', password: 'password123' },
  { id: 'EMP-004', name: 'Nurfitrianti Setyowanda', email: 'nurfitrianti@pt-anda.com', phone: '08110000004', address: 'Makassar', birthDate: '1995-03-03', division: 'Admin & Finance', jobTitle: 'Staff Admin & Finance', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  { id: 'EMP-005', name: 'Ruski', email: 'ruski@pt-anda.com', phone: '08110000005', address: 'Makassar', birthDate: '1996-03-04', division: 'Admin & Finance', jobTitle: 'Staff Admin & Finance', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  
  // MARKETING
  { id: 'EMP-006', name: 'Isti Trisnawati', email: 'isti@pt-anda.com', phone: '08110000006', address: 'Makassar', birthDate: '1991-04-04', division: 'Marketing', jobTitle: 'Manager Marketing', role: 'Manager', status: 'Aktif', password: 'password123' },
  { id: 'EMP-007', name: 'Syafa Nuramadana Ananta', email: 'syafa@pt-anda.com', phone: '08110000007', address: 'Makassar', birthDate: '1996-05-05', division: 'Marketing', jobTitle: 'Manager Marketing', role: 'Manager', status: 'Aktif', password: 'password123' },
  { id: 'EMP-008', name: 'Wahyuningsih Astry', email: 'wahyuningsih@pt-anda.com', phone: '08110000008', address: 'Makassar', birthDate: '1997-06-06', division: 'Marketing', jobTitle: 'Staff Marketing', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  { id: 'EMP-009', name: 'Muh Fajar Dwi Putra', email: 'fajar@pt-anda.com', phone: '08110000009', address: 'Makassar', birthDate: '1998-07-07', division: 'Marketing', jobTitle: 'Staff Marketing', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  { id: 'EMP-010', name: 'Kiswah Anugrah Basis', email: 'kiswah@pt-anda.com', phone: '08110000010', address: 'Makassar', birthDate: '1999-08-08', division: 'Marketing', jobTitle: 'Staff Marketing', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  
  // CREATIVE & PROGRAM
  { id: 'EMP-011', name: 'Rideks', email: 'rideks@pt-anda.com', phone: '08110000011', address: 'Makassar', birthDate: '1990-09-09', division: 'Creative & Program', jobTitle: 'Manager Creative & Program', role: 'Manager', status: 'Aktif', password: 'password123' },
  { id: 'EMP-012', name: 'Ihram Naufal', email: 'ihram@pt-anda.com', phone: '08110000012', address: 'Makassar', birthDate: '1997-10-10', division: 'Creative & Program', jobTitle: 'Staff Creative', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  { id: 'EMP-013', name: 'Muh. Surya Syah Putra', email: 'surya@pt-anda.com', phone: '08110000013', address: 'Makassar', birthDate: '1998-11-11', division: 'Creative & Program', jobTitle: 'Staff Creative', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  { id: 'EMP-014', name: 'Laras Candena', email: 'laras@pt-anda.com', phone: '08110000014', address: 'Makassar', birthDate: '1999-01-14', division: 'Creative & Program', jobTitle: 'Staff Program', role: 'Karyawan', status: 'Aktif', password: 'password123' },
  { id: 'EMP-015', name: 'Aulira Harliza Rahwa', email: 'aulira@pt-anda.com', phone: '08110000015', address: 'Makassar', birthDate: '1999-12-12', division: 'Creative & Program', jobTitle: 'Staff Program', role: 'Karyawan', status: 'Aktif', password: 'password123' },
];

const initialProjects = [
  { id: 'PRJ-001', name: 'Promo Ramadhan 2026', client: 'PT Maju Bersama', startDate: '2026-03-01', endDate: '2026-03-30', venue: 'Jakarta Selatan', status: 'Fix', projectOfficer: 'Isti Trisnawati' },
  { id: 'PRJ-002', name: 'Maintenance Tahunan', client: 'Internal', startDate: '2026-04-15', endDate: '2026-04-16', venue: 'Data Center Pusat', status: 'Pending', projectOfficer: 'Muhammad Ridwan Zain' },
  { id: 'PRJ-003', name: 'Rebranding Perusahaan', client: 'Internal', startDate: '2026-05-10', endDate: '2026-06-10', venue: 'Head Office', status: 'Pitching', projectOfficer: 'Rideks' },
  { id: 'PRJ-004', name: 'Peluncuran Produk Q3', client: 'PT Cipta Karya', startDate: '2026-05-15', endDate: '2026-05-25', venue: 'Makassar', status: 'Fix', projectOfficer: 'Rideks' },
];

// --- AUTO GENERATOR MOCK DATA ---
const generateMockTasks = () => {
  const generated = [];
  let taskIdCounter = 1;

  const projectsList = initialProjects.map(p => p.name);
  
  // Periode bulan
  const periods = [
    { start: new Date('2026-04-05'), end: new Date('2026-05-04') }, 
    { start: new Date('2026-05-05'), end: new Date('2026-06-04') }, 
    { start: new Date('2026-06-05'), end: new Date('2026-07-04') }  
  ];

  const statuses = ['Approved', 'Approved', 'Approved', 'Approved', 'Done', 'Revisi', 'In Progress', 'To Do'];
  const types = ['Core', 'Core', 'Core', 'Core', 'Support', 'Colaboration', 'Improvement'];
  
  const titleTemplates = {
    'Operation': ['Setup Server Database', 'Maintenance Aset Internal', 'Audit Infrastruktur', 'Deployment Sistem App', 'Troubleshooting Jaringan'],
    'Admin & Finance': ['Rekap Laporan Keuangan', 'Rekapitulasi Absensi', 'Pembuatan Invoice Klien', 'Follow Up Pembayaran', 'Audit Kas Kecil'],
    'Marketing': ['Eksekusi Campaign IG', 'Analisis Market Q2', 'Pitching Klien Baru', 'Optimasi SEO Website', 'Blast Email Promosi'],
    'Creative & Program': ['Desain Banner Iklan', 'Video Editing Promo', 'Penulisan Copywriting', 'Setup Konsep Event', 'Brainstorming Ide Visual']
  };

  initialEmployees.forEach(emp => {
    periods.forEach(period => {
      for (let i = 0; i < 20; i++) {
        const taskTime = period.start.getTime() + Math.random() * (period.end.getTime() - period.start.getTime());
        const taskDate = new Date(taskTime);
        const dateStr = taskDate.toISOString().split('T')[0];

        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const titleBase = titleTemplates[emp.division][Math.floor(Math.random() * titleTemplates[emp.division].length)];

        let completedAt = null;
        if (status === 'Approved' || status === 'Done') {
           const isOnTime = Math.random() > 0.15; 
           if (isOnTime) {
             const compDate = new Date(taskDate.getTime() - Math.random() * 86400000 * 3); 
             completedAt = compDate.toISOString().split('T')[0];
           } else {
             const compDate = new Date(taskDate.getTime() + Math.random() * 86400000 * 2); 
             completedAt = compDate.toISOString().split('T')[0];
           }
        }

        let partner = '';
        if (type === 'Colaboration' || type === 'Support') {
           const potentialPartners = initialEmployees.filter(e => e.name !== emp.name);
           partner = potentialPartners[Math.floor(Math.random() * potentialPartners.length)].name;
        }

        let revisionCount = 0;
        if (status === 'Approved' && Math.random() > 0.7) {
            revisionCount = Math.floor(Math.random() * 2) + 1; 
        } else if (status === 'Revisi') {
            revisionCount = Math.floor(Math.random() * 3) + 1;
        }

        let approvedBy = [];
        if (status === 'Approved') {
           if (type === 'Support' && partner) {
               const partnerEmp = initialEmployees.find(e => e.name === partner);
               // Memasukkan nama partner dan divisinya untuk validasi Approval 2 Tahap
               approvedBy = partnerEmp ? [partner, partnerEmp.division] : [emp.division];
           } else {
               approvedBy = [emp.division];
               if (type === 'Colaboration' && partner) {
                   const partnerEmp = initialEmployees.find(e => e.name === partner);
                   if (partnerEmp) approvedBy.push(partnerEmp.division);
               }
           }
        } else if (status === 'Done' && type === 'Colaboration') {
           if (Math.random() > 0.5) approvedBy = [emp.division]; 
        }

        generated.push({
          id: `TSK-${String(taskIdCounter++).padStart(4, '0')}`,
          title: `${titleBase} #${i+1}`,
          division: emp.division,
          project: projectsList[Math.floor(Math.random() * projectsList.length)],
          assignee: emp.name,
          taskType: type,
          partner: partner,
          description: `Tugas generated otomatis untuk menguji performa KPI karyawan. (Mock Data)`,
          status: status,
          priority: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)],
          date: dateStr,
          fileName: '',
          revisionCount: revisionCount,
          completedAt: completedAt,
          resultLink: status === 'Approved' || status === 'Done' ? 'https://docs.google.com/sample' : '',
          resultFile: '',
          revisionNotes: status === 'Revisi' ? 'Tolong perbaiki beberapa detail sesuai panduan.' : '',
          approvedBy: approvedBy
        });
      }
    });
  });

  return generated.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const initialTasks = generateMockTasks();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [email, setEmail] = useState(() => localStorage.getItem('userEmail') || '');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard'); 
  const [pageHistory, setPageHistory] = useState([]); // <-- STATE BARU UNTUK HISTORY
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [kpiMonth, setKpiMonth] = useState('all'); 

  // --- FUNGSI NAVIGASI (DENGAN HISTORY) ---
  const navigateTo = (page) => {
    setPageHistory(prev => [...prev, activePage]);
    setActivePage(page);
  };

  const goBack = () => {
    if (pageHistory.length > 0) {
      const prevPage = pageHistory[pageHistory.length - 1];
      setPageHistory(prev => prev.slice(0, -1));
      setActivePage(prevPage);
    }
  };

  const handleSidebarNav = (page) => {
    setPageHistory([]); // Reset history ketika navigasi dari sidebar utama
    setActivePage(page);
  };

  // Calendar State
  const [calendarDate, setCalendarDate] = useState(new Date('2026-05-11')); 
  const prevMonth = () => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));
  const nextMonth = () => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const [calendarFilterEmployee, setCalendarFilterEmployee] = useState('all');

  const [taskFilterMonth, setTaskFilterMonth] = useState('all');
  const [taskFilterName, setTaskFilterName] = useState('all');
  const [taskFilterProject, setTaskFilterProject] = useState('all');
  const [taskFilterStatus, setTaskFilterStatus] = useState('all');
  const [taskSearch, setTaskSearch] = useState(''); 
  const [dashboardMonth, setDashboardMonth] = useState('all'); 
  const [projectDetailFilter, setProjectDetailFilter] = useState('all'); 

  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employeesData_v20');
    return saved ? JSON.parse(saved) : initialEmployees;
  });
  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasksData_v20');
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projectsData_v20');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  useEffect(() => { localStorage.setItem('employeesData_v20', JSON.stringify(employees)); }, [employees]);
  useEffect(() => { localStorage.setItem('tasksData_v20', JSON.stringify(tasks)); }, [tasks]);
  useEffect(() => { localStorage.setItem('projectsData_v20', JSON.stringify(projects)); }, [projects]);

  const [successMessage, setSuccessMessage] = useState('');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', phone: '', division: 'Operation', jobTitle: 'Staff Admin & Finance', role: 'Karyawan' });
  const [addError, setAddError] = useState('');
  const [viewEmployee, setViewEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const [deleteEmployee, setDeleteEmployee] = useState(null);
  const [editError, setEditError] = useState('');

  const [isRegistering, setIsRegistering] = useState(false);
  const [registerData, setRegisterData] = useState(null);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', client: '', startDate: '', endDate: '', venue: '', status: 'Fix', projectOfficer: '' });
  const [editProject, setEditProject] = useState(null);
  const [selectedProjectView, setSelectedProjectView] = useState(null);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    division: 'Operation', assignee: '', project: '', title: '', description: '', taskType: 'Core', partner: '', date: '', fileName: '', revisionCount: 0, completedAt: null, resultLink: '', resultFile: '', approvedBy: []
  });

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [taskToComplete, setTaskToComplete] = useState(null);
  const [resultSubmission, setResultSubmission] = useState({ type: 'link', value: '', fileName: '' });

  const [isRevisionModalOpen, setIsRevisionModalOpen] = useState(false);
  const [taskToRevise, setTaskToRevise] = useState(null);
  const [revisionNotesInput, setRevisionNotesInput] = useState('');

  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiSummary, setAiSummary] = useState('');
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  const currentUser = employees.find(emp => emp.email === email) || { name: 'Demo User', email: email, role: 'Karyawan', division: 'Operation' };
  const isAdmin = currentUser.role === 'Admin';
  const isManager = currentUser.role === 'Manager';
  const isKaryawan = currentUser.role === 'Karyawan';

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = employees.find(emp => emp.email === email && emp.status === 'Aktif');
    
    if (validUser && password === validUser.password) { 
       setIsLoggedIn(true); setLoginError(''); setLoginSuccess('');
       localStorage.setItem('isLoggedIn', 'true'); localStorage.setItem('userEmail', email);
    } else {
      setLoginError('Email atau password salah, atau akun belum aktif!'); setLoginSuccess('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); setEmail(''); setPassword(''); handleSidebarNav('dashboard');
    localStorage.removeItem('isLoggedIn'); localStorage.removeItem('userEmail');
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewTask({ ...newTask, fileName: e.target.files[0].name });
    }
  };

  const openTaskModal = () => {
    setNewTask({ 
      taskType: 'Core',
      division: isAdmin ? 'Operation' : currentUser.division, 
      assignee: isKaryawan ? currentUser.name : '', 
      project: '', 
      title: '', 
      description: '', 
      partner: '', 
      date: '', 
      fileName: '', 
      revisionCount: 0, 
      completedAt: null, 
      resultLink: '', 
      resultFile: '', 
      approvedBy: [] 
    });
    setIsTaskModalOpen(true);
  };

  const openImprovementModal = () => {
    setNewTask({ 
      taskType: 'Improvement',
      division: isAdmin ? 'Operation' : currentUser.division, 
      assignee: currentUser.name, 
      project: '', 
      title: '', 
      description: '', 
      partner: '', 
      date: '', 
      fileName: '', 
      revisionCount: 0, 
      completedAt: null, 
      resultLink: '', 
      resultFile: '', 
      approvedBy: [] 
    });
    setIsTaskModalOpen(true);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newId = `TSK-${String(tasks.length + 1).padStart(4, '0')}`;
    const taskToAdd = { id: newId, ...newTask, status: 'To Do', priority: 'Medium' };
    
    setTasks([taskToAdd, ...tasks]);
    setIsTaskModalOpen(false);
    showSuccess(`Task Order "${newTask.title}" berhasil dibuat!`);
  };

  const handleStatusChangeAttempt = (taskId, newStatus) => {
    if (newStatus === 'Done') {
      const task = tasks.find(t => t.id === taskId);
      setTaskToComplete(task);
      setResultSubmission({ type: 'link', value: '', fileName: '' });
      setIsResultModalOpen(true);
    } else {
      updateTaskStatus(taskId, newStatus);
    }
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const handleResultFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResultSubmission({ ...resultSubmission, fileName: e.target.files[0].name });
    }
  };

  const handleSubmitResult = (e) => {
    e.preventDefault();
    if (resultSubmission.type === 'link' && !resultSubmission.value) { alert('Mohon masukkan URL link hasil pekerjaan Anda!'); return; }
    if (resultSubmission.type === 'file' && !resultSubmission.fileName) { alert('Mohon unggah file hasil pekerjaan Anda!'); return; }

    setTasks(tasks.map(t => {
      if (t.id === taskToComplete.id) {
        return { 
          ...t, status: 'Done', completedAt: new Date().toISOString().split('T')[0],
          resultLink: resultSubmission.type === 'link' ? resultSubmission.value : '',
          resultFile: resultSubmission.type === 'file' ? resultSubmission.fileName : ''
        };
      }
      return t;
    }));

    setIsResultModalOpen(false); setTaskToComplete(null);
    showSuccess('Tugas berhasil diselesaikan dan hasil telah dikirim untuk direviu!');
  };

  const handleApproveTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    const assigneeEmp = employees.find(e => e.name === task.assignee);
    const partnerEmp = employees.find(e => e.name === task.partner);
    const assigneeDiv = assigneeEmp?.division;
    const partnerDiv = partnerEmp?.division;
    
    let newApprovedBy = [...(task.approvedBy || [])];
    
    if (isAdmin) {
      if (task.taskType === 'Support') {
          if (!newApprovedBy.includes(task.partner)) newApprovedBy.push(task.partner);
          if (partnerDiv && !newApprovedBy.includes(partnerDiv)) newApprovedBy.push(partnerDiv);
      } else {
          newApprovedBy = [assigneeDiv, partnerDiv].filter(Boolean);
      }
    } else {
      if (task.taskType === 'Support') {
          // Tahap 1: Approval dari pihak yang dibantu
          if (currentUser.name === task.partner && !newApprovedBy.includes(currentUser.name)) {
              newApprovedBy.push(currentUser.name);
              // Pengecualian: Jika yang dibantu adalah Manager divisinya sendiri, auto-approve tahap 2
              if (isManager && currentUser.division === partnerDiv) {
                  newApprovedBy.push(currentUser.division);
              }
          } 
          // Tahap 2: Approval dari Manager divisi pihak yang dibantu
          else if (isManager && currentUser.division === partnerDiv && !newApprovedBy.includes(currentUser.division)) {
              newApprovedBy.push(currentUser.division);
          }
      } else {
          if (!newApprovedBy.includes(currentUser.division)) newApprovedBy.push(currentUser.division);
      }
    }

    let isFullyApproved = false;
    if (task.taskType === 'Support') {
      // Support butuh approval dari nama partner DAN divisi (manajer) partner
      if (newApprovedBy.includes(task.partner) && (!partnerDiv || newApprovedBy.includes(partnerDiv))) {
          isFullyApproved = true;
      }
    } else if (task.taskType === 'Colaboration' && partnerDiv && assigneeDiv !== partnerDiv) {
      if (newApprovedBy.includes(assigneeDiv) && newApprovedBy.includes(partnerDiv)) isFullyApproved = true;
    } else {
      isFullyApproved = true; 
    }

    setTasks(tasks.map(t => t.id === taskId ? { ...t, approvedBy: newApprovedBy, status: isFullyApproved ? 'Approved' : 'Done' } : t));

    if (isFullyApproved) {
        showSuccess('Tugas disetujui sepenuhnya!');
    } else if (task.taskType === 'Support' && !newApprovedBy.includes(partnerDiv)) {
        showSuccess('Tugas dikonfirmasi sesuai oleh Anda. Menunggu final approval Manajer.');
    } else {
        showSuccess(`Tugas disetujui. Menunggu approval lainnya.`);
    }
  };

  const openRevisionModal = (task) => {
    setTaskToRevise(task); setRevisionNotesInput(''); setIsRevisionModalOpen(true);
  };

  const handleSubmitRevision = (e) => {
    e.preventDefault();
    if(!revisionNotesInput.trim()) { alert('Catatan revisi tidak boleh kosong!'); return; }

    setTasks(tasks.map(t => {
      if (t.id === taskToRevise.id) {
        return { 
          ...t, status: 'Revisi', revisionCount: (t.revisionCount || 0) + 1, completedAt: null, 
          resultLink: '', resultFile: '', revisionNotes: revisionNotesInput, approvedBy: [] 
        };
      }
      return t;
    }));

    setIsRevisionModalOpen(false); setTaskToRevise(null);
    showSuccess('Tugas dikembalikan untuk Revisi!');
  };

  let scopedTasks = tasks;
  if (isManager) {
    scopedTasks = tasks.filter(task => {
      if (task.division === currentUser.division) return true;
      if (task.taskType === 'Colaboration' || task.taskType === 'Support') {
        const assigneeEmp = employees.find(e => e.name === task.assignee);
        const partnerEmp = employees.find(e => e.name === task.partner);
        if (assigneeEmp && assigneeEmp.division === currentUser.division) return true;
        if (partnerEmp && partnerEmp.division === currentUser.division) return true;
      }
      return false;
    });
  } else if (isKaryawan) {
    scopedTasks = tasks.filter(task => task.assignee === currentUser.name || task.partner === currentUser.name);
  }

  const dashboardFilteredTasks = scopedTasks.filter(task => {
    if (dashboardMonth === 'all') return true;
    const taskMonth = task.date ? task.date.substring(5, 7) : '';
    return taskMonth === dashboardMonth;
  });

  const displayedTasks = scopedTasks.filter(task => {
    const taskMonth = task.date ? task.date.substring(5, 7) : '';
    const matchMonth = taskFilterMonth === 'all' || taskMonth === taskFilterMonth;
    const matchName = taskFilterName === 'all' || task.assignee === taskFilterName || task.partner === taskFilterName;
    const matchProject = taskFilterProject === 'all' || task.project === taskFilterProject;
    const matchStatus = taskFilterStatus === 'all' || task.status === taskFilterStatus || (taskFilterStatus === 'Completed' && (task.status === 'Done' || task.status === 'Approved'));
    
    const matchSearch = taskSearch === '' || 
      task.id.toLowerCase().includes(taskSearch.toLowerCase()) || 
      task.title.toLowerCase().includes(taskSearch.toLowerCase()) ||
      task.date.includes(taskSearch);

    return matchMonth && matchName && matchProject && matchStatus && matchSearch;
  });

  const availableNamesInScope = Array.from(new Set(scopedTasks.flatMap(t => [t.assignee, t.partner]).filter(Boolean)));
  
  const filterEmployeeOptions = employees
    .filter(emp => emp.status === 'Aktif' && (isAdmin ? true : emp.division === currentUser.division))
    .map(emp => emp.name)
    .sort();

  const handleAddProject = (e) => {
    e.preventDefault();
    const newId = `PRJ-${String(projects.length + 1).padStart(3, '0')}`;
    setProjects([...projects, { id: newId, ...newProject }]);
    setNewProject({ name: '', client: '', startDate: '', endDate: '', venue: '', status: 'Fix', projectOfficer: '' });
    setIsProjectModalOpen(false); showSuccess('Project baru ditambahkan!');
  };

  const handleUpdateProject = (e) => {
    e.preventDefault();
    setProjects(projects.map(proj => proj.id === editProject.id ? editProject : proj));
    setEditProject(null); showSuccess('Data Project diperbarui!');
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (employees.some(emp => emp.email === newEmployee.email)) { setAddError('Email sudah terdaftar!'); return; }
    if (employees.some(emp => emp.phone === newEmployee.phone)) { setAddError('Nomor HP sudah terdaftar!'); return; }
    
    setAddError('');
    const newId = `EMP-0${String(employees.length + 1).padStart(2, '0')}`;
    setEmployees([...employees, { id: newId, ...newEmployee, status: 'Menunggu', address: '', birthDate: '', password: '' }]);
    setIsAddModalOpen(false); showSuccess(`Tautan dikirim ke: ${newEmployee.email}`);
    setNewEmployee({ name: '', email: '', phone: '', division: 'Operation', jobTitle: 'Staff Admin & Finance', role: 'Karyawan' });
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    const isEmailExist = employees.some(emp => emp.email === editEmployee.email && emp.id !== editEmployee.id);
    if (isEmailExist) { setEditError('Email sudah terdaftar!'); return; }

    setEditError(''); 
    setEmployees(employees.map(emp => emp.id === editEmployee.id ? editEmployee : emp));
    setEditEmployee(null); showSuccess(`Data ${editEmployee.name} diperbarui!`);
  };

  const confirmDeleteEmployee = () => {
    setEmployees(employees.filter(emp => emp.id !== deleteEmployee.id));
    setDeleteEmployee(null); showSuccess(`Data dihapus!`);
  };

  const simulateEmailLink = (emp) => {
    handleLogout(); setIsRegistering(true); setRegisterData({ ...emp, password: '', confirmPassword: '' });
  };

  const handleCompleteRegistration = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) { alert('Password tidak cocok!'); return; }
    setEmployees(employees.map(emp => 
      emp.id === registerData.id ? { ...emp, address: registerData.address, birthDate: registerData.birthDate, status: 'Aktif', password: registerData.password } : emp
    ));
    setIsRegistering(false); setRegisterData(null); setEmail(registerData.email);
    setLoginSuccess('Registrasi berhasil! Silakan login.');
  };

  const showSuccess = (msg) => { setSuccessMessage(msg); setTimeout(() => setSuccessMessage(''), 5000); };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved': return 'bg-green-100 text-green-800 border border-green-200';
      case 'Done': return 'bg-black text-white';
      case 'Revisi': return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'To Do': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-50 text-gray-800';
    }
  };

  const getProjectStatusColor = (status) => {
    switch(status) {
      case 'Fix': return 'bg-green-100 text-green-700';
      case 'Pitching': return 'bg-blue-100 text-blue-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancel': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const formatProjectDate = (start, end) => {
    if (!start) return 'Belum ditentukan';
    const formatter = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    if (!end || start === end) return formatter.format(new Date(start));
    return `${formatter.format(new Date(start))} - ${formatter.format(new Date(end))}`;
  };

  const getPeriodMonth = (dateString) => {
    if (!dateString) return null;
    const [y, m, d] = dateString.split('-').map(Number);
    if (d <= 4) {
        let prevM = m - 1;
        if (prevM === 0) prevM = 12;
        return String(prevM).padStart(2, '0');
    }
    return String(m).padStart(2, '0');
  };

  const calculateKPI = (emp, allTasks, monthFilter) => {
    const empTasks = allTasks.filter(t => t.assignee === emp.name || t.partner === emp.name);
    const periodTasks = empTasks.filter(t => monthFilter === 'all' || getPeriodMonth(t.date) === monthFilter);

    const totalTask = periodTasks.length; 
    const taskCompletedList = periodTasks.filter(t => t.status === 'Approved');
    const taskCompleted = taskCompletedList.length;
    const taskOnTime = taskCompletedList.filter(t => t.completedAt && t.completedAt <= t.date).length;
    const totalRevision = periodTasks.reduce((acc, t) => acc + (t.revisionCount || 0), 0); 
    
    const totalSupportTask = periodTasks.filter(t => t.taskType === 'Support' || t.taskType === 'Colaboration').length;
    const totalImprovementTask = periodTasks.filter(t => t.taskType === 'Improvement').length;
    
    const supportTask = taskCompletedList.filter(t => t.taskType === 'Support' || t.taskType === 'Colaboration').length;
    const improvementTask = taskCompletedList.filter(t => t.taskType === 'Improvement').length;

    const productivityScore = (taskCompleted === 0 || totalTask === 0) ? 0 : Math.min(10, (taskCompleted / totalTask) * 10);
    const qualityScore = taskCompleted === 0 ? 0 : Math.max(1, 10 - (totalRevision / taskCompleted));
    const disciplineScore = taskCompleted === 0 ? 0 : (taskOnTime / taskCompleted) * 10;
    
    const teamworkScore = totalSupportTask === 0 ? 0 : (supportTask / totalSupportTask) * 10; 
    const initiativeScore = totalImprovementTask === 0 ? 0 : (improvementTask / totalImprovementTask) * 10; 

    const kpiScore = (productivityScore * 0.4) + (qualityScore * 0.2) + (disciplineScore * 0.3) + (teamworkScore * 0.05) + (initiativeScore * 0.05);
    const capaian = kpiScore * 10; 

    return { totalTask, taskCompleted, taskOnTime, totalRevision, totalSupportTask, supportTask, totalImprovementTask, improvementTask, productivityScore, qualityScore, disciplineScore, teamworkScore, initiativeScore, kpiScore, capaian };
  };

  const generateAIDescription = async () => {
    if (!newTask.title) { alert('Silakan ketik Judul Pekerjaan (Task) terlebih dahulu!'); return; }
    setIsGeneratingAI(true);
    try {
      const apiKey = "";
      const promptText = `Buatkan deskripsi tugas detail & profesional untuk judul: "${newTask.title}". Gunakan bahasa Indonesia lugas, maksimal 2 paragraf pendek.`;
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) { setNewTask(prev => ({ ...prev, description: text })); showSuccess('✨ Deskripsi AI berhasil dibuat!'); }
    } catch (error) { alert('Gagal menghasilkan teks AI. Pastikan koneksi internet stabil.'); } finally { setIsGeneratingAI(false); }
  };

  const generateDashboardSummary = async () => {
    setIsGeneratingSummary(true);
    try {
      const apiKey = "";
      const activeTasks = dashboardFilteredTasks.filter(t => t.status === 'To Do' || t.status === 'In Progress');
      const taskListStr = activeTasks.map(t => `- ${t.title} (Deadline: ${t.date})`).join('\n');
      const scopeContext = isAdmin ? 'perusahaan secara keseluruhan' : `divisi ${currentUser.division}`;
      const periodContext = dashboardMonth === 'all' ? 'keseluruhan waktu' : `bulan ke-${dashboardMonth}`;
      const promptText = `Berikut tugas aktif di ${scopeContext} untuk ${periodContext}:\n${taskListStr || 'Tidak ada tugas aktif.'}\nBerikan 1 paragraf ringkasan analitik singkat dan motivasi profesional.`;
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) setAiSummary(text);
    } catch (error) { setAiSummary('Gagal memuat ringkasan AI.'); } finally { setIsGeneratingSummary(false); }
  };

  const notifications = (() => {
    let notifs = [];
    const myTasks = tasks.filter(t => t.assignee === currentUser.name || t.partner === currentUser.name);
    
    myTasks.forEach(task => {
      if (task.status === 'Revisi') {
        notifs.push({ id: `rev-${task.id}`, taskId: task.id, type: 'revision', title: `Revisi: ${task.title}`, message: `Manajer/Pemohon memberikan catatan revisi.`, icon: <MessageSquareWarning size={14} className="text-orange-500" />, bgColor: 'bg-orange-50/50' });
      } else if (task.status === 'Approved') {
        notifs.push({ id: `appv-${task.id}`, taskId: task.id, type: 'approved', title: `Approved: ${task.title}`, message: `Tugas Anda telah disetujui sepenuhnya.`, icon: <CheckCircle2 size={14} className="text-green-500" />, bgColor: 'bg-green-50/50' });
      }

      // Notifikasi bagi Pemohon (Partner) untuk mengecek tugas Support
      if (task.status === 'Done' && task.taskType === 'Support' && task.partner === currentUser.name && !task.approvedBy?.includes(task.partner)) {
        notifs.push({ id: `needappv-ptn-${task.id}`, taskId: task.id, type: 'need_approval', title: `Review Bantuan: ${task.title}`, message: `${task.assignee} telah mensubmit hasil support. Harap dicek.`, icon: <Bell size={14} className="text-blue-500" />, bgColor: 'bg-blue-50/50' });
      }
    });

    if (isAdmin || isManager) {
      const tasksToApprove = tasks.filter(task => {
        if (task.status !== 'Done') return false;
        if (isAdmin) return true; 

        const assigneeEmp = employees.find(e => e.name === task.assignee);
        const partnerEmp = employees.find(e => e.name === task.partner);
        
        if (task.taskType === 'Support') {
            const partnerHasApproved = task.approvedBy?.includes(task.partner);
            const managerHasApproved = task.approvedBy?.includes(partnerEmp?.division);
            // Manajer baru mendapat notifikasi JIKA partner (stafnya) sudah menyetujui
            return partnerEmp?.division === currentUser.division && partnerHasApproved && !managerHasApproved;
        } else if (task.taskType === 'Colaboration' && partnerEmp && assigneeEmp?.division !== partnerEmp?.division) {
            return (assigneeEmp?.division === currentUser.division || partnerEmp?.division === currentUser.division) && !task.approvedBy?.includes(currentUser.division);
        } else {
            return assigneeEmp?.division === currentUser.division && !task.approvedBy?.includes(currentUser.division);
        }
      });

      tasksToApprove.forEach(task => {
        // Cegah duplikasi notifikasi jika manajer tersebut sekaligus bertindak sebagai partner
        if (!(task.taskType === 'Support' && task.partner === currentUser.name && !task.approvedBy?.includes(task.partner))) {
            notifs.push({ id: `needappv-mgr-${task.id}`, taskId: task.id, type: 'need_approval', title: `Butuh Appv: ${task.title}`, message: `${task.assignee} telah mensubmit hasil pekerjaan.`, icon: <Bell size={14} className="text-blue-500" />, bgColor: 'bg-blue-50/50' });
        }
      });
    }

    const revisions = notifs.filter(n => n.type === 'revision');
    const needAppv = notifs.filter(n => n.type === 'need_approval');
    const approved = notifs.filter(n => n.type === 'approved').slice(0, 5); 
    return [...needAppv, ...revisions, ...approved];
  })();

  // --- TAMPILAN HALAMAN REGISTRASI ---
  if (isRegistering && registerData) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 font-sans text-gray-900 p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 font-bold text-white shadow-lg shadow-red-200">TO</div>
            <h1 className="text-2xl font-bold text-gray-900">Pendaftaran Akun Karyawan</h1>
            <p className="text-sm text-gray-500 mt-2">Selamat datang di LOCO 21 PRO. Lengkapi data dan buat password.</p>
          </div>
          <form onSubmit={handleCompleteRegistration} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border">
              <div><label className="text-xs text-gray-500 uppercase">Nama Lengkap</label><div className="font-semibold">{registerData.name}</div></div>
              <div><label className="text-xs text-gray-500 uppercase">Email</label><div className="font-semibold">{registerData.email}</div></div>
              <div><label className="text-xs text-gray-500 uppercase">Divisi</label><div className="font-semibold">{registerData.division}</div></div>
              <div><label className="text-xs text-gray-500 uppercase">Jabatan</label><div className="font-semibold">{registerData.jobTitle}</div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div><label className="text-sm font-medium">Tanggal Lahir</label><input type="date" required value={registerData.birthDate || ''} onChange={(e) => setRegisterData({...registerData, birthDate: e.target.value})} className="w-full rounded-lg border px-4 py-2" /></div>
                <div><label className="text-sm font-medium">Alamat</label><textarea required value={registerData.address || ''} onChange={(e) => setRegisterData({...registerData, address: e.target.value})} className="w-full rounded-lg border px-4 py-2" /></div>
              </div>
              <div className="space-y-4">
                <div><label className="text-sm font-medium">Password Baru</label><input type="password" required value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} className="w-full rounded-lg border px-4 py-2" /></div>
                <div><label className="text-sm font-medium">Konfirmasi Password</label><input type="password" required value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} className="w-full rounded-lg border px-4 py-2" /></div>
              </div>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setIsRegistering(false)} className="w-1/3 rounded-lg border py-2 text-sm font-semibold">Batal</button>
              <button type="submit" className="w-2/3 rounded-lg bg-red-600 py-2 text-sm font-semibold text-white">Selesaikan Pendaftaran</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // --- TAMPILAN HALAMAN LOGIN ---
  if (!isLoggedIn) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-100 font-sans text-gray-900">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 font-bold text-white shadow-lg shadow-red-200">TO</div>
            <h1 className="text-2xl font-bold text-gray-900">LOCO 21 PRO</h1>
            <p className="text-sm text-gray-500">Masuk ke akun Anda</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginSuccess && (<div className="rounded-lg bg-green-50 p-3 text-sm text-green-700 border flex items-center gap-2"><CheckCircle2 size={16} /> {loginSuccess}</div>)}
            {loginError && (<div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border flex items-center gap-2"><AlertCircle size={16} /> {loginError}</div>)}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" placeholder="nama@pt-anda.com" required />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" placeholder="••••••••" required />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors">Masuk</button>
          </form>
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-800">
            <p className="font-semibold mb-2">Akses Demo Cepat:</p>
            <div className="grid grid-cols-2 gap-2">
              <div><span className="font-medium text-gray-500">Admin:</span><br/><span className="font-mono">m.ridwan@pt-anda.com</span></div>
              <div><span className="font-medium text-gray-500">Karyawan:</span><br/><span className="font-mono">ihram@pt-anda.com</span></div>
            </div>
            <p className="text-gray-400 mt-3 italic text-[10px]">*Gunakan password: <span className="font-mono font-bold text-gray-600">password123</span></p>
          </div>
        </div>
      </div>
    );
  }

  const taskMenuLabel = isAdmin ? 'Semua Tugas' : (isManager ? 'Tugas Divisi' : 'Tugas Saya');
  const scopeLabel = isAdmin ? 'perusahaan' : (isManager ? `divisi ${currentUser.division}` : 'Anda');

  return (
    <>
      <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
        
        {/* --- SIDEBAR --- */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
          <div className="flex h-16 items-center justify-center border-b border-gray-800 px-4 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 font-bold">TO</div>
              <span className="text-lg font-bold tracking-wider">LOCO 21 PRO</span>
            </div>
          </div>
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
            <div className="mb-6 px-3 py-2 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Akses Saat Ini:</p>
              <p className="text-sm font-semibold text-white">{currentUser.role} <span className="text-gray-500 font-normal">({currentUser.division})</span></p>
            </div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">Menu Utama</p>
            <nav className="space-y-1">
              <button onClick={() => handleSidebarNav('dashboard')} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'dashboard' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><LayoutDashboard size={18} /> Dasbor Utama</button>
              <button onClick={() => { handleSidebarNav('tasks'); setTaskFilterStatus('all'); setTaskFilterProject('all'); setTaskFilterMonth('all'); setTaskFilterName('all'); setTaskSearch(''); }} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'tasks' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><CheckSquare size={18} /> {taskMenuLabel}</button>
              
              {(isAdmin || isManager) && (<button onClick={() => handleSidebarNav('projects')} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'projects' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><FolderOpen size={18} /> Daftar Project</button>)}
              
              <button onClick={() => handleSidebarNav('calendarTask')} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'calendarTask' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><Calendar size={18} /> Kalender Task</button>

              <button onClick={() => handleSidebarNav('calendarProject')} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'calendarProject' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><CalendarDays size={18} /> Kalender Project</button>

              <button onClick={() => handleSidebarNav('kpi')} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'kpi' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><Target size={18} /> {isAdmin ? 'KPI Seluruh Tim' : (isManager ? 'KPI Divisi' : 'KPI Saya')}</button>
              
              {isAdmin && (
                <>
                  <p className="mb-2 mt-6 text-xs font-semibold tracking-wider text-gray-500 uppercase">Administrasi</p>
                  <button onClick={() => handleSidebarNav('employees')} className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activePage === 'employees' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}><Users size={18} /> Manajemen Karyawan</button>
                </>
              )}
            </nav>
          </div>
        </aside>

        {/* --- HEADER --- */}
        <main className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm sm:px-6 shrink-0">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 md:hidden"><Menu size={24} /></button>
              {/* TOMBOL BACK - Tampil Jika Ada History */}
              {pageHistory.length > 0 && (
                <button onClick={goBack} className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                  <ChevronLeft size={16} /> Kembali
                </button>
              )}
            </div>
            <div className="flex items-center gap-4 relative">
              <div className="relative">
                <button onClick={() => setIsNotificationOpen(!isNotificationOpen)} className="relative text-gray-500 hover:text-red-600 transition-colors pt-1">
                  <Bell size={20} />{notifications.length > 0 && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>}
                </button>
                {isNotificationOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsNotificationOpen(false)}></div>
                    <div className="absolute right-0 mt-4 w-80 sm:w-96 rounded-xl bg-white shadow-2xl border border-gray-100 z-50 overflow-hidden">
                      <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b"><h3 className="text-sm font-bold text-gray-900">Notifikasi</h3><span className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{notifications.length} Baru</span></div>
                      <div className="max-h-[400px] overflow-y-auto">
                         {notifications.length > 0 ? (
                           <div className="divide-y divide-gray-50">
                             {notifications.map(n => (
                               <button key={n.id} onClick={() => { navigateTo('tasks'); setTaskFilterStatus('all'); setTaskFilterMonth('all'); setTaskFilterProject('all'); setTaskFilterName('all'); setTaskSearch(n.taskId); setIsNotificationOpen(false); }} className={`w-full text-left flex gap-3 p-4 hover:bg-gray-100 transition-colors ${n.bgColor}`}>
                                  <div className="mt-0.5 flex-shrink-0 bg-white p-1.5 rounded-full shadow-sm border border-gray-100">{n.icon}</div>
                                  <div><p className="text-sm font-bold text-gray-900 leading-tight">{n.title}</p><p className="text-xs text-gray-500 mt-1 line-clamp-2">{n.message}</p></div>
                               </button>
                             ))}
                           </div>
                         ) : (<div className="p-8 text-center text-gray-500"><p className="text-sm font-medium">Belum ada notifikasi baru.</p></div>)}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center gap-4 pl-4 border-l">
                <div className="flex items-center gap-2">
                  <div className="text-right hidden sm:block"><p className="text-sm font-semibold truncate max-w-[150px]">{currentUser.name}</p><p className="text-xs text-gray-500 truncate max-w-[150px]">{currentUser.jobTitle}</p></div>
                  <UserCircle size={32} className="text-gray-400" />
                </div>
                <button onClick={handleLogout} title="Keluar" className="flex items-center justify-center rounded-lg p-2 text-red-500 hover:bg-red-50"><LogOut size={20} /></button>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {successMessage && (<div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-800 border flex items-center gap-3"><CheckCircle2 size={20} /> <span className="font-medium">{successMessage}</span></div>)}

            {/* --- PAGE: DASBOR --- */}
            {activePage === 'dashboard' && (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div><h1 className="text-2xl font-bold text-gray-900">Selamat datang, {currentUser.name.split(' ')[0]}!</h1><p className="mt-1 text-sm text-gray-500">Berikut adalah ringkasan analitik aktivitas {scopeLabel}.</p></div>
                  <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl px-4 py-2 shadow-sm">
                    <CalendarDays size={18} className="text-red-500" />
                    <select value={dashboardMonth} onChange={(e) => setDashboardMonth(e.target.value)} className="border-none text-sm font-bold text-red-600 focus:ring-0 bg-transparent py-0 pl-1 pr-6 cursor-pointer">
                        <option value="all">Semua Periode</option><option value="01">Januari</option><option value="02">Februari</option><option value="03">Maret</option><option value="04">April</option><option value="05">Mei</option><option value="06">Juni</option><option value="07">Juli</option><option value="08">Agustus</option><option value="09">September</option><option value="10">Oktober</option><option value="11">November</option><option value="12">Desember</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div onClick={() => { navigateTo('tasks'); setTaskFilterMonth(dashboardMonth); setTaskFilterStatus('all'); setTaskFilterProject('all'); setTaskFilterName('all'); setTaskSearch(''); }} className="rounded-xl border bg-white p-5 shadow-sm cursor-pointer hover:shadow-md hover:border-red-300 hover:-translate-y-1 transition-all group">
                    <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100"><span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Lihat Daftar &rarr;</span></div>
                    <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white group-hover:scale-110"><CheckSquare size={24} /></div><div><p className="text-sm font-medium text-gray-500">Total Tugas Aktif</p><p className="text-2xl font-bold text-gray-900">{dashboardFilteredTasks.length}</p></div></div>
                  </div>
                  <div onClick={() => { navigateTo('tasks'); setTaskFilterMonth(dashboardMonth); setTaskFilterStatus('To Do'); setTaskFilterProject('all'); setTaskFilterName('all'); setTaskSearch(''); }} className="rounded-xl border bg-white p-5 shadow-sm cursor-pointer hover:shadow-md hover:border-yellow-300 hover:-translate-y-1 transition-all group">
                    <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100"><span className="text-[10px] text-yellow-600 font-bold uppercase tracking-wider">Lihat Daftar &rarr;</span></div>
                    <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 group-hover:scale-110"><Clock size={24} /></div><div><p className="text-sm font-medium text-gray-500">Belum Dikerjakan</p><p className="text-2xl font-bold text-gray-900">{dashboardFilteredTasks.filter(t => t.status === 'To Do').length}</p></div></div>
                  </div>
                  <div onClick={() => { navigateTo('tasks'); setTaskFilterMonth(dashboardMonth); setTaskFilterStatus('In Progress'); setTaskFilterProject('all'); setTaskFilterName('all'); setTaskSearch(''); }} className="rounded-xl border bg-white p-5 shadow-sm cursor-pointer hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all group">
                    <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100"><span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">Lihat Daftar &rarr;</span></div>
                    <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110"><FileText size={24} /></div><div><p className="text-sm font-medium text-gray-500">Sedang Dikerjakan</p><p className="text-2xl font-bold text-gray-900">{dashboardFilteredTasks.filter(t => t.status === 'In Progress').length}</p></div></div>
                  </div>
                  <div onClick={() => { navigateTo('tasks'); setTaskFilterMonth(dashboardMonth); setTaskFilterStatus('Completed'); setTaskFilterProject('all'); setTaskFilterName('all'); setTaskSearch(''); }} className="rounded-xl border bg-white p-5 shadow-sm cursor-pointer hover:shadow-md hover:border-green-300 hover:-translate-y-1 transition-all group">
                    <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100"><span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Lihat Daftar &rarr;</span></div>
                    <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 group-hover:scale-110"><CheckCircle2 size={24} /></div><div><p className="text-sm font-medium text-gray-500">Tugas Selesai (Appv)</p><p className="text-2xl font-bold text-gray-900">{dashboardFilteredTasks.filter(t => t.status === 'Done' || t.status === 'Approved').length}</p></div></div>
                  </div>
                </div>

                {(() => {
                  // Connect langsung ke Daftar Project utama (projects state) agar data presisi & tidak muncul "UNKNOWN"
                  let activeProjectsData = projects.map(proj => {
                    const tasksInProj = dashboardFilteredTasks.filter(t => t.project === proj.name);
                    const completedTasks = tasksInProj.filter(t => t.status === 'Approved').length;
                    const totalTasks = tasksInProj.length;
                    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

                    const assigneeStats = {};
                    tasksInProj.forEach(t => {
                      if (!assigneeStats[t.assignee]) assigneeStats[t.assignee] = { name: t.assignee, completed: 0, total: 0 };
                      assigneeStats[t.assignee].total += 1;
                      if (t.status === 'Approved') assigneeStats[t.assignee].completed += 1;
                    });
                    const sortedAssignees = Object.values(assigneeStats).sort((a, b) => b.completed - a.completed);
                    let topAchiever = null; let bottomAchiever = null;
                    if (sortedAssignees.length > 0 && sortedAssignees[0].completed > 0) topAchiever = sortedAssignees[0];
                    if (sortedAssignees.length > 1) {
                      const lowest = sortedAssignees[sortedAssignees.length - 1];
                      if (topAchiever && lowest.completed < topAchiever.completed) bottomAchiever = lowest;
                    }
                    return { ...proj, tasksInProj, completedTasks, totalTasks, progress, topAchiever, bottomAchiever };
                  });

                  // Filter hanya project yang aktif di bulan yang dipilih
                  activeProjectsData = activeProjectsData.filter(proj => {
                     if (dashboardMonth === 'all') return true;
                     const startM = proj.startDate ? proj.startDate.substring(5, 7) : '';
                     const endM = proj.endDate ? proj.endDate.substring(5, 7) : startM;
                     // Tampilkan jika jadwal project ada di bulan tsb ATAU ada task dari project tsb di bulan tsb
                     return startM === dashboardMonth || endM === dashboardMonth || proj.tasksInProj.length > 0;
                  });

                  if (activeProjectsData.length === 0) return null;

                  return (
                    <div className="mt-8">
                      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><FolderOpen size={20} className="text-gray-400" /> Project / Event Aktif Anda</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeProjectsData.map((proj, idx) => (
                          <div key={idx} onClick={() => { setSelectedProjectView(projects.find(p => p.name === proj.name) || proj); navigateTo('projectDetail'); setProjectDetailFilter('all'); }} className="bg-white border rounded-xl p-5 shadow-sm hover:border-red-400 hover:shadow-md cursor-pointer transition-all group flex flex-col">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="font-bold text-gray-900 line-clamp-2 pr-2 group-hover:text-red-600" title={proj.name}>{proj.name}</h3>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase shrink-0 ${getProjectStatusColor(proj.status)}`}>{proj.status}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-5 flex-1"><Building size={14} /><span className="truncate font-medium">{proj.client}</span></div>
                            <div className="pt-4 border-t border-gray-100">
                              <div className="flex justify-between text-xs mb-1.5"><span className="text-gray-500">Progres Tugas ({proj.completedTasks}/{proj.totalTasks})</span><span className="font-bold text-gray-700">{proj.progress}%</span></div>
                              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2"><div className={`h-1.5 rounded-full ${proj.progress === 100 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${proj.progress}%` }}></div></div>
                              
                              {!isKaryawan && (proj.topAchiever || proj.bottomAchiever) && (
                                <div className="mt-2 flex gap-2 pt-3 border-t border-gray-50">
                                  {proj.topAchiever && (
                                    <div className="flex-1 rounded bg-green-50/50 p-2 border border-green-100 flex flex-col"><p className="text-[9px] text-green-600 uppercase font-bold flex items-center gap-1"><TrendingUp size={10}/> Top Achiever</p><p className="text-xs font-bold truncate">{proj.topAchiever.name}</p><p className="text-[10px] text-gray-500">{proj.topAchiever.completed} Selesai</p></div>
                                  )}
                                  {proj.bottomAchiever && (
                                    <div className="flex-1 rounded bg-orange-50/50 p-2 border border-orange-100 flex flex-col text-right"><p className="text-[9px] text-orange-600 uppercase font-bold flex justify-end gap-1"><AlertTriangle size={10}/> Perlu Push</p><p className="text-xs font-bold truncate">{proj.bottomAchiever.name}</p><p className="text-[10px] text-gray-500">{proj.bottomAchiever.completed} Selesai</p></div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                <div className="mt-8 rounded-xl border border-red-100 bg-gradient-to-r from-red-50 to-orange-50 p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="flex items-center gap-2 text-lg font-bold text-red-900"><Sparkles size={20} className="text-red-500" /> Analisis AI: Beban Kerja</h2>
                      <button onClick={generateDashboardSummary} disabled={isGeneratingSummary} className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-red-600 shadow-sm border border-red-200">
                        {isGeneratingSummary ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} {aiSummary ? 'Perbarui Ringkasan' : 'Buat Ringkasan AI'}
                      </button>
                    </div>
                    {aiSummary ? (<p className="text-sm text-red-900/80 leading-relaxed bg-white/50 p-4 rounded-xl border">{aiSummary}</p>) : (<p className="text-sm text-red-800/60 italic text-center py-4">Klik tombol di atas untuk mendapatkan analisis beban kerja dari AI.</p>)}
                  </div>
                </div>
              </div>
            )}

            {/* --- PAGE: DAFTAR TUGAS --- */}
            {activePage === 'tasks' && (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div><h1 className="text-2xl font-bold text-gray-900">{taskMenuLabel}</h1></div>
                  <div className="flex gap-2">
                    <button onClick={openImprovementModal} className="flex items-center gap-2 rounded-lg bg-white border px-4 py-2 text-sm font-medium hover:bg-gray-50"><Sparkles size={18} className="text-pink-500" /> Ide Improvement</button>
                    <button onClick={openTaskModal} className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"><Plus size={18} /> Buat Tugas</button>
                  </div>
                </div>

                <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4 border-b pb-4">
                    <div className="flex items-center gap-2"><Filter size={16} className="text-gray-400" /><span className="text-xs font-bold text-gray-500 uppercase">Filter Pencarian</span></div>
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                      <input type="text" placeholder="Cari Task ID, Judul, Tanggal..." value={taskSearch} onChange={(e) => setTaskSearch(e.target.value)} className="w-full pl-9 pr-8 py-1.5 text-xs border rounded-lg bg-gray-50" />
                      {taskSearch && <button onClick={() => setTaskSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"><X size={14}/></button>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5">Bulan Deadline</label>
                      <select value={taskFilterMonth} onChange={(e) => setTaskFilterMonth(e.target.value)} className="w-full text-sm border-gray-300 rounded-lg py-2">
                        <option value="all">Semua Bulan</option><option value="01">Januari</option><option value="02">Februari</option><option value="03">Maret</option><option value="04">April</option><option value="05">Mei</option><option value="06">Juni</option><option value="07">Juli</option><option value="08">Agustus</option><option value="09">September</option><option value="10">Oktober</option><option value="11">November</option><option value="12">Desember</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5">Ditugaskan Ke</label>
                      <select value={taskFilterName} onChange={(e) => setTaskFilterName(e.target.value)} className="w-full text-sm border-gray-300 rounded-lg py-2" disabled={isKaryawan}>
                        <option value="all">Semua Nama</option>
                        {filterEmployeeOptions.map(name => (<option key={name} value={name}>{name}</option>))}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5">Project / Event</label>
                      <select value={taskFilterProject} onChange={(e) => setTaskFilterProject(e.target.value)} className="w-full text-sm border-gray-300 rounded-lg py-2">
                        <option value="all">Semua Project</option>
                        {projects.map(p => (<option key={p.id} value={p.name}>{p.name}</option>))}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5">Status Tugas</label>
                      <select value={taskFilterStatus} onChange={(e) => setTaskFilterStatus(e.target.value)} className="w-full text-sm border-gray-300 rounded-lg py-2">
                        <option value="all">Semua Status</option><option value="To Do">To Do</option><option value="In Progress">In Progress</option><option value="Revisi">Revisi</option><option value="Completed">Selesai (Done & Appv)</option><option value="Done">Menunggu Appv</option><option value="Approved">Approved Saja</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                      <thead className="bg-gray-50/50 text-xs uppercase text-gray-500 border-b">
                        <tr><th className="px-6 py-4">Tugas & Project</th><th className="px-6 py-4">Ditugaskan Ke</th><th className="px-6 py-4">Tipe & Lampiran</th><th className="px-6 py-4">Deadline</th><th className="px-6 py-4 text-center">Tepat Waktu</th><th className="px-6 py-4">Status</th><th className="px-6 py-4 text-right">Aksi</th></tr>
                      </thead>
                      <tbody className="divide-y">
                        {displayedTasks.map((task) => (
                          <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <p className="font-bold text-gray-900">{task.title}</p><p className="text-xs text-gray-500 mt-1">{task.id} • {task.project}</p>
                              {task.status === 'Revisi' && task.revisionNotes && (
                                <div className="mt-3 bg-orange-50 border p-2 rounded max-w-sm"><p className="text-[10px] font-bold text-orange-800">Revisi: {task.revisionNotes}</p></div>
                              )}
                            </td>
                            <td className="px-6 py-4"><span className="font-semibold text-slate-800">{task.assignee}</span><p className="text-[10px] text-gray-400 mt-1 font-bold">{task.division}</p></td>
                            <td className="px-6 py-4">
                              <span className="text-xs font-bold text-gray-700 block mb-1.5">{task.taskType === 'Support' ? 'Support (Request)' : task.taskType}</span>
                              {task.taskType === 'Support' && task.partner && (<span className="text-[10px] text-blue-600 block mb-2 font-medium">Pemohon: {task.partner}</span>)}
                              {task.taskType === 'Colaboration' && task.partner && (<span className="text-[10px] text-blue-600 block mb-2 font-medium">Partner: {task.partner}</span>)}
                              {task.resultLink && <a href={task.resultLink} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-2 py-1 rounded text-[10px] hover:bg-green-600">Link Hasil</a>}
                            </td>
                            <td className="px-6 py-4 text-gray-500">{task.date}</td>
                            <td className="px-6 py-4 text-center">
                              {task.completedAt ? (task.completedAt <= task.date ? <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded">Yes</span> : <span className="text-[10px] bg-red-100 text-red-700 px-2 py-1 rounded">No</span>) : '-'}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(task.status)}`}>
                                {task.status === 'Done' ? (() => {
                                   if (task.taskType === 'Support') {
                                       if (!task.approvedBy?.includes(task.partner)) return 'Menunggu Pemohon';
                                       return 'Menunggu Manager';
                                   }
                                   return 'Menunggu Appv';
                                })() : task.status}
                              </span>
                              {/* Menampilkan jumlah revisi jika ada */}
                              {task.revisionCount > 0 && (
                                 <span className="block mt-1.5 text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded w-max border border-orange-100" title="Total revisi pada tugas ini">
                                   {task.revisionCount}x Direvisi
                                 </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-right">
                              {(() => {
                                  const assigneeEmp = employees.find(e => e.name === task.assignee);
                                  const partnerEmp = employees.find(e => e.name === task.partner);
                                  const isAssigneeManager = isManager && assigneeEmp?.division === currentUser.division;
                                  const isPartnerManager = isManager && partnerEmp?.division === currentUser.division;
                                  
                                  const isSupport = task.taskType === 'Support';
                                  const partnerHasApproved = isSupport ? task.approvedBy?.includes(task.partner) : false;
                                  const fullyApproved = task.status === 'Approved';

                                  let canApprove = false;
                                  let canRevisi = false;

                                  if (task.status === 'Done') {
                                      if (isAdmin) {
                                          canApprove = true;
                                          canRevisi = true;
                                      } else if (isSupport) {
                                          // Turn 1: Pihak yang dibantu (Partner)
                                          if (currentUser.name === task.partner && !partnerHasApproved) {
                                              canApprove = true;
                                              canRevisi = true;
                                          } 
                                          // Turn 2: Manager divisi pihak yang dibantu
                                          else if (isPartnerManager && partnerHasApproved && !task.approvedBy?.includes(partnerEmp?.division)) {
                                              canApprove = true;
                                              canRevisi = true;
                                          }
                                      } else if (task.taskType === 'Colaboration' && partnerEmp && assigneeEmp?.division !== partnerEmp?.division) {
                                          if ((isAssigneeManager || isPartnerManager) && !task.approvedBy?.includes(currentUser.division)) {
                                              canApprove = true;
                                              canRevisi = true;
                                          }
                                      } else {
                                          if (isAssigneeManager && !task.approvedBy?.includes(currentUser.division)) {
                                              canApprove = true;
                                              canRevisi = true;
                                          }
                                      }
                                  }
                                  
                                  const canDelete = isAdmin || isAssigneeManager || isPartnerManager;

                                  return (
                                    <div className="flex justify-end gap-1.5 items-center">
                                      {canApprove && (<button onClick={() => handleApproveTask(task.id)} className="text-white bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-[10px] transition-colors">Approve</button>)}
                                      {canRevisi && (<button onClick={() => openRevisionModal(task)} className="text-white bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded text-[10px] transition-colors">Revisi</button>)}
                                      
                                      <select value={task.status} onChange={(e) => handleStatusChangeAttempt(task.id, e.target.value)} className="text-xs border rounded p-1" disabled={task.status === 'Approved' || (currentUser.name !== task.assignee && currentUser.name !== task.partner && !isAdmin && !isManager)}>
                                        {task.status === 'Revisi' && <option value="Revisi">Revisi</option>}
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Done">Done</option>
                                        {task.status === 'Approved' && <option value="Approved">Approved</option>}
                                      </select>
                                      
                                      {canDelete && (
                                        <button onClick={() => { if(window.confirm('Hapus tugas ini?')) setTasks(tasks.filter(t => t.id !== task.id)); }} className="text-red-600 hover:text-red-800 p-1"><Trash2 size={16}/></button>
                                      )}
                                    </div>
                                  );
                              })()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {displayedTasks.length === 0 && (
                      <div className="p-8 text-center text-gray-500">
                        <p>Tidak ada tugas yang sesuai dengan pencarian atau filter.</p>
                        <button onClick={() => { setTaskSearch(''); setTaskFilterMonth('all'); setTaskFilterStatus('all'); setTaskFilterProject('all'); setTaskFilterName('all'); }} className="mt-4 text-red-600 font-medium hover:underline">Hapus Filter & Pencarian</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* --- PAGE: DAFTAR PROJECT --- */}
            {activePage === 'projects' && (isAdmin || isManager) && (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div><h1 className="text-2xl font-bold text-gray-900">Daftar Project</h1></div>
                  {(isAdmin || isManager) && (<button onClick={() => setIsProjectModalOpen(true)} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-red-700 transition-colors"><Plus size={18} /> Tambah Project</button>)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map(proj => {
                    const projTasks = tasks.filter(t => t.project === proj.name);
                    const completed = projTasks.filter(t => t.status === 'Approved').length;
                    const prog = projTasks.length === 0 ? 0 : Math.round((completed / projTasks.length) * 100);

                    return (
                      <div key={proj.id} onClick={() => { setSelectedProjectView(proj); navigateTo('projectDetail'); setProjectDetailFilter('all'); }} className="cursor-pointer rounded-xl border bg-white p-5 hover:border-red-300 hover:-translate-y-1 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                          <div className="h-10 w-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg"><FolderOpen size={20} /></div>
                          <div className="flex items-center gap-2">
                             <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${getProjectStatusColor(proj.status)}`}>{proj.status}</span>
                             {(isAdmin || isManager) && (
                              <button onClick={(e) => { e.stopPropagation(); setEditProject(proj); }} title="Edit Project" className="rounded p-1 text-gray-400 hover:text-red-600 transition-colors">
                                <Pencil size={14} />
                              </button>
                             )}
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1 truncate group-hover:text-red-600">{proj.name}</h3>
                        <p className="text-xs text-gray-500 font-medium mb-3">ID: {proj.id} • Klien: {proj.client}</p>
                        <div className="pt-4 mt-4 border-t border-gray-100">
                          <div className="flex justify-between text-xs mb-1.5"><span>Progres Tugas</span><span className="font-bold">{prog}%</span></div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5"><div className={`h-1.5 rounded-full ${prog === 100 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${prog}%` }}></div></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* --- PAGE: PROJECT DETAIL --- */}
            {activePage === 'projectDetail' && selectedProjectView && (() => {
              const proj = selectedProjectView;
              const projectTasks = scopedTasks.filter(t => t.project === proj.name);
              const completedTasks = projectTasks.filter(t => t.status === 'Approved').length;
              const pendingTasks = projectTasks.length - completedTasks;
              const SIMULATED_TODAY = '2026-05-11'; 
              const overdueTasks = projectTasks.filter(t => t.status !== 'Approved' && t.date < SIMULATED_TODAY).length;
              const progress = projectTasks.length === 0 ? 0 : Math.round((completedTasks / projectTasks.length) * 100);

              let filteredProjectTasks = projectTasks;
              if (projectDetailFilter === 'completed') filteredProjectTasks = projectTasks.filter(t => t.status === 'Approved');
              else if (projectDetailFilter === 'pending') filteredProjectTasks = projectTasks.filter(t => t.status !== 'Approved');
              else if (projectDetailFilter === 'overdue') filteredProjectTasks = projectTasks.filter(t => t.status !== 'Approved' && t.date < SIMULATED_TODAY);

              return (
                <div>
                  <button onClick={() => { 
                      if (pageHistory.length > 0) goBack(); 
                      else { setSelectedProjectView(null); handleSidebarNav(isAdmin || isManager ? 'projects' : 'dashboard'); } 
                    }} className="flex items-center gap-2 text-gray-500 hover:text-red-600 mb-6 font-medium">
                    <ChevronLeft size={20} /> Kembali
                  </button>
                  <div className="bg-white rounded-xl border p-6 md:p-8 mb-6 shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{proj.name}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2 mb-8">
                       <span className="font-medium text-blue-600">Klien: {proj.client || 'Internal'}</span> | 
                       <span>Tanggal: {formatProjectDate(proj.startDate, proj.endDate)}</span> | 
                       <span>PO: {proj.projectOfficer}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 mb-8">
                      <div onClick={() => setProjectDetailFilter('all')} className={`bg-blue-50 border rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-transform ${projectDetailFilter === 'all' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-blue-100'}`}><p className="text-sm">Total Progres</p><p className="text-3xl font-bold text-blue-700">{progress}%</p></div>
                      <div onClick={() => setProjectDetailFilter('completed')} className={`bg-green-50 border rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-transform ${projectDetailFilter === 'completed' ? 'border-green-500 ring-2 ring-green-200' : 'border-green-100'}`}><p className="text-sm">Selesai</p><p className="text-3xl font-bold text-green-700">{completedTasks}</p></div>
                      <div onClick={() => setProjectDetailFilter('pending')} className={`bg-orange-50 border rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-transform ${projectDetailFilter === 'pending' ? 'border-orange-500 ring-2 ring-orange-200' : 'border-orange-100'}`}><p className="text-sm">Belum Selesai</p><p className="text-3xl font-bold text-orange-700">{pendingTasks}</p></div>
                      <div onClick={() => setProjectDetailFilter('overdue')} className={`bg-red-50 border rounded-xl p-4 cursor-pointer hover:-translate-y-1 transition-transform ${projectDetailFilter === 'overdue' ? 'border-red-500 ring-2 ring-red-200' : 'border-red-100'}`}><p className="text-sm">Lewat Deadline</p><p className="text-3xl font-bold text-red-700">{overdueTasks}</p></div>
                    </div>

                    <table className="w-full text-left border-collapse text-sm">
                      <thead><tr className="bg-gray-50 text-gray-600 border-y"><th className="py-3 px-4">Nama Tugas</th><th className="py-3 px-4">Penerima</th><th className="py-3 px-4">Status</th><th className="py-3 px-4">Deadline</th><th className="py-3 px-4 text-right"></th></tr></thead>
                      <tbody className="divide-y">
                        {filteredProjectTasks.map((task) => (
                          <tr 
                            key={task.id} 
                            onClick={() => {
                              navigateTo('tasks');
                              setTaskSearch(task.id);
                              setTaskFilterMonth('all');
                              setTaskFilterStatus('all');
                              setTaskFilterProject('all');
                              setTaskFilterName('all');
                            }}
                            className={`group cursor-pointer hover:bg-gray-100 transition-colors ${task.status !== 'Approved' && task.date < SIMULATED_TODAY ? 'bg-red-50/30 hover:bg-red-100/50' : ''}`}
                            title="Klik untuk mengelola tugas ini"
                          >
                            <td className="py-4 px-4 font-medium group-hover:text-red-600 transition-colors">{task.title}</td>
                            <td className="py-4 px-4">{task.assignee}</td>
                            <td className="py-4 px-4"><span className={`px-2 py-0.5 rounded font-bold text-[10px] ${getStatusColor(task.status)}`}>{task.status}</span></td>
                            <td className="py-4 px-4 flex items-center gap-2">
                               {task.date}
                               {task.status !== 'Approved' && task.date < SIMULATED_TODAY && <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">OVERDUE</span>}
                            </td>
                            <td className="py-4 px-4 text-right">
                              <ExternalLink size={16} className="text-gray-300 group-hover:text-red-500 inline-block" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })()}

            {/* --- PAGE: KALENDER BARU --- */}
            {(activePage === 'calendarTask' || activePage === 'calendarProject') && (() => {
              const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
              const firstDayOfMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay();
              const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Senin sebagai hari pertama (index 0)
              const currentMonthStr = `${calendarDate.getFullYear()}-${String(calendarDate.getMonth() + 1).padStart(2, '0')}`;
              
              const SIMULATED_TODAY = '2026-05-11'; 

              // Menyiapkan grid kalender berbasis array agar mudah dikalkulasi per minggu
              const gridDays = [];
              for (let i = 0; i < startOffset; i++) gridDays.push(null);
              for (let i = 1; i <= daysInMonth; i++) {
                 gridDays.push({ day: i, dateStr: `${currentMonthStr}-${String(i).padStart(2, '0')}` });
              }
              while (gridDays.length % 7 !== 0) gridDays.push(null);

              // Memecah grid menjadi baris per minggu (7 hari)
              const weeks = [];
              for (let i = 0; i < gridDays.length; i += 7) weeks.push(gridDays.slice(i, i + 7));

              // Warna bar khusus untuk Kalender Project (Unik per Project)
              const getProjectSpecificColor = (projectId) => {
                 const colors = [
                    'bg-blue-500 text-white border-blue-600',
                    'bg-purple-500 text-white border-purple-600',
                    'bg-pink-500 text-white border-pink-600',
                    'bg-orange-500 text-white border-orange-600',
                    'bg-indigo-500 text-white border-indigo-600',
                    'bg-teal-500 text-white border-teal-600',
                    'bg-rose-500 text-white border-rose-600',
                    'bg-emerald-500 text-white border-emerald-600',
                    'bg-cyan-500 text-white border-cyan-600',
                    'bg-amber-600 text-white border-amber-700'
                 ];
                 let hash = 0;
                 for (let i = 0; i < projectId.length; i++) {
                    hash = projectId.charCodeAt(i) + ((hash << 5) - hash);
                 }
                 return colors[Math.abs(hash) % colors.length];
              };

              return (
                <div>
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{activePage === 'calendarTask' ? 'Kalender Task' : 'Kalender Project'}</h1>
                      <p className="mt-1 text-sm text-gray-500">{activePage === 'calendarTask' ? 'Klik tanggal untuk melihat semua tugas hari itu, atau klik label untuk detail spesifik.' : 'Klik label project untuk melihat detail spesifik project yang berlangsung pada tanggal tersebut.'}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                       {(isAdmin || isManager) && (
                         <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border shadow-sm">
                            <Filter size={16} className="text-gray-400" />
                            <select 
                               value={calendarFilterEmployee} 
                               onChange={(e) => setCalendarFilterEmployee(e.target.value)} 
                               className="border-none text-sm font-bold text-gray-700 focus:ring-0 bg-transparent py-0 pl-1 pr-6 cursor-pointer"
                            >
                              <option value="all">Semua Karyawan</option>
                              {filterEmployeeOptions.map(name => (<option key={name} value={name}>{name}</option>))}
                            </select>
                         </div>
                       )}
                       <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl border shadow-sm">
                          <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"><ChevronLeft size={20}/></button>
                          <span className="font-bold w-36 text-center text-gray-800">{monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}</span>
                          <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"><ChevronRight size={20}/></button>
                       </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col" style={{ minHeight: '600px' }}>
                     <div className="grid grid-cols-7 border-b bg-gray-50 shrink-0">
                       {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((d, idx) => (
                          <div key={d} className={`py-3 text-center text-xs font-bold uppercase ${idx === 5 || idx === 6 ? 'text-red-500' : 'text-gray-500'}`}>{d}</div>
                       ))}
                     </div>
                     <div className="flex flex-col flex-1">
                       {weeks.map((week, wIdx) => {
                          
                          // Cari data Project yang melintasi minggu ini
                          let weekProjects = [];
                          if (activePage === 'calendarProject') {
                              const validDays = week.filter(d => d !== null);
                              if (validDays.length > 0) {
                                  const weekStartStr = validDays[0].dateStr;
                                  const weekEndStr = validDays[validDays.length - 1].dateStr;

                                  weekProjects = projects.filter(p => {
                                      if (!p.startDate) return false;
                                      const end = p.endDate || p.startDate;
                                      if (p.startDate > weekEndStr || end < weekStartStr) return false;
                                      if (calendarFilterEmployee !== 'all' && p.projectOfficer !== calendarFilterEmployee) return false;
                                      return true;
                                  });
                              }
                          }

                          return (
                             <div key={`w-${wIdx}`} className="relative grid grid-cols-7 flex-1 border-b min-h-[120px]">
                               {/* LAYER BAWAH: KOTAK TANGGAL */}
                               {week.map((dayObj, dIdx) => {
                                  if (!dayObj) return <div key={`empty-${wIdx}-${dIdx}`} className="border-r bg-gray-50/30 p-2"></div>;

                                  const isToday = dayObj.dateStr === SIMULATED_TODAY;
                                  
                                  let dayTasks = [];
                                  if (activePage === 'calendarTask') {
                                      dayTasks = scopedTasks.filter(t => {
                                          if (t.date !== dayObj.dateStr) return false;
                                          if (calendarFilterEmployee !== 'all') {
                                              return t.assignee === calendarFilterEmployee || t.partner === calendarFilterEmployee;
                                          }
                                          return true;
                                      });
                                  }

                                  return (
                                     <div 
                                        key={dayObj.day} 
                                        onClick={() => {
                                          if (activePage === 'calendarTask') {
                                            navigateTo('tasks');
                                            setTaskSearch(dayObj.dateStr); 
                                            setTaskFilterMonth('all');
                                            setTaskFilterStatus('all');
                                            setTaskFilterProject('all');
                                            setTaskFilterName('all');
                                          }
                                        }}
                                        className={`border-r p-2 transition-colors ${activePage === 'calendarTask' ? 'cursor-pointer hover:bg-gray-100' : ''} ${isToday ? 'bg-red-50/20' : ''}`}
                                     >
                                        <div className="flex justify-between items-start mb-2">
                                           <span className={`text-sm font-bold flex items-center justify-center ${isToday ? 'bg-red-600 text-white h-7 w-7 rounded-full shadow-md' : 'text-gray-700'}`}>{dayObj.day}</span>
                                        </div>
                                        
                                        {/* HANYA RENDER TASK CHIPS DI KALENDER TASK */}
                                        {activePage === 'calendarTask' && (
                                          <div className="space-y-1.5 overflow-y-auto custom-scrollbar max-h-[80px]">
                                             {dayTasks.map(t => (
                                                <div 
                                                  key={`t-${t.id}`} 
                                                  onClick={(e) => {
                                                    e.stopPropagation(); 
                                                    navigateTo('tasks');
                                                    setTaskSearch(t.id); 
                                                    setTaskFilterMonth('all');
                                                    setTaskFilterStatus('all');
                                                    setTaskFilterProject('all');
                                                    setTaskFilterName('all');
                                                  }}
                                                  className={`text-[10px] font-medium px-1.5 py-1 rounded truncate border flex items-center gap-1 hover:brightness-95 transition-all cursor-pointer ${t.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : (t.status === 'Done' ? 'bg-gray-100 text-gray-700 border-gray-300' : 'bg-orange-50 text-orange-700 border-orange-200')}`} title={`${t.title} (${t.status})`}
                                                >
                                                  📝 {t.title}
                                                </div>
                                             ))}
                                          </div>
                                        )}
                                     </div>
                                  )
                               })}

                               {/* LAYER ATAS: PROJECT SPANNING BARS (KHUSUS KALENDER PROJECT) */}
                               {activePage === 'calendarProject' && (
                                  <div className="absolute top-10 left-0 right-0 grid grid-cols-7 gap-x-0 gap-y-1.5 px-1 pointer-events-none z-10">
                                     {weekProjects.map(p => {
                                        const pStart = p.startDate;
                                        const pEnd = p.endDate || p.startDate;

                                        let colStart = 1;
                                        let colEnd = 7;

                                        // Cari index hari mulai dan selesai di dalam minggu ini
                                        const startIdx = week.findIndex(d => d && d.dateStr === pStart);
                                        const endIdx = week.findIndex(d => d && d.dateStr === pEnd);

                                        if (startIdx !== -1) colStart = startIdx + 1;
                                        if (endIdx !== -1) colEnd = endIdx + 1;

                                        // Mendeteksi apakah event ini berlanjut dari minggu lalu / ke minggu depan
                                        const firstValidDay = week.find(d => d !== null);
                                        const lastValidDay = [...week].reverse().find(d => d !== null);
                                        const isContinuingFromPrev = startIdx === -1 && firstValidDay && pStart < firstValidDay.dateStr;
                                        const isContinuingToNext = endIdx === -1 && lastValidDay && pEnd > lastValidDay.dateStr;

                                        return (
                                           <div
                                              key={`pb-${p.id}`}
                                              style={{ gridColumnStart: colStart, gridColumnEnd: colEnd + 1 }}
                                              className="pointer-events-auto flex"
                                           >
                                              <div
                                                 onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProjectView(p);
                                                    navigateTo('projectDetail');
                                                    setProjectDetailFilter('all');
                                                 }}
                                                 className={`flex-1 text-[11px] font-bold px-2 py-1 mx-0.5 shadow-sm truncate cursor-pointer hover:brightness-110 transition-all border ${getProjectSpecificColor(p.id)} ${isContinuingFromPrev ? 'rounded-l-none border-l-0' : 'rounded-l-md'} ${isContinuingToNext ? 'rounded-r-none border-r-0' : 'rounded-r-md'}`}
                                                 title={`${p.name} (${formatProjectDate(pStart, pEnd)})`}
                                              >
                                                 {p.name}
                                              </div>
                                           </div>
                                        );
                                     })}
                                  </div>
                               )}
                             </div>
                          );
                       })}
                     </div>
                  </div>
                </div>
              );
            })()}

            {/* --- PAGE: KPI --- */}
            {activePage === 'kpi' && (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Key Performance Indicator (KPI)</h1>
                    <p className="mt-1 text-sm text-gray-500">Evaluasi performa berdasarkan penyelesaian tugas yang disetujui (Approved).</p>
                  </div>
                  <select value={kpiMonth} onChange={(e) => setKpiMonth(e.target.value)} className="border rounded-lg px-4 py-2 text-sm bg-white shadow-sm border-gray-300">
                    <option value="all">Semua Periode</option><option value="04">April</option><option value="05">Mei</option><option value="06">Juni</option>
                  </select>
                </div>
                <div className="space-y-6">
                  {employees.filter(emp => emp.status === 'Aktif').filter(emp => isAdmin || (isManager && emp.division === currentUser.division) || emp.email === currentUser.email).map(emp => {
                      const kpi = calculateKPI(emp, tasks, kpiMonth);
                      return (
                        <div key={emp.id} className="rounded-2xl border bg-white shadow-lg p-6 hover:shadow-xl transition-shadow">
                          <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <div className="flex items-center gap-4">
                              <UserCircle size={40} className="text-gray-300" />
                              <div><h2 className="text-xl font-black text-gray-900">{emp.name}</h2><p className="text-sm font-medium text-gray-500">{emp.jobTitle}</p></div>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-black text-gray-900">{kpi.kpiScore.toFixed(2)}<span className="text-sm text-gray-400">/10</span></p>
                              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Total Score</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex flex-col justify-between">
                              <div><p className="text-xs font-bold text-blue-800 mb-1">Productivity</p><p className="text-2xl font-black text-blue-900">{kpi.productivityScore.toFixed(1)}</p></div>
                              <div className="mt-2 border-t border-blue-200/60 pt-2"><p className="text-[10px] text-blue-600 font-bold">Bobot 40%</p><p className="text-[9px] text-blue-700/80 mt-0.5 leading-tight">{kpi.taskCompleted} dari {kpi.totalTask} disetujui (Appv)</p></div>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex flex-col justify-between">
                              <div><p className="text-xs font-bold text-purple-800 mb-1">Quality</p><p className="text-2xl font-black text-purple-900">{kpi.qualityScore.toFixed(1)}</p></div>
                              <div className="mt-2 border-t border-purple-200/60 pt-2"><p className="text-[10px] text-purple-600 font-bold">Bobot 20%</p><p className="text-[9px] text-purple-700/80 mt-0.5 leading-tight">Total {kpi.totalRevision} catatan revisi</p></div>
                            </div>
                            <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl flex flex-col justify-between">
                              <div><p className="text-xs font-bold text-teal-800 mb-1">Discipline</p><p className="text-2xl font-black text-teal-900">{kpi.disciplineScore.toFixed(1)}</p></div>
                              <div className="mt-2 border-t border-teal-200/60 pt-2"><p className="text-[10px] text-teal-600 font-bold">Bobot 30%</p><p className="text-[9px] text-teal-700/80 mt-0.5 leading-tight">{kpi.taskOnTime} tepat waktu dari {kpi.taskCompleted} Appv</p></div>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex flex-col justify-between">
                              <div><p className="text-xs font-bold text-orange-800 mb-1">Teamwork</p><p className="text-2xl font-black text-orange-900">{kpi.teamworkScore.toFixed(1)}</p></div>
                              <div className="mt-2 border-t border-orange-200/60 pt-2"><p className="text-[10px] text-orange-600 font-bold">Bobot 5%</p><p className="text-[9px] text-orange-700/80 mt-0.5 leading-tight">{kpi.supportTask} dari {kpi.totalSupportTask} disetujui</p></div>
                            </div>
                            <div className="bg-pink-50 border border-pink-100 p-4 rounded-xl flex flex-col justify-between">
                              <div><p className="text-xs font-bold text-pink-800 mb-1">Initiative</p><p className="text-2xl font-black text-pink-900">{kpi.initiativeScore.toFixed(1)}</p></div>
                              <div className="mt-2 border-t border-pink-200/60 pt-2"><p className="text-[10px] text-pink-600 font-bold">Bobot 5%</p><p className="text-[9px] text-pink-700/80 mt-0.5 leading-tight">{kpi.improvementTask} dari {kpi.totalImprovementTask} disetujui</p></div>
                            </div>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>
            )}

            {/* --- PAGE: EMPLOYEES --- */}
            {activePage === 'employees' && isAdmin && (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div><h1 className="text-2xl font-bold text-gray-900">Manajemen Karyawan</h1></div>
                  <button onClick={() => setIsAddModalOpen(true)} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-red-700 transition-colors"><Plus size={18} /> Tambah Karyawan</button>
                </div>
                <div className="rounded-xl border bg-white shadow-sm overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 border-b"><tr><th className="px-6 py-4">Nama & Kontak</th><th className="px-6 py-4">Divisi & Jabatan</th><th className="px-6 py-4">Status & Role</th><th className="px-6 py-4 text-right">Aksi</th></tr></thead>
                    <tbody className="divide-y">
                      {employees.map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4"><p className="font-bold text-gray-900">{emp.name}</p><p className="text-xs text-gray-500">{emp.email}</p></td>
                          <td className="px-6 py-4"><p className="font-bold text-gray-700">{emp.division}</p><p className="text-xs text-gray-500">{emp.jobTitle}</p></td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${emp.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{emp.status}</span>
                            <span className="block mt-1 text-[10px] uppercase font-semibold text-gray-500">{emp.role}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2 items-center">
                              {emp.status === 'Menunggu' && (<button onClick={() => simulateEmailLink(emp)} className="flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600 hover:bg-blue-100"><Send size={10} /> Simulasi</button>)}
                              <button onClick={() => setViewEmployee(emp)} className="text-gray-500 hover:text-blue-600 p-1" title="Lihat Detail"><Eye size={18} /></button>
                              <button onClick={() => setEditEmployee(emp)} className="text-gray-500 hover:text-green-600 p-1" title="Edit Data"><Pencil size={18} /></button>
                              <button onClick={() => setDeleteEmployee(emp)} className="text-gray-500 hover:text-red-600 p-1" title="Hapus"><Trash2 size={18} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* === SEMUA MODALS === */}
      
      {/* 1. Modal Tambah/Buat Tugas Baru */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden my-8">
            <div className="flex items-center justify-between border-b p-6 bg-gray-50 sticky top-0 z-10">
              <h3 className="text-lg font-bold text-gray-900">{isKaryawan && newTask.taskType === 'Improvement' ? 'Form Inisiatif Improvement' : 'Form Task Order Baru'}</h3>
              <button onClick={() => setIsTaskModalOpen(false)} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><X size={20} /></button>
            </div>
            <form onSubmit={handleAddTask} className="p-6">
              
              <div className="mb-6">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Tipe Tugas / Pekerjaan</label>
                <select required value={newTask.taskType} onChange={(e) => {
                    const newType = e.target.value;
                    let newAssignee = newTask.assignee;
                    let newPartner = newTask.partner;
                    let newDivision = newTask.division;
                    
                    if (isKaryawan) {
                        if (newType === 'Support') {
                            newAssignee = ''; 
                            newPartner = currentUser.name; 
                        } else {
                            newAssignee = currentUser.name;
                            newPartner = '';
                            newDivision = currentUser.division;
                        }
                    }
                    setNewTask({...newTask, taskType: newType, assignee: newAssignee, partner: newPartner, division: newDivision});
                }} className="w-full rounded-lg border px-4 py-3 text-sm bg-blue-50 font-bold text-blue-900 border-blue-200 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow">
                  <option value="Core">Core Task (Tugas Utama Harian)</option>
                  <option value="Support">Support (Request Bantuan dari Divisi / Rekan Lain)</option>
                  <option value="Colaboration">Colaboration (Kerjasama Setara)</option>
                  <option value="Improvement">Improvement (Inisiatif Perbaikan Internal)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Divisi Tujuan</label>
                  <select required value={newTask.division} disabled={!isAdmin && newTask.taskType !== 'Support'} onChange={(e) => setNewTask({...newTask, division: e.target.value, assignee: ''})} className={`w-full rounded-lg border px-4 py-2 text-sm ${(!isAdmin && newTask.taskType !== 'Support') ? 'bg-gray-100 text-gray-500' : 'bg-white'}`}>
                    <option value="Operation">Operation</option><option value="Admin & Finance">Admin & Finance</option><option value="Marketing">Marketing</option><option value="Creative & Program">Creative & Program</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Ditugaskan Ke (PIC Pekerja)</label>
                  <select required value={newTask.assignee} disabled={isKaryawan && newTask.taskType !== 'Support'} onChange={(e) => setNewTask({...newTask, assignee: e.target.value})} className={`w-full rounded-lg border px-4 py-2 text-sm ${(isKaryawan && newTask.taskType !== 'Support') ? 'bg-gray-100 text-gray-500 font-semibold' : 'bg-white'}`}>
                    <option value="" disabled>-- Pilih Karyawan --</option>
                    {employees.filter(emp => emp.status === 'Aktif' && emp.division === newTask.division).map(emp => (<option key={emp.id} value={emp.name}>{emp.name}</option>))}
                  </select>
                </div>
                
                {(newTask.taskType === 'Colaboration' || newTask.taskType === 'Support') && (
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 col-span-full flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <label className="mb-1.5 block text-sm font-bold text-orange-900">
                        {newTask.taskType === 'Support' ? 'Pemohon Bantuan (Requestor)' : 'Partner Kolaborasi'}
                      </label>
                      <select required value={newTask.partner} disabled={isKaryawan && newTask.taskType === 'Support'} onChange={(e) => setNewTask({...newTask, partner: e.target.value})} className={`w-full rounded-lg border px-4 py-2 text-sm ${(isKaryawan && newTask.taskType === 'Support') ? 'bg-gray-100 text-gray-600 font-bold' : 'bg-white'}`}>
                        <option value="" disabled>-- Pilih {newTask.taskType === 'Support' ? 'Pemohon' : 'Partner'} --</option>
                        {employees.filter(emp => emp.status === 'Aktif' && emp.name !== newTask.assignee).map(emp => (<option key={emp.id} value={emp.name}>{emp.name}</option>))}
                      </select>
                    </div>
                    {isKaryawan && newTask.taskType === 'Support' && (
                       <p className="text-[11px] text-orange-700 md:w-1/3 leading-tight font-medium mt-2 md:mt-0">
                          *Anda tercatat sebagai pemohon bantuan. Anda yang akan melakukan pengecekan (approve) pertama.
                       </p>
                    )}
                  </div>
                )}

                <div className="col-span-full">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Event / Project Terkait</label>
                  <select required value={newTask.project} onChange={(e) => setNewTask({...newTask, project: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm">
                    <option value="" disabled>-- Pilih Project --</option>{projects.map(proj => (<option key={proj.id} value={proj.name}>{proj.name}</option>))}
                  </select>
                </div>
                <div className="col-span-full">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Task (Judul Pekerjaan)</label>
                  <input required type="text" value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" placeholder="Contoh: Desain Banner A" />
                </div>
                <div className="col-span-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-gray-700">Deskripsi Detail Tugas</label>
                    <button type="button" onClick={generateAIDescription} disabled={isGeneratingAI || !newTask.title} className="flex items-center gap-1.5 rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-700 border border-red-200 hover:bg-red-200 transition-colors">
                      ✨ Draft AI Deskripsi
                    </button>
                  </div>
                  <textarea required value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm min-h-[100px]" placeholder="Penjelasan tugas..."></textarea>
                </div>
                
                <div className={!(newTask.taskType === 'Colaboration' || newTask.taskType === 'Support') ? 'md:col-start-2 md:row-start-4' : ''}>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Tanggal Deadline</label>
                  <input required type="date" value={newTask.date} onChange={(e) => setNewTask({...newTask, date: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" />
                </div>
              </div>
              <div className="flex justify-end gap-3 border-t pt-6">
                <button type="button" onClick={() => setIsTaskModalOpen(false)} className="rounded-lg px-6 py-2 text-sm font-medium border text-gray-700 hover:bg-gray-50">Batal</button>
                <button type="submit" className="rounded-lg bg-red-600 px-6 py-2 text-sm font-bold text-white hover:bg-red-700">Simpan Order</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Modal Serahkan Hasil Tugas (Done) */}
      {isResultModalOpen && taskToComplete && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b p-5 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={20} /> Serahkan Hasil Pekerjaan</h3>
              <button onClick={() => { setIsResultModalOpen(false); setTaskToComplete(null); }} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmitResult} className="p-6">
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Pilih Tipe Lampiran:</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer"><input type="radio" value="link" checked={resultSubmission.type === 'link'} onChange={() => setResultSubmission({...resultSubmission, type: 'link', fileName: ''})} /> Link URL</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="radio" value="file" checked={resultSubmission.type === 'file'} onChange={() => setResultSubmission({...resultSubmission, type: 'file', value: ''})} /> Upload File</label>
                </div>
              </div>
              {resultSubmission.type === 'link' ? (
                <div className="mb-4">
                  <label className="mb-1 block text-xs font-bold text-gray-500 uppercase">Tautan (URL)</label>
                  <input type="url" required placeholder="https://..." value={resultSubmission.value} onChange={(e) => setResultSubmission({...resultSubmission, value: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="mb-1 block text-xs font-bold text-gray-500 uppercase">Pilih File</label>
                  <label className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-sm font-medium border border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
                     <UploadCloud size={18} /> {resultSubmission.fileName ? 'Ganti File' : 'Klik untuk Upload'}
                     <input type="file" required={!resultSubmission.fileName} className="hidden" onChange={handleResultFileChange} />
                  </label>
                  {resultSubmission.fileName && <p className="text-sm text-green-700 mt-2 font-medium">{resultSubmission.fileName}</p>}
                </div>
              )}
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => { setIsResultModalOpen(false); setTaskToComplete(null); }} className="rounded-lg px-4 py-2 text-sm border font-medium">Batal</button>
                <button type="submit" className="rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white hover:bg-green-700">Kirim & Selesai</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Modal Form Revisi */}
      {isRevisionModalOpen && taskToRevise && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b p-5 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><MessageSquareWarning className="text-orange-500" size={20} /> Form Revisi</h3>
              <button onClick={() => { setIsRevisionModalOpen(false); setTaskToRevise(null); }} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmitRevision} className="p-6">
              <div>
                <label className="mb-1.5 block text-sm font-bold text-gray-700">Poin-poin Revisi</label>
                <textarea required autoFocus rows="5" value={revisionNotesInput} onChange={(e) => setRevisionNotesInput(e.target.value)} className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-1 focus:ring-orange-500" placeholder="Tuliskan catatan perbaikan..."/>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => { setIsRevisionModalOpen(false); setTaskToRevise(null); }} className="rounded-lg px-4 py-2 text-sm border font-medium">Batal</button>
                <button type="submit" className="rounded-lg bg-orange-500 px-6 py-2 text-sm font-bold text-white hover:bg-orange-600">Kirim Revisi</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Modal Tambah Project (Khusus Admin/Manager) */}
      {isProjectModalOpen && (isAdmin || isManager) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between border-b p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Tambah Project Baru</h3>
              <button onClick={() => setIsProjectModalOpen(false)} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><X size={20} /></button>
            </div>
            <form onSubmit={handleAddProject} className="p-6">
              <div className="space-y-4">
                <div className="col-span-full">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Nama Event / Project</label>
                  <input type="text" required value={newProject.name} onChange={(e) => setNewProject({...newProject, name: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" placeholder="Contoh: Kampanye Promosi Q4" />
                </div>
                <div className="col-span-full">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Klien / Perusahaan</label>
                  <input type="text" required value={newProject.client} onChange={(e) => setNewProject({...newProject, client: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" placeholder="Contoh: PT ABC Jaya (Atau isi 'Internal')" />
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-full">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Tanggal Mulai</label>
                    <input type="date" required value={newProject.startDate} onChange={(e) => setNewProject({...newProject, startDate: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Tanggal Selesai</label>
                    <input type="date" required min={newProject.startDate} value={newProject.endDate} onChange={(e) => setNewProject({...newProject, endDate: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-full">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Status Project</label>
                    <select required value={newProject.status} onChange={(e) => setNewProject({...newProject, status: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm bg-white">
                      <option value="Fix">Fix</option><option value="Pitching">Pitching</option><option value="Pending">Pending</option><option value="Cancel">Cancel</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Project Officer</label>
                    <select required value={newProject.projectOfficer} onChange={(e) => setNewProject({...newProject, projectOfficer: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm bg-white">
                      <option value="" disabled>-- Pilih PO --</option>
                      {employees.filter(emp => emp.status === 'Aktif').map(emp => (<option key={emp.id} value={emp.name}>{emp.name}</option>))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3 border-t pt-6">
                <button type="button" onClick={() => setIsProjectModalOpen(false)} className="rounded-lg px-4 py-2 text-sm border font-medium">Batal</button>
                <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">Simpan Project</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Modal Tambah Karyawan (Khusus Admin) */}
      {isAddModalOpen && isAdmin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between border-b p-6 bg-gray-50 sticky top-0 z-10">
              <h3 className="text-lg font-bold text-gray-900">Tambah Karyawan Baru</h3>
              <button onClick={() => { setIsAddModalOpen(false); setAddError(''); }} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><X size={20} /></button>
            </div>
            <form onSubmit={handleAddEmployee} className="p-6">
              {addError && (<div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200 flex items-center gap-2"><AlertCircle size={16} /> {addError}</div>)}
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input type="text" required value={newEmployee.name} onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" placeholder="Contoh: Budi Santoso" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" required value={newEmployee.email} onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" placeholder="email@pt-anda.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">No. Handphone</label>
                    <input type="tel" required value={newEmployee.phone} onChange={(e) => setNewEmployee({...newEmployee, phone: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" placeholder="08123456789" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="col-span-2">
                     <label className="mb-1.5 block text-sm font-medium text-gray-700">Divisi</label>
                     <select required value={newEmployee.division} onChange={(e) => setNewEmployee({...newEmployee, division: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm bg-white">
                        <option value="Operation">Operation</option><option value="Admin & Finance">Admin & Finance</option><option value="Marketing">Marketing</option><option value="Creative & Program">Creative & Program</option>
                     </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Jabatan / Posisi</label>
                    <input type="text" required value={newEmployee.jobTitle} onChange={(e) => setNewEmployee({...newEmployee, jobTitle: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" placeholder="Staff..." />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Role Sistem</label>
                    <select required value={newEmployee.role} onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm bg-white">
                      <option value="Karyawan">Karyawan</option><option value="Manager">Manager</option><option value="Admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button type="button" onClick={() => { setIsAddModalOpen(false); setAddError(''); }} className="rounded-lg px-4 py-2 text-sm border font-medium hover:bg-gray-50">Batal</button>
                <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">Kirim Link Registrasi</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. Modal Hapus Karyawan */}
      {deleteEmployee && isAdmin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden text-center p-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4"><AlertTriangle size={32} className="text-red-600" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hapus Karyawan?</h3>
            <p className="text-sm text-gray-500 mb-6">Yakin ingin menghapus data <strong>{deleteEmployee.name}</strong>? Aksi ini tidak dapat dibatalkan.</p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setDeleteEmployee(null)} className="flex-1 rounded-lg border py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Batal</button>
              <button onClick={confirmDeleteEmployee} className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Modal Edit Karyawan */}
      {editEmployee && isAdmin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between border-b p-6 bg-gray-50 sticky top-0 z-10">
              <h3 className="text-lg font-bold text-gray-900">Edit Data Karyawan</h3>
              <button onClick={() => { setEditEmployee(null); setEditError(''); }} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200 transition-colors"><X size={20} /></button>
            </div>
            <form onSubmit={handleUpdateEmployee} className="p-6">
              {editError && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200 flex items-center gap-2">
                  <AlertCircle size={16} /> {editError}
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input type="text" required value={editEmployee.name} onChange={(e) => setEditEmployee({...editEmployee, name: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" required value={editEmployee.email} onChange={(e) => setEditEmployee({...editEmployee, email: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">No. Handphone</label>
                    <input type="tel" required value={editEmployee.phone} onChange={(e) => setEditEmployee({...editEmployee, phone: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="col-span-2">
                     <label className="mb-1.5 block text-sm font-medium text-gray-700">Divisi</label>
                     <select required value={editEmployee.division} onChange={(e) => setEditEmployee({...editEmployee, division: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white">
                        <option value="Operation">Operation</option>
                        <option value="Admin & Finance">Admin & Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Creative & Program">Creative & Program</option>
                     </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Jabatan / Posisi</label>
                    <input type="text" required value={editEmployee.jobTitle} onChange={(e) => setEditEmployee({...editEmployee, jobTitle: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Setting Role Sistem</label>
                    <select required value={editEmployee.role} onChange={(e) => setEditEmployee({...editEmployee, role: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white">
                      <option value="Karyawan">Karyawan</option>
                      <option value="Manager">Manager</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3 border-t pt-6">
                <button type="button" onClick={() => { setEditEmployee(null); setEditError(''); }} className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border hover:bg-gray-100 transition-colors">Batal</button>
                <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors">Update Karyawan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. Modal Lihat Detail Karyawan */}
      {viewEmployee && isAdmin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Detail Karyawan</h3>
              <button onClick={() => setViewEmployee(null)} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200 transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 border-b pb-4">
                <UserCircle size={48} className="text-gray-400" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{viewEmployee.name}</h4>
                  <p className="text-sm text-gray-500">{viewEmployee.id} • {viewEmployee.division}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                <div><span className="block text-xs font-semibold text-gray-500 uppercase">Jabatan</span><span className="font-medium">{viewEmployee.jobTitle}</span></div>
                <div><span className="block text-xs font-semibold text-gray-500 uppercase">Role Sistem</span><span className="font-medium">{viewEmployee.role}</span></div>
                <div className="col-span-2"><span className="block text-xs font-semibold text-gray-500 uppercase">Email</span><span className="font-medium">{viewEmployee.email}</span></div>
                <div className="col-span-2"><span className="block text-xs font-semibold text-gray-500 uppercase">No. Handphone</span><span className="font-medium">{viewEmployee.phone}</span></div>
                <div><span className="block text-xs font-semibold text-gray-500 uppercase">Tanggal Lahir</span><span className="font-medium">{viewEmployee.birthDate || '-'}</span></div>
                <div><span className="block text-xs font-semibold text-gray-500 uppercase">Status</span><span className="font-medium">{viewEmployee.status}</span></div>
                <div className="col-span-2"><span className="block text-xs font-semibold text-gray-500 uppercase">Alamat</span><span className="font-medium whitespace-pre-wrap">{viewEmployee.address || '-'}</span></div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 border-t text-right">
              <button onClick={() => setViewEmployee(null)} className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 transition-colors">Tutup</button>
            </div>
          </div>
        </div>
      )}

      {/* 9. Modal Edit Project */}
      {editProject && (isAdmin || isManager) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between border-b p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">Edit Project</h3>
              <button onClick={() => setEditProject(null)} className="rounded-lg p-1 text-gray-400 hover:bg-gray-200"><X size={20} /></button>
            </div>
            <form onSubmit={handleUpdateProject} className="p-6">
              <div className="space-y-4">
                <div className="col-span-full">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Nama Event / Project</label>
                  <input type="text" required value={editProject.name} onChange={(e) => setEditProject({...editProject, name: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
                </div>
                <div className="col-span-full">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Klien / Perusahaan</label>
                  <input type="text" required value={editProject.client || ''} onChange={(e) => setEditProject({...editProject, client: e.target.value})} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-full">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Tanggal Mulai</label>
                    <input type="date" required value={editProject.startDate || ''} onChange={(e) => setEditProject({...editProject, startDate: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Tanggal Selesai</label>
                    <input type="date" required min={editProject.startDate} value={editProject.endDate || ''} onChange={(e) => setEditProject({...editProject, endDate: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-full">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Status Project</label>
                    <select required value={editProject.status} onChange={(e) => setEditProject({...editProject, status: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm bg-white">
                      <option value="Fix">Fix</option><option value="Pitching">Pitching</option><option value="Pending">Pending</option><option value="Cancel">Cancel</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Project Officer</label>
                    <select required value={editProject.projectOfficer || ''} onChange={(e) => setEditProject({...editProject, projectOfficer: e.target.value})} className="w-full rounded-lg border px-4 py-2 text-sm bg-white">
                      <option value="" disabled>-- Pilih Project Officer --</option>
                      {employees.filter(emp => emp.status === 'Aktif').map(emp => (<option key={emp.id} value={emp.name}>{emp.name}</option>))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3 border-t pt-6">
                <button type="button" onClick={() => setEditProject(null)} className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border hover:bg-gray-100">Batal</button>
                <button type="submit" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">Update Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
