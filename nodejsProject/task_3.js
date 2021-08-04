const fs = require('fs')
const path = require('path');
const join = require('path');


const oldPath = path.join(__dirname,'files_to_move');
const newPath = path.join(__dirname,'moved_files');
const file_list = fs.readdirSync(oldPath);

function file_mover() {
    for(i=0; i < file_list.length; i++ ) {
       fs.rename(`${oldPath}/${file_list[i]}`, `${newPath}/${file_list[i]}`, function (err) {
    if (err) throw err
})
       fs.appendFile('moved_files.txt', `${file_list[i]}\n`, function (err) {
    if (err) throw err;
})
    console.log(`${file_list[i]}`);
 }
}
  
  file_mover();
  
