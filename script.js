const fileInput = document.getElementById('fileInput');
const dashboard = document.getElementById('dashboard');
const library = document.getElementById('beerLibrary');
const uploadArea = document.querySelector('.upload-area');

let currentBeerData = null; 

const beerStyleData = [
  {
    "category": "British Origin Ale Styles",
    "styles": [
      {
        "name": "Ordinary Bitter",
        "id": "941"
      },
      {
        "name": "Special Bitter or Best Bitter",
        "id": "972"
      },
      {
        "name": "Extra Special Bitter",
        "id": "892"
      },
      {
        "name": "English-Style Summer Ale",
        "id": "886"
      },
      {
        "name": "Classic English-Style Pale Ale",
        "id": "805"
      },
      {
        "name": "British-Style India Pale Ale",
        "id": "863"
      },
      {
        "name": "Strong Ale",
        "id": "976"
      },
      {
        "name": "Old Ale",
        "id": "940"
      },
      {
        "name": "English-Style Pale Mild Ale",
        "id": "885"
      },
      {
        "name": "English-Style Dark Mild Ale",
        "id": "884"
      },
      {
        "name": "English-Style Brown Ale",
        "id": "883"
      },
      {
        "name": "Brown Porter",
        "id": "864"
      },
      {
        "name": "Robust Porter",
        "id": "957"
      },
      {
        "name": "Sweet Stout or Cream Stout",
        "id": "978"
      },
      {
        "name": "Oatmeal Stout",
        "id": "939"
      },
      {
        "name": "British-Style Imperial Stout",
        "id": "862"
      },
      {
        "name": "British-Style Barley Wine Ale",
        "id": "861"
      }
    ]
  },
  {
    "category": "Irish Origin Ale Styles",
    "styles": [
      {
        "name": "Irish-Style Red Ale",
        "id": "921"
      },
      {
        "name": "Classic Irish-Style Dry Stout",
        "id": "870"
      },
      {
        "name": "Export-Style Stout",
        "id": "891"
      }
    ]
  },
  {
    "category": "North American Origin Ale Styles",
    "styles": [
      {
        "name": "Golden or Blonde Ale",
        "id": "914"
      },
      {
        "name": "Session India Pale Ale",
        "id": "964"
      },
      {
        "name": "American-Style Amber/Red Ale",
        "id": "812"
      },
      {
        "name": "American-Style Pale Ale",
        "id": "830"
      },
      {
        "name": "Juicy or Hazy Pale Ale",
        "id": "925"
      },
      {
        "name": "American-Style Strong Pale Ale",
        "id": "834"
      },
      {
        "name": "Juicy or Hazy Strong Pale Ale",
        "id": "926"
      },
      {
        "name": "American-Style India Pale Ale",
        "id": "824"
      },
      {
        "name": "Juicy or Hazy India Pale Ale",
        "id": "924"
      },
      {
        "name": "American-Belgo-Style Ale",
        "id": "810"
      },
      {
        "name": "American-Style Brown Ale",
        "id": "815"
      },
      {
        "name": "American-Style Black Ale",
        "id": "814"
      },
      {
        "name": "American-Style Stout",
        "id": "833"
      },
      {
        "name": "American-Style Imperial Porter",
        "id": "822"
      },
      {
        "name": "American-Style Imperial Stout",
        "id": "823"
      },
      {
        "name": "Double Hoppy Red Ale",
        "id": "881"
      },
      {
        "name": "Imperial Red Ale",
        "id": "918"
      },
      {
        "name": "American-Style Imperial or Double India Pale Ale",
        "id": "821"
      },
      {
        "name": "Juicy or Hazy Imperial or Double India Pale Ale",
        "id": "923"
      },
      {
        "name": "American-Style Barley Wine Ale",
        "id": "813"
      },
      {
        "name": "American-Style Wheat Wine Ale",
        "id": "835"
      },
      {
        "name": "Smoke Porter",
        "id": "966"
      },
      {
        "name": "American-Style Sour Ale",
        "id": "832"
      },
      {
        "name": "American-Style Fruited Sour Ale",
        "id": "820"
      },
      {
        "name": "Kentucky Common Beer",
        "id": "929"
      },
      {
        "name": "American-Style Fruit Beer",
        "id": "819"
      },
      {
        "name": "West Coast-Style India Pale Ale",
        "id": "982"
      }
    ]
  },
  {
    "category": "German Origin Ale Styles",
    "styles": [
      {
        "name": "German-Style Koelsch",
        "id": "904"
      },
      {
        "name": "German-Style Altbier",
        "id": "900"
      },
      {
        "name": "Berliner-Style Weisse",
        "id": "857"
      },
      {
        "name": "Leipzig-Style Gose",
        "id": "930"
      },
      {
        "name": "Contemporary-Style Gose",
        "id": "877"
      },
      {
        "name": "South German-Style Hefeweizen",
        "id": "969"
      },
      {
        "name": "South German-Style Kristal Weizen",
        "id": "970"
      },
      {
        "name": "German-Style Leichtes Weizen",
        "id": "906"
      },
      {
        "name": "South German-Style Bernsteinfarbenes Weizen",
        "id": "967"
      },
      {
        "name": "South German-Style Dunkel Weizen",
        "id": "968"
      },
      {
        "name": "South German-Style Weizenbock",
        "id": "971"
      },
      {
        "name": "German-Style Rye Ale",
        "id": "910"
      },
      {
        "name": "Bamberg-Style Weiss Rauchbier",
        "id": "842"
      }
    ]
  },
  {
    "category": "Belgian and French Origin Ale Styles",
    "styles": [
      {
        "name": "Belgian-Style Table Beer",
        "id": "854"
      },
      {
        "name": "Belgian-Style Session Ale",
        "id": "850"
      },
      {
        "name": "Belgian-Style Speciale Belge",
        "id": "851"
      },
      {
        "name": "Belgian-Style Blonde Ale",
        "id": "843"
      },
      {
        "name": "Belgian-Style Strong Blonde Ale",
        "id": "852"
      },
      {
        "name": "Belgian-Style Strong Dark Ale",
        "id": "853"
      },
      {
        "name": "Belgian-Style Dubbel",
        "id": "844"
      },
      {
        "name": "Belgian-Style Tripel",
        "id": "855"
      },
      {
        "name": "Belgian-Style Quadrupel",
        "id": "849"
      },
      {
        "name": "Belgian-Style Witbier",
        "id": "856"
      },
      {
        "name": "Classic French & Belgian-Style Saison",
        "id": "869"
      },
      {
        "name": "Specialty Saison",
        "id": "975"
      },
      {
        "name": "French-Style Bière de Garde",
        "id": "895"
      },
      {
        "name": "Belgian-Style Flanders Oud Bruin or Oud Red Ale",
        "id": "845"
      },
      {
        "name": "Belgian-Style Lambic",
        "id": "848"
      },
      {
        "name": "Traditional Belgian-Style Gueuze",
        "id": "979"
      },
      {
        "name": "Contemporary Belgian-Style Spontaneous Fermented Ale",
        "id": "876"
      },
      {
        "name": "Other Belgian-Style Ale",
        "id": "303"
      },
      {
        "name": "Belgian-Style Fruit Beer",
        "id": "846"
      }
    ]
  },
  {
    "category": "Other Origin Ale Styles",
    "styles": [
      {
        "name": "Grodziskie",
        "id": "915"
      },
      {
        "name": "Adambier",
        "id": "808"
      },
      {
        "name": "Dutch-Style Kuit, Kuyt or Koyt",
        "id": "882"
      },
      {
        "name": "International-Style Pale Ale",
        "id": "919"
      },
      {
        "name": "Classic Australian-Style Pale Ale",
        "id": "868"
      },
      {
        "name": "Australian-Style Pale Ale",
        "id": "837"
      },
      {
        "name": "New Zealand-Style Pale Ale",
        "id": "937"
      },
      {
        "name": "New Zealand-Style India Pale Ale",
        "id": "936"
      },
      {
        "name": "Finnish-Style Sahti",
        "id": "894"
      },
      {
        "name": "Swedish-Style Gotlandsdricke",
        "id": "977"
      },
      {
        "name": "Breslau-Style Schoeps",
        "id": "859"
      }
    ]
  },
  {
    "category": "Scottish Origin Ale Styles",
    "styles": [
      {
        "name": "Scottish-Style Light Ale",
        "id": "962"
      },
      {
        "name": "Scottish-Style Heavy Ale",
        "id": "961"
      },
      {
        "name": "Scottish-Style Export Ale",
        "id": "960"
      },
      {
        "name": "Scotch Ale or Wee Heavy",
        "id": "959"
      }
    ]
  },
  {
    "category": "European Origin Lager Styles",
    "styles": [
      {
        "name": "Czech-Style Pale Lager",
        "id": "858"
      },
      {
        "name": "Vienna-Style Lager",
        "id": "981"
      },
      {
        "name": "Baltic-Style Porter",
        "id": "838"
      },
      {
        "name": "Czech-Style Amber Lager",
        "id": "1000"
      },
      {
        "name": "Czech-Style Dark Lager",
        "id": "1001"
      },
      {
        "name": "Italian-Style Pilsener",
        "id": "922"
      }
    ]
  },
  {
    "category": "North American Origin Lager Styles",
    "styles": [
      {
        "name": "American-Style Lager",
        "id": "826"
      },
      {
        "name": "Contemporary American-Style Lager",
        "id": "873"
      },
      {
        "name": "American-Style Light Lager",
        "id": "827"
      },
      {
        "name": "Contemporary American-Style Light Lager",
        "id": "874"
      },
      {
        "name": "American-Style Pilsener",
        "id": "831"
      },
      {
        "name": "Contemporary American-Style Pilsener",
        "id": "875"
      },
      {
        "name": "American-Style India Pale Lager",
        "id": "825"
      },
      {
        "name": "American-Style Malt Liquor",
        "id": "829"
      },
      {
        "name": "American-Style Amber Lager",
        "id": "811"
      },
      {
        "name": "American-Style Maerzen/Oktoberfest",
        "id": "828"
      },
      {
        "name": "American-Style Dark Lager",
        "id": "817"
      },
      {
        "name": "Mexican-Style Light Lager",
        "id": "1002"
      },
      {
        "name": "Mexican-Style Pale Lager",
        "id": "1003"
      },
      {
        "name": "Mexican-Style Amber Lager",
        "id": "1004"
      },
      {
        "name": "Mexican-Style Dark Lager",
        "id": "1006"
      },
      {
        "name": "West Coast-Style Pilsener",
        "id": "1007"
      }
    ]
  },
  {
    "category": "Other Origin Lager Styles",
    "styles": [
      {
        "name": "International Light Lager",
        "id": "836"
      },
      {
        "name": "International-Style Pilsener",
        "id": "920"
      },
      {
        "name": "Rice Lager",
        "id": "947"
      }
    ]
  },
  {
    "category": "German Origin Lager Styles",
    "styles": [
      {
        "name": "German-Style Leichtbier",
        "id": "905"
      },
      {
        "name": "German-Style Pilsener",
        "id": "909"
      },
      {
        "name": "Munich-Style Helles",
        "id": "935"
      },
      {
        "name": "Dortmunder/European-Style Export",
        "id": "880"
      },
      {
        "name": "Franconian-Style Rotbier",
        "id": "806"
      },
      {
        "name": "German-Style Maerzen",
        "id": "907"
      },
      {
        "name": "German-Style Oktoberfest/Festbier",
        "id": "908"
      },
      {
        "name": "Munich-Style Dunkel",
        "id": "934"
      },
      {
        "name": "European-Style Dark Lager",
        "id": "887"
      },
      {
        "name": "German-Style Schwarzbier",
        "id": "911"
      },
      {
        "name": "Bamberg-Style Helles Rauchbier",
        "id": "840"
      },
      {
        "name": "Bamberg-Style Maerzen Rauchbier",
        "id": "841"
      },
      {
        "name": "Bamberg-Style Bock Rauchbier",
        "id": "839"
      },
      {
        "name": "German-Style Heller Bock/Maibock",
        "id": "903"
      },
      {
        "name": "Traditional German-Style Bock",
        "id": "980"
      },
      {
        "name": "German-Style Doppelbock",
        "id": "901"
      },
      {
        "name": "German-Style Eisbock",
        "id": "902"
      }
    ]
  },
  {
    "category": "All Origin Hybrid/Mixed Lagers or Ale",
    "styles": [
      {
        "name": "Belgian-Style Fruit Lambic",
        "id": "847"
      },
      {
        "name": "Session Beer",
        "id": "963"
      },
      {
        "name": "American-Style Cream Ale",
        "id": "816"
      },
      {
        "name": "California Common Beer",
        "id": "865"
      },
      {
        "name": "American-Style Wheat Beer",
        "id": "300"
      },
      {
        "name": "Kellerbier or Zwickelbier",
        "id": "301"
      },
      {
        "name": "Fruit Wheat Beer",
        "id": "897"
      },
      {
        "name": "Field Beer",
        "id": "893"
      },
      {
        "name": "Pumpkin Spice Beer",
        "id": "955"
      },
      {
        "name": "Pumpkin/Squash Beer",
        "id": "956"
      },
      {
        "name": "Chocolate or Cocoa Beer",
        "id": "867"
      },
      {
        "name": "Coffee Beer",
        "id": "871"
      },
      {
        "name": "Chili Pepper Beer",
        "id": "866"
      },
      {
        "name": "Herb and Spice Beer",
        "id": "916"
      },
      {
        "name": "Specialty Beer",
        "id": "123"
      },
      {
        "name": "Specialty Honey Beer",
        "id": "974"
      },
      {
        "name": "Rye Beer",
        "id": "958"
      },
      {
        "name": "Brett Beer",
        "id": "860"
      },
      {
        "name": "Mixed-Culture Brett Beer",
        "id": "933"
      },
      {
        "name": "Ginjo Beer or Sake-Yeast Beer",
        "id": "912"
      },
      {
        "name": "Fresh Hop Beer",
        "id": "896"
      },
      {
        "name": "Wood- and Barrel-Aged Sour Beer",
        "id": "986"
      },
      {
        "name": "Aged Beer",
        "id": "809"
      },
      {
        "name": "Experimental Beer",
        "id": "888"
      },
      {
        "name": "Experimental India Pale Ale",
        "id": "889"
      },
      {
        "name": "Historical Beer",
        "id": "917"
      },
      {
        "name": "Wild Beer",
        "id": "983"
      },
      {
        "name": "Smoke Beer",
        "id": "965"
      },
      {
        "name": "Other Strong Ale or Lager",
        "id": "948"
      },
      {
        "name": "Gluten-Free Beer",
        "id": "913"
      },
      {
        "name": "Non-Alcohol Malt Beverage",
        "id": "938"
      },
      {
        "name": "Dessert or Pastry Beer",
        "id": "879"
      }
    ]
  }
]

