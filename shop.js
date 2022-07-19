document.addEventListener('alpine:init', () => {
    Alpine.data('items', () => ({
      Wen: 0,
      Canibas: 0,
      DuroStar: 0,
      Wanco: 0,
      Generag: 0,
      Generac: 0,
      Tes: 0,
      Champion: 0,

      GasBank: 0,
      Daly: 0,
      Alva: 0,
      Cassandra: 0,
      Bluegas: 0,
      CALOR: 0,
      CADEC: 0,
      Flogas: 0,

      smallPrice: 13000,
      mediumPrice: 11000,
      largePrice: 12000,
      WanPrice: 12500,
      GenPrice: 15000,
      racPrice: 15500,
      tesPrice: 18999,
      champPrice: 19000,

      gasPrice: 610,
      dalyPrice: 595,
      alvaPrice: 680,
      casPrice: 630,
      bluePrice: 550,
      calPrice: 1100,
      cadPrice: 599,
      floPrice: 650,
      set add(size) {
        this[size]++;
      },
      set remove(size) {
        this[size]--;
      },
      get smallTotal() {
        return (this.Wen * this.smallPrice)
      },
      get mediumTotal() {
        return (this.Canibas * this.mediumPrice)
      },
      get largeTotal() {
        return (this.DuroStar * this.largePrice)
      },

      get WanTotal() {
        return (this.Wanco * this.WanPrice)
      },
      get GenTotal() {
        return (this.Generag * this.GenPrice)
      },
      get racTotal() {
        return (this.Generac * this.racPrice)
      },
      get tesTotal() {
        return (this.Tes * this.tesPrice)
      },
      get champTotal() {
        return (this.Champion * this.champPrice)
      },
//
      get gasTotal() {
        return (this.GasBank * this.gasPrice)
      },
      get dalyTotal() {
        return (this.Daly * this.dalyPrice)
      },
      get alvaTotal() {
        return (this.Alva * this.alvaPrice)
      },

      get casTotal() {
        return (this.Cassandra * this.casPrice)
      },
      get blueTotal() {
        return (this.Bluegas * this.bluePrice)
      },
      get calTotal() {
        return (this.CALOR * this.calPrice)
      },
      get cadTotal() {
        return (this.CADEC * this.cadPrice)
      },
      get floTotal() {
        return (this.Flogas * this.floPrice)
      },

      
      //total//
      get total() {
        return this.largeTotal + this.mediumTotal + this.smallTotal +this.WanTotal + this.GenTotal + this.racTotal + this.tesTotal+ this.champTotal
        + this.gasTotal + this.dalyTotal + this.alvaTotal +this.casTotal + this.blueTotal + this.calTotal + this.cadTotal+ this.floTotal;
      },
      checkout: false,
      paid: '',
      get change() {
       return parseFloat(this.paid) - this.total
      },
      reset() {
        this.Wen = 0;
        this.Canibas = 0;
        this.DuroStar = 0;
        this.Wanco = 0;
        this.Generag = 0;
        this.Generac = 0;
        this.Tes = 0;
        this.Champion = 0;
       
        this.GasBank = 0;
        this.Daly = 0;
        this.Alva = 0;
        this.Cassandra = 0;
        this.Bluegas = 0;
        this.CALOR = 0;
        this.CADEC = 0;
        this.Flogas = 0;
        this.checkout = false;
        this.paid = '';
      }
    }));


  });

  function myFruits() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("values");
    li = ul.getElementsByTagName('li');
  
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  document.getElementById("container").appendChild(select);