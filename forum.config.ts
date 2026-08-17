import { defineForumConfig } from './src/lib/config/schema';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Discussion Kit 配置
 * ─────────────────────────────────────────────────────────────────────────────
 *  所有选项都是可选的，不填则使用默认值。
 *  只需要改下面几项就可以了。
 */
export default defineForumConfig({
	// ===== 网站基本信息 =====
	site: {
		name: '我的论坛',              // 论坛名字，改成你喜欢的
		description: '一个由GitHub Discussions驱动的社区论坛',
		footer: 'Powered by GitHub Discussions'
	},

	// ===== 仓库信息（自动检测，不用改） =====
	// repo: {
	//   owner: 'yizhikulipa',
	//   name: 'discussion-kit'
	// },

	// ===== 顶部导航栏额外链接 =====
	nav: [
		// 想加就取消注释，比如：
		// { label: '关于', href: 'https://example.com/about', external: true }
	],

	// ===== 🔑 登录配置（只保留 Token 登录） =====
	auth: {
		allowToken: true
		// OAuth 已完全移除，不会显示 "继续使用 GitHub" 按钮
	},

	// ===== 管理员 =====
	admins: {
		logins: ['yizhikulipa'],    // 改成你的 GitHub 用户名
		badgeLabel: '管理员'
	},

	// ===== 自定义徽章 =====
	badges: {
		// '版主': ['someone']
	},

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

	// ===== 声望系统（默认关闭，不用管） =====
	// rep: {
	// 	enabled: false,
	// },

	// ===== 只读归档（开启后未登录用户可浏览） =====
	archive: {
		enabled: true
	},

	// ===== 主题颜色（可自定义） =====
	theme: {
		light: {
			// primary: 'hsl(221 83% 53%)',
		},
		dark: {
			// primary: 'hsl(217 91% 60%)'
		}
	}
});
