// Function to check if an element is visible
function isVisible() {
  const lastElement = document.getElementById('OSD-569'); // Get the last element with ID '10'
  
  const rect = lastElement.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  // Check if the element is within the visible area
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}

// Get references to HTML elements
const scrollContainer = document.getElementById('scrollContainer');
const messageBox = document.getElementById('messageBox');


 // Function to get organism image based on specific keywords in the organism name
 function getOrganismImage(organismName) {
  organismName = organismName.toLowerCase(); // Make it case-insensitive

  if (organismName.includes('mus')) {
    return './images/rodent.png'; // Rodent image for Mus species (e.g., mouse)

  } else if (organismName.includes('house')) {
    return './images/rodent.png';}
  else if (organismName.includes('drosophila')) {
    return './images/fly.png'; // Fruit fly image for Drosophila species
  } else if (organismName.includes('arabidopsis')) {
    return './images/plant.png'; // Plant image for Arabidopsis species
  } else if (organismName.includes('homo')) {
    return './images/human.png'; // Human image for Homo sapiens
  } else {
    return './images/bacteria.png'; // No matching image found
  }
}

// Function to render the items in the scrollable list
function renderItems() {
  const planetImages = [
    './images/venus.png', 
    './images/jupiter.png', 
    './images/saturn.png', 
    './images/uranus.png'
  ];

 

  // Iterate over the items array and create divs for each object
  items.forEach((item, index) => {
    const div = document.createElement('div');
    div.id = item["Study Number"];
    div.style.position = 'relative';

    // Create an img element for the planet
    const img = document.createElement('img');
    img.src = planetImages[index % planetImages.length];
    img.alt = `Planet ${index + 1}`;
    img.style.width = '100%';
    img.style.height = 'auto';

    // Create a span to display the study number over the image
    const studyNumber = document.createElement('span');
    studyNumber.textContent = item["Study Number"];
    studyNumber.style.position = 'absolute';
    studyNumber.style.top = '10px';
    studyNumber.style.left = '50%';
    studyNumber.style.transform = 'translateX(-50%)';
    studyNumber.style.color = 'white';
    studyNumber.style.fontSize = '20px';
    studyNumber.style.fontWeight = 'bold';
    studyNumber.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';

    // Append the img and the study number span to the div
    div.appendChild(img);
    div.appendChild(studyNumber);

    // Get organism image if applicable
    const organismImage = getOrganismImage(item["Organism Name"]);

    // Create the message data for the item, with organism image if applicable
    let messageContent = `
      <table border="1">
        <tr>
          <td><strong>Title:</strong></td>
          <td>${item.Title}</td>
        </tr>
        <tr>
          <td><strong>Organism Name:</strong></td>
          <td>
            ${item["Organism Name"]}
            ${organismImage ? `<img src="${organismImage}" alt="Organism Image" style="width: 50px; height: auto; vertical-align: middle;">` : ''}
          </td>
        </tr>
        <tr>
          <td><strong>Description:</strong></td>
          <td>${item.Description}</td>
        </tr>
        <tr>
          <td><strong>Release Date:</strong></td>
          <td>${item["Release Date"]}</td>
        </tr>
        <tr>
          <td><strong>Link:</strong></td>
          <td><a href="${item.Link}" target="_blank">View Study</a></td>
        </tr>
      </table>
    `;

    // Store the message in the div's dataset
    div.dataset.message = messageContent;

    // Add click event listener to display the item's structured message
    div.addEventListener('click', () => {
      messageBox.innerHTML = div.dataset.message;
    });

    // Append the div to the scroll container
    scrollContainer.appendChild(div);
  });
}

function readCenterValue() {
  const centerY = window.innerHeight / 2; // Get the Y position of the viewport center
  
  const itemsList = scrollContainer.querySelectorAll('div'); // Get all the div elements inside the scroll container

  itemsList.forEach(div => {
    const rect = div.getBoundingClientRect(); // Get the position of each div

    // Check if the center of the viewport is between the top and bottom of the div
    if (rect.top < centerY && rect.bottom > centerY) {
      messageBox.innerHTML = div.dataset.message // Print the message of the centered div
    }
  });
}

// Call the renderItems function to populate the list
window.onload = function () {
  renderItems()

  // Scroll event listener to check visibility
  scrollContainer.addEventListener("scroll", () => {
    readCenterValue()
    if (isVisible()) {
      renderItems()
    }
  });

}


