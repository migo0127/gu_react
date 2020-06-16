import React,{Component} from 'react';
import PropTypes from 'prop-types';

// import './home-instruments.scss';

class HomeInstruments extends Component{

    state = {
        items : [
             {instrument:'長笛',instrumenEng:'Flute',card:'home-instruments-card col-md-3 home-instruments-flute'},
             {instrument:'',card:'home-instruments-card col-md-4 home-instruments-index'},
             {instrument:'爵士鼓',instrumenEng:'Drum',card:'home-instruments-card col-md-5 home-instruments-drum'},
             {instrument:'吉他',instrumenEng:'Guitar',card:'home-instruments-card col-md-4 home-instruments-guitar'},
             {instrument:'烏可麗麗',instrumenEng:'Ukulele',card:'home-instruments-card col-md-4 home-instruments-ukulele'},
             {instrument:'鋼琴',instrumenEng:'Piano',card:'home-instruments-card col-md-4 home-instruments-piano'},
             {instrument:'中提琴',instrumenEng:'Viola',card:'home-instruments-card col-md-4 home-instruments-violin_m'},
             {instrument:'電子琴',instrumenEng:'Keyboard',card:'home-instruments-card col-md-3 home-instruments-Keyboard'},
             {instrument:'小提琴',instrumenEng:'Violin',card:'home-instruments-card col-md-4 home-instruments-violin'},
             {instrument:'薩克斯風',instrumenEng:'Saxophone',card:'home-instruments-card col-md-5 home-instruments-Saxophone'},
         ]
     };


        render(){
            const {items} = this.state;
        return(
            <div className="home-instruments-wrap container-fluid">
                <div className="container home-instruments-title">
                    <h1 className="home-instruments-title-en">Instruments</h1>
                    <p className="home-instruments-title-ch container">樂器</p>
                </div>
                <div className="home-instruments-body">
                    <div className="row home-instruments-row">
                        {
                            items.map((item,index)=> (
                                <div key={index} className={item.card}>
                                    <p className="home-instruments-txt">{item.instrumenEng}</p>
                                    <p className="home-instruments-txt2">{item.instrument}</p>
                                    <span></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeInstruments;
