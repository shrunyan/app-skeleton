require('../core/tags/form/z-select.tag')
require('../core/tags/loader-wave.tag')
<ex-reddit>
  <h2>Redux Async Example: Reddit API</h2>
  <z-select options={this.options} selected="riotjs" handler={changeReddit}></z-select>
  <loader-wave show={state.reddit.postsByReddit[state.reddit.selectedReddit].isFetching} width="100px" height="50px"></loader-wave>
  <ul>
    <li each={post, i in state.reddit.postsByReddit[state.reddit.selectedReddit].items} class="post">
      <a href="https://reddit.com{post.permalink}" target="_blank">{post.title}</a>
    </li>
  </ul>

  <script type="es6">
    import {
      selectReddit,
      fetchPostsIfNeeded,
      invalidateReddit
    } from '../actions/reddit'

    const { dispatch } = opts.store
    const state = opts.store.getState()

    this.on('mount', () => {
      dispatch(fetchPostsIfNeeded(state.reddit.selectedReddit))

      this.options = [
        {
          id: 'riotjs',
          text: 'Riot'
        },
        {
          id: 'reactjs',
          text: 'React'
        },
        {
          id: 'angular',
          text: 'Angular'
        }
      ]
    })

    this.changeReddit = (e) => {
      console.log('changeReddit', e);
      dispatch(selectReddit(e.target.value))
      dispatch(fetchPostsIfNeeded(e.target.value))
    }
  </script>
</ex-reddit>
