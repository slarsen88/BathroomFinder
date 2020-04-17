import React from 'react'
import Checkbox from "./Checkbox.js"

const items = [
    'Male',
    'Female',
    'Family',
    'Other',
];

class FilterWindow extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }

      // Toggle check boxes.
      toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
      }
      
    //   handleFormSubmit = formSubmitEvent => {
    //     formSubmitEvent.preventDefault();
    //     for (const checkbox of this.selectedCheckboxes) {
    //       console.log(checkbox, 'is selected.');
    //     }
    //   }
      
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
    
      handleFormSubmit = formSubmitEvent => 
      {
        formSubmitEvent.preventDefault();
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
        // event.preventDefault();
        console.log("You have submitted:", this.state.selectedValue);
      };

    render()
    {
        return (
            <div className="content">
                <form onSubmit={this.handleFormSubmit}>
                <div className="search">
                    <input
                        type="text"
                        className="input"
                        id="addInput"
                        placeholder="Search your loo..."
                    />
                    <button className="button is-info" onClick={this.addItem}>Search</button>
                </div>
                
                <div className="hours">
                    <button>24 Hours</button>
                    <button>Open Now</button>
                    <button>Closed</button>
                </div>
                
                <div className="gender">
                    <div className="row">
                    <form onSubmit={this.handleFormSubmit}>                        
                        {this.createCheckboxes()}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>

                <div className="rating">
                    <div className="row">
                        <div className="form-group">
                            <select
                            value={this.state.selectedValue}
                            onChange={this.handleSelectValue}
                            className="form-control"
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                        {/* <button type="submit" className="btn btn-primary" disabled={this.state.selectedValue === "sortByRating"}>Submit</button> */}
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default FilterWindow