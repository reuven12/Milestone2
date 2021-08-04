var fs = require('fs')


file_mover=()=>{

    const oldPath = './files_to_move/path/file.txt'
    const newPath = 'moved_files/path/file.txt'
    
    fs.rename(oldPath, newPath, function (err) {
      if (err) throw err
      console.log('Successfully renamed - AKA moved!')
    })
}