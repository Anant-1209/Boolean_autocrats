const form = document.querySelector("#farmer-form form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = document.querySelector("#product-name").value;
  const productDescription = document.querySelector("#product-description").value;
  const productImage = document.querySelector("#product-image").files[0];
  const productPrice = document.querySelector("#product-price").value;

  // Send product information to the server for processing
  // Example:
  // fetch("/submit-product", {
  //   method: "POST",
  //   body: JSON.stringify({ productName, productDescription, productImage, productPrice }),
  //   headers: { "Content-Type": "application/json" },
  // })
  // .then((res) => res.json())
  // .then((data) => {
  //   if (data.success) {
  //     alert("Product submitted successfully!");
  //   } else {
  //     alert("An error occurred while submitting the product.");
  //   }
  // })
  // .catch((err) => {
  //   console.error(err);
  //   alert("An error occurred while submitting the product.");
  // });
});