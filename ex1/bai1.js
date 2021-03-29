function myFunction1()
    {
        var x = document.getElementById("password");
        
        if(x.type === "password")
        {
            x.type ="text";
        }
        else
        {
            x.type ="password";
        }
    }

    function myFunction2()
    {
        var y = document.getElementById("current-password");
        var z = document.getElementById("new-password");
        
        if(y.type === "password" && z.type === "password")
        {
            y.type ="text";
            z.type ="text";
        }
        else
        {
            y.type ="password";
            z.type ="password";
        }
    }