export interface CaseStudyShot {
  shotNumber: number;
  duration: string;
  description: string;
  camera: string;
  imagePrompt: string;
  videoPrompt: string;
  audioNote: string;
}

export interface CaseStudy {
  title: string;
  genre: string;
  duration: string;
  platform: string;
  style: string;
  mood: string;
  synopsis: string;
  mainCharacter: {
    name: string;
    age: number;
    personality: string;
    appearance: string;
    accessories: string;
  };
  shots: CaseStudyShot[];
  editingRhythm: string;
  titleSuggestions: string[];
  coverCopy: string;
  costEstimate: {
    totalShots: number;
    wasteRate: string;
    videoCost: string;
    voiceCost: string;
    editingCost: string;
    totalCost: string;
  };
  wastePoints: string[];
  commercialJudgment: string;
}

export const caseStudy: CaseStudy = {
  title: '《废柴少年觉醒神秘系统》',
  genre: '国漫玄幻爽文',
  duration: '60秒',
  platform: '抖音竖屏 9:16',
  style: '国漫+玄幻+爽文风格，高对比度冷色调，金色能量粒子视觉风格',
  mood: '压抑→屈辱→不甘→临界爆发→觉醒→反击→悬念钩子',
  synopsis: '少年林烬被宗门逐出，在雨夜跪于石阶之下。众人嘲笑他经脉已废，掌门冷漠宣判将他逐出山门。他在羞辱中低头握拳，雨水滑过脸颊。绝望之际，胸口的白玉佩突然发出金色光芒——神级修炼系统启动。他缓缓抬头，双眼泛出金色光芒，周围弟子惊恐后退。最后他站起来，背后浮现出巨大的金色灵阵，雨幕被能量震开，故事在高燃的悬念中定格——被逐出宗门的废柴，第一夜便踏入神境。',
  mainCharacter: {
    name: '林烬',
    age: 17,
    personality: '隐忍倔强、不甘被命运摆布、外表瘦弱内心坚韧、临界爆发的少年感',
    appearance: '黑色头发因雨水湿乱贴在脸上，五官清秀但眼神中带着不甘和倔强，身形偏瘦但线条有力量感。身穿破旧的青黑色宗门弟子服，被雨水浸透贴紧身体。',
    accessories: '胸口挂着一块看似普通的白玉佩（系统载体），平时暗淡无光，觉醒时发出金色光芒。左脸靠近耳侧有一道细小的旧伤痕，暗示过往的艰难经历。'
  },
  shots: [
    {
      shotNumber: 1,
      duration: '0-8秒',
      description: '雨夜，少年跪在宗门石阶下，周围同门弟子围着他露出嘲笑和不屑的表情。远处宗门大殿灯火通明，与雨中跪地的少年形成鲜明对比。氛围压抑、冷峻。',
      camera: '缓慢下压镜头（从俯视高度缓缓降低到与跪地少年平齐），雨滴从前景滑落。竖屏9:16构图，少年处于画面中下方，观众视角在台阶上俯视，增强被俯视的压迫感。',
      imagePrompt: '竖屏9:16构图，雨夜宗门石阶场景，17岁瘦削黑发少年跪在湿漉漉的石阶上，破旧的青黑色宗门弟子服湿透贴在身上，胸口挂着一块普通的白玉佩。周围几个身穿同样宗门服饰的年轻弟子站着，脸上带着轻蔑和嘲笑的冷笑。背景是远处灯火通明的中式古典宗门大殿，大雨倾盆，冷色调月光从云层缝隙洒下。国漫玄幻风格，高对比度冷色打光，画面下方雨水积成水坑反射光线。电影感构图，不要现代元素，不要欧美建筑风格，不要Q版卡通风格。',
      videoPrompt: 'Camera slowly lowers from a high angle to eye level with the kneeling boy. Rain falls heavily in the foreground. The disciples in the background shift slightly with cold smirks. Character stays still kneeling. Atmospheric, slow pace. Maintain character consistency.',
      audioNote: '旁白（低沉克制男声）：那一夜，林烬被整个宗门抛弃。背景：强烈的雨声和远处隐约的雷声。整体氛围音效：压抑的低频环境音。'
    },
    {
      shotNumber: 2,
      duration: '8-16秒',
      description: '掌门站在宗门大殿前的高台上，身穿银灰色华贵长袍，表情冷漠没有任何感情波动，俯视着跪在台阶下的少年。掌门身后的灯火将他衬托得威严而残酷。',
      camera: '低角度仰拍掌门（从少年跪地的视角向上看），强调掌门的威严和居高临下的压迫感。掌门位于画面上半部分，占据主要视觉重心。',
      imagePrompt: '竖屏9:16构图，低角度仰拍视角。一位中年威严的掌门站在古典宗门大殿前的高台之上，身穿银灰色华贵长袍，长发束起，表情冷漠眼神俯视下方没有一丝温度。他身后的殿堂内灯火通明温暖，与殿外雨夜形成强烈冷暖对比。掌门身影被背光勾勒出冷峻的剪影感。雨幕在他身前形成半透明的帘幕。国漫玄幻风格，冷暖光强烈对比，电影感。',
      videoPrompt: 'Low angle static shot looking up at the sect leader. Rain falls between camera and the leader. The leader remains still, only his robes sway slightly in the wind. Cold expression, no movement. Light from the hall behind him flickers very subtly.',
      audioNote: '掌门（威严冷漠中年男声）：经脉尽废，从今日起，逐出山门。音效：宣判声在殿前回荡的效果（轻微混响）。风声中雨声持续，掌门话音落下的瞬间雷声轻响。'
    },
    {
      shotNumber: 3,
      duration: '16-26秒',
      description: '少年低头特写——湿透的黑发贴着额头，雨水顺着脸颊滑落。他的双手在画面下边缘攥紧成拳，指甲几乎嵌入掌心。身体微微颤抖，极度压抑但临近爆发的情绪。胸前玉佩微弱反光。',
      camera: '缓慢推近到少年的脸部特写（从中景缓慢推进到近景/特写），景深极浅（背景完全虚化），焦点在雨水滑过脸颊的细节和眼睛。',
      imagePrompt: '竖屏9:16构图，特写镜头缓慢推近。17岁黑发少年脸部近距离，雨水顺着瘦削的脸颊滑落，黑发湿乱贴在额头上挡住半边眼睛。嘴唇紧抿，眼神从下方微微向上瞪视（视线方向朝上偏右），充满不甘和压抑的情绪。双手在画面底部边缘攥紧成拳头，指节因用力而发白。胸口的白玉佩露出小半部分，在微弱光线中反射出极淡的微光。极浅景深使背景完全模糊成深蓝灰色的虚影。冷色调为主，唯一暖色是玉佩的微光。国漫风格，电影感光线处理。',
      videoPrompt: 'Extreme slow zoom in on the boys face. Rain drops slowly slide down his cheek. His fists clench tighter very gradually. His body trembles subtly. Minimal movement, maximum emotional tension. The jade pendant has a barely visible faint glow.',
      audioNote: '无台词——用纯粹的视听语言传达情绪。强烈的雨声持续+逐渐加重的低沉心跳声（BPM从慢到快）。偶尔穿插远处隐约的嘲笑声回声（被雨声模糊化）。第22秒心跳声突然加重一声——暗示转折即将到来。'
    },
    {
      shotNumber: 4,
      duration: '26-34秒',
      description: '胸前玉佩突然爆发出耀眼的金色光芒！光芒从微弱到强烈，照亮了少年湿透的衣领、下颌和周围雨滴。雨滴被光芒映成金色粒子，在空中悬浮般慢慢散开。玄幻能量的视觉表现——光线从玉佩中心放射状扩散。',
      camera: '快速推进到玉佩位置（从中景急速推近到玉佩特写），然后定格在玉佩发光画面上。推近速度前慢后快，配合光芒爆发的时间点达到视觉冲击感。',
      imagePrompt: '竖屏9:16构图，快速推进到胸口玉佩特写。一块白玉佩突然从内部爆发出耀眼的金色光芒——光芒从玉佩中心向外放射，如能量脉冲波。金色的光线照亮了被雨水浸湿的深色衣领布料（能看到布料的纹理被照亮），照亮了少年的下颌线条，以及从脸颊滑落的雨滴（被照成金色光点）。周围空气中出现细微的玄幻能量粒子——细小的金色光点在暗色背景中漂浮。金色光芒和深蓝灰色雨夜背景形成强烈的色彩对比。国漫玄幻风格，高动态范围光效，能量视觉化表现。',
      videoPrompt: 'Camera rapidly pushes in toward the chest jade pendant. The golden light pulses and expands outward from the pendant. Energy particles float and spiral away from the light source. Raindrops near the pendant glow golden. Intense but elegant energy effect.',
      audioNote: '音效：低频能量启动声（类似低频嗡嗡声从弱到强），金色光芒爆发时配一声清脆的能量脉冲音效（如水晶破裂声混合能量释放声）。雨声在光芒爆发瞬间被压低，突显能量音效。'
    },
    {
      shotNumber: 5,
      duration: '34-40秒',
      description: '黑色背景上浮现出半透明的金色符文系统界面——玄幻风格的UI面板，上面浮现着流动的古老文字（类似篆书风格的金色发光文字）。系统文字提示：检测到宿主极限情绪，神级修炼系统启动。画面充满神秘科技与玄幻结合的风格。',
      camera: '系统界面轻微数字抖动效果（模拟不稳定但正在启动的界面），金色符文从模糊到清晰逐渐浮现，文字逐个亮起。',
      imagePrompt: '竖屏9:16构图，纯黑背景上一个半透明的金色系统界面正在浮现。界面采用玄幻风格的UI设计语言——不是现代科技风而是融合了古代符文和金色能量纹路的风格。中间漂浮着几行金色发光文字（以篆书风格为基础但更清晰易读），文字周围有流动的细小金色符文环绕。整体风格介于玄幻阵法和神秘科技界面之间。微弱的粒子从界面边缘飘散。不要现代科技风，不要蓝色/白色科技UI，不要英文字体。',
      videoPrompt: 'Dark background with golden runic UI appearing. The interface fades in from transparent to semi-visible. Golden text lights up character by character. Small runes orbit around the main text. Subtle digital/energy flicker effect. Elegant and mystical.',
      audioNote: '系统合成音（清澈、中性、带有轻微回响）：检测到宿主极限情绪，神级修炼系统启动。同时配轻微的数字/能量音效混合——类似风铃声混合低频能量声。声音从干燥到带轻微混响渐变，仿佛声音来自另一个维度空间。'
    },
    {
      shotNumber: 6,
      duration: '40-50秒',
      description: '少年缓缓抬起头，双眼发出明亮的金色光芒（眼白和瞳孔都泛着金光）。雨水在他脸上反向蒸发——被体内涌出的能量蒸成薄薄的金色雾气。他的眼神从绝望无助转变为坚定自信——觉醒之后的少年气质彻底不同了。',
      camera: '超慢速推近到少年的眼睛特写（慢动作感），从看到全脸缓慢推进到只看到双眼。瞳孔中的金色光芒越来越亮，最后整个画面充满金光。',
      imagePrompt: '竖屏9:16构图，极度缓慢推近到少年眼睛。17岁黑发少年缓缓从低头状态抬起头，黑色湿发散开露出双眼。他的眼睛从普通的深棕色瞳孔逐渐变成发出金色光芒的状态——眼眸中金色光芒从瞳孔深处向外扩散，像金色的火焰在眼中燃烧。脸上雨水被体内散发的能量反向蒸发，形成薄薄的金色雾气向上升腾。少年的表情从压抑不甘转变为觉醒后的自信和坚定——嘴角微微上扬，眼神变得锐利而沉着。冷色调的脸部被眼中发出的金光照出暖色的高光。国漫风格，神态转变的核心表现力镜头。',
      videoPrompt: 'Ultra slow motion. The boy slowly lifts his head. His eyes gradually start glowing with golden light that intensifies. Raindrops on his face evaporate into golden mist rising upward. His expression transforms from despair to determination. Very slow push-in toward his glowing eyes.',
      audioNote: '林烬（低沉但充满力量的少年音，从压抑到释放的转变）：原来，我还没输。这句一定要有情绪的转变——开头低沉微颤（压抑后的释放），后半句音量渐强语气变得坚定。背景：心跳声从之前的低沉缓慢变为强力有力的节奏。配合眼中金光渐亮的瞬间，BGM中开始加入低音弦乐铺垫高潮。'
    },
    {
      shotNumber: 7,
      duration: '50-56秒',
      description: '同门弟子的反应镜头——他们脸上原来的嘲笑和不屑瞬间冻结，然后变为惊恐和不可置信。有人下意识后退半步，有人张大了嘴，有人手中的剑差点脱落。金色光芒从少年方向照过来，映在他们惊恐的面孔上。',
      camera: '快速的横移扫过（whip pan style但速度不要太快），从左到右快速扫过三个不同弟子的惊恐表情。镜头带着从少年方向照来的金色光线移动。',
      imagePrompt: '竖屏9:16构图，横移扫过一组三个宗门弟子的表情变化。第一个：女弟子，刚才还在冷笑，现在笑容冻结在脸上眼睛瞪大，嘴微张。第二个：男弟子，身体向后倾斜做退后半步的姿态，眼睛因惊恐睁大，手本能地抬起想挡住从少年方向照来的金色强光。第三个：年长一些的弟子，从轻蔑变成不可置信，皱眉眯眼看着光源方向。三人的脸都被从画面外照入的金色暖光照亮一半，另一半仍留在冷色雨夜光中。雨继续下但他们已经忘记了雨水——全被眼前的景象惊呆了。国漫风格，表情捕捉精准。',
      videoPrompt: 'Quick horizontal pan from left to right across three disciples faces. Their expressions shift from mockery to shock and fear. Golden light from off-screen illuminates their faces as the pan moves. Each face freezes in a different stage of shock. Rain continues falling.',
      audioNote: '弟子（年轻男声，惊恐磕巴）：他的气息……怎么可能？语气从不相信到惊恐的转变，最后一个字音调上扬表示震惊。音效：配合横移扫过的快速空气声（swish音效）。背景BGM开始加入更多管弦乐层次——紧张感持续上升。'
    },
    {
      shotNumber: 8,
      duration: '56-60秒',
      description: '少年站起——从跪姿缓缓站立起来。他的背后浮现出一个巨大的、复杂的金色灵阵（几何图案+符文构成的圆形法阵），灵阵旋转展开，金色的能量纹路从灵阵中心向外扩散。宗门石阶地面微微震动，雨幕被从少年体内爆发的能量震开——形成了一个以他为中心的雨水真空区。最后定格在少年站在灵阵中央的全身画面——这是一个充满张力和悬念的定格。',
      camera: '低角度环绕——从少年正面缓慢环绕到他侧后方（展示背后灵阵的全貌），然后定格。镜头在环绕过程中同时缓缓上升，从仰拍变为接近平视。最后的定格画面为：少年正面站立，巨大灵阵在他背后展开，雨幕被震开形成水幕圆形边界。',
      imagePrompt: '竖屏9:16构图，低角度环绕后定格。17岁黑发少年林烬从跪姿缓缓站起，破旧青黑弟子服被能量风波微微吹动，他站在宗门的石阶上脚下石板出现细密裂纹。背后浮现一个巨大的金色发光灵阵——复杂的几何圆形阵列，由多层环形符文和能量纹路构成，缓缓旋转。金色能量粒子从灵阵中心向外螺旋扩散。雨幕被少年体内爆发的能量以他为中心向四周震开——形成了一个约两米半径的无雨区，雨水在这个边界上形成了一道圆形的水幕，被金光照得通透。整个画面是冷色调（蓝色雨夜）和暖色调（金色灵阵和能量）的超强对比。少年的身影在巨大的金色灵阵前显得虽然渺小但充满力量。国漫玄幻风格，爽文高燃定格画面，电影感史诗构图。',
      videoPrompt: 'Low angle orbit shot: the boy stands up from kneeling as a massive golden magic circle formation materializes behind him, rotating slowly. Rain is blasted outward forming a circular water curtain boundary around him. Stone steps crack beneath his feet. Golden energy particles spiral. Camera slowly orbits from front to quarter-angle then freezes on final epic composition.',
      audioNote: '旁白（低沉有力的男声，带史诗感）：被逐出宗门的废柴，第一夜便踏入神境。这句话要在画面定格后作为整个短剧的收尾说出——语气笃定、有力、带有强烈的悬念感。音乐高潮：BGM从之前的紧张铺垫推到最高潮——加入鼓点、管弦乐齐奏和一声巨响（定音鼓或大锣），在高潮中突然收住，只剩下雨声渐弱和低频余音。这是标准的爽文短剧结尾——让观众想看下一集。'
    }
  ],
  editingRhythm: '0-8秒：压抑开场（长镜头、慢节奏建立氛围）→ 8-16秒：羞辱与宣判（节奏加快，掌门台词推动剧情）→ 16-26秒：情绪积累（最长的无台词镜头，用画面和声音建立张力）→ 26-34秒：玉佩觉醒（节奏突然加速，光芒爆发打破压抑）→ 34-40秒：系统启动（神秘感，节奏放缓让观众看清系统信息）→ 40-50秒：觉醒抬头（慢动作，戏剧性的表情转变）→ 50-56秒：旁人惊恐（快速横移，节奏加快）→ 56-60秒：高潮灵阵+定格悬念（节奏推到最高然后定格收尾）',
  titleSuggestions: [
    '被逐出宗门那一夜，他体内的神级系统醒了',
    '所有人都以为他废了，直到那块玉佩亮起',
    '宗门弃子？不好意思，我觉醒了神级系统',
    '跪在雨中的废物少年，睁开眼已是神境',
    '第1集｜被逐出宗门后，系统觉醒了'
  ],
  coverCopy: '雨夜石阶跪地少年，胸口玉佩发光，双眼泛金，背后巨大灵阵——画面中央大字"神级系统觉醒"，底部署名"第1集"',
  costEstimate: {
    totalShots: 8,
    wasteRate: '新手预估40-60%（即每个镜头需要生成2-4次才能拿到一个可用的片段）',
    videoCost: '按国内工具免费额度+少量补充积分估算约10-30元（8个镜头每个生成3次，24次生成）。如全部使用国际工具（Runway/Runway Pro）约$15-30。',
    voiceCost: '使用剪映内置配音基本免费。如换用ElevenLabs/Fish Audio专业配音约5-15元。',
    editingCost: '使用剪映免费版剪辑无额外费用。时间投入约2-4小时（含剪辑+调色+字幕+音画同步）。',
    totalCost: '新手使用国内工具最低成本方案约5-20元（主要是积分补充）+2-4小时时间。使用国际工具组合约$20-50+时间。注意：这个估算未包含废片率和学习过程中的试错成本，实际新手成本通常为估算的1.5-2倍。'
  },
  wastePoints: [
    '镜头1：雨夜场景中的角色脸部可能因雨水遮挡而变形或模糊——需要通过多次生成找到雨水表现好且角色清晰的关键帧',
    '镜头4：玉佩发光时可能过度曝光或光效遮挡角色身体——需要控制发光强度和范围',
    '镜头8：巨大灵阵图案过于复杂可能导致视频生成时画面混乱、粒子乱飞——灵阵设计需要简化但保持视觉冲击力',
    '镜头7：同门弟子惊恐表情不稳定——不同生成可能表情不统一或夸张失真',
    '镜头1/6：从俯视到仰拍的运镜变化可能导致角色一致性不稳定——需要固定角色Seed和精确描述',
    '全篇：雨景在整条视频中需要保持一致的感觉——不同镜头雨的大小、方向、雨滴感要保持统一'
  ],
  commercialJudgment: '这个作品定位为爽文连续短剧的第一集/试播集。题材选择玄幻爽文是因为该类型在抖音和快手上具有天然的高完播率和传播优势。8个镜头的结构是按照建立冲突→情感积累→突然转折→高潮觉醒→悬念收尾的经典爽文节奏设计的。如果第一集数据表现好（完播率>40%、互动率>3%），可以立即规划后续5-10集的连续剧，每集结尾留钩子引导追更。商业化方向优先考虑平台扶持计划和短剧分账合作，其次考虑在作品有一定粉丝基础后对接品牌商单（玄幻风格适合游戏、小说App等客户）。不建议在作品初期就投流——先用自然流量验证内容质量和观众反应，数据好的集再考虑投流放大。核心风险是原创世界观和角色必须完全原创（不能借鉴任何已有IP），否则版权风险极高。'
};

export const promptTemplate = `主体：17岁黑发少年林烬，破旧青黑弟子服，胸口白玉佩
场景：雨夜宗门石阶，冷色月光，远处大殿
动作：低头握拳，雨水滑过脸颊
情绪：压抑、不甘、临界爆发
镜头：竖屏9:16，近景，浅景深，缓慢推近
风格：国漫玄幻，电影感，高对比冷光
限制：不要现代服装，不要变成欧美脸，不要卡通Q版，不要多余手指`;
