//ATM UYGULAMASI



let yeniSatir = "\r\n";
let metin = "1-Bakiye Görüntüleme" + yeniSatir
+ "2-Para Çekme" +yeniSatir 
+ "3-Para Yatırma" +yeniSatir
+ "4-Çıkış" +yeniSatir
+ "Lütfen bir işlem seçiniz: ";

alert(metin);

let bakiye = 1000;

let secim = prompt(metin);

switch(secim){
    case "1":
        alert("Bakiyeniz: " +bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz: "));
        if(cekilecekTutar < bakiye){
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiye: " +bakiye);

        }
        else{
            alert("Bakiyeniz yetersiz." + yeniSatir
            + "Bakiyeniz: " + bakiye + " " + "Çekilecek Tutar: " + cekilecekTutar);
        }
        break;
    
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz: "));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel Bakiyeniz: " + bakiye);
        break;

    case "4":
        alert("Sistemden çıkış yapılmıştır. ");
        break;

    default :
        alert("Lütfen geçerli bir işlem seçiniz.");
        break;
}
