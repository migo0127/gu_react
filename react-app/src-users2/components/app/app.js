import React,{Component} from 'react';
import Search from '../search/search';
import Main from '../main/main';

class App extends Component{

    render(){
        return(
            <>
                <div className="container mt-5">
                    <Search />
                    <Main />
                </div>
            </>
        )
    }
}

export default App;