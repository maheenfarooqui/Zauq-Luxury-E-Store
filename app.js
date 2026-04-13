// ...................for home
var heroImg = document.getElementById("mainHeroImg");
var footerEl = document.getElementById("footer");
var displayHero = document.getElementById("displayHero");
var offCanvasEl = document.getElementById("zauqSidebar");
var index = 0;
var isPaused = false;
var imgArr = [
  "assets/11.png",
  "assets/22.png",
  "assets/33.png",
  "assets/44.png",
  "assets/66.png",
  "assets/77.png",
  "assets/88.png",
  "assets/99.png",
];

function nextImg() {
  if (isPaused) {
    return;
  }
  if (index === 8) {
    index = 0;
  } else {
    index++;
  }

  updateDisplay();
}
function previous() {
  if (index === 0) {
    index = 8;
  } else {
    index--;
  }
  updateDisplay();
}

function updateDisplay() {
  
  if (index <= 7) {
    heroImg.classList.remove("slide-in-top");
    displayHero.style.display = "block";
    footerEl.style.display = "none";

    heroImg.src = imgArr[index];
    setTimeout(() => {
      heroImg.classList.add("slide-in-top");
    }, 10);
    var allBullets = document.querySelectorAll(".bullet");
    allBullets.forEach(function (btn) {
      btn.classList.remove("active");
    });
    allBullets[index].classList.add("active");
  } else {
    footerEl.style.display = "block";
    displayHero.style.display = "none";
  }
}

setInterval(() => {
  nextImg();
}, 3000);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    nextImg();
  } else if (e.key === "ArrowUp") {
    previous();
  }
});
footerEl.addEventListener("mouseenter", () => {
  isPaused = true;
});
footerEl.addEventListener("mouseleave", () => {
  isPaused = false;
});
offCanvasEl.addEventListener("show.bs.offcanvas", () => {
  isPaused = true;
});
offCanvasEl.addEventListener("hidden.bs.offcanvas", () => {
  isPaused = false;
});
function home() {
  document.getElementById("zauq-main").style.display = "block";
  document.getElementById("productDisplay").style.display = "none";
  document.getElementById("searchContainer").style.display = "none";
  document.getElementById("productCardDetails").style.display = "none";
}

// ............................. for search

function searchdisplay() {
  document.getElementById("zauq-main").style.display = "none";
  document.getElementById("productDisplay").style.display = "none";
  document.getElementById("searchContainer").style.display = "block";
  document.getElementById("zauqText").innerHTML=`<p class="text-muted italic opacity-50 text-center">
            Select a category or collection to discover Zauq.
          </p>`
  showcatogeryInput();
}
var categoryFilter = document.getElementById("categoryFilter");
var collectionFilter = document.getElementById("collectionFilter");
function showcatogeryInput() {
  categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
  for (var cat in allProducts) {
    
    
    categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
    
  }
   
}

categoryFilter.addEventListener("change", function () {
 
  
  collectionFilter.innerHTML = `<option value="all">All Collections</option>`;
  for (var item in allProducts[categoryFilter.value]) {
    collectionFilter.innerHTML += `<option value="${item}">${item}</option>`;
  }
});

function startSearch() {
  var selectCat = categoryFilter.value;
  var selectCol = collectionFilter.value;
  collectionFilter.innerHTML = `<option value="all">All Collections</option>`;
  categoryFilter.innerHTML =`<option value="all">All Collections</option>`;
  document.getElementById("circleNAve").style.display="none"
  document.getElementById("zauqText").innerHTML =`<h4 class="section-heading mb-0 text-center" id="catHeading">${selectCat} ${selectCol} COLLECTION</h4>`
  document.getElementById("productContainer").innerHTML = "";
  if (selectCat === "all") {
    renderProduct(allProducts);
  } else if (selectCol === "all") {
    renderProduct(allProducts[selectCat]);
  } else {
    renderProduct(allProducts[selectCat][selectCol]);
  }
  showcatogeryInput();
  document.getElementById("productDisplay").style.display = "block";
  
  
}

// ............................. for product

