import React,{Component} from 'react';
import Search from '../search/search';
import Main from '../main/main';

class App extends Component{

    state = {
        searchName : ''
    }

    setSearchName = (searchName) =>{
        this.setState({searchName});
    }

    render(){
        const {searchName} = this.state;
        return(
            <>
                <div className="container mt-5">
                    <Search setSearchName={this.setSearchName}/>
                    <Main searchName={searchName}/>
                </div>
            </>
        )
    }
}

export default App;