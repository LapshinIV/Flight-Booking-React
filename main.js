var FlightNumbers = React.createClass({
	render: function(){
		return <ul className="flight">
					<div className="Flight-Number">{this.props.idFlightNumber}</div>
				</ul>
	}
}); 


var ListOfFlights = React.createClass({
	render: function(){	
		return (
			<div className="flight-numbers">Flight Numbers
				<ul className="flight-numbers-list">
					{
					 _.map(_.keys(listOfFlights), function(el){
					 	return <FlightNumbers 
				 				key={el}
				 				idFlightNumber={el}
					 			/>
					 }) 
					}	
				</ul>
			</div>
		);
	}
})


// =================================================================================================

var PassengersName = React.createClass({
	render: function(){
		return <ul className="container">
					<div className="Passengers-Name">{this.props.idPassengersName}</div>
				</ul>
	}
}); 


var ListOfPassengers = React.createClass({
	render: function(){	
		return (
			<div className="list-of-passengers">Passengers Name
				<ul>
					{
					 _.map(_.keys(listOfFlights), function(el){
					 	var showPassengersName = _.map(listOfFlights[el].passengers, function(passengers){				 						
					 	return <PassengersName 
			 				key={passengers.name}
			 				idPassengersName={passengers.name}
				 			/>
				 		})
				 		return showPassengersName;
					 }) 
					}	
				</ul>
			</div>
		);
	}
})
// =============================================================================================
var BookingNumbers = React.createClass({
	render: function(){
		return <ul className="container">
					<div className="Booking-Number">{this.props.idBookingNumber}</div>
				</ul>
	}
}); 


var ListOfFBooking = React.createClass({
	render: function(){	
		return (
			<div className="list-of-booking">Booking number
				<ul>
					{
					 _.map(_.keys(listOfFlights), function(el){
					 	var showBookingNumbers = _.map(listOfFlights[el].passengers, function(passengers){				 						
					 	return <PassengersName 
			 				key={passengers.name}
			 				idPassengersName={passengers.booking}
				 			/>
				 		})
				 		return showBookingNumbers;
					 }) 
					}	
				</ul>
			</div>
		);
	}
})


ReactDOM.render(
	<div>
	 	<ListOfFlights />
	 	<ListOfPassengers />
	 	<ListOfFBooking />
	</div>,
		document.getElementById('content')
	);