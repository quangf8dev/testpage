// Tải function() làm việc với documents
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)   
} else {
    ready()
}
// Quản lý cart
function ready() {  
    // Hàm xóa cart 
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')  // lấy ra object button remove
    for (var i = 0; i < removeCartItemButtons.length; i++) { // chạy vòng lặp check cái button-remove hiện có
        var button = removeCartItemButtons[i] // cứ mỗi phần tử button được gán cho biến button 
        button.addEventListener('click', removeCartItem) // khi mỗi phần tử đó thực hiên event onclick thì function removeCartItem hoạt động
    }
    // Hàm lấy số lượng và xử lý
    var quantityInputs = document.getElementsByClassName('cart-quantity-input') // lấy ra các phần tử chứa class input
    for (var i = 0; i < quantityInputs.length; i++) {  // dùng vòng lặp để lặp qua các phần tử input đó
        var input = quantityInputs[i] // đặt biến
        input.addEventListener('change', quantityChanged) // Khi giá trị input thay đổi lắng nghe sự kiện đó và xử lý số âm 
    }
    // Xử lý sự kiện khi onclick vào 1 button của 1 cart bất kì
    var addToCartButtons = document.getElementsByClassName('shop-item-button') // đặt biến
    for (var i = 0; i < addToCartButtons.length; i++) { // lặp qua các phần tử cart button
        var button = addToCartButtons[i] // lấy ra từng phần tử rồi gán biến
        console.log(button)
        button.addEventListener('click', addToCartClicked) // thực hiện sự kiện thêm cart khi click vào button mới trỏ
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
// Hàm chốt đơn hàng khi click vào button Purchase
function purchaseClicked() { 
    alert('Thank you for your purchase') // Hiện cửa sổ thông báo
    var cartItems = document.getElementsByClassName('cart-items')[0] // truy xuất vào cart cha
    while (cartItems.hasChildNodes()) { // Nếu cart cha đang có các cart con
        cartItems.removeChild(cartItems.firstChild) // thực hiện xóa lần lượt các cart con đầu tiên
    }
    updateCartTotal() // cập nhật tổng số tiền
}
// Hàm xóa sản phẩm chứa button bạn click
function removeCartItem(event) {  // truyền vào event
    var buttonClicked = event.target // lấy target có nghĩa là lấy đối tượng gây ra event này. là button khi click remove
    buttonClicked.parentElement.parentElement.remove() // từ button bạn click -> truy xuất ngược lên class cha và remove class cha đi
    updateCartTotal() // hàm update số tổng số tiền
}
// Hàm xử lý vấn đề khi bạn chọn số lượng sản phẩm âm
function quantityChanged(event) { 
    var input = event.target // lấy ra sự kiện mà bạn mới làm
    if (isNaN(input.value) || input.value <= 0) { // Nếu giá trị inputvalue khác NaN và input values bé hơn không
        input.value = 1 // trả giá trị đó về 1
    }
    updateCartTotal() // cập nhật tổng số tiền
}
// Hàm thêm cart
function addToCartClicked(event) { // event là button truyền vào
    var button = event.target // lấy target là lấy đối tượng gây ra event này có nghĩa là cái button ta click để thêm cart và cart cha
    var shopItem = button.parentElement.parentElement // Truy cập vào cha của button đó để lấy được thẻ div chứa button đó
    console.log(shopItem)
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText // lấy ra tên của sản phẩm mà button đó click
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText // lấy ra giá tiền của sản phẩm
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src // lấy ra link hình ảnh của sản phẩm
    addItemToCart(title, price, imageSrc) // Thêm div cart con vào cart cha. Giúp hiển thị trên web rằng bạn đã thêm sản phẩm vào giỏ hàng
    updateCartTotal() // cập nhật tổng số tiền
}

function addItemToCart(title, price, imageSrc) { // title: tên sản phẩm, price: giá cả, imageSrc: link ảnh
    var cartRow = document.createElement('div') // Tạo một thẻ div cha
    cartRow.classList.add('cart-row') // Thẻ div cha đó có class là cart-row
    var cartItems = document.getElementsByClassName('cart-items')[0] // Truy xuất vào cart cha đầu tiên
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title') // Lấy ra các class chứa cart-item-title
    for (var i = 0; i < cartItemNames.length; i++) { // Vì nếu click vào sản phẩm đã hiện trong cart-cha rr ta phải lặp qua để lọc ra
        if (cartItemNames[i].innerText == title) { // nếu cart-con đã có trong cart-cha rồi thì thực hiện thông báo cho người dùng
            alert('This item is already added to the cart')
            return
        }
    }
    // Cart con
    var cartRowContents = `
        <div class="cart-item cart-column text-conten">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column text-conten">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Remove</button>
        </div>`
    cartRow.innerHTML = cartRowContents // div cha chứa cart con thêm thuộc tính vào
    cartItems.append(cartRow) //Chèn nội dung, di chuyển thành phần vào trong thành phần khác, nội dung này thường được sắp xếp ở vị trí sau cùng.
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// Hàm update tổng số tiền
function updateCartTotal() { 
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] // Lấy ra cart cha chứa các con. [0] giúp lấy ra Class chứa cart cha đầu tiên
    var cartRows = cartItemContainer.getElementsByClassName('cart-row') // Lấy ra các phần tử là cột hàng ngang của cart cha (cart-row)
    var total = 0 // Tổng bằng 0
    for (var i = 0; i < cartRows.length; i++) { // Vòng lặp lặp qua các phần tử có tên class là cart-row
        var cartRow = cartRows[i] // đặt biến cho từng cart mỗi khi i thay đổi
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] // Lấy ra cart-price đầu tiên trong cartRow
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0] // tương tự cart-price
        var price = parseFloat(priceElement.innerText.replace('$', '')) // replace( hàm bỏ đơn vị tiền ra khỏi số để lấy số tiền mỗi sản phẩm)
        var quantity = quantityElement.value // Lấy ra số lượng của sản phẩm bạn muốn mua
        total = total + (price * quantity) // tổng của sản phẩm đó
    }
    total = Math.round(total * 100) / 100 // Làm tròn tổng
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total // thêm đơn vị tiền vào tổng
}   

const close_side = document.getElementById("close_side");
const sidebar = document.querySelector(".sidebar-overplay");
const open_side = document.getElementById("open_side");
// console.log(open_side)
    open_side.addEventListener('click',()=>{
        sidebar.classList.add("show")
    })
    // console.log(sidebar);
    close_side.addEventListener('click',()=>{
        console.log("hello world");
        sidebar.classList.remove("show")
    })
    
// Loading pages index
const pagehome = document.querySelector(".pagehome")
var classname = document.querySelector(".loadingpage");
console.log(classname);
var opacity = classname.style.opacity;
setTimeout(()=>{
    classname.classList.add('endloadhome')
    pagehome.classList.add('onloadhome')
},2000)

