import parse from 'html-react-parser'

export default function Article({post}) {
    return(
        <div>
            <article className="blog-post">
                <h2 className="blog-post-title">{post.judul}</h2>
                <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

                {parse(post.body)}
            </article>
        </div>
    )
}