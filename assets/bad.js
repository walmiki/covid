const bad = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedbad = document.querySelector(".last__updated");

fetch(bad)
	.then((response) => response.json())
	.then((bad) => {
		const myData = Object.values(bad.data.badlapur);
		console.log(myData); // For Debugging
		document.querySelector(".stat__item.confirmedbad .number").textContent =
			myData[0];
		document.querySelector(".stat__item.confirmedbad .new").textContent = `${
			myData[0] - myData[2]
		}`;
		document.querySelector(".stat__item.activebad .number").textContent = `${
			myData[0] - myData[4] - myData[1]
		}`;
		document.querySelector(".stat__item.recoveredbad .number").textContent =
			myData[4];
		document.querySelector(".stat__item.recoveredbad .new").textContent = `${
			myData[4] - myData[5]
		}`;
		document.querySelector(".stat__item.deceasedbad .number").textContent =
			myData[1];
		document.querySelector(".stat__item.deceasedbad .new").textContent = `${
			myData[1] - myData[3]
		}`;
		document.querySelector(".badact").textContent = `${
			((myData[0] - myData[4] - myData[1]) / myData[0]) * 100
		}`;
		document.querySelector(".badrec").textContent = `${
			(myData[4] / myData[0]) * 100
		}`;
		document.querySelector(".baddec").textContent = `${
			(myData[1] / myData[0]) * 100
		}`;
		document.querySelector(".stat__item.tests_bad .number").textContent =
			myData[6];
		document.querySelector(".stat__item.tests_bad .new").textContent = `${
			myData[6] - myData[7]
		}`;
	});
