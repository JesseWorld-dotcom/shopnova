/* =========================================================
       SHOPNOVA DATA
       ========================================================= */

    const products = [

      {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 45000,
        description:
          "Comfortable wireless headphones for everyday listening.",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
        badge: "Popular"
      },

      {
        id: 2,
        name: "Classic Wrist Watch",
        category: "Accessories",
        price: 38000,
        description:
          "A clean and timeless watch for everyday style.",
        image:
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
        badge: "New"
      },

      {
        id: 3,
        name: "Urban Backpack",
        category: "Fashion",
        price: 28000,
        description:
          "A practical backpack for school, work and travel.",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        badge: "Best Seller"
      },

      {
        id: 4,
        name: "Digital Camera",
        category: "Electronics",
        price: 185000,
        description:
          "Capture your favorite moments with a compact camera.",
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
        badge: "Featured"
      },

      {
        id: 5,
        name: "Smart Laptop",
        category: "Electronics",
        price: 520000,
        description:
          "A sleek laptop for work, learning and creativity.",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
        badge: "Premium"
      },

      {
        id: 6,
        name: "Minimal Desk Setup",
        category: "Home",
        price: 65000,
        description:
          "Upgrade your workspace with a clean modern setup.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
        badge: "Trending"
      },

      {
        id: 7,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 55000,
        description:
          "A satisfying keyboard for productivity and gaming.",
        image:
          "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=85",
        badge: "Popular"
      },

      {
        id: 8,
        name: "Premium Water Bottle",
        category: "Accessories",
        price: 14500,
        description:
          "A reusable bottle designed for everyday use.",
        image:
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
        badge: "Eco"
      },

      {
        id: 9,
        name: "Modern Sunglasses",
        category: "Fashion",
        price: 22000,
        description:
          "Simple modern frames for a clean everyday look.",
        image:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
        badge: "New"
      },

      {
        id: 10,
        name: "Portable Speaker",
        category: "Electronics",
        price: 35000,
        description:
          "Compact wireless sound for your everyday moments.",
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
        badge: "Hot"
      },

      {
        id: 11,
        name: "Leather Wallet",
        category: "Accessories",
        price: 18000,
        description:
          "A compact wallet with a classic minimalist design.",
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
        badge: "Classic"
      },

      {
        id: 12,
        name: "Comfort Chair",
        category: "Home",
        price: 125000,
        description:
          "A comfortable modern chair for your workspace.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
        badge: "Home"
      }

    ];


    /* =========================================================
       STATE
       ========================================================= */

    let cart =
      JSON.parse(
        localStorage.getItem("shopnova_cart")
      ) || [];

    let favorites =
      JSON.parse(
        localStorage.getItem("shopnova_favorites")
      ) || [];

    let wallet =
      Number(
        localStorage.getItem("shopnova_wallet")
      ) || 0;

    let orders =
      Number(
        localStorage.getItem("shopnova_orders")
      ) || 0;

    let profile =
      JSON.parse(
        localStorage.getItem("shopnova_profile")
      ) || {
        name: "Ogie",
        email: "ogie.shopnova@gmail.com"
      };


    /* =========================================================
       DOM
       ========================================================= */

    const productGrid =
      document.getElementById(
        "productGrid"
      );

    const searchInput =
      document.getElementById(
        "searchInput"
      );

    const categoryFilter =
      document.getElementById(
        "categoryFilter"
      );

    const sortSelect =
      document.getElementById(
        "sortSelect"
      );

    const cartList =
      document.getElementById(
        "cartList"
      );

    const cartCount =
      document.getElementById(
        "cartCount"
      );

    const walletBalance =
      document.getElementById(
        "walletBalance"
      );

    const profileWallet =
      document.getElementById(
        "profileWallet"
      );

    const profileOrders =
      document.getElementById(
        "profileOrders"
      );

    const statCart =
      document.getElementById(
        "statCart"
      );

    const statFavorites =
      document.getElementById(
        "statFavorites"
      );

    const statOrders =
      document.getElementById(
        "statOrders"
      );

    const statBalance =
      document.getElementById(
        "statBalance"
      );

    const profileName =
      document.getElementById(
        "profileName"
      );

    const profileEmail =
      document.getElementById(
        "profileEmail"
      );

    const profileAvatar =
      document.getElementById(
        "profileAvatar"
      );

    const toastContainer =
      document.getElementById(
        "toastContainer"
      );


    /* =========================================================
       HELPERS
       ========================================================= */

    function formatMoney(value) {
      return new Intl.NumberFormat(
        "en-NG",
        {
          style: "currency",
          currency: "NGN",
          maximumFractionDigits: 0
        }
      ).format(value);
    }


    function saveState() {
      localStorage.setItem(
        "shopnova_cart",
        JSON.stringify(cart)
      );

      localStorage.setItem(
        "shopnova_favorites",
        JSON.stringify(favorites)
      );

      localStorage.setItem(
        "shopnova_wallet",
        String(wallet)
      );

      localStorage.setItem(
        "shopnova_orders",
        String(orders)
      );

      localStorage.setItem(
        "shopnova_profile",
        JSON.stringify(profile)
      );
    }


    function getInitials(name) {
      return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase() || "SN";
    }


    /* =========================================================
       TOAST
       ========================================================= */

    function showToast(
      title,
      message,
      type = "success"
    ) {

      const toast =
        document.createElement("div");

      toast.className =
        `toast ${type}`;

      let icon =
        type === "error"
          ? "fa-circle-exclamation"
          : "fa-circle-check";

      toast.innerHTML = `
        <div class="toast-icon">
          <i class="fa-solid ${icon}"></i>
        </div>

        <div>
          <div class="toast-title">
            ${title}
          </div>

          <div class="toast-message">
            ${message}
          </div>
        </div>
      `;

      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("hide");

        setTimeout(() => {
          toast.remove();
        }, 300);

      }, 3200);
    }


    /* =========================================================
       PRODUCTS
       ========================================================= */

    function renderProducts() {

      const search =
        searchInput.value
          .trim()
          .toLowerCase();

      const category =
        categoryFilter.value;

      const sort =
        sortSelect.value;

      let filtered =
        products.filter(product => {

          const matchesSearch =
            product.name
              .toLowerCase()
              .includes(search) ||
            product.description
              .toLowerCase()
              .includes(search) ||
            product.category
              .toLowerCase()
              .includes(search);

          const matchesCategory =
            category === "all" ||
            product.category === category;

          return (
            matchesSearch &&
            matchesCategory
          );
        });


      if (sort === "low") {
        filtered.sort(
          (a, b) => a.price - b.price
        );
      }

      if (sort === "high") {
        filtered.sort(
          (a, b) => b.price - a.price
        );
      }

      if (sort === "name") {
        filtered.sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        );
      }


      document.getElementById(
        "productResultCount"
      ).textContent =
        `${filtered.length} ${
          filtered.length === 1
            ? "product"
            : "products"
        }`;


      if (!filtered.length) {

        productGrid.innerHTML = `
          <div class="empty-products">
            <i class="fa-solid fa-box-open"></i>

            <h3>
              No products found
            </h3>

            <p>
              Try another search or category.
            </p>
          </div>
        `;

        return;
      }


      productGrid.innerHTML =
        filtered.map(product => {

          const isFavorite =
            favorites.includes(product.id);

          return `
            <article class="product-card">

              <div class="product-image-wrap">

                <img
                  class="product-image"
                  src="${product.image}"
                  alt="${product.name}"
                  loading="lazy"
                >

                <span class="product-badge">
                  ${product.badge}
                </span>

                <button
                  class="favorite-btn ${
                    isFavorite
                      ? "active"
                      : ""
                  }"
                  data-favorite="${product.id}"
                  title="Favorite"
                >
                  <i class="${
                    isFavorite
                      ? "fa-solid"
                      : "fa-regular"
                  } fa-heart"></i>
                </button>

              </div>


              <div class="product-info">

                <div class="product-category">
                  ${product.category}
                </div>

                <h3 class="product-name">
                  ${product.name}
                </h3>

                <p class="product-description">
                  ${product.description}
                </p>


                <div class="product-bottom">

                  <span class="price">
                    ${formatMoney(
                      product.price
                    )}
                  </span>

                  <button
                    class="add-cart-btn"
                    data-add-cart="${product.id}"
                    title="Add to cart"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>

                </div>

              </div>

            </article>
          `;
        }).join("");
    }


    /* =========================================================
       CART
       ========================================================= */

    function getCartItemCount() {
      return cart.reduce(
        (total, item) =>
          total + item.quantity,
        0
      );
    }


    function getCartSubtotal() {
      return cart.reduce(
        (total, item) =>
          total +
          item.price *
          item.quantity,
        0
      );
    }


    function renderCart() {

      const itemCount =
        getCartItemCount();

      const subtotal =
        getCartSubtotal();

      const delivery =
        subtotal > 0 ? 2500 : 0;

      const discount =
        subtotal >= 200000
          ? 10000
          : 0;

      const total =
        Math.max(
          0,
          subtotal +
          delivery -
          discount
        );


      cartCount.textContent =
        itemCount;

      document.getElementById(
        "cartSubtotal"
      ).textContent =
        formatMoney(subtotal);

      document.getElementById(
        "cartDelivery"
      ).textContent =
        formatMoney(delivery);

      document.getElementById(
        "cartDiscount"
      ).textContent =
        discount > 0
          ? `-${formatMoney(discount)}`
          : formatMoney(0);

      document.getElementById(
        "cartTotal"
      ).textContent =
        formatMoney(total);


      if (!cart.length) {

        cartList.innerHTML = `
          <div class="empty-cart">

            <i class="fa-solid fa-cart-shopping"></i>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Add some products and they
              will appear here.
            </p>

            <a
              href="#products"
              class="btn btn-primary"
              style="margin-top:18px;"
            >
              <i class="fa-solid fa-store" style="font-size: 20px;"></i>
              Browse Products
            </a>

          </div>
        `;

        updateStats();
        return;
      }


      cartList.innerHTML =
        cart.map(item => {

          return `
            <div class="cart-item">

              <img
                class="cart-item-image"
                src="${item.image}"
                alt="${item.name}"
              >


              <div>

                <div class="cart-item-name">
                  ${item.name}
                </div>

                <div class="cart-item-category">
                  ${item.category}
                </div>

                <div class="cart-item-price">
                  ${formatMoney(item.price)}
                </div>


                <div class="quantity-controls">

                  <button
                    data-quantity-minus="${item.id}"
                    title="Decrease"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>

                  <span>
                    ${item.quantity}
                  </span>

                  <button
                    data-quantity-plus="${item.id}"
                    title="Increase"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>

                </div>

              </div>


              <div class="cart-item-right">

                <div class="cart-item-total">
                  ${formatMoney(
                    item.price *
                    item.quantity
                  )}
                </div>

                <button
                  class="remove-item"
                  data-remove="${item.id}"
                >
                  <i class="fa-regular fa-trash-can"></i>
                  Remove
                </button>

              </div>

            </div>
          `;

        }).join("");


      updateStats();
    }


    function addToCart(id) {

      const product =
        products.find(
          item => item.id === id
        );

      if (!product) return;


      const existing =
        cart.find(
          item => item.id === id
        );


      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          ...product,
          quantity: 1
        });
      }


      saveState();
      renderCart();

      showToast(
        "Added to cart",
        `${product.name} is now in your cart.`
      );
    }


    function changeQuantity(
      id,
      amount
    ) {

      const item =
        cart.find(
          product => product.id === id
        );

      if (!item) return;


      item.quantity += amount;


      if (item.quantity <= 0) {
        cart =
          cart.filter(
            product => product.id !== id
          );
      }


      saveState();
      renderCart();
    }


    function removeFromCart(id) {

      const item =
        cart.find(
          product => product.id === id
        );

      cart =
        cart.filter(
          product => product.id !== id
        );

      saveState();
      renderCart();

      if (item) {
        showToast(
          "Removed",
          `${item.name} was removed from your cart.`
        );
      }
    }


    /* =========================================================
       FAVORITES
       ========================================================= */

    function toggleFavorite(id) {

      const product =
        products.find(
          item => item.id === id
        );

      if (!product) return;


      if (favorites.includes(id)) {

        favorites =
          favorites.filter(
            favoriteId =>
              favoriteId !== id
          );

        showToast(
          "Removed from favorites",
          product.name
        );

      } else {

        favorites.push(id);

        showToast(
          "Added to favorites",
          product.name
        );
      }


      saveState();
      renderProducts();
      updateStats();
    }


    /* =========================================================
       WALLET
       ========================================================= */

    function updateWallet() {

      const formatted =
        formatMoney(wallet);

      walletBalance.textContent =
        formatted;

      profileWallet.textContent =
        formatted;

      statBalance.textContent =
        formatted;
    }


    function addMoney(amount) {

      amount =
        Number(amount);

      if (
        !Number.isFinite(amount) ||
        amount <= 0
      ) {

        showToast(
          "Invalid amount",
          "Please enter a valid amount.",
          "error"
        );

        return;
      }


      wallet += amount;

      saveState();
      updateWallet();

      closeModal("moneyModal");

      document.getElementById(
        "moneyAmount"
      ).value = "";


      document
        .querySelectorAll(".amount-option")
        .forEach(button =>
          button.classList.remove("active")
        );


      showToast(
        "Balance updated",
        `${formatMoney(amount)} was added to your demo wallet.`
      );
    }


    /* =========================================================
       STATS
       ========================================================= */

    function updateStats() {

      const itemCount =
        getCartItemCount();

      statCart.textContent =
        itemCount;

      statFavorites.textContent =
        favorites.length;

      statOrders.textContent =
        orders;

      profileOrders.textContent =
        orders;
    }


    /* =========================================================
       PROFILE
       ========================================================= */

    function updateProfile() {

      profileName.textContent =
        profile.name;

      profileEmail.textContent =
        profile.email;

      const initials =
        getInitials(profile.name);

      profileAvatar.textContent =
        initials;

      document.getElementById(
        "modalAvatar"
      ).textContent =
        initials;

      document.getElementById(
        "demoName"
      ).value =
        profile.name;

      document.getElementById(
        "demoEmail"
      ).value =
        profile.email;
    }


    /* =========================================================
       MODALS
       ========================================================= */

    function openModal(id) {

      const modal =
        document.getElementById(id);

      if (!modal) return;

      modal.classList.add("active");

      document.body.classList.add(
        "modal-open"
      );
    }


    function closeModal(id) {

      const modal =
        document.getElementById(id);

      if (!modal) return;

      modal.classList.remove("active");

      document.body.classList.remove(
        "modal-open"
      );
    }


    /* =========================================================
       EVENT LISTENERS
       ========================================================= */

    searchInput.addEventListener(
      "input",
      renderProducts
    );

    categoryFilter.addEventListener(
      "change",
      renderProducts
    );

    sortSelect.addEventListener(
      "change",
      renderProducts
    );


    productGrid.addEventListener(
      "click",
      event => {

        const addButton =
          event.target.closest(
            "[data-add-cart]"
          );

        const favoriteButton =
          event.target.closest(
            "[data-favorite]"
          );


        if (addButton) {

          addToCart(
            Number(
              addButton.dataset.addCart
            )
          );

        }


        if (favoriteButton) {

          toggleFavorite(
            Number(
              favoriteButton.dataset.favorite
            )
          );

        }

      }
    );


    cartList.addEventListener(
      "click",
      event => {

        const plus =
          event.target.closest(
            "[data-quantity-plus]"
          );

        const minus =
          event.target.closest(
            "[data-quantity-minus]"
          );

        const remove =
          event.target.closest(
            "[data-remove]"
          );


        if (plus) {

          changeQuantity(
            Number(
              plus.dataset.quantityPlus
            ),
            1
          );

        }


        if (minus) {

          changeQuantity(
            Number(
              minus.dataset.quantityMinus
            ),
            -1
          );

        }


        if (remove) {

          removeFromCart(
            Number(
              remove.dataset.remove
            )
          );

        }

      }
    );


    /* =========================================================
       ADD MONEY
       ========================================================= */

    document
      .getElementById("addMoneyBtn")
      .addEventListener(
        "click",
        () => openModal("moneyModal")
      );


    document
      .getElementById("confirmAddMoney")
      .addEventListener(
        "click",
        () => {

          addMoney(
            document.getElementById(
              "moneyAmount"
            ).value
          );

        }
      );


    document
      .querySelectorAll(".amount-option")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".amount-option"
              )
              .forEach(option =>
                option.classList.remove(
                  "active"
                )
              );

            button.classList.add(
              "active"
            );

            document.getElementById(
              "moneyAmount"
            ).value =
              button.dataset.amount;

          }
        );

      });


    /* =========================================================
       PROFILE
       ========================================================= */

    document
      .getElementById("profileBtn")
      .addEventListener(
        "click",
        () => openModal("profileModal")
      );


    document
      .getElementById("saveProfile")
      .addEventListener(
        "click",
        () => {

          const name =
            document.getElementById(
              "demoName"
            ).value.trim();

          const email =
            document.getElementById(
              "demoEmail"
            ).value.trim();


          if (!name || !email) {

            showToast(
              "Missing information",
              "Please enter your name and email.",
              "error"
            );

            return;
          }


          profile = {
            name,
            email
          };


          saveState();
          updateProfile();
          closeModal("profileModal");


          showToast(
            "Profile saved",
            "Your ShopNova demo profile was updated."
          );

        }
      );


    /* =========================================================
       CLOSE MODALS
       ========================================================= */

    document
      .querySelectorAll(
        "[data-close-modal]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            closeModal(
              button.dataset.closeModal
            );

          }
        );

      });


    document
      .querySelectorAll(".modal")
      .forEach(modal => {

        modal.addEventListener(
          "click",
          event => {

            if (
              event.target === modal
            ) {

              closeModal(
                modal.id
              );

            }

          }
        );

      });


    document.addEventListener(
      "keydown",
      event => {

        if (event.key === "Escape") {

          document
            .querySelectorAll(
              ".modal.active"
            )
            .forEach(modal =>
              closeModal(modal.id)
            );

        }

      }
    );


    /* =========================================================
       CLEAR CART
       ========================================================= */

    document
      .getElementById("clearCartBtn")
      .addEventListener(
        "click",
        () => {

          if (!cart.length) {

            showToast(
              "Cart is already empty",
              "There are no products to remove."
            );

            return;
          }


          cart = [];

          saveState();
          renderCart();


          showToast(
            "Cart cleared",
            "All products were removed from your cart."
          );

        }
      );


    /* =========================================================
       CHECKOUT
       ========================================================= */

    document
      .getElementById("checkoutBtn")
      .addEventListener(
        "click",
        () => {

          if (!cart.length) {

            showToast(
              "Cart is empty",
              "Add a product before checking out.",
              "error"
            );

            return;
          }


          const total =
            getCartSubtotal() +
            2500 -
            (
              getCartSubtotal() >= 200000
                ? 10000
                : 0
            );


          if (wallet < total) {

            showToast(
              "Insufficient demo balance",
              "Add money to your demo wallet before checkout.",
              "error"
            );

            openModal("moneyModal");

            return;
          }


          wallet -= total;

          orders += 1;

          cart = [];

          saveState();

          updateWallet();
          updateStats();
          renderCart();


          showToast(
            "Demo order completed",
            `Your demo order total was ${formatMoney(total)}.`
          );

        }
      );


    /* =========================================================
       CONTACT FORM
       ========================================================= */

    document
      .getElementById("contactForm")
      .addEventListener(
        "submit",
        async event => {

          event.preventDefault();


          const form =
            event.currentTarget;

          const submitButton =
            form.querySelector(
              "button[type='submit']"
            );


          submitButton.disabled = true;

          submitButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
          `;


          try {

            const response =
              await fetch(
                form.action,
                {
                  method: "POST",
                  body: new FormData(form),
                  headers: {
                    Accept:
                      "application/json"
                  }
                }
              );


            if (!response.ok) {
              throw new Error(
                "Request failed"
              );
            }


            form.reset();


            showToast(
              "Message sent",
              "Thanks! Your message has been submitted."
            );


          } catch (error) {

            showToast(
              "Message not sent",
              "Something went wrong. Please try again.",
              "error"
            );

          } finally {

            submitButton.disabled = false;

            submitButton.innerHTML = `
              <i class="fa-solid fa-paper-plane"></i>
              Send Message
            `;

          }

        }
      );


    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    const mobileMenuBtn =
      document.getElementById(
        "mobileMenuBtn"
      );

    const navLinks =
      document.getElementById(
        "navLinks"
      );


    mobileMenuBtn.addEventListener(
      "click",
      () => {

        navLinks.classList.toggle(
          "open"
        );


        const icon =
          mobileMenuBtn.querySelector(
            "i"
          );


        if (
          navLinks.classList.contains(
            "open"
          )
        ) {

          icon.className =
            "fa-solid fa-xmark";

        } else {

          icon.className =
            "fa-solid fa-bars";

        }

      }
    );


    document
      .querySelectorAll(
        ".nav-link"
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            navLinks.classList.remove(
              "open"
            );

            mobileMenuBtn
              .querySelector("i")
              .className =
              "fa-solid fa-bars";

          }
        );

      });


    /* =========================================================
       ACTIVE NAV LINK
       ========================================================= */

    const sections =
      document.querySelectorAll(
        "main section[id]"
      );

    const navItems =
      document.querySelectorAll(
        ".nav-link"
      );


    window.addEventListener(
      "scroll",
      () => {

        let current = "home";


        sections.forEach(section => {

          const sectionTop =
            section.offsetTop - 130;

          if (
            window.scrollY >= sectionTop
          ) {

            current =
              section.getAttribute("id");

          }

        });


        navItems.forEach(link => {

          link.classList.remove(
            "active"
          );


          if (
            link.getAttribute("href") ===
            `#${current}`
          ) {

            link.classList.add(
              "active"
            );

          }

        });

      }
    );


    /* =========================================================
       INITIALIZE
       ========================================================= */

    document.getElementById(
      "currentYear"
    ).textContent =
      new Date().getFullYear();


    renderProducts();
    renderCart();
    updateWallet();
    updateProfile();
    updateStats();
