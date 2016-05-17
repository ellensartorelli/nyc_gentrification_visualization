var createMetric = function(parent) {

		var color = d3.scale.ordinal(metricList.map(function(d){return d.abbr}))
					.range(["#6baed6", "#74c476", "#9e9ac8", "#fd8d3c", "#fb6a4a", "#969696"]);
					//blue:mhinc, green:pcol, purple:mhval, oragne:black, red:white, black:rent


		var legend =d3.selectAll(parent)
			.append("ul")
			.attr("id", "legend");

		var list_item = legend.selectAll("ul")
			.data(metricList)
			.enter()
		 	.append("li");

		list_item.append("span")
			.style({
				"padding-left":"11px",
				"margin-right":"3px",
				"background-color":function(d){
					return color(d.abbr);
				}
			});

		var box = list_item.append("input")
			.attr({
				"type": "radio",
				"value": function(d){
					return d.name;
				},
				"id": function(d) {return d.abbr;},
				"name": "metricToMap"
			})
			.on("change", function(){
					console.log(this.value+" is checked");
					//SEND THIS VALUE TO SET THE METRIC TO BE DISPLAYED ON THE MAP
					//SEND THIS VALUE TO HIGHLIGHT LINE IN LINE GRAPH
					//SENT THIS VALUE TO BE HIGHLIGHTED BAR IN BAR CHART
					metric = this.id;
					recolorMap();
			});


		list_item.append("span")
			.text(function(d){return d.name;});

};
