const glob = require('glob');

const docsDir = './docs/';

const getMarkdownFiles = (dir) => {
  let items = glob.sync(`${docsDir}${dir}/**/*.md`);
  items = items.map((path) => path.replace(docsDir, '').replace('.md', ''));

  return items;
}  

module.exports = {
  someSidebar: {
    'Jitsi Meet': getMarkdownFiles('jitsi-meet'),
    Jicofo: getMarkdownFiles('jicofo'),
    Videobridge: getMarkdownFiles('jitsi-videobridge'),
  },
};
