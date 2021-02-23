const fs = require('fs');

/**
 * 遍历文件夹，返回下面的文件以及目录
 *
 * @param {String} pathFolder 目标目录or目标文件
 * @param {RegExp} ignoreList 忽略哪些文件夹
 * @param {RegExp} includeList 包含哪些文件
 */
export default function(pathFolder: string, ignoreList?, includeList?) {
  const fileList: string[] = [];
  const folderList: string[] = [];
  function walk(pathFolder) {
    if (ignoreList && pathFolder.match(ignoreList)) { // 忽略哪些文件夹
      return true;
    }
    if (fs.statSync(pathFolder).isFile()) { // 如果是目标文件，直接返回
      fileList.push(pathFolder);
      return true;
    }
    folderList.push(pathFolder);
    const files = fs.readdirSync(pathFolder);
    files.forEach(function(item) {
      const tmpPath = pathFolder + '/' + item,
        stats = fs.statSync(tmpPath);
      if (stats.isDirectory()) {
        walk(tmpPath);
        folderList.push(tmpPath);
      } else {
        if (ignoreList && tmpPath.match(ignoreList)) { // 忽略哪些文件
          return true;
        }
        if (includeList) { // 包含哪些文件
          if (tmpPath.match(includeList)) {
            fileList.push(tmpPath);
          }
          return true;
        }
        fileList.push(tmpPath);
      }
    });
  }

  walk(pathFolder);
  return {
    fileList,
    folderList,
  };
}
