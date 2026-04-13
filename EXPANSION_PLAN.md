# Story Spark 扩展计划

## 产品定位升级
**从**：随机故事 premise 生成器（一次性的工具）
**到**：创作者的故事灵感工作台（高频打开的平台）

## 阶段划分

### Phase 0：快速留存功能（纯前端，无需后端）

#### 0.1 收藏系统（localStorage）
- 点击❤️/收藏按钮保存当前 premise
- 收藏列表展示在页面底部（可折叠）
- localStorage 持久化，不需要账号
- 导出/导入收藏（JSON 格式）

#### 0.2 今日故事 + Streak
- 每天推送一条"今日故事"（基于日期 seed，保证每天唯一）
- 显示 streak 天数（连续访问天数）
- 简单动画庆祝 streak 里程碑（7天、30天）

#### 0.3 生成历史（localStorage）
- 记录最近 50 条生成
- 点击可恢复历史 premise
- 一键复制历史 premise

#### 0.4 分享故事卡片
- 生成一张可分享的图片卡片（Canvas 绘制）
- 包含：故事文本 + Story Spark logo + 分享按钮
- 支持 Twitter/X、微信、微博分享
- 可保存到本地

### Phase 1：AI 增强功能（需要 Cloudflare Workers 或类似后端）

#### 1.1 AI 故事标题生成
- 基于 premise 生成 3 个候选标题
- 风格可选：文学感 / 商业感 / 悬念感
- 点击复制

#### 1.2 AI 角色卡生成
- 基于人物元素生成角色背景故事
- 输出：姓名、年龄、外貌、动机、秘密
- 一键复制/分享

#### 1.3 AI 世界观生成
- 基于场景元素生成世界观描述
- 输出：地点详细描述、时代背景、社会规则
- 可作为 DnD/game master 参考

#### 1.4 AI 三幕式大纲
- 将 premise 扩展为完整三幕结构
- Act 1: 建立（hook + inciting incident）
- Act 2: 对抗（midpoint + crisis）
- Act 3: 解决（climax + resolution）
- 输出结构化文本，可复制

### Phase 2：内容扩充

#### 2.1 扩展元素库
- 增加 20+ 更多人物设定（职业、性格、弱点）
- 增加 15+ 更多场景设定
- 增加 15+ 更多冲突/钩子
- 增加类型组合变体（例："赛博朋克+武侠"）

#### 2.2 Genre Plot Structures
- 每个 genre 对应一个经典故事结构模板
- 奇幻：英雄之旅（12阶段）
- 悬疑：三幕结构 + 线索铺设
- 爱情：相遇 → 障碍 → 结局
- 在生成时同时展示当前 premise 适用的 plot structure

#### 2.3 人物关系网络
- 输入 2-3 个人物，生成人物关系描述
- 关系类型：盟友、对手、导师、情人、背叛者

### Phase 3：社区 + 变现

#### 3.1 精选 Gallery
- 用户可提交自己的 premise 到 gallery（需审核）
- 点赞/浏览统计
- 每周精选展示

#### 3.2 订阅制（$9/月 或 $79/年）
包含：
- 无限 AI 标题生成
- 无限 AI 角色卡生成
- 无限 AI 世界观生成
- AI 三幕式大纲
- 高级元素库（500+ premise 组合）
- 无广告

#### 3.3 联盟营销
- 推广写作工具（Scrivener、Campfire、Plottr）
- 推广写作课程
- 推广书籍/出版社
- 从每次成功转化中获取佣金

## 技术方案

### 前端（Astro 静态）
- 保持 Astro 静态站点的速度和 SEO 优势
- localStorage 处理收藏和历史
- Canvas API 生成分享图片

### 后端（Cloudflare Workers）
- AI 功能使用 OpenAI API 或 Claude API
- 订阅状态使用 Cloudflare KV 存储
- Stripe 处理支付

### 数据流
```
用户点击 → Cloudflare Worker → OpenAI API → 返回 AI 内容
                    ↓
              检查订阅状态 → KV Store
```

## 实施优先级

1. **Phase 0.1** 收藏系统（最容易，快速提升留存）
2. **Phase 0.2** 今日故事 + Streak（高频回访）
3. **Phase 0.4** 分享卡片（社交传播）
4. **Phase 1.1** AI 标题（第一个付费点）
5. **Phase 2.1** 扩展元素库（内容深度）
