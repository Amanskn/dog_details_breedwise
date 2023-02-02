// appending the list as soon as the page loads
(function(){
    $.ajax({
        url:"https://dog.ceo/api/breeds/list/all",
        method:"get",
        success:function(data){
            // console.log(data.message);
            for(let i in data.message){
                $("#breed-list").append(`<option value=${i}>${i}</option>`)
            }


        }
    })
})();

var breed;

function fetchImg(){
     breed=$('#breed-list option:selected').val();
        $.ajax({
            url:`https://dog.ceo/api/breed/${breed}/images`,
            method:"get",
            success:function(data){
                var imgUrl=data.message[0];
                $("img").attr("src",imgUrl);
                // Just a check
                console.log("Inside fetchImage",data.message[0]);
                
            }
        }).fail(function(){
        console.log("Error thrown");
    });
    }
    
$("#get-button").click(fetchImg);



var randomImage=function(){
    if(breed==undefined)
        alert('First Get An Image');
    else{
        $.ajax({
            url:`https://dog.ceo/api/breed/${breed}/images/random`,
            method:"get",
            success:function(data){
                var imgUrl=data.message;
                $("img").attr("src",imgUrl);
                // just a check
                // console.log("Inside randomImage",data.message);
                
            }
        }).fail(function(){
        console.log("Error thrown");
    });

    }     

    
}

$("#next-button").click(randomImage);
    