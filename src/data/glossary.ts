export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AI漫剧",
    category: "基础概念",
    definition: "利用AI工具生成图像、视频、配音和音乐，再通过剪辑合成制作的动画风格短剧内容。它和传统动画最大的区别在于画面不是人工手绘的，而是通过AI模型根据文字描述（Prompt）生成的。AI漫剧的制作流程包括剧本创作、角色设定、美术风格确认、分镜设计、Prompt工程、图像生成、视频生成、配音、音乐音效和剪辑合成十个关键环节。",
    relatedTerms: ["脚本", "分镜", "Prompt", "图生视频", "关键帧", "剪辑"]
  },
  {
    term: "脚本",
    category: "创作流程",
    definition: "比剧本更偏向执行的创作文档。它不仅包含故事内容和台词，还详细标注了画面描述、镜头类型、角色动作、音效需求、转场方式等制作层面需要的信息。在AI漫剧中，脚本是连接故事创意和AI生成的中间桥梁——好的脚本应该清晰到每个画面都能直接用AI生成出来。脚本通常以分镜头表格的形式呈现。",
    relatedTerms: ["剧本", "分镜", "Prompt", "关键帧"]
  },
  {
    term: "剧本",
    category: "创作流程",
    definition: "故事的文字版本，主要描述人物、冲突、台词、情节推进和情感变化。传统影视剧本注重对白和动作描写，而AI漫剧剧本还需要额外考虑画面可生成性——即描写的场景和动作要能被当前的AI工具真实还原。一个合格的AI漫剧剧本需要做到：画面描述具体、动作可执行、角色数量可控、场景切换合理、每集结尾带有悬念或钩子。",
    relatedTerms: ["脚本", "分镜", "故事大纲", "角色设定", "Prompt"]
  },
  {
    term: "分镜",
    category: "创作流程",
    definition: "将剧本或脚本拆解成一个个独立的镜头单元。每个分镜通常包含：镜头编号、预估时长（秒）、景别（特写/近景/中景/全景/远景）、角色及其动作、运镜方式、画面描述、台词/旁白、音效提示和剪辑备注。分镜是AI漫剧的施工蓝图——它决定了需要生成多少个视频片段、每个片段的Prompt怎么写、以及最终的剪辑节奏。60秒短剧一般包含8-15个分镜，3分钟剧集可能有20-40个分镜。",
    relatedTerms: ["镜头", "景别", "运镜", "关键帧", "故事板", "脚本"]
  },
  {
    term: "Prompt",
    category: "AI技术",
    definition: "写给AI工具的指令文本，用来告诉AI生成什么样的图像或视频。它不是关键词的随意堆砌，而是结构化的描述语言。一个完整的AI漫剧Prompt通常包含9个要素：主体描述（谁/什么）、场景描述（在哪/什么环境）、动作描述（在做什么）、情绪氛围（什么感觉）、镜头角度（什么视角）、光照描述（什么光/什么方向）、艺术风格（什么画风）、质量关键词（高清/细节丰富）和反向约束（不要什么）。Prompt的质量直接决定AI生成效果的好坏。",
    relatedTerms: ["正向Prompt", "反向Prompt", "Seed", "Checkpoint", "LoRA"]
  },
  {
    term: "正向Prompt",
    category: "AI技术",
    definition: "告诉AI要生成什么的描述文本。在AI漫剧中，正向Prompt包含你希望出现在画面中的所有元素——人物外貌、服装、场景环境、动作姿态、情绪氛围、光线效果、艺术风格等。正向Prompt应该精确具体而不是模糊笼统，比如黑色长发、丹凤眼、左脸有一道细疤的17岁少年远好于一个帅气的少年。正向Prompt的结构化和标准化是提高生成稳定性的关键手段。",
    relatedTerms: ["Prompt", "反向Prompt"]
  },
  {
    term: "反向Prompt",
    category: "AI技术",
    definition: "告诉AI不要生成什么的描述文本，也叫负面提示词或Negative Prompt。在AI漫剧中，反向Prompt用于排除你不想要的画面元素——常见的有：不要变形的手指（no extra fingers）、不要模糊的人脸（no blurry face）、不要现代服装（no modern clothing）、不要欧美面孔（no western face characters）、不要低画质（no low quality, no jpeg artifacts, no blur）等。好的反向Prompt能显著降低废片率。",
    relatedTerms: ["Prompt", "正向Prompt", "废片率"]
  },
  {
    term: "Seed",
    category: "AI技术",
    definition: "随机种子值，是AI生成过程中的初始随机数。在相同的模型、Prompt和参数设置下，使用相同的Seed值可以复现几乎一模一样的生成结果。这对于AI漫剧的角色一致性非常重要——你可以先用不同Seed值探索满意的角色形象，然后锁定那个Seed值用于后续所有角色生成。Midjourney、Stable Diffusion、ComfyUI等都支持Seed固定功能。注意：更换模型或修改Prompt后，同样的Seed值不会产生同样的结果。",
    relatedTerms: ["Prompt", "角色一致性", "Checkpoint", "LoRA"]
  },
  {
    term: "LoRA",
    category: "AI技术",
    definition: "Low-Rank Adaptation的缩写，是一种对大型AI模型进行轻量化微调的技术。在AI漫剧中，LoRA最常用于固定特定角色的外观、特定艺术风格或特定服装配饰。你可以用20-50张角色参考图训练一个角色的专属LoRA模型，然后每次生成时加载这个LoRA，就能大幅提高角色一致性。LoRA文件体积小（通常几MB到几十MB），可以在Stable Diffusion WebUI和ComfyUI中使用。LoRA是解决角色变脸问题的核心技术手段之一。",
    relatedTerms: ["Checkpoint", "ControlNet", "IP-Adapter", "角色一致性", "Stable Diffusion"]
  },
  {
    term: "Checkpoint",
    category: "AI技术",
    definition: "AI图像生成的基础大模型文件，决定了生成画面的基础能力、风格倾向和质量上限。不同的Checkpoint有不同风格偏向——有的擅长写实人物、有的擅长二次元动漫、有的擅长中国古风、有的偏向3D渲染。在Stable Diffusion生态中，常见的Checkpoint有ChilloutMix（写实人像）、Anything V5（日系动漫）、GuoFeng（国风/古风）等。选择正确的Checkpoint是AI漫剧风格化的第一步。Checkpoint文件通常较大（2-7GB）。",
    relatedTerms: ["LoRA", "ControlNet", "Stable Diffusion", "美术风格"]
  },
  {
    term: "ControlNet",
    category: "AI技术",
    definition: "一种通过额外条件（如姿态骨架图、深度图、线稿图、边缘检测图等）来精确控制AI生成画面结构和构图的技术。在AI漫剧中，ControlNet主要用于：控制角色姿态（Pose ControlNet——确保角色动作符合需要）、控制场景深度和布局（Depth ControlNet——确保背景结构合理）、以及控制画面中用线条表达的精准结构（Canny ControlNet——确保构图不走形）。ControlNet是Stable Diffusion和ComfyUI生态中的重要工具，能大幅提高生成的精确度和可控性。",
    relatedTerms: ["IP-Adapter", "LoRA", "ComfyUI", "Stable Diffusion", "角色一致性"]
  },
  {
    term: "IP-Adapter",
    category: "AI技术",
    definition: "Image Prompt Adapter的缩写，是一种允许用参考图片（而非纯文字）来影响AI生成结果的技术。与传统的图生图（img2img）不同，IP-Adapter在更深的模型层面提取参考图的特征（如角色面部特征、画面风格、色彩构成等），然后将这些特征注入生成过程。在AI漫剧中，IP-Adapter是保持角色一致性的重要工具——你可以用一张满意的角色图作为参考，后续所有生成都会偏向这个角色的特征。一般配合ComfyUI使用效果最佳。",
    relatedTerms: ["ControlNet", "LoRA", "Reference Image", "角色一致性", "ComfyUI"]
  },
  {
    term: "Reference Image",
    category: "AI技术",
    definition: "参考图，也叫参考图像或风格参考图。在AI漫剧创作中，你可以上传参考图给AI工具，让AI在生成新图片时参考其人物长相、画面风格、色彩方案或构图方式。参考图的使用方式因工具而异：Midjourney支持Image Prompt和Style Reference功能；即梦AI支持角色参考图功能；Stable Diffusion和ComfyUI可通过IP-Adapter、ControlNet或img2img实现参考图功能。参考图的质量和清晰度直接影响参考效果——越清晰、越典型、越正面的参考图效果越好。",
    relatedTerms: ["IP-Adapter", "ControlNet", "角色一致性", "关键帧", "Prompt"]
  },
  {
    term: "Image to Video (I2V)",
    category: "AI技术",
    definition: "图生视频，是一种先用AI生成静态关键帧图片，再将这些图片作为输入传给AI视频模型生成动态视频片段的工作方式。I2V是目前AI漫剧制作的主流方式，因为先有静态图作参考，视频质量更可控、角色和场景的还原度更高。与之相对的是T2V（文生视频），即不依赖图片、纯用文字描述直接生成视频，虽然更便捷但可靠性和一致性通常不如I2V。可灵、Runway、即梦AI、Pika等都支持I2V功能。",
    relatedTerms: ["Text to Video (T2V)", "关键帧", "视频生成", "运镜"]
  },
  {
    term: "Text to Video (T2V)",
    category: "AI技术",
    definition: "文生视频，直接通过文字描述（无需上传关键帧图片）让AI生成动态视频。T2V的优势是操作便捷——不需要先生成静态图再转视频，跳过了一个步骤。但T2V的弱点是可控性较差——角色长什么样子、场景什么风格、构图如何，AI自由发挥的空间很大，难以精确控制。在AI漫剧中，T2V适合做补充性内容（如过渡镜头、环境空镜），不建议用于主要剧情镜头，除非你的故事不依赖角色一致性。",
    relatedTerms: ["Image to Video (I2V)", "关键帧", "Prompt", "视频生成"]
  },
  {
    term: "Keyframe",
    category: "创作流程",
    definition: "关键帧，指AI漫剧中每个镜头最重要、最具代表性的一帧画面。关键帧通常是静态图片，它是后续视频生成的基础——你先用图像AI工具生成一张高质量的关键帧图，确认画面内容、构图、角色、光线和情绪都满意后，再把它作为I2V的输入生成视频片段。关键帧的选择和设计是AI漫剧制作中最关键的视觉决策点之一，一个好的关键帧应该满足：画面好看、角色清晰、有运动空间（不像已经做完了的状态）。",
    relatedTerms: ["分镜", "Image to Video (I2V)", "Prompt", "图像生成"]
  },
  {
    term: "Camera Movement (运镜)",
    category: "视觉语言",
    definition: "运镜，指视频中镜头的运动方式。常见的运镜类型包括：推（镜头向前推进，画面从远到近）、拉（镜头向后拉远，画面从近到远）、摇（镜头水平转动）、移（镜头横向或纵向平移）、跟（镜头跟随运动主体移动）、环绕（镜头围绕主题旋转）、升降（镜头垂直方向移动）和固定（镜头不移动）。在AI漫剧中，运镜是通过视频生成工具中的文字描述或参数设置实现的，简单的运镜（如缓慢推近、从左到右平移）成功率远高于复杂组合运镜。运镜是控制视频节奏和观众注意力的核心手段。",
    relatedTerms: ["镜头", "景别", "分镜", "视频生成"]
  },
  {
    term: "Shot (镜头)",
    category: "视觉语言",
    definition: "镜头，指视频中一个连续的、未被切断的画面片段。一个60秒的AI漫剧通常包含8-15个镜头，每个镜头持续2-8秒不等。镜头的切换频次和节奏决定了作品的观看体验——切换太快观众反应不过来，切换太慢观众会觉得拖沓。",
    relatedTerms: ["分镜", "景别", "运镜", "关键帧", "Scene"]
  },
  {
    term: "Scene (场景)",
    category: "视觉语言",
    definition: "场景，指故事发生的具体地点和环境。一个场景可以包含多个镜头——比如宗门大殿这个场景可能包含3-5个不同的镜头（全景展示大殿气势、中景掌门说话、特写主角反应等）。在AI漫剧中，场景描述需要包括：地点特征（室内/室外、建筑风格、时代背景）、时间信息（白天/夜晚/黄昏）、环境元素（天气、道具、灯光）、氛围（压抑/明亮/温馨/诡异）。场景的一致性是AI漫剧中仅次于角色一致性的重要技术挑战。",
    relatedTerms: ["镜头", "分镜", "关键帧", "美术风格"]
  },
  {
    term: "Storyboard (故事板)",
    category: "视觉语言",
    definition: "故事板，即分镜脚本的视觉化版本——将文字分镜绘制成一系列简笔画或草图格子，直观展示每个镜头的大致构图、角色位置、动作流程和镜头衔接关系。在AI漫剧创作中，故事板不追求艺术美感，而追求清晰沟通——让人一看就明白这个镜头里谁是主角、在看什么方向、和下一个镜头是什么关系。可以用Figma、Storyboarder软件、甚至纸笔绘制故事板。",
    relatedTerms: ["分镜", "镜头", "关键帧", "Figma"]
  },
  {
    term: "Dubbing (配音)",
    category: "声音制作",
    definition: "配音，指为AI漫剧中的角色和旁白添加人声。AI配音工具（如ElevenLabs、Fish Audio、MiniMax Audio）可以将文字转化为自然的人类语音，并支持调节音色、语速、音高、情感强度和停顿。AI漫剧的配音通常包含三类声音：角色对白（每个角色的台词，需要用不同音色区分）、旁白（故事叙述者，音色稳定、风格统一）、情绪配音（哭泣、喘息、呐喊等非语言人声）。",
    relatedTerms: ["Lip Sync", "BGM", "SFX", "音色", "字幕"]
  },
  {
    term: "SFX (音效)",
    category: "声音制作",
    definition: "Sound Effects的缩写，即音效。在AI漫剧中的音效包括：环境音（雨声、风声、脚步声、门开关声）、动作音（拳击声、武器碰撞声、施法声、掉落声）、情绪音（心跳声、紧张音效、冲击音效）和界面音（系统提示音、能量启动音）。音效的作用是强化画面的真实感和打击感——一个挥拳动作配上砰的音效会让人感觉更有力。注意：音效也不能喧宾夺主，音量通常设置为配音的50-80%。",
    relatedTerms: ["BGM", "Dubbing", "剪辑", "音乐与音效"]
  },
  {
    term: "BGM (背景音乐)",
    category: "声音制作",
    definition: "Background Music的缩写，即背景音乐。在AI漫剧中BGM负责营造情绪氛围和引导观众情感——紧张场景用急促低音、感人场景用柔和弦乐、高潮场景用激昂配乐、悬疑场景用不和谐音。使用AI音乐生成工具（如Suno、Udio）可以制作独家BGM，避免版权问题。常用的BGM来源还有Epidemic Sound等免版权音乐库。BGM音量通常控制在配音的30-50%，确保不压过台词。",
    relatedTerms: ["SFX", "Dubbing", "Suno", "版权", "音乐与音效"]
  },
  {
    term: "Lip Sync (口型同步)",
    category: "声音制作",
    definition: "口型同步，即让AI生成的视频中角色的嘴部动作与配音音频同步的技术。在AI漫剧中，口型同步是提升观看沉浸感的重要细节——当观众看到角色说话时嘴不动，或者嘴动但和声音对不上，会立刻产生出戏感。目前AI视频生成工具的口型同步技术还在发展中：Pika的Lip Sync功能可以直接为角色添加口型动画；Runway的部分功能也支持口型同步。",
    relatedTerms: ["Dubbing", "配音", "视频生成", "Pika"]
  },
  {
    term: "Upscale (放大)",
    category: "图像处理",
    definition: "图像/视频放大，指提高图片或视频分辨率的处理技术。在AI漫剧中的常见应用场景：用AI工具生成了一张满意的关键帧但分辨率不够（比如只有1024x1024，但需要1920x1080），通过Upscale工具在不明显降低画质的前提下提高分辨率。常用的Upscale工具包括：AI在线放大工具、Stable Diffusion的Upscale插件、Topaz Gigapixel AI等。注意：Upscale不能无中生有——低分辨率图片Upscale后清晰度提升有限，原始图质量越好Upscale效果越好。",
    relatedTerms: ["Interpolation", "Denoise", "Batch"]
  },
  {
    term: "Interpolation (补帧)",
    category: "图像处理",
    definition: "视频补帧，指在已有的视频帧之间插入AI生成的中间帧，从而提高视频的帧率（FPS）和流畅度。在AI漫剧中，补帧常用于：AI视频生成工具输出的视频帧率不够（比如只有15fps，但发布平台要求30fps或更高），通过补帧可以让画面运动更平滑。常用的补帧工具包括：Flowframes、RIFE（Real-Time Intermediate Flow Estimation）等。注意：补帧在某些场景下会产生鬼影或画面变形（特别是在快速运动或复杂背景的场景），需要选择性使用。",
    relatedTerms: ["Upscale", "Denoise", "视频生成"]
  },
  {
    term: "Denoise (去噪/重绘强度)",
    category: "AI技术",
    definition: "在AI图像生成中，Denoise（也叫Denoising Strength或重绘强度）是指每次生成时对随机噪声的移除程度。数值越高（如0.7-1.0），AI对画面的创作自由度越大，生成的画面变化也越大；数值越低（如0.2-0.4），AI越倾向于保留输入图像的原貌，只做轻微修改。在AI漫剧中，使用图生图（img2img）调整关键帧时，Denoise值的设置非常关键：0.3-0.5适合微调（保持构图不变只改变细节和风格），0.6-0.8适合大幅度改动（改变姿势、添加元素），更高的值接近于重新生成。",
    relatedTerms: ["Upscale", "Batch", "Seed", "Prompt"]
  },
  {
    term: "Batch (批量生成)",
    category: "AI技术",
    definition: "批量生成，指一次性让AI工具生成多张/多个图片或视频，而不是单次单独生成。在AI漫剧中，Batch生成可以大幅提高效率——比如一次性为一个场景生成4张不同构图的关键帧、为同一个角色一次性生成6种不同表情、或者一次性为一段演讲稿生成8个视频片段。ComfyUI特别擅长Batch处理——你可以搭建好一个工作流后一键批量生成整个系列的镜头。批量生成的前提是工作流和Prompt已经验证稳定，否则批量生成等于批量浪费。",
    relatedTerms: ["Upscale", "Denoise", "ComfyUI", "废片率"]
  },
  {
    term: "废片率",
    category: "商业概念",
    definition: "AI漫剧制作中最关键的成本指标之一。废片率 = 生成但不能使用的素材数量 / 总生成数量。举例来说：如果你为一个60秒短剧生成了30个视频片段但只有6个能用，废片率就是80%。废片率越高，实际成本越高——你不仅花钱买了工具的生成额度，还需要花时间筛选、重新生成。新手废片率通常在40-70%，有经验的专业创作者可以将废片率控制在15-25%。降低废片率的核心方法是：提高Prompt精确度、固定角色和风格描述、使用Seed和参考图控制一致性、以及逐步积累有效的Prompt模板和参数配置。废片率是衡量AI漫剧创作者技术水平的核心指标之一。",
    relatedTerms: ["Batch", "Prompt", "ROI", "成本", "Seed", "角色一致性"]
  },
  {
    term: "ROI (投入产出比)",
    category: "商业概念",
    definition: "Return on Investment的缩写，即投资回报率。在AI漫剧中，ROI = (收入 - 投入) / 投入。比如你花100元投流推广一集AI漫剧，这集带来了200元的各渠道收入（广告分成+品牌合作+涨粉转化等），那ROI就是100%。如果只带来了60元收入，ROI为-40%，意味着你在这场推广中亏损了。投流ROI是判断是否值得继续投放的关键指标。",
    relatedTerms: ["废片率", "IAA", "IAP", "成本"]
  },
  {
    term: "IAA (广告变现)",
    category: "商业概念",
    definition: "In-App Advertising的缩写，指用户免费观看内容，平台通过在内容中插入广告来获取收入，然后与内容创作者按比例分成。在AI漫剧领域，IAA模式常见于免费短剧平台——用户可以免费看到所有剧集，但每几集中间会插入一段广告。这种模式的优势是观看门槛低（观众不需要付费）、传播范围广；缺点是单次观看收益低，需要大量播放才能获得可观的收入。",
    relatedTerms: ["IAP", "CPS", "ROI", "平台变现"]
  },
  {
    term: "IAP (付费解锁)",
    category: "商业概念",
    definition: "In-App Purchase的缩写，指用户通过充值、购买会员或直接付费来解锁观看内容。在AI漫剧领域，IAP模式常见于小程序短剧、付费短剧平台——前几集免费观看（作为钩子吸引用户），想看后续剧集需要付费或充值。IAP模式的单用户收入远高于IAA，但对内容质量、剧情钩子设计和投流获客能力的要求也更高。付费转化率（看完免费集后有多少用户愿意付费）是IAP模式的核心指标。",
    relatedTerms: ["IAA", "CPS", "ROI", "投流", "短剧分账"]
  },
  {
    term: "CPS (按销售分成)",
    category: "商业概念",
    definition: "Cost Per Sale的缩写，指按实际销售结果进行分成的合作模式。在AI漫剧的商业化场景中，CPS模式常用于带货推广——你在AI漫剧中植入或推荐某个产品（如小说App、游戏、课程），用户通过你的专属链接或二维码购买后，你获得销售额的一定比例作为佣金。CPS的优势是零投入门槛（不需要先买货），你只需要创作好的内容吸引用户转化；弱点是收入不可控——完全取决于用户的购买意愿。在AI漫剧中做CPS，关键是让产品推广和剧情自然结合，而不是生硬插入。",
    relatedTerms: ["IAA", "IAP", "带货", "ROI"]
  },
  {
    term: "商单",
    category: "商业概念",
    definition: "商业订制/品牌合作的俗称。品牌方或客户付费让AI漫剧创作者制作定制内容——可能是在你的AI漫剧中植入品牌产品、制作专门的品牌短片、为品牌角色或产品制作AI动画推广内容等。商单的收入通常远高于平台播放分成。商单可以通过平台的达人合作平台对接（如星图、蒲公英、花火、磁力聚星），也可以直接和品牌方商务洽谈。商单对创作者的要求是：有稳定的内容风格和粉丝基础、能按时按质交付、有专业的沟通能力和报价体系。",
    relatedTerms: ["星图", "蒲公英", "花火", "品牌合作", "IP授权"]
  },
  {
    term: "IP授权",
    category: "商业概念",
    definition: "知识产权授权的简称。指获得小说、漫画、影视、游戏、角色、故事等现有知识产权的合法使用权，在此基础上创作AI漫剧。IP授权通常以合同形式明确：授权范围（改编什么内容、改编成什么形式）、授权期限（多长时间内有效）、授权区域（哪些国家/地区/平台）、收益分配（赚了钱怎么分）、以及是否可以二次授权等。对于AI漫剧创作者，IP授权是一把双刃剑——用已有IP改编可以获得现成的粉丝基础和故事素材，但版权归属和收益分配需要专业法律支持。未经授权就改编他人的小说/漫画做AI漫剧，是严重的法律风险行为。",
    relatedTerms: ["版权", "商单", "合同", "改编"]
  }
];