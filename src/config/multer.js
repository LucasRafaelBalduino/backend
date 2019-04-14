const multer = require('multer');
const path = require('path');
const crypto =  require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),// padronizando o mapenado local das pastas
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16,(err, hash)=>{
                if(err) cb(err);

                file.key = `${hash.toString('hex')} - ${file.originalname}`; //     UI Vi vir um codigo ALEATORIO DE HEXADECIAL junto com o nome original do arquivo
                
                cb(null, file.key);
            })
        }
    })

}