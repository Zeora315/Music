// 本地音乐配置（需要为每首歌创建对应的 .lrc 歌词文件）
var localMusic = [
    {
        name: '海阔天空',
        artist: 'BEYOND',
        url: '/music/BEYOND - 海阔天空.mp3',
        cover: '/music/BEYOND - 海阔天空.jpg',
        lrc: '/music/BEYOND - 海阔天空.lrc'
    },
    {
        name: 'Everywhere We Go',
        artist: '陈冠希&MC 仁&厨房仔&应采儿',
        url: '/music/Everywhere We Go - 陈冠希&MC 仁&厨房仔&应采儿.mp3',
        cover: '/music/Everywhere We Go - 陈冠希&MC 仁&厨房仔&应采儿.jpg',
        lrc: '/music/Everywhere We Go - 陈冠希&MC 仁&厨房仔&应采儿.lrc'
    },
    {
        name: 'Payphone',
        artist: 'Maroon 5',
        url: '/music/Payphone.mp3',
        cover: '/music/Payphone.jpg',
        lrc: '/music/Payphone.lrc'
    },
    {
        name: 'That Girl',
        artist: 'Olly Murs',
        url: '/music/That Girl.mp3',
        cover: '/music/That Girl.jpg',
        lrc: '/music/That Girl.lrc'
    },
    {
        name: 'We Are the World (Demo)',
        artist: 'Michael Jackson',
        url: '/music/We Are the World (Demo) - Michael Jackson.mp3',
        cover: '/music/We Are the World (Demo) - Michael Jackson.jpg',
        lrc: '/music/We Are the World (Demo) - Michael Jackson.lrc'
    },
    {
        name: '一点',
        artist: 'MuyoiPezzi',
        url: '/music/一点-MuyoiPezzi.mp3',
        cover: '/music/一点-MuyoiPezzi.jpg',
        lrc: '/music/一点-MuyoiPezzi.lrc'
    },
    {
        name: '不负众望',
        artist: '陈婉菁',
        url: '/music/不负众望 - 陈婉菁.mp3',
        cover: '/music/不负众望 - 陈婉菁.jpg',
        lrc: '/music/不负众望 - 陈婉菁.lrc'
    },
    {
        name: '人生海',
        artist: '祁奕翔',
        url: '/music/人生海 - 祁奕翔 1.mp3',
        cover: '/music/人生海 - 祁奕翔 1.jpg',
        lrc: '/music/人生海 - 祁奕翔 1.lrc'
    },
    {
        name: '出山',
        artist: '花粥&王胜娚',
        url: '/music/出山 - 花粥王胜娚.mp3',
        cover: '/music/出山 - 花粥王胜娚.jpg',
        lrc: '/music/出山 - 花粥王胜娚.lrc'
    },
    {
        name: '反乌托邦',
        artist: '乌托邦 P',
        url: '/music/反乌托邦 - 乌托邦 P.mp3',
        cover: '/music/反乌托邦 - 乌托邦 P.png',
        lrc: '/music/反乌托邦 - 乌托邦 P.lrc'
    },
    {
        name: '唐·毒蛇',
        artist: 'Bsh',
        url: '/music/唐·毒蛇 - Bsh-1.mp3',
        cover: '/music/唐·毒蛇 - Bsh-1.jpg',
        lrc: '/music/唐·毒蛇 - Bsh-1.lrc'
    },
    {
        name: '嘿咻狂想曲',
        artist: '艾索',
        url: '/music/嘿咻狂想曲 - 艾索.mp3',
        cover: '/music/嘿咻狂想曲 - 艾索.jpg',
        lrc: '/music/嘿咻狂想曲 - 艾索.lrc'
    },
    {
        name: '富士山下',
        artist: '陈奕迅',
        url: '/music/富士山下 - 陈奕迅.mp3',
        cover: '/music/富士山下 - 陈奕迅.jpg',
        lrc: '/music/富士山下 - 陈奕迅.lrc'
    },
    {
        name: '弥渡山歌（说唱版）',
        artist: '未知',
        url: '/music/弥渡山歌（说唱版）.mp3',
        cover: '/music/弥渡山歌（说唱版）.jpg',
        lrc: '/music/弥渡山歌（说唱版）.lrc'
    },
    {
        name: '无名之辈',
        artist: '唐汉霄',
        url: '/music/无名之辈 - 唐汉霄.mp3',
        cover: '/music/无名之辈 - 唐汉霄.jpg',
        lrc: '/music/无名之辈 - 唐汉霄.lrc'
    },
    {
        name: '漠河舞厅',
        artist: '柳爽',
        url: '/music/柳爽 - 漠河舞厅.mp3',
        cover: '/music/柳爽 - 漠河舞厅.jpg',
        lrc: '/music/柳爽 - 漠河舞厅.lrc'
    },
    {
        name: '牛仔很忙',
        artist: '周杰伦',
        url: '/music/牛仔很忙 - 周杰伦.mp3',
        cover: '/music/牛仔很忙 - 周杰伦.jpg',
        lrc: '/music/牛仔很忙 - 周杰伦.lrc'
    },
    {
        name: '如愿',
        artist: '王菲',
        url: '/music/王菲 - 如愿.mp3',
        cover: '/music/王菲 - 如愿.jpg',
        lrc: '/music/王菲 - 如愿.lrc'
    },
    {
        name: '稻香',
        artist: '周杰伦',
        url: '/music/稻香.mp3',
        cover: '/music/稻香.jpg',
        lrc: '/music/稻香.lrc'
    },
    {
        name: '答案',
        artist: '未知',
        url: '/music/答案.mp3',
        cover: '/music/答案.jpg',
        lrc: '/music/答案.lrc'
    },
    {
        name: '精卫',
        artist: '一颗狼星',
        url: '/music/精卫 - 一颗狼星.mp3',
        cover: '/music/精卫 - 一颗狼星.png',
        lrc: '/music/精卫 - 一颗狼星.lrc'
    },
    {
        name: '红日',
        artist: '李克勤',
        url: '/music/红日 -《他来自天堂》电视剧主题曲 - 李克勤.mp3',
        cover: '/music/红日 -《他来自天堂》电视剧主题曲 - 李克勤.jpg',
        lrc: '/music/红日 -《他来自天堂》电视剧主题曲 - 李克勤.lrc'
    },
    {
        name: '红豆',
        artist: '方大同',
        url: '/music/红豆 - 方大同.mp3',
        cover: '/music/红豆 - 方大同.jpg',
        lrc: '/music/红豆 - 方大同.lrc'
    },
    {
        name: '罗生门（Follow）',
        artist: '未知',
        url: '/music/罗生门（Follow）.mp3',
        cover: '/music/罗生门（Follow）.jpg',
        lrc: '/music/罗生门（Follow）.lrc'
    },
    {
        name: '越来越不懂',
        artist: '蔡健雅',
        url: '/music/越来越不懂 - 蔡健雅.mp3',
        cover: '/music/越来越不懂 - 蔡健雅.jpg',
        lrc: '/music/越来越不懂 - 蔡健雅.lrc'
    },
    {
        name: '千千阙歌',
        artist: '陈慧娴',
        url: '/music/陈慧娴 - 千千阙歌.mp3',
        cover: '/music/陈慧娴 - 千千阙歌.jpg',
        lrc: '/music/陈慧娴 - 千千阙歌.lrc'
    },
    {
        name: '绿色',
        artist: '陈雪凝',
        url: '/music/陈雪凝 - 绿色.mp3',
        cover: '/music/陈雪凝 - 绿色.jpg',
        lrc: '/music/陈雪凝 - 绿色.lrc'
    },
    {
        name: '雅俗共赏',
        artist: '许嵩',
        url: '/music/雅俗共赏 - 许嵩.mp3',
        cover: '/music/雅俗共赏 - 许嵩.jpg',
        lrc: '/music/雅俗共赏 - 许嵩.lrc'
    }
];
