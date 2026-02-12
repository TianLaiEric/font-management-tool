const btn = document.getElementById('generate');
const log = document.getElementById('log');


btn.onclick = async () => {
const file = document.getElementById('fontFile').文件[0];
if (!file) return alert('请选择字体');


const meta = {
family: document.getElementById('family').value,
fullName: document.getElementById('fullName').value,
version: document.getElementById('version').value,
postScript: document.getElementById('postScript').value,
description: "Edited by 字体管理工具"
};


const result = await window.api.processFont({
inputPath: file.path,
outputPath: file.path.替换('.ttf', '_new.ttf'),
meta
});


log.innerText = result.message;
};
