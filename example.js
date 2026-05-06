// gogoType — 雅思写作打字练习平台
// https://www.gogotype.com
//
// 这是一份 mock 演示，所有数据本地写死，不调用任何后端。
// 字段命名也不是 gogoType 后端的真实结构，仅作排版参考。
// 想正经接入请发邮件 gogotype@goturix.com。
//
// 跑起来：node example.js

'use strict';

const SITE = 'https://www.gogotype.com';

const mockCourses = [
  {
    id: 'demo-cambridge-20-test1-task2',
    title: '剑桥雅思 20 Test 1 Task 2 高分范文打字训练',
    category: '剑桥真题',
    lessonCount: 12,
    targetBand: '7.0+',
    summary: 'Task 2 教育类大作文，含五段式高分结构 + 学术衔接词',
  },
  {
    id: 'demo-cambridge-19-test2-task1',
    title: '剑桥雅思 19 Test 2 Task 1 折线图小作文',
    category: '剑桥真题',
    lessonCount: 8,
    targetBand: '6.5+',
    summary: '折线图常用句型 + 数据趋势描述 + 高频词替换',
  },
  {
    id: 'demo-foundation-paragraph',
    title: '雅思写作入门基础 - 段落结构',
    category: '基础课程',
    lessonCount: 8,
    targetBand: '5.0 → 6.5',
    summary: '从主题句到结论句，建立 IELTS 写作底层逻辑',
  },
  {
    id: 'demo-foundation-conjunctions',
    title: '雅思写作入门基础 - 连接词与标点',
    category: '基础课程',
    lessonCount: 6,
    targetBand: '5.0 → 6.5',
    summary: '20 个最常用连接词 + 标点错误自查清单',
  },
  {
    id: 'demo-advanced-task2-template',
    title: '雅思 Task 2 高分模板 - 主体段构建',
    category: '高分技巧',
    lessonCount: 10,
    targetBand: '7.0 → 8.5',
    summary: '论点 → 论据 → 例证 → 反驳，把主体段打进肌肉记忆',
  },
  {
    id: 'demo-task1-letter-writing',
    title: '雅思 Task 1 G 类书信写作专题',
    category: 'Task 1 培训类',
    lessonCount: 9,
    targetBand: '6.5+',
    summary: '投诉信 / 申请信 / 求职信 / 推荐信，四类书信高分模板',
  },
];

const mockArticles = [
  {
    slug: 'demo-ielts-task2-four-paragraph-structure',
    title: '雅思写作 Task 2 四段式结构详解',
    category: '写作技巧',
    summary: '从介绍段到结论段，Task 2 四段式高分模板逐段拆解',
    publishedAt: '2026-04-12',
    readingMinutes: 8,
  },
  {
    slug: 'demo-ielts-cbt-typing-tips',
    title: '雅思机考写作的几个打字技巧',
    category: '机考备考',
    summary: '光标定位、删除快捷键、复制粘贴策略、键盘盲打',
    publishedAt: '2026-04-08',
    readingMinutes: 6,
  },
  {
    slug: 'demo-ielts-band7-cohesion-words',
    title: '雅思 Band 7+ 高级衔接词常用搭配',
    category: '词汇句式',
    summary: '常用衔接词 + 真题用例',
    publishedAt: '2026-03-28',
    readingMinutes: 10,
  },
  {
    slug: 'demo-ielts-typing-speed-training',
    title: '从 25 WPM 到 60 WPM —— 雅思打字速度训练',
    category: '机考备考',
    summary: '30 天训练计划，让写作不再被键盘拖累',
    publishedAt: '2026-03-15',
    readingMinutes: 7,
  },
  {
    slug: 'demo-ielts-writing-band-descriptor',
    title: '雅思写作评分标准对照（Band 6 / 7 / 8 / 9）',
    category: '评分研究',
    summary: '官方四项评分标准逐条对照，看清自己的失分项',
    publishedAt: '2026-03-02',
    readingMinutes: 12,
  },
];

function printCourses() {
  console.log('推荐课程');
  mockCourses.forEach((c, i) => {
    console.log(`  ${i + 1}. ${c.title}`);
    console.log(`     ${c.category} · ${c.lessonCount} 课时 · 目标 ${c.targetBand}`);
    console.log(`     ${c.summary}`);
  });
}

function printArticles() {
  console.log('\n最新文章');
  mockArticles.forEach((a, i) => {
    console.log(`  ${i + 1}. ${a.title}`);
    console.log(`     ${a.category} · ${a.publishedAt} · 约 ${a.readingMinutes} 分钟`);
    console.log(`     ${a.summary}`);
  });
}

if (require.main === module) {
  console.log(`gogoType mock demo  ${SITE}\n`);
  printCourses();
  printArticles();
  console.log(`\n开始练习 ${SITE}/writing`);
  console.log(`联系合作 gogotype@goturix.com`);
}

module.exports = { mockCourses, mockArticles, printCourses, printArticles };
