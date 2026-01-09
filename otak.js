function Operasi(operasi) {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);
    let hasil;

    if(operasi === '+'){
        hasil = a + b;
    } else if(operasi === '-'){
        hasil = a - b;
    } else if(operasi === 'x'){
        hasil = a*b;
    } else if(operasi === '÷'){
        hasil = a/b;
    }
    
    document.getElementById("hasil").innerHTML = hasil;
}