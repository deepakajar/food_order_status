order_food=()=>{
    var food_name=document.getElementById('food_name').value;
    setTimeout(()=>{
        alert(`you have ordered ${food_name}`);
        document.getElementById('status').innerHTML+=`you have ordered ${food_name} <br>`;
        setTimeout(()=>{
            alert(`food is being prepared`);
            document.getElementById('status').innerHTML+=`food is being prepared <br>`;
            setTimeout(()=>{
                alert(`delivery boy is allotted for food delivery`);
                document.getElementById('status').innerHTML+=`delivery boy is allotted for food delivery <br>`;
                setTimeout(()=>{
                alert(`Your food is reaching within 10 Minutes`);
                document.getElementById('status').innerHTML+=`Your food is reaching within 10 Minutes <br>`;
                setTimeout(()=>{
                    alert(`Delivered Successfully`);
                    document.getElementById('status').innerHTML+=`Delivered Successfully <br>`;
                },3000)
                },1000)
            },2000)
        },2000)
    },100)
}