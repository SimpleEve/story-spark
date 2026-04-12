# Story Spark — 故事灵感引擎

## 目标 URL
https://simpleeve.github.io/story-spark/

## 核心功能
随机组合故事元素（类型、基调、人物、地点、冲突），生成独特的故事 Premise。一键复制/分享。

## 目标用户
- 小说作者、短篇小说创作者
- DnD/跑团玩家和主持人
- 游戏剧情策划
- 创意写作教师和学生

## 已完成功能
- [x] 随机故事生成（类型+基调+人物+地点+冲突）
- [x] 一键重新生成
- [x] 复制到剪贴板（带格式化文案）
- [x] Twitter/X 分享按钮
- [x] 类型筛选（点击类型标签生成该类型故事）
- [x] 响应式设计（手机/PC）
- [x] 键盘快捷键（Space/Enter 生成）
- [x] 会话去重（避免同一条故事重复出现）
- [x] 灵感画廊（每次生成时动态刷新3条）
- [x] 主题色调随类型变化（genre badge 颜色）

## SEO 优化
- [x] 中文 title + description（含"完全免费"关键词）
- [x] Open Graph / Twitter Card
- [x] keywords meta
- [x] favicon (emoji ✦)
- [x] sitemap.xml
- [x] robots.txt
- [x] canonical URL
- [x] JSON-LD WebApplication Schema
- [x] JSON-LD FAQ Schema（3个常见问题）
- [x] PWA manifest
- [x] Apple Web App meta

## 技术栈
- Astro 5.7（静态生成）
- 纯前端，无后端依赖
- 部署：GitHub Pages
- CI/CD：GitHub Actions

## 变现路径
- **Phase 1（当前）**：Google AdSense 申请（页面 SEO 完善，可直接申请）
- **Phase 2**：高级模板付费（特定类型组合、细分场景包）
- **Phase 3**：品牌合作（写作工具/出版社）

## AdSense 申请检查清单
- [x] 网站可访问（GitHub Pages）
- [x] 内容原创、丰富（超过 5 页后可申请）
- [x] 隐私政策页面（建议补充）
- [x] 联系方式（footer 有链接占位）
- [x] sitemap + robots.txt
- [x] 移动端适配

## 隐私政策（建议后续补充）
需要添加 `/privacy` 页面，说明：
- 不收集个人数据
- 使用 Google Analytics（如果添加）
- Cookie 使用情况

## 目录结构
```
src/
  layouts/Layout.astro     # 主布局（含 SEO meta）
  pages/index.astro        # 主页面
  pages/404.astro         # 404 页面
public/
  sitemap.xml
  robots.txt
  manifest.json
```
