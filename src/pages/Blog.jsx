import { blogPosts } from '../constants'

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map(post => (
            <li key={post.id} className="blog-post-item">
              <a href={post.link}>
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.dateDisplay}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
