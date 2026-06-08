import React, { useMemo, useState } from 'react';

export default function SmartFactoryCertificateSystemEnterpriseV5() {
  const [page, setPage] = useState('list');
  const [expandedEmployee, setExpandedEmployee] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState('动力车间 / 高压电工班组');
  const [selectedTraining, setSelectedTraining] = useState('高压电工岗位培训');
  const [keyword, setKeyword] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [detailUser, setDetailUser] = useState(null);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [expandedExamRecords, setExpandedExamRecords] = useState({});
  const [activeMenu, setActiveMenu] = useState('certificate');
  const [certificateUser, setCertificateUser] = useState(null);
  const [processNo, setProcessNo] = useState(4);
  const updateEmployeePhoto = (employeeId, photoUrl) => {
    const updatedEmployees = employees.map(item =>
      item.id === employeeId
        ? { ...item, photo: photoUrl }
        : item
    )
  
    setEmployees(updatedEmployees)
  }
  const approvalSteps = [
    '员工确认中',
    '车间负责人审批',
    '人力资源部审批',
    '审批完成'
  ]

  const menuItems = [
    { id: 'home', label: '首页' },
    { id: 'training', label: '培训管理' },
    { id: 'exam', label: '考试管理' },
    { id: 'certificate', label: '上岗证管理' },
    { id: 'qualification', label: '人员资质管理' },
    { id: 'hazard', label: '隐患整改' },
  ];

  const orgTree = [
    {
      workshop: '公辅车间',
      teams: ['危化班组', '消防班组', '水处理班组']
    },
    {
      workshop: '动力车间',
      teams: ['高压电工班组', '维修班组', '配电班组']
    },
    {
      workshop: '成品车间',
      teams: ['叉车班组', '包装班组', '成品操作班组']
    }
  ];

  const trainingPlans = [
    '高压电工岗位培训',
    '叉车岗位培训',
    '危化品岗位培训'
  ];

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: '张伟',
      workshop: '动力车间',
      team: '高压电工班组',
      post: '高压电工',
      training: '高压电工岗位培训',
      hasCertificate: true,
      photo: 'https://picsum.photos/200/280',
      exams: [
        { course: '电气安全规范', method: '笔试', examTime: '2026-05-18 09:30', score: 92, result: '合格' },
        { course: '高压设备操作', method: '实操', examTime: '2026-05-18 09:30', score: 100, result: '合格' },
        { course: '事故应急处理', method: '口试', examTime: '2026-05-18 09:30', score: 90, result: '合格' }
      ]
    },
    {
      id: 2,
      name: '李想',
      workshop: '动力车间',
      team: '高压电工班组',
      post: '高压电工',
      training: '高压电工岗位培训',
      hasCertificate: false,
      photo: 'https://picsum.photos/200/280',
      exams: [
        { course: '电气安全规范', method: '笔试', examTime: '2026-05-18 09:30', score: 95, result: '合格' },
        { course: '高压设备操作', method: '实操', examTime: '2026-05-18 09:30', score: 91, result: '合格' },
        { course: '事故应急处理', method: '口试', examTime: '2026-05-18 09:30', score: 87, result: '合格' }
      ]
    },
    {
      id: 3,
      name: '王磊',
      workshop: '动力车间',
      team: '高压电工班组',
      post: '高压电工',
      training: '高压电工岗位培训',
      hasCertificate: false,
      photo: null,
      exams: [
        { course: '电气安全规范', method: '笔试', examTime: '2026-05-18 09:30', score: 94, result: '合格' },
        { course: '高压设备操作', method: '实操', examTime: '2026-05-18 09:30', score: 59, result: '不合格' },
        { course: '事故应急处理', method: '口试', examTime: '2026-05-18 09:30', score: 93, result: '合格' }
      ]
    }
  ]);

  const [processList, setProcessList] = useState(
    [
    {
      id: 'GZ20260520-001',
      training: '高压电工岗位培训',
      workshop: '动力车间',
      people: 28,
      createTime: '2026-05-20 09:30',
      creator: '张伟',
      status: '待审批',
      approvalStep: 0,
      employees:[
        {id:1,name:'张伟',post:'高压电工',score:92,certificateStatus:'已发证',
          photo:'https://picsum.photos/200/280',
          exams: [
          {
            course: '电气安全规范',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 92,
            result: '合格'
          },
          {
            course: '高压设备操作',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 88,
            result: '合格'
          },
          {
            course: '事故应急处理',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 95,
            result: '合格'
          }
        ]},
        {id:2,name:'李想',post:'高压电工',score:89,certificateStatus:'已发证',
          photo:null,
          exams: [
          {
            course: '电气安全规范',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 92,
            result: '合格'
          },
          {
            course: '高压设备操作',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 88,
            result: '合格'
          },
          {
            course: '事故应急处理',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 95,
            result: '合格'
          }
        ]},
        {id:3,name:'王磊',post:'高压电工',score:87,certificateStatus:'审批中',
          photo:null,
          exams: [
          {
            course: '电气安全规范',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 92,
            result: '合格'
          },
          {
            course: '高压设备操作',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 88,
            result: '合格'
          },
          {
            course: '事故应急处理',
            method: '笔试',
            examTime: '2026-05-18 09:30',
            score: 95,
            result: '合格'
          }
        ]}
      ]
    },
    {
      id: 'GZ20260518-002',
      training: '叉车岗位培训',
      workshop: '成品车间',
      people: 16,
      createTime: '2026-05-18 14:20',
creator: '李想',
      status: '已通过',
      employees:[{id:4,name:'赵强',post:'叉车工',score:95,certificateStatus:'已发证'}]
    },
    {
      id: 'GZ20260516-003',
      training: '危化品岗位培训',
      workshop: '公辅车间',
      people: 36,
      createTime: '2026-05-16 16:40',
creator: '王磊',
      status: '已驳回',
      employees:[]
    }
  ]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((e) => {
      const matchKeyword =
        e.name.includes(keyword) ||
        e.post.includes(keyword) ||
        e.workshop.includes(keyword);

      const matchTraining = e.training === selectedTraining;

      return matchKeyword && matchTraining;
    });
  }, [keyword, selectedTraining]);

  const toggleCandidate = (employee) => {
    const exists = selectedCandidates.find((item) => item.id === employee.id);

    if (exists) {
      setSelectedCandidates(
        selectedCandidates.filter((item) => item.id !== employee.id)
      );
    } else {
      setSelectedCandidates([...selectedCandidates, employee]);
    }
  };

  const toggleExamRecordsExpanded = (employeeId) => {
    setExpandedExamRecords((prev) => ({
      ...prev,
      [employeeId]: !prev[employeeId],
    }));
  };

  const getStatusColor = (status) => {
    if (status === '已通过' || status === '合格' || status === '符合发证条件') {
      return 'bg-emerald-100 text-emerald-700';
    }

    if (status === '待审批') {
      return 'bg-amber-100 text-amber-700';
    }

    if (status === '已存在有效证书') {
      return 'bg-slate-100 text-slate-600';
    }
    if (status === '缺少照片') {
      return 'bg-orange-100 text-orange-700';
    }

    return 'bg-red-100 text-red-700';
  };

  const Sidebar = () => (
    <div className="w-[260px] bg-[#0B1220] text-white flex flex-col border-r border-white/5 shadow-2xl shrink-0">
      <div className="h-[72px] px-6 flex items-center border-b border-white/10">
        <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center mr-4 shadow-lg">
          ⚙️
        </div>

        <div>
          <div className="text-lg font-bold">智慧工厂</div>
          <div className="text-[11px] text-slate-500 tracking-[2px] mt-1">
            SMART FACTORY SYSTEM
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="text-[11px] uppercase tracking-[3px] text-slate-500 px-3 mb-4">
          系统菜单
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const active = activeMenu === item.id;

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  if (item.id === 'certificate') {
                    setPage('list');
                  }
                }}
                className={`px-4 py-3 rounded-xl text-sm cursor-pointer transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-lg font-medium'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="bg-white/5 rounded-2xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-bold">
            王
          </div>

          <div>
            <div className="text-sm font-medium">王京聪</div>
            <div className="text-xs text-slate-500 mt-1">产品经理</div>
          </div>
        </div>
      </div>
    </div>
  );

  const OrgTreePanel = () => (
    <div className="w-[240px] shrink-0 border-r border-slate-200 bg-white overflow-auto">
      <div className="p-4">
        <div className="text-xs uppercase tracking-[2px] text-slate-400 px-2 mb-3">
          组织架构
        </div>

        <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div className="text-sm font-semibold text-slate-800 mb-4">
            中冶瑞木新能源
          </div>

          <div className="space-y-4">
            {orgTree.map((org, index) => (
              <div key={index}>
                <div className="text-sm font-medium text-slate-700 mb-2">
                  {org.workshop}
                </div>

                <div className="ml-3 border-l border-slate-200 pl-3 space-y-1">
                  {org.teams.map((team, idx) => {
                    const active = `${org.workshop} / ${team}` === selectedOrg;

                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedOrg(`${org.workshop} / ${team}`)}
                        className={`px-3 py-2 rounded-xl text-sm cursor-pointer transition ${
                          active
                            ? 'bg-blue-600 text-white shadow-sm font-medium'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                        }`}
                      >
                        {team}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Header = ({ title, desc }) => (
    <div className="h-[72px] bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      <div>

        <div className="text-2xl font-bold text-slate-800">{title}</div>
        <div className="text-sm text-slate-500 mt-1">{desc}</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center relative">
          🔔
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
            5
          </div>
        </div>

        <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
          王
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-[#F1F5F9] flex overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {page === 'list' && (
          <>
            <Header
              title="上岗证管理"
              
            />

            <div className="flex-1 flex overflow-hidden">
              <OrgTreePanel />

              <div className="flex-1 overflow-auto p-8 space-y-6">
                <div className="grid grid-cols-4 gap-5">
                  {[
                    ['总发证人数', '1246'],
                    ['待审批流程', '3'],
                    ['有效证书', '1188'],
                    ['即将到期', '22']
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
                    >
                      <div className="text-sm text-slate-500">{item[0]}</div>
                      <div className="text-4xl font-bold text-slate-800 mt-4">
                        {item[1]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-slate-800">
                        上岗证流程列表
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        按岗位培训与组织架构进行发证管理
                      </div>
                    </div>

                    <button
                      onClick={() => setPage('create')}
                      className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-sm"
                    >
                      + 创建发证流程
                    </button>
                  </div>

                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-slate-500">
                      <tr>
                        <th className="px-6 py-4 text-left">流程编号</th>
                        <th className="px-6 py-4 text-left">岗位培训</th>
                        <th className="px-6 py-4 text-left">所属车间</th>
                        <th className="px-6 py-4 text-left">发证人数</th>
                        <th className="px-6 py-4 text-left">创建时间</th>
                        <th className="px-6 py-4 text-left">发起人</th>
                        <th className="px-6 py-4 text-left">审批状态</th>
                        <th className="px-6 py-4 text-left">操作</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                      {processList.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition">
                          <td className="px-6 py-5 font-semibold text-blue-700">
                            {item.id}
                          </td>
                          <td className="px-6 py-5">{item.training}</td>
                          <td className="px-6 py-5">{item.workshop}</td>
                          <td className="px-6 py-5">{item.people}</td>
                          <td className="px-6 py-5">{item.createTime}</td>
                          <td className="px-6 py-5">{item.creator}</td>
                          
                      
                          <td className="px-6 py-5">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <button
                              onClick={() => { setSelectedProcess(item); setPage('detail'); }}
                              className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 hover:bg-blue-200"
                            >
                              查看详情
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 'detail' && selectedProcess && (
          <>
            <Header title="发证流程详情"  />
            <div className="flex-1 overflow-auto p-8 space-y-6">
            <div className="flex justify-between items-center">
  <button
    onClick={() => setPage('list')}
    className="px-5 py-3 rounded-2xl border border-slate-200 bg-white"
  >
    ← 返回列表
  </button>

  {selectedProcess.approvalStep < 3 && (
  <button
      className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700"
      onClick={() => {

        const nextStep = selectedProcess.approvalStep + 1

const updatedProcess = {
  ...selectedProcess,
  approvalStep: nextStep,

  status:
    nextStep >= 3
      ? '已通过'
      : '审批中'
}
      
        setSelectedProcess(updatedProcess)
      
        setProcessList(
          processList.map(item =>
            item.id === updatedProcess.id
              ? updatedProcess
              : item
          )
        )
      
      }}
    >
      {
  [
    '员工确认',
    '车间负责人审批',
    '人力资源部审批'
  ][selectedProcess.approvalStep]
}
    </button>
  )}
  {selectedProcess?.approvalStep >= 3 && (
    <button
      onClick={() =>
        alert('证书下载功能（原型演示）')
      }
      className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700"
    >
          📄 下载证书

    </button>
  )}
</div>
              <div className="flex items-center gap-3 mt-4">
  <span className="text-slate-500">审批状态：</span>

  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      selectedProcess.approvalStep === 0
        ? 'bg-amber-100 text-amber-700'
        : selectedProcess.approvalStep === 1
        ? 'bg-blue-100 text-blue-700'
        : selectedProcess.approvalStep === 2
        ? 'bg-purple-100 text-purple-700'
        : 'bg-green-100 text-green-700'
    }`}
  >
   {
  [
    '员工确认中',
    '车间负责人审批',
    '人力资源部审批',
    '审批完成'
  ][selectedProcess.approvalStep]
}
  </span>
