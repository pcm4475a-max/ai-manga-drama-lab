export interface Source {
  title: string;
  url: string;
  publisher: string;
  type: "official" | "media" | "research" | "community";
  relatedSection: string;
  lastChecked: string;
  reliabilityLevel: "high" | "medium" | "low";
  notes: string;
}

export const sources: Source[] = [
  {
    title: "OpenAI ChatGPT 订阅方案",
    url: "https://openai.com/chatgpt/pricing",
    publisher: "OpenAI",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "Free/Plus/Pro/Team/Enterprise 档位和功能可能变化。"
  },
  {
    title: "Anthropic Claude 定价",
    url: "https://docs.anthropic.com/en/docs/about-claude/pricing",
    publisher: "Anthropic",
    type: "official",
    relatedSection: "tools",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "Claude Free/Pro/Team/Max 套餐以官方为准。"
  },
  {
    title: "Midjourney Plans",
    url: "https://docs.midjourney.com/docs/plans",
    publisher: "Midjourney",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "Basic/Standard/Pro/Mega 档位和商用条款可能变化。"
  },
  {
    title: "Runway Pricing",
    url: "https://runwayml.com/pricing",
    publisher: "Runway",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "Free/Standard/Pro/Unlimited 套餐及功能以官方为准。"
  },
  {
    title: "ElevenLabs Pricing",
    url: "https://elevenlabs.io/pricing",
    publisher: "ElevenLabs",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "Free/Starter/Creator/Pro 套餐以官方为准。"
  },
  {
    title: "Pika Pricing",
    url: "https://pika.art/pricing",
    publisher: "Pika",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "套餐和功能可能变化。"
  },
  {
    title: "CapCut Pricing",
    url: "https://www.capcut.com/pricing",
    publisher: "CapCut / 剪映",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "地区价格不同，Pro 功能以官方为准。"
  },
  {
    title: "抖音创作者服务中心",
    url: "https://creator.douyin.com",
    publisher: "抖音",
    type: "official",
    relatedSection: "platforms",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "短剧合作、星图、创作者计划规则需登录后台查看最新公告。"
  },
  {
    title: "巨量星图",
    url: "https://www.xingtu.cn",
    publisher: "巨量引擎",
    type: "official",
    relatedSection: "monetization",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "商业合作规则、准入门槛和结算方式以官方平台为准。"
  },
  {
    title: "小红书蒲公英",
    url: "https://pgy.xiaohongshu.com",
    publisher: "小红书",
    type: "official",
    relatedSection: "monetization",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "商业合作规则以官方平台为准。"
  },
  {
    title: "B站创作中心",
    url: "https://member.bilibili.com",
    publisher: "B站",
    type: "official",
    relatedSection: "platforms",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "创作激励规则可能调整。"
  },
  {
    title: "B站花火",
    url: "https://huahuo.bilibili.com",
    publisher: "B站",
    type: "official",
    relatedSection: "monetization",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "商单合作规则以官方为准。"
  },
  {
    title: "微信视频号创作者中心",
    url: "https://channels.weixin.qq.com",
    publisher: "微信",
    type: "official",
    relatedSection: "platforms",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "变现规则可能变化。"
  },
  {
    title: "YouTube Partner Program 概览",
    url: "https://support.google.com/youtube/answer/72851",
    publisher: "Google",
    type: "official",
    relatedSection: "platforms",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "YPP 资格要求、收益规则以官方最新页面为准。"
  },
  {
    title: "TikTok Creator Rewards Program",
    url: "https://www.tiktok.com/legal/page/global/creator-rewards-program-us/en",
    publisher: "TikTok",
    type: "official",
    relatedSection: "platforms",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "地区政策不同，以官方为准。"
  },
  {
    title: "生成式人工智能服务管理暂行办法",
    url: "https://www.gov.cn/gongbao/2023/issue_10666/202308/content_6900864.html",
    publisher: "中国政府网",
    type: "official",
    relatedSection: "risks",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "AI生成内容在中国的法规框架，后续可能有更新。"
  },
  {
    title: "DaVinci Resolve 官方",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    publisher: "Blackmagic Design",
    type: "official",
    relatedSection: "tools",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "免费版和 Studio 付费版功能对比以官方为准。"
  },
  {
    title: "Figma Pricing",
    url: "https://www.figma.com/pricing",
    publisher: "Figma",
    type: "official",
    relatedSection: "tools",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "Free/Professional/Enterprise 套餐以官方为准。"
  },
  {
    title: "Adobe Creative Cloud 定价",
    url: "https://www.adobe.com/creativecloud/plans.html",
    publisher: "Adobe",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "Premiere Pro、After Effects 订阅价格以官方为准。"
  },
  {
    title: "即梦AI",
    url: "https://jimeng.jianying.com",
    publisher: "即梦AI",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "积分、会员、商用规则需实时确认。"
  },
  {
    title: "可灵AI",
    url: "https://kling.kuaishou.com",
    publisher: "快手/可灵",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "国内和国际版价格不同，需实时确认。"
  },
  {
    title: "通义万相",
    url: "https://tongyi.aliyun.com/wanxiang",
    publisher: "阿里云",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "免费额度、会员规则需实时确认。"
  },
  {
    title: "ComfyUI GitHub",
    url: "https://github.com/comfyanonymous/ComfyUI",
    publisher: "ComfyUI",
    type: "official",
    relatedSection: "tools",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "开源免费，本地运行需要显卡。"
  },
  {
    title: "Stable Diffusion WebUI",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    publisher: "AUTOMATIC1111",
    type: "official",
    relatedSection: "tools",
    lastChecked: "2026-05-25",
    reliabilityLevel: "high",
    notes: "开源免费。"
  },
  {
    title: "Fish Audio",
    url: "https://fish.audio",
    publisher: "Fish Audio",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "价格和商用授权以官方为准。"
  },
  {
    title: "MiniMax",
    url: "https://www.minimaxi.com",
    publisher: "MiniMax",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "价格和商用授权以官方为准。"
  },
  {
    title: "Suno",
    url: "https://suno.com",
    publisher: "Suno",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "商用授权条款需在使用前确认。"
  },
  {
    title: "DeepSeek",
    url: "https://www.deepseek.com",
    publisher: "DeepSeek",
    type: "official",
    relatedSection: "tools",
    lastChecked: "需实时确认",
    reliabilityLevel: "high",
    notes: "国内可用，价格以官方为准。"
  },
  {
    title: "AI漫剧行业观察与趋势",
    url: "https://www.36kr.com/search/articles/%E7%9F%AD%E5%89%A7%20AI",
    publisher: "36氪",
    type: "media",
    relatedSection: "general",
    lastChecked: "2026-05-25",
    reliabilityLevel: "medium",
    notes: "行业趋势分析，非官方政策。"
  },
  {
    title: "短剧行业研究报告",
    url: "https://report.iresearch.cn",
    publisher: "艾瑞咨询",
    type: "research",
    relatedSection: "general",
    lastChecked: "2026-05-25",
    reliabilityLevel: "medium",
    notes: "行业数据和趋势，需结合官方政策使用。"
  },
];
