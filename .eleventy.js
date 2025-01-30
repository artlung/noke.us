module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets/js");
    eleventyConfig.addPassthroughCopy("feed.xml");

    eleventyConfig.addShortcode("regionsAndGroups", function() {
        const regions = require('./regions.json');
        const regionsAndGroups = regions;
        return regionsAndGroups;
    });

    eleventyConfig.addShortcode("regions", function() {
        const regions = require('./regions.json');
        return regions;
    });

}