const form = document.querySelector('.bookmark-form');
const delete_btns = document.querySelectorAll('.delete');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = {
        name: form.querySelector('#name').value,
        url: form.querySelector('#url').value
    };

    // POST request using fetch() 
    fetch("/", { 
        method: "POST",  
        body: JSON.stringify(data), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }) 
    .then(response => response.json()) 
    .then(json => location.reload()); 
    
});



delete_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const li = btn.parentElement;
        const name = li.querySelector('h3').innerText;

         //Delete request using fetch() 
         fetch('/' + name , { 
            method: 'DELETE'
        }) 
        .then(response => response.json()) 
        .then(json => location.reload()); 
    });
});