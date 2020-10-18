setInterval(function () {
	const tanggal = document.getElementById("tanggal");
	const sekarang = new Date();
	tanggal.innerHTML = sekarang;
}, 1000);

// Grafik 1
let grafik1 = document.getElementById("grafik1").getContext("2d");
let objekgrafik1 = new Chart(grafik1, {
	type: "line",
	data: {
		labels: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
		datasets: [
			{
				label: "Banyaknya Pengunjung",
				data: [1000, 1250, 1500, 1350, 1500, 2000],
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Pengunjung hari ini",
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
						labelString: "Waktu",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Pengunjung",
					},
				},
			],
		},
	},
});
// Akhir Grafik 1

// Grafik 2
let grafik2 = document.getElementById("grafik2").getContext("2d");
let objekgrafik2 = new Chart(grafik2, {
	type: "line",
	data: {
		labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"],
		datasets: [
			{
				label: "Banyaknya Pengunjung",
				data: [6800, 7000, 6400, 6300, 6500, 7000, 7500],
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Pengunjung minggu ini",
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
						labelString: "Hari",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Pengunjung",
					},
				},
			],
		},
	},
});
// Akhir Grafik 2

// Grafik 3
let grafik3 = document.getElementById("grafik3").getContext("2d");
let objekgrafik3 = new Chart(grafik3, {
	type: "line",
	data: {
		labels: ["3", "10", "17", "24", "31"],
		datasets: [
			{
				label: "Banyaknya Pengunjung",
				data: [47500, 45500, 46000, 48000, 49000, 49500, 50000],
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Pengunjung bulan ini",
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
						labelString: "Tanggal",
					},
				},
			],
			yAxes: [
				{
					display: true,
					scaleLabel: {
						display: true,
						labelString: "Pengunjung",
					},
				},
			],
		},
	},
});
// Akhir Grafik 3

// Grafik 4
let grafik4 = document.getElementById("grafik4").getContext("2d");
let objekgrafik4 = new Chart(grafik4, {
	type: "line",
	data: {
		labels: [
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
		],
		datasets: [
			{
				label: "Banyaknya Pengunjung",
				data: [
					321000,
					324000,
					350000,
					340000,
					310000,
					320000,
					330000,
					300000,
					350000,
					331241,
					345812,
					335500,
				],
			},
		],
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: "Pengunjung tahun ini",
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
						labelString: "Pengunjung",
					},
				},
			],
		},
	},
});
// Akhir Grafik 4
