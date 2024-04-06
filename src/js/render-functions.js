const images = {
	method: "GET"
};
export function createMarkup(arr) {
return arr.map(({ webformatURL, tags, largeImageURL, likes, views, comments, downloads }) => {
           return ` <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}" >
          <img class="gallery-image"
           src="${webformatURL}" 
           alt="${tags}" 
           width = "360"/>
          <ul class="card-descr">
           <li class="card-element"><span class="element-label">Likes:</span> ${likes}</li>
            <li class="card-element"><span class="element-label">Views:</span> ${views}</li>
            <li class="card-element"><span class="element-label">Comments:</span> ${comments}</li>
            <li class="card-element"><span class="element-label">Downloads: </span>${downloads}</li></ul>
        </a>
      </li>`
            
        }).join("");
}

