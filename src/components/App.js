import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state={listOfVideos:[], selectedVideo: null}
    onTermSubmit=async (term)=>{
        console.log("Search text passed to App.js= "+term)
       const response=await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({listOfVideos : response.data.items})
    };

    onVideoSelect=video=>{
             console.log("in the app.js "+video)
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar callThisInSearchBar={this.onTermSubmit}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.listOfVideos}/>
        </div>
        );
    }
}

export default App;