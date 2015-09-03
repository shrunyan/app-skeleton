// TODO DELETE: this is just a demo tag
<ex-set-email>
  <h2>Set User Email</h2>
  <p>Demonstrates an action which changes another components state</p>

  <div class="flex">
    <button class="btn addon-item-left" onclick={this.setUserEmail}>SET</button>
    <input class="addon-field" name="email" type="text" placeholder="Enter your email" />
  </div>

  <script type="es6">
    this.setUserEmail = () => {
      opts.store.dispatch({
        type: 'SET_USER_EMAIL',
        payload: this.email.value
      })
    }
  </script>
</ex-set-email>
