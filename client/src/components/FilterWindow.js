import React from 'react'
import Checkbox from "./Checkbox.js"
import './FilterWindow.css'

const items = [
    'Male',
    'Female',
    'Other',
];

class FilterWindow extends React.Component
{
  constructor(props)
  {
      super(props);
  }

  componentDidMount = () => {
      this.selectedCheckboxes = new Set();
    }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  state = {
    selectedValue: "sortByRating"
  };

  handleSelectValue = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  handleChange(e)
  {
    console.log("hey betch");
  }

  onSubmit(e)
  {
    e.preventDefault()
    console.log("hey betch?")
  }

  render()
  {
    return (
      <div className="sidenav">
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="container">
            <input
              type="search-bar"
              className="input"
              id="addInput"
              placeholder="Search your loo..."
            />
            <button submit="submit">Search</button>
          </div>
          </form>

          <div className="check-boxes">
            <div className="col-sm-12">
              {this.createCheckboxes()}
            </div>
          </div>
          
          <div className="container">
            <div className="container">
              <select
              value={this.state.selectedValue}
              onChange={this.handleSelectValue}
              id="sortByRating"
              >
                <option value="sortByRating">Sort by Rating</option>
                <option value="1 Star">1 Star</option>
                <option value="2 Star">2 Star</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
              </select>
            </div>
          </div>
          <button type="button">Apply Filters</button>
      </div>
    )
  }
}

export default FilterWindow