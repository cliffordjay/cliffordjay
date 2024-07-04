<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> My Homepage </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>  </h2>
                <p>By Clifford Jay</p>
                <hr class="hr" />
            </div>
        </div>
        <div class="row">
            <!-- Product 1 -->
            <div class="col-4 text-center">
                <label id="product1">ROLEX</label>   
                <img src="pic1.jfif" style="width:200px;height:250px;" class="img-thumbnail"/><br>
                <label for="product1" id="price1">30000.00</label>
                <input type="number" class="form-control" id="qty1" placeholder="Enter quantity"/><br>
            </div>
            <!-- Product 2 -->
            <div class="col-4 text-center">
                <label id="product2">G-SHOCK</label>   
                <img src="pic2.jpg" style="width:200px;height:250px;" class="img-thumbnail"/><br>
                <label for="product2" id="price2">70000.00</label>
                <input type="number" class="form-control" id="qty2" placeholder="Enter quantity"/><br>
            </div>
            <!-- Product 3 -->
            <div class="col-4 text-center">
                <label id="product3">YAMAHA AEROX </label>   
                <img src="pic2.jpg" style="width:200px;height:250px;" class="img-thumbnail"/><br>
                <label for="product3" id="price3">150000.00</label>
                <input type="number" class="form-control" id="qty3" placeholder="Enter quantity"/><br>
            </div>
        </div>
        <div class="row">
            <!-- Product 4 -->
            <div class="col-4 text-center">
                <label id="product4">YAMAHA MIO GEAR</label>   
                <img src="pic2.jpg" style="width:200px;height:250px;" class="img-thumbnail"/><br>
                <label for="product4" id="price4">90000.00</label>
                <input type="number" class="form-control" id="qty4" placeholder="Enter quantity"/><br>
            </div>
            <!-- Product 5 -->
            <div class="col-4 text-center">
                <label id="product5">SUZUKI RAIDER150</label>   
                <img src="raider.png" style="width:200px;height:250px;" class="img-thumbnail"/><br>
                <label for="product5" id="price5">100000.00</label>
                <input type="number" class="form-control" id="qty5" placeholder="Enter quantity"/><br>
            </div>
            <!-- Product 6 -->
            <div class="col-4 text-center">
                <label id="product6">SUZUKI SMASH FI</label>   
                <img src="smash.png" style="width:200px;height:250px;" class="img-thumbnail"/><br>
                <label for="product6" id="price6">90000.00</label>
                <input type="number" class="form-control" id="qty6" placeholder="Enter quantity"/><br>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <label for="carts">Orders</label><br>
                <textarea class="form-control" rows="10" id="carts" readonly></textarea><br>
                <input type="number" class="form-control" id="cash" placeholder="Cash Tendered"/><br>
                <input type="text" class="form-control border-0" id="change" readonly placeholder="Change"/>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
