var personId = 1;
const hasil = document.querySelector('#bodyTable')
let nama = document.querySelector('#nama')
let tempat = document.querySelector('#tempat')
let ttl = document.querySelector('#ttl')
let alamat = document.querySelector('#alamat')
// var jk= document.querySelector('#jenisl')
var jk = document.querySelectorAll('input[name="jenisKelamin"]')
var checkbox = document.querySelectorAll("[name='hobby']")
let agama = document.querySelector('#agama')
const button = document.querySelector('#button1')
const btn = document.querySelector('#button1')
var updatedIndex = -1;
let limit = 4;
let currentPage = 1;
const page = document.querySelector('#page');
var hobi = "";
var tempatttl = "";
var umur = "";

let people = [{
	id: personId++,
	nama: "Eric",
	tempat: "Juranalam",
	ttl: "1998-03-22",
	umur: "23",
	hobby: "RENANG",
	tempatttl: "Juranalam , 1998-03-22",
	jk: "Laki-Laki",
	agama: "Islam",
	alamat: "Jl Kemas 47"
},
{
	id: personId++,
	nama: "Fran",
	tempat: "alamsia",
	ttl: "1998-02-10",
	umur: "23",
	hobby: "JOGGING, FUTSAL",
	tempatttl: "alamsia , 1998-02-10",
	jk: "Laki-Laki",
	agama: "Hindu",
	alamat: "Serpong"
},
{
	id: personId++,
	nama: "Sisco",
	tempat: "SimpangMio",
	ttl: "1998-04-11",
	umur: "23",
	hobby: "FUTSAL",
	tempatttl: "SimpangMio , 1998-04-11",
	jk: "Perempuan",
	agama: "Kristen",
	alamat: "Alam Sutra"
},
{
	id: personId++,
	nama: "Erni",
	tempat: "Darmo",
	ttl: "1998-05-20",
	umur: "23",
	hobby: "FUTSAL, RENANG",
	tempatttl: "Darmo , 1998-05-20",
	jk: "Perempuan",
	agama: "Hindu",
	alamat: "Pasar Lama"
},
{
	id: personId++,
	nama: "Ance",
	tempat: "Pulau Panggung",
	ttl: "1998-11-11",
	umur: "23",
	hobby: "SEPEDA",
	tempatttl: "Pulau Panggung, 1998-11-11",
	jk: "Laki-Laki",
	agama: "Hindu",
	alamat: "Jl.Margonda Raya"
},
{
	id: personId++,
	nama: "Jaelani",
	tempat: "Pagar Dewa",
	ttl: "1998-12-25",
	umur: "23",
	hobby: "JOGGING, RENANG",
	tempatttl: "Pagar Dewa , 1998-12-25",
	jk: "Perempuan",
	agama: "Islam",
	alamat: "Gatot Subroto"
},
{
	id: personId++,
	nama: "Fajar",
	tempat: "Cijantung",
	ttl: "1998-10-15",
	umur: "23",
	hobby: "SEPEDA, RENANG",
	tempatttl: "Cijantung , 1998-10-15",
	jk: "Laki-Laki",
	agama: "Budha",
	alamat: "Jl.Jendral Sudirman"
},
{
	id: personId++,
	nama: "Jerry",
	tempat: "Mandala",
	ttl: "1998-10-23",
	umur: "23",
	hobby: "FUTSAL",
	tempatttl: "Tanjung Agung , 1998-10-23",
	jk: "Laki-Laki",
	agama: "Islam",
	alamat: "Taman Anggrek"
},
{
	id: personId++,
	nama: "Rio",
	tempat: "Tegal Rejo",
	ttl: "1998-04-20",
	umur: "23",
	hobby: "FUTSAL, RENANG",
	tempatttl: "Tanjung Agung , 1998-04-20",
	jk: "Laki-Laki",
	agama: "Kristen",
	alamat: "BSD City"
},
{
	id: personId++,
	nama: "Quens",
	tempat: "TanjungLalang",
	ttl: "1998-08-03",
	umur: "23",
	hobby: "FUTSAL, RENANG, JOGGING",
	tempatttl: "TanjungLalang , 1998-08-03",
	jk: "Perempuan",
	agama: "Islam",
	alamat: "Warpat Bogor"
}
];

