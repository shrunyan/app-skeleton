require('./gravatar.tag')
<account-menu id="networkAccount">
  <div class="user" onmouseover={show} onmouseout={hide}>
    <gravatar email={user.email} w={30} h={30}></gravatar>
    <span class="username">{user.first_name} {user.last_name} <span class="icon icon-caret-down"></span></span>
    <nav>
      <a href="https://accounts.gozesty.com/z/#!/sites/"><span class="icon icon-list-alt"></span>My Sites</a>
      <a href="https://accounts.gozesty.com/z/#!/account/profile/"><span class="icon icon-user"></span>My Profile</a>
      <a href="#" onclick={logout}><span class="icon icon-exit"></span>Logout</a>
    </nav>
  </div>
  <script type="es6">
    this.user = opts.store.getState().user

    this.on('mount', () => {
      opts.store.subscribe(() => {
        this.update({
          user: opts.store.getState().user
        })
      })
    })

    this.show= () => {
      clearTimeout(this.timeout)
      this.root.getElementsByTagName('nav')[0].style.display = 'block'
    }

    this.hide = () => {
      this.timeout = setTimeout(function cb () {
          this.root.getElementsByTagName('nav')[0].style.display = 'none'
      }.bind(this), 200)
    }

    this.logout = () => {
      // invalidate JWT
      alert('build logout')
    }

  </script>
</account-menu>
