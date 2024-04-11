

var  map = L.map('map');
let buttonMappa= document.getElementById("buttonMappa");
let buttonChart= document.getElementById("buttonChart");

const ctx = document.getElementById('myChart');
let ar = [];
let ar2 = [];

  //funzione per chart
    function creaChart(){
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ar,
              datasets: [{
                label: 'Numero abitanti',
                data: ar2,
                borderColor: '#FF6384',
                  backgroundColor: '#6610f2',
                borderWidth: 1
              }]
            },
            options: {
              plugins: {
                  title: {
                      display: true,
                      text: "Top 10 città italiane per popolazione"
                  }
              },
      
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
    }    
    
    //funzione che crea mappa
    function creaMappa(){
        map.setView([41.90433206221154, 12.505773125855272], 5);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
           }).addTo(map);


    // funzione per mettere i marker
    for(let i = 0; i<comuni.length; i++ ){
        let nome = comuni[i].nome;
        let abitanti= comuni[i].abitanti;
        console.log(nome);
        let lat = comuni[i].coordinate.lat;
        let long =  comuni[i].coordinate.lon;
        console.log(long);
        console.log(lat);
        let marker1 = L.marker( [lat,long]).addTo(map);
        marker1.bindPopup( "nome città:  " + nome +  "</br>" +  " abitanti: "  + abitanti);
        
    }
    }


    // per creare i due array
    for(let i = 0; i<comuni.length; i++){
        ar.push(comuni[i].nome);
    }


    for(let i = 0; i<comuni.length; i++){
        ar2.push(comuni[i].abitanti);
    }

    buttonChart.onclick =  creaChart;
    buttonMappa.onclick = creaMappa;