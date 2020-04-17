import React from 'react'
import Checkbox from "./Checkbox.js"


const items = [
    'one',
    'two',
    'three',
];

class FilterWindow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            list: [
                "Go to the store",
                "Wash the dishes",
                "Learn some code",
            ]
        }
    }

    componentWillMount = () => {
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

    render()
    {
        return (
            <div className="content">
                <div className="container">
                    <section className="section 1">
                        <form className="form" id="addItemForm">
                            <input
                                type="text"
                                className="input"
                                id="addInput"
                                placeholder="Search your loo..."
                            />
                            <button className="button is-info" onClick={this.addItem}>
                                Search
                            </button>
                        </form>
                    </section>
    
                    <section className="section 2">
                        <ul>
                            {this.state.list.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                        {this.createCheckboxes()}
                        <button className="btn btn-default" type="submit">Save</button>
                        </form>
                    </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default FilterWindow