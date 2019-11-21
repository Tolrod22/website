function csi1()
{
	calendrierCSI1 = document.getElementById("calendrierCSI1");
	calendrierCSI1.style.visibility = "visible";
	calendrierCSI1.style.height = "auto";
	calendrierCSI2.style.visibility = "hidden";
	calendrierCSI2.style.height = "0";
}

function csi2()
{
    calendrierCSI1.style.visibility = "hidden";
	calendrierCSI1.style.height = "0";
	calendrierCSI2.style.visibility = "visible";
    calendrierCSI2.style.height = "auto";
}