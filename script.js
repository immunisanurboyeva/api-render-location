const userUl = document.querySelector(".user-list");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => render(data, userUl));

function render(arr, parent) {
    parent.innerHTML = arr
    .map(
        (user) =>
        `
        <li class="user-item" data-id="${user.id}>>
            <h3 class="user-title"  ${user.name}</h3>
            <strong class="user-name">${user.username}</strong>
            <a href="https://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng}" class="user-location">Location</a>
        </li>
        `,
    )
    .join("");
}

const postsUl = document.querySelector('.posts-list')

function renderPost(arr, parent){
    parent.innerHTML = arr
    .map(
        (user) =>
        `
            <li class="post-item">
            <strong>${user.userId}</strong>
                <h3 class="post-name">${user.title}</h3>
                <p class="posr-id"${user.userId}></p>
                <p class="posst-body">${user.body}</p>
            </li>
        `,
    )
    .join("");
}



userUl.addEventListener('click', (e)=>{
    const userItem = e.target.closest('.user-item')
    
    if (userItem){
        let userId = userItem.dataset.id;
        // const postItem = document.querySelector('.post-item') 
        
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => renderPost(data, postsUl));
    }
})