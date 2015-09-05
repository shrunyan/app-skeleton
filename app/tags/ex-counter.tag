<ex-counter>
  <h2>Redux State Example: Counter</h2>
  <p>Count: {opts.count || 0}</p>
  <button class="btn" onclick={this.increment}>Increment</button>
  <button class="btn" onclick={this.decrement}>Decrement</button>

  <script type="es6">
    this.increment = () => opts.store.dispatch({type: "INCREMENT", payload: 1})
    this.decrement = () => opts.store.dispatch({type: "DECREMENT", payload: 1})
  </script>
</ex-counter>
