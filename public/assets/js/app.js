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

      // If everything worked, reload the page to refresh the data
      if (response.ok) {
        input.value = '';
        location.reload('/');
      } else {
        console.log('There was a problem making this request.');
      }
    }

    addBurger();
  });

  // Uneaten list - Devour buttons
  listUneaten.addEventListener('click', (event) => {
    const { id } = event.target.dataset;
    const devoured = { devoured: 1 };
    const endpoint = `/api/burgers/${id}`;

    // Send the burger's updated devour status to the controller
    async function eatBurger() {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(devoured)
      });

      // If everything worked, reload the page to refresh the data
      if (response.ok) {
        location.reload('/');
      } else {
        console.log('There was a problem making this request.');
      }
    }

    eatBurger();
  });

  // Eaten list - Delete buttons
  listEaten.addEventListener('click', (event) => {
    const { id } = event.target.dataset;
    const endpoint = `/api/burgers/${id}`;

    console.log(id);

    // Send the deleted burger's id to the controller
    async function deleteBurger() {
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
      });

      // If everything worked, reload the page to refresh the data
      if (response.ok) {
        location.reload('/');
      } else {
        console.log('There was a problem making this request.');
      }
    }

    deleteBurger();
  });
});
