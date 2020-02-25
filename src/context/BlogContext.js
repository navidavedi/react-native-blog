import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogposts':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
        case 'remove_blogpost':
            return state.filter(post => post.id !== action.payload);
        case 'edit_blogpost':
            return state.map(post => post.id === action.payload.id ? action.payload : post);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => (
    (title, content, callback) => {
        dispatch({ type: 'add_blogposts', payload: { title, content } });
        callback()
    }
)

const removeBlogPost = (dispatch) => (
    (id) => dispatch({ type: 'remove_blogpost', payload: id })
)

const editBlogPost = (dispatch) => (
    (id, title, content, callback) => {
        dispatch(
            {
                type: 'edit_blogpost',
                payload: { id, title, content }
            });
        callback()
    }
)

export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        removeBlogPost,
        editBlogPost
    },
    [{ title: 'dude', content: 'content', id: 12 }]
)