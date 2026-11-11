/* 推理书房 · 内容数据层
   作品信息为编辑整理，年份取常见首版年份；系列作品以代表作年份标注。 */
window.SITE_DATA = (function () {
  const WORKS = [
    {id:'w01',title:'莫格街凶杀案',en:'The Murders in the Rue Morgue',author:'埃德加·爱伦·坡',year:1841,country:'美国',school:'奠基期',detective:'C. 奥古斯特·杜宾',tricks:['密室','逻辑推演'],intro:'巴黎莫格街一间从内部反锁的公寓里，母女二人惨死，邻居听到的怪异声音无人能解。',highlight:'公认的第一篇现代侦探小说，杜宾以「观察 + 回溯推理」奠定了此后一百多年的写法。'},
    {id:'w02',title:'被窃之信',en:'The Purloined Letter',author:'埃德加·爱伦·坡',year:1844,country:'美国',school:'奠基期',detective:'C. 奥古斯特·杜宾',tricks:['心理盲点','藏匿'],intro:'一封失窃的密信牵动巴黎政坛，警方翻遍所有角落却一无所获。',highlight:'「最显眼处即最隐蔽处」的心理诡计原型，被后世反复致敬。'},
    {id:'w03',title:'白衣女人',en:'The Woman in White',author:'威尔基·柯林斯',year:1859,country:'英国',school:'奠基期',detective:'沃尔特·哈特莱特',tricks:['身份替换','阴谋'],intro:'深夜乡道上出现的白衣女子，把一位年轻画师卷入一桩精心设计的遗产阴谋。',highlight:'英语长篇悬疑的奠基作之一，多视角证词叙事的早期范本。'},
    {id:'w04',title:'月亮宝石',en:'The Moonstone',author:'威尔基·柯林斯',year:1868,country:'英国',school:'奠基期',detective:'克夫探长',tricks:['多视角证词','庄园窃案'],intro:'一颗来自印度的黄色钻石在生日宴后失窃，庄园里每个人都有无法解释的举动。',highlight:'常被称为第一部英语长篇侦探小说，克夫探长是职业警察侦探的雏形。'},
    {id:'w05',title:'艾德温·德鲁德之谜',en:'The Mystery of Edwin Drood',author:'查尔斯·狄更斯',year:1870,country:'英国',school:'奠基期',detective:'未定（作者去世未完稿）',tricks:['失踪','未完成之谜'],intro:'大教堂小城里，年轻工程师艾德温·德鲁德在暴风雪夜离奇失踪。',highlight:'狄更斯写到一半猝然离世，留下文学史上最著名的「无解之谜」，后世续作无数。'},
    {id:'w06',title:'利文沃兹案',en:'The Leavenworth Case',author:'安娜·凯瑟琳·格林',year:1878,country:'美国',school:'奠基期',detective:'埃比尼泽·格莱斯',tricks:['密室','证词矛盾'],intro:'纽约富商在书房遇害，两位侄女与一名女仆的证词彼此冲突。',highlight:'美国女性侦探小说先驱之作，把法庭质询与物证检验写进通俗小说。'},
    {id:'w07',title:'血字的研究',en:'A Study in Scarlet',author:'阿瑟·柯南·道尔',year:1887,country:'英国',school:'古典解谜',detective:'夏洛克·福尔摩斯',tricks:['足迹推断','复仇动机'],intro:'空屋中留下一具尸体和墙上血字，华生由此结识了一位怪异的合租室友。',highlight:'福尔摩斯与华生的初次登场，「演绎法」从此成为侦探的代名词。'},
    {id:'w08',title:'四签名',en:'The Sign of Four',author:'阿瑟·柯南·道尔',year:1890,country:'英国',school:'古典解谜',detective:'夏洛克·福尔摩斯',tricks:['宝物追寻','密约'],intro:'一位少女每年收到一颗珍珠，背后牵出印度阿格拉宝藏与四人盟约。',highlight:'福尔摩斯长篇代表作，也是华生感情线的重要一篇。'},
    {id:'w09',title:'福尔摩斯冒险史',en:'The Adventures of Sherlock Holmes',author:'阿瑟·柯南·道尔',year:1892,country:'英国',school:'古典解谜',detective:'夏洛克·福尔摩斯',tricks:['短篇解谜','物证'],intro:'十二桩短案，从《波希米亚丑闻》到《红发会》，伦敦各色人等轮番登场。',highlight:'让福尔摩斯真正风靡全球的短篇集，确立了「一案一诡计」的节奏。'},
    {id:'w10',title:'巴斯克维尔的猎犬',en:'The Hound of the Baskervilles',author:'阿瑟·柯南·道尔',year:1902,country:'英国',school:'古典解谜',detective:'夏洛克·福尔摩斯',tricks:['传说包装','沼泽追凶'],intro:'达特穆尔荒原上，古老家族被一只魔犬的诅咒笼罩，继承人性命垂危。',highlight:'哥特气氛与逻辑推理结合得最完美的一部长篇，福尔摩斯「缺席」的中段尤为精妙。'},
    {id:'w11',title:'黄色房间的秘密',en:'The Mystery of the Yellow Room',author:'加斯东·勒鲁',year:1907,country:'法国',school:'古典解谜',detective:'约瑟夫·鲁勒塔比伊',tricks:['密室','不可能犯罪'],intro:'紧锁的黄色房间里传出惨叫，门与窗都从内部闩死，受害者却身受重伤。',highlight:'密室推理的里程碑，几乎所有「密室讲义」都要回到这本书。'},
    {id:'w12',title:'红拇指印',en:'The Red Thumb Mark',author:'R. 奥斯汀·弗里曼',year:1907,country:'英国',school:'古典解谜',detective:'桑代克医生',tricks:['倒叙推理','指纹物证'],intro:'保险箱旁留下一枚血指印，所有证据都指向一位年轻职员。',highlight:'「倒叙推理」的开创作：先让读者看见犯罪，再看侦探如何一步步还原。'},
    {id:'w13',title:'角落里的老人',en:'The Old Man in the Corner',author:'奥希兹女男爵',year:1909,country:'英国',school:'古典解谜',detective:'角落里的老人',tricks:['安乐椅神探','报纸推理'],intro:'一位坐在咖啡馆角落、不停打绳结的老人，仅凭报纸报道就破解一桩桩悬案。',highlight:'「不出门的侦探」这一类型由此定型，后来尼禄·沃尔夫也属同脉。'},
    {id:'w14',title:'布朗神父的天真',en:'The Innocence of Father Brown',author:'G.K. 切斯特顿',year:1911,country:'英国',school:'古典解谜',detective:'布朗神父',tricks:['心理洞察','悖论'],intro:'一位圆脸、拿旧伞的神父，总在看似神迹或荒诞的事件里看见人心。',highlight:'把「理解罪人」置于「识破手法」之上，心理推理与哲学悖论的短篇经典。'},
    {id:'w15',title:'特伦特最后一案',en:"Trent's Last Case",author:'E.C. 本特利',year:1913,country:'英国',school:'古典解谜',detective:'菲利普·特伦特',tricks:['反套路','多重解答'],intro:'才华横溢的画家兼侦探特伦特自信破解了富商命案，却发现自己被感情蒙蔽。',highlight:'以「推翻自己的解答」收尾，在黄金时代正式开始前就开了一个漂亮的玩笑。'},
    {id:'w16',title:'空心岩柱',en:"L'Aiguille creuse",author:'莫里斯·勒布朗',year:1909,country:'法国',school:'古典解谜',detective:'亚森·罗宾（怪盗视角）',tricks:['怪盗','历史谜题'],intro:'怪盗亚森·罗宾与少年侦探对峙，线索指向法国王室埋藏已久的秘密。',highlight:'以怪盗为主角的反向推理小说，把「破解谜题」和「优雅犯罪」合成一体。'},
    {id:'w17',title:'江南燕',en:'The Swallow of Jiangnan',author:'程小青',year:1919,country:'中国',school:'中国侦探',detective:'霍桑',tricks:['本土风俗','现场勘查'],intro:'江南富宅失窃，留下一枚燕子形暗号，霍桑与包朗由此展开调查。',highlight:'中国现代侦探小说的开端之一，把科学取证写进民国上海与苏州市井。'},
    {id:'w18',title:'斯泰尔斯庄园奇案',en:'The Mysterious Affair at Styles',author:'阿加莎·克里斯蒂',year:1920,country:'英国',school:'古典解谜',detective:'赫尔克里·波洛',tricks:['毒杀','乡间别墅'],intro:'一战期间的英国庄园，女主人深夜中毒身亡，屋内每个人都握着钥匙。',highlight:'波洛首次登场，也奠定了「封闭宅邸 + 全员嫌疑」的黄金时代公式。'},
    {id:'w19',title:'谁的尸体',en:'Whose Body?',author:'多萝西·L·塞耶斯',year:1923,country:'英国',school:'古典解谜',detective:'彼得·温姆西勋爵',tricks:['身份辨识','贵族侦探'],intro:'一具戴着夹鼻眼镜的陌生尸体出现在浴缸里，无人认领。',highlight:'温姆西勋爵登场，把轻松的英式幽默带进解谜小说。'},
    {id:'w20',title:'D 坡杀人案',en:'The Case of the D Slope Murder',author:'江户川乱步',year:1925,country:'日本',school:'本格推理',detective:'明智小五郎',tricks:['本土本格','心理观察'],intro:'东京 D 坡的一家旧书店里，老板娘死于密室般的后屋。',highlight:'明智小五郎初登场，日本本格推理由此起步。'},
    {id:'w21',title:'罗杰疑案',en:'The Murder of Roger Ackroyd',author:'阿加莎·克里斯蒂',year:1926,country:'英国',school:'古典解谜',detective:'赫尔克里·波洛',tricks:['叙述性诡计','乡村命案'],intro:'英国小村里，富裕的罗杰·艾克罗伊德死在书房，波洛已退休却仍被请出山。',highlight:'把「谁在讲故事」本身变成诡计，推理史上争议最大也最著名的一次颠覆。'},
    {id:'w22',title:'班森杀人事件',en:'The Benson Murder Case',author:'S.S. 范达因',year:1926,country:'美国',school:'古典解谜',detective:'菲洛·万斯',tricks:['心理剖析','美式解谜'],intro:'纽约股票商在自家客厅被枪杀，门房与宾客的时间线互相矛盾。',highlight:'美国古典解谜的代表，菲洛·万斯以艺术与心理学素养介入侦查。'},
    {id:'w23',title:'血色收获',en:'Red Harvest',author:'达希尔·哈米特',year:1929,country:'美国',school:'冷硬派',detective:'大陆侦探社探员',tricks:['腐败小城','硬派调查'],intro:'一名探员受雇调查矿镇谋杀，却发现整座城市的权力结构都泡在血里。',highlight:'冷硬派的开山长篇，侦探不再是解谜者，而是趟进泥里的行动者。'},
    {id:'w24',title:'寓所谜案',en:'The Murder at the Vicarage',author:'阿加莎·克里斯蒂',year:1930,country:'英国',school:'古典解谜',detective:'简·马普尔',tricks:['乡村日常','闲谈破案'],intro:'牧师宅邸的书房里传来枪声，人人称羡的上校倒在地上。',highlight:'马普尔小姐首次登场，用「村里的人情世故」对抗最精密的谎言。'},
    {id:'w25',title:'马耳他之鹰',en:'The Maltese Falcon',author:'达希尔·哈米特',year:1930,country:'美国',school:'冷硬派',detective:'山姆·斯佩德',tricks:['多方夺宝','黑色电影气质'],intro:'一尊镶满宝石的鹰像，把各路骗子与杀手引到旧金山的一间侦探事务所。',highlight:'冷硬派最著名的文本，斯佩德的道德灰度改写了「侦探」的定义。'},
    {id:'w26',title:'希腊棺材之谜',en:'The Greek Coffin Mystery',author:'埃勒里·奎因',year:1932,country:'美国',school:'古典解谜',detective:'埃勒里·奎因',tricks:['多重解答','公平竞猜'],intro:'古董商的棺木里多出一具尸体，遗嘱随之失踪，推理被连续推翻四次。',highlight:'「给读者挑战」与多重解答的巅峰，逻辑链条密到近乎炫技。'},
    {id:'w27',title:'三口棺材',en:'The Three Coffins',author:'约翰·迪克森·卡尔',year:1935,country:'美国',school:'古典解谜',detective:'基甸·菲尔博士',tricks:['密室','密室讲义'],intro:'雪地上没有脚印，两起命案的现场都从内部上锁，其中一具尸体还凭空消失。',highlight:'书中著名的「密室讲义」系统梳理了不可能犯罪的手法类型。'},
    {id:'w28',title:'矛头蛇',en:'Fer-de-Lance',author:'雷克斯·斯托特',year:1934,country:'美国',school:'古典解谜',detective:'尼禄·沃尔夫',tricks:['安乐椅神探','搭档叙事'],intro:'一位大学校长离奇死亡，足不出户的胖侦探派出助手阿奇外出跑腿。',highlight:'「沃尔夫 + 阿奇」的黄金搭档诞生，安乐椅推理与街头行动互补。'},
    {id:'w29',title:'东方快车谋杀案',en:'Murder on the Orient Express',author:'阿加莎·克里斯蒂',year:1934,country:'英国',school:'古典解谜',detective:'赫尔克里·波洛',tricks:['封闭空间','全员共谋'],intro:'暴雪封路的豪华列车上，一名美国富商被刺十余刀，车厢里十二名乘客各有秘密。',highlight:'把「谁干的」推向「为什么必须这样干」的经典解答。'},
    {id:'w30',title:'尼罗河上的惨案',en:'Death on the Nile',author:'阿加莎·克里斯蒂',year:1937,country:'英国',school:'古典解谜',detective:'赫尔克里·波洛',tricks:['不在场证明','游轮'],intro:'尼罗河游轮上的新婚富家女被枪杀，所有人都有看似牢不可破的不在场证明。',highlight:'异域风光与精密时刻表的组合，是不在场证明诡计的教科书。'},
    {id:'w31',title:'犹大之窗',en:'The Judas Window',author:'约翰·迪克森·卡尔',year:1938,country:'美国',school:'古典解谜',detective:'亨利·梅利维尔爵士',tricks:['密室','法庭推理'],intro:'门从内锁、窗被钉死，唯一的嫌疑人却坚称自己进去时死者还活着。',highlight:'密室与法庭辩论双线推进，卡尔最紧凑的长篇之一。'},
    {id:'w32',title:'大眠',en:'The Big Sleep',author:'雷蒙德·钱德勒',year:1939,country:'美国',school:'冷硬派',detective:'菲利普·马洛',tricks:['连环勒索','黑色幽默'],intro:'一桩看似简单的勒索案，把马洛卷进洛杉矶豪门的勒索、失踪与尸体重重迷雾。',highlight:'冷硬派文体的巅峰，案情层层套叠，连改编电影都要费力理清人物关系。'},
    {id:'w33',title:'无人生还',en:'And Then There Were None',author:'阿加莎·克里斯蒂',year:1939,country:'英国',school:'古典解谜',detective:'无（十人孤岛）',tricks:['暴风雪山庄','童谣杀人'],intro:'十位互不相识的客人被邀到孤岛，一首童谣与十个小瓷人，逐一应验死亡。',highlight:'封闭空间连环死亡的模板，全球销量最高的推理小说之一。'},
    {id:'w34',title:'本阵杀人事件',en:'The Honjin Murders',author:'横沟正史',year:1946,country:'日本',school:'本格推理',detective:'金田一耕助',tricks:['密室','和式建筑'],intro:'战后日本乡间，新婚夫妇在密室般的本阵宅邸内双双遇害，雪地上无足迹。',highlight:'日本本格复兴的起点，把密室诡计嫁接到日式建筑与家族制度。'},
    {id:'w35',title:'狱门岛',en:'Gokumonto',author:'横沟正史',year:1947,country:'日本',school:'本格推理',detective:'金田一耕助',tricks:['孤岛','俳句暗示'],intro:'濑户内海孤岛上，三姊妹接连死于与俳句意象对应的怪异现场。',highlight:'和风本格的代表作，气氛与诡计同样阴森。'},
    {id:'w36',title:'时间的女儿',en:'The Daughter of Time',author:'约瑟芬·铁伊',year:1951,country:'英国',school:'古典解谜',detective:'阿兰·格兰特',tricks:['历史推理','档案翻案'],intro:'卧床的苏格兰场探员闲来翻查史料，重新审视「塔中王子」与理查三世的旧案。',highlight:'把侦探推理指向四百年前的历史定论，类型边界被彻底打开。'},
    {id:'w37',title:'漫长的告别',en:'The Long Goodbye',author:'雷蒙德·钱德勒',year:1953,country:'美国',school:'冷硬派',detective:'菲利普·马洛',tricks:['友谊与背叛','失踪'],intro:'一个醉醺醺的退伍军人、一桩富豪妻子命案，以及一段拖了很久的告别。',highlight:'钱德勒写得最私人也最忧伤的一部长篇，冷硬派文学性的高点。'},
    {id:'w38',title:'大唐狄公案',en:'The Judge Dee Mysteries',author:'高罗佩',year:1951,country:'荷兰',school:'中国公案',detective:'狄仁杰',tricks:['公案','多案并行'],intro:'自二十世纪五十年代起陆续写成：唐代县令狄仁杰在一地任上同时处理数桩疑案，从尸单、账册与街巷流言里找线。',highlight:'西方人用现代推理结构重写中国公案，也让「狄仁杰」走向世界。'},
    {id:'w39',title:'点与线',en:'Ten to Sen',author:'松本清张',year:1958,country:'日本',school:'社会派',detective:'鸟饲重太郎 / 三原纪一',tricks:['时刻表','不在场证明'],intro:'九州海边发现一对男女的尸体，看似殉情，却牵出东京的贪污案与一张时刻表。',highlight:'社会派开山作：诡计服务于动机，推理指向制度与人情。'},
    {id:'w40',title:'砂之器',en:'Inspector Imanishi Investigates',author:'松本清张',year:1961,country:'日本',school:'社会派',detective:'今西荣太郎',tricks:['身份追查','社会偏见'],intro:'东京车站附近发现一具身份不明的男尸，老刑警从方言与细微物证一路追到东北偏远村落。',highlight:'把「为什么要隐瞒过去」写成时代悲剧，社会派最具分量的一部长篇。'},
    {id:'w41',title:'占星术杀人魔法',en:'The Tokyo Zodiac Murders',author:'岛田庄司',year:1981,country:'日本',school:'新本格',detective:'御手洗洁',tricks:['分尸拼合','占星术'],intro:'一桩几十年前的旧案手记，记载着按星座方位肢解、拼合少女遗体的疯狂计划。',highlight:'新本格的宣言式作品，把宏大妄想型诡计重新带回推理中心。'},
    {id:'w42',title:'白夜行',en:'Journey Under the Midnight Sun',author:'东野圭吾',year:1999,country:'日本',school:'当代推理',detective:'笹垣润三',tricks:['长年跨度','共生关系'],intro:'一桩 1973 年的当铺命案，牵出两个孩子此后近二十年互不相见的并行人生。',highlight:'几乎不写「谁杀了人」，却把推理的张力拉满整部小说。'},
    {id:'w43',title:'嫌疑人 X 的献身',en:'The Devotion of Suspect X',author:'东野圭吾',year:2005,country:'日本',school:'当代推理',detective:'汤川学',tricks:['不在场证明','数学诡计'],intro:'邻居母女卷入命案，隔壁的天才数学教师递出了一份看似完美的掩护方案。',highlight:'「诡计」与「情感」互相遮蔽，当代推理最具代表性的一次结构设计。'}
  ];

  const DETECTIVES = [
    {name:'C. 奥古斯特·杜宾',en:'C. Auguste Dupin',author:'爱伦·坡',debut:1841,work:'莫格街凶杀案',tags:['贵族业余侦探','回溯推理'],bio:'住在巴黎郊外旧宅的隐士，白天拉上窗帘、夜里出门散步，靠「把自己放进对方思路」破解奇案。',style:'从被忽略的细节反向重建事件经过。'},
    {name:'夏洛克·福尔摩斯',en:'Sherlock Holmes',author:'柯南·道尔',debut:1887,work:'血字的研究',tags:['演绎法','化学实验','易容'],bio:'贝克街 221B 的咨询侦探，小提琴、烟斗与注射器并存，宣称「排除一切不可能，剩下的再离奇也是真相」。',style:'把微物证、脚印、烟灰与专业知识编织成严密链条。'},
    {name:'布朗神父',en:'Father Brown',author:'切斯特顿',debut:1911,work:'布朗神父的天真',tags:['心理洞察','悖论'],bio:'圆脸、旧伞、总显得心不在焉的天主教神父，破案靠的不是放大镜而是对人的理解。',style:'先问「什么样的心会犯这样的罪」，再回头看手法。'},
    {name:'角落里的老人',en:'The Old Man in the Corner',author:'奥希兹女男爵',debut:1909,work:'角落里的老人',tags:['安乐椅神探','报纸推理'],bio:'伦敦一家咖啡馆的固定座位、一根不停打结的绳子，从不在犯罪现场露面。',style:'只读报纸与公开报道，靠逻辑补上警方漏掉的一环。'},
    {name:'桑代克医生',en:'Dr. Thorndyke',author:'R. 奥斯汀·弗里曼',debut:1907,work:'红拇指印',tags:['法医学','物证'],bio:'带着随身检验箱的医学博士，实验室与法庭都是他的现场。',style:'用可复现的科学检验推翻看似确凿的物证。'},
    {name:'亚森·罗宾',en:'Arsène Lupin',author:'莫里斯·勒布朗',debut:1907,work:'空心岩柱',tags:['怪盗','易容','反侦探'],bio:'站在法律另一侧的绅士怪盗，有时比警察更早找出真凶，只是顺手带走珠宝。',style:'以盗贼视角拆穿别人的布局，也常被名侦探追着跑。'},
    {name:'霍桑',en:'Huo Sang',author:'程小青',debut:1919,work:'江南燕',tags:['中国侦探','科学取证'],bio:'民国上海与苏州之间奔走的私家侦探，助手包朗负责记录，口径像一份现场勘查报告。',style:'把指纹、足迹、钟表与本土人情一并纳入推理。'},
    {name:'赫尔克里·波洛',en:'Hercule Poirot',author:'阿加莎·克里斯蒂',debut:1920,work:'斯泰尔斯庄园奇案',tags:['灰色脑细胞','秩序感','乡间别墅'],bio:'退役的比利时警探，讲究对称、准时与体面，最看重「小小灰色脑细胞」按秩序运转。',style:'把所有人的话排成序列，找出那句「太顺了」的证词。'},
    {name:'简·马普尔',en:'Jane Marple',author:'阿加莎·克里斯蒂',debut:1930,work:'寓所谜案',tags:['乡村','闲谈','人性'],bio:'圣玛丽米德村的老小姐，织毛衣、侍弄花园，记得村里三十年来每一桩闲话。',style:'用「这人像我认识的谁」给凶手画像，人性比物证更早开口。'},
    {name:'彼得·温姆西勋爵',en:'Lord Peter Wimsey',author:'多萝西·塞耶斯',debut:1923,work:'谁的尸体',tags:['贵族','藏书','轻快'],bio:'贵族出身、藏书成癖的业余侦探，表面吊儿郎当，出手时极其认真。',style:'在闲谈与文献里找到被所有人当作常识的错误。'},
    {name:'菲洛·万斯',en:'Philo Vance',author:'S.S. 范达因',debut:1926,work:'班森杀人事件',tags:['艺术修养','心理剖析'],bio:'纽约上流社会的鉴赏家，把美术馆里的审美判断带进命案现场。',style:'从行为「不合性格」之处切入，而不是只盯物证。'},
    {name:'埃勒里·奎因',en:'Ellery Queen',author:'埃勒里·奎因',debut:1929,work:'希腊棺材之谜',tags:['公平竞猜','多重解答'],bio:'既是作者笔名也是书中侦探，会在真相揭晓前直接向读者下战书。',style:'列出全部线索，允许读者与自己同时推理，然后推翻前几版答案。'},
    {name:'尼禄·沃尔夫',en:'Nero Wolfe',author:'雷克斯·斯托特',debut:1934,work:'矛头蛇',tags:['安乐椅','兰花','美食'],bio:'体重惊人、极讨厌出门的纽约侦探，每天固定时间照料兰花，案子由助手阿奇跑腿。',style:'足不出户，靠助手带回的事实与自己的脑子收网。'},
    {name:'山姆·斯佩德',en:'Sam Spade',author:'达希尔·哈米特',debut:1930,work:'马耳他之鹰',tags:['冷硬','道德灰度'],bio:'旧金山小事务所的私家侦探，说话简短，对客户与同行都不轻易交心。',style:'在人人说谎的局里，靠试探、跟踪与挨打逼近真相。'},
    {name:'菲利普·马洛',en:'Philip Marlowe',author:'雷蒙德·钱德勒',debut:1939,work:'大眠',tags:['冷硬','孤独','文体'],bio:'洛杉矶的独行侦探，办公室简陋，嘴上不饶人，心里守着一套不肯打折的规矩。',style:'穿过腐败的城市层层敲门，真相往往并不漂亮。'},
    {name:'明智小五郎',en:'Akechi Kogoro',author:'江户川乱步',debut:1925,work:'D 坡杀人案',tags:['日本本格','变装'],bio:'日本第一位家喻户晓的私家侦探，常以蓬乱头发与深色斗篷登场，擅长心理观察。',style:'从异常举止与空间细节还原犯人的行动路径。'},
    {name:'金田一耕助',en:'Kindaichi Kosuke',author:'横沟正史',debut:1946,work:'本阵杀人事件',tags:['和风本格','家族秘密'],bio:'不修边幅、和服木屐的私家侦探，总被请到封闭的旧世家处理盘根错节的血案。',style:'把建筑结构、家族谱系与民俗传说一起当作线索。'},
    {name:'狄仁杰',en:'Judge Dee',author:'高罗佩（据中国公案改写）',debut:1951,work:'大唐狄公案',tags:['公案','县令断狱'],bio:'唐代地方官，同时是侦者、法官与行政长官，常一案未了又起一案。',style:'验尸、查账、访民情，三桩案子在同一段时间里交错推进。'},
    {name:'御手洗洁',en:'Kiyoshi Mitarai',author:'岛田庄司',debut:1981,work:'占星术杀人魔法',tags:['新本格','天才型'],bio:'占星师兼业余侦探，思维跳跃、语速极快，对宏大而荒诞的诡计格外兴奋。',style:'先重构凶手「为什么要这样布置」，再拆掉整套舞台机关。'}
  ];

  const TRICKS = [
    {name:'密室杀人',en:'Locked room',desc:'门窗自内上锁、无人能够进出的空间里发生死亡。魅力在于「物理上不可能」与「逻辑上必然」的正面相撞。',works:['黄色房间的秘密','三口棺材','本阵杀人事件']},
    {name:'暴风雪山庄',en:'Closed circle',desc:'暴雪、孤岛、断桥把一群人困在封闭空间，人数随死亡逐个减少，嫌疑人范围同时缩小。',works:['无人生还','狱门岛','东方快车谋杀案']},
    {name:'叙述性诡计',en:'Narrative trick',desc:'作者借叙述视角、人称或措辞对读者隐瞒信息，谜底不在案情里，而在「这本书是怎么讲故事的」。',works:['罗杰疑案','占星术杀人魔法']},
    {name:'不在场证明',en:'Alibi',desc:'用时刻表、钟表、天气或证词制造「不可能在场」，侦探要找出时间被动过的那道缝。',works:['点与线','尼罗河上的惨案','嫌疑人 X 的献身']},
    {name:'倒叙推理',en:'Inverted detective story',desc:'开篇就把凶手与犯案过程摊开，悬念从「是谁」转为「侦探如何发现、能否证明」。',works:['红拇指印']},
    {name:'童谣模仿杀人',en:'Nursery-rhyme murders',desc:'死亡顺序与方式对应一首童谣或一组咒语，预言感把封闭空间里的恐惧推到顶点。',works:['无人生还','狱门岛']},
    {name:'安乐椅神探',en:'Armchair detective',desc:'侦探从不亲临现场，只靠他人转述、报纸与卷宗推理，形成「脑力 vs 跑腿」的经典搭档结构。',works:['角落里的老人','矛头蛇']},
    {name:'多重解答',en:'Multiple solutions',desc:'同一案件接连给出几套都能自圆其说的答案，再逐一推翻，直到最后一个无法被驳倒。',works:['希腊棺材之谜','特伦特最后一案']},
    {name:'身份与替身',en:'Identity swap',desc:'假死、易容、一人分饰两角，让「死者是谁」比「凶手是谁」更早成为谜题。',works:['白衣女人','白夜行','尼罗河上的惨案']},
    {name:'社会派动机',en:'Social motive',desc:'诡计不再是目的，破案最终指向阶层、偏见与制度如何把普通人推到犯罪那一步。',works:['砂之器','点与线']}
  ];

  const TIMELINE = [
    {year:'1841',title:'侦探小说诞生',desc:'爱伦·坡发表《莫格街凶杀案》，杜宾与「密室 + 逻辑推演」同时登场。'},
    {year:'1887',title:'福尔摩斯时代',desc:'《血字的研究》出版；此后短篇连载让侦探成为全球流行文化符号。'},
    {year:'1907',title:'不可能犯罪的自觉',desc:'《黄色房间的秘密》与《红拇指印》同年，密室与倒叙推理各自定型。'},
    {year:'1911',title:'心理与悖论',desc:'布朗神父登场，推理开始从物证转向人心与哲学悖论。'},
    {year:'1920',title:'黄金时代开启',desc:'阿加莎以《斯泰尔斯庄园奇案》出道，「乡间别墅 + 全员嫌疑」成为通行公式。'},
    {year:'1926',title:'叙述被反过来用',desc:'《罗杰疑案》把叙述者本身变成诡计，读者与作者的契约被重新谈判。'},
    {year:'1930s',title:'冷硬派在美国',desc:'哈米特与钱德勒把侦探从书房拽到雨夜街头，道德灰度取代纯粹解谜。'},
    {year:'1946',title:'和风本格复兴',desc:'横沟正史《本阵杀人事件》把密室写进日式宅邸与战后家族。'},
    {year:'1958',title:'社会派转向',desc:'松本清张《点与线》问世，推理开始追问「为什么非得犯下这桩罪」。'},
    {year:'1981',title:'新本格宣言',desc:'岛田庄司《占星术杀人魔法》把宏大妄想型诡计重新带回舞台。'},
    {year:'2000s',title:'类型溶解',desc:'东野圭吾等作家让推理与爱情、科幻、社会议题自由混合，边界越来越松。'}
  ];

  const COLLECTIONS = [
    {name:'入门必读',desc:'从奠基到当代，八本串起一条最短的推理阅读路径。',ids:['w01','w07','w09','w18','w21','w33','w39','w43']},
    {name:'密室与不可能',desc:'反锁的房间、无足迹的雪地，专治「这怎么可能」。',ids:['w11','w27','w31','w34','w33','w41']},
    {name:'女性笔下的推理',desc:'黄金时代与之后的女性作家，把日常、人性与秩序感写进谜题。',ids:['w06','w13','w18','w21','w24','w36']},
    {name:'东方推理',desc:'从民国霍桑到和风本格、社会派与新本格。',ids:['w17','w20','w34','w38','w39','w41','w43']},
    {name:'雨夜与硬汉',desc:'洛杉矶、旧金山与矿镇：真相从来不体面。',ids:['w23','w25','w32','w37']}
  ];

  const QUIZ = {
    questions:[
      {q:'走进案发现场，你第一件事会做什么？',options:['蹲下看地上的灰与鞋印','把在场所有人的关系排一遍','先和街坊邻居聊半小时','先确认委托人到底付不付钱']},
      {q:'最理想的破案环境是？',options:['有实验台和参考资料的房间','一座与世隔绝的乡间别墅','村子里的茶会与花园','雨夜里亮着霓虹的街道']},
      {q:'你最不能忍受的是？',options:['推理链条里的一处逻辑漏洞','摆放不齐的餐具和失衡的构图','把人想得太好或太坏','体面话底下藏着的背叛']},
      {q:'线索全断了，你会？',options:['重做一遍实验或拉段琴','把所有事实重新按顺序列好','回想多年前村里的类似旧事','开车去城里绕一整夜']},
      {q:'结案之后，你更想？',options:['把案子写成一篇专论','优雅地向所有人公布真相','回家烤一炉司康','一个人安静地喝一杯']}
    ],
    results:[
      {key:'福尔摩斯',title:'夏洛克·福尔摩斯',desc:'你相信世界是可被观察、被拆解的。别人看见混乱，你看见一串还没连起来的事实。',work:'血字的研究'},
      {key:'波洛',title:'赫尔克里·波洛',desc:'秩序感是你最强的工具。你习惯先把每句话摆到该在的位置，再找出那句太顺的证词。',work:'斯泰尔斯庄园奇案'},
      {key:'马普尔',title:'简·马普尔',desc:'你读的是人，不是物证。看似无关的家常闲话，在你脑中早有一张跨年的关系图。',work:'寓所谜案'},
      {key:'马洛',title:'菲利普·马洛',desc:'你不指望真相漂亮，也不轻易交心。你靠一趟趟敲门和一点点不肯打折的规矩走到底。',work:'大眠'}
    ]
  };

  return {WORKS, DETECTIVES, TRICKS, TIMELINE, COLLECTIONS, QUIZ};
})();
