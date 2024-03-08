let sample_data = [
    {
        Brand:"Arrow",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/f/1/xl-tie-casual-shirt-webric-original-imagkzgu6evhaehy.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"758",
        actualprice:"2,299"
    },
    {
        Brand:"Arrow",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/l/q/0/-original-imagpn66sggwzw4f.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,329",
        actualprice:"1,799"
    },
    {
        Brand:"Arrow",
        // img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/h/6/l-mt-itsok-black-hs-metronaut-original-imagzghdyjxzw655.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,286",
        actualprice:"2,499"
    }, {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"1,758",
        actualprice:"2,099"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399"
    },
    , {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2,038",
        actualprice:"2,899"
    },
    {
        Brand:"Puma",
        img_src:"",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399"
    },

]

localStorage.setItem("productdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productdata")) || [];

Product();

function Product(){

    collection.map((element)=>{
        let box = document.createElement("div")
        box.className = "box";
        let innerbox = document.createElement("div")  //innerbox

        let price1 = document.createElement("div");
        price1.innerHTML = element.price;
        price1.className = "price1";

        let price2 = document.createElement("div");
        price2.innerHTML = element.actualprice;
        price2.className = "price2";

        innerbox.append(price1,"₹",price2);
        innerbox.className = "innerbox";
        
        let avatar = document.createElement("img")
        avatar.src = element.img_src;
        avatar.className = "avatar"; //class of image
        
        let brand_name = document.createElement("p")
        brand_name.innerHTML = element.Brand;

        let innerbox1 = document.createElement("div")
        innerbox1.append(brand_name);
        innerbox1.className = "brand_name";
        
        
        box.append(avatar, innerbox1, innerbox);
        document.getElementById("collection").append(box)
    })
}
// let make_gap = document.createElement("span");
// make_gap.innerHTML = '   ';