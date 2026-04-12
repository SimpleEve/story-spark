"use client";

import { useState, useCallback } from "react";

const genres = ["奇幻", "科幻", "悬疑", "爱情", "恐怖", "冒险", "历史", "都市"];
const moods = ["温暖的", "黑暗的", "轻松的", "紧张的", "怀旧的", "讽刺的", "浪漫的", "荒诞的"];
const characters = [
  "一位独居的老人", "一对双胞胎", "一名记者", "一个神秘商人",
  "一位科学家", "一个孩子", "一位厨师", "一名侦探",
  "一个时间旅行者", "一位音乐家"
];
const settings = [
  "在一座废弃的空间站里", "在一个小镇的图书馆里", "在一艘跨越星际的飞船上",
  "在一个闹鬼的房子里", "在一个未来的城市中", "在一座古老的寺庙中",
  "在一个小小的咖啡馆里", "在一列穿越雪地的火车上"
];
const conflicts = [
  "发现了一个隐藏多年的秘密", "必须在24小时内做出选择", "被一个陌生人跟踪",
  "意外获得了一种超能力", "发现自己的记忆是假的", "被困在一个时间循环里",
  "要保护一个重要的证人", "发现了一个阴谋"
];

function randomPick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePrompt() {
  return {
    genre: randomPick(genres),
    mood: randomPick(moods),
    character: randomPick(characters),
    setting: randomPick(settings),
    conflict: randomPick(conflicts),
  };
}

function StoryPrompt({ prompt }: { prompt: { genre: string; mood: string; character: string; setting: string; conflict: string } }) {
  const text = `${prompt.character}，在一个${prompt.mood}的${prompt.genre}故事中，${prompt.setting}${prompt.conflict}。`;

  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-lg leading-relaxed text-gray-800 shadow-sm">
      <p>{text}</p>
    </div>
  );
}

function ShareButton({ prompt }: { prompt: { genre: string; mood: string; character: string; setting: string; conflict: string } }) {
  const text = `📖 故事灵感：\n\n${prompt.character}，在一个${prompt.mood}的${prompt.genre}故事中，${prompt.setting}${prompt.conflict}。\n\n✨ 由 Story Spark 生成`;
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("已复制到剪贴板！");
    });
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
  };

  return (
    <div className="flex gap-3 mt-4">
      <button onClick={copy} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-xl transition">
        📋 复制
      </button>
      <button onClick={shareTwitter} className="flex-1 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-xl transition">
        𝕏 分享
      </button>
    </div>
  );
}

export default function Home() {
  const [prompt, setPrompt] = useState(() => generatePrompt());

  const regenerate = useCallback(() => {
    setPrompt(generatePrompt());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-5xl font-bold text-amber-600 mb-2">✨ Story Spark</h1>
        <p className="text-gray-500 mb-8 text-sm">AI 故事灵感生成器 · 每次点击都是新世界</p>

        <div className="mb-6">
          <StoryPrompt prompt={prompt} />
        </div>

        <button
          onClick={regenerate}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          🔄 生成新灵感
        </button>

        <ShareButton prompt={prompt} />

        <div className="mt-10 text-xs text-gray-400">
          <p>点击上方按钮，生成独特的故事设定</p>
          <p className="mt-1">用于小说、剧本、游戏剧情或头脑风暴</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-gray-400">
          {genres.map(g => (
            <span key={g} className="bg-white border border-gray-200 rounded-full px-2 py-1">{g}</span>
          ))}
        </div>

        <div className="mt-8 text-xs text-gray-400 leading-relaxed">
          <p>📚 适用场景：小说写作 | 剧本创作 | DnD跑团 | 创意教学 | 游戏剧情</p>
          <p className="mt-1">免费工具 · 无需注册 · 即开即用</p>
        </div>
      </div>
    </main>
  );
}
