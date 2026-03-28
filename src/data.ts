export interface Category {
  name: string;
  subcategories: string[];
}

export const CATEGORIES: Category[] = [
  { name: "香氛", subcategories: ["全部", "雪松", "乌木", "白桃", "海盐", "冷杉", "檀木", "白茶", "柑橘"] },
  { name: "烘焙", subcategories: ["全部", "舒芙蕾", "提拉米苏", "可露丽", "玛德琳", "慕斯", "焦糖布丁", "黑森林", "戚风"] },
  { name: "色彩", subcategories: ["全部", "莫兰迪", "奶油色", "雾霾蓝", "豆沙粉", "琥珀", "雾面", "鎏金", "磨砂"] },
  { name: "艺术", subcategories: ["全部", "洛可可", "哥特", "浮世绘", "拜占庭", "古典油画", "暗金复古", "蒸汽波", "中古"] },
  { name: "质感", subcategories: ["全部", "极简", "暗调", "低饱和", "留白", "冷感", "中性", "禁欲系", "高级灰"] },
  { name: "自然", subcategories: ["全部", "青提", "雾岛", "松间", "霜露", "晚风", "浅川", "屿风", "清涧"] },
  { name: "光影", subcategories: ["全部", "晨光", "暮色", "逆光", "斑驳", "霓虹", "烛影"] },
  { name: "梦境", subcategories: ["全部", "漂浮", "镜中", "月下", "深海", "云上", "微光"] },
  { name: "文化", subcategories: ["全部", "蓝染", "浮光", "纹样", "陶土", "织锦", "漆器"] },
  { name: "城市", subcategories: ["全部", "地铁", "窗景", "屋顶", "夜行", "雨街", "咖啡"] }
];

export const WALLPAPER_CATEGORIES: Category[] = [
  { name: "星穹", subcategories: ["全部", "银河碎影", "星轨", "月落", "深空", "极光", "星云", "辰光", "穹顶"] },
  { name: "山海", subcategories: ["全部", "云海", "川峦", "雾峰", "江潮", "松涛", "山涧", "晴川", "屿海"] },
  { name: "雅筑", subcategories: ["全部", "窗棂", "檐角", "庭院", "回廊", "竹影", "瓦当", "轩窗", "别院"] },
  { name: "鎏光", subcategories: ["全部", "金箔", "碎金", "暖光", "银辉", "珠光", "晶透", "鎏银", "柔光"] },
  { name: "清野", subcategories: ["全部", "牧野", "花甸", "风禾", "草屿", "林隙", "野径", "青芜", "云野"] },
  { name: "墨韵", subcategories: ["全部", "水墨", "砚池", "留白", "烟墨", "青黛", "朱砂", "宣纸", "拓印"] },
  { name: "绮境", subcategories: ["全部", "幻境", "秘境", "幻彩", "绮梦", "琉璃", "幻雾", "灵境", "幻空"] },
  { name: "素简", subcategories: ["全部", "素白", "亚麻", "肌理", "素纹", "净面", "简纹", "素锦", "清简"] },
  { name: "朝暮", subcategories: ["全部", "朝雾", "夕岚", "晓色", "昏黄", "晨霭", "暮云", "曦光", "晚晴"] },
  { name: "幻夜", subcategories: ["全部", "夜阑", "星夜", "幽夜", "谧夜", "夜影", "凉夜", "寂夜", "夜澜"] }
];

export interface Avatar {
  id: string;
  url: string;
  title: string;
  author: string;
  downloads: string;
  category: string;
  tags: string[];
  description: string;
}

