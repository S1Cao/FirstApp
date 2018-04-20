var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    callAlert: function () {
        
        // We care selecting the input box based on id
        
       var txt= document.getElementById("txtname");
        
        // Shwoing the value of the input box
        alert("Text was extracted : : " + txt.value);
    },

    onDeviceReady: function () {

        alert("Device is Ready!");

        //  Adding Button click event

        document.getElementById("btnClick").addEventListener('click', this.callAlert.bind(this), false);
    }
};

app.initialize();