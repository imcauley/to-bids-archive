import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


export default function Post({ post }) {
    return (<div>
        <Paper elevation={3}>
            {post.title}
            <Divider />
            {post.data}
        </Paper>
    </div>)
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    // const res = await fetch(`https://.../posts/${params.id}`)
    // const post = await res.json()
    const post = {
        title: "test",
        data: "lots of text"
    }

    // Pass post data to the page via props
    return { props: { post } }
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    // const paths = posts.map((post) => ({
    //     params: { id: post.id },
    // }))

    const paths = [
        {
            params: { id: "1" }
        },
        {
            params: { id: "2" }
        }
    ]

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
