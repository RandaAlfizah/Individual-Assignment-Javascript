var penumpang = ['Randa', undefined, 'Alfii'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    //ALGORITMA:
    //jika angkot kosong
    if(penumpang.length == 0) {
           //tambah penumpang di awal Array
        penumpang.push(namaPenumpang);
           //kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //telusuri seluruh kursi dari awal (check in) 
        for ( var i = 0; i < penumpang.length; i++ ) {
            //  kalo ada kursi yang kosong
            if(penumpang[i] == undefined ) {
            //  tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang;
            //  kembalikan isi array & keluar dari function
            return penumpang;
        }
        //jika sudah ada nama yang sama
        else if( penumpang[i] == namaPenumpang) {
            //  tampilkan pesan kesalahanya
            console.log(namaPenumpang + ' sudah ada di dalam angkot.')
            //  kembalikan isi array & keluar dari function
            return penumpang;
        }
        //jika seluruh kursi terisi
        else if( i == penumpang.length - 1) {
            //  tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            //  kembalikan isi array & keluar dari function 
            return penumpang;
        }         
        }

        }

}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if( penumpang.length == 0) {
        console.log('Angkot masih kosong');
        return penumpang;
    } else {
        for( var i = 0; i < penumpang.length; i++) {
            if( penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if( i == penumpang.length - 1 ) {
                console.log(namaPenumpang + ' tidak ada di dalam')
                return penumpang;
            }
        }
    }
}