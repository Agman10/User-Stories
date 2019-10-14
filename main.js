let data = {
    roll: '',
    aktivitet: '',
    sammanhang: '',
    orsak: ''
};

new Vue({
    el:'#root',
    data: data
})


function donebutton(){
    document.getElementById("text").innerHTML = "Som en {{ roll }} vill jag {{ aktivitet }} i {{ sammanhang }} för att {{ orsak }}.";
}