// 1. INITIALIZATION: Load Library & Check URL
window.addEventListener('DOMContentLoaded', () => {
    fetchLibrary();
    
    // Check if URL has ?batch=filename param
    const urlParams = new URLSearchParams(window.location.search);
    const batchFile = urlParams.get('batch');
    if (batchFile) {
        loadBatchFromServer(batchFile);
    }
});

function fetchLibrary() {
    fetch('recipes.json')
        .then(response => response.json())
        .then(beers => {
            const container = document.getElementById('beerListContainer');
            container.innerHTML = ''; // Clear loading text
            
            beers.forEach(beer => {
                const card = document.createElement('div');
                card.className = 'beer-card';
                card.onclick = () => loadBatchFromServer(beer.filename);
                
                card.innerHTML = `
                    <h3>${beer.name}</h3>
                    <p>${beer.style}</p>
                    <div class="beer-meta">
                        <span>${beer.abv}</span>
                        <span>${beer.date}</span>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.log("No library found or error loading recipes.json (Expected if running offline without server)");
            document.getElementById('beerListContainer').innerHTML = '<p>No library index found. Use the upload box above.</p>';
        });
}

function loadBatchFromServer(filename) {
    fetch(filename)
        .then(response => response.json())
        .then(data => {
            currentBeerData = data;
            renderBeer(data);
            showDashboard();
            
            // Optional: Update URL without reloading so friends can share links
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?batch=' + filename;
            window.history.pushState({path:newUrl},'',newUrl);
        })
        .catch(err => {
            alert("Could not load batch file: " + filename);
            console.error(err);
        });
}

function showDashboard() {
    library.style.display = 'none';
    uploadArea.style.display = 'none';
    dashboard.style.display = 'block';
    document.getElementById('recipeBuilder').style.display = 'none';
}

function showLibrary() {
    library.style.display = 'block';
    uploadArea.style.display = 'block';
    dashboard.style.display = 'none';
    document.getElementById('recipeBuilder').style.display = 'none';
    
    // Clear URL param
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl},'',newUrl);
}

fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            currentBeerData = data; // Store data globally
            renderBeer(data);
            document.querySelector('.upload-area').style.display = 'none';
            dashboard.style.display = 'block';
        } catch (err) {
            alert("Error parsing JSON file.");
            console.error(err);
        }
    };
    reader.readAsText(file);
});

function renderBeer(data) {
    // --- 0. DATA NORMALIZATION ---
    const isBatch = (data._type === 'batch') || (data.batchNo !== undefined);
    const design = isBatch ? data.recipe : data;

    // --- 1. Header Details ---
    document.getElementById('recipeName').textContent = data.name;
    document.getElementById('brewerName').textContent = data.author || data.brewer || "Homebrewer";

    // NEW: Handle Style Link with Anchor ID
    let styleName = "Unknown Style";
    let styleId = null;

    if (design.style) {
        if (typeof design.style === 'string') {
            styleName = design.style;
        } else {
            styleName = design.style.name || "Unknown Style";
            styleId = design.style.styleId;
        }
    }
    
    // Base URL
    let baUrl = `https://www.brewersassociation.org/?s=${encodeURIComponent(styleName)}`;
    
    // If we have the specific ID, create the direct Anchor Link
    if (styleId) {
        baUrl = `https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/#${styleId}`;
    }
    
    const styleHtml = `<a href="${baUrl}" target="_blank" style="color:var(--accent); text-decoration:none; font-weight:bold;">${styleName}</a>`;

    if (isBatch) {
        document.getElementById('batchNo').textContent = `Batch #${data.batchNo}`;
        // Add the style link next to batch number
        document.getElementById('batchNo').innerHTML += ` | ${styleHtml}`;
        document.getElementById('statusBadge').textContent = data.status || "Planned";
        document.getElementById('statusBadge').className = 'status-pill status-batch';
        document.getElementById('brewDate').textContent = data.brewDate ? new Date(data.brewDate).toLocaleDateString('sv-SE') : '';
        document.getElementById('btnStartBatch').textContent = "Edit Batch Data";
    } else {
        document.getElementById('batchNo').textContent = "Recipe Library";
        // Add the style link next to "Recipe Library"
        document.getElementById('batchNo').innerHTML += ` | ${styleHtml}`;
        document.getElementById('statusBadge').textContent = "Recipe Design";
        document.getElementById('statusBadge').className = 'status-pill status-recipe';
        document.getElementById('brewDate').textContent = "";
        document.getElementById('btnStartBatch').textContent = "Start Brew Day";
    }

    // --- 2. Stats (Dashboard View) ---
    const abv = (isBatch && data.measuredAbv) ? data.measuredAbv : design.abv;
    const og  = (isBatch && data.measuredOg)  ? data.measuredOg  : (design.og || design.estimatedOg);
    const fg  = (isBatch && data.measuredFg)  ? data.measuredFg  : (design.fg || design.estimatedFg);
    const ibu = (isBatch && data.estimatedIbu)? data.estimatedIbu : design.ibu;
    const eff = (isBatch && data.measuredMashEfficiency) ? data.measuredMashEfficiency : design.efficiency;
    const vol = (isBatch && data.measuredBatchSize) ? data.measuredBatchSize : design.batchSize;
    const color = data.estimatedColor || design.color || design.estimatedColor;

    document.getElementById('val-abv').textContent = abv ? parseFloat(abv).toFixed(1) + '%' : '-';
    document.getElementById('val-og').textContent  = og  ? parseFloat(og).toFixed(3) : '-';
    document.getElementById('val-fg').textContent  = fg  ? parseFloat(fg).toFixed(3) : '-';
    document.getElementById('val-ibu').textContent = ibu ? Math.round(ibu) : '-';
    document.getElementById('val-vol').textContent = vol ? parseFloat(vol).toFixed(1) + 'L' : '-';
    document.getElementById('val-eff').textContent = eff ? parseFloat(eff).toFixed(1) + '%' : '-';

    // NEW: Render Color
    if (color) {
        document.getElementById('val-color').textContent = Math.round(color);
        
        // Convert EBC to SRM for the RGB calculation (EBC * 0.508 = SRM)
        const srm = color * 0.508;
        const rgb = srmToRgb(srm); // This function is already in your script from the Builder
        document.getElementById('val-color-dot').style.backgroundColor = rgb;
    } else {
        document.getElementById('val-color').textContent = '-';
        document.getElementById('val-color-dot').style.backgroundColor = 'transparent';
    }

    // --- 3. PRE-FILL FORM TARGETS ---
    document.getElementById('targetPreBoilG').textContent = `Target: ${(design.preBoilGravity || 0).toFixed(3)}`;
    document.getElementById('targetMashEff').textContent  = `Target: ${design.efficiency}%`;
    document.getElementById('targetOG').textContent       = `Target: ${(design.og || design.estimatedOg || 0).toFixed(3)}`;
    document.getElementById('targetVol').textContent      = `Target: ${design.batchSize}L`;
    document.getElementById('targetFG').textContent       = `Target: ${(design.fg || design.estimatedFg || 0).toFixed(3)}`;
    document.getElementById('targetPreBoilVol').textContent = `Target: ${(design.boilSize || 0).toFixed(1)}L`;
    
    // Post Boil Target
    const postBoilTarget = design.equipment?.postBoilKettleVol || design.batchSize;
    document.getElementById('targetPostBoilVol').textContent = `Target: ${parseFloat(postBoilTarget).toFixed(1)}L`;

    // NEW: Packaged Volume Target
    // If bottlingVolume exists in equipment, use it. Otherwise assume Batch Size minus loss estimate.
    const pkgTarget = design.equipment?.bottlingVolume || design.batchSize;
    document.getElementById('targetPkgVol').textContent = `Target: ${parseFloat(pkgTarget).toFixed(1)}L`;


    // --- 4. PRE-FILL FORM INPUTS (If editing existing data) ---
    if(isBatch) {
        document.getElementById('inputBatchNo').value = data.batchNo || '';
        document.getElementById('inputBrewer').value = data.brewer || '';
        document.getElementById('inputStatus').value = data.status || 'Planning';

        if(data.brewDate) {
             document.getElementById('inputDate').value = new Date(data.brewDate).toISOString().split('T')[0];
        }
        
        document.getElementById('inputPreBoilVol').value = data.measuredBoilSize || ''; 
        document.getElementById('inputPreBoilG').value = data.measuredBoilGravity || ''; 
        document.getElementById('inputMashEff').value = data.measuredMashEfficiency || '';
        document.getElementById('inputPostBoilVol').value = data.measuredPostBoilVol || '';
        
        document.getElementById('inputOG').value = data.measuredOg || '';
        document.getElementById('inputVol').value = data.measuredBatchSize || '';
        document.getElementById('inputFG').value = data.measuredFg || '';
        
        // NEW: Packaged Volume Measurement
        document.getElementById('inputPkgVol').value = data.measuredBottlingSize || '';

        document.getElementById('inputNotes').value = data.batchNotes || '';
        
        calculateStats();
    } else {
        // Clear inputs for new batch
        document.getElementById('inputBatchNo').value = ''; 
        document.getElementById('inputBrewer').value = "Me";
        document.getElementById('inputDate').valueAsDate = new Date();
        document.getElementById('inputStatus').value = 'Brewing';
        
        // Add inputPkgVol to the list of cleared fields
        ['inputPreBoilVol', 'inputPreBoilG', 'inputMashEff', 'inputPostBoilVol', 
         'inputOG', 'inputVol', 'inputFG', 'inputPkgVol', 
         'inputNotes', 'inputABV', 'inputAtt'].forEach(id => {
            document.getElementById(id).value = '';
        });
    }

    renderTables(design);
    renderNotes(data, isBatch, design);
}

// Helper to render the static tables (moved out to keep main function clean)
function renderTables(design) {
    // Mash Steps
    const mashList = document.getElementById('mashList');
    mashList.innerHTML = '';
    const mashSection = document.getElementById('mashSection');
    
    if (design.mash && design.mash.steps && design.mash.steps.length > 0) {
        mashSection.style.display = 'block';
        design.mash.steps.forEach(step => {
            const rampHtml = step.rampTime ? `<span class="ramp-time">(ramp ${step.rampTime}m)</span>` : '';
            mashList.innerHTML += `<tr>
                <td><strong>${step.name}</strong></td>
                <td><span class="temp-badge">${step.stepTemp} °C</span></td>
                <td>${step.stepTime} min ${rampHtml}</td>
            </tr>`;
        });
    } else {
        mashSection.style.display = 'none';
    }

    // Fermentables
    const grainList = document.getElementById('fermentablesList');
    grainList.innerHTML = '';
    if (design.fermentables) {
        design.fermentables.forEach(f => {
            grainList.innerHTML += `<tr>
                <td>${f.amount} kg</td>
                <td><strong>${f.name}</strong></td>
                <td>${f.type}</td>
                <td>${f.color} EBC</td>
            </tr>`;
        });
    }

    // Hops
    const hopsList = document.getElementById('hopsList');
    hopsList.innerHTML = '';
    if (design.hops) {
        design.hops.forEach(h => {
            hopsList.innerHTML += `<tr>
                <td>${h.amount} g</td>
                <td><strong>${h.name}</strong> (${h.alpha}%)</td>
                <td>${h.time} min</td>
                <td>${h.use}</td>
                <td>${h.ibu ? h.ibu.toFixed(1) : '-'}</td>
            </tr>`;
        });
    }

    // Yeast
    const yeastList = document.getElementById('yeastList');
    yeastList.innerHTML = '';
    if (design.yeasts) {
        design.yeasts.forEach(y => {
            yeastList.innerHTML += `<tr>
                <td>${y.amount || 1} ${y.unit || 'pkg'}</td>
                <td><strong>${y.name}</strong></td>
                <td>Yeast (${y.laboratory || ''})</td>
            </tr>`;
        });
    }
    if(design.miscs) {
        design.miscs.forEach(m => {
            yeastList.innerHTML += `<tr>
                <td>${m.amount} ${m.unit}</td>
                <td><strong>${m.name}</strong></td>
                <td>${m.type} (${m.use})</td>
            </tr>`;
        });
    }

    // --- Fermentation Steps ---
    const fermStepList = document.getElementById('fermStepList');
    const fermSection = document.getElementById('fermSection');
    fermStepList.innerHTML = '';
    
    // Check if fermentation object and steps exist
    if (design.fermentation && design.fermentation.steps && design.fermentation.steps.length > 0) {
        fermSection.style.display = 'block';
        
        design.fermentation.steps.forEach(step => {
            // Some exports might call it 'stepTemp' or 'displayStepTemp'
            const temp = step.stepTemp || step.displayStepTemp || 0;
            const time = step.stepTime || 0;
            
            const row = `<tr>
                <td><strong>${step.type || 'Step'}</strong></td>
                <td><span class="temp-badge">${temp} °C</span></td>
                <td>${time} days</td>
            </tr>`;
            fermStepList.innerHTML += row;
        });
    } else {
        fermSection.style.display = 'none';
    }
}

function renderNotes(data, isBatch, design) {
    const notesDiv = document.getElementById('notesContent');
    let notesHtml = '';
    
    if (design.notes && typeof design.notes === 'string' && design.notes.length > 0) {
        notesHtml += `<div class="notes-box" style="background:#e3f2fd; color:#0d47a1;"><strong>Recipe Notes:</strong><br>${design.notes.replace(/\n/g, '<br>')}</div>`;
    }
    if (isBatch && data.batchNotes) {
        notesHtml += `<div class="notes-box"><strong>Batch Notes:</strong><br>${data.batchNotes.replace(/\n/g, '<br>')}</div>`;
    }
    if (isBatch && data.tasteNotes) {
        notesHtml += `<div class="notes-box" style="background:#e8f5e9; color:#1b5e20;"><strong>Taste Notes (Rating: ${data.tasteRating || '-'}):</strong><br>${data.tasteNotes.replace(/\n/g, '<br>')}</div>`;
    }
    notesDiv.innerHTML = notesHtml || '<p>No notes entered.</p>';
}

// --- INTERACTIVE FUNCTIONS ---

function toggleBatchMode() {
    const form = document.getElementById('batchForm');
    const btn = document.getElementById('btnStartBatch');
    
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        // Scroll smoothly to the form
        form.scrollIntoView({ behavior: 'smooth' });
    } else {
        form.style.display = 'none';
    }
}

function calculateStats() {
    const og = parseFloat(document.getElementById('inputOG').value);
    const fg = parseFloat(document.getElementById('inputFG').value);

    // Calculate ABV
    if (og && fg) {
        // Standard formula: (OG - FG) * 131.25
        const abv = (og - fg) * 131.25;
        document.getElementById('inputABV').value = abv.toFixed(2) + '%';

        // Calculate Apparent Attenuation
        // Formula: (OG - FG) / (OG - 1.0)
        const attenuation = ((og - fg) / (og - 1.0)) * 100;
        document.getElementById('inputAtt').value = attenuation.toFixed(1) + '%';
    } else {
        document.getElementById('inputABV').value = '';
        document.getElementById('inputAtt').value = '';
    }
}

function calculateMashEfficiency() {
    // 1. Get User Inputs
    const preBoilVol = parseFloat(document.getElementById('inputPreBoilVol').value);
    const preBoilSG = parseFloat(document.getElementById('inputPreBoilG').value);
    
    if (!preBoilVol || !preBoilSG || !currentBeerData) return;

    // 2. Determine Recipe Design Source
    const isBatch = (currentBeerData._type === 'batch') || (currentBeerData.batchNo !== undefined);
    const design = isBatch ? currentBeerData.recipe : currentBeerData;

    if (!design.fermentables) return;

    // 3. Calculate Total Potential Points from GRAIN/ADJUNCT only
    // Formula: Weight (kg) * PotentialPointsPerKgL
    // 1 PPG (lb/gal) is approx 8.345 Metric Points (L/kg)
    // Example: Potential 1.037 is 37 * 8.345 = 308.765 points per kg per liter
    
    let totalPotentialPoints = 0;

    design.fermentables.forEach(f => {
        // Filter: We usually only count grains in mash efficiency, not sugars added to boil
        // If 'use' is missing, assume it's grain. If 'use' is 'Mash', count it.
        const isGrain = (f.type === 'Grain' || f.type === 'Adjunct');
        const isMash = (f.use === 'Mash' || !f.use); // If use is undefined, it's usually base malt

        if (isGrain || isMash) {
            // Get potential points (e.g., 1.037 -> 37)
            const potentialPoints = (f.potential - 1) * 1000;
            
            // Convert to Metric Points (Liters * Gravity Points)
            const metricPoints = potentialPoints * 8.345;
            
            totalPotentialPoints += (metricPoints * f.amount);
        }
    });

    // 4. Calculate Obtained Points in Kettle
    // (MeasuredGravity - 1) * 1000 * MeasuredVolume
    const obtainedPoints = (preBoilSG - 1) * 1000 * preBoilVol;

    // 5. Calculate Efficiency
    // Efficiency = Obtained / Potential
    if (totalPotentialPoints > 0) {
        const efficiency = (obtainedPoints / totalPotentialPoints) * 100;
        document.getElementById('inputMashEff').value = efficiency.toFixed(1);
    }
}

function saveBatchFile() {
    if (!currentBeerData) return;

    // 1. Create a deep copy of the current data to avoid modifying the original until saved
    let newBatch = JSON.parse(JSON.stringify(currentBeerData));
    
    // 2. Determine if we are converting a Recipe to a Batch
    const isRecipe = (newBatch._type === 'recipe') || (!newBatch.batchNo && !newBatch.recipe);

    if (isRecipe) {
        // If we started with a recipe, we need to restructure it into a Batch format
        // Structure: { _type: "batch", recipe: {ORIGINAL_RECIPE}, ...measurements }
        const originalRecipe = JSON.parse(JSON.stringify(newBatch));
        
        newBatch = {
            _type: "batch",
            name: originalRecipe.name,
            brewer: document.getElementById('inputBrewer').value,
            batchNo: parseInt(document.getElementById('inputBatchNo').value) || 1,
            status: "Brewing", // Default status for new batches
            recipe: originalRecipe,
            
            // Initialize arrays that batches usually have
            measurements: [],
            events: [],
            notes: [] 
        };
    }

    // 3. Update Batch Metadata
    newBatch.batchNo = parseInt(document.getElementById('inputBatchNo').value) || newBatch.batchNo;
    newBatch.brewer = document.getElementById('inputBrewer').value;
    newBatch.name = document.getElementById('recipeName').textContent; // Keep name consistent
    newBatch.status = document.getElementById('inputStatus').value;
    
    // Date: Convert YYYY-MM-DD back to Timestamp (ms)
    const dateInput = document.getElementById('inputDate').value;
    if (dateInput) {
        newBatch.brewDate = new Date(dateInput).getTime();
    }

    // 4. Update Measurements
    // We use parseFloat to ensure numbers are saved as numbers, not strings
    
    // Pre-Boil
    newBatch.measuredBoilSize = parseFloat(document.getElementById('inputPreBoilVol').value) || null;
    newBatch.measuredBoilGravity = parseFloat(document.getElementById('inputPreBoilG').value) || null;
    newBatch.measuredMashEfficiency = parseFloat(document.getElementById('inputMashEff').value) || null;
    
    // Post-Boil
    newBatch.measuredPostBoilVol = parseFloat(document.getElementById('inputPostBoilVol').value) || null;
    
    // Fermenter
    newBatch.measuredOg = parseFloat(document.getElementById('inputOG').value) || null;
    newBatch.measuredBatchSize = parseFloat(document.getElementById('inputVol').value) || null; // Vol into fermenter
    
    // Finished Beer
    newBatch.measuredFg = parseFloat(document.getElementById('inputFG').value) || null;
    newBatch.measuredBottlingSize = parseFloat(document.getElementById('inputPkgVol').value) || null;
    
    // Calculated Stats (strip the % sign)
    const abvStr = document.getElementById('inputABV').value;
    newBatch.measuredAbv = abvStr ? parseFloat(abvStr.replace('%','')) : null;
    
    const attStr = document.getElementById('inputAtt').value;
    newBatch.measuredAttenuation = attStr ? parseFloat(attStr.replace('%','')) : null;

    // 5. Notes
    // Update the text note. 
    newBatch.batchNotes = document.getElementById('inputNotes').value;

    // 6. Generate File Name
    // Format: "Batch #123 - Beer Name.beerjson"
    const fileName = `Batch #${newBatch.batchNo} - ${newBatch.name}.beerjson`;

    // 7. Trigger Download
    const dataStr = JSON.stringify(newBatch, null, 2); // Pretty print with 2 spaces
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
// --- RECIPE BUILDER LOGIC ---

function initRecipeBuilder() {
    document.querySelector('.upload-area').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('recipeBuilder').style.display = 'block';

    // --- NEW: Populate Style Dropdown with Categories ---
    const styleSelect = document.getElementById('buildStyle');
    styleSelect.innerHTML = '';
    
    // Create a default "Select Style" option
    const defaultOption = document.createElement('option');
    defaultOption.text = "Select a Style";
    styleSelect.add(defaultOption);

    beerStyleData.forEach(group => {
        // Create an <optgroup> for the Category (e.g., "British Origin")
        const groupEl = document.createElement('optgroup');
        groupEl.label = group.category;
        
        group.styles.forEach(style => {
            const option = document.createElement('option');
            // We save the ID as the value, and Name as the text
            option.value = style.id; 
            option.textContent = style.name;
            // Store the name in a data attribute so we can grab it later easily
            option.setAttribute('data-name', style.name);
            groupEl.appendChild(option);
        });
        
        styleSelect.appendChild(groupEl);
    });
    
    // ... rest of init function ...
    document.getElementById('buildGrainList').innerHTML = '';
    document.getElementById('buildHopList').innerHTML = '';
    document.getElementById('buildMiscList').innerHTML = '';
    document.getElementById('buildMashList').innerHTML = '';
    document.getElementById('buildFermStepList').innerHTML = ''; // Ensure IDs are unique in HTML as discussed before
    
    addGrainRow(5, "Pale Ale Malt", 5, 1.038); 
    addHopRow(20, "Magnum", 12, 60, "Boil");
    recalc();
}

function cancelBuilder() {
    document.getElementById('recipeBuilder').style.display = 'none';
    document.querySelector('.upload-area').style.display = 'block';
}

// --- Dynamic Rows ---

function addGrainRow(amt='', name='', color='', pot=1.037) {
    const tbody = document.getElementById('buildGrainList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="number" step="0.1" class="f-amt" value="${amt}" oninput="recalc()"></td>
        <td><input type="text" class="f-name" value="${name}"></td>
        <td><input type="number" step="1" class="f-color" value="${color}" oninput="recalc()"></td>
        <td><input type="number" step="0.001" class="f-pot" value="${pot}" oninput="recalc()"></td>
        <td><button class="btn-remove" onclick="this.closest('tr').remove(); recalc()">X</button></td>
    `;
    tbody.appendChild(row);
}

function addHopRow(amt='', name='', alpha='', time='', use='Boil') {
    const tbody = document.getElementById('buildHopList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="number" step="1" class="h-amt" value="${amt}" oninput="recalc()"></td>
        <td><input type="text" class="h-name" value="${name}"></td>
        <td><input type="number" step="0.1" class="h-alpha" value="${alpha}" oninput="recalc()"></td>
        <td><input type="number" class="h-time" value="${time}" oninput="recalc()"></td>
        <td>
            <select class="h-use" onchange="recalc()">
                <option value="Boil" ${use==='Boil'?'selected':''}>Boil</option>
                <option value="Aroma" ${use==='Aroma'?'selected':''}>Aroma/Whirlpool</option>
                <option value="Dry Hop" ${use==='Dry Hop'?'selected':''}>Dry Hop</option>
            </select>
        </td>
        <td><button class="btn-remove" onclick="this.closest('tr').remove(); recalc()">X</button></td>
    `;
    tbody.appendChild(row);
}

function addMiscRow(amt='', unit='g', name='', type='Other', use='Boil') {
    const tbody = document.getElementById('buildMiscList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="number" step="0.1" class="m-amt" value="${amt}"></td>
        <td><input type="text" class="m-unit" value="${unit}" placeholder="g/ml"></td>
        <td><input type="text" class="m-name" value="${name}"></td>
        <td>
            <select class="m-type">
                <option value="Water Agent" ${type==='Water Agent'?'selected':''}>Water Agent</option>
                <option value="Other" ${type==='Other'?'selected':''}>Other</option>
                <option value="Fining" ${type==='Fining'?'selected':''}>Fining</option>
                <option value="Spice" ${type==='Spice'?'selected':''}>Spice</option>
                <option value="Herb" ${type==='Herb'?'selected':''}>Herb</option>
                <option value="Flavor" ${type==='Flavor'?'selected':''}>Flavor</option>
            </select>
        </td>
        <td>
            <select class="m-use">
                <option value="Mash" ${use==='Mash'?'selected':''}>Mash</option>
                <option value="Sparge" ${use==='Sparge'?'selected':''}>Sparge</option>
                <option value="Boil" ${use==='Boil'?'selected':''}>Boil</option>
                <option value="Primary" ${use==='Primary'?'selected':''}>Primary</option>
                <option value="Bottling" ${use==='Bottling'?'selected':''}>Bottling</option>
            </select>
        /td>
        <td><button class="btn-remove" onclick="this.closest('tr').remove()">X</button></td>
    `;
    tbody.appendChild(row);
}

function addMashStepRow(name='', temp='', time='') {
    const tbody = document.getElementById('buildMashList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" class="ms-name" value="${name}"></td>
        <td><input type="number" step="1" class="ms-temp" value="${temp}"></td>
        <td><input type="number" class="ms-time" value="${time}"></td>
        <td><button class="btn-remove" onclick="this.closest('tr').remove()">X</button></td>
    `;
    tbody.appendChild(row);
}

function addFermStepRow(type='', temp='', time='') {
    const tbody = document.getElementById('buildFermStepList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
             <select class="fs-type">
                <option value="Primary" ${type==='Primary'?'selected':''}>Primary</option>
                <option value="Secondary" ${type==='Secondary'?'selected':''}>Secondary</option>
                <option value="Conditioning" ${type==='Conditioning'?'selected':''}>Conditioning</option>
                <option value="Cold Crash" ${type==='Cold Crash'?'selected':''}>Cold Crash</option>
                <option value="Carbonation" ${type==='Carbonation'?'selected':''}>Carbonation</option>
            </select>
        </td>
        <td><input type="number" step="0.1" class="fs-temp" value="${temp}"></td>
        <td><input type="number" step="1" class="fs-time" value="${time}"></td>
        <td><button class="btn-remove" onclick="this.closest('tr').remove()">X</button></td>
    `;
    tbody.appendChild(row);
}

// --- LIVE CALCULATIONS ---

function recalc() {
    // 1. Get Settings
    const batchVol = parseFloat(document.getElementById('buildBatchSize').value) || 20;
    const efficiency = parseFloat(document.getElementById('buildEff').value) || 75;
    const boilTime = parseFloat(document.getElementById('buildBoilTime').value) || 60;
    const attenuation = parseFloat(document.getElementById('buildYeastAtt').value) || 75;

    // 2. Calculate OG & Color
    let totalPoints = 0;
    let mcuTotal = 0;

    document.querySelectorAll('#buildGrainList tr').forEach(row => {
        const kg = parseFloat(row.querySelector('.f-amt').value) || 0;
        const ebc = parseFloat(row.querySelector('.f-color').value) || 0;
        const pot = parseFloat(row.querySelector('.f-pot').value) || 1.000;

        // OG Calc: (Potential - 1) * 1000 * kg * 8.345 (Metric conversion factor)
        // Note: 8.345 converts "PPG" logic to "Liter Degrees per Kg" roughly. 
        // More precise: 1 kg sucrose in 1L = ~384 points. 
        // Let's use standard logic: Points = (Pot-1)*1000.  TotalPoints = Points * Kg.
        // We need to convert the SG potential (usually based on 1lb/1gal) to metric.
        // Factor is ~8.345.
        const pointsPerKg = (pot - 1) * 1000 * 8.345;
        totalPoints += (pointsPerKg * kg);

        // Color Calc (Morey): MCU = (Weight_kg * Color_EBC) / Vol_L * 4.23 (Conversion factor roughly)
        // Simplified Metric formula for EBC: EBC = 2.939 * (MCU_metric ^ 0.6859) 
        // Where MCU_metric = (Color_EBC * Weight_kg) / Vol_L
        if(batchVol > 0) {
            mcuTotal += (ebc * kg) / batchVol;
        }
    });

    // Apply Efficiency to OG
    const ogPoints = (totalPoints * (efficiency/100)) / batchVol;
    const og = 1 + (ogPoints / 1000);

    // Calculate EBC
    // Morey Equation adapted for EBC: EBC = 2.9396 * (MCU ^ 0.6859)
    const totalEBC = 2.9396 * Math.pow(mcuTotal, 0.6859);
    
    // Update Stats
    document.getElementById('liveOG').textContent = og.toFixed(3);
    document.getElementById('liveColor').textContent = totalEBC.toFixed(1);
    
    // Update Color Preview Box
    const srm = totalEBC * 0.508;
    const rgb = srmToRgb(srm);
    document.getElementById('liveColorPreview').style.backgroundColor = rgb;

    // 3. Calculate IBU (Tinseth)
    let totalIBU = 0;
    // Estimated Boil Gravity (simplification: assume boil vol is BatchVol + 15%)
    const boilVol = batchVol * 1.15; 
    const boilGrav = 1 + ((ogPoints / 1000) * (batchVol/boilVol));

    document.querySelectorAll('#buildHopList tr').forEach(row => {
        const g = parseFloat(row.querySelector('.h-amt').value) || 0;
        const alpha = parseFloat(row.querySelector('.h-alpha').value) || 0;
        const time = parseFloat(row.querySelector('.h-time').value) || 0;
        const use = row.querySelector('.h-use').value;

        if (use === 'Boil') {
            const ibu = calcTinseth(g, alpha, time, boilGrav, batchVol);
            totalIBU += ibu;
        }
    });
    document.getElementById('liveIBU').textContent = Math.round(totalIBU);

    // 4. Calculate FG & ABV
    const fg = 1 + ((og - 1) * (1 - (attenuation/100)));
    const abv = (og - fg) * 131.25;

    document.getElementById('liveFG').textContent = fg.toFixed(3);
    document.getElementById('liveABV').textContent = abv.toFixed(1) + '%';
}

// --- MATH HELPERS ---

function calcTinseth(grams, alpha, time, boilGravity, batchVol) {
    const mgAlpha = (alpha / 100) * grams * 1000;
    const bignessFactor = 1.65 * Math.pow(0.000125, boilGravity - 1);
    const boilTimeFactor = (1 - Math.exp(-0.04 * time)) / 4.15;
    const utilization = bignessFactor * boilTimeFactor;
    // Tinseth is usually for Gallons. For Liters, we divide by Volume but don't need the 3.785 conversion if mgAlpha is correct.
    // Standard metric Tinseth: IBU = Utilization * (mgAlpha / BatchVol_Liters)
    return utilization * (mgAlpha / batchVol);
}

function srmToRgb(srm) {
    // Simple approximation for visual feedback
    const r = Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm))));
    const g = Math.round(Math.min(255, Math.max(0, 245 * Math.pow(0.88, srm))));
    const b = Math.round(Math.min(255, Math.max(0, 220 * Math.pow(0.7, srm))));
    return `rgb(${r},${g},${b})`;
}

function saveBuiltRecipe() {

    const styleSelect = document.getElementById('buildStyle');
    const selectedOption = styleSelect.options[styleSelect.selectedIndex];

    // 1. Construct the base object
    const recipe = {
        _type: "recipe",
        name: document.getElementById('buildName').value,
        author: document.getElementById('buildAuthor').value,
        
        // NEW: Save both Name and ID
        style: { 
            name: selectedOption.getAttribute('data-name') || "Unknown Style",
            styleGuide: "Brewers Association",
            styleId: selectedOption.value // This is the anchor ID (e.g., "941")
        },
        
        batchSize: parseFloat(document.getElementById('buildBatchSize').value),
        efficiency: parseFloat(document.getElementById('buildEff').value),
        boilTime: parseFloat(document.getElementById('buildBoilTime').value),
        og: parseFloat(document.getElementById('liveOG').textContent),
        fg: parseFloat(document.getElementById('liveFG').textContent),
        abv: parseFloat(document.getElementById('liveABV').textContent),
        ibu: parseFloat(document.getElementById('liveIBU').textContent),
        color: parseFloat(document.getElementById('liveColor').textContent),
        fermentables: [],
        hops: [],
        miscs: [],
        mash: { steps: [] },
        fermentation: { steps: [] },
        yeasts: [{
            name: document.getElementById('buildYeastName').value,
            attenuation: parseFloat(document.getElementById('buildYeastAtt').value)
        }]
    };

    // 2. Gather Fermentables
    document.querySelectorAll('#buildGrainList tr').forEach(row => {
         recipe.fermentables.push({
            amount: parseFloat(row.querySelector('.f-amt').value),
            name: row.querySelector('.f-name').value,
            color: parseFloat(row.querySelector('.f-color').value),
            potential: parseFloat(row.querySelector('.f-pot').value),
            type: "Grain"
        });
    });

    // Gather Hops
    document.querySelectorAll('#buildHopList tr').forEach(row => {
        recipe.hops.push({
            amount: parseFloat(row.querySelector('.h-amt').value),
            name: row.querySelector('.h-name').value,
            alpha: parseFloat(row.querySelector('.h-alpha').value),
            time: parseFloat(row.querySelector('.h-time').value),
            use: row.querySelector('.h-use').value
        });
    });

    // 3. Gather Miscs (NEW)
    document.querySelectorAll('#buildMiscList tr').forEach(row => {
        recipe.miscs.push({
            amount: parseFloat(row.querySelector('.m-amt').value),
            unit: row.querySelector('.m-unit').value,
            name: row.querySelector('.m-name').value,
            type: row.querySelector('.m-type').value,
            use: row.querySelector('.m-use').value
        });
    });

    // 4. Gather Mash Steps (NEW)
    document.querySelectorAll('#buildMashList tr').forEach(row => {
        recipe.mash.steps.push({
            name: row.querySelector('.ms-name').value,
            stepTemp: parseFloat(row.querySelector('.ms-temp').value),
            stepTime: parseFloat(row.querySelector('.ms-time').value),
            type: "Temperature"
        });
    });

    // 5. Gather Fermentation Steps (NEW)
    document.querySelectorAll('#buildFermStepList tr').forEach(row => {
        recipe.fermentation.steps.push({
            type: row.querySelector('.fs-type').value,
            stepTemp: parseFloat(row.querySelector('.fs-temp').value),
            stepTime: parseFloat(row.querySelector('.fs-time').value)
        });
    });

    // Save Logic (Trigger Download)
    const dataStr = JSON.stringify(recipe, null, 2);
    const fileName = `${recipe.name.replace(/\s+/g,'_')}.beerjson`;
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Optional: Load this recipe immediately into the viewer
    currentBeerData = recipe;
    renderBeer(recipe);
    cancelBuilder();
    document.getElementById('dashboard').style.display = 'block';
}
