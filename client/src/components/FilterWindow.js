import React from 'react'

class FilterWindow extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = 
      { 
        // Search bar
        searchInput : "",

        // Gender Checkboxes
        isMale : false,
        isFemale : false,
        isOther : false,

        // Amenities Checkboxes
        isAdaAccessible : false,
        isFeminineHygiene : false,
        isDoorCode : false,
        isContraceptives : false,
        isFamily : false,

        // Star rating
        selectedValue : "SortByRating",
        isStarRating : null,
      }
  }

  // Search bar
  handleSearchBar = e =>
  {
    this.setState({searchInput : e.target.value})
    console.log(e.target.value)
  }

  onSubmitSearchBar = e =>
  {
    e.preventDefault()
    console.log(this.state.searchInput)
  }

  // Gender Checkboxes
  handleGenderCheckboxChange = e =>
  {
    const target = e.target;
    if(target.name === "male")
    {
      console.log(target.checked + " male")
      this.setState({isMale : true})
    }
    if(target.name === "female")
    {
      console.log(target.checked + " female")
      this.setState({isFemale : true})
    }
    if(target.name === "other")
    {
      console.log(target.checked + " other")
      this.setState({isOther : true})
    }
  };

  // Amenities Checkboxes
  handleAmenitiesCheckboxes = e =>
  {
    const target = e.target;
    if(target.name === "adaAccessible")
    {
      console.log(target.checked + " adaAccessible")
      this.setState({isAdaAccessible : true})
    }
    if(target.name === "feminineHygiene")
    {
      console.log(target.checked + " feminineHygiene")
      this.setState({isFeminineHygiene : true})
    }
    if(target.name === "doorCode")
    {
      console.log(target.checked + " doorCode")
      this.setState({isDoorCode : true})
    }
    if(target.name === "contraceptives")
    {
      console.log(target.checked + " contraceptives")
      this.setState({isContraceptives : true})
    }
    if(target.name === "family")
    {
      console.log(target.checked + " family")
      this.setState({isFamily : true})
    }
  }

  // Drop down
  handleDropDownValue = e => 
  {
    this.setState
    ({
      selectedValue: e.target.value
    });
    console.log("You have submitted:", e.target.value);
  };

  // Apply filters
  applyFilters = e =>
  {
    e.preventDefault()
    console.log(this.state)
  }

  render()
  {
    return (
      /* Navigation Bar */
      <div className="sidebar-navigation">
        
        {/* Search Bar */}
        <div className="search-bar">
        <form onSubmit={e => this.onSubmitSearchBar(e)}>
          <input
            type="search-bar"
            className="input"
            id="addInput"
            placeholder="Search your loo..."
            onChange={e => this.handleSearchBar(e)}
          />
          <button submit="submit">Search</button>
        </form>
        </div>
      
      {/* Apply Filters Form */}
      <form onSubmit={e => this.applyFilters(e)}>

      {/* Gender Checkboxes */}
      <div className="gender-checkboxes">
        Male
        <input
          name="male"
          type="checkbox"
          checked={this.state.male}
          onChange={(e) => this.handleGenderCheckboxChange(e)} />
        Female
        <input
          name="female"
          type="checkbox"
          checked={this.state.male}
          onChange={(e) => this.handleGenderCheckboxChange(e)} />
        Other
        <input
          name="other"
          type="checkbox"
          checked={this.state.male}
          onChange={(e) => this.handleGenderCheckboxChange(e)} />
      </div>

      {/* Amenities Checkboxes */}
      <div className="amenities-checkboxes">
        Ada Accessible
        <input
          name="adaAccessible"
          type="checkbox"
          checked={this.state.adaAccessible}
          onChange={(e) => this.handleAmenitiesCheckboxes(e)} />
        Feminine Hygiene
          <input
          name="feminineHygiene"
          type="checkbox"
          checked={this.state.feminineHygiene}
          onChange={(e) => this.handleAmenitiesCheckboxes(e)} />
        Door Code
        <input
          name="doorCode"
          type="checkbox"
          checked={this.state.doorCode}
          onChange={(e) => this.handleAmenitiesCheckboxes(e)} />
        Contraceptives
        <input
          name="contraceptives"
          type="checkbox"
          checked={this.state.contraceptives}
          onChange={(e) => this.handleAmenitiesCheckboxes(e)} />
        Family
        <input
          name="family"
          type="checkbox"
          checked={this.state.family}
          onChange={(e) => this.handleAmenitiesCheckboxes(e)} />
      </div>


      {/* Star Ratings Drop Down Menu */}
      <div className="drop-down">
        <select
        value = { this.state.selectedValue }
        onChange = {(e) => this.handleDropDownValue(e) }
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

      {/* Apply Filters Button */}
      <button type="submit">Apply Filters</button>
      </form>
      </div>
    )
  }
}

export default FilterWindow