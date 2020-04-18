import React from 'react'

class FilterWindow extends React.Component
{
  constructor(props)
  {
      super(props);
  }

  // Search bar
  handleChangeSearchBar(e)
  {
    console.log(e.target.value)
  }

  onSubmitSearchBar(e)
  {
    e.preventDefault()
  }

  // Drop down
  state = { selectedValue: "sortByRating" };

  handleSelectValue = event => 
  {
    this.setState
    ({
      selectedValue: event.target.value
    });
  };

// Checkboxes
  handleInputChange(event) 
  {
    const target = event.target;
    const newLocal = 'male';
    if(target.name === "male")
    {
      console.log(target.checked + " male")
    }
    if(target.name === "female")
    {
      console.log(target.checked + " female")
    }
    if(target.name === "other")
    {
      console.log(target.checked + " other")
    }
  };

  render()
  {
    return (
      <div className="sidebar-navigation">
        
        <div className="search-bar">
        <form onSubmit={e => this.onSubmitSearchBar(e)}>
          <input
            type="search-bar"
            className="input"
            id="addInput"
            placeholder="Search your loo..."
            onChange={e => this.handleChangeSearchBar(e)}
          />
          <button submit="submit">Search</button>
        </form>
        </div>
      
      <div className="checkboxes">
      <form>
        Male
        <input
          name="male"
          type="checkbox"
          checked={this.state.male}
          onChange={this.handleInputChange} />
        Female
        <input
          name="female"
          type="checkbox"
          checked={this.state.male}
          onChange={this.handleInputChange} />
        Other
        <input
          name="other"
          type="checkbox"
          checked={this.state.male}
          onChange={this.handleInputChange} />
      </form>
      </div>
      
      <div className="drop-down">
          <select
          value = { this.state.selectedValue }
          onChange = { this.handleSelectValue }
          id="sortByRating"
          >
            <option value="sortByRating">Sort by Rating</option>
            <option value="1 Star">1 Star</option>
            <option value="2 Star">2 Star</option>
            <option value="3 Star">3 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="5 Star">5 Star</option>
          </select>
          <button type="button">Apply Filters</button>
        </div>

      </div>
    )
  }
}

export default FilterWindow