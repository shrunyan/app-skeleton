<gravatar>
  <img class="avatar" src="https://www.gravatar.com/avatar/{this.hash}?s=30&r=pg" width="30" height="30" />
  <script type="es6">
    import {md5} from 'blueimp-md5'
    this.on('update', () => {
      this.hash = md5(opts.email.trim().toLowerCase())
    })
  </script>
</gravatar>
