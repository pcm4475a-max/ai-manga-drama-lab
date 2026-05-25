export const toolCategories = ['全部', '剧本', '图像', '视频', '配音', '剪辑', '工作流', '设计', '音乐'];

export interface Tool {
  name: string;
  category: '剧本' | '图像' | '视频' | '配音' | '剪辑' | '工作流' | '设计' | '音乐';
  useCase: string;
  beginnerLevel: 'easy' | 'medium' | 'hard';
  pricing: string;
  freePlan: string;
  bestFor: string;
  weaknesses: string;
  officialUrl: string;
  notes: string;
  lastChecked: string;
  sourceType: 'official' | 'media' | 'needs-manual-check';
}

export const tools: Tool[] = [
  {
    name: 'ChatGPT',
    category: '工作流',
    useCase: '剧本编写、分镜策划、Prompt优化、文案撰写、学习助手、数据分析、创意头脑风暴、代码编写辅助、多场景AI助手',
    beginnerLevel: 'easy',
    pricing: 'Free / Plus ($20/月) / Pro ($200/月) / Team ($25/人/月) / Enterprise（联系销售）',
    freePlan: 'GPT-4o mini免费使用；GPT-4o对免费用户有限次额度。无图像生成能力，需配合DALL-E使用。',
    bestFor: 'AI漫剧全流程文字辅助——从选题研究、剧本扩展、分镜拆解到Prompt优化和数据复盘，是使用最广泛的全能型AI助手。',
    weaknesses: '付费对国内用户不友好（需国外信用卡或通过第三方）；高峰时段响应可能变慢；中文文学性创意不如专业中文AI；免费版功能限制较多；图像生成需要额外搭配DALL-E且非其主要优势。',
    officialUrl: 'https://chatgpt.com',
    notes: '目前AI漫剧创作者使用最广泛的文字AI工具。推荐至少使用Plus订阅以获得GPT-4o的稳定体验。支持文件上传分析、联网搜索和图像理解。可用于整个创作流程的各个环节——从选题头脑风暴到最终数据复盘。国内用户访问可能需要特殊网络环境。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'Claude',
    category: '工作流',
    useCase: '长篇剧本创作、复杂故事线规划、多层次角色对话设计、Prompt深度优化、文学性对白打磨、创作理念探讨、项目策划拆解',
    beginnerLevel: 'easy',
    pricing: 'Free / Pro ($20/月) / Team ($25/人/月) / Max ($100/月或$200/月，按功能选择)',
    freePlan: 'Sonnet模型免费可用（每日有使用限额）；Opus模型仅付费可用；免费版可满足基础的剧本创作和策划需求。',
    bestFor: '长上下文剧本创作（一次处理大量故事素材）、文学性强的对白和情感描写、需要深度思考和分析的复杂项目策划。',
    weaknesses: '国内访问不便（需特殊网络环境）；免费版每次对话长度限制低于付费版；没有原生的图像生成能力（需配合其他图像工具）；Max版月费较高；中文语境下的某些文化理解不如国内AI。',
    officialUrl: 'https://claude.ai',
    notes: 'Claude在长文本处理和文学创作方面表现优异，特别适合需要细腻情感、复杂人物关系和长篇叙事的AI漫剧项目。支持Projects功能，可作为创作项目的内容管理和组织工具。Artifacts可生成可视化的分镜草图和流程图。与ChatGPT互补使用效果最佳。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'DeepSeek',
    category: '工作流',
    useCase: '中文剧本创作、低成本文案批量生成、分镜思路拓展、中文对白优化润色、知识问答辅助、数据分析助手',
    beginnerLevel: 'easy',
    pricing: '网页版和App完全免费；API按量付费（价格远低于国际同类产品，具体以官方为准）',
    freePlan: '网页版和移动App完全免费使用，没有明确的使用次数或时长限制。API也有一定免费额度。',
    bestFor: '预算紧张的独立创作者、国内可直接访问无需特殊网络环境、需要中文原生理解能力的剧本和文案创作。',
    weaknesses: '高峰期可能出现服务繁忙需要排队等待的情况；功能丰富度不如ChatGPT/Claude（没有图像生成、代码解释器等）；创意和文学表达在某些方面不如付费版国际工具；API生态和第三方集成不如OpenAI完善。',
    officialUrl: 'https://chat.deepseek.com',
    notes: '目前对国内创作者最友好的免费AI大模型。中文理解和生成能力非常优秀，特别适合网文风格、玄幻爽文、都市甜宠等题材的剧本创作。对国内网络直连无任何障碍。可以作为GPT/Claude的强力补充或预算有限时的主力工具。API价格极低，适合需要批量处理剧本和Prompt的场景。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'Midjourney',
    category: '图像',
    useCase: '角色概念设计图、场景氛围图、海报级美术作品、关键帧美学创作、艺术风格探索实验、概念艺术版制作',
    beginnerLevel: 'medium',
    pricing: 'Basic ($10/月或$96/年) / Standard ($30/月或$288/年) / Pro ($60/月或$576/年) / Mega ($120/月或$1152/年)',
    freePlan: '无稳定免费计划。偶尔开放限时免费试用活动。需要通过Discord平台使用。',
    bestFor: '追求顶级画面美学的AI漫剧关键帧和角色概念图——Midjourney的画面质感和艺术性在同类工具中仍然处于领先地位。特别适合国漫、玄幻、古风等高审美要求的风格。',
    weaknesses: '无完全免费版，入门需要付费；必须通过Discord使用（有学习成本和平台限制）；角色一致性控制不如ComfyUI+LoRA的本地化方案精确；对写实人物的控制力不如Stable Diffusion；无法在图片内添加中文文字；国内用户需要特殊网络环境访问Discord；订阅费用对个人创作者不算低。',
    officialUrl: 'https://www.midjourney.com',
    notes: 'AI漫剧中角色设计和概念美术的事实标准工具之一。v6/v7版本的图像质量极高。Standard及以上套餐的Relax模式可无限生成（但速度较慢）。角色一致性可通过固定Seed值+完全一致的角色描述+Creative Reference功能实现一定程度的控制。商业使用权取决于订阅套餐类型，使用前请确认条款。建议配合专业的Prompt管理工具或Notion记录有效的Prompt。',
    lastChecked: '2026-05-25',
    sourceType: 'needs-manual-check'
  },
  {
    name: '即梦AI',
    category: '图像',
    useCase: 'AI图像生成、AI视频生成、AI漫剧专属分镜工具、角色设计固定功能、一键漫剧制作、批量场景图生成',
    beginnerLevel: 'easy',
    pricing: '免费版（每日赠送生成积分）/ 会员订阅（月卡约30-60元，具体以官方为准）/ 按量付费（积分制）',
    freePlan: '每日赠送一定额度的免费生成积分，轻度使用基本够用。积分可用于图像生成和视频生成。',
    bestFor: '国内用户最友好的AI漫剧一站式制作工具——与剪映深度整合、中文界面、操作简单、有专门的AI漫剧功能模块（包含分镜设计、角色固定、批量生成等）。',
    weaknesses: '角色一致性控制不如ComfyUI等专业工具灵活；高级功能和高质量输出需要付费会员；视频生成时长和分辨率有一定限制；可选风格相对固定，深度定制空间有限；积分和会员价格体系变动频繁；依赖字节跳动生态。',
    officialUrl: 'https://jimeng.jianying.com',
    notes: '字节跳动旗下的AI创作平台，与剪映深度绑定。专为AI漫剧设计了"AI漫剧"功能——包括分镜设计工具、角色固定参考、批量场景生成等，对新手非常友好。免费额度比较慷慨，适合入门学习和快速验证。缺点是可控性不如ComfyUI等本地化方案，深度商业化定制受限。功能和价格变动频繁，建议使用前登录查看最新情况。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: '可灵AI / Kling',
    category: '视频',
    useCase: '高质量图生视频（I2V）、文生视频（T2V）、多种运镜模式、长视频生成、高分辨率视频输出、影视感画面创作',
    beginnerLevel: 'easy',
    pricing: '免费版（每日赠送积分）/ 国内版会员定价（以官方为准）/ 国际版会员定价（以官方为准）/ 按量付费积分制',
    freePlan: '每日免费赠送一定积分，可用于生成多个短视频片段。轻度创作和学习基本够用。免费额度用完可等待次日重置或购买积分。',
    bestFor: '国内用户直接可用的最高质量图生视频工具——对角色和场景的还原度高、运镜自然、画质优秀。特别适合国漫、玄幻、古风等题材的视频生成。',
    weaknesses: '国内版和国际版价格体系不同且独立；高级运镜控制仍主要依赖文字描述，不够直观；复杂动作场景（奔跑、打斗、施法）的成功率不稳定，可能产生变形；长视频生成耗时较长且消耗更多积分；高峰时段可能排队；免费额度对高频使用不够。',
    officialUrl: 'https://kling.kuaishou.com（国内）/ https://klingai.com（国际）',
    notes: '快手旗下的AI视频生成工具，目前在国内AI视频生成领域质量处于领先位置。图生视频效果尤其出色，角色和场景一致性保持能力强。支持多种运镜模式（推拉摇移跟环绕等）和高分辨率视频输出。国内版价格较亲民，国际版价格对标Runway。与即梦AI在功能上部分重叠，可根据具体需求和使用习惯选择。功能和价格体系变动频繁，建议使用前访问官网查看最新信息。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'Runway',
    category: '视频',
    useCase: '专业AI视频生成（I2V/T2V）、视频编辑处理（背景移除/物体移除/调色）、运动笔刷精确控制、多模态AI工具套件、Gen-3/4模型高品质视频输出',
    beginnerLevel: 'medium',
    pricing: 'Free（有限生成次数和功能）/ Standard ($15/月/人) / Pro ($35/月/人) / Unlimited ($95/月/人) / Enterprise（联系销售）',
    freePlan: '免费版每月有一定数量的视频生成额度（具体以官方为准），可体验大部分基础功能。输出视频可能带水印。',
    bestFor: '专业级AI视频制作、需要多工具集成（视频生成+编辑+特效）的高级工作流、团队成员协作的规模化制作。',
    weaknesses: '免费版功能和额度较有限；国内用户需要特殊网络环境访问；部分高级功能（如Gen-4模型、运动笔刷）学习曲线较高；中文提示词的理解和中文内容生成不如国内工具；月费对个人创作者（尤其是国内用户）不算低；支付需要使用国际信用卡。',
    officialUrl: 'https://runwayml.com',
    notes: 'Runway是AI视频领域的先驱和功能最全面的平台之一。Gen-3 Alpha模型的视频质量和运动自然度处于国际领先水平。运动笔刷（Motion Brush）功能可以精确控制画面中哪些区域运动、向什么方向运动——这对AI漫剧的运镜设计非常有价值。视频编辑工具套件也相当强大。Pro版支持无水印导出和更高分辨率。Gen-4已在部分套餐中可用。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'Pika',
    category: '视频',
    useCase: '短视频生成、特效和创意动画、社交媒体内容快速制作、Lip Sync口型同步、I2V/T2V快速出片',
    beginnerLevel: 'easy',
    pricing: 'Free / Standard ($10/月) / Pro ($35/月)（以官方价格页为准）',
    freePlan: '免费版每月有一定生成次数，输出视频可能带有Pika水印。可体验口型同步等核心功能。',
    bestFor: '快速产出大量短视频内容、特效和动画类创意内容、需要Lip Sync口型同步功能的AI漫剧配音场景。',
    weaknesses: '单次生成视频时长较短（通常4-5秒）；复杂场景和精确角色控制力不如Runway和可灵；免费版有水印限制；专业功能丰富度不如Runway全能；中文内容理解不如国内工具。',
    officialUrl: 'https://pika.art',
    notes: 'Pika以操作简单、生成速度快、风格偏创意动画著称。其Lip Sync（口型同步）功能是差异化优势——可以让AI生成的角色口型与音频同步，对于需要角色对话的AI漫剧场景非常实用。适合制作特效型、动画型、快节奏的短内容。对于需要快速产出大量创意短视频的创作者来说，Pika是性价比不错的选择。价格信息可能变动，以官方最新定价页为准。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: '通义万相 / 千问',
    category: '图像',
    useCase: 'AI图像生成（文生图/图生图）、AI视频生成、电商设计图、创意海报制作、角色设计辅助、多模态内容创作',
    beginnerLevel: 'easy',
    pricing: '基础功能免费 / 高级功能按量付费 / 企业定制方案（具体定价以阿里云官方为准）',
    freePlan: '基础图片生成功能免费使用，每日有一定免费生成额度。通义千问对话功能完全免费。',
    bestFor: '国内用户无需特殊网络环境即可直接使用的AI图像生成工具——适合做低成本方案中的图像生成环节，以及电商和营销场景的视觉内容制作。',
    weaknesses: '艺术风格多样性和高端画面质感不如Midjourney；视频生成功能相对较新，成熟度不如可灵和Runway；角色一致性控制不如专业本地化方案；高级定制选项和参数调节空间有限；通义千问和通义万相是不同产品入口，功能有时混淆。',
    officialUrl: 'https://tongyi.aliyun.com/wanxiang',
    notes: '阿里旗下的AI创作平台。通义千问是大语言模型（类似ChatGPT，负责文字对话和思考），通义万相是图像/视频生成工具。两者整合在阿里云生态中，对国内用户访问无障碍。图片生成质量在持续提升中，适合作为低成本方案中的图像生成备选工具。具体功能范围和定价随时可能调整，建议使用前查看官网或阿里云控制台。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'ComfyUI',
    category: '工作流',
    useCase: '本地化AI图像/视频生成工作流搭建、ControlNet精确构图控制、LoRA模型训练和调用、IP-Adapter角色一致性控制、批量自动化生成管线、自定义节点和模块化创作流程',
    beginnerLevel: 'hard',
    pricing: '软件完全免费开源。需要自备GPU硬件（显存建议8GB以上，推荐12-16GB以获得良好的生成速度和体验）。如无本地GPU，可使用云GPU服务（按小时计费）。',
    freePlan: '软件完全免费开源，无任何使用次数或功能限制。唯一的投入是硬件成本或云GPU租赁费用。',
    bestFor: '追求最大创作可控性的专业创作者、需要建立标准化批量生产流程的团队、角色一致性要求极高的长期系列化项目。',
    weaknesses: '学习曲线非常陡峭（节点式界面与传统的线性操作习惯完全不同）；需要较强的本地GPU硬件（对电脑配置有要求）；安装和配置过程复杂（需要管理Python环境、下载配置各种模型和插件）；中文教程和社区资源较少（以英文和日文为主）；节点出错时排错较为困难。',
    officialUrl: 'https://github.com/comfyanonymous/ComfyUI',
    notes: 'ComfyUI是当前最强大的本地化AI创作工作流工具。节点式（Node-based）界面让创作者可以像搭积木一样精确控制生成流程的每一个步骤——从模型加载、Prompt处理、ControlNet条件注入、IP-Adapter参考图控制、到最终图像输出和后续处理。配合ControlNet、IP-Adapter、AnimateDiff等工具，可以实现接近传统CG制作的可控性。一旦建立并验证好一套工作流，可以保存为一键执行的模板，后续批量生成效率极高。对AI漫剧创作来说，这是实现角色一致性和批量稳定生产的终极方案，但需要投入相当的学习时间。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'Stable Diffusion WebUI',
    category: '图像',
    useCase: '本地AI图像生成（文生图/图生图）、Inpainting局部修复、ControlNet精确控制、LoRA/DreamBooth模型训练和应用、批量图像生成',
    beginnerLevel: 'medium',
    pricing: '软件完全免费开源。需要自备GPU硬件（显存建议6GB以上，8-12GB体验更佳）。如无本地GPU可使用云GPU服务。',
    freePlan: '软件完全免费开源，无任何使用限制。只需投入硬件成本。庞大的社区模型库（Civitai等平台）提供大量免费Checkpoint和LoRA模型。',
    bestFor: '预算有限但追求本地化自由生成、需要无限生成次数的高频使用用户、想利用庞大社区模型生态的实验型创作者。',
    weaknesses: '需要GPU硬件投入（对电脑配置有要求）；安装和环境配置有一定技术门槛（Python依赖、模型下载、插件管理等）；出图质量高度依赖所使用的Checkpoint模型和参数调校；操作界面相对ComfyUI来说不够灵活，无法搭建复杂的自动化工作流；Windows系统安装可能遇到兼容性问题（NVIDIA显卡驱动、CUDA版本等）；社区模型质量参差不齐需要筛选。',
    officialUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    notes: 'Stable Diffusion WebUI（通常指AUTOMATIC1111的版本）是目前使用最广泛的本地AI图像生成工具。相比ComfyUI，它的传统图形界面更适合习惯了Photoshop等软件操作方式的新手。拥有庞大的社区生态——Civitai等平台上有数以万计的Checkpoint和LoRA模型可以下载使用。对AI漫剧创作来说，配合合适的国漫/古风/玄幻风格模型，可以稳定产出风格统一、质量不错的角色图和场景图。缺点是不够灵活，大规模批量生产能力不如ComfyUI。如果你追求简单上手而非极致可控，SD WebUI是更好的起点。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'ElevenLabs',
    category: '配音',
    useCase: '高质量AI配音、多语言语音合成（支持30+语言）、声音克隆（Voice Cloning）、文本转语音（TTS）、语音转语音（情感和风格转换）、AI音效生成（Sound Effects）',
    beginnerLevel: 'easy',
    pricing: 'Free（10分钟TTS/月）/ Starter ($5/月) / Creator ($22/月) / Pro ($99/月) / Scale ($330/月) / Enterprise（联系销售）',
    freePlan: '每月10分钟免费文本转语音额度。可体验预置音色，但声音克隆等高级功能需要付费套餐。',
    bestFor: '高质量多语言AI配音——特别适合需要自然英语、日语、韩语等外语配音的场景，以及需要声音克隆创建专属角色音色的项目。',
    weaknesses: '免费额度非常有限（仅10分钟/月）；中文配音的自然度、语调和情感表达不如Fish Audio等专业中文工具；需要特殊网络环境访问，国内用户使用不便；高级功能（如声音克隆、情感调节、高保真输出）需要较高级别的付费套餐；Pro及以上套餐月费对个人创作者不算低。',
    officialUrl: 'https://elevenlabs.io',
    notes: 'ElevenLabs是全球AI配音领域的标杆产品，提供上百种预置音色和30+语言的高质量语音合成。声音克隆（Voice Cloning）功能可以通过几十秒的音频样本创建专属角色音色。对AI漫剧来说，ElevenLabs非常适合为外语角色配音（比如日系动漫风格的角色用日语配音）或制作多语言版本（中文原声+英文配音）。需要注意：声音克隆功能的使用需要遵守平台的声音权政策，不能克隆真人声音用于商业目的。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: '剪映 / CapCut',
    category: '剪辑',
    useCase: '视频剪辑合成、AI字幕自动识别生成、内置AI配音/文本朗读、丰富的特效转场和贴纸素材库、BGM/SFX免版权音乐音效库、封面图制作、一键成片功能',
    beginnerLevel: 'easy',
    pricing: '免费版（绝大部分核心功能可用）/ Pro会员（国内约79元/年或15元/月；国际版价格可能不同）',
    freePlan: '免费版功能非常全面——包含完整剪辑时间线、AI字幕识别、基础AI配音、大量免版权BGM/SFX/贴纸/特效素材库。对大多数AI漫剧创作需求来说，免费版已经够用。',
    bestFor: 'AI漫剧剪辑入门的首选工具——免费、功能全面、对国内用户最友好、移动端和桌面端数据互通、与即梦AI/字节生态深度整合。',
    weaknesses: '专业调色功能较弱（色彩校正、曲线、LUT支持不如DaVinci Resolve和Premiere）；大规模多项目素材管理能力不如专业剪辑软件；高级特效受限于模板库，自定义空间有限；跨平台项目迁移不够流畅（不同设备之间同步偶尔有问题）；部分高级素材、特效和AI功能需要Pro会员。',
    officialUrl: 'https://www.capcut.cn（国内）/ https://www.capcut.com（国际）',
    notes: '剪映是目前最推荐的AI漫剧剪辑入门和主力工具——免费版功能已经非常全面、对国内用户极其友好、和即梦AI深度整合形成了"AI生成+剪辑发布"的完整闭环。内置的AI字幕自动识别功能准确率高，可以大幅节省手动打字幕的时间。AI文本朗读功能可以快速制作初版配音验证效果。素材库（BGM、SFX、贴纸、特效、转场）丰富且大部分可商用。Pro会员价格很低（国内约79元/年），建议开通以解除高级素材和功能的限制。移动端和桌面端数据互通，随时随地可以剪辑。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'Premiere Pro',
    category: '剪辑',
    useCase: '专业视频剪辑、多轨道精细编辑、专业调色（Lumetri Color面板）、高级音频混音、多格式输入输出、与AE/PS/AI等Adobe全家桶无缝协作',
    beginnerLevel: 'hard',
    pricing: 'Adobe Creative Cloud订阅制：Premiere Pro单独约$22.99/月（以Adobe官网为准）；Creative Cloud全家桶约$59.99/月（包含20+应用）。地区定价可能不同。',
    freePlan: '提供7天免费试用。无永久免费版。',
    bestFor: '需要精细到每一帧的专业级剪辑、团队协作和项目管理的规模化制作、与Adobe全家桶（PS修图、AE做特效、AU做音频）的深度集成工作流。',
    weaknesses: '价格较高且为订阅制（长期使用成本累积不菲）；学习曲线陡峭（界面和功能庞大复杂）；对电脑硬件要求较高（建议16GB以上内存和独立显卡）；国内用户购买和支付Adobe正版有一定不便（需要国际支付方式）；功能过于庞大，很多功能对于AI漫剧来说是"用不到的冗余"。',
    officialUrl: 'https://www.adobe.com/products/premiere.html',
    notes: 'Premiere Pro是影视行业的专业剪辑标准工具。对AI漫剧来说属于"进阶"选项——当剪映的功能无法满足你的精细化需求（如高级调色、多轨道精密混音、团队协作项目管理）时，可以升级到Premiere Pro。优势是与Adobe全家桶的无缝协作（AE做特效包装、PS处理角色图和封面、AU做专业音频处理）。缺点是贵、重、难。建议先用剪映做到平台极限（靠剪映已经做不出更好的效果时）再考虑切换到Premiere Pro。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'DaVinci Resolve',
    category: '剪辑',
    useCase: '专业视频剪辑、好莱坞级调色（行业标杆）、专业音频后期（Fairlight页面）、视觉特效合成（Fusion页面）、多用户协作项目',
    beginnerLevel: 'medium',
    pricing: '免费版（功能极其全面）/ Studio版 $295一次性购买永久使用（以Blackmagic Design官网为准，地区价格可能不同）',
    freePlan: '免费版包含绝大部分专业功能——完整的剪辑、调色、音频和特效页面。仅在8K分辨率输出、HDR高级调色、GPU加速渲染等极少高级功能上受限。对于绝大多数AI漫剧创作者来说，免费版已经完全够用。',
    bestFor: '追求专业调色品质但预算有限的创作者；一次性买断永久使用（无需月费）的价值投资者；想从剪映升级但不想付Adobe订阅月费的最佳中间选择。',
    weaknesses: '学习曲线比剪映高不少（专业软件的复杂度在那里）；对电脑硬件有一定要求（特别是调色需要色准好的显示器）；界面布局和操作逻辑与传统Adobe剪辑软件不同，需要适应；第三方插件生态不如Premiere丰富；部分中文教程和社区资源不如Premiere多。',
    officialUrl: 'https://www.blackmagicdesign.com/products/davinciresolve',
    notes: 'DaVinci Resolve是AI漫剧创作者的"隐藏性价比之王"。免费版的功能已经覆盖了专业剪辑+调色+音频+特效四大模块，只在高分辨率输出等极少数场景受限。其调色能力是业界公认的第一。一次购买Studio版永久使用，没有月费——对于长期创作者来说是极大的成本优势。Fusion页面可以做进阶的视觉特效。Fairlight页面提供专业级音频处理。对于想从剪映升级但不想付Adobe月费的创作者，DaVinci Resolve是当前最佳选择。学习曲线高于剪映但远低于Premiere Pro。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'After Effects',
    category: '剪辑',
    useCase: '动态图形设计（Motion Graphics）、视觉特效合成（VFX Compositing）、片头片尾Logo动画、文字动画和动态字幕、粒子特效、3D图层合成包装',
    beginnerLevel: 'hard',
    pricing: 'Adobe Creative Cloud订阅制：After Effects单独约$22.99/月（以Adobe官网为准）；Creative Cloud全家桶约$59.99/月。',
    freePlan: '提供7天免费试用。无永久免费版。',
    bestFor: 'AI漫剧的高级视觉包装——片头Logo动画、独特的视觉特效（AI生成不出来的效果）、动态字幕标题动画、以及整体视觉风格的统一包装。',
    weaknesses: '学习曲线极高（After Effects是Adobe全家桶中最难上手的软件之一）；订阅价格贵长期持有成本高；渲染输出需要较长时间（特别是加了大量特效合成的项目）；对电脑硬件要求非常高（内存建议32GB以上）；过度使用AE特效会让AI漫剧看起来"用力过猛"或"五毛特效"。',
    officialUrl: 'https://www.adobe.com/products/aftereffects.html',
    notes: 'After Effects在AI漫剧制作中的角色是"补充AI做不到的事情"——AI可以生成角色、场景和视频片段，但片头Logo动画、独特的视觉特效、动态字幕包装、以及一些创意性的视觉处理，还是需要AE这样的专业工具来完成。对于大多数AI漫剧创作者来说，AE并不是必需品——剪映的内置特效模板和DaVinci Resolve的Fusion页面已经能覆盖大部分包装需求。只有当你需要独特的、个性化的视觉风格包装时，AE才成为必要工具。也可以考虑DaVinci Resolve的Fusion页面作为免费替代方案。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'Figma',
    category: '设计',
    useCase: '角色设定卡视觉设计、制作流程图和创作Pipeline可视化、分镜排版和布局设计、封面图设计、素材资产管理和展示、团队协作设计评审',
    beginnerLevel: 'easy',
    pricing: 'Starter（完全免费）/ Professional ($12/编辑/月) / Organization ($45/编辑/月) / Enterprise ($75/编辑/月)',
    freePlan: '免费版功能极其强大——无限文件数量、无限协作者、所有基础设计工具全部可用。仅缺少高级团队管理、高级原型交互等企业级功能。个人创作者使用免费版完全够用。',
    bestFor: 'AI漫剧创作的"视觉管理中心"——角色卡设计、分镜板排版、流程可视化、素材资产管理，全部可以在Figma中高效完成。中文界面可用，在线协作无需安装。',
    weaknesses: '不是专业位图编辑工具——照片级的精细修图需要配合Photoshop或在线修图工具；免费版缺乏高级团队管理功能（对个人创作者影响不大）；对纯国内网络环境，部分功能加载偶尔较慢（使用Figma中国区镜像或桌面端可改善）；不支持原生视频编辑。',
    officialUrl: 'https://www.figma.com',
    notes: 'Figma在AI漫剧创作中扮演"设计中心+管理工具"的双重角色。你可以用它来设计角色设定卡（图文并茂的角色档案）、排版分镜脚本（把文本分镜变成可视化的格子布局）、绘制创作流程图（让客户或团队成员理解你的制作流程）、管理素材资产（图标化的素材库总览）。Component（组件）功能可以将角色、场景、UI元素做成可复用的设计组件，Auto Layout让排版快速且专业。强烈推荐所有AI漫剧创作者使用Figma作为创作管理中心。',
    lastChecked: '2026-05-25',
    sourceType: 'official'
  },
  {
    name: 'Fish Audio',
    category: '配音',
    useCase: 'AI中文配音、音色克隆和定制、文本转语音（TTS）、多角色音色管理、声音风格个性化调节',
    beginnerLevel: 'easy',
    pricing: '提供免费试用额度 / 付费订阅（具体价格需实时确认官方页面）/ 部分功能可能按字符或分钟计费',
    freePlan: '提供一定的免费试用额度，可用于体验音色和基础配音功能。具体免费额度请查看官网最新信息。',
    bestFor: '中文AI配音领域口碑最好的工具之一——音色自然、情感表达到位、特别适合需要高质量中文配音的AI漫剧主力配音方案。',
    weaknesses: '定价和免费额度信息变动较为频繁，需要实时查看官网确认；服务稳定性和可用性不如大厂产品；多语言支持不如ElevenLabs全面；声音克隆功能的使用权限和商用授权需要仔细阅读条款。',
    officialUrl: 'https://fish.audio',
    notes: 'Fish Audio在中文AI配音领域被大量AI漫剧创作者推荐。其音色丰富度、自然度和情感表达能力在同类产品中表现优异。适合为AI漫剧的多个角色分别选择不同的固定音色。声音的品质接近真人配音的感觉。使用前建议访问官网查看最新的定价、免费额度和商用授权政策。版权注意：不要未经授权克隆真人的声音。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'MiniMax Audio',
    category: '配音',
    useCase: 'AI语音合成、高质量中文配音、多角色音色选择、情感语音生成、文本转语音API服务',
    beginnerLevel: 'easy',
    pricing: '提供免费试用额度 / API按量付费 / 具体套餐和定价需实时确认MiniMax官网',
    freePlan: '提供一定的免费试用额度，可用于体验语音合成和音色。具体免费额度以官方为准。',
    bestFor: '中文AI配音技术实力强劲的选择——情感表达和自然度在行业中处于前列，适合需要高质量中文配音的AI漫剧项目。提供API可集成到自动化工作流。',
    weaknesses: '具体定价体系和免费额度变动频繁，不够透明；部分高级功能可能仅面向企业级用户开放；品牌在普通用户中的知名度不如ElevenLabs；国内外的功能和服务可能存在差异。',
    officialUrl: 'https://www.minimaxi.com',
    notes: 'MiniMax在AI语音合成领域技术实力非常强，其中文配音的情感表达、语调自然度和多角色区分能力都处于行业前列水平。对于需要高质量中文配音的AI漫剧项目，MiniMax Audio是一个非常好的选择。提供API接口，可以集成到自动化工作流中，实现批量配音。建议访问官网了解最新的定价、功能和商用授权信息。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  },
  {
    name: 'Suno / Udio',
    category: '音乐',
    useCase: 'AI音乐生成、BGM背景音乐定制、片头曲/片尾曲创作、主题曲制作、音乐风格探索实验',
    beginnerLevel: 'easy',
    pricing: 'Suno: Free / Pro ($10/月) / Premier ($30/月)（以官方为准）；Udio: Free / Standard ($10/月) / Pro ($30/月)（以官方为准）',
    freePlan: '各平台的免费版每日有一定生成额度，通常每月可免费生成数十首音乐作品。免费版生成的音乐商用权限通常受限。',
    bestFor: 'AI漫剧的定制化BGM和主题曲创作——可以生成"全世界只有你的作品在用"的独家配乐，从根本上避免版权纠纷。',
    weaknesses: '生成音乐的商用授权条款复杂且在持续变化——免费版生成的音乐通常不可商用、付费版商用权限也有限制、不同套餐的授权条款不同；音乐生成的稳定性和质量不如专业免版权素材库（有时候生成的曲子"味道不对"）；中文歌词和中文音乐风格的支持不如英文；单次生成的音乐长度有限制（通常2-4分钟）；AI音乐的版权归属在全球范围内仍是法律灰色地带。',
    officialUrl: 'https://suno.com / https://www.udio.com',
    notes: 'Suno和Udio是目前最主流的两个AI音乐生成工具，都可以通过文字描述生成完整的音乐作品（带歌词的歌曲或纯音乐BGM）。对于AI漫剧创作者来说，最大的价值在于可以生成专属于你的"独家BGM"，从而彻底避免版权问题。但在使用前务必仔细确认当前版本的商用授权条款——免费版生成的作品通常不可商用，付费版的商用权限也有限制（可能限制使用范围、要求注明来源等）。也可以考虑Epidemic Sound、Artlist等专业免版权音乐库作为稳定、可靠且法律风险更低的BGM来源。商用前务必确认授权条款是最新的。',
    lastChecked: '需实时确认',
    sourceType: 'needs-manual-check'
  }
];
