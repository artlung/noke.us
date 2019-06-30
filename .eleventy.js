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


    eleventyConfig.addCollection("regions", (collection) =>
    collection.getFilteredByTag("cities").sort((a, b) => {
      console.log(parseInt(a.data.milesAway, 10));

      if (parseInt(a.data.milesAway) > parseInt(b.data.milesAway)) return 1;
      else if (parseInt(a.data.milesAway) < parseInt(b.data.milesAway)) return -1;
      else return 0;
    })
  );

    return {
        markdownTemplateEngine: "njk",
    }
}