export const AVATARS: Avatar[] = [
  {
    id: "1",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyl5Nt46JQot8m1ROWxNHUcR7XLn056KO8WAg_7TQfQa8oryDMzcgnXXMWB_QAF63ZlYzUlzrpCZPsYePsl8zBHf1KtpRYoEEKDszSkU1Er8j3hslisMJ9O1a315sz8tI9RP8d-X-JwSe7uZCiCBNbxbt5SWdIkPWEo9VaQ6FtCgWX7P8tD86n9uh8y4yFDd4idjsaP9nAtjvUtU7zikA8WTLFRvsTHKwUOD3QpXsgvum9wDq0zUYLzun-yWlWhGXezmLBeV1wCw",
    title: "致郁系光影 (Sullen Light)",
    author: "光影捕手",
    downloads: "3.8k",
    category: "光影",
    tags: ["晨光", "逆光"],
    description: "胶片质感的文艺头像。光影柔和而克制，适合作为社交媒体账号头像，展现独特的审美倾向与深邃的个人气质。"
  },
  {
    id: "2",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuArlWfWjO-n9H8vC-W7p_S4E6G_TzRj_PjY7W9-kS6K-X5-Y7w6W9-kS6K-X5-Y7w6W9-kS6K-X5-Y7w6W9-kS6K-X5-Y7w",
    title: "落樱时节的侧颜",
    author: "次元绘卷",
    downloads: "1.2k",
    category: "自然",
    tags: ["晚风", "霜露"],
    description: "属于春天的浪漫，落樱时节的唯美侧颜。"
  },
  {
    id: "3",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsfxLZVUadgUlWruwcG6T7WE1VuskdxnUbrLVCwxFj6LMPxecqfccd2cBqSZYypYmIpI8VoManyTaUQOlWZy9VmX1P_bHcEo8xFEkaFmjG7Y2iH-gEf51SF7llsQL8L7FWcQJ16sn4X1fFCQjiTexKNNR8zYdpWotSWmonMTPF2OfqOL_RQCzNAr9Owxf03egVjnfgvIv99MxtSyaeqUGWxuz6RsoDIBifhe8aowBBeHbwoSNwtIA0lrjSXc1EpDu8OIyKXmjHqA",
    title: "极简线条",
    author: "留白工坊",
    downloads: "856",
    category: "质感",
    tags: ["极简", "留白"],
    description: "用最简单的笔触定义自我。"
  },
  {
    id: "4",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuH8S-O-v9H8vC-W7p_S4E6G_TzRj_PjY7W9-kS6K-X5-Y7w6W9-kS6K-X5-Y7w6W9-kS6K-X5-Y7w6W9-kS6K-X5-Y7w",
    title: "暖冬少年",
    author: "建模实验室",
    downloads: "2.4k",
    category: "色彩",
    tags: ["奶油色", "莫兰迪"],
    description: "超治愈的3D粘土风格头像。"
  },
  {
    id: "5",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpQ3-3hggxl6bXQljxlg4_oprJrBHboNfA9aXqbtTkFA6-WjFvjCmZ_0JLB6vgjrBYPiYERNKJxJs-HXQa2DxVH38r2EiM0Ujg6r_hKh3pKqt5_WZTUCcW6uUGnLUDbHp9PxxPFVRNMCbrs_krUQALHcgZftqgXsC_5yBaUIhUZWBtJ7Qh_fKb4b1KlGNG5i6m4jmUnlMe6WnjVrv9D2slsKo8lRnECLLnNa_hxSCezRlnxjzAfpZxWpPIEBNnMeWcLoSAY_HkRw",
    title: "雨夜霓虹",
    author: "光影捕手",
    downloads: "5.1k",
    category: "城市",
    tags: ["夜行", "雨街"],
    description: "电影质感的写实氛围感头像。"
  },
  {
    id: "6",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UdI3T1EPC-EfZc9uex-DfFidVrVoWDzBlnjRahGxUpYkdNrtyU3kVJQNsnCZVhStkSCJ3zt8xVEzax3XAmfmGj9AeGrg-1vfoC7cAO0KeEKvp5n0NW7kCdVZXh-UBZ4wrFCxjFuIAiZspk6k6WHVZ6pX8r5xWCE6NynBScUjqIYAdYKLyxvFQg8T4wMm-rH_T0lYZhuDsqEPBL-DPBe3_JCktHjyzgIxPHtP3HlGBK1uU2CiFHT2Tp4kkSSIcIK8uyp6PxK3Ag",
    title: "猫系人格",
    author: "插画漫游",
    downloads: "922",
    category: "艺术",
    tags: ["中古", "蒸汽波"],
    description: "带上眼镜，也是个斯文的小猫。"
  }
];

export const WALLPAPERS: Avatar[] = [
  {
    id: "w1",
    url: "https://picsum.photos/seed/starry/1080/1920",
    title: "银河碎影 (Starry Night)",
    author: "星空摄影师",
    downloads: "12.5k",
    category: "星穹",
    tags: ["银河碎影", "深空"],
    description: "捕捉宇宙最深处的静谧与璀璨。"
  },
  {
    id: "w2",
    url: "https://picsum.photos/seed/mountain/1080/1920",
    title: "云海之巅",
    author: "山野行者",
    downloads: "8.2k",
    category: "山海",
    tags: ["云海", "雾峰"],
    description: "漫步云端，感受大自然的壮阔。"
  },
  {
    id: "w3",
    url: "https://picsum.photos/seed/architecture/1080/1920",
    title: "竹影窗棂",
    author: "古建迷",
    downloads: "5.6k",
    category: "雅筑",
    tags: ["窗棂", "竹影"],
    description: "东方美学的静谧角落。"
  }
];
