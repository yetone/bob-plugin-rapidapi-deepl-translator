var items = [
    ["auto", "auto"],
    ["zh-Hans", "zh"],
    ["zh-Hant", "zh"],
    ["en", "en"],
];

var langMap = new Map(items);
var langMapReverse = new Map(
    items.map(([standardLang, lang]) => [lang, standardLang])
);

function supportLanguages() {
    return items.map(([standardLang, lang]) => standardLang);
}

function translate(query, completion) {
    const api_keys = $option.api_keys.split(",").map((key) => key.trim());
    const api_key = api_keys[Math.floor(Math.random() * api_keys.length)];
    const header = {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "blepl-translate.p.rapidapi.com",
    };
    const body = {
        text: query.text,
        source: langMap.get(query.detectFrom),
        target: langMap.get(query.detectTo),
    };
    (async () => {
        const resp = await $http.request({
            method: "POST",
            url: "https://blepl-translate.p.rapidapi.com/translate",
            header,
            body,
        });

        if (resp.error) {
            const { statusCode } = resp.response;
            let reason;
            if (statusCode >= 400 && statusCode < 500) {
                reason = "param";
            } else {
                reason = "api";
            }
            completion({
                error: {
                    type: reason,
                    message: `接口响应错误 - ${response.data.msg}`,
                    addtion: JSON.stringify(response),
                },
            });
        } else {
            const { text: targetText } = resp.data;
            if (!targetText) {
                completion({
                    error: {
                        type: "api",
                        message: "接口未返回结果",
                    },
                });
                return;
            }
            completion({
                result: {
                    from: query.detectFrom,
                    to: query.detectTo,
                    toParagraphs: targetText.split("\n"),
                },
            });
        }
    })().catch((err) => {
        completion({
            error: {
                type: err._type || "unknown",
                message: err._message || "未知错误",
                addtion: err._addtion,
            },
        });
    });
}