var allProducts = {
  chikankari: {
    "3pc suit": [
      {
        articleName: "PLAIN CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR ",
        price: "Rs 7500",
        image: "assets/3pc1.webp",
        image2: "assets/3pc2.webp",
        new: "SALE 10% OF",
        salePrice: "Rs 3000",
      },
      {
        articleName: "PLAIN CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 8000",
        image: "assets/3pc3.webp",
        image2: "assets/3pc4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "PLAIN CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 8000",
        image: "assets/3pc5.webp",
        image2: "assets/3pc6.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "CASUAL CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR ",
        price: "Rs 7800",
        image: "assets/3pc7.webp",
        image2: "assets/3pc8.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "CASUAL CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 8000",
        image: "assets/3pc9.webp",
        image2: "assets/3pc10.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s1.webp",
        image2: "assets/s2.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "CASUAL CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 8000",
        image: "assets/3pc11.webp",
        image2: "assets/3pc12.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "LUXURY CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR ",
        price: "Rs 9500",
        image: "assets/3pc13.webp",
        image2: "assets/3pc14.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "LUXURY CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 10000",
        image: "assets/3pc15.webp",
        image2: "assets/3pc16.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "LUXURY CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 10000",
        image: "assets/3pc18.webp",
        image2: "assets/3pc19.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    cambric: [
      {
        articleName: "LUXURY CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHALWAR",
        price: "Rs 10000",
        image: "assets/3pc15.webp",
        image2: "assets/3pc16.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Shirt Shalwar",
        description: "Shirt Shalwar - COTTON",
        price: "Rs 4000",
        image: "assets/c1.webp",
        image2: "assets/c2.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "Shirt Dupatta",
        description: "Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c17.webp",
        image2: "assets/c18.webp",
        new: "NEW",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Shirt Shalwar Dupatta - COTTON",
        price: "Rs 5000",
        image: "assets/c3.webp",
        image2: "assets/c4.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Dupatta",
        description: "Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c15.webp",
        image2: "assets/c16.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Dupatta",
        description: "Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c13.webp",
        image2: "assets/c14.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Dupatta",
        description: "Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c9.webp",
        image2: "assets/c10.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Dupatta",
        description: "Embroidered Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c5.webp",
        image2: "assets/c6.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Shalwar",
        description: "Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c11.webp",
        image2: "assets/c12.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Dupatta",
        description: "Embroidered Shirt Dupatta - COTTON",
        price: "Rs 4500",
        image: "assets/c7.webp",
        image2: "assets/c8.webp",
        new: "NEW",
      },
    ],
    essential: [
      {
        articleName: "PLAIN CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3000",
        image: "assets/2pc1.webp",
        image2: "assets/2pc2.jpg",
        new: "SALE 10% OF",
        salePrice: "Rs 3000",
      },
      {
        articleName: "Shirt Shalwar Dupatta ",
        description: "Essential Summer Unstitched",
        price: "Rs 3500",
        image: "assets/e1.webp",
        image2: "assets/e2.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "Shirt Shalwar Dupatta ",
        description: "Essential Summer Unstitched",
        price: "Rs 4000",
        image: "assets/e3.webp",
        image2: "assets/e4.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Shalwar Dupatta ",
        description: "Essential Summer Unstitched",
        price: "Rs 4000",
        image: "assets/e5.webp",
        image2: "assets/e6.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Shalwar Dupatta ",
        description: "Essential Summer Unstitched",
        price: "Rs 4000",
        image: "assets/e7.webp",
        image2: "assets/e7.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Shalwar Dupatta ",
        description: "Essential Summer Unstitched",
        price: "Rs 4000",
        image: "assets/e8.webp",
        image2: "assets/e9.webp",
        new: "NEW",
      },
      {
        articleName: "Shirt Shalwar Dupatta ",
        description: "Essential Summer Unstitched",
        price: "Rs 4000",
        image: "assets/e10.webp",
        image2: "assets/e11.webp",
        new: "NEW",
      },
    ],
    signature: [
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s1.webp",
        image2: "assets/s2.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s3.webp",
        image2: "assets/s4.webp",
        new: "SOLD OUT",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s5.webp",
        image2: "assets/s6.webp",
        new: "NEW",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s7.webp",
        image2: "assets/s8.webp",
        new: "NEW",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s9.webp",
        image2: "assets/s10.webp",
        new: "NEW",
      },
      {
        articleName: "Embroidered Shirt Shalwar Dupatta",
        description: "Embroidered Unstitched",
        price: "Rs 4500",
        image: "assets/s11.webp",
        image2: "assets/s12.webp",
        new: "NEW",
      },
    ],

    "2pc suit": [
      {
        articleName: "PLAIN CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3000",
        image: "assets/2pc1.webp",
        image2: "assets/2pc2.jpg",
        new: "SALE 10% OF",
        salePrice: "Rs 3000",
      },
      {
        articleName: "PLAIN CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3500",
        image: "assets/2pc3.jpg",
        image2: "assets/2pc4.jpg",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "PLAIN CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3500",
        image: "assets/2pc5.webp",
        image2: "assets/2pc6.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "CASUAL CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3000",
        image: "assets/2pc7.webp",
        image2: "assets/2pc8.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "CASUAL CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3500",
        image: "assets/2pc9.webp",
        image2: "assets/2pc10.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "CASUAL CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 3500",
        image: "assets/2pc11.webp",
        image2: "assets/2pc111.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "LUXURY CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 8000",
        image: "assets/2pc12.webp",
        image2: "assets/2pc13.webp",
        new: "SALE 10% OF",
      },
      {
        articleName: "LUXURY CHIKANKARI - 3PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 8500",
        image: "assets/2pc14.webp",
        image2: "assets/2pc15.webp",
        new: "new",
      },
      {
        articleName: "LUXURY CHIKANKARI - 2PC",
        description: "UNSTITCHED DUPATTA & SHIRT",
        price: "Rs 8500",
        image: "assets/2pc16.webp",
        image2: "assets/2pc17.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    dupatta: [
      {
        articleName: "PLAIN CHIKANKARI - DUPATTA",
        description: "CHIKANKARI DUPATTA",
        price: "Rs 2500",
        image: "assets/d2.jpg",
        image2: "assets/d2.jpg",
        new: "SALE 10% OF",
      },
      {
        articleName: "CHIKANKARI - DUPATTA",
        description: "CHIKANKARI DUPATTA",
        price: "Rs 3000",
        image: "assets/d4.jpg",
        image2: "assets/d4.jpg",
        new: "NEW",
      },
      {
        articleName: "CHIKANKARI - DUPATTA",
        description: "CHIKANKARI DUPATTA",
        price: "Rs 2800",
        image: "assets/d2.jpg",
        image2: "assets/d2.jpg",
        new: "SALE 10% OF",
      },
      {
        articleName: "CHIKANKARI - DUPATTA",
        description: "CHIKANKARI DUPATTA",
        price: "Rs 2800",
        image: "assets/d2.jpg",
        image2: "assets/d2.jpg",
        new: "NEW",
      },
      {
        articleName: "CHIKANKARI - DUPATTA",
        description: "CHIKANKARI DUPATTA",
        price: "Rs 3800",
        image: "assets/d4.jpg",
        image2: "assets/d4.jpg",
        new: "SALE 10% OF",
      },
      {
        articleName: "CHIKANKARI - DUPATTA",
        description: "CHIKANKARI DUPATTA",
        price: "Rs 4000",
        image: "assets/d2.jpg",
        image2: "assets/d2.jpg",
        new: "NEW",
      },
    ],
  },
  signature: {
    tunic: [
      {
        articleName: "Fusion Tunic",
        description: "Modern Cut Tunic Top",
        price: "Rs 2,490",
        image: "assets/td1.webp",
        image2: "assets/td1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Boho Chic Tunic",
        description: "Embroidered Signature Tunic",
        price: "Rs 3,500",
        image: "assets/td2.webp",
        image2: "assets/td2.webp",
        new: "TRENDING",
        salePrice: "",
      },
      {
        articleName: "Urban Tunic",
        description: "Ready to Wear Fusion",
        price: "Rs 2,190",
        image: "assets/td3.webp",
        image2: "assets/td3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Pastel Tunic",
        description: "Summer Breeze Tunic",
        price: "Rs 1,990",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "SALE",
        salePrice: "Rs 1,500",
      },
    ],
    essential: [
      {
        articleName: "Signature Basic",
        description: "High Quality Dyed Shirt",
        price: "Rs 2,800",
        image: "assets/sig1.webp",
        image2: "assets/sig1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Solid Signature",
        description: "Ready to Wear Essential",
        price: "Rs 2,500",
        image: "assets/sig2.webp",
        image2: "assets/sig2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Premium Essential",
        description: "Fine Cotton Dyed Shirt",
        price: "Rs 3,100",
        image: "assets/sig3.webp",
        image2: "assets/sig3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Classic Black",
        description: "Signature Black Series",
        price: "Rs 2,900",
        image: "assets/sig4.webp",
        image2: "assets/sig4.webp",
        new: "SALE",
        salePrice: "Rs 2,400",
      },
      {
        articleName: "Pure White",
        description: "Essential Signature Lawn",
        price: "Rs 2,800",
        image: "assets/sig5.webp",
        image2: "assets/sig5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Navy Blue Solid",
        description: "Dyed Signature Collection",
        price: "Rs 2,600",
        image: "assets/sig6.webp",
        image2: "assets/sig6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    signature: [
      {
        articleName: "Masterpiece - 3PC",
        description: "Signature Luxury Embroidered",
        price: "Rs 7,500",
        image: "assets/luxu.webp",
        image2: "assets/luxu.webp",
        new: "EXQUISITE",
        salePrice: "",
      },
      {
        articleName: "Velvet Royale",
        description: "Luxury Velvet Signature",
        price: "Rs 9,000",
        image: "assets/luxu1.webp",
        image2: "assets/luxu1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Silk Route",
        description: "Pure Silk Signature Suit",
        price: "Rs 12,000",
        image: "assets/luxu4.webp",
        image2: "assets/luxu4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chiffon Dream",
        description: "3PC Signature Chiffon",
        price: "Rs 8,500",
        image: "assets/luxu5.webp",
        image2: "assets/luxu5.webp",
        new: "SALE",
        salePrice: "Rs 7,000",
      },
      {
        articleName: "Organza Luxe",
        description: "Signature Organza Collection",
        price: "Rs 9,500",
        image: "assets/s3.webp",
        image2: "assets/s4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Heritage Gold",
        description: "Limited Edition Signature",
        price: "Rs 11,000",
        image: "assets/s1.webp",
        image2: "assets/s2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "2pc suit": [
      {
        articleName: "Polka Dot - 2PC",
        description: "Printed Shirt & Trouser",
        price: "Rs 3,100",
        image: "assets/2pc1.webp",
        image2: "assets/2pc1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Zig Zag - 2PC",
        description: "Contemporary 2PC Set",
        price: "Rs 2,900",
        image: "assets/2pc12.webp",
        image2: "assets/2pc13.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Striped Chic",
        description: "Modern Stitched 2PC",
        price: "Rs 3,500",
        image: "assets/2pc11.webp",
        image2: "assets/2pc11.webp",
        new: "SALE",
        salePrice: "Rs 3,000",
      },
      {
        articleName: "Floral Duo",
        description: "Signature 2PC Printed",
        price: "Rs 3,200",
        image: "assets/2pc5.webp",
        image2: "assets/2pc6.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Abstract Set",
        description: "Artistic Ready to Wear",
        price: "Rs 3,800",
        image: "assets/2pc7.webp",
        image2: "assets/2pc8.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Solid Maroon",
        description: "Classy Stitched 2PC",
        price: "Rs 3,400",
        image: "assets/2pc9.webp",
        image2: "assets/2pc10.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "3pc suit": [
      {
        articleName: "Gardenia - 3PC",
        description: "Stitched Shirt, Dupatta, Trouser",
        price: "Rs 5,500",
        image: "assets/3pc1.webp",
        image2: "assets/3pc2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Mosaic Print",
        description: "Ready to Wear 3PC",
        price: "Rs 5,800",
        image: "assets/3pc3.webp",
        image2: "assets/3pc4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Crimson Flora",
        description: "Designer Stitched 3PC",
        price: "Rs 6,200",
        image: "assets/3pc5.webp",
        image2: "assets/3pc6.webp",
        new: "SALE",
        salePrice: "Rs 5,500",
      },
      {
        articleName: "Indigo Essence",
        description: "Ready to Wear Suite",
        price: "Rs 5,900",
        image: "assets/3pc7.webp",
        image2: "assets/3pc8.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Onyx Black - 3PC",
        description: "Signature Stitched Collection",
        price: "Rs 6,500",
        image: "assets/3pc9.webp",
        image2: "assets/3pc10.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Sky Bloom",
        description: "Embroidered 3PC Ready to Wear",
        price: "Rs 7,200",
        image: "assets/3pc11.webp",
        image2: "assets/3pc12.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    luxury: [
      {
        articleName: "Royal Velvet",
        description: "Luxury Ready to Wear Velvet",
        price: "Rs 12,500",
        image: "assets/luxu.webp",
        image2: "assets/luxu.webp",
        new: "LUXE",
        salePrice: "",
      },
      {
        articleName: "Silk Elegance",
        description: "Ready to Wear Pure Silk",
        price: "Rs 15,000",
        image: "assets/luxu1.webp",
        image2: "assets/luxu1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Embroidered Organza",
        description: "Luxury Stitched Suit",
        price: "Rs 14,000",
        image: "assets/luxu2.webp",
        image2: "assets/luxu2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chiffon Royale",
        description: "Luxury Party Wear",
        price: "Rs 11,500",
        image: "assets/luxu3.webp",
        image2: "assets/luxu3.webp",
        new: "SALE",
        salePrice: "Rs 9,990",
      },
      {
        articleName: "Golden Mesh",
        description: "Premium Luxury Ready to Wear",
        price: "Rs 13,800",
        image: "assets/luxu4.webp",
        image2: "assets/luxu4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Midnight Shimmer",
        description: "Formal Luxury Collection",
        price: "Rs 16,500",
        image: "assets/luxu5.webp",
        image2: "assets/luxu5.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
  },
  designer: {
    luxury: [
      {
        articleName: "Designer Luxe 1",
        description: "Limited Edition Designer Wear",
        price: "Rs 18,000",
        image: "assets/luxu.webp",
        image2: "assets/luxu.webp",
        new: "EXCLUSIVE",
        salePrice: "",
      },
      {
        articleName: "Artisanal Silk",
        description: "Handcrafted Designer Suit",
        price: "Rs 22,000",
        image: "assets/luxu5.webp",
        image2: "assets/luxu5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Velvet Couture",
        description: "High-End Designer Velvet",
        price: "Rs 25,000",
        image: "assets/luxu1.webp",
        image2: "assets/luxu1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Embellished Organza",
        description: "Designer Party Wear",
        price: "Rs 20,000",
        image: "assets/luxu2.webp",
        image2: "assets/luxu2.webp",
        new: "SALE",
        salePrice: "Rs 17,500",
      },
      {
        articleName: "Chiffon Masterpiece",
        description: "Designer Luxury Series",
        price: "Rs 19,500",
        image: "assets/luxu3.webp",
        image2: "assets/luxu3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Heirloom Gold",
        description: "Pure Luxury Designer Wear",
        price: "Rs 28,000",
        image: "assets/luxu4.webp",
        image2: "assets/luxu4.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    essential: [
      {
        articleName: "Designer Basic",
        description: "Signature Cut Essential",
        price: "Rs 4,500",
        image: "assets/sig1.webp",
        image2: "assets/sig1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Daily Designer",
        description: "Everyday Luxury Wear",
        price: "Rs 3,800",
        image: "assets/sig2.webp",
        image2: "assets/sig2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Modern Minimalist",
        description: "Designer Essential Shirt",
        price: "Rs 4,200",
        image: "assets/sig3.webp",
        image2: "assets/sig3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Classic Navy Designer",
        description: "Dyed Essential Collection",
        price: "Rs 3,900",
        image: "assets/sig4.webp",
        image2: "assets/sig4.webp",
        new: "SALE",
        salePrice: "Rs 3,200",
      },
      {
        articleName: "Pearl Designer Basic",
        description: "Elegant Daily Wear",
        price: "Rs 4,800",
        image: "assets/sig5.webp",
        image2: "assets/sig5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Charcoal Essential",
        description: "Sophisticated Designer Cut",
        price: "Rs 4,100",
        image: "assets/sig6.webp",
        image2: "assets/sig6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    signature: [
      {
        articleName: "Designer Signature 1",
        description: "Unique Designer Elements",
        price: "Rs 8,500",
        image: "assets/s1.webp",
        image2: "assets/s2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Artistic Signature",
        description: "Modern Designer Twist",
        price: "Rs 9,200",
        image: "assets/s3.webp",
        image2: "assets/s4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Heritage Signature",
        description: "Classic Designer Appeal",
        price: "Rs 10,500",
        image: "assets/s5.webp",
        image2: "assets/s6.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Midnight Signature",
        description: "Formal Designer Series",
        price: "Rs 11,000",
        image: "assets/s7.webp",
        image2: "assets/s8.webp",
        new: "SALE",
        salePrice: "Rs 8,900",
      },
      {
        articleName: "Ivory Designer Piece",
        description: "Exclusive Signature Embroidery",
        price: "Rs 9,800",
        image: "assets/s9.webp",
        image2: "assets/s10.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Vibrant Designer Set",
        description: "Bold Signature Collection",
        price: "Rs 8,900",
        image: "assets/s11.webp",
        image2: "assets/s11.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    shawls: [
      {
        articleName: "Pashmina Shawl",
        description: "Soft Woolen Pashmina",
        price: "Rs 5,500",
        image: "assets/sh1.webp",
        image2: "assets/sh1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Velvet Embroidered Shawl",
        description: "Luxury Evening Shawl",
        price: "Rs 8,500",
        image: "assets/sh2.webp",
        image2: "assets/sh2.webp",
        new: "HOT",
        salePrice: "",
      },
      {
        articleName: "Digital Printed Shawl",
        description: "Contemporary Winter Accessory",
        price: "Rs 3,200",
        image: "assets/sh3.webp",
        image2: "assets/sh3.webp",
        new: "NEW",
        salePrice: "",
      },
       {
        articleName: "Pashmina Shawl",
        description: "Soft Woolen Pashmina",
        price: "Rs 5,500",
        image: "assets/sh1.webp",
        image2: "assets/sh1.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
  },
  tankTop: {
    tops: [
      {
        articleName: "Lace Top",
        description: "Elegant Floral Lace Top",
        price: "Rs 2,800",
        image: "assets/t1.webp",
        image2: "assets/t1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Bow Tie Top",
        description: "Formal Office Wear Top",
        price: "Rs 3,200",
        image: "assets/t2.webp",
        image2: "assets/t2.webp",
        new: "HOT",
        salePrice: "",
      },
      {
        articleName: "V-Neck Blouse",
        description: "Satin Finish Blouse",
        price: "Rs 2,500",
        image: "assets/t3.webp",
        image2: "assets/t3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Striped Blouse",
        description: "Modern Striped Top",
        price: "Rs 1,900",
        image: "assets/t1.webp",
        image2: "assets/t1.webp",
        new: "SALE",
        salePrice: "Rs 1,500",
      },
      {
        articleName: "Buttoned Top",
        description: "Casual Cotton Shirt Top",
        price: "Rs 2,100",
        image: "assets/t2.webp",
        image2: "assets/t2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Floral Blouse",
        description: "Spring Collection Top",
        price: "Rs 2,700",
        image: "assets/t3.webp",
        image2: "assets/t3.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    dresses: [
      {
        articleName: "Sun Dress",
        description: "Light Cotton Sun Dress",
        price: "Rs 3,200",
        image: "assets/td1.webp",
        image2: "assets/td1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Shift Dress",
        description: "Modern Shift Style Dress",
        price: "Rs 3,800",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Evening Dress",
        description: "Formal Black Evening Dress",
        price: "Rs 5,500",
        image: "assets/td2.webp",
        image2: "assets/td2.webp",
        new: "LUXE",
        salePrice: "",
      },
      {
        articleName: "Knit Dress",
        description: "Comfort Fit Knit Wear",
        price: "Rs 4,200",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "SALE",
        salePrice: "Rs 3,500",
      },
      {
        articleName: "Mini Dress",
        description: "Trendy Mini Party Dress",
        price: "Rs 3,900",
        image: "assets/td1.webp",
        image2: "assets/td1.webp",
        salePrice: "",
      },
      {
        articleName: "Empire Dress",
        description: "High Waist Empire Cut",
        price: "Rs 4,800",
        image: "assets/td3.webp",
        image2: "assets/td3.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "t-shirt": [
      {
        articleName: "Plain White Tee",
        description: "100% Cotton Crew Neck",
        price: "Rs 850",
        image: "assets/ts1.webp",
        image2: "assets/ts1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Grey Melange Tee",
        description: "Comfort Fit T-Shirt",
        price: "Rs 950",
        image: "assets/ts2.webp",
        image2: "assets/ts2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Maroon Tee",
        description: "Premium Cotton Tee",
        price: "Rs 1,050",
        image: "assets/ts3.webp",
        image2: "assets/ts3.webp",
        new: "BEST",
        salePrice: "",
      },
      {
        articleName: "Navy Stripe Tee",
        description: "Casual Striped Design",
        price: "Rs 1,150",
        image: "assets/ts4.webp",
        image2: "assets/ts4.webp",
        new: "SALE",
        salePrice: "Rs 900",
      },
      {
        articleName: "Black Solid Tee",
        description: "Essential Wardrobe Basic",
        price: "Rs 850",
        image: "assets/ts5.webp",
        image2: "assets/ts5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Olive Green Tee",
        description: "Cotton Rich Casual Tee",
        price: "Rs 990",
        image: "assets/ts2.webp",
        image2: "assets/ts2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "cor-ord sets": [
      {
        articleName: "Linen Co-ord",
        description: "Summer Matching Linen Set",
        price: "Rs 4,500",
        image: "assets/cor1.webp",
        image2: "assets/cor1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Satin Lounge Set",
        description: "Luxury Feel Co-ord",
        price: "Rs 5,800",
        image: "assets/cor2.webp",
        image2: "assets/cor2.webp",
        new: "LUXE",
        salePrice: "",
      },
      {
        articleName: "Printed Set",
        description: "Modern Abstract Co-ord",
        price: "Rs 3,900",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Velvet Co-ord",
        description: "Winter Party Set",
        price: "Rs 7,500",
        image: "assets/cor4.webp",
        image2: "assets/cor4.webp",
        new: "SALE",
        salePrice: "Rs 6,200",
      },
      {
        articleName: "Denim Co-ord",
        description: "Casual Jean Style Set",
        price: "Rs 5,200",
        image: "assets/cor5.webp",
        image2: "assets/cor5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Pastel Set",
        description: "Ready to Wear Co-ord",
        price: "Rs 3,500",
        image: "assets/cor6.webp",
        image2: "assets/cor6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],

    bottoms: [
      {
        articleName: "Pencil Skirt",
        description: "Formal Office Skirt",
        price: "Rs 2,500",
        image: "assets/bt1.webp",
        image2: "assets/bt1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Flare Pants",
        description: "Retro Style Flared Bottoms",
        price: "Rs 3,100",
        image: "assets/bt2.webp",
        image2: "assets/bt2.webp",
        new: "TRENDY",
        salePrice: "",
      },
      {
        articleName: "Tapered Trousers",
        description: "Smart Fit Casual Pants",
        price: "Rs 2,800",
        image: "assets/bt3.webp",
        image2: "assets/bt3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Shorts",
        description: "Cotton Casual Shorts",
        price: "Rs 1,500",
        image: "assets/bt4.webp",
        image2: "assets/bt4.webp",
        new: "SALE",
        salePrice: "Rs 1,200",
      },
      {
        articleName: "Pleated Skirt",
        description: "Midi Length Pleated Skirt",
        price: "Rs 3,500",
        image: "assets/bt1.webp",
        image2: "assets/bt1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chinos",
        description: "Classic Cotton Chinos",
        price: "Rs 2,900",
        image: "assets/bt2.webp",
        image2: "assets/bt2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    dennem: [
      {
        articleName: "Bootcut Jeans",
        description: "Classic Bootcut Denim",
        price: "Rs 3,900",
        image: "assets/denim1.webp",
        image2: "assets/denim1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Slim Fit Denim",
        description: "Premium Stretch Jeans",
        price: "Rs 3,500",
        image: "assets/denim2.webp",
        image2: "assets/denim2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Black Denim",
        description: "Jet Black Skinny Jeans",
        price: "Rs 3,200",
        image: "assets/denim3.webp",
        image2: "assets/denim3.webp",
        new: "BEST",
        salePrice: "",
      },
      {
        articleName: "Wash Blue Jeans",
        description: "Light Wash Summer Denim",
        price: "Rs 3,400",
        image: "assets/denim4.webp",
        image2: "assets/denim4.webp",
        new: "SALE",
        salePrice: "Rs 2,800",
      },
      {
        articleName: "Denim Jacket",
        description: "Classic Blue Trucker Jacket",
        price: "Rs 5,500",
        image: "assets/denim5.webp",
        image2: "assets/denim5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Cropped Denim",
        description: "High-Waist Cropped Jeans",
        price: "Rs 3,100",
        image: "assets/denim6.webp",
        image2: "assets/denim6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
  },
  western: {
    "t-shirt": [
      {
        articleName: "Plain White Tee",
        description: "100% Cotton Crew Neck",
        price: "Rs 850",
        image: "assets/ts1.webp",
        image2: "assets/ts1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Grey Melange Tee",
        description: "Comfort Fit T-Shirt",
        price: "Rs 950",
        image: "assets/ts2.webp",
        image2: "assets/ts2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Maroon Tee",
        description: "Premium Cotton Tee",
        price: "Rs 1,050",
        image: "assets/ts3.webp",
        image2: "assets/ts3.webp",
        new: "BEST",
        salePrice: "",
      },
      {
        articleName: "Navy Stripe Tee",
        description: "Casual Striped Design",
        price: "Rs 1,150",
        image: "assets/ts4.webp",
        image2: "assets/ts4.webp",
        new: "SALE",
        salePrice: "Rs 900",
      },
      {
        articleName: "Black Solid Tee",
        description: "Essential Wardrobe Basic",
        price: "Rs 850",
        image: "assets/ts5.webp",
        image2: "assets/ts5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Olive Green Tee",
        description: "Cotton Rich Casual Tee",
        price: "Rs 990",
        image: "assets/ts2.webp",
        image2: "assets/ts2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "co-ord sets": [
      {
        articleName: "Linen Co-ord",
        description: "Summer Matching Linen Set",
        price: "Rs 4,500",
        image: "assets/cor1.webp",
        image2: "assets/cor1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Satin Lounge Set",
        description: "Luxury Feel Co-ord",
        price: "Rs 5,800",
        image: "assets/cor2.webp",
        image2: "assets/cor2.webp",
        new: "LUXE",
        salePrice: "",
      },
      {
        articleName: "Printed Set",
        description: "Modern Abstract Co-ord",
        price: "Rs 3,900",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Velvet Co-ord",
        description: "Winter Party Set",
        price: "Rs 7,500",
        image: "assets/cor4.webp",
        image2: "assets/cor4.webp",
        new: "SALE",
        salePrice: "Rs 6,200",
      },
      {
        articleName: "Denim Co-ord",
        description: "Casual Jean Style Set",
        price: "Rs 5,200",
        image: "assets/cor5.webp",
        image2: "assets/cor5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Pastel Set",
        description: "Ready to Wear Co-ord",
        price: "Rs 3,500",
        image: "assets/cor6.webp",
        image2: "assets/cor6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    tops: [
      {
        articleName: "Lace Top",
        description: "Elegant Floral Lace Top",
        price: "Rs 2,800",
        image: "assets/t1.webp",
        image2: "assets/t1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Bow Tie Top",
        description: "Formal Office Wear Top",
        price: "Rs 3,200",
        image: "assets/t2.webp",
        image2: "assets/t2.webp",
        new: "HOT",
        salePrice: "",
      },
      {
        articleName: "V-Neck Blouse",
        description: "Satin Finish Blouse",
        price: "Rs 2,500",
        image: "assets/t3.webp",
        image2: "assets/t3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Striped Blouse",
        description: "Modern Striped Top",
        price: "Rs 1,900",
        image: "assets/t1.webp",
        image2: "assets/t1.webp",
        new: "SALE",
        salePrice: "Rs 1,500",
      },
      {
        articleName: "Buttoned Top",
        description: "Casual Cotton Shirt Top",
        price: "Rs 2,100",
        image: "assets/t2.webp",
        image2: "assets/t2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Floral Blouse",
        description: "Spring Collection Top",
        price: "Rs 2,700",
        image: "assets/t3.webp",
        image2: "assets/t3.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    bottoms: [
      {
        articleName: "Pencil Skirt",
        description: "Formal Office Skirt",
        price: "Rs 2,500",
        image: "assets/bt1.webp",
        image2: "assets/bt1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Flare Pants",
        description: "Retro Style Flared Bottoms",
        price: "Rs 3,100",
        image: "assets/bt2.webp",
        image2: "assets/bt2.webp",
        new: "TRENDY",
        salePrice: "",
      },
      {
        articleName: "Tapered Trousers",
        description: "Smart Fit Casual Pants",
        price: "Rs 2,800",
        image: "assets/bt3.webp",
        image2: "assets/bt3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Shorts",
        description: "Cotton Casual Shorts",
        price: "Rs 1,500",
        image: "assets/bt4.webp",
        image2: "assets/bt4.webp",
        new: "SALE",
        salePrice: "Rs 1,200",
      },
      {
        articleName: "Pleated Skirt",
        description: "Midi Length Pleated Skirt",
        price: "Rs 3,500",
        image: "assets/bt1.webp",
        image2: "assets/bt1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chinos",
        description: "Classic Cotton Chinos",
        price: "Rs 2,900",
        image: "assets/bt2.webp",
        image2: "assets/bt2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    dennems: [
      {
        articleName: "Bootcut Jeans",
        description: "Classic Bootcut Denim",
        price: "Rs 3,900",
        image: "assets/denim1.webp",
        image2: "assets/denim1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Slim Fit Denim",
        description: "Premium Stretch Jeans",
        price: "Rs 3,500",
        image: "assets/denim2.webp",
        image2: "assets/denim2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Black Denim",
        description: "Jet Black Skinny Jeans",
        price: "Rs 3,200",
        image: "assets/denim3.webp",
        image2: "assets/denim3.webp",
        new: "BEST",
        salePrice: "",
      },
      {
        articleName: "Wash Blue Jeans",
        description: "Light Wash Summer Denim",
        price: "Rs 3,400",
        image: "assets/denim4.webp",
        image2: "assets/denim4.webp",
        new: "SALE",
        salePrice: "Rs 2,800",
      },
      {
        articleName: "Denim Jacket",
        description: "Classic Blue Trucker Jacket",
        price: "Rs 5,500",
        image: "assets/denim5.webp",
        image2: "assets/denim5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Cropped Denim",
        description: "High-Waist Cropped Jeans",
        price: "Rs 3,100",
        image: "assets/denim6.webp",
        image2: "assets/denim6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    dresses: [
      {
        articleName: "Sun Dress",
        description: "Light Cotton Sun Dress",
        price: "Rs 3,200",
        image: "assets/td1.webp",
        image2: "assets/td1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Shift Dress",
        description: "Modern Shift Style Dress",
        price: "Rs 3,800",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Evening Dress",
        description: "Formal Black Evening Dress",
        price: "Rs 5,500",
        image: "assets/td2.webp",
        image2: "assets/td2.webp",
        new: "LUXE",
        salePrice: "",
      },
      {
        articleName: "Knit Dress",
        description: "Comfort Fit Knit Wear",
        price: "Rs 4,200",
        image: "assets/cor3.webp",
        image2: "assets/cor3.webp",
        new: "SALE",
        salePrice: "Rs 3,500",
      },
      {
        articleName: "Mini Dress",
        description: "Trendy Mini Party Dress",
        price: "Rs 3,900",
        image: "assets/td1.webp",
        image2: "assets/td1.webp",
        salePrice: "",
      },
      {
        articleName: "Empire Dress",
        description: "High Waist Empire Cut",
        price: "Rs 4,800",
        image: "assets/td3.webp",
        image2: "assets/td3.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
  },
  bags: {
    "cross body bag": [
      {
        articleName: "Leatherette Crossbody",
        description: "Stylish Brown Shoulder Bag",
        price: "Rs 3,490",
        image: "assets/bagscr5.webp",
        image2: "assets/bagscr5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chain Strap Mini",
        description: "Evening Party Mini Bag",
        price: "Rs 2,890",
        image: "assets/bagscr4.webp",
        image2: "assets/bagscr4.webp",
        new: "HOT",
        salePrice: "",
      },
      {
        articleName: "Tan Messenger Bag",
        description: "Daily Use Crossbody",
        price: "Rs 3,190",
        image: "assets/bagscr3.webp",
        image2: "assets/bagscr3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Quilted Black Bag",
        description: "Classic Quilted Pattern",
        price: "Rs 3,690",
        image: "assets/bagscr2.webp",
        image2: "assets/bagscr2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Pastel Box Bag",
        description: "Structured Crossbody Bag",
        price: "Rs 2,990",
        image: "assets/bagscr3.webp",
        image2: "assets/bagscr3.webp",
        new: "SALE",
        salePrice: "Rs 2,400",
      },
      {
        articleName: "Modern Sling Bag",
        description: "Minimalist Sling Bag",
        price: "Rs 2,590",
        image: "assets/bagscr4.webp",
        image2: "assets/bagscr4.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "canvas bag": [
      {
        articleName: "Print Tote",
        description: "Canvas Printed Tote Bag",
        price: "Rs 1,500",
        image: "assets/bgs2.webp",
        image2: "assets/bgs2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Daily Canvas",
        description: "Heavy Duty Canvas Bag",
        price: "Rs 1,800",
        image: "assets/bagcr1.webp",
        image2: "assets/bagcr1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Eco Bag",
        description: "Reusable Canvas Bag",
        price: "Rs 990",
        image: "assets/bgs6.webp",
        image2: "assets/bgs6.webp",
        new: "BEST",
        salePrice: "",
      },
      {
        articleName: "Travel Tote",
        description: "Large Canvas Travel Bag",
        price: "Rs 2,500",
        image: "assets/bagst2.webp",
        image2: "assets/bagst2.webp",
        new: "SALE",
        salePrice: "Rs 1,900",
      },
      {
        articleName: "Graphic Canvas",
        description: "Artistic Print Tote",
        price: "Rs 1,650",
        image: "assets/bagscr2.webp",
        image2: "assets/bagscr2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Minimalist Canvas",
        description: "Simple Solid Canvas Bag",
        price: "Rs 1,200",
        image: "assets/bgs2.webp",
        image2: "assets/bgs2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "tote bags": [
      {
        articleName: "Leather Tote",
        description: "Premium Faux Leather Tote",
        price: "Rs 4,500",
        image: "assets/bagst1.webp",
        image2: "assets/bagst1.webp",
        new: "LUXE",
        salePrice: "",
      },
      {
        articleName: "Work Tote",
        description: "Large Professional Tote Bag",
        price: "Rs 5,200",
        image: "assets/bagst2.webp",
        image2: "assets/bagst2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chic Tote",
        description: "Modern Design Handbag",
        price: "Rs 3,800",
        image: "assets/bagst3.webp",
        image2: "assets/bagst3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Buckle Tote",
        description: "Structured Tote with Buckle",
        price: "Rs 4,900",
        image: "assets/bagst4.webp",
        image2: "assets/bagst4.webp",
        new: "SALE",
        salePrice: "Rs 3,900",
      },
      {
        articleName: "Suede Tote",
        description: "Soft Suede Finish Bag",
        price: "Rs 5,500",
        image: "assets/bagst1.webp",
        image2: "assets/bagst1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Pastel Tote",
        description: "Elegant Daily Handbag",
        price: "Rs 4,200",
        image: "assets/bagst2.webp",
        image2: "assets/bagst2.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    "shoulder bags": [
      {
        articleName: "Hobo Bag",
        description: "Relaxed Fit Shoulder Bag",
        price: "Rs 3,500",
        image: "assets/bgs1.jpg",
        image2: "assets/bgs1.jpg",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Classic Shoulder",
        description: "Timeless Shoulder Handbag",
        price: "Rs 4,100",
        image: "assets/bgs2.webp",
        image2: "assets/bgs2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Chain Shoulder",
        description: "Party Wear Handbag",
        price: "Rs 3,200",
        image: "assets/bgs3.webp",
        image2: "assets/bgs3.webp",
        new: "SALE",
        salePrice: "Rs 2,800",
      },
      {
        articleName: "Satchel Bag",
        description: "Structured Shoulder Satchel",
        price: "Rs 4,500",
        image: "assets/bgs4.webp",
        image2: "assets/bgs4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Woven Shoulder",
        description: "Summer Textured Bag",
        price: "Rs 3,800",
        image: "assets/bgs5.webp",
        image2: "assets/bgs5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Vintage Shoulder",
        description: "Retro Look Handbag",
        price: "Rs 4,800",
        image: "assets/bgs6.webp",
        image2: "assets/bgs6.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    wallets: [
      {
        articleName: "Zip Around Wallet",
        description: "Classic Long Wallet",
        price: "Rs 1,800",
        image: "assets/bags1(17).webp",
        image2: "assets/bags1(17).webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Fold Wallet",
        description: "Compact Bi-fold Wallet",
        price: "Rs 1,200",
        image: "assets/bags1(16).webp",
        image2: "assets/bags1(16).webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Clutch Wallet",
        description: "Evening Clutch Style Wallet",
        price: "Rs 2,500",
        image: "assets/bags1(18).webp",
        image2: "assets/bags1(18).webp",
        new: "ELEGANT",
        salePrice: "",
      },
      {
        articleName: "Card Holder",
        description: "Slim Leather Card Holder",
        price: "Rs 850",
        image: "assets/bags1(17).webp",
        image2: "assets/bags1(17).webp",
        new: "SALE",
        salePrice: "Rs 600",
      },
      {
        articleName: "Patterned Wallet",
        description: "Printed Fashion Wallet",
        price: "Rs 1,500",
        image: "assets/bags1(16).webp",
        image2: "assets/bags1(16).webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Coin Purse",
        description: "Mini Leather Coin Purse",
        price: "Rs 990",
        image: "assets/bags1(18).webp",
        image2: "assets/bags1(18).webp",
        new: "NEW",
        salePrice: "",
      },
    ],
  },
  fragrance: {
    "body mist": [
      {
        articleName: "Ocean Breeze Mist",
        description: "Fresh Aquatic Scent 250ml",
        price: "Rs 1,290",
        image: "assets/fra1.webp",
        image2: "assets/fra2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Vanilla Dream",
        description: "Sweet Vanilla Fragrance",
        price: "Rs 1,290",
        image: "assets/fra4.webp",
        image2: "assets/fra5.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Floral Bloom Mist",
        description: "Wild Flower Extract Mist",
        price: "Rs 1,490",
        image: "assets/fra1.webp",
        image2: "assets/fra3.webp",
        new: "BEST",
        salePrice: "",
      },
      {
        articleName: "Citrus Punch",
        description: "Energizing Citrus Mist",
        price: "Rs 1,190",
        image: "assets/fra6.webp",
        image2: "assets/fra4.webp",
        new: "SALE",
        salePrice: "Rs 990",
      },
      {
        articleName: "Velvet Rose",
        description: "Premium Rose Scent Mist",
        price: "Rs 1,590",
        image: "assets/fra2.webp",
        image2: "assets/fra2.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Midnight Jasmine",
        description: "Intense Jasmine Fragrance",
        price: "Rs 1,390",
        image: "assets/fra1.webp",
        image2: "assets/fra1.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
    fragrances: [
      {
        articleName: "Zellbury Signature",
        description: "Premium Eau de Parfum",
        price: "Rs 3,500",
        image: "assets/fraa1.webp",
        image2: "assets/fraa1.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Deep Oud",
        description: "Oriental Woody Fragrance",
        price: "Rs 4,200",
        image: "assets/fraa2.webp",
        image2: "assets/fraa2.webp",
        new: "HOT",
        salePrice: "",
      },
      {
        articleName: "Musk Royale",
        description: "Classic Musk Scent",
        price: "Rs 3,100",
        image: "assets/fraa3.webp",
        image2: "assets/fraa3.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Berry Blast",
        description: "Fruity Fragrance for Her",
        price: "Rs 2,800",
        image: "assets/fraa1.webp",
        image2: "assets/fraa1.webp",
        new: "SALE",
        salePrice: "Rs 2,200",
      },
      {
        articleName: "Amber Nights",
        description: "Intense Evening Fragrance",
        price: "Rs 4,500",
        image: "assets/fraa4.webp",
        image2: "assets/fraa4.webp",
        new: "NEW",
        salePrice: "",
      },
      {
        articleName: "Pink Peony",
        description: "Light Floral Parfum",
        price: "Rs 3,300",
        image: "assets/fraa3.webp",
        image2: "assets/fraa3.webp",
        new: "NEW",
        salePrice: "",
      },
    ],
  },
};

var allfilter = {
  chikankari: {
    cambric: { image: "assets/h11.avif" },
    essential: { image: "assets/h12.webp" },
    signature: { image: "assets/h13.webp" },
    "3pc suit": { image: "assets/h11.webp" },
    "2pc suit": { image: "assets/sh1.webp" },
    dupatta: { image: "assets/h13.webp" },
  },
  signature: {
    luxury: { image: "assets/h13.webp" },
    essential: { image: "assets/h21.webp" },
    signature: { image: "assets/h23.avif" },
    "3pc suit": { image: "assets/h11.webp" },
    "2pc suit": { image: "assets/h12.webp" },
    tunic: { image: "assets/3.webp" },
  },
  designer: {
    essential: { image: "assets/h12.webp" },
    signature: { image: "assets/2.avif" },
    luxury: { image: "assets/luxury.webp" },
    shawls: { image: "assets/shawla.avif" },
  },
  tankTop: {
    tops: { image: "assets/tantop.avif" },
    dresses: { image: "assets/3.webp" },
    "t-shirt": { image: "assets/tshirt.webp" },
    "cor-ord sets": { image: "assets/h23.avif" },
    bottoms: { image: "assets/botm.avif" },
    dennem: { image: "assets/dennem.avif" },
  },
  western: {
    tops: { image: "assets/tantop.avif" },
    dresses: { image: "assets/3.webp" },
    "t-shirts": { image: "assets/tshirt.webp" },
    "cor-ord sets": { image: "assets/h23.avif" },
    bottoms: { image: "assets/botm.avif" },
    dennem: { image: "assets/dennem.avif" },
  },
  bags: {
    "canvas bag": { image: "assets/canva.webp" },
    "cross body bag": { image: "assets/cross.avif" },
    "tote bags": { image: "assets/tote.avif" },
    "shoulder bags": { image: "assets/shoulder.avif" },
    wallets: { image: "assets/wallet.avif" },
  },
  fragrance: {
    "body mist": {
      image: "assets/fra7.webp",
    },
    fragrances: {
      image: "assets/frag.avif",
    },
  },
};
var mainHeading = document.getElementById("catHeading");
var catNavSec = document.getElementById("catNavSec");
function displaycat(displayC) {
  var returnKey = displayC;
  catNavSec.innerHTML = "";
  mainHeading.innerText = returnKey.toUpperCase();
  
  var selectedCat = allfilter[returnKey];

  if (selectedCat) {
    for (var item in selectedCat) {
      var details = selectedCat[item];
      catNavSec.innerHTML += ` <div class="cat-item text-center" onclick="filterProducts('${returnKey}', '${item}')">
              <div class="cat-circle">
                <img src="${details.image}" alt="Unstitched" />
              </div>
              <p class="cat-label">${item}</p>
            </div>`;
    }
  }
}
function renderProduct(obj) {
  if (obj.articleName) {
    renderCard(obj);
    return;
  }
  for (var keys in obj) {
    var details = obj[keys];
    if (details && details.articleName) {
      renderCard(details);
    } else if (details && typeof details === "object") {
      renderProduct(details);
    }
  }
}

function renderCard(details) {
  var productContainer = document.getElementById("productContainer");
  
  
  var cards = ` <div class="col-6 col-md-4 col-lg-3">
      <div class="product-card">
                    <div class="product-image-wrapper">
                  
                        <img src=${details.image} class="product-img primary" alt="Product Name" id="img1">
                        <img src=${details.image2} class="product-img secondary" alt="Product Name Hover" id="img2">
                        
                        <span class="badge-new">${details.new}</span>
                        
                        <button class="btn-quick-add" onclick="showProductDetails(this)">ADD TO BAG</button>
                    </div>
                    
                    <div class="product-details text-center mt-3">
                        <h6 class="product-name">${details.articleName}</h6>
                        <p class="product-category text-muted">${details.description}</p>
                        <div class="product-price">
                            <span class="current-price">${details.price}</span>
                            <span class="old-price text-muted text-decoration-line-through ms-2"></span>
                        </div>
                    </div>
                </div></div>`;
  productContainer.innerHTML += cards;
}

function filterProducts(mainCat, subCat) {
  productContainer.innerHTML = "";

  if (subCat) {
    renderProduct(allProducts[mainCat][subCat]);
  } else {
    renderProduct(allProducts[mainCat]);
  }

  document.getElementById("zauq-main").style.display = "none";
  document.getElementById("productDisplay").style.display = "block";

  displaycat(mainCat);
}
function renderCatagory(catogary) {
   document.getElementById("searchContainer").style.display = "none";
   document.getElementById("productCardDetails").style.display = "none";
  productContainer.innerHTML = "";
  if (allProducts[catogary]) {
    renderProduct(allProducts[catogary]);
  } else {
    alert("product not found");
  }
  document.getElementById("zauq-main").style.display = "none";
  document.getElementById("productDisplay").style.display = "block";
  document.getElementById("circleNAve").style.display="block"
  displaycat(catogary);
}


// ................... for productdetails card

function showProductDetails(info){
  
  
var cardDetails = info.parentNode.parentNode;
var cardName = cardDetails.querySelector(".product-name");
var cardPrice = cardDetails.querySelector(".current-price");
var cardDescr = cardDetails.querySelector(".product-category");
var cardImg1 = cardDetails.querySelector("#img1");
var cardImg2 = cardDetails.querySelector("#img2");

document.getElementById("zauq-main").style.display = "none";
    document.getElementById("productDisplay").style.display = "none";
    document.getElementById("productCardDetails").style.display = "block";
    document.getElementById("searchContainer").style.display = "none";

document.getElementById("productCardDetails").innerHTML=`<div class="row g-5">
        <div class="col-md-7">
    <div class="row g-2">
        <div class="col-12 product-main-img-container">
            <img src="${cardImg1.src}" id="mainImg" class="img-fluid imgCard" alt="Product">
        </div>
    </div>
</div>

        <div class="col-md-5">
            <div class="product-info-sticky">
                <nav aria-label="breadcrumb" class="mb-3">
                    <ol class="breadcrumb small text-uppercase">
                        <li class="breadcrumb-item"><a href="#" onclick="home()" class="text-dark text-decoration-none">Home</a></li>
                        <li class="breadcrumb-item active" id="detailCat">Chikankari</li>
                    </ol>
                </nav>

                <h1 class="display-6 fw-bold mb-2" id="detailTitle">${cardName.innerText}</h1>
                <p class="text-muted small mb-4" id="detailSku">${cardDescr.innerText}
                
                <h3 class="fw-bold mb-4" id="detailPrice">${cardPrice.innerText}"</h3>

                <hr>

                <div class="action-section my-4">
                    <h6 class="fw-bold mb-3 small">QUANTITY</h6>
                    <div class="d-flex gap-3">
                        <div class="quantity-wrapper d-flex align-items-center">
                            <button onclick="decreaseNum()" class="qty-control">-</button>
                            <input type="number" id="qtyInput" value="1" readonly>
                            <button onclick="increaseNum()" class="qty-control">+</button>
                        </div>
                        <button class="btn-add-to-cart flex-grow-1">ADD TO BAG</button>
                    </div>
                </div>

                <button class="btn-buy-now w-100 mb-4" data-bs-toggle="offcanvas" 
        data-bs-target="#checkoutSidebar" 
        onclick="fillCheckoutData(this)">BUY IT NOW</button>

               
            </div>
        </div>
    </div>`


}

function decreaseNum(){
   var qtyInput = document.getElementById("qtyInput");
   var decre =qtyInput.value;
   if(decre > 0){
    qtyInput.value = --decre
   }
   else{
     qtyInput.value = 0;
   }
}
function increaseNum(){
  var qtyInput = document.getElementById("qtyInput");
 var incre =qtyInput.value;
    qtyInput.value = ++incre;  
}

// ...........checkout

function fillCheckoutData(checkoutData){
var cardDetails = checkoutData.parentNode;
var cardName = cardDetails.querySelector("#detailTitle");
var cardDescr = cardDetails.querySelector("#detailSku");
var cardPrice = cardDetails.querySelector("#detailPrice");
var cardImg1 = cardDetails.querySelector("#mainImg");
var mainimg =cardDetails.parentNode.parentNode;
var img = mainimg.querySelector("#mainImg")
document.getElementById("checkoutItemName").innerText= cardName.innerText;
document.getElementById("checkoutItemSize").innerText= cardDescr.innerText;
document.getElementById("checkoutItemPrice").innerText= cardPrice.innerText;
document.getElementById("checkoutItemImg").src= img.src


}
function confirmOreder(){
    Swal.fire({
        title: 'ORDER PLACED',
        text: 'Thank you for choosing Zauq. Your luxury ensemble is on its way!',
        icon: 'success',
        background: '#fff', // Pure White background
        color: '#000',      // Black text
       
        confirmButtonText: 'CONTINUE SHOPPING',
        buttonsStyling: false,
        customClass: {
            confirmButton: 'swal-zauq-btn',
            title: 'swal-zauq-title',
            popup: 'swal-zauq-popup'
        },
        showClass: {
            popup: 'animate__animated animate__fadeInUp' // Agar Animate.css use kar rahi ho
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html'; // Ya jahan tum le jana chaho
        }
    });
}