showData();

function handleSubmit() {
	if (button.innerHTML === "SUBMIT") {
		if (nama.value.length > 0 && alamat.value.length > 0 && ttl.value.length > 0) {
			inputData();
		}
		else {
			alert('Data Harus Terisi Lengkap');
		}
	}
	else {
		updateData(button.getAttribute("data-type"));
	}
}
function jeniskl() {
	jk.forEach(element => {
		if (element.checked == true) {
			jkV = element.value;
		}
	});
}
function Hitunghobby() {
	hobi = "";
	for (var i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			if (hobi != "") hobi += ", "
			hobi = hobi + checkbox[i].value;
		}
	}
}
function HitungTempatTTL() {
	tempatttl = tempat.value + " , " + ttl.value
}

function HitungUmur() {
	var today = new Date();
	var ttl1 = new Date(ttl.value);
	umur = (today.getFullYear() - ttl1.getFullYear());
}


function inputData() {
	jeniskl();
	Hitunghobby();
	HitungTempatTTL();
	HitungUmur();


	let person = {
		id: personId,
		nama: nama.value,
		tempat: tempat.value,
		ttl: ttl.value,
		umur: umur,
		hobby: hobi,
		tempatttl: tempatttl,
		jk: jkV,
		agama: agama.value,
		alamat: alamat.value
	};

	people.push(person);
	personId++;
	showData();
	nama.value = "";
	tempat.value = "";
	ttl.value = "";
	alamat.value = "";
	agama.value = "";
	jk.forEach(element => {
		element.checked = false;
	});
	checkbox.forEach(element => {
		element.checked = false;
	});

}


function showData() {

	let endPage = currentPage * limit; //1*4
	let offSet = endPage - limit; // Startnya Dari Mana
	hasil.innerHTML = ''
	for (let index = offSet; index < endPage; index++) {
		if (index < people.length) {
			hasil.innerHTML += `
		<tbody>
		<tr>
		<td class ="tNo"><b>${people[index].id}</b></td>
		<td class ="tNama"><b>${people[index].nama}</b></td>
		<td class ="tTempat"><b>${people[index].tempatttl}</b></td >
		<td class ="tUmur"><b>${people[index].umur} Tahun</b></td>
        <td class ="tJk"><b>${people[index].jk}</b></td>
        <td class ="tHobby"><b>${people[index].hobby}</b></td>
        <td class ="tAgama"><b>${people[index].agama}</b></td>
		<td class ="tAlamat"><b>${people[index].alamat}</b></td>
		<td class="tAction">
		<button class"button" type="button" onclick="deletedClicked(${people[index].id})">
			Delete
			</button>
		<button class="buttonedit" type="button" onclick="editClicked(${people[index].id})">
			Edit
		</button>
	</td>
	</tr>
	</tbody>
	`
		}
	}
	pagination();

}
showData();


function deletedClicked(id) {
	const person = people.find(function (person) {
		return person.id === id
	})
	if (confirm(`apakah anda yakin ingin menghapus data ${person.nama}`)) {
		people = people.filter(function (person) {
			return person.id != id
		})

	}
	showData();
}

