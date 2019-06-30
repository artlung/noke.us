const htmlmin = require('html-minifier');
const stringify = require('javascript-stringify').stringify;

module.exports = function(eleventyConfig) {
    // Minify
    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
        if (outputPath.indexOf('.html') > -1) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
            });
            return minified;
        }
        return content;
    });

    eleventyConfig.addNunjucksFilter("dump", function(value) {
        return JSON.stringify(value);
    });

    // eleventyConfig.setFrontMatterParsingOptions({
    //     excerpt: true,
    //     excerpt_separator: '---' // Optional
    // });

    return {
        markdownTemplateEngine: "njk",
    }
}

