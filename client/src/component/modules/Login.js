import "./styles/Login.css"
function Login() {
    return(
        <section className="vh-100 sectionlogin">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card cardlogin">
                            <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Login</h3>

                                <div class="form-floating mb-4">
                                <input class="form-control" id="typeUserX-2" type="input" placeholder="Tên đăng nhập"/>
                                <label for="typeUserX-2">Tên đăng nhập</label>
                                </div>

                                <div class="form-floating mb-4">
                                <input class="form-control" id="typePasswordX-2" type="password" placeholder="Mật khẩu"/>
                                <label for="typePasswordX-2">Mật khẩu</label>
                                </div>

                                <div className="form-check d-flex justify-content-between mb-4">
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" for="form1Example3"> Remember password </label>
                                    </div>
                                    <a href="#">Register!</a>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;