</div>

<div className="grid grid-cols-6 gap-5">
                <div className="bg-white rounded-3xl border border-slate-200 p-6"><div className="text-sm text-slate-500">流程编号</div><div className="text-xl font-bold mt-4">{selectedProcess.id}</div></div>
                <div className="bg-white rounded-3xl border border-slate-200 p-6"><div className="text-sm text-slate-500">岗位培训</div><div className="text-xl font-bold mt-4">{selectedProcess.training}</div></div>
                <div className="bg-white rounded-3xl border border-slate-200 p-6"><div className="text-sm text-slate-500">所属车间</div><div className="text-xl font-bold mt-4">{selectedProcess.workshop}</div></div>
                <div className="bg-white rounded-3xl border border-slate-200 p-6"><div className="text-sm text-slate-500">发证人数</div><div className="text-xl font-bold mt-4">{selectedProcess.people} 人</div></div>
                <div className="bg-white rounded-3xl border border-slate-200 p-6">
  <div className="text-sm text-slate-500">创建时间</div>
  <div className="text-lg font-bold mt-4">
    {selectedProcess.createTime}
  </div>
</div>

<div className="bg-white rounded-3xl border border-slate-200 p-6">
  <div className="text-sm text-slate-500">发起人</div>
  <div className="text-lg font-bold mt-4">
    {selectedProcess.creator}
  </div>
