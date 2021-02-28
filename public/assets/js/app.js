// EVENT: DOM LOAD
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.log('DOM Loaded');
  }

  // EVENT: ADD BURGER
  const addBurgerBtn = document.getElementById('add_burger');

  // Since content is being loaded dynamically, verify that
  // this button is present in the DOM before proceeding

  if (addBurgerBtn) {
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
        const response = await fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(burger),
        });

        // Reset input after API responds to request
        input.value = '';

        // Reload page
        location.reload('/');
      }

      addBurger();
    });
  }

  // EVENT: DEVOUR BURGER

  const uneatenBurgers = document.querySelectorAll('.eaten');

  console.log(uneatenBurgers[0]);

  // uneatenBurgers.forEach(burger => {
  //   console.log(burger.getAttribute('data-id'));
  //   console.log(burger.getAttribute('data-devoured'));
  // });

});
