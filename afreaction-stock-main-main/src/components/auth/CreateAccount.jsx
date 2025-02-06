import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import ScriptLoader from "../util/ScriptLoader";

const CreateAccount = () => {
  return (
      <>
        <Header />

        {/* Sign In Section */}
        <section className="signin__section pt-60 pb-120">
          <div className="container">
            <div className="signin__wrapper">
              <div className="row g-4 flex-row-reverse">
                <div className="col-xxl-4 col-xl-5 col-lg-5">
                  <div className="signin__content">
                    <h2 className="mb-60">Create Account</h2>
                    <form action="#0">
                      <input type="text" className="form__input mb-20 tcapi" placeholder="User name" />
                      <input type="email" className="form__input mb-20 tcapi" placeholder="Email address" />
                      <input type="password" className="form__input mb-20 tcapi" placeholder="Enter password" />
                      <input type="password" className="form__input tcapi" placeholder="Confirm password" />
                      <span className="fz-16 fw-500 bodyfont text-center pt-40 pb-40 d-block">Or</span>
                      <a href="#0" className="google__box fz-16 mb-16 fw-700 title d-flex align-items-center">
                        <img
                            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                            alt="Google"
                        />
                        Continue with Google
                      </a>
                      <a href="#0" className="google__box fz-16 mb-16 fw-700 title d-flex align-items-center">
                        <img src="/assets/img/other/facebook.png" alt="img" />
                        Continue with Facebook
                      </a>
                      <div className="form-check d-flex align-items-center gap-2 mt-30 mb-40">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="terms"
                            id="dradio"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="dradio">
                          I accept your terms & conditions
                        </label>
                      </div>
                      <button type="submit" className="cmn--btn login border-0">
                        <span>Create Account</span>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xxl-8 col-xl-7 col-lg-7">
                  <div className="signin__thumb creation__thumb">
                    <div className="signcreat d-flex justify-content-end align-items-center gap-2">
                      <a href="#0" className="cmn--btn">
                        <span>Create Account</span>
                      </a>
                      <a href="#0" className="white__btn">
                        <span>Sign In</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        {/*<ScriptLoader src="/js/jquery-3.7.0.min.js" />*/}
        {/*<ScriptLoader src="/js/viewport.jquery.js" />*/}
        {/*<ScriptLoader src="/js/plugin.js" />*/}
        {/*<ScriptLoader src="/js/main.js" />*/}
      </>
  );
};

export default CreateAccount;
