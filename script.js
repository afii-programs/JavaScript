/**
 * Appends an alert to the specified placeholder with the provided data.
 *
 * @param {string} na - Name
 * @param {string} ge - Gender
 * @param {string} bi - Birth Year
 * @param {string} sk - Skin Color
 * @param {string} ha - Hair Color
 * @param {string} he - Height
 * @param {string} url - Image URL
 */
const appendAlert = (na, ge, bi, sk, ha, he, url) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
      <div class="alert alert-success alert-dismissible" role="alert">
        <div style="display: flex;">
          <table class="table">
            <tbody>
              <tr><th scope="row">Name</th>
              <td>${na}</td>
              </tr>
              <tr><th scope="row">Gender</th>
              <td>${ge}</td>
              </tr>
              <tr><th scope="row">Birth Year</th>
              <td>${bi}</td>
              </tr>
              <tr><th scope="row">Skin Color</th>
              <td>${sk}</td>
              </tr>
              <tr><th scope="row">Hair Color</th>
              <td>${ha}</td>
              </tr>
              <tr><th scope="row">Height</th>
              <td>${he}</td>
              </tr>
            </tbody>
          </table>
          <img src="${url}" alt="Character Image">
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  document.getElementById("liveAlertPlaceholder").appendChild(wrapper);
};

/**
 * Fetches data from SWAPI and a local API, then appends an alert with the fetched data.
 */
const fetchDataAndShowAlert = async () => {
    try {
    const ran = Math.ceil(Math.random() * 83);

    const [swapiData, localApiData] = await Promise.all([
      fetch(`https://swapi.dev/api/people/${ran}/`).then((res) => res.json()),
      fetch(`https://akabab.github.io/starwars-api/api/id/${ran}.json`).then((res) => res.json()
      ),
    ]);

    const { name, gender, birth_year, skin_color, hair_color, height } = swapiData;
    const imageUrl = localApiData.image;

    console.log(
      name,
      gender,
      birth_year,
      skin_color,
      hair_color,
      height,
      imageUrl
    );

    appendAlert(
      name,
      gender,
      birth_year,
      skin_color,
      hair_color,
      height,
      imageUrl
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Attach the event listener to the button
const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", fetchDataAndShowAlert);
}
