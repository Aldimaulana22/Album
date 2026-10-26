// FOTO, DESKRIPSI, DAN LINK UNDUH
//
// 1) LINK_ASLI: link foto asli (misalnya Google Drive) untuk tombol "Unduh".
//    Tempel link di antara tanda petik, sesuai judul fotonya. Kalau
//    dikosongkan, tombol unduh tidak muncul di foto itu.

window.LINK_ASLI = {
  'Sore yang menguning': 'https://drive.google.com/uc?export=download&id=14W9Rbo_ZTc_nndBNhhdjX1NvcP5n7j1h',
  'Dua kapal yang hampir menyatu': 'https://drive.google.com/uc?export=download&id=1tw1Yn_UG8dxzOIYwWC5zhNTMaeFpi2gH',
  'Perahu berlayar sendiri': 'https://drive.google.com/uc?export=download&id=1ptklEqNYZuCztFOmKIrmhNc3N2mznGZn',
  'Air yang sudah terjun': 'https://drive.google.com/uc?export=download&id=159mdEq5kehAoIEyDYI70Hloz4B2yJC-H',
  'Di atas ketinggian': 'https://drive.google.com/uc?export=download&id=1Z2tIpdclKFdaXf2z7a7WqBEsYQwF6DFM',
  'Asap yang hampir membunuh': 'https://drive.google.com/uc?export=download&id=1w2vtp5LIoI3SmzXdDigoOiN9N0DZv5Cy',
  'Matahari lari ke dalam laut': 'https://drive.google.com/uc?export=download&id=1oi2LHRVPlSf5wO0vZ3r4oxy8MazZ3XTS'
};

// 2) DESKRIPSI: teks singkat di bawah judul saat foto dibuka (boleh dikosongkan).

window.DESKRIPSI = {
  'Sore yang menguning': '',
  'Dua kapal yang hampir menyatu': '',
  'Perahu berlayar sendiri': '',
  'Tanpa judul': '',
  'Di atas': '',
  'Asap yang hampir membunuh': '',
  'Matahari lari ke dalam laut': ''
};

// 3) FOTO_BARU: tambah foto baru. Satu foto = satu baris.
//      n    = judul foto
//      img  = nama file foto yang tampil di galeri (upload ke repo yang sama)
//      link = link foto asli untuk tombol unduh (boleh dikosongkan)
//      d    = deskripsi singkat (boleh dikosongkan)
//
//    Contoh (hapus tanda // di depannya supaya aktif):
//    {n:'Senja di dermaga', img:'senja-dermaga.jpg', link:'https://drive.google.com/...', d:'Ombak pelan, langit oranye.'},

window.FOTO_BARU = [

];
