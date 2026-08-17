import { defineForumConfig } from './src/lib/config/schema';

export default defineForumConfig({
	// ===== 网站基本信息 =====
	site: {
		name: '我的论坛',
		description: '一个由GitHub Discussions驱动的社区论坛',
		footer: 'Powered by GitHub Discussions'
	},

	// ===== 仓库信息（必须填！） =====
	repo: {
		owner: 'yizhikulipa',
		name: 'discussion-kit'
	},

	// ===== 顶部导航栏额外链接 =====
	nav: [],

	// ===== 🔑 登录配置（只保留 Token 登录） =====
	auth: {
		allowToken: true
	},

	// ===== 管理员 =====
	admins: {
		logins: ['yizhikulipa'],
		badgeLabel: '管理员'
	},

	// ===== 自定义徽章 =====
	badges: {},

	// ===== 内容设置 =====
	content: {
		pageSize: 25,
		sort: 'CREATED_AT',
		articles: { enabled: true },
		topics: {
			include: [],
			exclude: [],
			restricted: ['announcements']
		}
	},

	// ===== 功能开关 =====
	features: {
		search: true,
		reactions: true,
		upvotes: true
	},

	// ===== 只读归档 =====
	archive: {
		enabled: true
	},

	// ===== 主题颜色 =====
	theme: {
		light: {},
		dark: {}
	}
});
