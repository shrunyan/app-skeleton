import fetch from 'isomorphic-fetch'

export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

export function selectReddit (reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

export function invalidateReddit (reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}

export function fetchRedditPosts (reddit) {
  return {
    type: FETCH_POSTS_REQUEST,
    reddit
  }
}

export function receivePosts(reddit, json) {
  return {
    type: FETCH_POSTS_SUCCESS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts (reddit) {
  return function (dispatch) {
    dispatch(fetchRedditPosts(reddit))

    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(receivePosts(reddit, json))
      })
  }
}

export function shouldFetchPosts(state, reddit) {
  const posts = state.reddit.posts[reddit]
  if (!posts) {
    return true
  }
  else if (posts.isFetching) {
    return false
  }
  else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded (reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }
    else {
      return Promise.resolve()
    }
  }
}
