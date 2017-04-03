function validateForm() {

    var x = document.getElementById("fname");
    var y = document.getElementById("lname");
    var z = document.getElementById("email");
    var w = document.getElementById("number");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var reg = /^[0-9]*$/;
        // /^\d*$/;

    if (x.value == "" || y.values == "" || z.value =="" || w.value == "")
    {
        alert("all fields,except number, must be filled out");
        return false;
    }

    if (!filter.test(z.value))
    {
        alert("Invalid input for Email");
        return false;
    }

    if(!reg.test(w.value))
    {
        alert("Phone number must be digits only");
        return false;
    }

    // document.location.href = "mailto:Osnaldy@hotmail.com?subject= "+encodeURIComponent(x) + " &body " +
    //         encodeURIComponent(y) + " &body " +
    //         encodeURIComponent(z) + " &body " +
    //         encodeURIComponent(w);
}