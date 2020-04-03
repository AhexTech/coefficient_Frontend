/**
 * Created by avishek on 12/3/20.
 */


(function(){
	// your code here...


	// A simple scatterplot for APIs demo

	// The Model

	var model = raw.model();

	// X axis dimension
	// Adding a title to be displayed in the UI
 	// and limiting the type of data to Numbers only
	var x = model.dimension()
		.title('X Axis')
		.types(Number)

	// Y axis dimension
	// Same as X
	var y = model.dimension()
		.title('Y Axis')
		.types(Number)

	// Mapping function
	// For each record in the data returns the values
	// for the X and Y dimensions and casts them as numbers
	model.map(function (data){
		return data.map(function (d){
			return {
				x : +x(d),
				y : +y(d)
			};
		});
	})

	
    	// The Chart

	var chart = raw.chart()
		.title("Line Chart")
		.description("A simple Line chart for test")
        .category("Custom")
		.thumbnail("imgs/LineChart.png")
		.model(model)

	// Some options we want to expose to the users
	// For each of them a GUI component will be created
	// Options can be use within the Draw function
	// by simply calling them (i.e. witdh())
	// the current value of the options will be returned

	// Width
	var width = chart.number()
		.title('Width')
		.defaultValue(600)

	// Height
	var height = chart.number()
		.title('Height')
		.defaultValue(400)

	// A simple margin
	var margin = chart.number()
		.title('margin')
		.defaultValue(10)



	// Drawing function
	// selection represents the d3 selection (svg)
	// data is not the original set of records
	// but the result of the model map function
	chart.draw(function (selection, data){

		// svg size
		selection
			.attr("width", width())
			.attr("height", height())
			.append("g")


		// x and y scale
		var xScale = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.x; }))
      .range([ 0, width ]);
    selection.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

		var yScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.y; })])
      .range([ height, 0 ]);
    selection.append("g")
      .call(d3.axisLeft(yScale));

		// let's plot the dots!
		selection.append("path")
			.data(data)
			.attr("fill", "none")
      		.attr("stroke", "steelblue")
			.attr("stroke-width", 1.5)
			.attr("d", d3.line()
        		.xScale(function(d) { return xScale(d.x) })
        		.yScale(function(d) { return yScale(d.y) })
        		)

	})


})();


Join Zoom Meeting
https://us04web.zoom.us/j/273527659?pwd=QXRINUJnckZ5WkNsQmRXSnhxL0x2QT09

Meeting ID: 273 527 659
Password: 197755