function editClicked(id) {

	checkbox.forEach(element => {
		element.checked = false;
	});
	const personUpdated = people.findIndex(person => {
		return person.id === id
	});
	nama.value = people[personUpdated].nama;
	alamat.value = people[personUpdated].alamat;
	agama.value = people[personUpdated].agama;
	ttl.value = people[personUpdated].ttl;
	tempat.value = people[personUpdated].tempat;
	btn.innerHTML = "UPDATE";
	btn.setAttribute("data-type", personUpdated);
	jk.forEach(element => {
		if (element.value == people[personUpdated].jk) {
			element.checked = true;
		}
	});
	let hobbies = people[personUpdated].hobby.split(", ");
	hobbies.forEach(element => {
		checkbox.forEach(element2 => {
			if (element2.value == element) {
				element2.checked = true;
			}
		})
	});

}

function updateData(id) {
	jeniskl();
	Hitunghobby();
	HitungTempatTTL();
	HitungUmur();

	let orang = {
		id: people[id].id,
		nama: nama.value,
		umur: umur,
		hobby: hobi,
		tempat: tempat.value,
		ttl: ttl.value,
		tempatttl: tempatttl,
		jk: jkV,
		agama: agama.value,
		alamat: alamat.value
	};

	people.splice(id, 1, orang);
	showData();
	nama.value = "";
	tempat.value = "";
	ttl.value = "";
	alamat.value = "";
	jk.forEach(element => {
		element.checked = false;
	});
	checkbox.forEach(element => {
		element.checked = false;
	});
	btn.removeAttribute("data-type");
	btn.innerHTML = "SUBMIT";
}

function searchName() {
	// showDataAll();
	var input, filter, table, th, td, i, txtValue;
	input = document.querySelector('#myInputName');
	filter = input.value.toUpperCase();
	table = document.getElementById("bodyTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

// function searchHobby() {
// 	// showDataAll();
//     var input, filter, table, th, td, i, txtValue;
//     input = document.querySelector('#myInputHobby');
//     filter = input.value.toUpperCase();
//     table = document.getElementById("bodyTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[5];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
// function searchAlamat() {
// 	// showDataAll();
//     var input, filter, table, th, td, i , txtValue;
//     input = document.querySelector('#myInputAlamat');
//     filter = input.value.toUpperCase();
//     table = document.getElementById("bodyTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[7];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }

function pagination() {
	let totalPage = Math.ceil(people.length / limit); //menghitung total page
	page.innerHTML = ''
	for (let index = 1; index <= totalPage; index++) {
		if (index == currentPage) {
			page.innerHTML += `
        <a href="javascript:void(0)">${index}</a> 
        `
		} else if (index > currentPage) {
			page.innerHTML += `
            <a href="javascript:void(0)" onclick="clickedPage(${index})">${index}</a> 
            `
		} else if (index < currentPage) {
			page.innerHTML += `
        <a href="javascript:void(0)" onclick="clickedPage(${index})">${index}</a> 
        `
		}
	}
}
function clickedPage(index) {
	currentPage = index;
	showData();
}

// function showDataAll(){ 
// 	hasil.innerHTML=''
// 	console.log(people)
// 	people.forEach( person => {
// 		hasil.innerHTML += `
// 		<tr>
// 		<td class ="tNo"><b>${person.id}</b></td>
// 		<td class ="tNama"><b>${person.nama}</b></td>
// 		<td class ="tTempat"><b>${person.tempatttl}</b></td >
// 		<td class ="tUmur"><b>${person.umur} Tahun</b></td>
//         <td class ="tJk"><b>${person.jk}</b></td>
//         <td class ="tHobby"><b>${person.hobby}</b></td>
//         <td class ="tAgama"><b>${person.agama}</b></td>
// 		<td class ="tAlamat"><b>${person.alamat}</b></td>

// 		<td class="tAction">
// 		<button class"button" type="button" onclick="deletedClicked(${person.id})">
// 			Delete
// 			</button>
// 		<button class"button" type="button" onclick="showClicked(${person.id})">
// 			Show
// 			</button>
// 		<button class="buttonedit" type="button" onclick="editClicked(${person.id})">
// 			Edit
// 		</button>

// 	</td>
// 	</tr>
// 	`
// 	})
// }

