import React from 'react';

class SearchBar extends React.Component{
    state={searchText:""};
    onSomeOneTypes=(typeEvent)=>{
        this.setState({searchText: typeEvent.target.value});
        console.log("USER SEARCHES: "     +this.state.searchText);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }

    callThisWhenSubmitted=(event)=>{
        event.preventDefault();
        //todo: make sure we call parent from parent component
        this.props.callThisInSearchBar(this.state.searchText);
    }

    render(){
        return <div className="search-bar ui segment">
                <form onSubmit= {this.callThisWhenSubmitted}className="ui form">
                    <div className="field">
                        <label> video search</label>
                        <input 
                        type="text" 
                        value={this.state.searchText}
                        onChange={this.onSomeOneTypes}/>
                    </div>
                </form>
                </div>;

    }
}

export default SearchBar;