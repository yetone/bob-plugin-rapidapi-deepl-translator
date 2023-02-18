RapidAPI DeepL Translator Bob Plugin
------------------------------------

# 简介

众所周知，DeepL 是当下翻译效果最好的（不要跟我讲 ChatGPT，它太太太慢了），同时众所周知，作为身在中国大陆的中国人是很难使用 DeepL API 的，
因为 DeepL 不支持中国的信用卡，在淘宝买的话，40 元只能买一个月的 DeepL API Free 方案，而且每个月只能翻译 50,0000 个字符，性价比太低了！
功夫不负有心人，我在 RapidAPI 找到了一个封装了 DeepL 的 API —— [DeepL Translator](https://rapidapi.com/splintPRO/api/deepl-translator)，速度很不错，价格也很实惠（免费版每个月 50,0000 个字符，月费 $3.99 的版本每个月 15,000,000 个字符），
所以我专门开发了此插件，我甚至还实现了指定多 API KEY (用英文逗号分割) 来实现多个账号的额度相加和负载均衡避免触发速率限制（免费版 30 requests per minute，月费 $3.99 版本 35 requests per minute）

# 安装

1. 安装 [Bob](https://ripperhe.gitee.io/bob/#/general/quickstart/install) (版本 >= 0.50)
2. 下载此 Bob 插件: [rapidapi-deepl-translator.bobplugin](https://github.com/yetone/bob-plugin-rapidapi-deepl-translator/releases)
3. 插件安装: [Bob 插件安装文档说明](https://ripperhe.gitee.io/bob/#/general/quickstart/plugin?id=%e5%ae%89%e8%a3%85%e6%8f%92%e4%bb%b6)

