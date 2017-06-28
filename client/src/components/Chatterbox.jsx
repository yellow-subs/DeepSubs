import React from 'react';

class Chatterbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
    };
  }

  onSubmit() {
    this.setState({
      messages: '',
    })
  }

  render() {
    return (
      <div>
        <form>
          <input id="textbox" type="textarea" />
          <button type="submit" id="enter">Send Message</button>
        </form>
      </div>
    )
  }
}

export default Chatterbox;
