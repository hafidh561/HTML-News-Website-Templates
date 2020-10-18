// Grafik 1

var grafik1 = document.getElementById("grafik1").getContext("2d");
var objekGrafik1 = new Chart(grafik1, {
	type: "line",
	data: {
		labels: ["November", "Desember", "Januari", "Februari", "Maret", "April"],
		datasets: [
			{
				label: "Banyaknya Viewers",
				data: [3700, 3900, 2900, 2600, 2850, 2150],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Korupsi di Indonesia: Tinjauan Normative Theory",
		},
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		scales: {
			xAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Bulan",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Viewers",
					},
				},
			],
		},
	},
});

// Akhir Grafik 1

// Grafik 2

var grafik2 = document.getElementById("grafik2").getContext("2d");
var objekgrafik2 = new Chart(grafik2, {
	type: "line",
	data: {
		labels: ["November", "Desember", "Januari", "Februari", "Maret", "April"],
		datasets: [
			{
				label: "Banyaknya Viewers",
				data: [2900, 4000, 5900, 4700, 2400, 2800],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Tips and Trick Jitu Sukses Korupsi ala Robert Klitgaard",
		},
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		scales: {
			xAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Bulan",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Viewers",
					},
				},
			],
		},
	},
});

// Akhir Grafik 2

// Grafik 3

var grafik3 = document.getElementById("grafik3").getContext("2d");
var objekGrafik3 = new Chart(grafik3, {
	type: "line",
	data: {
		labels: ["November", "Desember", "Januari", "Februari", "Maret", "April"],
		datasets: [
			{
				label: "Banyaknya Viewers",
				data: [3900, 4400, 7000, 5800, 2800, 4000],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Wacana Pemindahan Komplek Perkantoran Pemerintah Samarinda",
		},
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		scales: {
			xAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Bulan",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Viewers",
					},
				},
			],
		},
	},
});

// Akhir Grafik 3

// Grafik 4

var grafik4 = document.getElementById("grafik4").getContext("2d");
var objekGrafik4 = new Chart(grafik4, {
	type: "line",
	data: {
		labels: ["November", "Desember", "Januari", "Februari", "Maret", "April"],
		datasets: [
			{
				label: "Banyaknya Viewers",
				data: [2800, 3400, 4300, 2950, 3700, 3500],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "3 Pokok Fungsi Kedewanan Menurut Pengamat Politik Alphad Syarif",
		},
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		scales: {
			xAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Bulan",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Viewers",
					},
				},
			],
		},
	},
});

// Akhir Grafik 4

// Grafik 5

var grafik5 = document.getElementById("grafik5").getContext("2d");
var objekGrafik5 = new Chart(grafik5, {
	type: "line",
	data: {
		labels: ["November", "Desember", "Januari", "Februari", "Maret", "April"],
		datasets: [
			{
				label: "Banyaknya Viewers",
				data: [3800, 2800, 4400, 4300, 3700, 2300],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text:
				"Perjuangan Pengamat Politik Alphad Syarif Memenangkan Pemilu 2014 sebagai Awal Karir Politiknya",
		},
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		scales: {
			xAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Bulan",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Viewers",
					},
				},
			],
		},
	},
});

// Akhir Grafik 5
