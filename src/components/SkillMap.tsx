import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Clock, Lightbulb, Zap, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { skillGroups } from '../data/skills';

interface SkillDetail { name: string; description: string; importance: 'critical' | 'important' | 'nice-to-have'; learningTime: string; practiceMethod: string; }

const skillDetails: Record<string, SkillDetail> = {
  '选题': { name: '选题', description: '确定故事题材、受众和差异化方向', importance: 'critical', learningTime: '3-7天', practiceMethod: '分析热门短剧类型，列出3个候选选题' },
  '爽点': { name: '爽点', description: '设计让观众产生满足感的剧情节点', importance: 'critical', learningTime: '7-14天', practiceMethod: '拆解10部热门短剧的爽点设置规律' },
  '冲突': { name: '冲突', description: '构建人物之间的矛盾与对抗', importance: 'critical', learningTime: '5-10天', practiceMethod: '为角色设置清晰的目标和障碍' },
  '反转': { name: '反转', description: '在剧情中设置意料之外的转折', importance: 'critical', learningTime: '5-10天', practiceMethod: '在每集结尾设置悬念或反转钩子' },
  '角色动机': { name: '角色动机', description: '明确角色行为的驱动力和目标', importance: 'important', learningTime: '3-5天', practiceMethod: '为每个主要角色写一段动机陈述' },
  '分集结构': { name: '分集结构', description: '规划每集的开头、发展和结尾', importance: 'critical', learningTime: '5-10天', practiceMethod: '用模板写出3集完整大纲' },
  '钩子设计': { name: '钩子设计', description: '设计前3秒抓住观众注意力', importance: 'critical', learningTime: '7-14天', practiceMethod: '为每集设计3个不同版本的开场钩子' },
  '景别': { name: '景别', description: '控制远景、全景、中景、近景、特写的切换', importance: 'important', learningTime: '3-5天', practiceMethod: '用同一场景画5个不同景别的分镜' },
  '运镜': { name: '运镜', description: '推拉摇移跟升降等镜头运动设计', importance: 'important', learningTime: '5-10天', practiceMethod: '观看电影片段，标注每个镜头的运镜方式' },
  '镜头节奏': { name: '镜头节奏', description: '控制镜头切换速度营造情绪节奏', importance: 'important', learningTime: '7-14天', practiceMethod: '对比快节奏和慢节奏片段的效果差异' },
  '情绪递进': { name: '情绪递进', description: '通过镜头组合推动观众情绪升级', importance: 'critical', learningTime: '10-20天', practiceMethod: '为关键场景设计情绪变化的分镜序列' },
  '画面转场': { name: '画面转场', description: '镜头之间的过渡方式和逻辑', importance: 'nice-to-have', learningTime: '3-7天', practiceMethod: '尝试5种不同转场手法并对比效果' },
  '镜头可生成性': { name: '镜头可生成性', description: '判断分镜设计是否能用AI工具实现', importance: 'critical', learningTime: '10-20天', practiceMethod: '每次分镜后标注可生成难度和替代方案' },
  '结构化描述': { name: '结构化描述', description: '用固定格式编写可复用的Prompt', importance: 'critical', learningTime: '5-10天', practiceMethod: '建立主体+场景+动作+情绪+光线的Prompt模板' },
  '角色一致性': { name: '角色一致性', description: '确保角色在不同镜头中保持外貌统一', importance: 'critical', learningTime: '14-30天', practiceMethod: '制作角色设定表，用Seed/LoRA固定外貌' },
  '风格控制': { name: '风格控制', description: '使用风格关键词控制画面整体调性', importance: 'important', learningTime: '5-10天', practiceMethod: '用同一Prompt换不同风格词对比效果' },
  '场景控制': { name: '场景控制', description: '精确描述场景环境和氛围', importance: 'important', learningTime: '3-7天', practiceMethod: '为每个场景编写标准化描述模板' },
  '反向约束': { name: '反向约束', description: '用反向Prompt排除不希望出现的元素', importance: 'important', learningTime: '3-5天', practiceMethod: '记录常见翻车元素并加入反向Prompt库' },
  '视频Prompt': { name: '视频Prompt', description: '针对视频生成工具的Prompt编写技巧', importance: 'critical', learningTime: '7-14天', practiceMethod: '测试不同视频生成工具对Prompt的响应差异' },
  '角色图': { name: '角色图', description: '生成高质量、多角度的角色设定图', importance: 'critical', learningTime: '3-7天', practiceMethod: '为每个角色生成正面、侧面、表情变化图' },
  '场景图': { name: '场景图', description: '生成故事中各个场景的环境图', importance: 'important', learningTime: '3-7天', practiceMethod: '为每个主要场景生成白天/夜晚/不同天气版本' },
  '关键帧': { name: '关键帧', description: '生成决定镜头开始或重要节点的画面', importance: 'critical', learningTime: '5-10天', practiceMethod: '为每个镜头指定1-2个关键帧并生成' },
  '封面': { name: '封面', description: '设计吸引点击的视频封面图', importance: 'critical', learningTime: '3-7天', practiceMethod: '测试5种封面风格，记录点击率差异' },
  '风格统一': { name: '风格统一', description: '确保所有图像在同一风格体系内', importance: 'important', learningTime: '7-14天', practiceMethod: '建立风格参考图库和关键词统一规范' },
  '图生视频': { name: '图生视频', description: '用静态图像生成动态视频片段', importance: 'critical', learningTime: '5-10天', practiceMethod: '测试不同I2V工具的运镜和稳定度' },
  '文生视频': { name: '文生视频', description: '直接用文字描述生成视频', importance: 'important', learningTime: '5-10天', practiceMethod: '对比T2V和I2V在相同场景下的效果差异' },
  '运镜控制': { name: '运镜控制', description: '在视频生成中控制镜头运动方向和速度', importance: 'important', learningTime: '7-14天', practiceMethod: '测试各工具的运镜参数并记录效果' },
  '废片筛选': { name: '废片筛选', description: '识别并剔除不合格的生成结果', importance: 'critical', learningTime: '5-10天', practiceMethod: '建立废片判定标准并记录每次筛选日志' },
  '多镜头统一': { name: '多镜头统一', description: '确保同一场景的多个镜头连贯一致', importance: 'critical', learningTime: '14-30天', practiceMethod: '用参考图和固定参数确保镜头间一致性' },
  '配音': { name: '配音', description: '为角色和旁白添加语音', importance: 'critical', learningTime: '3-7天', practiceMethod: '测试不同TTS工具的音色和自然度' },
  '旁白': { name: '旁白', description: '录制或生成故事叙述性语音', importance: 'important', learningTime: '2-5天', practiceMethod: '练习旁白节奏、停顿和重音' },
  '情绪': { name: '情绪配音', description: '根据剧情调整配音的情感表达', importance: 'critical', learningTime: '7-14天', practiceMethod: '为同一台词用不同情绪试配并对比' },
  'BGM': { name: 'BGM', description: '选择和编辑背景音乐', importance: 'important', learningTime: '3-7天', practiceMethod: '建立场景-情绪-BGM对应关系表' },
  '音效': { name: '音效', description: '添加环境音、动作音等增强代入感', importance: 'important', learningTime: '3-7天', practiceMethod: '拆解一条优质短剧的音效使用' },
  '节奏': { name: '节奏控制', description: '控制剪辑的节奏和呼吸感', importance: 'critical', learningTime: '10-20天', practiceMethod: '对比快慢节奏对完播率的影响' },
  '字幕': { name: '字幕', description: '制作风格化字幕增强观看体验', importance: 'important', learningTime: '3-5天', practiceMethod: '测试不同字幕样式和出现时机' },
  '转场': { name: '转场', description: '在剪辑中实现流畅的镜头过渡', importance: 'important', learningTime: '3-7天', practiceMethod: '练习5种常用转场效果' },
  '音画同步': { name: '音画同步', description: '确保声音与画面精确对齐', importance: 'critical', learningTime: '3-7天', practiceMethod: '逐帧检查口型、音效与画面的配合' },
  '前3秒钩子': { name: '前3秒钩子', description: '在视频开头用视觉和声音抓住观众', importance: 'critical', learningTime: '7-14天', practiceMethod: '每集准备3套不同的开场方案AB测试' },
  '标题': { name: '标题', description: '撰写吸引点击的视频标题', importance: 'critical', learningTime: '3-7天', practiceMethod: '每集准备5个标题方案根据数据选择' },
  '平台规则': { name: '平台规则', description: '了解各平台的审核和推荐机制', importance: 'critical', learningTime: '3-7天', practiceMethod: '阅读各平台创作者中心规则文档' },
  '数据复盘': { name: '数据复盘', description: '分析播放数据找出优化方向', importance: 'important', learningTime: '7-14天', practiceMethod: '每发布5集做一次完整数据复盘' },
  '账号定位': { name: '账号定位', description: '明确账号的差异化定位和内容方向', importance: 'critical', learningTime: '3-7天', practiceMethod: '写一段50字以内的账号定位描述' },
  '商业合作': { name: '商业合作', description: '识别和对接商业合作机会', importance: 'important', learningTime: '持续学习', practiceMethod: '整理可展示的作品集和案例展示页' },
  '接单报价': { name: '接单报价', description: '合理评估制作成本并制定报价策略', importance: 'critical', learningTime: '3-7天', practiceMethod: '建立标准化的报价模板和成本核算表' },
  '成本计算': { name: '成本计算', description: '精确核算每个环节的生产成本', importance: 'critical', learningTime: '3-5天', practiceMethod: '用本工具的成本计算器做月度成本模拟' },
  '版权意识': { name: '版权意识', description: '了解AI创作相关的版权和授权问题', importance: 'critical', learningTime: '3-7天', practiceMethod: '阅读AI工具商用条款和平台版权规则' },
  '商单沟通': { name: '商单沟通', description: '与品牌方高效沟通需求和执行方案', importance: 'important', learningTime: '持续学习', practiceMethod: '准备标准化的合作方案和案例展示' },
  '分账理解': { name: '分账理解', description: '理解平台分账模式和收益计算', importance: 'important', learningTime: '3-5天', practiceMethod: '阅读各平台分账规则文档' },
  'ROI判断': { name: 'ROI判断', description: '评估投入产出比做出商业决策', importance: 'critical', learningTime: '7-14天', practiceMethod: '每次投流前计算预期ROI和止损线' },
};

