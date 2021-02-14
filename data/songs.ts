import {Time} from "../lib/time";

export type Monsters = 'Pikamee' | 'Tomoshika' | 'Monoe'
export type Utawaku = {
    number: number;
    kind: Monsters;
    songs: {
        artist: string;
        time_start: number | Time
        song_name: string
    }[];
    id: string
}

export const songs: Utawaku[] = [
    {
        kind: 'Monoe',
        number: 1,
        id: 'eoqcL7-iRbc',
        songs: [
            {
                'artist': '須田景凪(バルーン)',
                'song_name': 'シャルル',
                'time_start': 520
            },
            {
                'artist': '柊キライ',
                'song_name': 'エバ',
                'time_start': 974
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（一回目）',
                'time_start': 1663
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（二回目）',
                'time_start': 2117
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（三回目）',
                'time_start': 2226
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（四回目）',
                'time_start': 2333
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（五回目）',
                'time_start': 2563
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（六回目）',
                'time_start': 2672
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている（七回目）',
                'time_start': 2865
            },
            {
                'artist': 'ナユタン星人',
                'song_name': '太陽系デスコ',
                'time_start': 3137
            },
        ]
    },
    {
        kind: 'Monoe',
        number: 2,
        id: 'lXGom5pjK6Q',
        songs: [
            {
                'artist': 'みきとP',
                'song_name': '少女レイ',
                'time_start': 260
            },
            {
                'artist': 'みきとP',
                'song_name': 'ロキ',
                'time_start': 995
            },
            {
                'artist': 'WOWAKA',
                'song_name': '裏表ラバーズ',
                'time_start': 1772
            },
            {
                'artist': 'Ayase',
                'song_name': 'シニカルナイトプラン',
                'time_start': 2724
            },
            {
                'artist': 'カラスヤサボウ',
                'song_name': '天才ロック',
                'time_start': 2226
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 3,
        id: 'oY37CTruDXk',
        songs: [
            {
                'artist': 'syoudou',
                'song_name': '孤独の宗教',
                'time_start': 352
            },
            {
                'artist': '柊キライ',
                'song_name': 'ポッカデラベリタ',
                'time_start': 828
            },
            {
                'artist': 'ギガP',
                'song_name': '劣等上等',
                'time_start': 1481
            },
            {
                'artist': 'Eight',
                'song_name': 'とても素敵な六月でした',
                'time_start': 3370
            },
            {
                'artist': 'minato',
                'song_name': 'magnet',
                'time_start': 3978
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 4,
        id: 'JmHY5OqfRVI',
        songs: [
            {
                'artist': 'ナユタン星人',
                'song_name': '彗星ハネムーン',
                'time_start': 145
            },
            {
                'artist': 'DIVELA',
                'song_name': 'ぼかろころしあむ',
                'time_start': 985
            },
            {
                'artist': '薄塩指数',
                'song_name': 'つらい！やばい！つらい！',
                'time_start': 1385
            },
            {
                'artist': 'すりぃ',
                'song_name': 'テレキャスタービーボーイ',
                'time_start': 3570
            },
            {
                'artist': 'Last Note.',
                'song_name': 'セツナトリップ',
                'time_start': 4480
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 5,
        id: '1OOjOPvxt28',
        songs: [
            {
                'artist': 'すりぃ',
                'song_name': 'ジャンキーナイトタウンオーケストラ',
                'time_start': 176
            },
            {
                'artist': 'カンザキイオリ',
                'song_name': '命に嫌われている',
                'time_start': 780
            },
            {
                'artist': 'Ayase',
                'song_name': '幽霊東京',
                'time_start': 1724
            },
            {
                'artist': 'Junky',
                'song_name': 'メランコリック',
                'time_start': 3140
            },
            {
                'artist': 'てにをは',
                'song_name': 'ヴィラン',
                'time_start': 3724
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 6,
        id: 'ZiX7PXiLNKI',
        songs: [
            {
                'artist': 'すりぃ',
                'song_name': '右に曲ガール',
                'time_start': 290
            },
            {
                'artist': 'YOASOBI',
                'song_name': 'ハルジオン',
                'time_start': 696
            },
            {
                'artist': 'ニュー速VIP作曲スレ',
                'song_name': 'RAINBOW GIRL',
                'time_start': 1054
            },
            {
                'artist': 'かいりきベア',
                'song_name': 'ルマ',
                'time_start': 1344
            },
            {
                'artist': 'まふまふ',
                'song_name': '猛独が襲う',
                'time_start': 1732
            },
            {
                'artist': 'koyori',
                'song_name': '独りんぼエンヴィー',
                'time_start': 1971
            },
            {
                'artist': 'いきものがかり',
                'song_name': 'ブルーバード',
                'time_start': 2794
            },
            {
                'artist': 'きくお',
                'song_name': '愛して愛して愛して',
                'time_start': 3195
            },
            {
                'artist': 'みきとP',
                'song_name': 'バレリーコ',
                'time_start': 3620
            },
            {
                'artist': 'n-buna',
                'song_name': '夜明けと蛍',
                'time_start': 4290
            },
            {
                'artist': 'ナナホシ管弦楽団',
                'song_name': '失楽ペトリ',
                'time_start': 4743
            },
            {
                'artist': 'syudou',
                'song_name': 'ビターチョコデコレーション',
                'time_start': 5127
            },
            {
                'artist': '日向電工',
                'song_name': 'ブリキノダンス',
                'time_start': 5395
            },
            {
                'artist': 'DIVELA',
                'song_name': 'ぼかろころしあむ',
                'time_start': 5730
            },
            {
                'artist': 'King Gnu',
                'song_name': '白日',
                'time_start': 5992
            },
            {
                'artist': '一二三',
                'song_name': '美しく闇',
                'time_start': 6740
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 7,
        id: 'YEOfo3_MGCA',
        songs: [
            {
                'artist': 'まふまふ',
                'song_name': '女の子になりたい',
                'time_start': 374
            },
            {
                'artist': '女の子になりたい',
                'song_name': '愛欲のプリズナー',
                'time_start': 1486
            },
            {
                'artist': '米津玄師',
                'song_name': 'Lemon',
                'time_start': 2058
            },
            {
                'artist': '亜沙',
                'song_name': '吉原ラメント',
                'time_start': 2645
            },
            {
                'artist': 'IOSYS',
                'song_name': 'チルノのパーフェクトさんすう教室',
                'time_start': 3146
            },
            {
                'artist': 'しも',
                'song_name': 'ニコニコ動画流星群',
                'time_start': 3925
            },
            {
                'artist': 'syudou',
                'song_name': 'コールボーイ',
                'time_start': 5353
            }
        ]
    },
    {
        kind: 'Monoe',
        number: 8,
        id: 'n_DdqP65APY',
        songs: [
            {
                'artist': 'まふまふ',
                'song_name': '女の子になりたい',
                'time_start': 374
            },
            {
                'artist': '女の子になりたい',
                'song_name': '愛欲のプリズナー',
                'time_start': 1486
            },
            {
                'artist': '米津玄師',
                'song_name': 'Lemon',
                'time_start': 2058
            },
            {
                'artist': '亜沙',
                'song_name': '吉原ラメント',
                'time_start': 2645
            },
            {
                'artist': 'IOSYS',
                'song_name': 'チルノのパーフェクトさんすう教室',
                'time_start': 3146
            },
            {
                'artist': 'しも',
                'song_name': 'ニコニコ動画流星群',
                'time_start': 3925
            },
            {
                'artist': 'syudou',
                'song_name': 'コールボーイ',
                'time_start': 5353
            }
        ]
    },



]


