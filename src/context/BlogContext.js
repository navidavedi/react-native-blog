import createDataContext from './createDataContext'

const blogReducer = ( state, action ) => {
    switch (action.type) {
        case 'add_blogposts':
            return [...state, { title: `Blog number ${state.length +1}` }];
        default:
            return state;
    }
}

const addBlogPost = ( dispatch ) => {
    return () => {
        dispatch({ type: 'add_blogposts' })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost },
    []
)