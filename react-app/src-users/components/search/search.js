import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component{

    static propTypes = {
        setSearchName : PropTypes.func.isRequired
    }

    handleSearch = ()=>{
        const searchName = this.input.value.trim();
        if(searchName){
            this.props.setSearchName(searchName);
        }
    }

    render(){
        return(
            <>
                <h3>Search Github Users</h3>
                <div className="input-group mb-3 mt-3 col-4">
                    <input type="text" className="form-control" placeholder="請輸入關鍵字查詢" aria-label="請輸入關鍵字查詢" aria-describedby="button-addon2"  ref={input => this.input=input}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Search;