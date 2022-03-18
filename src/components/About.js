import React from 'react';
import './_About.scss'

class About extends React.PureComponent {
  render() {
    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red" />
            <div className="header-button yellow" />
            <div className="header-button green" />
          </div>
          <div className="terminal-window">
            <Statements statements={this.props.statements} />
          </div>
        </div>
      </div>
    );
  }
}

class Statements extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.statements.map((statement, index) => {
          return <Statement statement={statement} key={index} />;
        })}
        <div className="statement">
          <div className="input-statement">
            <span className='statement-span'>&nbsp;</span>
          </div>
        </div>
      </div>
    );
  }
}

class Statement extends React.PureComponent {
  render() {
    return (
      <div className="statement">
        <div className="input-statement">{this.props.statement.input}</div>
        <div
          className="return-statement"
          dangerouslySetInnerHTML={{ __html: this.props.statement.return }}
        />
      </div>
    );
  }
}

export default About;
