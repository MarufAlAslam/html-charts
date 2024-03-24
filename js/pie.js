var fatsNOil = {
  series: [0.6097560976, 87.5, 11.8902439, 0],
  chart: {
    // width: 380,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var fats = new ApexCharts(document.querySelector("#fatsPie"), fatsNOil);
fats.render();

// eggs pie
var eggsData = {
  series: [38.84297521, 43.25068871, 17.90633609, 0],
  chart: {
    // width: 380,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var eggs = new ApexCharts(document.querySelector("#eggsPie"), eggsData);
eggs.render();

// meat pie
var meatsData = {
  series: [66.21621622, 32.01663202, 1.767151767, 0],
  chart: {
    // width: 380,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var meats = new ApexCharts(document.querySelector("#meatsPie"), meatsData);
meats.render();

// grains pie
var grainData = {
  series: [11.27544642, 5.708489609, 75.88516972, 7.130894251],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var grains = new ApexCharts(document.querySelector("#grainPie"), grainData);
grains.render();

// veg pie
var vegData = {
  series: [13.3077142, 6.404782237, 67.53487048, 12.75263308],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var vegs = new ApexCharts(document.querySelector("#vegPie"), vegData);
vegs.render();

// dairy pie
var dairyData = {
  series: [23.15047811, 11.63395403, 45.75574568, 19.45982218],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var dairies = new ApexCharts(document.querySelector("#dairyPie"), dairyData);
dairies.render();

// fruits pie
var fruitsData = {
  series: [4.005447408, 1.281743171, 86.11711928, 8.595690139],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var fruits = new ApexCharts(document.querySelector("#fruitPie"), fruitsData);
fruits.render();

// dish pie
var mixedData = {
  series: [26.12912275, 24.40588306, 46.12671823, 3.338275959],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var mixed = new ApexCharts(document.querySelector("#dishPie"), mixedData);
mixed.render();

// baked pie
var bakedData = {
  series: [6.765668507, 20.68780226, 70.07473988, 2.471789361],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var baked = new ApexCharts(document.querySelector("#bakedPie"), bakedData);
baked.render();

// bev pie
var bevData = {
  series: [2.801802899, 3.654525521, 93.19040078, 0.3532708003],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var bev = new ApexCharts(document.querySelector("#bevPie"), bevData);
bev.render();

// soups pie
var soupsData = {
  series: [23.95341171, 14.06438853, 55.92792001, 6.054279749],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var soups = new ApexCharts(document.querySelector("#soupsPie"), soupsData);
soups.render();

// fastfood pie
var fastData = {
  series: [27.3131157, 25.26559784, 44.58180413, 2.839482326],
  chart: {
    width: 200,
    type: "pie",
  },
  //   hide labels
  labels: ["Protein", "Fat", "Carbs", "Fibre"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var fast = new ApexCharts(document.querySelector("#fastPie"), fastData);
fast.render();
