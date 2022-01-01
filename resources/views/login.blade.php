<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('bootstrap/css/bootstrap-grid.min.css')}}">


</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">eLearn</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>

        
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
            <button class="btn " type="submit">Search</button>
          </form>
        
          
      </div>
    </div>
  </nav>
  
</nav>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="{{asset('img/first.webp')}}" height= "400px" width="1500px" alt="...">
      </div>
      <div class="carousel-item">
        <img src="{{asset('img/3.webpage')}}"class="d-block w-90" alt="...">
      </div>
      <div class="carousel-item">
        <img src="{{asset('img/')}}" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  
    <div class="row" > 
      <div class="col col-lg-6"> <br>
      <h2 class="a"> About Us</h2><br> <p class="a">
      If you have a full-width webpage, for example, you don't want to create a sidebar just to put your secondary navigation links as it could create an awkward white space when it is not balanced with the other content on the page. Likewise, putting just the links as a text on the page may look awkward. Presenting these additional links inside boxes can create visual balance and avoid awkward white spaces. In this tutorial, we'll show you how to build additional link boxes using Bootstrap.
      Before we get to how to create Bootstrap boxes or tiles, let's talk about the Bootstrap grid system. Bootstrap's grid system consists of columns and rows that hold the content. The rows are placed inside a .container class. The containers are a required element in Bootstrap as they provide proper alignment, padding, and margins. They're also responsive, re-aligning the content at different device breakpoints. Columns are placed inside the rows. Basically, it follows this structur </p>
      </div>

      <div class="col col-lg-1"></div>
    <div class="col col-lg-5"> <br>
    
    <h2>Login to your account</h2> <br> <br>
    <form >
      <input type="text" title="username" placeholder="username" />
      <input type="password" title="username" placeholder="password" />
      <button type="submit" class="bton">Login</button>
      <a class="forgot" href="#">Forgot Username?</a>
    </form>
    </div>
    </div>
  </div>
  <br>
  <br>
  <div class=container>
    <div class="row">
      <div class="col-lg-4"></div> 
      <div class= "col-lg-5" ><h2> What should I learn?</h2></div>
      <div class="col-lg-3"></div>
    </div>

  </div>
  <div class="card-group">
    <div class="card">
      <img src="{{asset('img/download.jpeg')}}" class="card-img-top" alt="..." height="200px" width="100px">
      <div class="card-body">
        <h5 class="card-title">HTML/CSS</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><large>Price: 3000/-</large></p>
      </div>
    </div>
    <div class="card">
      <img src="{{asset('img/java.png')}}" class="card-img-top" alt="..." height="200px" width="100px">
      <div class="card-body">
        <h5 class="card-title">Javascript</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><large>Price: 8000/-</large></p>
      </div>
    </div>
    <div class="card">
      <img src="{{asset('img/download.png')}}" class="card-img-top" alt="..." height="200px" width="100px">
      <div class="card-body">
        <h5 class="card-title">PHP</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><large>Price: 13000/-</large></p>
      </div>
    </div>
  </div>
</body>
</html>