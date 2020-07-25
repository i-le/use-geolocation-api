var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1531097517181-3de20fd3f05c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)",
        "url(https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2295&q=80)",
        "url(https://images.unsplash.com/photo-1528150206408-07a3f3025282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)",
        "url(https://images.unsplash.com/photo-1535846417087-ff0057791ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2632&q=80)",
        "url(https://images.unsplash.com/photo-1526011881888-8dba3f788ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)"
       
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 3000);


