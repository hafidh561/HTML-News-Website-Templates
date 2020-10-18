let daftarAkun = [
	{
		//pelanggan
		email: "pelanggan@gmail.com",
		password: "unesatetapjaya",
	},
	{
		//kontributor
		email: "kontributor@gmail.com",
		password: "unesatetapjaya",
	},
	{
		// admin
		email: "admin@safamedia.com",
		password: "unesatetapjaya",
	},
];

const masuk = document.getElementById("masuk");
const alert = document.getElementById("salah-masuk");
let a = 0;
setInterval(function () {
	const email = document.getElementById("email1").value;
	const password = document.getElementById("password1").value;

	for (let x = 0; x < daftarAkun.length; x++) {
		if (email == daftarAkun[0].email && password == daftarAkun[0].password) {
			masuk.setAttribute("href", "pelanggan/index pelanggan.html");
			a = 0;
		} else if (
			email == daftarAkun[1].email &&
			password == daftarAkun[1].password
		) {
			masuk.setAttribute("href", "kontributor/index kontributor.html");
			a = 0;
		} else if (
			email == daftarAkun[2].email &&
			password == daftarAkun[2].password
		) {
			masuk.setAttribute("href", "admin/index admin.html");
			a = 0;
		} else if (email == "" && password == "") {
			masuk.removeAttribute("href");
		} else {
			masuk.removeAttribute("href");
			a = 1;
		}
	}
}, 100);

const login = document.getElementById("tombol-login");
login.addEventListener("click", function () {
	if (a == 1) {
		alert.style.display = "initial";
		alert.classList.add("mt-4");
	}
});

$("#password1").on("keyup", function (e)
{
	if (e.keyCode === 13)
	{
		masuk.click();
	}
})

$("#email1").on("keyup", function (e) {
	if (e.keyCode === 13) {
		masuk.click();
	}
});