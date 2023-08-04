function Login () {
    return (
        <div>
      <div class="login">
         <img src="https://tse2.mm.bing.net/th?id=OIP.G_k4JRBQ0LoJ6W0bBNL1_wHaGR&pid=Api&P=0&h=180" alt="login image" class="login__img" />
          <img src="https://tse4.mm.bing.net/th?id=OIP.8qydyh0kOSQtWrU9yfW7TgHaDD&pid=Api&P=0&h=180" alt="" />
         <form action="" class="login__form">
            <h1 class="login__title">Login</h1>

            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" required class="login__input" placeholder=" " />
                     <label for="" class="login__label">Email</label>
                  </div>
               </div>

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" placeholder=" "/>
                     <label for="" class="login__label">Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input"/>
                  <label for="" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button">Login</button>

            <p class="login__register">
               Don't have an account? <a href="#">Register</a>
            </p>
         </form>
      </div>
        </div>
    )
}

export default Login;