</div>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 p-6">
  <div className="text-xl font-bold text-slate-800 mb-6">
    审批记录
  </div>

  <div className="space-y-5">

    <div className="flex gap-4">
      <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

      <div>
        <div className="font-medium">
          张伟 提交发证申请
        </div>

        <div className="text-sm text-slate-500">
          2026-05-20 09:30
        </div>
      </div>
    </div>

    {selectedProcess.approvalStep >= 0 && (
  <div className="flex gap-4">
    <div className="w-3 h-3 rounded-full bg-amber-500 mt-2"></div>

    <div>
      <div className="font-medium">
        员工确认完成
      </div>

      <div className="text-sm text-slate-500">
        已确认
      </div>
    </div>
  </div>
)}

{selectedProcess.approvalStep >= 1 && (
  <div className="flex gap-4">
    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

    <div>
      <div className="font-medium">
        车间负责人审批通过
      </div>

      <div className="text-sm text-slate-500">
        审批完成
      </div>
    </div>
  </div>
)}

{selectedProcess.approvalStep >= 2 && (
  <div className="flex gap-4">
    <div className="w-3 h-3 rounded-full bg-purple-500 mt-2"></div>

    <div>
      <div className="font-medium">
        人力资源部审批通过
      </div>

      <div className="text-sm text-slate-500">
        自动盖章处理中
      </div>
    </div>
  </div>
)}

