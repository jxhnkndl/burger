// EVENT: DOM LOAD
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.log('DOM Loaded');
  }

  // DOM elements
  const addBurgerBtn = document.getElementById('add_burger');
  const listUneaten = document.getElementById('uneaten');
  const listEaten = document.getElementById('eaten');

  // // // // // // // //
  //  Event Listeners  //
  // // // // // // // //

  // Form button - Add new burger
  addBurgerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Grab input field from DOM
    const input = document.getElementById('burger_name');

    // Format burger data to submit
    const burger = {
      burger_name: input.value.trim(),
      devoured: false,
    };

    // Confirm object mimics data model
    console.log(burger);

    // Send the new burger object to the controller
    async function addBurger() {
      const endpoint = '/api/burgers';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(burger),
      });

      // Reset input and reload page to refresh database
      input.value = '';
      location.reload('/');
    }

    addBurger();
  });

  // Uneaten list - Eat buttons
  listUneaten.addEventListener('click', (event) => {
    // Parse and format request data
    const { id } = event.target.dataset;
    const devoured = { devoured: 1 };
    const endpoint = `/api/burgers/${id}`;

    // Submit PUT request to API to update devoured status
    async function eatBurger() {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(devoured)
      });

      // If everything worked, reload the page to show
      // the updated burger is now in the red eaten
      // column. 
      if (response.ok) {
        location.reload('/');
      } else {
        console.log(response.error);
      }
    }

    eatBurger();
  });
});
