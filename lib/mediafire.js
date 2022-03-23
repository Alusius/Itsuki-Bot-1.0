const ax = require("axios").default;
const cheerio = require("cheerio");

async function mediafireDl(url) {
    try {
        let getUrlResponse, mediafireCheerio,
            filename, dlink, mimetype, size;

        getUrlResponse = await ax.get("https://www.mediafire.com/file/dz0cic51h3nglwj/Angel+Chan+(9).zip/file");
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