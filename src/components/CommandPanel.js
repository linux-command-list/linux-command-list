import React from "react";

export default class CommandPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.author,
      title: this.props.title,
      command: this.props.command,
      usage: this.props.usage,
      description: this.props.description,
      keywords: this.props.kewords,
      score: this.props.score,
      category: this.props.category
    };
  }

  render() {
    return (
      <article
        v-for="command in filteredList"
        class="command col-xs-12 col-sm-6 col-md-3"
      >
        <div class="command-card">
          <div>
            <h3>{this.props.title}</h3>
          </div>
          <h3>
            <pre>
              <code class="hl">{this.props.usage}</code>
            </pre>
          </h3>
          <div>
            <pre class="description">{this.props.description}</pre>
          </div>
          <div>
            <p>
              <pre>
                <code>{this.props.command}</code>
              </pre>
            </p>
          </div>
        </div>
      </article>
    );
  }
}
