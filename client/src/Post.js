import thumbnail from "./img/mindfulness.jpg";

export default function Post() {
    return(
        <div className="post">
        <div className="image">
          <img src={thumbnail} alt="post thumbnail" />
        </div>
  
        <div className="texts">
          <h2>
            The Power of Mindfulness: How Practicing Mindfulness Can Transform
            Your Life
          </h2>
          <p className="info">
            <a className="author">Senesh Anujaya</a>
            <time>2024-04-01 2.38</time>
          </p>
          <p className="summary">
            In today's fast-paced world, it's easy to get caught up in the chaos
            of everyday life, leaving us feeling stressed, overwhelmed, and
            disconnected. However, amidst the hustle and bustle, there lies a
            powerful tool that can help us find peace and clarity: mindfulness.
          </p>
        </div>
      </div>
    );
}