var ListOfFlights = [
{
	flightNumber: "AB1322", 
	passengers: [ 
			{
				"name":     "Dmitry Kouznetsov",
				"booking":  "ABCDEF"
			},
			{
				"name":     "Natalia Shteinikova", 
				"booking":  "ABCDEF"
			}, 
	] 
}, 
{ 
	flightNumber: "CD224",
	passengers: [ 
			{
				"name":     "Alex Emshanov",
				"booking":  "ADADADAD"
			},
			{
				"name":     "Alexandra Emshanova",
				"booking":  "ADADADAD"
			},
		 {
				"name":     "Avrora Emshanova",
				"booking":  "ADADADAD"
			},
	] 
}, 
{ 
	flightNumber: "QR335", 
	passengers: [ 
			{
				"name":     "Ivan Lapshin",
				"booking":  "QWERT"
			},
			{
				"name":     "Macaw Macaw",
				"booking":  "QWERT"
			},
			{
				"name": "Macaw1 Macaw1",
				"booking":  "QWERT"
			},
	] 
},
{ 
	flightNumber: "BB554", 
	passengers: [ 
			{
				"name":     "Parrot",
				"booking":  "TYY"
			},
			{
				"name":     "Monkey",
				"booking":  "TYY"
			},
			{
				"name": "Piton",
				"booking":  "TYY"
			},
			{
				"name": "Elephan",
				"booking":  "TYY"
			},
	] 
}  
]



ListOfFlights.map(function(el){
	el.passengers.map(function(el1){
		console.log(el1.name)
	
	})
})