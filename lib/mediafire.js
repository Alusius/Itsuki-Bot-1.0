const ax = require("axios").default;
const cheerio = require("cheerio");

async function mediafireDl(url) {
    try {
        let getUrlResponse, mediafireCheerio,
            filename, dlink, mimetype, size;

        getUrlResponse = await ax.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36"
            }
        });
        mediafireCheerio = cheerio.load(getUrlResponse.data);
        // someinfo
        filename = mediafireCheerio(`div.dl-info > * > div.filename`).text();
        dlink = mediafireCheerio("#download_link > a.input.popsok").attr("href");
        size = mediafireCheerio("#download_link > a.input.popsok").text().match(/[0-9]+?(\.[0-9]+)[A-Z]+/g);
        mimetype = (await ax.head(dlink)).headers["content-type"];

        return { filename, dlink, size, mimetype };
    } catch (e) {
        throw e;
    }
}

module.exports = {
    mediafireDl
}