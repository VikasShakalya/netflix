 // Example data for show cards
const shows = [
  { title: 'Drama', image: 'drama.jpg' },
  { title: 'reality', image: 'money.jpg' },
  { title: 'comedy', image: 'comedy.jpg' },
  { title: 'Action', image: 'wonder.jpg' },
  // Add more show objects as needed
];

// Function to create show cards
function createShowCard(show) {
  const card = document.createElement('div');
  card.classList.add('show-card');

  const image = document.createElement('img');
  image.src = show.image;
  card.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = show.title;
  card.appendChild(title);

  return card;
}

// Populate catagories cards
const showContainer = document.querySelector('.show-container');
shows.forEach(function(show) {
  const showCard = createShowCard(show);
  showContainer.appendChild(showCard);
});