function getSkillDetail(skillName: string): SkillDetail {
  return skillDetails[skillName] || { name: skillName, description: '掌握' + skillName + '的核心知识和实践方法', importance: 'nice-to-have', learningTime: '3-7天', practiceMethod: '通过实际项目练习' + skillName };
}

const importanceConfig: Record<string, { label: string; bg: string; text: string }> = {
  'critical': { label: '核心', bg: 'bg-red-500/10', text: 'text-red-400' },
  'important': { label: '重要', bg: 'bg-orange-500/10', text: 'text-orange-400' },
  'nice-to-have': { label: '锦上添花', bg: 'bg-gray-500/10', text: 'text-gray-400' },
};

export default function SkillMap() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <motion.div className="mx-auto mb-12 max-w-4xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
        <p className="mb-3 text-sm font-semibold text-blue-400">能力图谱</p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">技能全景图</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 muted md:text-lg">拆解 AI 漫剧制作所需的各项能力，明确学习重点和路径。</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const isExpanded = expandedCategory === group.group;
          const skills = group.skills.map(getSkillDetail);
          const criticalCount = skills.filter((s) => s.importance === 'critical').length;
          return (
            <motion.div key={group.group} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: gi * 0.08 }} className="surface overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:border-white/10">
              <button onClick={() => setExpandedCategory(isExpanded ? null : group.group)} className="flex w-full items-center justify-between p-5 text-left">
                <div>
                  <div className="mb-1 flex items-center gap-2"><GraduationCap size={16} className="text-blue-400" /><h3 className="text-base font-semibold text-white">{group.group}</h3></div>
                  <p className="text-xs muted">{group.skills.length} 项技能{criticalCount > 0 && <span className="ml-2 text-red-400">{criticalCount} 项核心</span>}</p>
                </div>
                <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-white/30"><ChevronDown size={18} /></motion.span>
              </button>
              <motion.div initial={false} animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="space-y-2 border-t border-white/5 px-5 pb-5 pt-3">
                  {skills.map((skill) => {
                    const imp = importanceConfig[skill.importance];
                    return (
                      <div key={skill.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
                        <div className="mb-1 flex flex-wrap items-center gap-2"><span className="text-sm font-semibold text-white">{skill.name}</span><span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-medium', imp.bg, imp.text)}>{skill.importance === 'critical' && <Zap size={9} />}{imp.label}</span></div>
                        <p className="mb-2 text-xs leading-relaxed muted">{skill.description}</p>
                        <div className="flex flex-wrap items-center gap-3 text-[11px]"><span className="flex items-center gap-1 muted"><Clock size={10} />{skill.learningTime}</span><span className="flex items-center gap-1 muted"><Lightbulb size={10} />{skill.practiceMethod}</span></div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div className="mx-auto mt-10 max-w-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 muted"><span className="h-2 w-2 rounded-full bg-red-400" />核心 -- 必须掌握</span>
          <span className="flex items-center gap-1.5 muted"><span className="h-2 w-2 rounded-full bg-orange-400" />重要 -- 应该掌握</span>
          <span className="flex items-center gap-1.5 muted"><span className="h-2 w-2 rounded-full bg-gray-400" />锦上添花 -- 有时间再学</span>
        </div>
      </motion.div>
    </section>
  );
}
