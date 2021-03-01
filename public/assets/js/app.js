document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.log('DOM Loaded');
  }

  // DOM elements
  const addBurgerBtn = document.getElementById('add_burger');
  const listOnDeck = document.getElementById('uneaten');
  const listDevoured = document.getElementById('eaten');
  const container = document.querySelector('.container');
  const form = document.querySelector('form');

  // // // // // // // //
  //  Event Listeners  //
  // // // // // // // //

  // Form button - Add new burger
  addBurgerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Grab input field from DOM
    const formInput = document.getElementById('burger_name').value;
    const regex = /^\s*$/;

    if (!formInput || regex.test(formInput)) {
      showAlert(
        'alert-danger',
        "Whoops! A blank burger just won't do! Double check your input and try again."
      );
      formInput.value = '';
      console.log('Invalid input.');
      return;
    }

    // Find and format apostrophes to be SQL friendly
    const apiInput = replaceQuotes(formInput);

    // Format burger data to submit
    const burger = {
      burger_name: apiInput.trim(),
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
        formInput.value = '';
        location.reload('/');
      } else {
        showAlert(
          'alert-danger',
          'Whoops! Looks like something went wrong on our end. Let\'s try again!'
        );
      }
    }

    addBurger();
  });

  // Uneaten list - Devour buttons
  listOnDeck.addEventListener('click', (event) => {
    const { id } = event.target.dataset;
    const devoured = { devoured: 1 };
    const endpoint = `/api/burgers/${id}`;

    // Only make the API call if the button was clicked
    if (event.target.dataset.id) {
      // Send burger's id and devoured status to the controller
      async function eatBurger() {
        const response = await fetch(endpoint, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(devoured),
        });

        // If everything worked, reload the page to refresh the data
        if (response.ok) {
          location.reload('/');
        } else {
          showAlert(
            'alert-danger',
            'Whoops! Looks like something went wrong on our end. Let\'s try again!'
          );
        }
      }

      eatBurger();
    }
  });

  // Eaten list - Delete buttons
  listDevoured.addEventListener('click', (event) => {
    const { id } = event.target.dataset;
    const endpoint = `/api/burgers/${id}`;

    // Only make the API call if the button was clicked
    if (event.target.dataset.id) {
      // Send the deleted burger's id to the controller
      async function deleteBurger() {
        const response = await fetch(endpoint, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
        });

        // If everything worked, reload the page to refresh the data
        if (response.ok) {
          location.reload('/');
        } else {
          showAlert(
            'alert-danger',
            'Whoops! Looks like something went wrong on our end. Let\'s try again!'
          );
        }
      }

      deleteBurger();
    }
  });

  // // // // // // // //
  // HELPER FUNCTIONS  //
  // // // // // // // //

  // Helper: Find and SQL proof apostrophes in user input
  function replaceQuotes(str) {
    const strArr = str.split('');
    const outputArr = [];

    for (let i = 0; i < strArr.length; i++) {
      outputArr.push(strArr[i]);

      if (strArr[i] === "'") {
        outputArr.push(strArr[i]);
      }
    }

    return outputArr.join('');
  }

  // Helper: Create alert
  function showAlert(className, message) {
    // Create alert div element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${className} mt-2 d-flex justify-content-center align-items-center`;

    // Create alert message
    const paragraph = document.createElement('p');
    paragraph.className = `roboto mb-0`;
    paragraph.innerText = message;

    // Add message to alert div
    alertDiv.appendChild(paragraph);

    // Insert into the DOM
    container.insertBefore(alertDiv, form);

    // Remove alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }
});
