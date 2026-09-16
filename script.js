const locations = {
    "mnichovo": { 
        title: "Mnichovo Hradiště", 
        desc: "Barokní perla Valdštejnů. Velkolepá rezidence, která vás přenese do éry Albrechta z Valdštejna. Mezi největší lákadla patří unikátní zámecké divadlo s původní mašinerií a rozsáhlá knihovna.", 
        img: "Minchovo.jpg" 
    },
    "bela": { 
        title: "Benátky nad Jizerou", 
        desc: "Zámek Benátky nad Jizerou. Původně tvrz, přestavěná na renesanční a později barokní zámek s unikátní sgrafitovou výzdobou. Je úzce spjat s působením dánského astronoma Tychona Braheho a skladatele Bedřicha Smetany.", 
        img: "bela.jpg" 
    },
    "michalovice": { 
        title: "Michalovická Putna", 
        desc: "Zřícenina hradu proslulá svou šikmou věží zvanou Putna.", 
        img: "Putna.jpg" 
    },
    "loucen": { 
        title: "Zámek Loučeň", 
        desc: "Labyrinty a bludiště. Barokní zámek obklopený rozsáhlým parkem, který ukrývá evropský unikát – 12 různých labyrintů a bludišť.", 
        img: "Loucen.jpg" 
    }
};

function hidePanels() {
    document.getElementById('info-panel').style.display = 'none';
    document.getElementById('double-panel').style.display = 'none';
}

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        hidePanels();

        if (id === "boleslav") {
            document.getElementById('double-panel').style.display = 'flex';
        } else {
            const data = locations[id];
            if (data) {
                document.getElementById('p-title').innerText = data.title;
                document.getElementById('p-desc').innerText = data.desc;
                const imgElement = document.getElementById('p-img');
                
                if (data.img) {
                    imgElement.src = data.img;
                    imgElement.style.display = 'block';
                } else {
                    imgElement.style.display = 'none';
                }
                
                document.getElementById('info-panel').style.display = 'block';
            }
        }
    });
});
