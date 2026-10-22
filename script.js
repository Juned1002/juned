function cekNilai() {
    const hasil = document.getElementById("hasil");
    let input = document.getElementById("nilai").value;
    let nilai = Number(input);
    
    
    if (input === "" || nilai < 0 || nilai > 100) {
        hasil.innerHTML = "Masukkan nilai antara 0 sampai 100!";
        return;
    }
    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }
    
    let keterangan;
    switch (grade) {
        case "A":
            keterangan = "Verry Good";
            break;
        case "B":
            keterangan = "Good";
            break;
        case "C":
            keterangan = "STOOOOP!!";
            break;
        default:
            keterangan = "Oh no, this is really bad, bro!!";
    }
    hasil.innerHTML = "Nilai kamu: " + grade + " (" + keterangan + ")";
}