const apiUrl = 'https://jsonplaceholder.typicode.com';
                                                    //async function to fetch with try catch
async function fetchPosts() {                       //await and error handling
  try {  
    const response = await fetch(`${apiUrl}/posts`);

   if (!response.ok) {
    throw new Error('Failed to fetch posts: ${response.status}')
   }

   return await response.json();                    //Return json
  } catch (e) {
    console.log(e);
    
  }
}
                                                    //function post lists and make a element
function listsPosts(postContainerElementId) {
    const postContainerElement = document.getElementById
    (postContainerElementId);

    if (!postContainerElement) {
        return;
    }
                                                    //Returns a promise
    fetchPosts()                                    //if statement to say No Posts
    .then((posts) => {
        if (!posts) {
            postContainerElement.innerHTML = 'No Posts Fetched';
            return;
        }
                                                    //Iterate through posts
        for(const post of posts) {
            postContainerElement.appendChild(postElement(post));
        }
    })
    .catch(e => {
        console.log(e);
    });
}
                                                    //function to post
function postElement(post) {
    const anchorElement = document.createElement('a');  //Set the link
    anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`);
    anchorElement.setAttribute('target', '_blank');     //On new page
    anchorElement.innerText = capitalizeFirstLetter(post.title);
                                                        //Capitalize first letter
    const postTitleElement = document.createElement('h3');//create h3 elements
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}