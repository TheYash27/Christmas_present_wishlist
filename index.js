/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

// Create the wishlist array with objects for each item
const wishlist = [
  { name: "Cozy slippers", description: "To keep my feet warm by the fireplace", linkToPurchase: "https://www.amazon.in/NAT-Fluffy-Indoor-Slipper-Flip-Flops/dp/B0CHP8GY4W/ref=asc_df_B0CHP8GY4W/?tag=googleshopdes-21&linkCode=df0&hvadid=670834440123&hvpos=&hvnetw=g&hvrand=12979178128020358786&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062215&hvtargid=pla-2203728025193&psc=1&mcid=a48b54673a7c3fa2bf1ea80cbb06a286" },
  { name: "New book by my favorite author", description: "To get lost in a great story", linkToPurchase: "https://www.amazon.in/ALCHEMIST-PAULO-COELHO-PAPERBACK-ENGLISH/dp/B0CJY19L41/ref=asc_df_B0CJY19L41/?tag=googleshopdes-21&linkCode=df0&hvadid=666367402718&hvpos=&hvnetw=g&hvrand=912915897617172514&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062215&hvtargid=pla-2265161458285&psc=1&mcid=d55c8ae2174931a19e846fc8a3c3c713" },
  { name: "Hot chocolate kit", description: "For delicious winter evenings", linkToPurchase: "https://www.amazon.in/Country-Bean-Classic-Chocolate-Special/dp/B081V3ZW73/ref=asc_df_B081V3ZW73/?tag=googleshopdes-21&linkCode=df0&hvadid=396988678992&hvpos=&hvnetw=g&hvrand=10843771756779239329&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007785&hvtargid=pla-843085292386&psc=1&mcid=1bfd82d92cf63706b68e5fe94bfad97b&ext_vrnc=hi&gclid=CjwKCAiAhJWsBhAaEiwAmrNyq0xGZCgkfORGB3KpUoEkzDdg61VcnFO0IP6TZ4HotWfwgALeXe4jZxoCzNMQAvD_BwE" },
];

// Function to display the wishlist on the page
function displayWishlist() {
  const wishlistContainer = document.getElementById("wishlist");
  wishlistContainer.innerHTML = ""; // Clear previous content

  for (const item of wishlist) {
    const present = document.createElement("div");
    present.classList.add("present");

    const name = document.createElement("h3");
    name.textContent = item.name;
    present.appendChild(name);

    const description = document.createElement("p");
    description.textContent = item.description;
    present.appendChild(description);
    
    const linkToPurchase = document.createElement("a");
    linkToPurchase.href = item.linkToPurchase;
    linkToPurchase.textContent = "Link to Purchase";
    present.appendChild(linkToPurchase)

    wishlistContainer.appendChild(present);
  }
}

// Function to add a new item to the wishlist
function addItem() {
  const nameInput = document.getElementById("itemName");
  const descriptionInput = document.getElementById("itemDescription");
  const linkToPurchaseInput = document.getElementById("itemLinkToPurchase")

  const newItem = {
    name: nameInput.value,
    description: descriptionInput.value,
    linkToPurchase: linkToPurchaseInput.value
  };

  wishlist.push(newItem);
  displayWishlist();

  nameInput.value = "";
  descriptionInput.value = "";
  linkToPurchaseInput.value = ""
}

// Function to remove an item from the wishlist
function removeItem() {
  const indexInput = document.getElementById("itemIndex")
  
  wishlist.splice(indexInput.value, 1);
  displayWishlist();
}