{selectedProcess.approvalStep >= 3 && (
  <div className="flex gap-4">
    <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

    <div>
      <div className="font-medium">
        自动盖章完成
      </div>

      <div className="text-sm text-slate-500">
        证书已生成
      </div>
    </div>
  </div>
)}

  </div>
</div>

              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="text-xl font-bold text-slate-800">发证人员列表</div>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                    <th className="px-6 py-4 text-left">姓名</th>
  <th className="px-6 py-4 text-left">岗位</th>
  <th className="px-6 py-4 text-left">课程数量</th>
  <th className="px-6 py-4 text-left">证书状态</th>
  <th className="px-6 py-4 text-left">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProcess.employees?.map(emp => (
                      <>
                      <tr key={emp.id} className="h-16 border-t border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-4">{emp.name}</td>
                        <td className="px-6 py-4">{emp.post}</td>
                        <td className="px-6 py-4">
  {emp.exams?.length || 0} 门
</td>
                        <td className="px-6 py-4">{emp.certificateStatus}</td>
                        <td className="px-6 py-4">
  <div className="flex gap-4">

    <button
      className="text-blue-600 hover:text-blue-800 font-medium"
      onClick={() => {
        setExpandedEmployee(
          expandedEmployee === emp.id
            ? null
            : emp.id
        )
      }}
    >
      {expandedEmployee === emp.id ? '收起' : '考试记录'}
    </button>

    <button
      className="text-green-600 hover:text-green-800 font-medium"
      onClick={() => setCertificateUser(emp)}
    >
      查看证书
    </button>

  </div>
</td>
                      </tr>
                      {expandedEmployee === emp.id && (
  <tr>
  <td colSpan="5" className="bg-slate-50 px-6 py-3">

    <table className="w-full text-sm">

      <thead>
        <tr>
          <th className="text-left py-2">课程名称</th>
          <th className="text-left py-2">考试方式</th>
          <th className="text-left py-2">考试时间</th>
          <th className="text-left py-2">成绩</th>
          <th className="text-left py-2">结果</th>
        </tr>
      </thead>

      <tbody>
        {emp.exams?.map((exam,index)=>(
          <tr key={index}className="h-12 border-b border-slate-100">
            <td>{exam.course}</td>

            <td className="py-3">
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      exam.method === '笔试'
        ? 'bg-blue-100 text-blue-700'
        : exam.method === '实操'
        ? 'bg-green-100 text-green-700'
        : 'bg-purple-100 text-purple-700'
    }`}
  >
    {exam.method}
  </span>
</td>

<td className="text-slate-500">
  {exam.examTime}
</td>

<td className="py-2">{exam.score} 分</td>

<td className="py-2">
  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.result)}`}>
    {exam.result}
  </span>
</td>
          </tr>
        ))}
      </tbody>

    </table>

  </td>
</tr>
)}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}


        {page === 'create' && (
          <>
            <Header
              title="创建发证流程"
              desc="系统自动识别符合岗位培训发证条件且未持证人员"
            />

            <div className="flex-1 overflow-auto p-8 space-y-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setPage('list')}
                  className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  ← 返回列表
                </button>

                <button
  onClick={() => {

    const now = new Date()

    const newProcess = {
      id: `GZ${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${Math.floor(Math.random()*900+100)}`,
      training: selectedTraining,
      workshop: '动力车间',
      people: selectedCandidates.length,
      createTime: now.toLocaleDateString(),
      creator: '王京聪',
      status: '待审批',

      employees: selectedCandidates
    }

    setProcessList([
      newProcess,
      ...processList
    ])

    alert('发证流程已提交，等待审批')

    setPage('list')
  }}
  className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition"
>
  提交发证流程
</button>
              </div>

              <div className="grid grid-cols-4 gap-5">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-sm text-slate-500">岗位培训计划</div>

                  <select
                    value={selectedTraining}
                    onChange={(e) => setSelectedTraining(e.target.value)}
                    className="w-full mt-4 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm"
                  >
                    {trainingPlans.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-sm text-slate-500">待发证人员</div>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    {
                      filteredEmployees.filter(
                        (e) =>
                          e.exams.every((item) => item.result === '合格') &&
                          !!e.photo &&
                          !e.hasCertificate
                      ).length
                    }
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-sm text-slate-500">存在不合格课程</div>
                  <div className="text-4xl font-bold text-red-500 mt-4">
                    {
                      filteredEmployees.filter(
                        (e) =>
                          !e.exams.every((item) => item.result === '合格')
                      ).length
                    }
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-sm text-slate-500">已确认发证人员</div>
                  <div className="text-4xl font-bold text-emerald-600 mt-4">
                    {selectedCandidates.length}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-slate-800">
                      待发证人员
                    </div>

                    <div className="text-sm text-slate-500 mt-1">
                      自动筛选：全部课程合格、未持有效上岗证人员
                    </div>
                  </div>

                  <input
                    placeholder="搜索人员/岗位/车间"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-[320px] bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm"
                  />
                </div>

                <div className="overflow-auto max-h-[420px]">
                  {filteredEmployees.map((employee) => {
                    const allPassed = employee.exams.every(
                      (item) => item.result === '合格'
                    );
                    const hasPhoto = !!employee.photo;

                    const status = employee.certificateStatus === '已发证'
                      ? '已存在有效证书'
                      : !hasPhoto
                      ? '缺少照片'
                      : allPassed
                      ? '符合发证条件'
                      : '存在不合格课程';

                    const selected = selectedCandidates.find(
                      (item) => item.id === employee.id
                    );

                    const passedExamCount = employee.exams.filter(
                      (item) => item.result === '合格'
                    ).length;
                    const isExamRecordsExpanded = !!expandedExamRecords[employee.id];

                    return (
                      <div
                        key={employee.id}
                        className="border-b border-slate-100 px-6 py-3 hover:bg-slate-50 transition"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0 flex items-center gap-4">
                            <div className="text-lg font-bold text-slate-800 shrink-0">
                              {employee.name}
                            </div>

                            <div className="text-sm font-medium text-emerald-600 shrink-0">
                              ✓ 已通过{passedExamCount}项考试
                            </div>
                            <div className={`text-sm font-medium shrink-0 ${
  employee.photo
    ? 'text-blue-600'
    : 'text-red-500'
}`}>
  {employee.photo ? '📷 已上传照片' : '⚠ 未上传照片'}
</div>

                            <button
                              type="button"
                              onClick={() => toggleExamRecordsExpanded(employee.id)}
                              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition shrink-0"
                            >
                              {isExamRecordsExpanded ? '收起' : '考试记录'}
                            </button>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}
                            >
                              {status}
                            </span>

                            <button
                              disabled={!allPassed || employee.hasCertificate}
                              onClick={() => toggleCandidate(employee)}
                              className={`px-5 py-2 rounded-xl font-medium ${
                                selected
                                  ? 'bg-red-100 text-red-700'
                                  : !allPassed || employee.hasCertificate
                                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                  : 'bg-blue-600 text-white'
                              }`}
                            >
                              {selected ? '取消选择' : '确认发证'}
                            </button>
                          </div>
                        </div>

                        {isExamRecordsExpanded && (
                          <>
                          <div className="mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200">

<div className="text-sm font-medium text-slate-700 mb-3">
  证件照
</div>

{employee.photo ? (
  <div className="flex items-center gap-4">
    <img
      src={employee.photo}
      alt="员工照片"
      className="w-24 h-32 object-cover rounded-lg border border-slate-200 shadow-sm"
    />

    <div className="flex flex-col gap-2">
      <span className="text-sm text-emerald-600">
        ✓ 已上传证件照
      </span>

      <button
        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm"
      >
        更换照片
      </button>
    </div>
  </div>
) : (
  <div className="flex items-center gap-4">
    <div className="w-24 h-32 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-sm">
      暂无照片
    </div>

    <div className="flex flex-col gap-2">
      <span className="text-sm text-red-500">
        ⚠ 缺少证件照
      </span>

      <label className="cursor-pointer">

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files?.[0]

      if (!file) return

      const photoUrl = URL.createObjectURL(file)

      updateEmployeePhoto(
        employee.id,
        photoUrl
      )
    }}
  />

  <span className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm inline-block">
    上传照片
  </span>

</label>
    </div>
  </div>
)}

</div>
                          <table className="w-full text-sm mt-3 overflow-hidden rounded-2xl border border-slate-100">
                            <thead className="bg-slate-50 text-slate-500">
                              <tr>
                                <th className="px-4 py-3 text-left">培训课程</th>
                                <th className="px-4 py-3 text-left">考试方式</th>
                                <th className="px-4 py-3 text-left">考试时间</th>
                                <th className="px-4 py-3 text-left">考试成绩</th>
                                <th className="px-4 py-3 text-left">考试结果</th>
                              </tr>
                            </thead>

                            <tbody>
                              {employee.exams.map((exam, index) => (
                                <tr key={index} className="h-12 border-t border-slate-100">
                                  <td>{exam.course}</td>

<td>
  <span
    className={`px-3 py-1 rounded-full text-xs font-medium ${
      exam.method === '笔试'
        ? 'bg-blue-100 text-blue-700'
        : exam.method === '实操'
        ? 'bg-green-100 text-green-700'
        : 'bg-purple-100 text-purple-700'
    }`}
  >
    {exam.method}
  </span>
</td>

<td className="text-slate-500">
  {exam.examTime}
</td>

<td>{exam.score} 分</td>

<td>
  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.result)}`}>
    {exam.result}
  </span>
</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          </>
                          
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="text-xl font-bold text-slate-800">
                    本次待发证人员
                  </div>

                  <div className="text-sm text-slate-500 mt-1">
                    已确认符合岗位培训全部课程考试要求的人员
                  </div>
                </div>

                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-6 py-4 text-left">姓名</th>
                      <th className="px-6 py-4 text-left">所属车间</th>
                      <th className="px-6 py-4 text-left">岗位</th>
                      <th className="px-6 py-4 text-left">岗位培训</th>
                      <th className="px-6 py-4 text-left">课程数量</th>
                      <th className="px-6 py-4 text-left">操作</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {selectedCandidates.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="py-16 text-center text-slate-400">
                          暂未确认发证人员
                        </td>
                      </tr>
                    ) : (
                      selectedCandidates.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition">
                          <td className="px-6 py-5 font-medium">{item.name}</td>
                          <td className="px-6 py-5">{item.workshop}</td>
                          <td className="px-6 py-5">{item.post}</td>
                          <td className="px-6 py-5">{item.training}</td>
                          <td className="px-6 py-5">{item.exams.length} 门</td>



                          <td className="px-6 py-5">
                            <button
                              onClick={() => setDetailUser(item)}
                              className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium"
                            >
                              查看课程明细
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {detailUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="w-[860px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-200">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <div className="text-2xl font-bold text-slate-800">
                  {detailUser.name} - 岗位培训课程明细
                </div>

                <div className="text-sm text-slate-500 mt-2">
                  查看该员工岗位培训所有课程考试结果
                </div>
              </div>

              <button
                onClick={() => setDetailUser(null)}
                className="w-10 h-10 rounded-2xl border border-slate-200 bg-white hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-4 gap-5">
                {[
                  ['所属车间', detailUser.workshop],
                  ['岗位', detailUser.post],
                  ['岗位培训', detailUser.training],
                  ['课程数量', `${detailUser.exams.length} 门`]
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-2xl border border-slate-100 p-5"
                  >
                    <div className="text-sm text-slate-500">{item[0]}</div>
                    <div className="text-lg font-bold text-slate-800 mt-3">
                      {item[1]}
                    </div>
                  </div>
                ))}
              </div>

              <table className="w-full text-sm overflow-hidden rounded-2xl border border-slate-100">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-4 text-left">培训课程</th>
                    <th className="px-6 py-4 text-left">考试方式</th>
                    <th className="px-4 py-3 text-left">考试时间</th>
                    <th className="px-6 py-4 text-left">考试成绩</th>
                    <th className="px-6 py-4 text-left">考试结果</th>
                  </tr>
                </thead>

                <tbody>
                  {detailUser.exams.map((exam, index) => (
                    <tr key={index} className="h-12 border-t border-slate-100 hover:bg-slate-50 transition">
                      <td className="px-6 py-6">{exam.course}</td>
                      <td className="px-6 py-6">{exam.method}</td>
                      <td className="px-6 py-6">{exam.examTime}</td>
                      <td className="px-6 py-6 font-semibold">{exam.score} 分</td>
                      <td className="px-6 py-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.result)}`}
                        >
                          {exam.result}
                        </span>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => setDetailUser(null)}
                className="px-5 py-3 rounded-2xl border border-slate-200 bg-white font-medium"
              >
                关闭
              </button>

              <button className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-sm">
                确认符合发证条件
              </button>
            </div>
          </div>
        </div>
      )}
   {certificateUser && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl w-[900px] shadow-2xl overflow-hidden">

      <div className="px-8 py-6 border-b border-slate-200 flex items-center justify-between">

        <div className="text-2xl font-bold">
          上岗证预览
        </div>

        <button
          onClick={() => setCertificateUser(null)}
          className="text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>

      </div>

      <div className="p-10">

        <div className="border-[6px] border-blue-500 rounded-3xl p-12 text-center bg-slate-50">

          <div className="text-4xl font-bold text-blue-700 mb-8">
            特种作业上岗证
          </div>

          <div className="grid grid-cols-2 gap-8 text-left text-lg">

            <div>
              <span className="text-slate-500">姓名：</span>
              {certificateUser.name}
            </div>

            <div>
              <span className="text-slate-500">岗位：</span>
              {certificateUser.post}
            </div>

            <div>
              <span className="text-slate-500">平均成绩：</span>
              {certificateUser.score} 分
            </div>

            <div>
              <span className="text-slate-500">证书状态：</span>
              {certificateUser.certificateStatus}
            </div>

            <div>
              <span className="text-slate-500">发证日期：</span>
              2026-05-20
            </div>

            <div>
              <span className="text-slate-500">有效期至：</span>
              2029-05-20
            </div>

          </div>

          <div className="mt-12 text-slate-500">
            智慧工厂培训中心
          </div>

        </div>

      </div>

      <div className="px-8 py-5 border-t border-slate-200 flex justify-end gap-3">

        <button
          onClick={() => setCertificateUser(null)}
          className="px-5 py-3 rounded-2xl border border-slate-200"
        >
          关闭
        </button>

        <button
          className="px-5 py-3 rounded-2xl bg-blue-600 text-white"
        >
          导出证书
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}
