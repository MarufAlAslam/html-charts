var optionsForProtein = {
  series: [
    {
      data: [
        (3 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (6 * 10).toFixed(0),
        (13 * 10).toFixed(0),
        (17 * 10).toFixed(0),
        (0.05128205128 * 10).toFixed(0),
        (16 * 10).toFixed(0),
        (0.6849315068 * 10).toFixed(0),
        (4 * 10).toFixed(0),
        (9 * 10).toFixed(0),
        (18 * 10).toFixed(0),
        (1 * 10).toFixed(0),
        (17 * 10).toFixed(0),
        (3 * 10).toFixed(0),
        (7 * 10).toFixed(0),
        (2 * 10).toFixed(0),
        (1.654867257 * 10).toFixed(0),
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Baked Goods",
      "Beverages",
      "Dairy",
      "Eggs",
      "Fast Foods",
      "Fats and Oil",
      "Fish",
      "Fruit",
      "Grain/Cereal",
      "Legumes/Nuts",
      "Meat/Poultry",
      "Miscellaneous",
      "Mixed Dishes",
      "Snacks",
      "Soups",
      "Sweets",
      "Vegetables",
    ],
  },
};

var protein = new ApexCharts(
  document.querySelector("#proteinChart"),
  optionsForProtein
);
protein.render();

// carbs chart

var optionsForCarbs = {
  series: [
    {
      data: [
        (32 * 10).toFixed(0),
        (16 * 10).toFixed(0),
        (12 * 10).toFixed(0),
        (6 * 10).toFixed(0),
        (28 * 10).toFixed(0),
        (1 * 10).toFixed(0),
        (2 * 10).toFixed(0),
        (15 * 10).toFixed(0),
        (24 * 10).toFixed(0),
        (14 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (4 * 10).toFixed(0),
        (30 * 10).toFixed(0),
        (15 * 10).toFixed(0),
        (15 * 10).toFixed(0),
        (19 * 10).toFixed(0),
        (8.398230088 * 10).toFixed(0),
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Baked Goods",
      "Beverages",
      "Dairy",
      "Eggs",
      "Fast Foods",
      "Fats and Oil",
      "Fish",
      "Fruit",
      "Grain/Cereal",
      "Legumes/Nuts",
      "Meat/Poultry",
      "Miscellaneous",
      "Mixed Dishes",
      "Snacks",
      "Soups",
      "Sweets",
      "Vegetables",
    ],
  },
};

var carbs = new ApexCharts(
  document.querySelector("#carbsChart"),
  optionsForCarbs
);
carbs.render();

// fats chart
var optionsForFats = {
  series: [
    {
      data: [
        (9.411111111 * 10).toFixed(0),
        (0.6251 * 10).toFixed(0),
        (3.1 * 10).toFixed(0),
        (14 * 10).toFixed(0),
        (16 * 10).toFixed(0),
        (7 * 10).toFixed(0),
        (4 * 10).toFixed(0),
        (0.2191780822 * 10).toFixed(0),
        (4 * 10).toFixed(0),
        (2 * 10).toFixed(0),
        (11 * 10).toFixed(0),
        (8 * 10).toFixed(0),
        (0.7925925926 * 10).toFixed(0),
        (6.826086957 * 10).toFixed(0),
        (4 * 10).toFixed(0),
        (5 * 10).toFixed(0),
        (0.796460177 * 10).toFixed(0),
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Baked Goods",
      "Beverages",
      "Dairy",
      "Eggs",
      "Fast Foods",
      "Fats and Oil",
      "Fish",
      "Fruit",
      "Grain/Cereal",
      "Legumes/Nuts",
      "Meat/Poultry",
      "Miscellaneous",
      "Mixed Dishes",
      "Snacks",
      "Soups",
      "Sweets",
      "Vegetables",
    ],
  },
};

var fats = new ApexCharts(document.querySelector("#fatsChart"), optionsForFats);
fats.render();

// fibre chart
var optionsForFibre = {
  series: [
    {
      data: [
        (1.124444444 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (5 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (1.8 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (1.469863014 * 10).toFixed(0),
        (2.3 * 10).toFixed(0),
        (4.3 * 10).toFixed(0),
        (0 * 10).toFixed(0),
        (2 * 10).toFixed(0),
        (2.1 * 10).toFixed(0),
        (1.7 * 10).toFixed(0),
        (1.66969697 * 10).toFixed(0),
        (0.6 * 10).toFixed(0),
        (1.585840708 * 10).toFixed(0),
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Baked Goods",
      "Beverages",
      "Dairy",
      "Eggs",
      "Fast Foods",
      "Fats and Oil",
      "Fish",
      "Fruit",
      "Grain/Cereal",
      "Legumes/Nuts",
      "Meat/Poultry",
      "Miscellaneous",
      "Mixed Dishes",
      "Snacks",
      "Soups",
      "Sweets",
      "Vegetables",
    ],
  },
};

var fibre = new ApexCharts(
  document.querySelector("#fibreChart"),
  optionsForFibre
);
fibre.render();
