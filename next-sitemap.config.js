const siteUrl = process.env.SITE_URL || "http://localhost:3000";
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false
};
