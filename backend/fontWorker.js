const fs = require('fs');
const opentype = require('opentype.js');


async function processFont({ inputPath, outputPath, meta }) {
try {
const font = await opentype.load(inputPath);


font.names.fontFamily.en = meta.family;
font.names.fullName.en = meta.fullName;
font.names.version.en = meta.version;
font.names.postScriptName.en = meta.postScript;
font.names.description = { en: meta.description };


const buffer = Buffer.from(font.toArrayBuffer());
fs.writeFileSync(outputPath, buffer);


return { success: true, message: '字体已成功生成' };
} catch (err) {
return { success: false, message: err.message };
}
}


module.exports = { processFont };
