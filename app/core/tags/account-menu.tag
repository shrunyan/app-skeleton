<account-menu id="networkAccount">
  <div class="user" onmouseover={show} onmouseout={hide}>
    <img class="avatar" src="https://www.gravatar.com/avatar/67b0861a8ceba31dde42870daf058b27?s=30&amp;d=https://00f05b55ec7bdafd65e0-42d5676e5edfd805987c492c99fec8e1.ssl.cf2.rackcdn.com/avatar-placeholder.png&amp;r=pg" width="30" height="30" />
    <span class="username">Stuart Runyan <span class="icon icon-caret-down"></span></span>
    <nav>
      <a href="https://accounts.gozesty.com/z/#!/sites/"><span class="icon icon-list-alt"></span>My Sites</a>
      <a href="https://accounts.gozesty.com/z/#!/account/profile/"><span class="icon icon-user"></span>My Profile</a>
      <a href="#" onclick={logout}><span class="icon icon-exit"></span>Logout</a>
    </nav>
  </div>
  <script type="es6">
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
