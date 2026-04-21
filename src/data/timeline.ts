import type { TimelineItem } from '../components/features/timeline/types'

export const timelineData: TimelineItem[] = [
	{
		id: 'music-player',
		title: '桌面音乐播放器（Tauri + Svelte）',
		description:
			'开发跨平台桌面音乐应用，探索 Tauri + SvelteKit 架构与 IPC 通信机制。',
		type: 'project',
		startDate: '2026-04',
		organization: '个人项目',
		skills: ['Tauri', 'SvelteKit', 'Rust', 'TypeScript'],
		achievements: [
			'实现本地音乐播放功能',
			'设计前后端 IPC 通信结构',
			'优化应用体积与性能',
		],
		icon: 'material-symbols:music-note',
		color: '#059669',
		featured: true,
	},

	{
		id: 'blog-astro',
		title: '个人博客系统（Astro + Svelte）',
		description:
			'构建个人博客与知识管理系统，实现 MDX 内容管理与复杂前端交互组件。',
		type: 'project',
		startDate: '2026-03',
		organization: '个人项目',
		skills: ['Astro', 'Svelte', 'MDX', 'TypeScript'],
		achievements: [
			'实现自定义滚动条与 Lenis 平滑滚动',
			'开发 Carousel / 波浪动画 / 流星雨等交互组件',
			'基于 SVG Path + clip-path 实现动态视觉效果',
		],
		links: [
			{
				name: 'Demo',
				url: 'https://folkroll.vercel.app/',
				type: 'website',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/kino14910/folkroll',
				type: 'project',
			},
		],
		icon: 'material-symbols:article',
		color: '#3B82F6',
		featured: true,
	},

	{
		id: 'wild-oasis-client',
		title: 'Wild Oasis 预订平台（Next.js 全栈）',
		description:
			'基于 Next.js App Router + RSC 构建小屋预订平台，实现用户预订、认证与国际化功能。',
		type: 'project',
		startDate: '2026-01',
		endDate: '2026-02',
		organization: '个人项目',
		skills: ['Next.js', 'React', 'NextAuth', 'Supabase'],
		achievements: [
			'实现 Google OAuth 登录认证',
			'构建预订流程（日期选择/库存校验/价格计算）',
			'实现国际化（next-intl）与 Optimistic UI',
		],
		links: [
			{
				name: 'Demo',
				url: 'https://the-wild-oasis-client.vercel.app/',
				type: 'website',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/kino14910/the-wild-oasis-client',
				type: 'project',
			},
		],
		icon: 'material-symbols:home',
		color: '#10B981',
	},

	{
		id: 'wild-oasis-admin',
		title: 'Wild Oasis 管理后台（React + Supabase）',
		description:
			'构建小屋管理后台系统，支持资源管理、预订流程与数据统计，并基于 React Query 优化数据状态管理。',
		type: 'project',
		startDate: '2025-11',
		endDate: '2026-01',
		organization: '个人项目',
		skills: ['React', 'TypeScript', 'Supabase', 'React Query'],
		achievements: [
			'实现预订管理与状态流转逻辑',
			'构建小屋资源管理模块（图片/价格/折扣）',
			'基于 Popover API 优化弹出层交互，降低组件复杂度',
		],
		links: [
			{
				name: 'Demo',
				url: 'https://the-wild-oasis-kino.vercel.app/',
				type: 'website',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/kino14910/the-wild-oasis',
				type: 'project',
			},
		],
		icon: 'material-symbols:dashboard',
		color: '#F59E0B',
	},

	{
		id: 'warehouse-next',
		title: '仓储管理系统（Next.js 重构）',
		description:
			'基于 Next.js + Node.js + MongoDB 重构系统架构，统一前后端开发模式并优化数据结构设计。',
		type: 'project',
		startDate: '2025-09',
		endDate: '2025-12',
		organization: '个人项目',
		skills: ['Next.js', 'Node.js', 'MongoDB', 'MUI'],
		achievements: [
			'重构为全栈 JS 架构',
			'优化接口设计与数据模型',
			'提升后台交互体验',
		],
		icon: 'material-symbols:architecture',
		color: '#DC2626',
	},

	{
		id: 'warehouse-vue',
		title: '仓储管理系统（初版）',
		description:
			'基于 Vue + Spring Boot 构建的仓储管理系统，包含库存、订单与客户管理模块，实现基础业务流程。',
		type: 'project',
		startDate: '2025-03',
		endDate: '2025-06',
		organization: '个人项目',
		skills: ['Vue', 'Spring Boot', 'MySQL'],
		achievements: ['实现完整 CRUD 流程', '完成库存与订单联动逻辑'],
		icon: 'material-symbols:inventory-2',
		color: '#7C3AED',
	},

	{
		id: 'cs',
		title: '计算机相关专业学习',
		description:
			'系统学习计算机基础知识，包括数据结构、操作系统、计算机网络等，为后续开发打下基础。',
		type: 'education',
		startDate: '2020-09',
		endDate: '2024-06',
		location: '中国',
		organization: '某高校',
		skills: ['C/C++', '数据结构', '计算机网络'],
		icon: 'material-symbols:school',
		color: '#2563EB',
	},

	{
		id: 'cloud',
		title: '云服务器部署经验',
		description:
			'在云服务器上部署 Minecraft、Terraria 等服务，具备基础 Linux 与部署经验。',
		type: 'achievement',
		startDate: '2022-01',
		skills: ['Linux', 'Docker', '云服务器'],
		icon: 'material-symbols:cloud',
		color: '#0EA5E9',
	},

	{
		id: 'cet4',
		title: 'CET-4 英语证书',
		description: '通过大学英语四级考试。',
		type: 'achievement',
		startDate: '2022-06',
		icon: 'material-symbols:verified',
		color: '#059669',
	},
]
