
const fs = require('fs');
const path = require('path');


const folderNama = './tahap_pertama';
fs.readdir(folderNama, (err, files) => {
  if (err) {
    console.error('Gagal membaca folder:', err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file);
    const fileTanpaExtnsi = path.basename(file, ext);


    const match = fileTanpaExtnsi.match(/^(\d+)\.(.+)/);
    
    if (match) {
      const number = match[1]; 
      const restOfName = match[2];  
      
      if (number.length < 3) {
        const noBaru = number.padStart(3, '0');
        const NamaFileBarunyah = `${noBaru}.${restOfName}${ext}`;
        

        const pathlama = path.join(folderNama, file);
        const pathBaru = path.join(folderNama, NamaFileBarunyah);
        
        fs.rename(oldPath, pathBaru, (err) => {
          if (err) {
            console.error(`Gagal mengubah nama ${file}:`, err);
          } else {
            console.log(`Berhasil mengubah nama: ${file} -> ${NamaFileBarunyah}`);
          }
        });
      }
    }
  });
});