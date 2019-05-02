import React, {Component} from "react"
import GoogleMap from "../components/Map";
import PopUp from "../components/PopUp";
import InfoContainer from "../components/InfoContainer";

class IndexPage extends Component{

	constructor(props){
		super(props);
		this.state = {
			selectedCountry: {},
			data: {},
			popUp: false,
			error: {} // error not handled on screen
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData(){
		const url = "https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json";
		try{
			const resp = await fetch(url);
			const data = await resp.json();
			// console.log("data in fetch:", data);
			this.setState({ data });
		}
		catch(err){
			this.setState({
				error: err
			})
		}
	}


	pinOnClickHandler = (e) => {
    const {clientX, clientY } = e;
		const eTarget = e.target;
    const location = eTarget.getAttribute("data-name");
    const { data } = this.state;
		this.setState({
			selectedCountry : {
        name: data.filter(obj => obj.name === location)[0].name,
        position: {
          clientX,
          clientY
        }
      },
      popUp: true
		});
	}

  closePopup = () => {
    this.setState({
      selectedCountry: {},
      popUp: false
    })
  }

	render(){
		const { popUp, selectedCountry, data } = this.state;
    console.log("d:", data.length, selectedCountry);
		return(
			  <div className="container">
  			  { data.length ?
      <GoogleMap pinData = {data} selectedCountry={selectedCountry} onClickHandler={this.pinOnClickHandler}/>
      : "Loading..." }
          { popUp &&
            <PopUp countryData={data.find(node => node.name === selectedCountry.name)}
              selectedCountry={selectedCountry}
              onClickHandler={this.closePopup} />
          }
          <InfoContainer data={data} selected={selectedCountry.name} />
    		</div>
    );
	}

}

export default IndexPage
