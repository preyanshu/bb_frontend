import React ,{useEffect}from 'react'

// import "../dist/output.css" 
import "./styles.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    Link
  } from "react-router-dom";






const Home = () => {
  let menuBtn=null;
  let cancelBtn=null;
  let items=null;
 
      // const form = document.querySelector("form");
      useEffect(() => {
        
       
         menuBtn = document.querySelector(".menu-icon span");
         
        cancelBtn = document.querySelector(".cancel-icon");
        items = document.querySelector(".nav-items")
         
    
         
          
        
      }, []);
    
  return (
    <div style={{position:"absolute",top:"-23px",left:"0px",width:100+"vw",height:""}}>
    <body class="d-flex flex-column h-100" style={{backgroundColor:"#181822",color:"white"}}>
        <main class="flex-shrink-0">
            {/* <!-- Navigation--> */}
            <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container px-5 mt-3" style={{backgroundColor:"#21222D"}}>
                    <a class="navbar-brand" href="index.html">VIVID</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <Link class="btn btn-outline-light btn-lg px-4" to="/login">Login</Link> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Header--> */}
            <header class=" py-5">
                <div class="container px-5 mt-5" style={{backgroundColor:"#21222D"}}>
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Vivid for colleges</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <Link class="btn btn-primary btn-lg px-4 me-sm-3" to="/signup" style={{backgroundColor:"#914EC2",border:"0px"}}>Sign Up</Link>
                                    <Link class="btn btn-outline-light btn-lg px-4" to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center" style={{marginBottom:"-22px"}}>
                            
                        <dotlottie-player src="https://lottie.host/c5f48205-7f11-4532-a270-6b290c1f44cd/ogHQjq3pax.json" background="transparent" speed="1" style={{height:"400px"}} loop autoplay></dotlottie-player>
                            
                            </div>
                    </div>
                </div>
            </header>
            {/* <!-- Features section--> */}
            <section class="py-5" id="features">
                <div class="container p-5 my-5" style={{backgroundColor:"#21222D"}}>
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0 mt-3"><h2 class="fw-bolder mb-0">A better way to start building.</h2></div>
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:"#914EC2"}}><i class="bi bi-collection"></i></div>
                                    <h2 class="h5">Featured title</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:"#914EC2"}}><i class="bi bi-building" ></i></div>
                                    <h2 class="h5">Featured title</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:"#914EC2"}}><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Featured title</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature  bg-gradient text-white rounded-3 mb-3" style={{backgroundColor:"#914EC2"}}><i class="bi bi-toggles2" ></i></div>
                                    <h2 class="h5">Featured title</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Testimonial section--> */}
            <div class="py-5 " style={{backgroundColor:"#181822"}}>
                <div class="container p-5 my-5" style={{backgroundColor:"#21222D"}}>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10 col-xl-7">
                            <div class="text-center">
                                <div class="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                    <div class="fw-bold">
                                        Tom Ato
                                        <span class="fw-bold text-primary mx-1">/</span>
                                        CEO, Pomodoro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog preview section--> */}
            <section class="py-5">
                <div class="container p-5 my-5" style={{backgroundColor:"#21222D"}}>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">Features</h2>
                                <p class="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5" >
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                                <div class="card-body p-4" style={{backgroundColor:"#302341"}}>
                                    {/* <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div> */}
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3" style={{color:"white"}}>Blog post title</h5></a>
                                    <p class="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://dummyimage.com/600x350/adb5bd/495057" alt="..." />
                                <div class="card-body p-4" style={{backgroundColor:"#302341"}}>
                                    {/* <div class="badge bg-primary bg-gradient rounded-pill mb-2">Media</div> */}
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3"style={{color:"white"}}>Another blog post title</h5></a>
                                    <p class="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
                                <div class="card-body p-4" style={{backgroundColor:"#302341"}}>
                                    {/* <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div> */}
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3" style={{color:"white"}} >The last blog post title is a little bit longer than the others</h5></a>
                                    <p class="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                {/* <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">Evelyn Martinez</div>
                                                <div class="text-muted">April 2, 2023 &middot; 10 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Call to action--> */}
                    <aside class="bg-gradient rounded-3 p-4 p-sm-5 mt-5" style={{backgroundColor:"#914EC2"}}>
                        <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div class="mb-4 mb-xl-0">
                                <div class="fs-3 fw-bold text-white">New products, delivered to you.</div>
                                <div class="text-white-50">Sign up for our newsletter for the latest updates.</div>
                            </div>
                            <div class="ms-xl-4">
                                <div class="input-group mb-2">

                                    <button class="btn btn-outline-light bg-light" style={{color:"#914EC2",fontFamily:"sans-serif",fontSize:"2rem",fontWeight:"675"}} type="button" >Get Started</button>
                                    
                                </div>
                                {/* <div class="small text-white-50">We care about privacy, and will never share your data.</div> */}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
        {/* <!-- Footer--> */}
        <footer class="" style={{backgroundColor:"#181822",padding:"30px"}}>
            <div class="container py-3" style={{backgroundColor:"#21222D"}}>
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> */}
        {/* <!-- Core theme JS--> */}
        {/* <script src="js/scripts.js"></script> */}
    </body>
    </div>)
}

export default Home
