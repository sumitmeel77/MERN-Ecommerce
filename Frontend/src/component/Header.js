import React from 'react'
import logo from '../images/logo.png';
export default function Header() {
    return <>
        <section className="header-main border-bottom bg-white">
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 "> <img className="d-none d-md-flex" src={logo} width="100" alt="" /> </div>
                    <div className="col-md-1"></div>
                    {/* <div className="col-md-3">
                        <div className="d-flex form-inputs"> <input className="form-control" type="text" placeholder="Search product..." /><i class="fa fa-search"></i></div>
                    </div> */}
                    <div className="col-md-3">order online or call us 70-238-276-50</div>
                    <div className="col-md-2" style={{ "paddingLeft": "5%" }}>
                        <div className="d-flex d-none d-md-flex flex-row align-items-center"> <span className="shop-bag"><i class="fa fa-shopping-cart" style={{ "color": "black" }}></i></span>
                            <div className="d-flex flex-column ms-2"> <span className="qty">1 Product</span> <span className="fw-bold"><i class="fa fa-rupee"></i> 27.90</span> </div>
                        </div>
                    </div>
                    <div class="dropdown col-md-2">
                        <button type="button" class="btn mx-3 text-dark">Login</button>
                        <button type="button" class="btn text-dark">Register</button>
                    </div>

                </div>
            </div>
        </section>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ "backgroundColor": "#4ba838" }}>
            <div className="container-fluid justify-content-center" >
                <ul class="navbar-nav ">
                    <li class="nav-item"> <a class="nav-link pe-3 me-4 fw-bold active" aria-current="page" href="/">HOME</a> </li>
                    <li class="nav-item"> <a class="nav-link pe-3 me-4 fw-bold active" href="/">SHOP</a> </li>
                    <li class="nav-item"> <a class="nav-link pe-3 me-4 fw-bold active" href="/">PAGES</a> </li>
                    <li class="nav-item"> <a class="nav-link pe-3 me-4 fw-bold active" href="/">BLOG</a> </li>
                    <li class="nav-item"> <a class="nav-link pe-3 me-4 fw-bold active" href="/">CONTACT</a> </li>
                </ul>
            </div>
        </nav>

        <style jsx>{`
        .navbar-nav{
            background-color:008000
        }
        .form-inputs {
            position: relative
        }
        .form-inputs .form-control {
            height: 45px
        }

        .form-inputs .form-control:focus {
            box-shadow: none;
            border: 1px solid #000
        }

        .form-inputs i {
            position: absolute;
            right: 10px;
            top: 15px
        }
        .shop-bag {
            background-color: #fff;
            color: #fff;
            height: 40px;
            width: 40px;
            font-size: 25px;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center
        }

        .qty {
            font-size: 12px
        }
        .col-lg-3 .btn.btn-primary:hover {
            background-color: #aadf5a
        }
      `}</style>
    </>
}
