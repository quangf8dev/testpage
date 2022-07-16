var footer = document.getElementById('footer');
footer.innerHTML=`
<footer class="footer bg-red-light w-100 h-25 p-3 d-flex justify-content-around">
<i class="fab text-center text-white fs-1 fa-instagram"></i>
<i class="fab text-center text-white fs-1 fa-facebook"></i>
<i class="fab text-center text-white fs-1 fa-youtube"></i>
</footer>
`
var cartbtn = document.getElementById('cart-element-btn')
cartbtn.innerHTML=`
<div class="modal-content">
<button type="button" class="btn-cart-close rounded-circle m-1 position-absolute top-0 end-0" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
<header class="justify-content-center d-flex w-100">
    <p class="fs-1 text-s text-cursive mt-1">Your Bag</p>
</header>
<div class="content-cart container fuild w-100 px-3 ">
    <section class="container content-section">
        <div class="cart-row">
            <span class="cart-item cart-header cart-column text-cursive">ITEM</span>
            <span class="cart-price cart-header cart-column text-cursive">PRICE</span>
            <span class="cart-quantity cart-header cart-column text-cursive">QUANTITY</span>
        </div>
        <div class="cart-items">
        </div>
        <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$0</span>
        </div>
        <button class="btn bg-primary-5 text-white btn-purchase fs-5 mx-5" type="button">PURCHASE</button>
    </section>
</div>
<div class="modal-footer">
</div>
</div>
`
var navbarspage = document.getElemegetById('nav-pages-setup');
navbarspage.innerHTML =`
<nav class="navbar navbar-expand-lg ">
        <div class="container-fluid d-flex">
            <!-- Mobile menu -->
            <button id="open_side"  class="toggle-nav bg-primary-5 text-white btn ">
            <i class="fas fa-bars"></i>
            </button>
            <!-- Nav menu -->
            <div class="collapse navbar-collapse col-6  text-conten " id="navbarNavDropdown">
                <ul class="navbar-nav m-0">
                  <li class="nav-item mx-3">
                    <a  class=" fs-5 nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item mx-3">
                    <a  class=" fs-5 nav-link" href="#">Products</a>
                  </li>
                  <li class="nav-item mx-3">
                    <a  class=" fs-5 nav-link" href="#">About</a>
                  </li>
                </ul>
            </div>
            <!-- Nav brand -->
            <a href="#" class="navbar-brand fs-1 text-cursive col-4 justify-content-center">Bakasen</a>
            <!-- button  -->
            <button type="button" class="btn btn-outline-secondary position-relative mx-5">
                <i class="fas fa-shopping-cart fs-3 "></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle p-1 bg-danger">
                  1+</span>
            </button>
        </div>
    </nav>
` 
