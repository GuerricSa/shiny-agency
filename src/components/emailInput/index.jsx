import { Component } from 'react'

class emailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    // eslint-disable-next-line no-undef
    updateInputValue = (value) => {
      this.setState({ inputValue: value })
    }
  }

  render() {
    const { theme } = this.props
    return(
      <div>
        <input
          onChange={(e) => this.updateInputValue(e.target.value)}
        />
      </div>

    )
  }
}

export default emailInput
