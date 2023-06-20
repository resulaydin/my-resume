import React from "react";

const note = () => {
  /*
        * node --version
        * npm -- version
            * npm init --yes                // Bu şeklilde npm paketlerinin içine yükleyeceğimiz package.json klasörü oluşturulur.
            * 
        -- Sass - Scss processes start --
            * npm install node-sass         // sass kütüphanesini eklemiş olduk.
            
            * npm i -g sass                
                Bu kütüphane harika oluşturduğun sass dosyalarını watch eder ve anında css dosyalarına çevirir. https://sass-lang.com/install indir.
                _ sass --watch sass/input.scss to css/output.css
 (a)            _ sass --watch sass:css     // sass içinde oluşturulan bütün dosyalar css içinde anında oluşturulur.
            * npm run sass                  /
                " npm run " komutu package.json içerisinde "scripts: " altında bulunan key' leri çalıştırmaktadır. 
                Bu alanda bir adet "sass": " sass --watch sass:css" şekinde bir kısayol oluşturduk. Her seferinde yeniden yazmamak için
            
            sass klasöür altında '_<file-name>' şeklinde oluşturulan dosyalar (a) alanında bulunan kod kısmında etkilenmez yani sass klasörü içerisinde olmalarına rağmen
        watch edilmeyeceklerdir. Yani main.scss içerisinde @import edilerek projeye dahil edilmektedirler.
            
        * npm install                     
            varolan package.json içerisinde bulunan kütüphaneleri yükler.

        * sass sass:public/css --watch --style compressed
            CSS dosyasını performans açısından sıkıştırmak için google alanına -> sass minify yaz yukarıdaki kod olacaktır.

    * Dikkat: Çok önemli 
            _variables.scss içerisinde değişken olarak tanımladığımız $bg-image: url("../img/bg.jpeg"); değişkeninde 
            url() ile resme ulaşmak için bu resme sanki public/css/main.css dosyasından erişyorumuşuz gibi ayarlamamız gerekmektedir. 
            Çünkü sonuç itibarıyla main.scss değil main.css dosyası canlıya gönderilecektri. Aksi durumda resimlere ulaşılamayacaktır.

    */
};

note();
