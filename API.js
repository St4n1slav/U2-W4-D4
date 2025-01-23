const APIkey = "5XrQ9YwnI0ZuAxnlTzVbcM2HtPfzyWdiU9YCuIvjmKcZ94uTQoKuop2V";

const elementTemplate = ` <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src="%url" class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`;

function getHamster() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", APIkey);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch("https://api.pexels.com/v1/search?query=hamsters", requestOptions)
    .then((response) => response.json())
    .then((result) =>
      result.photos.forEach((element) => {
        document.getElementById("imgCont").innerHTML += elementTemplate.replace("%url", element.src.original);
      })
    )
    .catch((error) => console.log("error", error));
}
